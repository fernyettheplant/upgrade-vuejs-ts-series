import Vue from 'vue'
import Vuex from 'vuex'
import Foo from './foo'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Foo
  }
})
