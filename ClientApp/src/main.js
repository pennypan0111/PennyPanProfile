import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/swiper-bundle.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'element-plus/dist/index.css'
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMedium, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBars, faXmark, faAngleRight, faAngleLeft, faCircleUp } from '@fortawesome/free-solid-svg-icons'

import ElementPlus from 'element-plus'

import App from './App.vue'
import router from './router'

library.add(faMedium, faGithub, faBars, faXmark, faAngleRight, faAngleLeft, faCircleUp)
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(ElementPlus)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
