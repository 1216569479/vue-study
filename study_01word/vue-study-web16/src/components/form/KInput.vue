<template>
  <div>
    <!-- 自定义组件双向绑定：:value  @input只要输入值就会发生变化 -->
    <!-- v-bind="$attrs"展开$attrs -->
    <input :type="type" :value="value" @input="onInput">
  </div>
</template>

<script>
 import emitter from '@/mixins/emitter'
  export default {
    inheritAttrs: false, // 设置为false避免设置到根元素上
    mixins:[emitter],
    props: {
      value: {
        type: String,
        default: ''
      },
      type: {
        type: String,
        default: 'text'
      }
    },
    methods: {
      onInput(e) {
        console.log(e)
        // 允许一个自定义组件在使用 v-model 时定制 prop 和 event。默认情况下，一个组件上的 v-model 会把 value 用作 prop 且把 input 用作 event
        // 派发一个input事件即可,v-model绑定的是input事件
        this.$emit('input', e.target.value)
        // 通知父级执行校验,
        this.$parent.$emit('validate')
       
      }
    },
  }
</script>

<style scoped>

</style>