<!-- mix和extend  -->
<template>
<div class='mix1'>
    <p class="title">我只是单纯的extend</p>
    <p>{{`name的值${this.name}`}}</p>
    <p>{{`setData的值${this.setData()}`}}</p>
</div>
</template>

<script>
import extned from "./extend"
export default {
name: '',
extends:extned,
components: {},
data() {
return {
};
},
created() {

},
mounted() {

},
methods: {

},
computed: {},
watch: {},
}
</script>
<style lang='scss' scoped>
.title{
    color:red;
    font-weight: 700;
    font-size:20px;
}
</style>