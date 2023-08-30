import { type ILocales } from './zh-CN'

/* eslint-disable no-template-curly-in-string */
export const ZH_TW: ILocales = {
  UPLOAD_FAILED: '上傳失敗',
  CHECK_SETTINGS: '請檢查你的設定是否正確',
  CHECK_SETTINGS_AND_NETWORK: '請檢查你的設定及網路',
  UPLOAD_FAILED_REASON: '錯誤碼：${code}，請打開瀏覽器貼上地址查看相關原因',
  SERVER_ERROR: '伺服器出錯，請重試',
  AUTH_FAILED: '認證失敗',

  // smms
  PICBED_SMMS: 'SM.MS',
  PICBED_SMMS_TOKEN: '設定Token',
  PICBED_SMMS_BACKUP_DOMAIN: '備用上傳網址',
  PICBED_SMMS_MESSAGE_BACKUP_DOMAIN: '例如 smms.app',

  // local
  PICBED_LOCAL: '本地',
  PICBED_LOCAL_PATH: '設定儲存路徑',
  PICBED_LOCAL_MESSAGE_PATH: '例如 /usr/local/images/',
  PICBED_LOCAL_CUSTOMURL: '設定自訂網址',
  PICBED_LOCAL_MESSAGE_CUSTOMURL: '例如 https://test.com',
  PICBED_LOCAL_WEBPATH: '設定網址路徑',
  PICBED_LOCAL_MESSAGE_WEBPATH: '用于網頁顯示的路徑',

  // Ali-cloud
  PICBED_ALICLOUD: '阿里云OSS',
  PICBED_ALICLOUD_ACCESSKEYID: '設定KeyId',
  PICBED_ALICLOUD_ACCESSKEYSECRET: '設定KeySecret',
  PICBED_ALICLOUD_BUCKET: '設定Bucket',
  PICBED_ALICLOUD_AREA: '設定儲存區域',
  PICBED_ALICLOUD_PATH: '設定儲存路徑',
  PICBED_ALICLOUD_CUSTOMURL: '設定自訂網址',
  PICBED_ALICLOUD_OPTIONS: '設定網址後綴',
  PICBED_ALICLOUD_MESSAGE_AREA: '例如：oss-cn-beijing',
  PICBED_ALICLOUD_MESSAGE_PATH: '例如：test/',
  PICBED_ALICLOUD_MESSAGE_OPTIONS: '例如：?x-oss-process=xxx',
  PICBED_ALICLOUD_MESSAGE_CUSTOMURL: '例如：https://test.com',

  // Tencent-cloud
  PICBED_TENCENTCLOUD: '騰訊云COS',
  PICBED_TENCENTCLOUD_VERSION: 'COS版本',
  PICBED_TENCENTCLOUD_SECRETID: '設定SecretId',
  PICBED_TENCENTCLOUD_SECRETKEY: '設定SecretKey',
  PICBED_TENCENTCLOUD_APPID: '設定AppId',
  PICBED_TENCENTCLOUD_BUCKET: '設定Bucket',
  PICBED_TENCENTCLOUD_AREA: '設定儲存區域',
  PICBED_TENCENTCLOUD_ENDPOINT: '設定接入點',
  PICBED_TENCENTCLOUD_PATH: '設定儲存路徑',
  PICBED_TENCENTCLOUD_OPTIONS: '設定網址後綴',
  PICBED_TENCENTCLOUD_CUSTOMURL: '設定自訂網址',
  PICBED_TENCENTCLOUD_MESSAGE_APPID: '例如：1234567890',
  PICBED_TENCENTCLOUD_MESSAGE_AREA: '例如：ap-beijing',
  PICBED_TENCENTCLOUD_MESSAGE_PATH: '例如：test/',
  PICBED_TENCENTCLOUD_MESSAGE_CUSTOMURL: '例如：https://test.com',
  PICBED_TENCENTCLOUD_MESSAGE_OPTIONS: '例如：?imageMogr2',
  PICBED_TENCENTCLOUD_MESSAGE_ENDPOINT: '例如：cos-internal.accelerate.tencentcos.cn',
  PICBED_TENCENTCLOUD_SLIM: 'Set ImageSlim',
  PICBED_TENCENTCLOUD_SLIM_TIP: 'Image extremely intelligent compression, please refer to the [document description](https://cloud.tencent.com/document/product/436/49259)',
  PICBED_TENCENTCLOUD_SLIM_CONFIRM: 'OPEN',
  PICBED_TENCENTCLOUD_SLIM_CANCEL: 'CLOSE',

  // GitHub
  PICBED_GITHUB: 'GitHub',
  PICBED_GITHUB_TOKEN: '設定Token',
  PICBED_GITHUB_REPO: '設定倉庫名稱',
  PICBED_GITHUB_PATH: '設定儲存路徑',
  PICBED_GITHUB_BRANCH: '設定分支名稱',
  PICBED_GITHUB_CUSTOMURL: '設定自訂網址',
  PICBED_GITHUB_MESSAGE_REPO: '格式：username/repo',
  PICBED_GITHUB_MESSAGE_BRANCH: '例如：main',
  PICBED_GITHUB_MESSAGE_PATH: '例如：test/',
  PICBED_GITHUB_MESSAGE_CUSTOMURL: '例如：https://test.com',

  // qiniu
  PICBED_QINIU: '七牛云',
  PICBED_QINIU_ACCESSKEY: '設定AccessKey',
  PICBED_QINIU_SECRETKEY: '設定SecretKey',
  PICBED_QINIU_BUCKET: '設定Bucket',
  PICBED_QINIU_PATH: '設定儲存路徑',
  PICBED_QINIU_URL: '設定訪問網址',
  PICBED_QINIU_OPTIONS: '設定網址後綴',
  PICBED_QINIU_AREA: '設定儲存區域',
  PICBED_QINIU_MESSAGE_PATH: '例如：test/',
  PICBED_QINIU_MESSAGE_AREA: '例如：z0',
  PICBED_QINIU_MESSAGE_OPTIONS: '例如：?imageslim',
  PICBED_QINIU_MESSAGE_URL: '例如：https://xxx.yyy.glb.clouddn.com',

  // imgur
  PICBED_IMGUR: 'Imgur',
  PICBED_IMGUR_CLIENTID: '設定ClientId',
  PICBED_IMGUR_USERNAME: '設定用戶名',
  PICBED_IMGUR_ACCESS_TOKEN: '設定accessToken',
  PICBED_IMGUR_ALBUM: '設定相簿名',
  PICBED_IMGUR_PROXY: '設定PROXY',
  PICBED_IMGUR_MESSAGE_CLIENTID: '匿名上傳時填寫',
  PICBED_IMGUR_MESSAGE_USERNAME: '需要上傳到賬戶時填寫',
  PICBED_IMGUR_MESSAGE_ACCESS_TOKEN: '需要上傳到賬戶時填寫',
  PICBED_IMGUR_MESSAGE_ALBUM: '例如：test',
  PICBED_IMGUR_MESSAGE_PROXY: '例如：http://127.0.0.1:1080',

  // upyun
  PICBED_UPYUN: '又拍云',
  PICBED_UPYUN_BUCKET: '設定Bucket',
  PICBED_UPYUN_OPERATOR: '設定操作員',
  PICBED_UPYUN_PASSWORD: '設定操作員密碼',
  PICBED_UPYUN_PATH: '設定儲存路徑',
  PICBED_UPYUN_URL: '設定加速網址',
  PICBED_UPYUN_OPTIONS: '設定網址後綴',
  PICBED_UPYUN_ANTI_LEECH_TOKEN: '設定防盜鏈Token',
  PICBED_UPYUN_EXPIRE_TIME: '設定過期時間(秒)',
  PICBED_UPYUN_MESSAGE_OPERATOR: '例如：me',
  PICBED_UPYUN_MESSAGE_PASSWORD: '輸入操作員密碼',
  PICBED_UPYUN_MESSAGE_URL: '例如：http://xxx.test.upcdn.net',
  PICBED_UPYUN_MESSAGE_OPTIONS: '例如：!imgslim',
  PICBED_UPYUN_MESSAGE_PATH: '例如：test/',

  // webdav
  PICBED_WEBDAVPLIST: 'WebDAV',
  PICBED_WEBDAVPLIST_HOST: '設定API主機',
  PICBED_WEBDAVPLIST_SSLENABLED: '需要HTTPS時啟用',
  PICBED_WEBDAVPLIST_USERNAME: '設定用戶名',
  PICBED_WEBDAVPLIST_PASSWORD: '設定密碼',
  PICBED_WEBDAVPLIST_PATH: '設定儲存路徑',
  PICBED_WEBDAVPLIST_CUSTOMURL: '設定自訂網址',
  PICBED_WEBDAVPLIST_WEBSITE_PATH: '設定網站路徑',
  PICBED_WEBDAVPLIST_MESSAGE_HOST: '例如：https://example.com/webdav',
  PICBED_WEBDAVPLIST_MESSAGE_SSLENABLED: '需要HTTPS時啟用',
  PICBED_WEBDAVPLIST_MESSAGE_USERNAME: '例如：me',
  PICBED_WEBDAVPLIST_MESSAGE_PASSWORD: '輸入用戶密碼',
  PICBED_WEBDAVPLIST_MESSAGE_PATH: '例如：test/',
  PICBED_WEBDAVPLIST_MESSAGE_WEBSITE_PATH: '拼接網址時使用',
  PICBED_WEBDAVPLIST_MESSAGE_CUSTOMURL: '例如：https://test.com',

  // sftpplist
  PICBED_SFTPPLIST: '內置SFTP',
  PICBED_SFTPPLIST_HOST: '設定主機',
  PICBED_SFTPPLIST_PORT: '設定端口',
  PICBED_SFTPPLIST_USERNAME: '設定用戶名',
  PICBED_SFTPPLIST_PASSWORD: '設定密碼',
  PICBED_SFTPPLIST_PRIVATEKEY: '設定私鑰',
  PICBED_SFTPPLIST_PRIVATEKEY_PASSPHRASE: '設定私鑰密碼',
  PICBED_SFTPPLIST_UPLOADPATH: '設定上傳路徑',
  PICBED_SFTPPLIST_CUSTOMURL: '設定自訂網址',
  PICBED_SFTPPLIST_WEBSITE_PATH: '設定網站路徑',
  PICBED_SFTPPLIST_FILE_USER: '設定文件用戶:組',
  PICBED_SFTPPLIST_FILE_MODE: '設定文件權限',
  PICBED_SFTPPLIST_DIR_MODE: '設定文件夾權限',
  PICBED_SFTPPLIST_MESSAGE_HOST: '例如：1.1.1.3',
  PICBED_SFTPPLIST_MESSAGE_PORT: '默認22',
  PICBED_SFTPPLIST_MESSAGE_PRIVATEKEY: '例如：/Users/xxx/.ssh/id_rsa',
  PICBED_SFTPPLIST_MESSAGE_PRIVATEKEY_PASSPHRASE: '輸入私鑰密碼',
  PICBED_SFTPPLIST_MESSAGE_UPLOADPATH: '例如：test/',
  PICBED_SFTPPLIST_MESSAGE_CUSTOMURL: '例如：https://test.com',
  PICBED_SFTPPLIST_MESSAGE_WEBSITE_PATH: '拼接網址時使用',
  PICBED_SFTPPLIST_MESSAGE_FILE_USER: '例如：www:data',
  PICBED_SFTPPLIST_MESSAGE_FILE_MODE: '例如：0664',
  PICBED_SFTPPLIST_MESSAGE_DIR_MODE: '例如：0775',

  BUILDIN_WATERMARK_ISADDWATERMARK: '是否添加水印',
  BUILDIN_WATERMARK_MESSAGE_ISADDWATERMARK: '需要添加水印時啟用',
  BUILDIN_WATERMARK_WATERMARKTYPE: '設定水印類型',
  BUILDIN_WATERMARK_MESSAGE_WATERMARKTYPE: '請選擇水印類型',
  BUILDIN_WATERMARK_ISFULLSCREENWATERMARK: '是否全屏水印',
  BUILDIN_WATERMARK_MESSAGE_ISFULLSCREENWATERMARK: '需要全屏水印時啟用',
  BUILDIN_WATERMARK_WATERMARKDEGREE: '設定水印角度',
  BUILDIN_WATERMARK_MESSAGE_WATERMARKDEGREE: '請輸入數字',
  BUILDIN_WATERMARK_WATERMARKTEXT: '設定水印文字',
  BUILDIN_WATERMARK_MESSAGE_WATERMARKTEXT: '請輸入水印文字',
  BUILDIN_WATERMARK_WATERMARKTEXTFONTPATH: '設定水印字體',
  BUILDIN_WATERMARK_MESSAGE_WATERMARKFONTPATH: '請輸入水印字體文件路徑',
  BUILDIN_WATERMARK_WATERMARKFONTRATIO: '設定水印圖片比例',
  BUILDIN_WATERMARK_MESSAGE_WATERMARKFONTRATIO: '請輸入0-1的數字',
  BUILDIN_WATERMARK_WATERMARKFONTCOLOR: '設定水印字體顏色',
  BUILDIN_WATERMARK_MESSAGE_WATERMARKFONTCOLOR: '請輸入rgb顏色值',
  BUILDIN_WATERMARK_WATERMARKIMAGEPATH: '設定水印圖片路徑',
  BUILDIN_WATERMARK_MESSAGE_WATERMARKIMAGEPATH: '請輸入水印圖片路徑',
  BUILDIN_WATERMARK_WATERMARKPOSITION: '設定水印位置',
  BUILDIN_WATERMARK_MESSAGE_WATERMARKPOSITION: '請選擇水印位置',

  BUILDIN_RENAME_FORMAT: '設定重命名格式',
  BUILDIN_RENAME_ENABLE: '是否啟用重命名',

  BUILDIN_COMPRESS_QUALITY: '設定圖片質量',
  BUILDIN_COMPRESS_MESSAGE_QUALITY: '請輸入0-100的整數',
  BUILDIN_COMPRESS_ISCONVERT: '是否進行格式轉換',
  BUILDIN_COMPRESS_MESSAGE_ISCONVERT: '需要轉換時啟用',
  BUILDIN_COMPRESS_CONVERTFORMAT: '設定轉換格式',
  BUILDIN_COMPRESS_MESSAGE_CONVERTFORMAT: '請選擇轉換格式',
  BUILDIN_COMPRESS_ISRESIZE: '是否進行圖片縮放',
  BUILDIN_COMPRESS_MESSAGE_ISRESIZE: '需要縮放時啟用',
  BUILDIN_COMPRESS_RESIZEWIDTH: '設定縮放寬度',
  BUILDIN_COMPRESS_MESSAGE_RESIZEWIDTH: '請輸入數字',
  BUILDIN_COMPRESS_RESIZEHEIGHT: '設定縮放高度',
  BUILDIN_COMPRESS_MESSAGE_RESIZEHEIGHT: '請輸入數字',
  BUILDIN_COMPRESS_ISRESIZEBYPERCENT: '是否按百分比進行縮放',
  BUILDIN_COMPRESS_MESSAGE_ISRESIZEBYPERCENT: '需要按百分比縮放時啟用',
  BUILDIN_COMPRESS_RESIZEPERCENT: '設定縮放百分比',
  BUILDIN_COMPRESS_MESSAGE_RESIZEPERCENT: '請輸入数字',
  BUILDIN_COMPRESS_SKIPRESIZEOFSMALLIMG: '是否跳過小圖縮放',
  BUILDIN_COMPRESS_ISROTATE: '是否進行圖片旋轉',
  BUILDIN_COMPRESS_MESSAGE_ISROTATE: '需要旋轉時啟用',
  BUILDIN_COMPRESS_ROTATEDEGREE: '設定旋轉角度',
  BUILDIN_COMPRESS_MESSAGE_ROTATEDEGREE: '請輸入數字，可為負數',
  BUILDIN_COMPRESS_ISREMOVEEXIF: '是否移除EXIF資訊',
  BUILDIN_COMPRESS_MESSAGE_ISREMOVEEXIF: '需要移除EXIF資訊時啟用',

  // Plugin Handler
  PLUGIN_HANDLER_PLUGIN_INSTALL_SUCCESS: '插件安裝成功',
  PLUGIN_HANDLER_PLUGIN_INSTALL_FAILED: '插件安裝失敗',
  PLUGIN_HANDLER_PLUGIN_INSTALL_FAILED_REASON: '插件安裝失敗，失敗碼為${code}，錯誤紀錄為 \n ${data}',
  PLUGIN_HANDLER_PLUGIN_INSTALL_FAILED_PATH: '插件安裝失敗，請輸入正確的插件名稱或正確的安裝路徑',
  PLUGIN_HANDLER_PLUGIN_UNINSTALL_SUCCESS: '插件卸載成功',
  PLUGIN_HANDLER_PLUGIN_UNINSTALL_FAILED: '插件卸載失敗',
  PLUGIN_HANDLER_PLUGIN_UNINSTALL_FAILED_REASON: '插件卸載失敗，失敗碼為${code}，錯誤紀錄為 \n ${data}',
  PLUGIN_HANDLER_PLUGIN_UNINSTALL_FAILED_VALID: '插件卸載失敗，請輸入正確的插件名稱',
  PLUGIN_HANDLER_PLUGIN_UPDATE_SUCCESS: '插件更新成功',
  PLUGIN_HANDLER_PLUGIN_UPDATE_FAILED: '插件更新失敗',
  PLUGIN_HANDLER_PLUGIN_UPDATE_FAILED_REASON: '插件更新失敗，失敗碼為${code}，錯誤紀錄為 \n ${data}',
  PLUGIN_HANDLER_PLUGIN_UPDATE_FAILED_VALID: '插件更新失敗，請輸入正確的插件名稱'
}
