const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    port: 80,
    allowedHosts: [
      'tzh.com', // 允许访问的域名地址，即花生壳内网穿透的地址
      '.tzh.com'   // .是二级域名的通配符
    ]
  }
})
