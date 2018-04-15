const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const common = require('../lib/common');

const db = mysql.createPool({host: 'localhost', user: 'root', password: 'root', database: 'store'})

router.post('/', function (req, res) {
    var username = req.body.username;
    var password = common.md5(req.body.password);
    db.query(`SELECT * FROM login_table WHERE username='${username}'`,(err,data)=>{
        if (err) {
            res.status(500).send('databases error').end()
        }else{
            if (data.length == 0) {
                res.status(200).send({code:0,message:'没有此用户名!'}).end()
            }else{
                if (data[0].password == password) {
                    res.cookie('user', username, {
                        maxAge: 3000000,
                        httpOnly: true,
                        path: '/',
                        // secure:true //设置该选项，只有https网站才可以输出该cookie
                        domain: 'localhost',
                        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7)
                    })
                    res.status(200).send({code:1,message:'登陆成功!'}).end()
                }else{
                    res.status(200).send({code:0,message:'密码错误!'}).end()
                }
            }
        }
    })
});

module.exports = router;