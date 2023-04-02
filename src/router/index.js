import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const isapp =  /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i.test(navigator.userAgent)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    
    path: '/home',
    name: 'home',
    component: () => isapp?import('@/views/app/Start.vue'):import('@/views/pc/HomeView.vue'),
    meta: {
      type: 'pc'
    }
  },
  {
    path: '/m_assetInfo',
    name: 'm_assetInfo',
    component: () => isapp?import('@/views/app/AssetInfo.vue'):import('@/views/pc/HomeView.vue'),
    meta: {
      type: 'app'
    }
  },
  {
    path: '/m_result',
    name: 'm_result',
    component: () => isapp?import('@/views/app/Result.vue'):import('@/views/pc/HomeView.vue'),
    meta: {
      type: 'app'
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
