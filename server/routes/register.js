const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const common = require('../lib/common');

const db = mysql.createPool({host: 'localhost', user: 'root', password: 'root', database: 'store'})

router.post('/', function (req, res) {
    var username = req.body.username;
    var password = common.md5(req.body.password);
    db.query(`SELECT * FROM login_table`, (err, data) => {
        if (err) {
            res.status(500).send('databases error').end()
        } else {
            //用户是否已存在
            const isUser = data.some((item)=>{
                return item.username === username
            })
            if (isUser) {
                res.status(200).send({code:0,message:'用户名已被注册！'})
            }else{
                //新增user
                db.query(`INSERT INTO login_table (username,password) VALUE('${username}','${password}')`, (err, data) => {
                    if (err) {
                        throw err
                    } else {
                        res.cookie('username', username, {
                            maxAge: 1000*60*30,
                            path: '/',
                            domain: 'localhost',
                        })
                        console.log(data)
                        res.status(200).send({code:1,message:'注册成功！'}).end()
                    }
                })
            }
        }
    })
});

module.exports = router;