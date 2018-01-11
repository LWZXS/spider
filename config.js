/**
 * Created by qingxing on 2016/7/11.
 * 项目配置参数
 */
var express = require('express'),
    app = express();
var data=require('./config.json')

var config = {
    // debug 为 true 时，用于本地调试
    projectName: 'unified',
    debug: false,
    mini_assets: false,
    host: 'localhost',
    port: app.get('env') === 'development' ? 3001 : 80,
    clientId: 'gdbsspMobile', //统一认证的ID。  黄埔测试环境是：A928HPFT
    clientSecret: 'sp160726', //统一认证的密码。 黄埔测试环境是：A928HPFT
    clientUrl: 'http://127.0.0.1:3001', //本系统的外网地址。   黄埔的测试地址是：http://10.196.32.3
    serverUrl: 'http://tyrztest.gdbs.gov.cn/am', //统一认证的系统地址. 黄埔的测试地址是：http://172.16.13.139:9080/GZNS_TFP-S
    redirectUrl: 'http://127.0.0.1:3001/MobileApply/auth/redirect', //统一认证的回调地址。 黄埔的是 http://10.196.32.3/logins/redirect
    spUrl: '192.168.0.152:7001', //省信注册新用户的地址服务器
    formUrl: '192.168.0.152:7001', //业务表单上传的配置http头
    session_secret: 'jsessionid',
    cookie_secret: 'jsessionid',
    name: 'jsessionid',
    cookieMaxAge: 7200000,
    isIntercepted: false, //是否启动拦截器（所有页面都需登录才能进入）    //是否同时启动网办模块和统一申办模块,采用redis作为session共享存储
    applyUrl: 'http://127.0.0.1:8092/login', //网上办事大厅的地址
    isWithApply: false, //使用pm2 start app.js -i max 时，可以设置为true，启动redis并且修改下面的信息。应用性能将得到提升
    redisHost: '127.0.0.1',
    redisPort: '6379',
    area: data.area.value, //不同现场显示不同模板 例如：黄埔，柳州，广东省（配置文件路径 /controllers/pc/affairs/MyAffairs.js）
    getLicenseUrl: 'http://19.224.4.9', // 获取电子证照地址
    showLicenseUrl: 'http://zzk.gdbs.gov.cn', // 展示电子证照地址
    getMes: 'http://192.168.9.234:8080',
    isMesCompletion: false, //是否进行页面补全检测
    isSupElectronicLicense: false, // 是否支持电子证照
    isSupNewApprLicenseMgr: true, // 是否支持新的电子材料库
    isMaterialSeparated: true, //是否要材料分离，true接口调用新接口，false不变
    localLogins: false, //是否用本地的登录注册
    CustomFormuserCode: 'admin', //1.0表单usercode  公司为admin
    License: false, //是否启动证照库上传功能 true为启动 false为不启动
    OutNet: true, //外网信息配置数据处理 省信现场，材料补正用到，true为启动 false为不启动
    isProNameReq: true, //外网信息配置项目名称是否必填 true为启动 false为不启动
    cityAffairs: false, //应对地市我的事物需要隐藏我的预约以及单位内审按钮，false为开启，true则关闭
    isPostHandlings:false,//是否开启省办理量推送
    isCopyright:false,//是否开启版权信息
    isMerge: false, //是否开启一步申办
    bindUserType: 1 //0:统一认证账号、1:本地账号
};

module.exports = config;