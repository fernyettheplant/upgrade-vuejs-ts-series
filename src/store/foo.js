export default {
  namespaced: true,
  state: {
    text: 'inside module store'
  },
  mutations: {
    setText (state, newText) {
      state.text = newText
    }
  },
  getters: {
    textUpper: (state) => {
      return state.text.toUpperCase()
    }
  }
}
