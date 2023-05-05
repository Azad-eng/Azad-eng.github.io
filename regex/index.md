# 正则表达式初识


### Regex正则表达式
#### 组成
##### （1）字符类
**1.字符集：`[ABC]` 匹配集合中的任何一个字符**

例子：[`aeiou`] 匹配：gl`i`b j`o`cks v`e`x dw`a`rv`e`s!

**2.否定集`[^ABC]` 匹配不在集合中的任何一个字符**

例子：[`^aeiou`] 匹配：`gl`i`b j`o`cks v`e`x dw`a`rv`e`s!`

**3.范围`[A-Z]` 匹配（含）两个指定字符之间的任意字符**
例子：[`g-s`] 匹配：abcdef`ghijklmnopqrs`tuvwxyz

**4.点`.` 匹配除换行符之外的任何一个字符**
相当于[^\n\r]

例子：`.`匹配：`glib jocks vex dwarves!`

**5.匹配任何`[\s\S]` 一个字符集，可用于匹配任何一个字符，包括换行符**

例子：[`\s\S`]匹配：`glib jocks vex dwarves!`

**6.单词`\w` 匹配任何一个单词字符（字母数字和下划线）**
仅匹配低位 ASCII 字符（无重音字符或非罗马字符），相当于[A-Za-z0-9_]

例子：`\w`匹配：`bonjour`,`mon fr`è`re`
**7.非单词`\W` 匹配任何一个非单词字符（字母数字和下划线）**
相当于[^A-Za-z0-9_]

例子：`\W`匹配：bonjour`,`mon`NULL`fr`è`re

**8.数字`\d` 匹配任何一个数字字符 (0-9)**
相当于[0-9]

例子：`\d`匹配：+`1`-(`444`)-`555`-`1234`

**9.非数字`\D` 匹配任何一个非数字字符 (0-9)**
相当于[^0-9]

例子：`\D`匹配：`+`1`-(`444`)-`555`-`1234

**10.空格`\s` 匹配任何一个空白字符（空格、制表符、换行符）**
相当于[^0-9]

例子：`\s`匹配：glib`NULL`jocks`NULL`vex`NULL`dwarves!

**11.非空格`\S` 匹配任何一个非空白字符（空格、制表符、换行符）**
相当于[^0-9]

例子：`\S`匹配：`glib` `jocks` `vex` `dwarves!`

##### （2）量词和交替
**1.加号：`+`匹配 1 个或多个前面的标记**

例子：`b\w+` 匹配：b `be` `bee` `beer` `beers`

**2.星号：`*`匹配 0 个或多个前面的标记**

例子：`b\w*` 匹配：`b` `be` `bee` `beer` `beers`

**3.量词：`{1,3}`匹配指定数量的的标记**  {1,3}将匹配 1 到 3，{3}将完全匹配 3，{3,}将匹配 3 个或更多

例子：`b\w{2,3}*` 匹配：b be `bee` `beer` `beer`s

**4.optional：`？`匹配前面标记的 0 或 1 个，有效地使其成为可选的**

例子：`colou?r*` 匹配：`color` `colour`

**5.lazy：`？`使前面的量词惰性化，使其匹配尽可能少的字符**  默认情况下，量词是贪婪的，会匹配尽可能多的字符

例子：`b\w+?*` 匹配：b `be` `be`e `be`er `be`ers

**6.交替：`|`类似于布尔 OR。匹配之前或之后的表达式**  它可以在一个组内运行，也可以在整个表达式上运行

例子：`b(a|e|i)d` 匹配：`bad` bud bod `bed` `bid`

##### （3）锚点
**1.开始：`^`匹配字符串的开头**  如果m启用了多行标志 ( )，则匹配一行的开头。这匹配一个位置，而不是一个字符

例子：`^\w+` 匹配：`she` sells seashells

**2.结尾：`$`匹配字符串的结尾**  如果m启用了多行标志 ( )，则匹配一行的结尾。这匹配一个位置，而不是一个字符

例子：`\w+$` 匹配：she sells `seashells`

**3.单词边界：`\b`匹配单词字符和非单词字符或位置（字符串的开始/结束）之间的单词边界位置**
例子：`s\b` 匹配：she sell`s` seashell`s`

**4.非单词边界：`\B`匹配任何不是单词边界的位置** 这匹配一个位置，而不是一个字符。

例子：`s\B` 匹配：`s`he `s`ells `s`ea`s`hells
#### 参考