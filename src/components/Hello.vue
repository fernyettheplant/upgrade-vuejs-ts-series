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

<script>
export default {
  data () {
    return {
      text: 'Hello'
    }
  },
  computed: {
    textUpper () {
      return this.text.toUpperCase()
    }
  }
}
</script>
