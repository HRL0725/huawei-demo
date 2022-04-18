<template>
 <div class="any">
   <a href="#" class="any_active">更多活动</a>
   <a href="#" class="any_news">更多新闻</a>
  </div>  
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
  .any{
    position: relative;
    height: 180px;
    .any_active{
      display: inline-block;
      position: absolute;
      top: 40%;
      left: 40%;
      color: #333;
      font-size: 35px;
      border: 1px solid #333;
      font-size: 23px;
      padding: 5px 30px;
      text-decoration: none;
    }
    .any_active:hover{
      border: none;
      background-color: red;
      color: #fff;
    }
     .any_news{
      display: inline-block;
      position: absolute;
      top: 40%;
      left: 50%;
      color: #333;
      font-size: 35px;
      border: 1px solid #333;
      font-size: 23px;
      padding: 5px 30px;
      text-decoration: none;
    }
    .any_news:hover{
      border: none;
      background-color: red;
      color: #fff;
    }
  }
</style>