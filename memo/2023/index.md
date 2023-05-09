# 2023


### DOS(磁盘操作系统)
##### 1. 文件夹操作

- **l**ist**s** 当前目录下的所有文件

```
$ ls
```
- **c**hange **d**irectory 进入指定目录

```
cd <path to directory>
/* 切换到主目录 */
cd ~ 
/* 切换到父目录 */
cd ..
```
-**m**a**k**e a new **dir**ectory 用给定的名称创建一个新目录

```
mkdir <directory name>
```
- **m**o**v**e the file 将给定源的文件移动到给定的目标

```
mv <source path> <destination path>
```

### Windows PowerShell
#### 命令摘要
##### 1. 文件夹操作
- 解压指定目录下的文件
```powershell
Expand-Archive -<DestinationPath> . -Force <zipFile>
```
#### 常用操作

- 在任意文件目录下：`shift + 右键单击“在此处打开PowerShell窗口”`将会自动切换到该文件目录

### Git Bash
#### 命令摘要
##### 1. 文件夹操作
- 解压指定目录下的文件
```bash
unzip <zipFile>
```
#### 常用操作

- `ctrl + c` 退出命令行模式

### IDEA相关

##### 1. 创建Javafx-Maven项目
**step1-** 创建Javfx项目 `File-New-Project-Java FX-Next-Finish`

**step2-** 添加Maven框架 `右键点击项目-Add Framework Support-Maven-Ok`

**step3-** 在 `Project Structrue-Modules-Sources` 按下图设置项目文件目录
{{< image src="/images/java/2023/maven.png" caption=""  >}}

**step4-** 将自动生成的fxml文件移动到resources/fxml/下，注意导入Maven以后必须用一个前导斜杠调用它，比如：
`FXMLLoader.load(getClass().getResource("/fxml/sample.fxml"))`

##### 2. 显示version control
点击`VCS-Browse VCS Respository-Show Git Respository Log`
|| 取消勾选`File-Settings-Version Control-Commit-[Use non-modal commit interface]`

### JAVA
##### 经验总结
{{< admonition type=example title="总结" >}}
1.程序异常时——>检查程序本身逻辑

——>>是否由未被捕获的异常（比如空指针）导致——>>>在可能出现异常的地方用try-catch包出再调试

——>>是否由未被识别的命名冲突导致
{{< /admonition >}}

##### Runtime类 —— 程序调用外部exe

{{< admonition abstract >}}
Java 中，Runtime 类用于与每个 Java 应用程序交互，每个 Java 应用程序都有一个 Runtime 类的单个实例，允许应用程序与应用程序运行的环境进行交互
{{< /admonition >}}


```java
/**
 * 调用外部exe程序并通过process.getInputStream()捕获外部程序的输出流，然后System.out
 * to learn: 对于应用程序来说，其输出流有两种：
                    标准输出流
                        标准错误流
             因此，一个健壮的代码应同时对这两种输出流进行处理
*/
class RuntimeTest{
    public static void main(String[] args) throws IOException {
        final Process process = Runtime.getRuntime().exec("E:\\xx\\xx.exe");
        //get input stream
        handleProcessStreamByLine(process.getInputStream());
        handleProcessStreamByBytes(process, process.getInputStream());
        //get error stream
        handleProcessStreamByLine(process.getErrorStream());
        handleProcessStreamByBytes(process, process.getErrorStream());
        //to learn: 验证外部程序是否执行成功
        // Process.exitValue()/Process.waitFor() 获取外部程序的返回值为 0 表示执行成功，其余值表示外部程序执行出错
        try {
            int exitValue = process.waitFor();
            System.out.println("process exitValue:" + exitValue);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    
    private void handleProcessStreamByLine(InputStream streamToHandle) {
        new Thread(() -> {
            BufferedReader br = new BufferedReader(new InputStreamReader(streamToHandle));
            String line;
            try {
                while ((line = br.readLine()) != null) {
                    System.out.println(line);
                }
                br.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }).start();
    }

    private void handleProcessStreamByBytes(Process process, InputStream streamToHandle){
        new Thread(() -> {
            try {
                while (process.isAlive()) {
                    int length = streamToHandle.available();
                    if (length > 0) {
                        byte[] bytes = new byte[streamToHandle.available()];
                        streamToHandle.read(bytes);
                        System.out.println(new String(bytes));
                    }
                }
                streamToHandle.close();
            } catch (IOException e) {
                 e.printStackTrace();
            }
        }).start();
    }
}
```

### JAVAFX
##### TabPane
```xml
<TabPane prefHeight="100.0" prefWidth="200.0">
    <Tab fx:id="tab1" closable="false" text="tab1">
        <fx:include source="options/tab1.fxml"/>
    </Tab>
    <Tab fx:id="tab2" onClosed="#closeTabEvent" text="tab2">
        <fx:include source="options/tab2.fxml"/>
    </Tab>
</TabPane>
```
{{< admonition type=bug title="细节注意" open=false >}}
1.`closable`=false表示此tab不可以关闭

2.`onClosed`事件在关闭tab后触发

3.`source`的路径的根目录是fxml。比如resources/fxml/options/..
{{< /admonition >}}

###树莓派
在Raspberry Pi上打开一个终端窗口，可以通过单击桌面上的“终端”图标或`Ctrl+Alt+T`。

###Linux命令

```bash
#浏览已安装的程序
dpkg --list
#查看文件权限和所有者等详细信息
ls -l filename
```

### 其它
##### 检索小技巧
搜索任意API文档 包名关键字+Java doc
##### 1.下载任意网页的图标（favicon）
地址搜索栏：`域名/favicon.ico`

##### 2.项目启动端口被占用的解决办法
1.查看被占用的端口进程：15490是被占用的端口号
```cmd
netstat -aon|findtr 15490
-> TCP    127.0.0.1:15490        0.0.0.0:0 
```
2.根据PID找到被占用端口的进程：15248是PID
```cmd
tasklist|findstr 15248
-> v2ray.exe                    15248 Console                    4     26,032 K
```
3.通过进程名称终止进程
```cmd
taskkill /f /t /im v2ray.exe
-> 成功: 已终止 PID 15248 (属于 PID 15156 子进程)的进程
```
