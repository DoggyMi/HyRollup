目标 
- 能打包ts代码的
- 模板化和其他项目都能用
- 打包出来的产物支持老浏览器
- 引入第三方的包
内容
- 页面跳转
- 网络请求
- 工具类库
  - log
  - url
- 业务
  - 分享
- #### fastool/lib-api/lib-utils
npm库  指定类型声明文件的位置types
本地测试可以 pnpm install ../ -
tsconfig的target还可以影响代码提示 改成esnext可以有esnext的提示
.spec也会生成.d.ts 
exclude ["./src/*.spec.ts"]