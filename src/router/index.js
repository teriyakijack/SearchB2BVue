import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import SearchPanel from '@/components/SearchPanel'
import SearchResult from '@/components/SearchResult'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'SearchResult',
      component: SearchResult
    },
    {
      path: '/SearchPanel',
      name: 'SearchPanel',
      component: SearchPanel
    },
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello
    }
  ]
})
