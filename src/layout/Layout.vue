<template>
  <a-layout>
    <a-layout-header class="header">
      <div class="logo">
        AI智能监控辅助系统
      </div>
      <div class="menu">
        <a-menu class='a-menu' v-model:selectedKeys="selectedKeys" mode="horizontal" @click="to" theme="dark"
          background-color="rgba(2, 48, 102, 0.695)" :style="{ lineHeight: '52px' }">
          <a-menu-item v-for="item in MyRoutes.items" :key="item.key">

            {{ item.title }}
          </a-menu-item>
        </a-menu>
      </div>
      <div class="date-time">
        {{ timeDate }}  {{ hourTime }}
      </div>
    </a-layout-header>
    <a-layout-content class="content">
      <RouterView></RouterView>
    </a-layout-content>
  </a-layout>
</template>
<script setup>
import { computed, ref, reactive, onMounted,onBeforeUnmount } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const selectedKeys = ref(['1'])
const MyRoutes = reactive({
  items: [
    {
      key: 'datascreen',
      title: '数据大屏',
      icon: 'appstore-two-tone',
      path: '/datascreen'
    },
    {
      key: 'monitor',
      title: '全局监控',
      icon: 'appstore-two-tone',
      path: '/monitor'
    },
    {
      key: 'video',
      title: '实时视频',
      icon: '',
      path: '/video'
    },
    {
      key: 'dataReport',
      title: '数据报表',
      icon: '',
      path: '/report'
    },
    {
      key: 'eventManage',
      title: '事件管理',
      icon: '',
      path: '/event'
    },
    {
      key: 'system',
      title: '系统设置',
      icon: '',
      path: '/system'
    },
  ]
})

const to = (menuItem) => {
  router.push(MyRoutes.items.find(item => item.key === menuItem.key).path)
}
const timeDate = ref()
const hourTime = ref()
const time1 = ref()
const getHour = ()=>{
  let date = new Date()
  let hour = date.getHours().toString().padStart(2,'00')
  let minute = date.getMinutes().toString().padStart(2,'00')
  let second = date.getSeconds().toString().padStart(2,'00')
  hourTime.value =  `${hour}:${minute}:${second}`
  time1.value = setTimeout(()=>{
    time1.value&&clearTimeout(time1.value)
    getHour()
  },1000)
}

const getNowTime = ()=>{
  let date = new Date()
  let year = date.getFullYear()
  let month = date.getMonth()+1
  let day = date.getDate()
  timeDate.value = `${year}年${month}月${day}日`
  getHour()

}
onMounted(()=>{
  getNowTime()
})

onBeforeUnmount(()=>{
  time1.value = null
})
</script >
<style scoped lang="less" >
.header {
  position: 'fixed';
  zIndex: 1;
  height: 52px;
  width: '100%';
  display: flex;
  // display: none;
  justify-content: space-between;
  // background-color: rgba(2, 48, 102, 0.695);

  .logo {
    width: 15%;
    font-size: 24px;
    color: white;
    line-height: 52px;
  }

  .menu {}

  .date-time {
    color: white;
    line-height: 52px;
  }
}

.content {
  /* background-image: '/logo.png'; */
  //  height: 100vh; 
  background: url('../assets/bg.png');
  background-size: cover;
  background-repeat: no-repeat;
  // position: absolute;
  // // top: 64px;
  // bottom: 0;
  width: 100%;
  /* margin-top: 32px; */
  /* padding: 0 33px; */
}
</style>