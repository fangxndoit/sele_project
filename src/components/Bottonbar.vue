<template>
<div class="botton">
    <div class="bottonbar">
        <div class="boo"><router-link to='/main'><span class="icon-home"></span><h5>首页</h5></router-link></div>
        <div class="boo"><router-link to='/bookstore'><span class="icon-book"></span><h5>书架</h5></router-link></div>
        <div class="boo"><router-link to='/community'><span class="icon-bubbles"></span><h5>社区</h5></router-link></div>
        <div class="boo"><router-link to='/person'><span class="icon-user-tie"></span><h5>我的</h5></router-link></div>
        
    </div>
</div>
</template>

<script>

export default {
  name: 'botton'
}
</script>

<style>
@import '../common/stylus/style.css';
.boo{
    font-size: 28px;
    
    width: 80px;
    height: 70px;
    padding: 1px;
    margin: 0 auto;
    float: left;
    margin-top: 10px;
    
    
}
.botton{
    background: #fff;
    width: 450px;
    height: 120px;
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
    left: 5%;
    right: 5%;
    width: -moz-fit-content;
    width: -webkit-fit-content;
    width: fit-content;

    
}
h5{
    color: #000;
    
    padding: 10px 10px 3px 10px;
}
span{
    
    padding: 5px;

    
}
</style>
