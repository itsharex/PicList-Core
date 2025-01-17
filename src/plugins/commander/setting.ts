import { IPicGo, IPluginConfig, IStringKeyMap } from '../../types'
import compress from '../beforetransformer/compress'
import watermark from '../beforetransformer/watermark'
import rename from '../beforeupload/buildInRename'

// handle modules config -> save to picgo config file
const handleConfig = async (ctx: IPicGo, prompts: IPluginConfig[], module: string, name: string): Promise<void> => {
  const answer = await ctx.cmd.inquirer.prompt(prompts)
  const configName =
    module === 'uploader'
      ? `picBed.${name}`
      : module === 'transformer'
        ? `transformer.${name}`
        : module === 'buildin'
          ? `buildIn.${name}`
          : name
  ctx.saveConfig({
    [configName]: answer
  })
  if (module === 'uploader') {
    ctx.saveConfig({
      'picBed.current': name,
      'picBed.uploader': name
    })
  } else if (module === 'transformer') {
    ctx.saveConfig({
      'picBed.transformer': name
    })
  }
}

const setting = {
  handle: (ctx: IPicGo) => {
    const cmd = ctx.cmd
    cmd.program
      .command('set')
      .alias('config')
      .arguments('<module> [name]')
      .description('configure config of picgo modules, uploader|transformer|plugin|buildin')
      .action((module: string, name: string) => {
        ;(async () => {
          try {
            // // load third-party plugins
            // await ctx.pluginLoader.load()
            // if a module is specific, then just set this option in config
            switch (module) {
              case 'buildin':
                if (name === 'compress') {
                  await handleConfig(ctx, compress.config(ctx), module, name)
                } else if (name === 'watermark') {
                  await handleConfig(ctx, watermark.config(ctx), module, name)
                } else if (name === 'rename') {
                  await handleConfig(ctx, rename.config(ctx), module, name)
                } else {
                  const prompts = [
                    {
                      type: 'list',
                      name: 'buildin',
                      choices: ['compress', 'watermark', 'rename'],
                      message: 'Choose a buildin module'
                    }
                  ]
                  const answer = await ctx.cmd.inquirer.prompt<IStringKeyMap<any>>(prompts)
                  if (answer.buildin === 'compress') {
                    await handleConfig(ctx, compress.config(ctx), module, answer.buildin)
                  } else if (answer.buildin === 'watermark') {
                    await handleConfig(ctx, watermark.config(ctx), module, answer.buildin)
                  } else if (answer.buildin === 'rename') {
                    await handleConfig(ctx, rename.config(ctx), module, answer.buildin)
                  }
                }
                break
              case 'uploader':
              case 'transformer':
                if (name) {
                  const item = ctx.helper[module].get(name)
                  if (!item) {
                    ctx.log.error(`No ${module} named ${name}`)
                    return
                  }
                  if (item.config) {
                    await handleConfig(ctx, item.config(ctx), module, name)
                  }
                } else {
                  const prompts = [
                    {
                      type: 'list',
                      name: `${module}`,
                      choices: ctx.helper[module].getIdList(),
                      message: `Choose a(n) ${module}`
                      // default: ctx.getConfig('picBed.uploader') || ctx.getConfig('picBed.current')
                    }
                  ]
                  const answer = await ctx.cmd.inquirer.prompt<IStringKeyMap<any>>(prompts)
                  const item = ctx.helper[module].get(answer[module])
                  if (item?.config) {
                    await handleConfig(ctx, item.config(ctx), module, answer[module])
                  }
                }
                break
              case 'plugin':
                if (name) {
                  if (!name.includes('picgo-plugin-')) {
                    name = `picgo-plugin-${name}`
                  }
                  if (Object.keys(ctx.getConfig('picgoPlugins')).includes(name)) {
                    if (ctx.pluginLoader.getPlugin(name)?.config) {
                      await handleConfig(ctx, ctx.pluginLoader.getPlugin(name)!.config!(ctx), 'plugin', name)
                    }
                  } else {
                    ctx.log.error(`No plugin named ${name}`)
                    return
                  }
                } else {
                  const prompts = [
                    {
                      type: 'list',
                      name: 'plugin',
                      choices: ctx.pluginLoader.getFullList(),
                      message: 'Choose a plugin'
                    }
                  ]
                  const answer = await ctx.cmd.inquirer.prompt<any>(prompts)
                  if (ctx.pluginLoader.getPlugin(answer.plugin)?.config) {
                    await handleConfig(
                      ctx,
                      ctx.pluginLoader.getPlugin(answer.plugin)!.config!(ctx),
                      'plugin',
                      answer.plugin
                    )
                  }
                }
                break
              default:
                ctx.log.warn(`No module named ${module}`)
                ctx.log.warn('Available modules are uploader|transformer|plugin|buildin')
                return
            }
            ctx.log.success('Configure config successfully!')
            if (module === 'plugin') {
              ctx.log.info("If you want to use this config, please run 'picgo use plugins'")
            }
          } catch (e: any) {
            ctx.log.error(e)
            if (process.argv.includes('--debug')) {
              throw e
            }
          }
        })().catch(e => {
          ctx.log.error(e)
        })
      })
  }
}

export default setting
