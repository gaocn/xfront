import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

// 动态注册公共组件，实现vue3 api的自动导入
const requireComponent = require.context(
  // 其组件目录的相对路径
  '@/components',
  // 是否查询其子目录
  true,
  // 匹配基础组件文件名的正则表达式
  /\w+\.(vue|js)$/
)
requireComponent.keys().forEach((item)=>{
  const componentConfig = requireComponent(item)
  // 获取组件的 PascalCase 命名
  const splits = item.split('/').pop()
  if(!splits || splits.length === 0) { return }
  const componentName = splits.replace(/\.\w+$/, '');

  // 动态注册该目录下的所有.vue文件
  // 如果这个组件选项是通过 `export default` 导出的，
  // 那么就会优先使用 `.default`，
  // 否则回退到使用模块的根。
  app.component(componentName,componentConfig.default || componentConfig)
})
// 注册结束


app.use(ElementPlus).use(store).use(router).mount("#app");
