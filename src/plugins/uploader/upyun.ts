import crypto from 'crypto'
import { lookup } from 'mime-types'

import { IBuildInEvent } from '../../utils/enum'
import { ILocalesKey } from '../../i18n/zh-CN'
import { safeParse } from '../../utils/common'

import { encodePath, formatPathHelper } from './utils'
import { IPicGo, IPluginConfig, IUpyunConfig, IOldReqOptionsWithFullResponse } from '../../types'

// generate COS signature string
const generateSignature = (options: IUpyunConfig, fileName: string): string => {
  const path = options.path || ''
  const operator = options.operator
  const password = options.password
  const md5Password = MD5(password)
  const date = new Date().toUTCString()
  const uri = `/${options.bucket}/${encodePath(`${path}${fileName}`)}`
  const value = `PUT&${uri}&${date}`
  const sign = crypto.createHmac('sha1', md5Password).update(value).digest('base64')
  return `UPYUN ${operator}:${sign}`
}

const postOptions = (
  options: IUpyunConfig,
  fileName: string,
  signature: string,
  image: Buffer
): IOldReqOptionsWithFullResponse => {
  const bucket = options.bucket
  const path = options.path
  let endpoint = (options.endpoint || 'https://v0.api.upyun.com').replace(/\/+$/g, '')
  if (!endpoint.startsWith('http')) {
    endpoint = `https://${endpoint}`
  }
  return {
    method: 'PUT',
    url: `${endpoint}/${bucket}/${encodePath(`${path}${fileName}`)}`,
    headers: {
      Authorization: signature,
      Date: new Date().toUTCString(),
      'Content-Type': lookup(fileName) || 'application/octet-stream'
    },
    body: image,
    resolveWithFullResponse: true
  }
}

function MD5(content: string): string {
  return crypto.createHash('md5').update(content).digest('hex')
}

const getAntiLeechParam = (
  antiLeechToken: string,
  expireTime: string | number | undefined,
  options: IUpyunConfig,
  fileName: string
): string => {
  const uri = `/${options.path || ''}${fileName}`.replace(/%2F/g, '/').replace(/^\/+/g, '/')
  const now = Math.round(new Date().getTime() / 1000)
  const expire = expireTime ? now + parseInt(expireTime.toString(), 10) : now + 1800
  const sign = MD5(`${antiLeechToken}&${expire}&${uri}`)
  const upt = `${sign.substring(12, 20)}${expire}`
  return `_upt=${upt}`
}

const handle = async (ctx: IPicGo): Promise<IPicGo> => {
  const upyunOptions = ctx.getConfig<IUpyunConfig>('picBed.upyun')
  if (!upyunOptions) {
    throw new Error("Can't find upYun config")
  }
  try {
    const imgList = ctx.output
    const path = formatPathHelper({ path: upyunOptions.path })
    upyunOptions.path = path
    for (const img of imgList) {
      if (img.fileName && img.buffer) {
        let image = img.buffer
        if (!image && img.base64Image) {
          image = Buffer.from(img.base64Image, 'base64')
        }
        const signature = generateSignature(upyunOptions, img.fileName)
        const options = postOptions(upyunOptions, img.fileName, signature, image)
        const suffix = upyunOptions.options || ''
        const body = await ctx.request(options)
        if (body.statusCode === 200) {
          delete img.base64Image
          delete img.buffer
          img.imgUrl = `${upyunOptions.url}/${encodePath(`${path}${img.fileName}`)}${suffix}`
          if (upyunOptions.antiLeechToken) {
            const upt = getAntiLeechParam(
              upyunOptions.antiLeechToken,
              upyunOptions.expireTime,
              upyunOptions,
              img.fileName
            )
            img.imgUrl = img.imgUrl.includes('?') ? `${img.imgUrl}&${upt}` : `${img.imgUrl}?${upt}`
          }
        } else {
          throw new Error('Upload failed')
        }
      }
    }
    return ctx
  } catch (err: any) {
    if (err.message === 'Upload failed') {
      ctx.emit(IBuildInEvent.NOTIFICATION, {
        title: ctx.i18n.translate<ILocalesKey>('UPLOAD_FAILED'),
        body: ctx.i18n.translate<ILocalesKey>('CHECK_SETTINGS')
      })
    } else {
      const body = safeParse<{ code: string }>(err.error)
      ctx.emit(IBuildInEvent.NOTIFICATION, {
        title: ctx.i18n.translate<ILocalesKey>('UPLOAD_FAILED'),
        body: ctx.i18n.translate<ILocalesKey>('UPLOAD_FAILED_REASON', {
          code: typeof body === 'object' ? body.code : body
        }),
        text: 'http://docs.upyun.com/api/errno/'
      })
    }
    throw err
  }
}

