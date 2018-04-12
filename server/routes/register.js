var express = require('express');
var router = express.Router();
const mysql = require('mysql')

var db = mysql.createPool({host: 'localhost', user: 'root', password: 'root', database: 'store'})

/* GET users listing. */
router.get('/', function (req, res, next) {
    db.query(`SELECT * FROM login_table`, (err, data) => {
        if (err) {
            throw err
        } else {
            res
                .json(data)
                .end()
        }
    })
});

router.post('/', function (req, res, next) {
    var username = req.body.username
    var password = req.body.password
    console.log(username)
    db.query(`INSERT INTO login_table (username,password) VALUE('${username}','${password}')`, (err, data) => {
        if (err) {
            throw err
        } else {
            res.json({code:1,message:'注册成功！'})
        }
    })
});

module.exports = router;