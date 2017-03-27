<template lang="jade">
  div searchResult
    md-button.md-raised(@click.native="loadData()") Primary
  </div>
</template>

<script>
export default {
  name: 'SearchPanel',
  created: () => {
  },
  data () {
    return {
      baseUrl: 'http://192.168.1.46/sdndev/m3/api/defaultXML/default.api.asp?action=search&api_mode=app&srh_dest=&SRH_Crew=All&SRH_Type=All&DEPART_DD=27&DEPART_MM=03&DEPART_YYYY=2017&nombjour=7&threedays=false&offset=0&limit=10&token=c7c5151d25b71941adac11d63659bccc',
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    loadData: () => {
      console.log(this)
      // this.$http.post(this.baseUrl)
      // .then(response => {
      //   console.log(response.body)
      // }, response => {
      //   console.error(response)
      // })
    },
    test: () => {
      console.log('test!')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
