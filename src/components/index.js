// 自动注册全局组件，每次新增组件必须重新编译
import Vue from 'vue'

const requireComponent = require.context(
  '@/components', // 其组件目录的相对路径
  true, // 是否查询其子目录
  /\.vue$/ // 匹配基础组件文件名的正则表达式
)
requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName) // 获取组件配置
  /**
   * 兼容 import export 和 require module.export 两种规范
   */
  // 如果这个组件选项是通过 export default 导出的,就会优先使用 .default
  const comp = componentConfig.default || componentConfig
  Vue.component(comp.name, comp) // 此处的name是组件属性定义的name
})
