import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'  //  Element Plus框架
import 'element-plus/dist/index.css'

import naive from 'naive-ui'    //  NaiveUI框架

import ViewUIPlus from 'view-ui-plus'   // View Design框架
import 'view-ui-plus/dist/styles/viewuiplus.css'

import DataVVue3 from '@kjgl77/datav-vue3'  //  datav可视化图形框架

const app = createApp(App)

app.use(ElementPlus)
app.use(naive)
app.use(ViewUIPlus)
app.use(DataVVue3)
app.use(createPinia())
app.use(router)

app.mount('#app')
