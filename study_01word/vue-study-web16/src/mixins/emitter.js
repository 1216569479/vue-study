// params是数组
// 替代this.$parent 或者this.$children为了防止子父不是指定的
function broadcast(componentName, eventName, params) {
  // 从上往下派发事件，如果组件名称相同，则派发事件
  // console.log(this.$children)
  this.$children.forEach(child => {
    var name = child.$options.componentName;
    if (name === componentName) {
      child.$emit.apply(child, [eventName].concat(params));
    } else {
      broadcast.apply(child, [componentName, eventName].concat([params]));
    }
  });
}
export default {
  methods: {
    // 下发，componentName是作为一个标识，防止组件之间不是直接的父子关系
    dispatch(componentName, eventName, params) {
      var parent = this.$parent || this.$root;// 如果没也父实例将是自己
      var name = parent.$options.componentName;//获取父实例中的自定义（componentNam）属性
      while (parent && (!name || name !== componentName)) {// 在父实例存在的情况下，假如父实例name不存在或者传入的变量componentName与name不一致，一直循环找到存在的parent
        parent = parent.$parent;
        if (parent) {
          name = parent.$options.componentName;
        }
      }
      if (parent) {//当存在父组件（可能是祖先）
        //父组件下发指令
        console.log([eventName].concat(params));
        //call 方法接受的是若干个参数列表，而 apply 接收的是一个包含多个参数的数组
        // bind()方法创建一个新的函数, 当被调用时，将其this关键字设置为提供的值，在调用新函数时，c可以传入若干个参数列表
        // $emit  {string} eventName  [...args]
        // 这里只是单纯使用了apply使用数组传参的方式
        parent.$emit.apply(parent, [eventName].concat(params));
        // parent.$emit（eventName,params(这里需要判断params的值)）
      }
    },
    broadcast(componentName, eventName, params) {
      // 广播递归
      broadcast.call(this, componentName, eventName, params);
    }
  }
};
