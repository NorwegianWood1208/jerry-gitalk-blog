(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{547:function(t,e,a){"use strict";a.r(e);var s=a(15),i=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[t._v("#")]),t._v(" 问题")]),t._v(" "),a("p",[t._v("element是vue功能比较全的后台管理系统UI，但是已经不维护了，在一些细节上还是有一点问题，项目中遇到一点问题，如下图：")]),t._v(" "),a("p",[t._v("当出现横向滚动条的时候，滚动条在下方，向右滑动的时候表头就看不到了")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9b8d80c0655e4003ba87478fd00bcef6~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[t._v("#")]),t._v(" 解决方案")]),t._v(" "),a("h4",{attrs:{id:"_1、出现超宽和超高的列有可能是某个单元框文字太多"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、出现超宽和超高的列有可能是某个单元框文字太多"}},[t._v("#")]),t._v(" 1、出现超宽和超高的列有可能是某个单元框文字太多")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('可以加一个 :show-overflow-tooltip="true"，超宽以后就会显示...，然后会加一个hover的tips\n')])])]),a("h4",{attrs:{id:"_2、table组件提供了一个height属性-当加上这个属性-表头就固定住了"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、table组件提供了一个height属性-当加上这个属性-表头就固定住了"}},[t._v("#")]),t._v(" 2、Table组件提供了一个height属性，当加上这个属性，表头就固定住了")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e82b331c0d7f4e11bb60de9a14e2054e~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),t._v(" "),a("p",[t._v("但是这个高度是固定的，遇到分辨率不一样的屏幕就会效果不一样")]),t._v(" "),a("p",[t._v("因为高度是固定的，当遇到只有一条数据的会出现下面大量留白的情况")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d6b247be550d428bbeac28504950c820~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"最终解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最终解决方案"}},[t._v("#")]),t._v(" 最终解决方案")]),t._v(" "),a("h4",{attrs:{id:"_1、当表格的body高于视图高度时"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、当表格的body高于视图高度时"}},[t._v("#")]),t._v(" 1、当表格的body高于视图高度时")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("tableHeight = 获取视图的高度 - 可滑动的高度 - 视图内其他的高度\n")])])]),a("h4",{attrs:{id:"_2、当表格的body不高于视图高度时"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、当表格的body不高于视图高度时"}},[t._v("#")]),t._v(" 2、当表格的body不高于视图高度时")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("tableHeight = .el-table__body的高度 + .el-table__header的高度\n")])])]),a("h4",{attrs:{id:"_3、当没有数据的时候"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、当没有数据的时候"}},[t._v("#")]),t._v(" 3、当没有数据的时候")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("tableHeight = null\n")])])]),a("h3",{attrs:{id:"代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码"}},[t._v("#")]),t._v(" 代码")]),t._v(" "),a("p",[t._v("封装一个方法放设置高度的function")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("/**\n * @author Wujy\n * @date 2020/11/10\n * @Description: 设置table的固定滚筒条\n*/\nexport function setHeight() {\n  const offsetTop = window.innerHeight - this.$refs.table.$el.offsetTop - 210\n  const offsetBodyHeight = document.querySelector('.el-table__body').offsetHeight\n  console.log(offsetTop, offsetBodyHeight)\n  if (this.tableList.length && offsetBodyHeight < offsetTop) {\n    this.tableHeight = offsetBodyHeight + 75\n  } else if (!this.tableList.length) {\n    this.tableHeight = null\n  } else {\n    this.tableHeight = offsetTop\n  }\n}\n")])])]),a("p",[t._v("页面的业务代码，在initTable来操作方便处理")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("initTable() { // table列表查询\n  getList(this.searchParams).then(res => {\n    if (res.data.list) {\n      this.$nextTick(() => {\n        setHeight.call(this)\n      })\n      this.tableList = res.data.list\n    }\n  }).catch(err => {\n  })\n},\n")])])]),a("p",[t._v("最后效果")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/821f4a49b4ce49849c009a8c4d7436c4~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"写在最后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[t._v("#")]),t._v(" 写在最后")]),t._v(" "),a("p",[t._v("除了这个表格的固定表头功能，对比ant-desgin还有很多不人性化的设计，比如查询列表上面的超宽隐藏，也需要自己来处理一下")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/76232fb895d84040addf0f1b88a35f69~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),t._v(" "),a("p",[t._v("可以用element提供的Collapse来解决")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b1442b1a4d174388b077347257e8c2b6~tplv-k3u1fbpfcp-watermark.image",alt:""}})])])}),[],!1,null,null,null);e.default=i.exports}}]);