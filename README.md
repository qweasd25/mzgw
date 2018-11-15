## 美中官网

### 一、相关

#### 1.开发环境

- 开发语言：vue + vue-router + webpack + sass
- 开发环境：mac + vscode

#### 2.官网板块

- 美中官网分为：首页、关于美中、资讯中心、产品中心、材料中心、矿山资源、工程案例、联系我们，这八大板块。

### 二、使用说明

1. 直接把打包后的文件放到服务器上
2. 如需修改，**请通过源文件修改**
3. 重点文件目录说明

    **src 文件夹下主要结构如下**
    文件名| 说明
    ---|---
    assets | 存放js和style文件
    pages | 各个板块的页面
    router | 路由文件
    app.vue | 所有的vue文件的入口文件
    main.js | 整个项目的js入口文件
    component | 存放组件
    static | 存放所有图片

4. 修改说明

        特别说明，如果要修改，只需修改文件pages文件夹下的文件即可

      **每个板块对应的文件夹**

      板块名 | 文件夹名
      ---|---
      公共组建 | common
      首页 | home
      关于美中 | about
      资讯中心 | consultCenter
      产品中心 | productCenter
      材料中心 | materialsCenter
      矿山资源 | mineResources
      工程案例 | projectCase
      联系我们 | contactUs

    修改步骤：

    1. 打开 mzgw 文件夹
    2. npm i // 安装模块依赖
    3. npm run dev // 测试是否存在bug，如果ok，继续下一步
    4. 打开src -> 对应板块文件夹 -> 相关子页面或者子组件 -> script 标签下的 data 中的数组即可
    5. npm run dev // 测试是否存在bug，如果ok，继续下一步
    6. npm run build // 打包，把打包后的dist文件放到服务器进行部署即可
    7. 也可以在本地环境进行测试，在命令行中使用 http-server 进行测试
