var express = require('express');
// var _ = require('underscore');
var port = 3000;

var app = express();
//---静态资源
app.use(express.static(__dirname));
app.get('/', function (req, res) {
    res.render(__dirname+'index.html');
});
//--404
app.use(function (req,res,next) {
    res.sendFile(__dirname + req.url + '.html', function (err) {
    	if (err) {
    		res.statusCode = 404;
    		res.sendFile(__dirname+'/error.html');
    	}
    });
});
app.use('/images', express.static('./static/images'));
app.listen(port);

module.exports = app;