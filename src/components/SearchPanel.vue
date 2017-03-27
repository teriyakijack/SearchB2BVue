<template lang="jade">
  md-toolbar(md-theme="default")
    md-button.md-icon-button
      md-icon menu
    h2.md-title(style="flex: 1") Vue Material
    md-button.md-icon-button
      md-icon favorite
</template>

<script>
export default {
  name: 'SearchPanel',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
