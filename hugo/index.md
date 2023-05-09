# hugo建站笔记


### BLOG相关
##### 1. 打开本地博客
```bash
$ hugo server -e production --disableFastRender --port=1515 -D
```
##### 2. 更新博客网站内容流程
**step1-** 关闭本地博客

**step2-** 博客项目下打开bash
```bash
$ hugo
$ cd public
【将public下生成的静态文件全都提交并同步到github上的网站项目中】
$ git init (如果已是git项目则忽略该步骤）
$ git status
$ git add .
$ git commit -a -m "xxxx"
$ git push -u origin master --force
```
**step3-** 确认github项目是否更新

**step4-** 用ping命令找到存放github pages的主机的IP地址，比如[185.199.111.153]。在CMD终端里面用命令ping azad-eng.github.io便可完成

**step5-** 进入[域名管理网站](https://console.dnspod.cn/dns/azad-eng.space/record)，确保记录值IP地址和上面的保持一致

**step6-** 填写【项目-Settings-Pages-site中】的自定义域azad-eng.space并保存，然后检查网站地址是否更新

**step7-** 点击Visit site

##### 3. [LoveIt主题admonition样式代码](https://lewky.cn/posts/hugo-3.html/#%E4%B8%BB%E9%A2%98%E8%87%AA%E5%B8%A6%E7%9A%84admonition%E6%A0%B7%E5%BC%8F)

##### 4. 注意事项
- 项目bin目录地址更改以后，环境变量里的hugo/bin地址也要相应改动

##### 5.文章属性配置
```toml
//标题
title: ""  
//副标题  
subTitle: ""
//主页显示描述，与<!- -more- -> 搭配使用，如果没有该属性，主页显示正文开头  
description: ""  
//文章是否出现在主页  
hiddenFromHomePage: true 
//文章链接地址  
url: /ZenMotor/    
tags: [ "标签0", "标签1", "..."  ]  
categories:  
  - "分类0"  
  - "分类1"  
  - ...  
  
//创建日期  
date: 2022-02-22  
//更新日期  
lastmod: 2022-2-22   
//是否打开评论
comment: false 
//是否为草稿，是则部署时会不显示文章
draft: true    
```
