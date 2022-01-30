## 模块联邦使用示例
host <==> remote

``` sh
cd carts && npm i && npm start
cd products && npm i && npm start
cd products && npm i && npm start
```

## 应用模块引用关系
### exposes
- host add
- carts index
- products index
### remote
- host 引用 carts/index
- host 引用 products/index
- carts 引用 host/add


## 公用 faker

## 主应用通过window变量设置是否是微前端服务