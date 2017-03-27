<template lang="jade">
  md-toolbar(md-theme="default")
    md-button.md-icon-button
      md-icon menu

    h2.md-title {{ title }}

    md-button.md-icon-button
      md-icon {{ leftIcon }}

    md-button.md-icon-button
      md-icon {{ rightIcon }}
</template>

<script>
export default {
  name: 'Toolbar',
  data () {
    return {
      title: 'Welcome to Your Vue.js App',
      leftIcon: 'search',
      rightIcon: 'shopping_cart'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .md-title {
    flex: 1;
    align-self: center;
    display: flex;
  }
</style>
