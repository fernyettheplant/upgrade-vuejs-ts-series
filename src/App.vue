<template>
  <div id="app">
    <nav class="nav nav-pills">
      <RouterLink
        class="nav-item nav-link"
        to="/"
        exact
        active-class="active"
      >
        Home
      </RouterLink>
      <RouterLink
        to="/store"
        exact
        class="nav-item nav-link"
        active-class="active"
      >
        Store
      </RouterLink>
      <RouterLink
        to="/chuck-norris"
        exact
        class="nav-item nav-link"
        active-class="active"
      >
        Chuck Norris
      </RouterLink>
    </nav>
    <RouterView class="container" />
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
import SERVICE_IDENTIFIERS from './ioc/identifiers'
import Container from './ioc/DependencyConfigs'

@Component({
  provide: {
    [SERVICE_IDENTIFIERS.CONTAINER]: Container
  }
})
export default class App extends Vue {
}
</script>

<style scoped>
.nav {
  padding: 25px;
}
</style>
