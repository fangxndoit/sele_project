<template>
<div class="botton">
    <div class="bottonbar">
        <div class="boo" id="home" v-on:click="home" v-bind:class="{ 'class-a': isA, 'class-b': !isA }"><router-link to='/main'><span class="icon-home"></span><h5>首页</h5></router-link></div>
        <div class="boo" id="book" v-on:click="book" v-bind:class="{ 'class-a': isB, 'class-b': !isB }"><router-link to='/bookstore'><span class="icon-book"></span><h5>书架</h5></router-link></div>
        <div class="boo" id="comm" v-on:click="comm" v-bind:class="{ 'class-a': isC, 'class-b': !isC }"><router-link to='/community'><span class="icon-bubbles"></span><h5>社区</h5></router-link></div>
        <div class="boo" id="person" v-on:click="person" v-bind:class="{ 'class-a': isD, 'class-b': !isD }"><router-link to='/person'><span class="icon-user-tie"></span><h5>我的</h5></router-link></div>
        
    </div>
</div>
</template>

<script>

export default {
  name: 'botton',
  data () {
    return {
      isA: false,
      isB: false,
      isC: false,
      isD: false
    }
  },
  methods: {
    home: function () {
      this.isA = !this.isA
      if (this.isB) {
        this.isB = !this.isB
      }
      if (this.isC) {
        this.isC = !this.isC
      }
      if (this.isD) {
        this.isD = !this.isD
      }
    },
    book: function () {
      this.isB = !this.isB
      if (this.isA) {
        this.isA = !this.isA
      }
      if (this.isC) {
        this.isC = !this.isC
      }
      if (this.isD) {
        this.isD = !this.isD
      }
    },
    comm: function () {
      this.isC = !this.isC
      if (this.isA) {
        this.isA = !this.isA
      }
      if (this.isB) {
        this.isB = !this.isB
      }
      if (this.isD) {
        this.isD = !this.isD
      }
    },
    person: function () {
      this.isD = !this.isD
      if (this.isA) {
        this.isA = !this.isA
      }
      if (this.isB) {
        this.isB = !this.isB
      }
      if (this.isC) {
        this.isC = !this.isC
      }
    }
  }
}

</script>

<style>
@import '../common/stylus/style.css';
/*主页点击样式*/
.class-a{
    background-color:blue;
  
}
.class-a h5{
    color: white;
}
.class-a span{
    color: white;
}

.boo{
    font-size: 22px;
   
    width: 70px;
    height: 60px;
    padding: 10px;
    margin: 0 auto;
    float: left;      
}

.botton{
    background: #fff;
    
    margin:2px auto 0;
    position: fixed;
    bottom: 0;
    color: #555;
    

}
.bottonbar{
    margin: 0 auto;
    background: #fff;
   
    position: fixed;
    bottom: 0;
    left: 1%;
    right: 1%;
    width: -moz-fit-content;
    width: -webkit-fit-content;
    width: fit-content;

    
}
h5{
    
    font-size: 20px;
    padding: 10px 10px 3px 10px;
}
span{
    
    padding: 5px;

    
}
</style>
