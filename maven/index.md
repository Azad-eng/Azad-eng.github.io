# Maven

### Maven简介
是一个软件项目管理及自动构建工具，主要解决了软件构建的两方面问题：一是软件是如何构建的，二是软件的依赖关系

### Maven工具的安装和配置
**1.官网下载[Maven](https://maven.apache.org/download.cgi):** 选择Binary zip archive

**2.配置环境变量：**  
添加系统变量（变量名：M2_HOME，变量值：maven安装目录D:\software\apache-maven-3.8.4），然后将变量名添加到path里（% M2_HOME %\bin  
**3.验证是否安装成功** mvn –v
{{< image src="/images/EFL/2023/maven1.png" caption="" >}}  

### 在IDEA中配置Maven
{{<admonition type=question title="为什么IDEA中有内置的Maven，还有自己配置？" >}}
`因为内置的maven修改settings.xml文件不方便，比如修改本机仓库地址不便等...所以需要使用自己安装的maven来覆盖IDEA中默认的配置，即在IDEA中指定maven的安装位置等信息`
{{< /admonition >}}  

**1.IDEA配置Maven的具体位置:**  
{{< image src="/images/EFL/2023/maven2.png" caption="" >}}
**2.IDEA配置Maven运行环境的具体位置:**  
{{< image src="/images/EFL/2023/maven3.png" caption="" >}}  
**3.创建Maven项目:**  
{{< image src="/images/EFL/2023/maven4.png" caption="" >}}
{{< image src="/images/EFL/2023/maven5.png" caption="" >}}  
**4.创建Maven项目能的报错及解决方案:**  
{{< image src="/images/EFL/2023/maven6.png" caption="" >}}  
**5.Pom(project-object-module)项目对象模型:**  
{{< image src="/images/EFL/2023/maven7.png" caption="" >}}
**6.项目(生命周期)的构建:**  
{{< image src="/images/EFL/2023/maven8.png" caption="" >}}
