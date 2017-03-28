<template lang="jade">
  div searchResult 
    md-button.md-raised(@click.native="loadData()") Primary 
    div.phone-viewport 
      md-list.custom-list.md-triple-line
</template>

<script>
  import CharterItem from '@/components/SearchResult'
  import Charter from '@/models/Charter.js'
  import Boat from '@/models/Boat.js'
  import Base from '@/models/Base.js'
  import {
    safeGetAttribute
  } from '@/utils'

  export default {
    name: 'SearchPanel',
    components: {
      CharterItem
    },
    created: function () {},
    data: function () {
      return {
        baseUrl: 'proxy_api/m3/api/defaultXML/default.api.asp',
        data: {
          action: 'search',
          api_mode: 'app',
          srh_dest: '',
          SRH_Crew: 'All',
          SRH_Type: 'All',
          DEPART_DD: '30',
          DEPART_MM: '03',
          DEPART_YYYY: '2017',
          nombjour: '7',
          threedays: 'false',
          offset: '0',
          limit: '10',
          token: '7476daf21f7f27f7d2d641cc6953124a'
        },
        msg: 'Welcome to Your Vue.js App',
        charters: []
      }
    },
    methods: {
      loadData: function () {
        var vm = this
        vm.$http.get(vm.baseUrl + vm.convertFromData(vm.data))
          .then(response => {
            vm.convertXmlToCharter(response.body)
          }, response => {
            console.error(response)
          })
      },
      convertFromData: function (item) {
        var formData = '?'
        for (var key in item) {
          formData = formData + key + '=' + item[key] + '&'
        }
        return formData
      },
      convertXmlToCharter: function (xml) {
        if (xml === '') return
        var xmlDoc = (new DOMParser()).parseFromString(xml, 'text/xml')
        var boats = xmlDoc.getElementsByTagName('boat')
        var vm = this

        for (var i = 0; i < boats.length; i++) {
          var boat = boats[i]
          var charter = new Charter()
          // Charter Information Extraction
          charter.charter_tbf1_id = safeGetAttribute(boat, 'id_tbf1')
          charter.charter_type = safeGetAttribute(boat, 'crew')
          charter.charter_destination = safeGetAttribute(boat, 'destination')
          charter.charter_country = safeGetAttribute(boat, 'country')
          charter.charter_dateStart = safeGetAttribute(boat, 'datestart')
          charter.charter_dateEnd = safeGetAttribute(boat, 'dateend')
          charter.charter_currency = safeGetAttribute(boat, 'isocurr')
          charter.charter_discount = safeGetAttribute(boat, 'discount')
          charter.charter_oldPrice = safeGetAttribute(boat, 'oldprice')
          charter.charter_newPrice = safeGetAttribute(boat, 'newprice')
          charter.charter_oldPriceToShow = safeGetAttribute(boat, 'oldpricetoshow')
          charter.charter_newPriceToShow = safeGetAttribute(boat, 'newpricetoshow')
          charter.charter_cautionPrice = safeGetAttribute(boat, 'caution')
          charter.charter_cautionPriceWithInsurance = safeGetAttribute(boat, 'cautionWithSI')
          charter.charter_cautionPriceToShow = safeGetAttribute(boat, 'cautiontoshow')
          charter.charter_cautionPriceWithInsuranceToShow = safeGetAttribute(boat, 'cautionwithsitoshow')
          charter.charter_availabilityNow = safeGetAttribute(boat, 'availabilitynow')
          // Boat Information Extraction
          charter.boat = new Boat()
          charter.boat.boat_id = safeGetAttribute(boat, 'id_boat')
          charter.boat.boat_company = safeGetAttribute(boat, 'company')
          charter.boat.boat_company_id = safeGetAttribute(boat, 'id_ope')
          charter.boat.boat_name = safeGetAttribute(boat, 'name')
          charter.boat.boat_model = safeGetAttribute(boat, 'model')
          charter.boat.boat_type = safeGetAttribute(boat, 'type')
          charter.boat.boat_img = safeGetAttribute(boat, 'img')
          charter.boat.boat_double_cabin = safeGetAttribute(boat, 'nbdoucabin')
          charter.boat.boat_single_cabin = safeGetAttribute(boat, 'nbsimcabin')
          charter.boat.boat_pax = safeGetAttribute(boat, 'nbpax')
          charter.boat.boat_width = safeGetAttribute(boat, 'widthboat')
          charter.boat.boat_width_feet = safeGetAttribute(boat, 'widthboat_feet')
          charter.boat.boat_year = safeGetAttribute(boat, 'buildyear')
          // Base Information Extraction
          charter.boat.boat_home_base = new Base()
          var homePort = boat.querySelector('homeport')
          charter.boat.boat_home_base.base_name = safeGetAttribute(homePort, 'name')
          charter.boat.boat_home_base.base_id = safeGetAttribute(homePort, 'id_base')
          charter.boat.boat_home_base.base_price = safeGetAttribute(homePort, 'FREE')
          charter.boat.boat_home_base.base_priceToShow = safeGetAttribute(homePort, 'FREE')

          console.log(xmlDoc)
          vm.charters.push(charter)
        }
        window.xmlDoc = vm.charters
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
