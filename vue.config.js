const { defineConfig } = require('@vue/cli-service');
const path = require("path");

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config.resolve.alias
        .set('@assets', path.resolve(__dirname, 'src/assets'))
        .set('@views', path.resolve(__dirname, 'src/views'))
        .set('@sass', path.resolve(__dirname, 'src/sass'))
        .set('@fonts', path.resolve(__dirname, 'src/assets/fonts'))
        .set('@images', path.resolve(__dirname, 'src/assets/images'))
        .set('@components', path.resolve(__dirname, 'src/components'));
  },
})
