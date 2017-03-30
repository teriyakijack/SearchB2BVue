<template lang="jade">
  md-list-item(@mouseup.native="onMouseUp()", @mousedown.native="onMouseDown()")
    md-ink-ripple
    md-avatar
      img(:src="charterData.boat.boat_img", alt="People")
    div.md-list-text-container
      span 
       strong {{ charterData.boat.boat_name }}
      span {{ charterData.boat.boat_year + ', ' + charterData.boat.boat_model }}
      p {{ charterData.charter_destination + ' / ' +charterData.boat.boat_home_base.base_name }}
    md-button.md-icon-button.md-list-action
      md-icon.md-primary star
    md-divider.md-inset
</template>
<script>
  export default {
    name: 'SearchResultItem',
    props: {
      toggleEditing: {
        type: Function,
        required: true
      },
      charterData: {
        type: Object,
        required: true
      }
    },
    data: function () {
      return {
        mousePressTimer: null
      }
    },
    created: function () {
      console.log(this.charterData)
    },
    methods: {
      onMouseDown: function (event) {
        var vm = this
        console.log('onMouseDown')
        vm.mousePressTimer = window.setTimeout(function () { vm.toggleEditing() }, 1000)
        return false
      },
      onMouseUp: function (event) {
        var vm = this
        console.log('onMouseUp')
        clearTimeout(vm.mousePressTimer)
        return false
      }
    }
  }
</script>
<style>
</style>
