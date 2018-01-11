var request = require('request');
var cheerio = require('cheerio');
var fs=require('fs');
var config=require('../config.json');
var interface=require('../interface.json')

module.exports = function (app) {

    app.get('/', function (req, res, next) {
        //var json=JSON.parse(interface);
        res.render('index',{
            data:interface.servers
        });

    });
    app.get('/config', function (req, res, next) {
        //var json=JSON.parse(interface);
        res.render('config',{
            data:config
        });

    });
    app.post('/api/interface', function (req, res, next) {
        var sendData={status:"200"};
        //把参数转换为数组
        var hostList=req.body.hostList.split(",");
        var portList=req.body.portList.split(",");
    fs.readFile('./interface.json','UTF-8' ,function (err, data) {
        if (err) {
            console.log(err);
            sendData.status="500";
            sendData.desc="读取interface.json文件异常，请联系管理员";
            res.send(sendData);
        }else{
            var interface=JSON.parse(data);
            for(var i=0;i<hostList.length;i++){
                interface.servers[i].host=hostList[i];
                interface.servers[i].port=portList[i];
            }
            interface=JSON.stringify(interface)
            fs.writeFile('./interface.json',interface,function(err){
                if(err){
                    console.log(err);
                    sendData.status="500";
                    sendData.desc="修改interface.json文件异常，请联系管理员";
                }else{
                    console.log('修改服务器接口配置成功');
                    sendData.desc="修改服务器接口配置成功"
                    res.send(sendData);
                }
            });
        }
    });
});
    app.post('/api/config', function (req, res, next) {
        fs.readFile('./config.json','UTF-8' ,function (err, data) {
            if (err) throw err;
            var config=JSON.parse(data);
            console.log(config)
            fs.writeFile('./config.json','a',function(err){
                if(err) throw err;
                console.log('修改项目配置成功');
            });
            //console.log(json.servers)
            res.send(json.servers);
        });
    });
}