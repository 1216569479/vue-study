<template>
  <div id="app">
    <next-tick></next-tick>
  </div>
</template>

<script>
import NextTick from '@/components/NextTick.vue'
export default {
  name: 'app',
  components: {
    NextTick
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
