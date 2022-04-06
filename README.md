# 《寻找年度锦鲤》答题类H5交互案例
一款答题类 H5 交互案例，为小米商城开发的线上项目。
仓库版本已删去主要 SDK。仅展示答题功能和页面逻辑。

前端基于 Vue2 开发，自适应引入 

后端基于腾讯云云开发 CloudBase。

>### 目录概述
- XMA-Backserver 

后端文件，腾讯云云开发 CloudBase 的云函数文件，Nodejs。用户、抽奖、抽题等逻辑均放在后端处理。

- XMA-OnlineVersion

项目的线上发布版本，已注释掉网络相关功能。可在本地实现答题等效果。

使用 flexible.js 适配 16:9、全面屏、桌面、折叠屏、iPad

外部访问 https://jakeloocheng.github.io/XM-H5AnswerGame-LookingForKoi/XMA-OnlineVersion/index.html

- XMA-Tool

线上测试工具，测试主要接口是否正常运行。抽奖部分调用甲方接口，会维护抽奖逻辑和抽奖次数，并对小米账号进行检查等。

>### 设计来自
公众号：池灵Chillin
