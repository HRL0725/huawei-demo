<template>
      <div class="public">
        <img src="../../assets/10.jpg" alt="">
        <a href="#">了解更多</a>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
  .public{
    position: relative;
    width: 1920px;
    height: 647px;
    margin: 30px 0;
    img{
      width: 100%;
      height: 100%;
    }
    a{
      display: inline-block;
      position: absolute;
      bottom: 15%;
      left: 16%;
      border: 1px solid #fff;
      color: #fff;
      font-size: 23px;
      padding: 5px 30px;
      text-decoration: none;
    }
    a:hover{
      background-color: red;
      border: none;
    }
  }
</style>