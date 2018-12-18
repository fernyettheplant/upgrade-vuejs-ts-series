<template>
  <div>
    Text: {{ text }} <br>
    Text Upper: {{ textUpper }} <br>

    <input
      v-model="text"
      type="text"
    >
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Hello extends Vue {
  private text: string = 'Hello'

  get textUpper (): string {
    return this.text.toUpperCase()
  }
}
</script>
