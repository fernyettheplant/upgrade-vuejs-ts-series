<template>
  <div>
    <h1>Store Module Foo</h1>

    <h4>Text from State</h4>
    <hr>
    {{ text }}
    <br>
    <br>
    <br>
    <br>

    <h4>Text from State Getter</h4>
    <hr>
    {{ textUpper }}
    <br>
    <br>
    <br>
    <br>

    <h4>Change Text Inside Module</h4>
    <hr>
    <input
      type="text"
      :value="text"
      @input="changeText"
    >
    <br>
    <br>
    <br>
    <br>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState('Foo', ['text']),
    ...mapGetters('Foo', ['textUpper'])
  },
  methods: {
    ...mapMutations('Foo', ['setText']),
    changeText (event) {
      this.setText(event.target.value)
    }
  }
}
</script>
