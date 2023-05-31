import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import Antd from 'ant-design-vue'
import router from './router'
import 'ant-design-vue/dist/antd.less'
import * as Icons from '@ant-design/icons-vue';
import DataVVue3 from '@kjgl77/datav-vue3'

const app = createApp(App)
app.use(Antd)
app.use(router)
app.use(DataVVue3)
app.mount('#app')
// 循环使用全部全部图标
const icons = Icons;
for (const i in icons) {
    // 全局注册一下组件
    app.component(i, icons[i])
}