(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{552:function(a,s,e){"use strict";e.r(s);var t=e(15),r=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("p",[a._v("相信很多前端和我一样，希望能拥有一台自己从0搭建的服务器，放一些自己写的轮子，起一个属于自己的node服务，把我的踩坑历史分享给大家，趁着周末，愉快的搞起来吧。")]),a._v(" "),e("p",[a._v("github地址：https://github.com/wuxiaohuaer/node-server")]),a._v(" "),e("h2",{attrs:{id:"一、服务器和数据库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、服务器和数据库"}},[a._v("#")]),a._v(" 一、服务器和数据库")]),a._v(" "),e("p",[a._v("买服务器的作用有很多，比如自己写的一些开源的前端项目、自己的博客网站、以前写过的小项目、自己写的node服务等等，都可以放在服务器，方便交流，也方便自己查看。我买服务器最主要的目的是，想自己纯实战的用node开发一套后台接口。")]),a._v(" "),e("p",[a._v("现在市面上非常多的服务器，阿里云、华为云等等，我买的是阿里云的服务器，便宜、操作简单。")]),a._v(" "),e("p",[a._v("下面这个是阿里云的官网：")]),a._v(" "),e("p",[a._v("https://www.aliyun.com/?spm=5176.8097504.fszjobuve.2.2ec76fb5d5MVVI")]),a._v(" "),e("p",[a._v("直接选择云服务器ECS就可以了")]),a._v(" "),e("p",[a._v("如果你是新用户，最近应该有一个0.9折的活动，服务器、数据库、oss一共加起来92块钱，非常划算，直接下单就可。")]),a._v(" "),e("h2",{attrs:{id:"二、配置服务器和数据库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、配置服务器和数据库"}},[a._v("#")]),a._v(" 二、配置服务器和数据库")]),a._v(" "),e("h4",{attrs:{id:"配置服务器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置服务器"}},[a._v("#")]),a._v(" 配置服务器")]),a._v(" "),e("h5",{attrs:{id:"_1、进入控制台-创建实例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、进入控制台-创建实例"}},[a._v("#")]),a._v(" 1、进入控制台，创建实例")]),a._v(" "),e("h5",{attrs:{id:"_2、重置实例密码-这个地方重置的实例的密码-等连ssh的时候要用-得记下来"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、重置实例密码-这个地方重置的实例的密码-等连ssh的时候要用-得记下来"}},[a._v("#")]),a._v(" 2、重置实例密码，这个地方重置的实例的密码，等连ssh的时候要用，得记下来")]),a._v(" "),e("h4",{attrs:{id:"配置数据库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置数据库"}},[a._v("#")]),a._v(" 配置数据库")]),a._v(" "),e("p",[a._v("按照下面的图，一步一步操作非常轻松加愉快")]),a._v(" "),e("h2",{attrs:{id:"三、远程连接服务器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、远程连接服务器"}},[a._v("#")]),a._v(" 三、远程连接服务器")]),a._v(" "),e("p",[a._v("进入到紧张刺激的远程连接服务器的环节，此处坑多且深：")]),a._v(" "),e("p",[a._v("要连接服务器必须要有一个连接工具，可以用xshell，也可以用FinalShell之类的，只是一个工具，都可以的，这里以xshell为例：")]),a._v(" "),e("h3",{attrs:{id:"一-新建一个ssh"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一-新建一个ssh"}},[a._v("#")]),a._v(" （一）新建一个ssh")]),a._v(" "),e("p",[a._v("新建一个ssh，主机就写给你发短信的那个IP，端口是22，密码就是刚才实例的密码")]),a._v(" "),e("h3",{attrs:{id:"二-安装node"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二-安装node"}},[a._v("#")]),a._v(" （二）安装node")]),a._v(" "),e("p",[a._v("网上安装node的教程非常多，我推荐一个比较快也比较稳定的")]),a._v(" "),e("h4",{attrs:{id:"_1、下载node"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、下载node"}},[a._v("#")]),a._v(" 1、下载node")]),a._v(" "),e("p",[a._v("我在根目录新建了一个node文件夹，在它下面安装的node，命令：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("mkdir node\n")])])]),e("p",[a._v("直接运行：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("wget -c https://nodejs.org/dist/v8.9.1/node-v8.9.1-linux-x64.tar.xz\n")])])]),e("h4",{attrs:{id:"_2、解压node包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、解压node包"}},[a._v("#")]),a._v(" 2、解压node包")]),a._v(" "),e("p",[a._v("直接运行：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v(" tar -xvf node-v8.9.1-linux-x64.tar.xz \n")])])]),e("p",[a._v("想换名字就换,不想换就算了，命令：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("mv node-v8.9.1-linux-x6 nodeJs\n")])])]),e("p",[a._v("这个时候，你可以使用一下node命令，发现会报错")]),a._v(" "),e("p",[a._v("因为node命令和npm命令并不是全局命令，需要建立一个软连，命令：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("ln -s /node/nodeJs/bin/npm /usr/local/bin/ \nln -s /node/nodeJs/bin/node /usr/local/bin/ \n")])])]),e("h4",{attrs:{id:"_3、设置全局变量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3、设置全局变量"}},[a._v("#")]),a._v(" 3、设置全局变量")]),a._v(" "),e("p",[a._v("尝试把node配置到环境变量中 .bash_profile 中")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("vi ~/.bash_profile\n\n把下面的加上去\n\nPATH=$NODE_HOME/bin:$PATH\nexport NODE_HOME\nexport PATH\n")])])]),e("p",[a._v("这个时候node和npm就已经安装好了，输入node和npm命令都不会报错了")]),a._v(" "),e("h3",{attrs:{id:"三-安装nginx"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三-安装nginx"}},[a._v("#")]),a._v(" （三）安装nginx")]),a._v(" "),e("h4",{attrs:{id:"_1、安装依赖"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、安装依赖"}},[a._v("#")]),a._v(" 1、安装依赖")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v(" yum -y install pcre* yum -y install openssl*\n")])])]),e("h4",{attrs:{id:"_2、下载安装包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、下载安装包"}},[a._v("#")]),a._v(" 2、下载安装包")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("wget http://nginx.org/download/nginx-1.15.8.tar.gz\n")])])]),e("h4",{attrs:{id:"_3、解压安装包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3、解压安装包"}},[a._v("#")]),a._v(" 3、解压安装包")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("tar -xvf nginx-1.15.8.tar.gz\n")])])]),e("h4",{attrs:{id:"_4、编译"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4、编译"}},[a._v("#")]),a._v(" 4、编译")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("./configure \\\n\nmake\n\nmake install\n")])])]),e("h4",{attrs:{id:"_5、软连接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5、软连接"}},[a._v("#")]),a._v(" 5、软连接")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("ln -s /usr/local/nginx nginx-1.15.8\n")])])]),e("h4",{attrs:{id:"_6、启动"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6、启动"}},[a._v("#")]),a._v(" 6、启动")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("进入nginx/sbin \n    \n    nginx\n")])])]),e("p",[a._v("安装完nginx就可以把写的前端页面部署到服务器了")]),a._v(" "),e("h2",{attrs:{id:"四、配置nginx"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四、配置nginx"}},[a._v("#")]),a._v(" 四、配置nginx")]),a._v(" "),e("h3",{attrs:{id:"_1、随便找一个文件夹-放一个html文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、随便找一个文件夹-放一个html文件"}},[a._v("#")]),a._v(" 1、随便找一个文件夹，放一个html文件")]),a._v(" "),e("h3",{attrs:{id:"_2、进入-user-local-nginx-conf-编辑nginx-conf文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、进入-user-local-nginx-conf-编辑nginx-conf文件"}},[a._v("#")]),a._v(" 2、进入/user/local/nginx/conf，编辑nginx.conf文件")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("listen       7070; // 页面接口\nserver_name  localhost;\n\n#charset koi8-r;\n\n#access_log  logs/host.access.log  main;\n\n配置页面的代理\nlocation / {\n    root   /home; // 页面所在的文件夹\n    index  index.html index.htm;\n}\n\n这个地方配置接口反向代理\nlocation /api {\n    proxy_pass http://xx.xx.xx.xx/api;\n}\n")])])]),e("p",[a._v("这个时候去浏览器打开ip:7070，哈哈哈，页面加载不出来。")]),a._v(" "),e("p",[a._v("然后折腾一下午，前面的流程全部走了一遍，还是打不开，原来是阿里云的端口没开，千万别忘了开端口，血的教训。")]),a._v(" "),e("p",[a._v("前端进阶路上node是躲不过去的技术栈，对于大部分前端来说，都或多或少的写过一些node代码或者demo，接下来就一步一步构建属于自己的node后台接口。")]),a._v(" "),e("p",[a._v("技术栈：node.js、express框架、mysql、pm2")]),a._v(" "),e("h3",{attrs:{id:"写在前面"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#写在前面"}},[a._v("#")]),a._v(" 写在前面")]),a._v(" "),e("p",[a._v("这篇博客适合有一定前端开发经验、学习过一点node.js的同学，因为项目当中使用了非常多的es6语法，所以最好对es6也有一定的了解。")]),a._v(" "),e("h2",{attrs:{id:"五、express"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#五、express"}},[a._v("#")]),a._v(" 五、express")]),a._v(" "),e("h3",{attrs:{id:"_1、新建一个js文件-index-js"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、新建一个js文件-index-js"}},[a._v("#")]),a._v(" 1、新建一个js文件（index.js）")]),a._v(" "),e("h3",{attrs:{id:"_2、全局安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、全局安装"}},[a._v("#")]),a._v(" 2、全局安装：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("npm install express --save\n")])])]),e("h3",{attrs:{id:"_3、js文件引入express"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3、js文件引入express"}},[a._v("#")]),a._v(" 3、js文件引入express")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("var express = require('express');\nvar app = express();\n")])])]),e("h3",{attrs:{id:"_4、新建一个get请求的接口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4、新建一个get请求的接口"}},[a._v("#")]),a._v(" 4、新建一个get请求的接口")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v('app.get(\'/api/get\', function (req, res) {\n    // 返回的是json类型的数据\n    // 温馨提示：在浏览器中输入http://localhost:8000/api/get，可以模拟请求，拿到{"method":"GET","data":{"name":"wanghuahua","age":18}}说明正常\n    res.json({\n        method: \'GET\',\n        data: [{\n            name: \'wanghuahua\',\n            age: 18\n        }]\n    })\n});\n')])])]),e("h3",{attrs:{id:"_5、app-listen-8000"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5、app-listen-8000"}},[a._v("#")]),a._v(" 5、app.listen(8000)")]),a._v(" "),e("p",[a._v("浏览器输入http://localhost:8000/api/get，OK，一个node接口就开发完了。")]),a._v(" "),e("p",[a._v("完成这一步，恭喜你，你已经是一个全栈开发工程师了！")]),a._v(" "),e("p",[a._v("一切不从实战出发的的学习都是耍流氓，把刚开发完的接口连上数据库才能更逼真。")]),a._v(" "),e("h2",{attrs:{id:"六、连接数据库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#六、连接数据库"}},[a._v("#")]),a._v(" 六、连接数据库")]),a._v(" "),e("h3",{attrs:{id:"_1、远程连接数据库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、远程连接数据库"}},[a._v("#")]),a._v(" 1、远程连接数据库")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("需要一个可视化工具，Navicat之类，这里就以Navicat为例\n\n在阿里云配置数据库的时候，需要配置外网地址和账号密码\n\n打开Navicat直接连接就好了\n\n随便建一个库，库里面建一个表\n")])])]),e("h3",{attrs:{id:"_2、安装mysql"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、安装mysql"}},[a._v("#")]),a._v(" 2、安装mysql")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("npm install mysql --save\n")])])]),e("h3",{attrs:{id:"_3、项目引入sql"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3、项目引入sql"}},[a._v("#")]),a._v(" 3、项目引入sql")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("var mysql = require('mysql');     //引入mysql模块\n")])])]),e("h3",{attrs:{id:"_4、创建一个sql实例-加入配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4、创建一个sql实例-加入配置"}},[a._v("#")]),a._v(" 4、创建一个sql实例，加入配置")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("var connection = mysql.createConnection({      //创建mysql实例\n    host: 'rm-xxxxxxxx.mysql.zhangbei.rds.aliyuncs.com',\t// 连接的sql地址,外网地址\n    user: 'jerry',\t// 用户名\n    password: 'xxxxxx',\t// 用户密码\n    database: 'xx'\t// 选择的库\n});\nconnection.connect();\n")])])]),e("h3",{attrs:{id:"_5、接口里面使用数据库的数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5、接口里面使用数据库的数据"}},[a._v("#")]),a._v(" 5、接口里面使用数据库的数据")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("app.get('/api/get', function (req, res) {\n    // 返回的是json类型的数据\n    connection.query('SELECT * FROM name', (err, results, fields) => {\n        if(err){\n            console.log(err);\n        }\n        res.json({\n            method: 'GET',\n            data: results\n        })\n    })\n});\n")])])]),e("p",[a._v("在浏览器中输入http://localhost:8000/api/get，拿到刚才新建表中的数据")]),a._v(" "),e("p",[a._v("数据库连接成功！")]),a._v(" "),e("h2",{attrs:{id:"七、封装sql"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#七、封装sql"}},[a._v("#")]),a._v(" 七、封装sql")]),a._v(" "),e("p",[a._v("项目中要使用express，肯定要使用路由进行多模块开发，每一个模块都创建一个sql实例，就太麻烦了，把sql抽离出来，进行一些封装，让代码看起来更加优雅。")]),a._v(" "),e("h3",{attrs:{id:"_1、新建一个config目录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、新建一个config目录"}},[a._v("#")]),a._v(" 1、新建一个config目录")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("目录下是baseData.js和sql.js两个文件\n")])])]),e("h3",{attrs:{id:"_2、basedata-js里面放数据库配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、basedata-js里面放数据库配置"}},[a._v("#")]),a._v(" 2、basedata.js里面放数据库配置")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("module.exports = {\n    host: 'rm-xxxxxx.mysql.zhangbei.rds.aliyuncs.com',\t// 连接的服务器\n    user: 'jerry',\t// 用户名\n    password: '@xxxxxx',\t// 用户密码\n    database: 'pt'\t// 选择的库\n}\n")])])]),e("h3",{attrs:{id:"_3、sql-js里面用来暴露一个方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3、sql-js里面用来暴露一个方法"}},[a._v("#")]),a._v(" 3、sql.js里面用来暴露一个方法")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("var mysql = require('mysql');\nvar database = require('./config')\n//向外暴露方法\nmodule.exports = {\n    query : function(sql,params,callback){\n        //每次使用的时候需要创建链接，数据操作完成之后要关闭连接\n        var connection = mysql.createConnection(database);        \n        connection.connect(function(err){\n            if(err){\n                console.log('数据库链接失败');\n                throw err;\n            }\n         //开始数据操作\n         //传入三个参数，第一个参数sql语句，第二个参数sql语句中需要的数据，第三个参数回调函数\n        connection.query( sql, params, function(err,results,fields ){\n           if(err){\n                console.log('数据操作失败');\n                throw err;\n            }\n            //将查询出来的数据返回给回调函数\n            callback && callback(results, fields);\n            //results作为数据操作后的结果，fields作为数据库连接的一些字段\n            //停止链接数据库，必须再查询语句后，要不然一调用这个方法，就直接停止链接，数据操作就会失败\n             connection.end(function(err){\n                  if(err){\n                      console.log('关闭数据库连接失败！');\n                      throw err;\n                  }\n              });\n           });\n       });\n    }\n};\n")])])]),e("h3",{attrs:{id:"_3、修改index-js"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3、修改index-js"}},[a._v("#")]),a._v(" 3、修改index.js")]),a._v(" "),e("p",[a._v("刚才的index.js就可以直接引入封装好的sql了")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("var db = require(\"../config/sql\")\n\napp.get('/api/get', function (req, res) {\n    db.query('SELECT * FROM name', (err, results, fields) => {\n        if(err){\n            console.log(err);\n        }\n        res.json({\n            method: 'GET',\n            data: results\n        })\n    })\n});   \n")])])]),e("p",[a._v("sql就封装完成了")]),a._v(" "),e("h2",{attrs:{id:"八、使用express路由"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#八、使用express路由"}},[a._v("#")]),a._v(" 八、使用express路由")]),a._v(" "),e("p",[a._v("要开发整套的接口，不可能一个js文件上开发，要模块化开发就得使用router，express的路由非常方便。")]),a._v(" "),e("h3",{attrs:{id:"_1、新建一个routes文件夹"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、新建一个routes文件夹"}},[a._v("#")]),a._v(" 1、新建一个routes文件夹")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("里面放需要模块化的接口文件（user.js）\n")])])]),e("h3",{attrs:{id:"_2、开发user-js"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、开发user-js"}},[a._v("#")]),a._v(" 2、开发user.js")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("var express = require(\"express\");\nvar api  = express.Router();\nvar db = require(\"../config/sql\")\n\napi.post('/getUserList', function (req, res) {\n    db.query('SELECT * FROM sys_user', (err, results, fields) => {\n        if(err){\n            res.json({\n                code: '1000',\n                message: err\n            })\n        }\n        res.json({\n            code: '0000',\n            data: results\n        })\n    })\n});\n\nmodule.exports = api;\n")])])]),e("h3",{attrs:{id:"_3、修改index-js-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3、修改index-js-2"}},[a._v("#")]),a._v(" 3、修改index.js")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v('var user = require("./routes/user")\napp.use("/api", user);\n')])])]),e("p",[a._v("这样user.js模块的接口就挂在api下面，可以暴露出来请求了")]),a._v(" "),e("h2",{attrs:{id:"九、mysql基本操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#九、mysql基本操作"}},[a._v("#")]),a._v(" 九、mysql基本操作")]),a._v(" "),e("p",[a._v("因为我们用的是mysql当做数据库来开发，，虽然后面为了写的更快，会使用sequelize这些工具，但是要做一个全栈，sql语句肯定要掌握。")]),a._v(" "),e("p",[a._v("此处的语句示例来自21分钟mysql入门教程:")]),a._v(" "),e("h3",{attrs:{id:"_1、查询"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、查询"}},[a._v("#")]),a._v(" 1、查询")]),a._v(" "),e("p",[a._v("select 列名称 from 表名称 where 条件")]),a._v(" "),e("p",[a._v("查询年龄在21岁以上的所有人信息: select * from students where age > 21")]),a._v(" "),e("h3",{attrs:{id:"_2、新增"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、新增"}},[a._v("#")]),a._v(" 2、新增")]),a._v(" "),e("p",[a._v("insert [into] 表名 [(列名1, 列名2, 列名3, ...)] values (值1, 值2, 值3, ...);")]),a._v(" "),e("p",[a._v('insert into students values(NULL, "吴建运", "男", 20, "13811371377");')]),a._v(" "),e("h3",{attrs:{id:"_3、update"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3、update"}},[a._v("#")]),a._v(" 3、update")]),a._v(" "),e("p",[a._v("update 表名称 set 列名称=新值 where 更新条件;")]),a._v(" "),e("p",[a._v('将id为5的手机号改为默认的"-": update students set tel=default where id=5;')]),a._v(" "),e("h3",{attrs:{id:"_4、delete"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4、delete"}},[a._v("#")]),a._v(" 4、delete")]),a._v(" "),e("p",[a._v("delete from 表名称 where 删除条件;")]),a._v(" "),e("p",[a._v("删除id为2的行: delete from students where id=2;")]),a._v(" "),e("h3",{attrs:{id:"_5、添加列"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5、添加列"}},[a._v("#")]),a._v(" 5、添加列")]),a._v(" "),e("p",[a._v("alter table 表名 add 列名 列数据类型 [after 插入位置];")]),a._v(" "),e("p",[a._v("在表的最后追加列 address: alter table students add address char(60);")]),a._v(" "),e("h3",{attrs:{id:"_6、修改列"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6、修改列"}},[a._v("#")]),a._v(" 6、修改列")]),a._v(" "),e("p",[a._v("alter table 表名 change 列名称 列新名称 新数据类型;")]),a._v(" "),e("p",[a._v('将表 tel 列改名为 telphone: alter table students change tel telphone char(13) default "-";')]),a._v(" "),e("h3",{attrs:{id:"_7、删除列"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7、删除列"}},[a._v("#")]),a._v(" 7、删除列")]),a._v(" "),e("p",[a._v("alter table 表名 drop 列名称;")]),a._v(" "),e("p",[a._v("删除 birthday 列: alter table students drop birthday;")]),a._v(" "),e("h3",{attrs:{id:"_8、重命名表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8、重命名表"}},[a._v("#")]),a._v(" 8、重命名表")]),a._v(" "),e("p",[a._v("alter table 表名 rename 新表名;")]),a._v(" "),e("p",[a._v("重命名 students 表为 workmates: alter table students rename workmates;")]),a._v(" "),e("h3",{attrs:{id:"_9、删除表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9、删除表"}},[a._v("#")]),a._v(" 9、删除表")]),a._v(" "),e("p",[a._v("drop table 表名;")]),a._v(" "),e("p",[a._v("删除 workmates 表: drop table workmates;")]),a._v(" "),e("h3",{attrs:{id:"_10、删除整个数据库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_10、删除整个数据库"}},[a._v("#")]),a._v(" 10、删除整个数据库")]),a._v(" "),e("p",[a._v("drop database 数据库名")]),a._v(" "),e("p",[a._v("samp_db 数据库: drop database samp_db;")]),a._v(" "),e("h2",{attrs:{id:"十、获取post请求参数的三种模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#十、获取post请求参数的三种模式"}},[a._v("#")]),a._v(" 十、获取post请求参数的三种模式")]),a._v(" "),e("h3",{attrs:{id:"一-www-form-urlencoded"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一-www-form-urlencoded"}},[a._v("#")]),a._v(" （一）www-form-urlencoded")]),a._v(" "),e("h4",{attrs:{id:"_1、要做需要-body-parse-插件支持"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、要做需要-body-parse-插件支持"}},[a._v("#")]),a._v(" 1、要做需要 body-parse 插件支持")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("npm install body-parse --save\n")])])]),e("h4",{attrs:{id:"_2、在index-js中使用body-parse"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、在index-js中使用body-parse"}},[a._v("#")]),a._v(" 2、在index.js中使用body-parse")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("var bodyParser = require('body-parser');\n\napp.use(bodyParser.urlencoded({    \n  extended: true\n}));\n")])])]),e("h4",{attrs:{id:"_3、在路由的接口内使用-body接收参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3、在路由的接口内使用-body接收参数"}},[a._v("#")]),a._v(" 3、在路由的接口内使用.body接收参数")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("// 查询接口\napi.post('/getUserList', function (req, res) {\n    var sql = `SELECT * FROM sys_user WHERE userid = ${req.body.userid}`\n    db.query(sql, (err, results, fields) => {\n        if(err){\n            return res.json({\n                code: '1000',\n                message: err\n            })\n        }\n        res.json({\n            code: '0000',\n            data: results\n        })\n    })\n});\n")])])]),e("h3",{attrs:{id:"二-application-json"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二-application-json"}},[a._v("#")]),a._v(" (二)application/json")]),a._v(" "),e("p",[a._v("一般api喜欢此类提交方式,数据使用方法,节省带宽.")]),a._v(" "),e("p",[a._v("bodyParser 支持此类参数解析.")]),a._v(" "),e("h4",{attrs:{id:"在index-js中使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在index-js中使用"}},[a._v("#")]),a._v(" 在index.js中使用")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("app.use(bodyparser.json())\n")])])]),e("h3",{attrs:{id:"三-form-data"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三-form-data"}},[a._v("#")]),a._v(" (三) form-data")]),a._v(" "),e("p",[a._v("这个很好理解，上传文件需要的请求头，需要使用另外一个插件connect-multiparty")]),a._v(" "),e("h4",{attrs:{id:"_1、安装connect-multiparty"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、安装connect-multiparty"}},[a._v("#")]),a._v(" 1、安装connect-multiparty")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("npm install connect-multiparty\n")])])]),e("h4",{attrs:{id:"_2、项目中引用connect-multiparty"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、项目中引用connect-multiparty"}},[a._v("#")]),a._v(" 2、项目中引用connect-multiparty")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("var multipart = require('connect-multiparty');\nvar multipartMiddleware = multipart();\n")])])]),e("h4",{attrs:{id:"_3、在路由的接口内使用-body接收参数-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3、在路由的接口内使用-body接收参数-2"}},[a._v("#")]),a._v(" 3、在路由的接口内使用.body接收参数")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("app.post('/formdata',multipartMiddleware, function (req, res) {\n  console.log(req.body);\n  res.send(req.body);\n});\n")])])]),e("h3",{attrs:{id:"写在结尾"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#写在结尾"}},[a._v("#")]),a._v(" 写在结尾")]),a._v(" "),e("p",[a._v("项目做到这儿，写几个增删改查的接口没啥问题了，但是如果想系统的搭建一个项目的架构，可能还需要很多的组件、工具")]),a._v(" "),e("p",[a._v("比如日志、实现ORM的sequelize等等")]),a._v(" "),e("p",[a._v("后面也会持续更新，接着一步一步完成自己的node项目")]),a._v(" "),e("p",[a._v("更多技术博客、心灵鸡汤，请关注微信公众号！")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/6/11/172a1eb983e50a94?w=258&h=258&f=jpeg&s=27365",alt:""}})])])}),[],!1,null,null,null);s.default=r.exports}}]);