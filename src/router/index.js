import {createRouter,createWebHashHistory } from 'vue-router'


const routes=[
  {
    path:'/datascreen',
    name: '数据大屏',
    meta: {
      title: '数据大屏',
      keepalive: true
    },
    component: ()=> import('../view/DataScreen.vue')
  },
  {
    path:'/monitor',
    name: '全局监控',
    meta: {
      title: '动环监控',
      keepalive: true
    },
    component: ()=> import('../view/Monitor.vue')
  },
  {
    path:'/video',
    name: '实时视频',
    meta: {
      title: '实时视频',
      keepalive: true
    },
    component: ()=> import('../view/Video.vue')
  },
  {
    path:'/dataReport',
    name: '数据报表',
    meta: {
      title: '数据报表',
      keepalive: true
    },
    component: ()=>  import('../view/DataReport.vue')
  },
  {
    path:'/eventManage',
    name: '事件管理',
    meta: {
      title: '事件管理',
      keepalive: true
    },
    component: ()=>  import('../view/EventManage.vue')
  },
  {
    path:'/system',
    name: '系统设置',
    meta: {
      title: '系统设置',
      keepalive: true
    },
    component: ()=>  import('../view/System.vue')
  },

]
const router =createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router;