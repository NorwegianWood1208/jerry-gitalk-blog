(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{548:function(a,t,e){"use strict";e.r(t);var s=e(20),r=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("p",[a._v("接着一步一步完成自己的node项目，http协议里有4种常见数据的post方法,分别是\nwww-form-urlencoded、application/json、form-data以及text/xml，使用node开发post请求，我们需要借助插件，来获取不同请求从前端传来的参数。")]),a._v(" "),e("h1",{attrs:{id:"一-www-form-urlencoded"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一-www-form-urlencoded"}},[a._v("#")]),a._v(" （一）www-form-urlencoded")]),a._v(" "),e("p",[a._v("http默认的post请求是这种方式,注意这是是默认的提交方式,比如你写一个")]),e("form",[a._v("...."),e("input",{attrs:{type:"submite"}})]),a._v(" form表单,里面的submite按钮默认就是这种 www-form-urlencoded 方式提交的."),e("p"),a._v(" "),e("h2",{attrs:{id:"_1、需要-body-parse-插件支持"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、需要-body-parse-插件支持"}},[a._v("#")]),a._v(" 1、需要 body-parse 插件支持")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("npm install body-parse --save\n")])])]),e("h2",{attrs:{id:"_2、在index-js中使用body-parse"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、在index-js中使用body-parse"}},[a._v("#")]),a._v(" 2、在index.js中使用body-parse")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("var bodyParser = require('body-parser');\n\napp.use(bodyParser.urlencoded({    \n  extended: true\n}));\n")])])]),e("h2",{attrs:{id:"_3、在路由的接口内使用-body接收参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3、在路由的接口内使用-body接收参数"}},[a._v("#")]),a._v(" 3、在路由的接口内使用.body接收参数")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("// 查询接口\napi.post('/getUserList', function (req, res) {\n    var sql = `SELECT * FROM sys_user WHERE userid = ${req.body.userid}`\n    db.query(sql, (err, results, fields) => {\n        if(err){\n            return res.json({\n                code: '1000',\n                message: err\n            })\n        }\n        res.json({\n            code: '0000',\n            data: results\n        })\n    })\n});\n")])])]),e("h1",{attrs:{id:"二-application-json"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二-application-json"}},[a._v("#")]),a._v(" (二)application/json")]),a._v(" "),e("p",[a._v("一般api喜欢此类提交方式,数据使用方法,节省带宽.")]),a._v(" "),e("p",[a._v("bodyParser 支持此类参数解析.")]),a._v(" "),e("h2",{attrs:{id:"在index-js中使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在index-js中使用"}},[a._v("#")]),a._v(" 在index.js中使用")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("app.use(bodyparser.json())\n")])])]),e("h1",{attrs:{id:"三-form-data"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三-form-data"}},[a._v("#")]),a._v(" (三) form-data")]),a._v(" "),e("p",[a._v('我们在上传文件的时候,必须在form标签里做这样的标识enctype="multipart/form-data"')]),a._v(" "),e("p",[a._v("这种提交方式一般用在文件上传,所以 在node.js 里处理这类表单还需要 中间件 connect-multiparty ,他是专门处理此类post数据相关的依赖包.")]),a._v(" "),e("h2",{attrs:{id:"_1、安装connect-multiparty"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、安装connect-multiparty"}},[a._v("#")]),a._v(" 1、安装connect-multiparty")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("npm install connect-multiparty\n")])])]),e("h2",{attrs:{id:"_2、项目中引用connect-multiparty"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、项目中引用connect-multiparty"}},[a._v("#")]),a._v(" 2、项目中引用connect-multiparty")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("var multipart = require('connect-multiparty');\nvar multipartMiddleware = multipart();\n")])])]),e("h2",{attrs:{id:"_3、在路由的接口内使用-body接收参数-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3、在路由的接口内使用-body接收参数-2"}},[a._v("#")]),a._v(" 3、在路由的接口内使用.body接收参数")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("app.post('/formdata',multipartMiddleware, function (req, res) {\n  console.log(req.body);\n  res.send(req.body);\n});\n")])])]),e("h1",{attrs:{id:"四-text-xml"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四-text-xml"}},[a._v("#")]),a._v(" (四) text/xml")]),a._v(" "),e("p",[a._v("这种请求类型不是特别常见, body-parse默认也不解析这种数据格式")]),a._v(" "),e("p",[a._v("但是目前腾讯微信平台在使用这种数据交换格式")]),a._v(" "),e("p",[a._v("node.js 在express 如何解析这种格式,没有好的办法,所以只能想办法来解决，具体实现的步骤是：")]),a._v(" "),e("h2",{attrs:{id:"_1、使用body-parse得到字符串-然后再转化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、使用body-parse得到字符串-然后再转化"}},[a._v("#")]),a._v(" 1、使用body-parse得到字符串,然后再转化")]),a._v(" "),e("h2",{attrs:{id:"_2、利用req上定义的事件data来获取http请求流-end-事件结束请求流的处理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、利用req上定义的事件data来获取http请求流-end-事件结束请求流的处理"}},[a._v("#")]),a._v(" 2、利用req上定义的事件data来获取http请求流, end 事件结束请求流的处理")]),a._v(" "),e("h2",{attrs:{id:"_3、利用-xml2json-把上面得到的请求参数流-我们直接转化为字符串-转化为-json-对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3、利用-xml2json-把上面得到的请求参数流-我们直接转化为字符串-转化为-json-对象"}},[a._v("#")]),a._v(" 3、利用 xml2json 把上面得到的请求参数流(我们直接转化为字符串)转化为 json 对象")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("var xml2json=require('xml2json');\n\napp.post('/xml', function (req, res) {\n  req.rawBody = '';\n  var json={};\n  req.setEncoding('utf8');\n\n  req.on('data', function(chunk) { \n    req.rawBody += chunk;\n  });\n  req.on('end', function() {\n\n  json=xml2json.toJson(req.rawBody);\n  \n  res.send(JSON.stringify(json));\n  });\n  \n});\n")])])]),e("p",[a._v("停更半月了，因为疫情的原因在家办公了三周，由于家里电脑实在太烂，勉强完成工作还行，node项目力不从心，本周回归，后面还会继续保持一周一更的频率。")])])}),[],!1,null,null,null);t.default=r.exports}}]);