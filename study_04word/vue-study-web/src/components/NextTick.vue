<template>
    <div>
        <p ref="nexttick">{{name}}</p>
        <button @click="setName">状态设置</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: 'nba还没开始'
        };
    },
    watch:{
      name:function(){
        console.log(this.lazy)
      }
    },
    update() {
        /* istanbul ignore else */
        console.log(12312);
        if (this.lazy) {
            this.dirty = true
        } else if (this.sync) {
            /*同步则执行run直接渲染视图*/
            console.log('我是同步')
            this.run()
        } else {
            /*异步推送到观察者队列中，下一个tick时调用。*/
            console.log('我是异步')
            // queueWatcher(this)
        }
    },
    methods: {
        setName() {
            this.name = '詹姆斯已经夺冠';
            this.$nextTick(() => {
                console.log(this.$refs.nexttick.innerText); //打印"name"
            });
            console.log(this.$refs.nexttick.innerText); //打印“name”
        },
        
    }
}
</script>

<style>

</style>