const config = (ctx: IPicGo): IPluginConfig[] => {
  const userConfig = ctx.getConfig<IUpyunConfig>('picBed.upyun') || {}
  const config: IPluginConfig[] = [
    {
      name: 'bucket',
      type: 'input',
      get prefix() {
        return ctx.i18n.translate<ILocalesKey>('PICBED_UPYUN_BUCKET')
      },
      get alias() {
        return ctx.i18n.translate<ILocalesKey>('PICBED_UPYUN_BUCKET')
      },
      default: userConfig.bucket || '',
      required: true
    },
    {
      name: 'operator',
      type: 'input',
      get prefix() {
        return ctx.i18n.translate<ILocalesKey>('PICBED_UPYUN_OPERATOR')
      },
      get alias() {
        return ctx.i18n.translate<ILocalesKey>('PICBED_UPYUN_OPERATOR')
      },
      get message() {
        return ctx.i18n.translate<ILocalesKey>('PICBED_UPYUN_MESSAGE_OPERATOR')
      },
      default: userConfig.operator || '',
      required: true
    },
    {
      name: 'password',
      type: 'input',
      get prefix() {
        return ctx.i18n.translate<ILocalesKey>('PICBED_UPYUN_MESSAGE_PASSWORD')
      },
      get alias() {
        return ctx.i18n.translate<ILocalesKey>('PICBED_UPYUN_PASSWORD')
      },
      get message() {
        return ctx.i18n.translate<ILocalesKey>('PICBED_UPYUN_MESSAGE_PASSWORD')
      },
      default: userConfig.password || '',
      required: true
    },
    {
      name: 'url',
      type: 'input',
      get prefix() {
        return ctx.i18n.translate<ILocalesKey>('PICBED_UPYUN_URL')
      },
      get alias() {
        return ctx.i18n.translate<ILocalesKey>('PICBED_UPYUN_URL')
      },
      get message() {
        return ctx.i18n.translate<ILocalesKey>('PICBED_UPYUN_MESSAGE_URL')
      },
      default: userConfig.url || '',
      required: true
    },
    {
      name: 'options',
      type: 'input',
      get prefix() {
        return ctx.i18n.translate<ILocalesKey>('PICBED_UPYUN_OPTIONS')
      },
      get alias() {
        return ctx.i18n.translate<ILocalesKey>('PICBED_UPYUN_OPTIONS')
      },
      get message() {
        return ctx.i18n.translate<ILocalesKey>('PICBED_UPYUN_MESSAGE_OPTIONS')
      },
      default: userConfig.options || '',
      required: false
    },
    {
      name: 'path',
      type: 'input',
      get prefix() {
        return ctx.i18n.translate<ILocalesKey>('PICBED_UPYUN_PATH')
      },
      get alias() {
        return ctx.i18n.translate<ILocalesKey>('PICBED_UPYUN_PATH')
      },
      get message() {
        return ctx.i18n.translate<ILocalesKey>('PICBED_UPYUN_MESSAGE_PATH')
      },
      default: userConfig.path || '',
      required: false
    },
    {
      name: 'antiLeechToken',
      type: 'input',
      get prefix() {
        return ctx.i18n.translate<ILocalesKey>('PICBED_UPYUN_ANTI_LEECH_TOKEN')
      },
      get alias() {
        return ctx.i18n.translate<ILocalesKey>('PICBED_UPYUN_ANTI_LEECH_TOKEN')
      },
      get message() {
        return ctx.i18n.translate<ILocalesKey>('PICBED_UPYUN_ANTI_LEECH_TOKEN')
      },
      default: userConfig.antiLeechToken || '',
      required: false
    },
    {
      name: 'expireTime',
      type: 'input',
      get prefix() {
        return ctx.i18n.translate<ILocalesKey>('PICBED_UPYUN_EXPIRE_TIME')
      },
      get alias() {
        return ctx.i18n.translate<ILocalesKey>('PICBED_UPYUN_EXPIRE_TIME')
      },
      get message() {
        return ctx.i18n.translate<ILocalesKey>('PICBED_UPYUN_EXPIRE_TIME')
      },
      default: userConfig.expireTime || '',
      required: false
    },
    {
      name: 'endpoint',
      type: 'input',
      get prefix() {
        return ctx.i18n.translate<ILocalesKey>('PICBED_UPYUN_ENDPOINT')
      },
      get alias() {
        return ctx.i18n.translate<ILocalesKey>('PICBED_UPYUN_ENDPOINT')
      },
      get message() {
        return ctx.i18n.translate<ILocalesKey>('PICBED_UPYUN_MESSAGE_ENDPOINT')
      },
      default: userConfig.endpoint || 'https://v0.api.upyun.com',
      required: false
    }
  ]
  return config
}

export default function register(ctx: IPicGo): void {
  ctx.helper.uploader.register('upyun', {
    get name() {
      return ctx.i18n.translate<ILocalesKey>('PICBED_UPYUN')
    },
    handle,
    config
  })
}
