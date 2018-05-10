const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const common = require('../lib/common');

const db = mysql.createPool({host: 'localhost', user: 'root', password: 'root', database: 'store'})

router.post('/', function (req, res) {
    const { name, age, sex, signature } = req.body;
    db.query(`INSERT INTO userInfo_table (name,age,sex,signature) VALUE('${name}','${age}','${sex}','${signature}')`, (err, data) => {
        if (err) {
            throw err
        } else {
            res.status(200).send({code:1,message:'信息注册成功！'}).end()
        }
    })
});

module.exports = router;