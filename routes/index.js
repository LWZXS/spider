var request = require('request');
var cheerio = require('cheerio');
var fs=require('fs');
module.exports = function (app) {

    app.get('/', function (req, res, next) {
        fs.readFile('./interface.json','UTF-8' ,function (err, data) {
            if (err) throw err;
            var json=JSON.parse(data);
            //console.log(json.servers)
            res.render('index',{
                data:json.servers
            });
        });
    });
    app.post('/interface', function (req, res, next) {
        var hostList=req.body.hostList.split(",");
        var portList=req.body.portList.split(",");
        fs.readFile('./interface.json','UTF-8' ,function (err, data) {
            if (err) throw err;
            var json=JSON.parse(data);
            for(var i=0;i<hostList.length;i++){
                json.servers[i].host=hostList[i];
                json.servers[i].port=portList[i];
            }
            var jsontext=JSON.stringify(json)
            fs.writeFile('./interface.json',jsontext,function(err){
                if(err) throw err;
                console.log('修改成功');
            });
            //console.log(json.servers)
            res.send(json.servers);
        });
    });
}