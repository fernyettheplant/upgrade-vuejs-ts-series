export default {
  namespaced: true,
  state: {
    text: 'inside module store'
  },
  mutations: {
    setText (state: any, newText: string) {
      state.text = newText
    }
  },
  getters: {
    textUpper: (state: any) => {
      return state.text.toUpperCase()
    }
  }
}
