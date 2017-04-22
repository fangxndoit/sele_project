<template>
  <div class="community">
    <header class="headtext">
      <div class="title">社团广场</div>
      </header>
    <Banner></Banner>
    <h1>{{ msg }}</h1>
    
    
  </div>
</template>

<script>
import Banner from '@/components/Banner'
export default {
  name: 'community',
  data () {
    return {
      msg: 'Welcome to community'
    }
  },
  components: {
    Banner
  }

}
</script>

<style >
.headtext{
  height: 60px;
  background: #ffffff;
}
.title{
  font-size:24px;
  color: #595959;  
  height:60px;
  line-height:60px;
}

</style>
