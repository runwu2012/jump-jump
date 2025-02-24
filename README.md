<h1 align="center">
  <br>Jump Jump<br>
</h1>

<p align="center"><em>开箱即用，Golang 开发的一个功能完善的短链接系统。</em></p>
<p align="center">
  <a href="https://github.com/jwma/jump-jump/workflows/CI/badge.svg?branch=master" target="_blank">
    <img src="https://github.com/jwma/jump-jump/workflows/CI/badge.svg?branch=master">
  </a>
  <a href="https://img.shields.io/github/license/mashape/apistatus.svg" target="_blank">
      <img src="https://img.shields.io/github/license/mashape/apistatus.svg" alt="license">
  </a>
</p>

---

* [快速体验](#快速体验)
* [功能与使用](#功能与使用)
    * [截图](#截图)
* [本地启动](#本地启动)
* [如何访问短链接？](#如何访问短链接)
    * [设置短链接域名](#设置短链接域名)
    * [获取完整短链接](#获取完整短链接)
* [部署到服务器](#部署到服务器)
* [接口文档](#接口文档)
* [感谢](#感谢)

---

## 快速体验

[访问这里](http://t.majiawei.com/7pcu75)，来体验一下 Jump Jump 吧！（体验账号/密码：guest/guest）

## 功能与使用

[功能模块](http://t.majiawei.com/c6vn)，后续功能的方向/安排可以持续留意 issues：


### 截图

![截图](http://rs.majiawei.com/b/20201016144836.png)

## 本地启动

使用 `docker-compose` 启动，能够快速帮你启动 `redis`, `apiserver`, `landingserver`，使用如下命令：

```shell script
# 克隆或下载项目源码到本地
git clone https://github.com/jwma/jump-jump.git

# 进入项目源码目录
cd jump-jump/

# 在本地构建容器镜像
make dockerimage

# 启动
docker-compose -f deployments/docker-compose.yaml -p jumpjump up -d

# 查看服务运行状态
docker-compose -f deployments/docker-compose.yaml -p jumpjump ps

# 如果看到 apiserver/landingserver 未启动成功，重启一下就好
docker-compose -f deployments/docker-compose.yaml -p jumpjump restart

# 创建用户，在服务正常运行的情况，运行 createuser 可以创建用户，使用如下
docker-compose -f deployments/docker-compose.yaml -p jumpjump exec apiserver ./createuser --help

Usage of ./createuser:
  -password string
        password.
  -role int
        role, 1: normal user, 2: administrator. (default 1)
  -username string
        username.

# 创建一个管理员角色的用户
docker-compose -f deployments/docker-compose.yaml -p jumpjump exec apiserver ./createuser -username=mj
 -password=12345 -role=2
```

在服务启动完毕且已经创建好用户之后，可以打开浏览器，访问 `http://localhost:8080` 进入管理后台进行短链接的管理工作。

## 如何访问短链接？

### 设置短链接域名

登入到管理后台之后，你能够看到短链接域名设置（只有管理员有权修改），在这里设置好你部署的**域名/IP:Port**，如：
`http://127.0.0.1:8000/` 或者 `http://yourdomain.com/`，这里有一点需要注意的是，需要以 `/` 结尾。

### 获取完整短链接

访问短链接列表页面，如果你已经创建了短链接，那么可以在列表的第一个字段，悬停一下，会出现一个带有域名的完整短链接，点击就可以自动拷贝到
剪切板，你可以到需要使用的地方进行粘贴或者使用浏览器访问。

## Pin

如果你特别关心某个短链接近期的访问情况，不妨试一下在短链接列表中把它 Pin 到 Dashboard 首页，这样你就能方便的观察到它的访问情况啦~

## 部署到服务器

这里提供了使用 docker-compose 的部署方案，[点击查看](http://t.majiawei.com/fk1ta3)。

## 接口文档

使用 Swagger UI 提供了一个可调试文档，具体使用方法查看这个 [PR](https://github.com/jwma/jump-jump/pull/40)，希望这份文档能够帮助
到大家！

##服务器部署具体注意点# edit by chenchen
1. 根据http://t.majiawei.com/fk1ta3 的描述可以采用自行构建docker镜像或者直接从dockerhub拉取的方式来获取docker镜像,两者方法无明显区别.
2. 启动的方式是根据docker-compose 来启动的,因此docker-compose,docker,能够拉取外网dockerhub上镜像等是正常启动的前提条件.
3. 因为Django框架内有ALLOWED_H)STS的配置,因此docker-compose.yaml配置文件内jumpjump/apiserver 部分的配置必须开启ALLOWED_HOSTS,该参数不设置将启动报错.
4. apiserver的environment参数内,根据服务器部署的特点,新增了几个参数配置.其中swagger配置参考https://github.com/jwma/jump-jump/pull/40
   apiserver访问域名的配置:ALLOWED_HOSTS=176.1.90.201,i.richtj.com,i-admin.richtj.com 
   swagger访问域名:API_DOC_HOST=176.1.90.201,i.richtj.com,i-admin.richtj.com
   swagger 用户名密码 API_DOC_USERNAME=admin API_DOC_PASSWORD=admin
5. 服务器启动控制命令:
   启动 docker-compose -f deployments/docker-compose.yaml -p jumpjump up -d 
   查看 docker-compose -f deployments/docker-compose.yaml -p jumpjump ps
   停止 docker-cmopose -f deployments/docker-compose.yaml -p jumpjump stop
   删除 docker-compose -f deployments/docker-compose.yaml -p jumpjump rm

6. jumpjump遇到nginx反代需要注意nginx设置过程中 nginx 的server_name 参数和jumpjump的allowed_host参数相一致.



![MJ_STUDIO](http://rs.majiawei.com/b/20200714210656.png)
