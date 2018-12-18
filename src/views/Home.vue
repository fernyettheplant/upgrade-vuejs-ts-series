<template>
  <div>
    <h1>This is Home!</h1>

    <h4>Hello Component</h4>
    <hr>
    <Hello />

    <h4>World Component</h4>
    <hr>
    <World />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Hello from '../components/Hello.vue'
import World from '../components/World'

@Component({
  components: {
    Hello,
    World
  }
})
export default class Home extends Vue {}
</script>
