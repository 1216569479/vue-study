<!-- mix和extend  -->
<template>
<div class='mix'>
    <!-- 1. 子类再次声明，data中的变量都会被重写，以子类的为准 
         2. 优先调用mixins和extends继承的父类，extends触发的优先级更高
         3.mixins接收对象数组（可理解为多继承），extends接收的是对象或函数
         4.data、props中属性、methods中的方法和computed的值继承规则一样
    -->
    <!-- 体现了继承性——————通用的成员变量（包括属性和方法）抽象成为一个父类，提供给子类继承，这样可以让子类拥有一些通用成员变量 -->
    <mix1></mix1>
    <mix2></mix2>
    <extend></extend>
</div>
</template>

<script>
import Mix1 from '@/components/mixextend/Mix1.vue'
import Mix2 from '@/components/mixextend/Mix2.vue'
import Extend from '@/components/mixextend/Extend.vue'
export default {
name: '',
components: {Mix1,Mix2,Extend},
data() {
return {
     name: 'app'
};
},
created() {

},
mounted() {

},
methods: {
 setData(){
    return `${this.name}(我是index.js)`
 }
},
computed: {},
watch: {},
}
</script>
<style lang='scss' scoped>
</style>