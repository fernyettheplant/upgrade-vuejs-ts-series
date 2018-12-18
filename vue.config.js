module.exports = {
  lintOnSave: false,

  pluginOptions: {
    express: {
      shouldServeApp: true,
      serverDir: './srv'
    }
  },

  transpileDependencies: ['vuex-module-decorators']
}
