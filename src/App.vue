<template>
  <div id="app">
    <Toolbar/>
    <router-view></router-view>
  </div>
</template>

<script>
import Toolbar from './components/Toolbar'

export default {
  name: 'app',
  components: {
    Toolbar
  },
  created: () => {
    console.log(this.$root)
  }
}
</script>

<style>

</style>
