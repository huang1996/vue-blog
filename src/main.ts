import './assets/main.css'

import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

import App from './App.vue'
import router from '@/routes'

const app = createApp(App)

app.use(ElementPlus, {size: 'small', zIndex: 3000, locale: zhCn})
app.use(router)
app.mount('#app')
