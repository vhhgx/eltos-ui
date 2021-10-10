import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'main', component: () => import('@/views/Layouts/mainLayout.vue'),
    children: [
      { path: '/', name: 'about', component: () => import('@/views/Home.vue') },
      { path: 'list', name: 'List', component: () => import('@/views/List.vue') },
      { path: 'artists', name: 'Artists', component: () => import('@/views/Artists.vue') },
    ]
  },
  { path: '/cuberto', name: 'works', component: () => import('@/views/Layouts/worksLayout.vue'),
    children: [
      { path: 'file', name: 'file', component: () => import('@/pages/FileManage.vue') },
      { path: 'file2', name: 'file2', component: () => import('@/pages/FileManage2.vue') },
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
