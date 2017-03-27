<template lang="jade">
  #app
    Toolbar
    router-view
</template>

<script>
import Toolbar from './components/Toolbar'

export default {
  name: 'app',
  components: {
    Toolbar
  },
  data: function () {
    return {
      txt: 'Hello world!'
    }
  }
}
</script>

<style>

</style>
