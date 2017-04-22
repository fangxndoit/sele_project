<template>
  <div id="app"> 
    <router-view></router-view>
    <BottonBar></BottonBar>
  </div>
</template>

<script>
import BottonBar from '@/components/Bottonbar'
export default {
  name: 'app',
  components: {
    BottonBar
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
  
}
</style>
