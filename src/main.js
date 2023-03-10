// 入口文件 (webpack 分析入口)
import { createApp } from 'vue'
// 從一個單文件組件中導入根組件
import App from './App.vue'
import router from './router'

// 傳入根組件(虛擬節點)，創建一個新的應用實例
const app = createApp(App)
// 全局註冊插件
app.use(router)
// 掛載應用
// 應用實例必須在調用 .mount() 方法後才會渲染出來
// 該方法接收一個容器參數，可以是一個實際的 DOM 元素或是一個 CSS 選擇器字符串
app.mount('#app')