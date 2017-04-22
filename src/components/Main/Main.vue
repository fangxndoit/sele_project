<template>
  <div class="main">
    <Header></Header>
    <Banner></Banner>
    <h1>{{ msg }}</h1>
    
    
  </div>
</template>

<script>
import Banner from '@/components/Banner'
import Header from '@/components/Headbar'
export default {
  name: 'mian',
  data () {
    return {
      msg: 'Welcome to main'
    }
  },
  components: {
    Header,
    Banner
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
