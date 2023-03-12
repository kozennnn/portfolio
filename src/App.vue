<template>
  <div class="app">
    <logo/>
  </div>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template>

<style lang="scss">
@import "@/sass/style.scss";

.app {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  padding: 60px;
}
</style>
