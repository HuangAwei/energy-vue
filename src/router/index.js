import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/',
    component: () => import('@/views/main/index'),
    hidden: true,
    children: [
      {
        path: 'energyConsumption/consumption',
        component: () => import('@/views/energyConsumption/consumption'),
        hidden: true
      },
      {
        path: 'energyConsumption/energy',
        component: () => import('@/views/energyConsumption/energy'),
        hidden: true
      },
      {
        path: 'energyConsumption/history',
        component: () => import('@/views/energyConsumption/history'),
        hidden: true
      },
      {
        path: 'energyConsumption/institution',
        component: () => import('@/views/energyConsumption/institution'),
        hidden: true
      },
      {
        path: 'risk/assessment',
        component: () => import('@/views/risk/assessment'),
        hidden: true
      },
      {
        path: 'risk/history',
        component: () => import('@/views/risk/history'),
        hidden: true
      },
      {
        path: 'system/user',
        component: () => import('@/views/system/user'),
        hidden: true
      },
      {
        path: 'system/dict',
        component: () => import('@/views/system/dict'),
        hidden: true
      },
      {
        path: 'system/dictData',
        component: () => import('@/views/system/dictData'),
        hidden: true
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
