<template>
  <header class="head">
    <img v-for='img in imgs' :class="setClass(img.class)" :src="setSrc(img.src)"/>
    <img class="searchBtn" @click='openSearch' src="../assets/icon-search.png"/>
    <div class="searchPage">
      <div class="header">
        <div class="search">
          <img src="../assets/icon-search.png"/>
        </div>
        <div class="close" @click='closeSearch'>
          <div v-for='i in 2' class="closeLine"></div>
        </div>
      </div>
    </div>
   
  </header>
</template>

<script>
export default {
  name: 'head',
  data () {
    return {
      imgs: []
    }
  },
  created () {
    this.imgs = [{
      class: 'baijia',
      // 直接使用相对路径无法被webpack打包，必须加上require才行
      src: require('../assets/logo-baijia.png')
    }]
  },
  methods: {
    setClass (classname) {
      return classname
    },
    setSrc (src) {
      return src
    },
    toggleMenu () {
      var page = document.querySelector('#app .page')
      var aside = document.querySelector('.head .aside')
      var pageClass = page.className
      var asideClass = aside.className
      if (pageClass === 'page') {
        page.className = 'page toggle'
      } else {
        page.className = 'page'
      }
      if (asideClass === 'aside') {
        aside.className = 'aside closeMenu'
      } else {
        aside.className = 'aside'
      }
    },
    openSearch () {
      var searchPage = document.querySelector('.head .searchPage')
      searchPage.style.display = 'block'
    },
    closeSearch () {
      var searchPage = document.querySelector('.head .searchPage')
      searchPage.style.display = 'none'
    }
  }
}
</script>

<style lang="stylus">
.head{
  height: 60px;
  background: #262627;
  position: relative;
  img{
    height: 50px;
    position: absolute;
    top: 5px;
  }
  .baijia{
    height: 40px;
    top: 10px;
    left: 10px;
  }
  .searchBtn{
    right: 15%;
    cursor: pointer;
  }
  .closeMenu{
    .line:first-child{
      transform: rotate(45deg);
    }
    .line:nth-child(2){
      display: none;
    }
    .line:last-child{
      transform: rotate(-45deg);
    }
  }
  .searchPage{
    display: none;
    position: fixed;
    height: 100%;
    width: 100%;
    background: #fff;
    z-index: 999;
    .header{
      height: 60px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 0 2%;
      background: #262627;
      .search{
        height: 40px;
        width: 82%;
        border: 1px solid #eee;
        display: flex;
        justify-content: flex-end;
        align-items: center;
      }
      .close{
        height: 40px;
        width: 12%;
        margin-left: 2%;
        padding-top: 34px;
        .closeLine{
          height: 1px;
          width: 70%;
          background: #fff;
        }
        .closeLine:first-child{
          color: red;
          transform: rotate(45deg);
        }
        .closeLine:last-child{
          color: red;
          transform: rotate(-45deg);
        }
      }
    }
  }
}
</style>
