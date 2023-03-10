// 概括：創建一個 router 實例導出
// 不能單獨引入 VueRouter 去使用
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'

// 路由表
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
]

// er 代表一個東西，路由器，路由管理者
// 告訢管理者有那些路由
// route 一個頁面一條路由
// routes 多條路由
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router