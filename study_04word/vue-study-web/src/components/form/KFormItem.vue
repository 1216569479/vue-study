<template>
  <div>
    <!-- label -->
    <label v-if="label">{{label}}</label>

    <slot></slot>

    <!-- 校验信息显示 -->
    <p v-if="error">{{error}}</p>
  </div>
</template>

<script>
// Asyc-validator
import Schema from "async-validator";
 import emitter from '@/mixins/emitter'
export default {
  inject: ["form"],//从祖先得到的值
  name:'KFormItem',
  mixins:[emitter],
  componentName:'KFormItem',//自定义名称
  data() {
    return {
      error: "" // error是空说明校验通过
    };
  },
  props: {
    label: {
      type: String,
      default: ""
    },
    prop: {
      type: String
    }
  },
  mounted() {
    // 父组件监听子组件传递过来得的validate信号
    this.$on("validate", () => {
      this.validate();
    });
    if(this.porp){
     this.dispatch('KForm','kkb.form.addFiled',[this])
    }
  
  },
  methods: {
    validate() {
      // 规则
      const rules = this.form.rules[this.prop];
      // 当前值
      const value = this.form.model[this.prop];
      // 校验描述对象
      //属性名表达式
      const desc = { [this.prop]: rules };
      // 创建Schema实例
      const schema = new Schema(desc);
      return schema.validate({ [this.prop]: value }, errors => {
        if (errors) {
          this.error = errors[0].message;
        } else {
          // 校验通过
          this.error = "";
        }
      });
    }
  }
};
</script>

<style scoped>
</style>