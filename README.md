# Schematic Designer

[![language](https://img.shields.io/badge/language-HTML%20%7C%20JavaScript-brightgreen.svg)](https://centixkadon.github.io/Schematic/)

电路原理图设计软件

## 〇〇〇 代码规范（重要） 〇〇〇

首先，这是一个好习惯。

其次，虽然我会尽可能将各模块去耦，这样负责一个模块的人不需要看其他模块的代码，只需要知道怎么使用就行。但是我是不得不检查代码的，所以还是希望代码能够尽量一致。

### 代码格式化

下载
[Visual Studio Code](https://code.visualstudio.com/docs/?dv=win)
，安装后打开VSCode的设置（快捷键Ctrl+逗号，或者依次按Alt+F、P、S、Enter），至少将以下代码拷贝到设置中：

```javascript
{
  "editor.tabSize": 2,
  "editor.detectIndentation": false,
  "editor.wrappingIndent": "indent",
  "editor.formatOnType": true,
  "editor.formatOnPaste": true,
  "editor.renderWhitespace": "boundary"
}
```

或者使用我的全部设置：

```javascript
{
  "editor.tabSize": 2,
  "editor.detectIndentation": false,
  "editor.wordWrap": "on",
  "editor.wordWrapColumn": 80,
  "editor.wrappingIndent": "indent",
  "editor.formatOnType": true,
  "editor.formatOnPaste": true,
  "editor.renderWhitespace": "boundary",
  "window.restoreWindows": "all",
  "window.newWindowDimensions": "maximized",
  "workbench.colorTheme": "Default Light+"
}
```

使用其它编辑器如 Notepad++, UltraEdit 的，参照已完成的代码（特别是 js/main.js）和下一小节的代码风格更改编辑器代码格式化的相关设置。尽量不要使用记事本。

### 代码风格

以下规范重要性依次递减：

1. 缩进使用2个空格，既不是4个空格也不是1个制表符(Tab)
1. 正确缩进
1. 左大括号不放置在新行
1. 重要的变量名、函数名（特别是需要给其它模块使用的）用驼峰式命名法
   1. 能够从名字看出其作用，类似 schComponents ， appendComponent(...)
   1. 全局变量加 sch 前缀，避免冲突，如 schComponents
      1. 更进一步地，使用复数形式来区分变量的收益也不小
   1. 函数名一般包括一个谓语，一个宾语，两个完整单词造成冲突的可能性较低，所以不加前缀，如 appendComponent
   1. 虽然作业中应该不需要自定义非匿名类，以防万一，统一成类名中各单词首字母均大写
1. 正确使用空格和空格分隔
1. 不要过分注释
1. 尽量注释
1. 行末不要留空白字符

## 〇〇〇 git的使用 〇〇〇

git和Github不一样。git是代码版本控制系统的命令行程序，Github相当于提供云端备份。

包括git的下载、添加User Name和Email Address信息、修改文件编码、clone、stage change、commit、push、fetch、merge等，具体可自行搜索用法。

安装从[git下载地址](https://git-scm.com/download/win)下载的安装包后会包括Git CMD、Git Bash和Git GUI，前两者是命令行，Git GUI相当于常用命令的可视化界面。

## 一、使用说明

待更新

## 二、进度

以下斜体加标记斜体的部分可先不完成

- [x] 元器件库结构体
  - [x] 新建元器件库结构体相关文件：xxx.js yyy.js
  - [x] 结构体设计
  - [x] 在jQuery对象中添加成员函数.xxx(yyy)，调用之后可以在对应DOM对象下使用svg画出对应元器件
  - [x] _◎提供接口函数xxx(yyy, zzz1, ...)，调用之后可以添加元器件_
- [ ] 电路原理图结构体（包括JSON文件存取）
  - [x] 新建相关文件
  - [x] 设计结构体
  - [x] 提供接口，在特定位置画出元器件
  - [x] 提供接口，移动元器件
  - [ ] _◎将电路原理图保存成文件_
  - [ ] _◎从文件读取出电路原理图_
- [ ] 添加事件相关函数
  - [ ] 在鼠标所在位置画出元器件
  - [ ] 移动元器件
  - [ ] 删除元器件
- [ ] 添加各监听事件
  - [ ] 遍历元器件库，画出按钮
  - [ ] 绑定
    - [ ] 绑定元器件和鼠标
    - [ ] 取消绑定元器件
    - [ ] 移动绑定的元器件
    - [ ] 放置绑定的元器件
  - [ ] 选择
    - [ ] 选择元器件
    - [ ] 取消选择元器件
    - [ ] 选择绑定的元器件
  - [ ] 删除选择的元器件
  - [ ] _◎连线（添加元器件中连接点的监听事件）_
- [ ] 连线
  - [ ] 添加特殊元器件
    - [ ] 连接点
    - [ ] 连接点可能单独成一元器件，也可能包含在其他元器件中
  - [ ] 提供接口，连接任意两连接点
    - [ ] 创建连线
    - [ ] 添加和元器件一样的监听事件
    - [ ] _◎在连线状态下，在连接到第二个连接点前，不断新建连接点_
    - [ ] _◎添加特殊监听事件，连接点移动时，变化连线_
  - [ ] 删除连线
    - [ ] _◎删除不必要的连接点_
- [ ] _◎网页布局、样式使用_
- [ ] 添加具体元器件到库（大量重复性劳动）
- [ ] 电路原理图设计软件研发小组Github分部集合情况
  - [x] 李明已加入
  - [x] 戚李阳已加入
  - [x] 张延已加入
  - [x] 朱昊川已加入
- [ ] 
未完待续

### 说明

- 完成后自行将\[ \]改成\[x\]
- 函数最好给出调用示例

## 三、目录结构

表格是一些重要的简略说明，有必要详细说明的附在后续的几个小标题中。

| 目录 | 说明 |
| --- | --- |
| assets/ | 可大量拷贝的静态资源 |
| assets/image/ | 图像资源 |
| assets/js/ | 自己编写的javascript脚本库 |
| external/ | 外部依赖库 |
| external/bootstrap/ | 著名的CSS框架 |
| external/jquery/ | 简化javascript的DOM操作 |
| js/ | 自己编写的针对该特定项目的javascript脚本 |
| js/test/\*.js | 可在此处新建测试脚本（需要添加到index.html中） |
| js/main.js | 相当于main函数（仅在此处调用各个js文件的函数） |
| Examples/ | 之前编写的样例，现迁移至Github |
| index.html | HTML主页 |
| README.md | 说明文档 |
| .gitignore | git commit时忽略此文件中对应的文件 |

### js/test/\*.js 与 js/main.js 的区别

相比其它js脚本文件， js/test/\*.js 与 js/main.js 都会按 index.html 中的顺序运行，其它js文件则只有函数，不应直接运行。但是 js/main.js 会同步到Github仓库，而git commit时会忽略 js/test/ 中的所有文件（由 .gitignore 指定）。所以Github仓库中的 js/test/ 不包含任何文件，需要在各自的本地仓库新建。新建时建议取名为 js/test/test.js ，否则需要在 index.html 加入新文件。当然也可以直接在 js/test/ 中新建html文件和js文件来测试，这种修改就完全不会对服务器产生影响。其结果就是服务器上的 index.html 只运行 js/main.js，本地可能会额外运行 js/test/\*.js，供测试用。

### js/ 与 assets/js/ 的区别

简单说明就是：assets/js/ 拷贝到其它项目可能也有用，js/ 拷贝到其它项目几乎没有用。

