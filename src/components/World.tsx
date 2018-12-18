import { Component, Vue } from 'vue-property-decorator'

@Component
class World extends Vue {
  private text: string = 'World!'

  get textUpper (): string {
    return this.text.toUpperCase()
  }

  changeText (newText: string): void {
    this.text = newText
  }

  render (h: Vue.CreateElement): Vue.VNode {
    return (
      <div>
        Text: {this.text} <br />
        Text Upper: {this.textUpper} <br />
        <input
          on-input={(e: any) => this.changeText(e.target.value)}
          value={this.text}
          type="text"
        />
      </div>
    )
  }
}

export default World
