<template lang="jade">
  md-list-item
    md-avatar
      img(src="https://placeimg.com/40/40/people/1", alt="People")
    div.md-list-text-container
      span Ali Connors
      span Brunch this weekend?
      p I'll be in your neighborhood doing errands...
    md-button.md-icon-button.md-list-action
      md-icon.md-primary star
</template>
<script>
  export default {
    name: 'SearchResultItem',
    data: function () {
      return {
        
      }
    }
  }
</script>
<style>
</style>