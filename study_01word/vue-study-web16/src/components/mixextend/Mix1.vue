<!-- mix和extend  -->
<template>
<div class='mix1'>
    <p class="title">我的mix顺序是mixn1,mixn2</p>
    <p>{{`name的值${this.name}`}}</p>
    <p>{{`setData的值${this.setData()}`}}</p>
</div>
</template>

<script>
import mixn1 from "./mixn1"
import mixn2 from "./mixn2"
import extned from "./extend"
export default {
name: '',
mixins:[mixn1,mixn2],
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