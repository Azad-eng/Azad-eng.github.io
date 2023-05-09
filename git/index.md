# git&github


### Github配置ssh免密登录
**step1** 生成密钥对
```bash
$ ssh-keygen -t rsa -C "test@email.com"
```

**step2** 检查电脑系统用户目录下是否出现.ssh文件夹（ls: id_rsa,id_rsa.pub

**step3** 登录 github 打开个人中心 点击 `Settings-SSH and GPG keys-New SSHkey`，填写标题（比如：设备名+ssh -> sv7-ssh)，
将id_rsa.pub文件的全部内容粘贴进去

### Git疑难杂症
**1.`fetch-pack: unexpected disconnect while reading sideband packet early EOF unpack-objects failed`**  
-> git bash运行 `git config --global pack.windowsMemory 256m`

**2.`kex_exchange_identification: Connection closed by remote host Could not read from remote repository.`**  
-> 确保没有连接任何VPN

### 在IDEA上集成Git
{{< image src="/images/utils/Git1.png" caption="" >}}

### 团队协作&跨团队协作
{{< image src="/images/utils/Git2.png" caption="" >}}
