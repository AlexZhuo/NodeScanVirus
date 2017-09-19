# NodeScanVirus
基于卡巴斯基的命令行杀毒工具，使用NodeJS作为中间件实现远程杀毒。有单文件上传和多文件同时上传版本


使用方法
---
1、安装卡巴斯基，版本10.0-18均可（如果不是18版本，那么需要修改index.js中的目录）

2、cd 到当前目录，开启NodeJS服务器
```
node index.js
```
3、浏览器访问127.0.0.1:3000/test.html，使用表单上传文件并接收返回结果

![demo](http://img.blog.csdn.net/20170916164439283)

![demo](http://img.blog.csdn.net/20170916165839024)


4、可以在/uploads文件夹下看到上传的文件

![demo](http://img.blog.csdn.net/20170916170820326)

