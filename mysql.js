/**
 * Created by BigMac on 7/27/17.
 */

var express = require('express');
var app = express();

/*
var mysql = require('mysql');

var bodyParser = require('body-parser');
var con = mysql.createConnection({
    user     : 'root',
    password : 'root',
    host     : 'localhost',
    port     : 8889
});
*/

app.post('/', function(req, res) {
    res.send('Username: ' + req.body.user);
});

/*

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT password FROM cataclysm.login WHERE `username`='admin'", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        console.log(fields);
    });
});
    */