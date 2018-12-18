export default {
  data () {
    return {
      text: 'World!'
    }
  },
  computed: {
    textUpper () {
      return this.text.toUpperCase()
    }
  },
  methods: {
    changeText (newText) {
      this.text = newText
    }
  },
  render (h) {
    return (
      <div>
        Text: { this.text } <br />
        Text Upper: { this.textUpper } <br />

        <input
          on-input={(e) => this.changeText(e.target.value)}
          value={this.text}
          type='text'
        />
      </div>
    )
  }
}
