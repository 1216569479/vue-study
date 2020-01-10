<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  provide() {
    return {
      form: this// 实现祖先和后代之间的传值
    };
  },
  name:'KForm',
  componentName:'KForm',//自定义名称
  props: {
    model: {
      type: Object,
      required: true
    },
    rules: {
      type: Object
    }
  },
  created(){
    this.fields=[]
    this.$on("kkb.form.addFiled", item => {
      this.fields.push(item)
    });
  },
  methods: {
    validate(cb) {
      // console.log(cb)
      // 获取所有孩子KFormItem
      // [resultPromise]
      // const tasks = this.$children
      //   .filter(item => item.prop) // 过滤掉没有prop属性的Item
      //   .map(item => item.validate());
      const tasks=this.fields.map(item => item.validate());
      // // 统一处理所有Promise结果
      Promise.all(tasks)
        .then(() => cb(true))
        .catch(() => cb(false));
    }
  }
};
</script>

<style scoped>
</style>