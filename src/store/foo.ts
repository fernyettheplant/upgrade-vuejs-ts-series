import { VuexModule, Module, Mutation } from 'vuex-module-decorators'

@Module({
  namespaced: true
})
class Foo extends VuexModule {
  public text: string = 'inside module store'

  @Mutation
  setText (newText: string) {
    this.text = newText
  }

  get textUpper (): string {
    return this.text.toUpperCase()
  }
}

export default Foo
