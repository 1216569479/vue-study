<template>
  <div>
    <!-- $listeners会被展开并监听,包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器 -->
    <h3 v-on="$listeners">child2</h3>
    <button @click="sendToChild1">给child1发送消息</button>
    <!-- $attrs包含了父作用域中不作为 prop 被识别 (且获取) 的特性绑定 ( class 和 style 除外)。当一个组件没有
    声明任何 prop 时，这里会包含所有父作用域的绑定 ( class 和 style 除外)，并且可以通过 v- bind="$attrs" 传入内部组件——在创建高级别的组件时非常有用。 -->
    <p>{{$attrs.msg}}</p>
    <!-- provide/inject -->
    <p>{{foo}}</p>
  </div>
</template>

<script>
  export default {
    inject: ['foo'],
    methods: {
      sendToChild1() {
        // 利用事件总线发送事件
        console.log(this.$onemit)
        this.$onemit.$emit('event-from-child2', 'some msg from child2')
        // console.log(this.$parent)
        // this.$parent.$emit('event-from-child2', 'some msg from child2')
      }
    },
    created(){
      console.log(this.foo)
    }
  }
</script>

<style scoped>

</style>