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
    </nav>
    <RouterView class="container" />
  </div>
</template>

<style scoped>
.nav {
  padding: 25px;
}
</style>
