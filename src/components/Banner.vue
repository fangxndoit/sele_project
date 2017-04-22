<template>
  <div class="select">
    <div class="banner">
      <div class="box">
        <img v-for='img in imgs' class="img" :src="setBannerSrc(img.src)"/>
      </div>
      <ul class="num">
      	<li v-for='i in 4'></li>
      </ul>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'select',
  data () {
    return {
      imgs: [{
        src: require('../assets/banner/a.jpg')
      }, {
        src: require('../assets/banner/b.jpg')
      }, {
        src: require('../assets/banner/c.jpg')
      }, {
        src: require('../assets/banner/d.jpg')
      }]
    }
  },
  mounted () {
    let num = 0
    let timer = null
    let time = 3000
    let imgs = document.querySelectorAll('.select .box img')
    let nums = document.querySelectorAll('.select .num li')
    let len = imgs.length - 1
    function carousel () {
      num === len ? num = 0 : num++
      changeImg(imgs, nums, num)
      clickShow()
    }
    $('.banner').hover(stop, play)
    // 点击切换图片
    function clickShow () {
      for (let i = 0; i < nums.length; i++) {
        nums[i].addEventListener('click', function (e) {
          let activeIndex = getIndex(nums, e.target)
          changeImg(imgs, nums, activeIndex)
        })
      }
    }
    // 添加动画
    function play () {
      timer = setInterval(function () {
        carousel()
      }, time)
    }
    // 清除动画
    function stop () {
      clearInterval(timer)
    }
    // 切换图片
    function changeImg (arr1, arr2, num) {
      for (let i = 0; i < arr1.length; i++) {
        if (num === i) {
          $(arr1[i]).show()
          arr2[i].className = 'active'
        } else {
          $(arr1[i]).hide()
          arr2[i].className = ''
        }
      }
    }
    // 得到特定对象下标
    function getIndex (arr, obj) {
      return [].indexOf.call(arr, obj)
    }
    play()
  },
  methods: {
    setBannerSrc (src) {
      return src
    },
    setNewSrc (src) {
      return src
    },
    removeTimer () {
      clearInterval(this.timer)
    }
  }
}
</script>

<style lang="stylus">
.select{
  background: #fff;
  .banner{
    position: relative;
    width: 100%;
    height: 200px;
    overflow: hidden;
    .box{
      height: 200px;
      width: 100%;
      position: absolute;
      left: 0;
      top: 0;
      display: flex;
      justify-content: flex-start;
    }
    .img{
      height: 200px;
      width: 100%;
      transition: all 1s;
    }
    .num{
      display: flex;
      list-style: none;
      position: absolute;
      bottom: 10px;
      right: 10px;
      .active{
        background: #058 !important;
      }
      li{
        height: 10px;
        width: 10px;
        cursor: pointer;
        background: #fff;
        border-radius: 50%;
        margin: 10px;
      }
    }
  }
}
</style>
