import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import Foo from './foo'

Vue.use(Vuex)

export default new Store({
  modules: {
    Foo
  }
})
