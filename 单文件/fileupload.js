/**
 *
 * @Description 文件上传配置
 *
 */
var multer = require('multer');
var dstPath = process.cwd() + '/uploads';//设置上传文件路径
var storage = multer.diskStorage({
    //Note:如果destination:传递的是一个函数，你负责创建文件夹，如果你传递的是一个字符串，multer会自动创建
    destination: dstPath,
    //TODO:文件区分目录存放
    //给上传文件重命名
    filename: function (req, file, cb) {
        cb(null, '收到的文件_'+file.originalname);
    }
});

//添加配置文件到muler对象。
var upload = multer({
    storage: storage,
    //其他设置请参考multer的limits
    //limits:{}
});
//导出对象
module.exports = upload;