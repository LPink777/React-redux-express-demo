const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const common = require('../lib/common');

const db = mysql.createPool({host: 'localhost', user: 'root', password: 'root', database: 'store'})

router.get('/', function (req, res) {
    res.clearCookie('username');
    res.status(200).send({code:0,message:'success'});
});

module.exports = router;