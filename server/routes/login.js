var express = require('express');
var router = express.Router();
const mysql = require('mysql');
const common = require('../lib/common');

var db = mysql.createPool({host: 'localhost', user: 'root', password: 'root', database: 'store'})

router.get('/', function (req, res) {
    var username = req.query.username;
    var password = common.md5(req.query.password);
    db.query(`SELECT * FROM login_table WHERE username='${username}'`,(err,data)=>{
        if (err) {
            res.status(500).send('databases error').end()
        }else{
            if (data.length == 0) {
                res.status(200).send({code:0,message:'没有此用户名!'}).end()
            }else{
                if (data[0].password == password) {
                    res.status(200).send({code:1,message:'登陆成功!'}).end()
                }else{
                    res.status(200).send({code:0,message:'密码错误!'}).end()
                }
            }
        }
    })
});

module.exports = router;