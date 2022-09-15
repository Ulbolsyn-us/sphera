<template>
  <header-component></header-component>
  <router-view></router-view>
</template>


<script>
import HeaderComponent from '@/partials/Header-component'

export default {
  name: 'App',
  components: {
    HeaderComponent
  }
}
</script>

<style>
#app {
  background-color: white;
}
</style>
