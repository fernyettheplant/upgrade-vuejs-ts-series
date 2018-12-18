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

<script>
import Hello from '../components/Hello.vue'
import World from '../components/World.jsx'

export default {
  components: {
    Hello,
    World
  }
}
</script>
