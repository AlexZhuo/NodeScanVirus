var express = require('express');
var app = express();
app.use(express.static('html'));
var upload = require('./fileupload');

var process = require('child_process');

var anvirusSoftware = '"C:\\Program Files (x86)\\Kaspersky Lab\\Kaspersky Free 18.0.0\\avp.com" SCAN /i0 '

//文件上传服务
app.post('/upload', upload.array('virus_file',10), function (req, res, next) {
    console.log(req.files);
    if (req.files) {
        	//res.send('文件上传成功');
		var length = req.files.length;
        	console.log('上传文件个数是：'+ length);
		var upload_directory = req.files[0].destination;
		console.log('上传文件被存储到了目标文件夹：'+upload_directory);
		for(var i=0;i<length;i++){
			var path = req.files[i].path;
			console.log('被保存的文件完整路径：'+path);
		}
		console.log('=======');
        	console.log(req.body);
		console.log("准备开启杀毒程序");
		process.exec(anvirusSoftware + upload_directory ,function (error, stdout, stderr) {
        	if (error !== null) {
          		console.log('exec error: ' + error);
        	} else if (stdout !== null){
			res.send(stdout);
			console.log('success: ' + stdout);
		}
});
    } else {
		res.send('没有上传任何文件');
	}
});
app.get('/upload', function (req, res, next) {
	console.log('get来了'+req.file);
	res.send('不要用get请求');
});
app.get('/', function (req, res) {
  res.send('Hello World!');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});