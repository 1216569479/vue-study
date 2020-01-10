<template>
  <div>
    <h2>插槽</h2>
    <!-- 插槽 -->
    <!-- 可以优雅的包装原生的 HTML 标签
组件标签可以嵌套，就像使用原生 HTML 标签一样
让组件更加的通用和可复用
它可以让我们的组件具有非常 的灵活性与可复用性，而作用域插槽更加的强化了这些特性 -->
    <Layout>
      <!-- 具名插槽：将内容分发到子组件指定位置 -->
      <template v-slot:header>桃花坞里桃花庵</template>
      <!-- 匿名插槽 -->
      <template>content...</template>
       <!-- 作用域插槽 -->
      <template v-slot:content="{content}">{{`${content.txt}${content.name}`}}</template>
      <!-- 作用域插槽：用到子组件中的数据 -->
      <!-- 对象解构 -->
      <!-- 得到一个fc对象 -->
      <template v-slot:footer="fc">{{fc}}</template>
    </Layout>
  </div>
</template>

<script>
  import Layout from '@/components/slots/Layout.vue'
  
  export default {
    components: {
      Layout
    },
    created(){
    },
  }
</script>

<style scoped>

</style>