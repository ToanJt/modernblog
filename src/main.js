import { createApp } from 'vue'
import App from './App.vue'
import style from '@/assets/main.css'
import router from '@/router.js'
import {posts, goPost} from '@/posts.js'
import { useRoute } from 'vue'
import VueKinesis from "vue-kinesis"
import { MotionPlugin } from '@vueuse/motion'

import PostView from '@/components/PostView.vue'


const app = createApp(App)

app.config.globalProperties.filters = {
    formatMoney(money) {
        return new Intl.NumberFormat().format(money)
    }
} 



app.use(style)
app.use(router)
app.use(posts)
app.use(goPost)

app.use(useRoute)
app.use(VueKinesis)
app.use(MotionPlugin)
app.use(PostView)

app.mount('#app')



