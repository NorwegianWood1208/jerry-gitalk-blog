(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{546:function(s,a,t){"use strict";t.r(a);var n=t(15),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"vue-screening-drawer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-screening-drawer"}},[s._v("#")]),s._v(" vue-screening-drawer")]),s._v(" "),t("blockquote",[t("p",[s._v("A Vue mobile plugin")])]),s._v(" "),t("h2",{attrs:{id:"开发背景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开发背景"}},[s._v("#")]),s._v(" 开发背景")]),s._v(" "),t("p",[s._v("项目当中需要一个右侧弹出的筛选框，有点类似于京东的商品筛选框")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/657e2340aaae4389b4afbfda70ae605a~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),s._v(" "),t("p",[s._v("H5项目使用的UI框架是滴滴开源的mand-mobile，框架里面没有这种功能的筛选框")]),s._v(" "),t("p",[s._v("找了很多框架，没有遇到完全合适的，于是决定自己封装一个")]),s._v(" "),t("p",[s._v("最后的效果是这样的")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e6eadd5b8163458585fddf99d1d8a64c~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),s._v(" "),t("h2",{attrs:{id:"使用手册"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用手册"}},[s._v("#")]),s._v(" 使用手册")]),s._v(" "),t("h3",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),t("p",[s._v("npm install vue-screening-drawer --save-dev")]),s._v(" "),t("h3",{attrs:{id:"引入"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#引入"}},[s._v("#")]),s._v(" 引入")]),s._v(" "),t("p",[s._v("import screeningDrawer from 'vue-screening-drawer'")]),s._v(" "),t("h3",{attrs:{id:"项目使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#项目使用"}},[s._v("#")]),s._v(" 项目使用")]),s._v(" "),t("h5",{attrs:{id:"html"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#html"}},[s._v("#")]),s._v(" html")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("screeningDrawer\n      :isPopupShow"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"true"')]),s._v("\n      :btnTitle"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"'提交'\"")]),s._v("\n      :item-value"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"itemValue"')]),s._v("\n      @success"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hanleCatch"')]),s._v("\n  /"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  \n  // itemValue控制各个模块展示的数据\n  // @success点击按钮执行的回调函数\n  // :btnTitle控制选择框按钮\n  // :isPopupShow控制弹框是否展示\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("h5",{attrs:{id:"js"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#js"}},[s._v("#")]),s._v(" js")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("  itemValue: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      title: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'所属公司'")]),s._v(",\n      key: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'entName'")]),s._v(",\n      activeName: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'123456'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(",\n      options: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          label: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'阿里'")]),s._v(",\n          value: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1234565'")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      title: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'企业金额'")]),s._v(",\n      key: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'amt'")]),s._v(",\n      activeName: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'10000'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(",\n      options: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          label: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1万'")]),s._v(",\n          value: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'10000'")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    hanleCatch "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      console.log"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    \n    // title 各个item的title\n    // key 各个item的key\n    // activeName 默认点亮的option\n    // options item需要展示的list\n    \n    返回的数据格式\n    \n    entName: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),s._v("\n    \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br")])]),t("p",[s._v("第一次开源插件，中间遇到的坑非常多，明天会把开源路上遇到坑更新一篇博客")]),s._v(" "),t("p",[s._v("这个插件功能比较简单，后期还会继续的开发一些其他有趣的小轮子")])])}),[],!1,null,null,null);a.default=e.exports}}]);