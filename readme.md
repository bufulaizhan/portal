WEB Portal项目

- - -

# 基本信息
## 描述
该项目只有网站内容，可以部署至任意静态服务器上，包括CDN，没有任何动态执行代码，与服务器端的执行通过JSON call api
## 技术栈
* [NodeJS](http://nodejs.org) nodeJS是本项目基础
* [AngularJS](http://angularjs.org/) AngularJS(1.3)是前段MVC框架，项目完全基于angularJS
* [Bootstrap](http://getbootstrap.com) 码农最常用的一个样式框架，主要使用布局
* [SASS](http://sass-lang.com/) sass跟LESS很像，是可以进行css编码、编译的语言
* [yeoman](http://yeoman.io) 集成了yo(脚手架、生成器)、 bower(包管理器)、grunt(前端构建工具)的集成环境

## 安装
1. 首先请安装node (略)
2. 请安装CoffeeScript
```
npm install -g  yo  coffee-script  generator-angular 
```
3. 执行环境依赖安装。如果国内连接npm repo困难，请使用[贵宝的repo](http://registry.npm.taobao.org/)或翻墙
```
npm install
```
4. 执行包管理安装。国内使用bower一直有问题，请使用vpn翻墙或者配置bower.json的代理
```
bower install
```
## 启动
生命周期采用grunt管理
1. 启动服务
```
grunt serve
```
2. 打包应用, 到distribution目录下
```
grunt build
```
