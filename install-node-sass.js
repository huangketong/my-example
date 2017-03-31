node - sass 安装失败？ 处理方法 1 2 3
1.
npm install cnpm
2.
cnpm install node - sass
3.
cnpm install sass - loader


two:
    在项目目录下建一个.npmrc文件
这样就可以没有安转node - sass自动安装淘宝镜像源，
建议安转后直接删掉这个文件（ 不要问为什么？）， 以免影响后续的pull..
sass_binary_site = https: //npm.taobao.org/mirrors/node-sass/
    phantomjs_cdnurl = http: //cnpmjs.org/downloads
    electron_mirror = https: //npm.taobao.org/mirrors/electron/
    registry = https: //registry.npm.taobao.org