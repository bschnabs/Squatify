///<reference path='./typings/main.d.ts' />
import express = require('express');
import path = require('path');
import jade = require('jade');

var port: number = process.env.PORT || 3000;
var app = express();

app.use('/node_modules', express.static(path.resolve(__dirname, '../node_modules')));
app.use('/app', express.static(path.resolve(__dirname, '../client/app')));

app.set('view engine', 'jade');

//var renderIndex = (req: express.Request, res: express.Response) => {
//    res.sendFile(path.resolve(__dirname, '../client/index.test.html'));
//}
//app.get('/*', renderIndex);

app.get('/', function (req, res) {
  res.render('../client/index');
});

var server = app.listen(port, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('This express app is listening on port:' + port);
});
