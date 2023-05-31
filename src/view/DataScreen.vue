<template>
  <div class="screen" ref = "fullscreenContainer">
    <div class="header">
      <div style="display: flex; justify-content: space-between;">
        <div class="dv-dec-10">
          <dv-decoration-10 />

        </div>
        <dv-decoration-8 class="dv-dec-8" :color="['#568aea', '#0b214f']" />
        <div class="title">
          <span class="title-text">可视化数据大屏</span>
          <dv-decoration-6 class="dv-dec-6" :reverse="true" :color="['#50e3c2', '#67a1e5']" />
        </div>
        <dv-decoration-8 class="dv-dec-8" :reverse="true" :color="['#568aea', '#0b214f']" />
        <div class="dv-dec-10-s">
          <dv-decoration-10 class="dv-dec-10-s-r" />
          <span style="font-size: 20px;color: #87caff;">
            {{ timeDate }}  {{ hourTime }}           
            <a-button type="link" :size="small" @click="Fullscreen">
              <template #icon>
                <expand-outlined style="color:#00ffff; "/>
              </template>
            </a-button>
            
          </span>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="left">
        <div style="flex:2;">
          <dv-border-box-10></dv-border-box-10>
        </div>
        <div style="flex:1; ">
          <dv-border-box1></dv-border-box1>
        </div>
      </div>
      <div class="center">
        <div style="flex:3;">
          <dv-border-box12></dv-border-box12>
        </div>
        <div style="flex:1;">
          <dv-border-box-10></dv-border-box-10>
        </div>
      </div>
      <div class="right">

        <div style="flex:2; ">
          <dv-border-box10></dv-border-box10>
        </div>


        <div style="flex:1;">
          <dv-border-box1></dv-border-box1>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { formatTime } from '../utils/index'
import { WEEK } from '../constant/index'
import { onMounted, reactive,ref ,onBeforeUnmount} from 'vue'
const fullscreenContainer = ref(null)
const Fullscreen = ()=>{
      if (!document.fullscreenElement) {
        fullscreenContainer.value.requestFullscreen(); // 进入全屏模式
      } else {
        document.exitFullscreen(); // 退出全屏模式
      }
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

</script>

<style scoped lang="less">
.screen {
  color: white;
  background: url('../assets/bg.png');
  background-size: cover;
  background-repeat: no-repeat;
  widows: 100%;
  height: 100%;
  // background-color: black;
  // background: url(../assets/bg.png);
  display: flex;
  flex-direction: column;

  .header {
    height: 50px;
    margin-top: 10px;

    .dv-dec-10,
    .dv-dec-10-s {
      width: 33.3%;
      height: 5px;
      text-align: center;
    }

    .dv-dec-10-s-r {
      transform: rotateY(180deg);
    }

    .dv-dec-8 {
      width: 200px;
      height: 50px;

    }

    .title {
      position: relative;
      width: 500px;
      text-align: center;
      background-size: cover;
      background-repeat: no-repeat;

      .title-text {
        font-size: 24px;
        position: absolute;
        bottom: 30;
        left: 50%;
        color: rgb(0, 255, 255);
        transform: translate(-50%);
      }

      .dv-dec-6 {
        position: absolute;
        bottom: 0px;
        left: 50%;
        width: 250px;
        height: 8px;
        transform: translate(-50%);
      }
    }

  }

  .content {
    flex: 1;
    display: flex;
    justify-content: space-between;

    .left {
      height: 100%;
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    .center {
      flex: 2;
      display: flex;
      flex-direction: column;

    }

    .right {
      flex: 1;
      display: flex;
      flex-direction: column;
    }
  }
}
</style>