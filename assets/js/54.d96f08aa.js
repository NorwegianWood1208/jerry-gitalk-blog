(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{538:function(s,a,t){"use strict";t.r(a);var e=t(15),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"一、关于配置和教育优惠"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、关于配置和教育优惠"}},[s._v("#")]),s._v(" 一、关于配置和教育优惠")]),s._v(" "),t("p",[s._v("因为之前用的Thinkpad实在是撑不住了，决定入手一个Mac book。关于Air或者pro，如果处理日常办公Air应该就足够了，又轻薄又好看，有编程需求还是推荐pro。")]),s._v(" "),t("p",[s._v("当前市场上主要是20款和21款的pro，20款的M1芯片21款M1  pro，用官网的话说M1是快，M1 pro是超快，20款9999起，21款14999起，这个看个人。我选择是的21款的pro，感觉16英寸的太大了，所以选择的是14英寸的。")]),s._v(" "),t("p",[s._v("关于教育优惠，21款14英寸的官网价格是14999，使用教育优惠的价格是13899，可以选择官网直接验证，缺点是慢，下单一个月左右可以到手，线下店需要带上学生证、身份证和学信网验证，热门款还不一定有货。推荐京东到家，可以线上直接验证，发个学信网验证码就可以，下单当天就可以拿到手了。")]),s._v(" "),t("h2",{attrs:{id:"二、基础环境配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、基础环境配置"}},[s._v("#")]),s._v(" 二、基础环境配置")]),s._v(" "),t("h3",{attrs:{id:"homebrew"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#homebrew"}},[s._v("#")]),s._v(" homebrew")]),s._v(" "),t("p",[s._v("这个有点像npm，是一种包管理工具，拥有安装、卸载、更新、查看、搜索等很多实用的功能。简单的一条指令，就可以实现包管理，而不用你关心各种依赖和文件路径的情况，十分方便快捷。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("官网地址不是特别的稳定，非常容易崩，推荐中科院的安装地址，傻瓜式安装。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("重启命令行以后就可以用了")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("brew install node@版本号\nbrew link node@版本号\nbrew install yarn\nbrew install git\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"git安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git安装"}},[s._v("#")]),s._v(" git安装")]),s._v(" "),t("p",[s._v("跟Windows安装git基本一样")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('# 配置用户名\ngit config --global user.name "xxx"  \n# 配置邮箱\ngit config --global user.email "xxx" \n# 生成密钥\nssh-keygen -t rsa -C "xxx"\n# 查看配置信息\ngit config --list\n# Git默认对大小写不敏感，更改为敏感\ngit config core.ignorecase false\n\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("生成公钥以后使用命令行查看生成的公钥，添加到gitlab或者码云即可")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("cd .ssh\n\ncat id_rsa.pub\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"三、常用软件安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、常用软件安装"}},[s._v("#")]),s._v(" 三、常用软件安装")]),s._v(" "),t("h3",{attrs:{id:"vscode和谷歌浏览器官网下载即可"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vscode和谷歌浏览器官网下载即可"}},[s._v("#")]),s._v(" vscode和谷歌浏览器官网下载即可")]),s._v(" "),t("h3",{attrs:{id:"webstorm官网下载然后你懂的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webstorm官网下载然后你懂的"}},[s._v("#")]),s._v(" webstorm官网下载然后你懂的")]),s._v(" "),t("h3",{attrs:{id:"royal-tsx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#royal-tsx"}},[s._v("#")]),s._v(" Royal TSX")]),s._v(" "),t("p",[s._v("这个还是挺重要的，Mac Os不能用xshell，所以需要一个代替xshell的工具，试了finalXshell,个人感觉不如这个好用，操作简单又稳定。")]),s._v(" "),t("h4",{attrs:{id:"_1、官网下载mac-os版本的包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、官网下载mac-os版本的包"}},[s._v("#")]),s._v(" 1、官网下载Mac OS版本的包")]),s._v(" "),t("h4",{attrs:{id:"_2、安装以后记得全屏"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、安装以后记得全屏"}},[s._v("#")]),s._v(" 2、安装以后记得全屏")]),s._v(" "),t("h4",{attrs:{id:"_3、安装插件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、安装插件"}},[s._v("#")]),s._v(" 3、安装插件")]),s._v(" "),t("h4",{attrs:{id:"_4、新建文件夹"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、新建文件夹"}},[s._v("#")]),s._v(" 4、新建文件夹")]),s._v(" "),t("h4",{attrs:{id:"_5、在文件夹内新建terminal和sftp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5、在文件夹内新建terminal和sftp"}},[s._v("#")]),s._v(" 5、在文件夹内新建Terminal和SFTP")]),s._v(" "),t("h2",{attrs:{id:"四、用完反馈"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、用完反馈"}},[s._v("#")]),s._v(" 四、用完反馈")]),s._v(" "),t("p",[s._v("最直观的感受就是非常快，尤其是让人挠头的Excel，以后再也不用被人诟病了。其次就是非常舒服，按键、触摸板、UI配色都非常舒服。")]),s._v(" "),t("p",[s._v("不好的地方就是束缚性很强，谷歌浏览器的一些小插件肯定是不能用了，破解版的webstorm也不能用了，相比来说键盘按键的不适应反而还好。")]),s._v(" "),t("p",[s._v("工欲善其事 必先利其器，2022撸起袖子加油干吧！")])])}),[],!1,null,null,null);a.default=r.exports}}]);