# tcb-hackthon-secondHand

#### 项目名称：武院二手交易

#### 介绍

​		欢迎使用该小程序，本程序基于微信云开发完成，是本人参与腾讯布道师培训完成的一个项目，主要在于解决校园二手物品的问题，数据存储使用小程序云开发功能，全套程序已开源在Github主页。灵感的起源，来自身边朋友及武院丹桂信箱，很多学长学姐们即将毕业一些好的好的学习考研资料，还有很多舍不得的物品但有不舍得丢掉想要很好的处理，还有一些书籍，希望这些东西能找到自己最好的归宿。

#### 项目效果截图

![微信图片_20200406225055.jpg](http://ww1.sinaimg.cn/large/005W6BOngy1gdkfs07qs4j30u01s6mzm.jpg)

![微信图片_20200406224942.jpg](http://ww1.sinaimg.cn/large/005W6BOngy1gdkfu4gc53j30u01s6dh6.jpg)



![微信图片_20200406225020.jpg](http://ww1.sinaimg.cn/large/005W6BOngy1gdkfuqg59mj30u01s6gmu.jpg)

![微信图片_20200406225111.jpg](http://ww1.sinaimg.cn/large/005W6BOngy1gdkfvgyqdoj30u01s6wfu.jpg)

![微信图片_20200406224833.jpg](http://ww1.sinaimg.cn/large/005W6BOngy1gdkfvwarnjj30u01s6q64.jpg)

![微信图片_20200406225030.jpg](http://ww1.sinaimg.cn/large/005W6BOngy1gdkfwnpphlj30u01s6ta9.jpg)

#### 本程序完全开源[https://gitee.com/leidb/tcb-hackthon-secondHand/blob/master/LICENSE]


#### 安装教程和使用说明

1. 直接下载到本地，然后导入开发者工具

   > https://gitee.com/leidb/tcb-hackthon-secondHand.git
   >
   > 小程序开发综合文档地址：[https://developers.weixin.qq.com/miniprogram/dev/framework/](https://developers.weixin.qq.com/miniprogram/dev/framework/ "https://developers.weixin.qq.com/miniprogram/dev/framework/")

2. 开通云环境

   > 云开发官方文档说明：[https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html "https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html")

3. 修改部分配置信息

   	"appid": "你自己的appid",
   	    env: '你自己的云环境id',

4. 进去云函数目录 安装所需要的模块 终端输入npm install

5. 创建云数据库 books,sh_user,sh_items,并把数据库权限设置为`所有用户可读，仅创建者可读写`

6. | 集合名称 | 存储内容 |
   | -------- | -------- |
   | books    | 书籍信息 |
   | sh_user  | 用户信息 |
   | sh_items | 商品信息 |

7. banner的轮播图为云储存里面的图片，需自备

   

#### 



#### 参与贡献

1.  Fork 本仓库
2.  新建 Feat_xxx 分支
3.  提交代码
4.  新建 Pull Request


#### 码云特技

1.  使用 Readme\_XXX.md 来支持不同的语言，例如 Readme\_en.md, Readme\_zh.md
2.  码云官方博客 [blog.gitee.com](https://blog.gitee.com)
3.  你可以 [https://gitee.com/explore](https://gitee.com/explore) 这个地址来了解码云上的优秀开源项目
4.  [GVP](https://gitee.com/gvp) 全称是码云最有价值开源项目，是码云综合评定出的优秀开源项目
5.  码云官方提供的使用手册 [https://gitee.com/help](https://gitee.com/help)
6.  码云封面人物是一档用来展示码云会员风采的栏目 [https://gitee.com/gitee-stars/](https://gitee.com/gitee-stars/)
