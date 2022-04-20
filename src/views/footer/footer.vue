<template>
    <div class="footer">
        <div class="footer_top">
            <a href="index.html" class="footer_top_l">首页</a>
            <a href="#" class="footer_top_r"></a>
        </div>
        <div class="footer_center">
            <dl v-for="item in footer" :key="item.id">
                <dt>{{item.text}}</dt>
                <dd><a href="#">{{item.text1}}</a></dd>
                <dd><a href="#">{{item.text2}}</a></dd>
                <dd><a href="#">{{item.text3}}</a></dd>
                <dd><a href="#">{{item.text4}}</a></dd>
                <dd><a href="#">{{item.text5}}</a></dd>
                <dd><a href="#">{{item.text6}}</a></dd>
                <dd><a href="#">{{item.text7}}</a></dd>
            </dl>
        </div>
        <div class="footer_under">
            <ul class="footer_under_l">
                <li v-for="item in footer1" :key="item.id"><a href="#">{{item.text}}</a></li>
            </ul>
            <div class="footer_under_r">
                <a href="#" class="weibo"></a>
                <a href="#" class="in"></a>
                <a href="#" class="weixin"></a>
                <a href="#" class="toutiao"></a>
                <a href="#" class="zhihu"></a>
            </div>
        </div>
    </div> 
</template>

<script>
import jsonData from "../../../data"
export default {
  data(){
    return {
      footer:[],
      footer1:[]
    }
  },
  mounted(){
    this.footer = jsonData.footer
    console.log(230,this.footer)
     this.footer1 = jsonData.footer1
    console.log(231,this.footer1);
  }
}
</script>

<style lang="less" scoped>
 @font-face {
    font-family: 'icomoon';
    src: url('../../fonts/icomoon.eot');
    src: url('../../fonts/icomoon.eot') format('embedded-opentype'), url('../../fonts/icomoon.ttf') format('truetype'), url('../../fonts/icomoon.woff') format('woff'), url('../../fonts/icomoon.svg') format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: block;
}
  .footer{
    height: 500px;
    background-color: #f7f7f7;
    margin-top: 10px;
    .footer_top{
      position: relative;
      width: 1500px;
      height: 80px;
      line-height: 80px;
      margin: 0 auto;
      border-bottom: 1px solid #ccc;
      .footer_top_l{
        position: absolute;
        top: 0;
        left: 0;
        font-size: 25px;
        color: #595757;
        text-decoration: none;
      }
      .footer_top_r{
        position: absolute;
        top: 0;
        right: 0;
      }
      .footer_top_r::before{
        display: inline-block;
        font-family: 'icomoon';
        content: '\e986';
        color: #595757;
        font-size: 25px;
        vertical-align: middle;
      }
    }
    .footer_center{
      position: relative;
      display: flex;
      justify-content: space-between;
      width: 1500px;
      height: 320px;
      margin: 0 auto;
      border-bottom: 1px solid #ccc;
      dl{ 
        padding: 10px 0;
        dt{
          font-size: 18px;
          font-weight: 700;
          color: #333;
        }
        dd{
          font-size: 17px;
          color: #595757;
          margin: 12px 0;
          a{
            color: #595757;
            text-decoration: none;
          }
        }
      }
    }
    .footer_under{
      position: relative;
      width: 1500px;
      height: 100px;
      line-height: 100px;
      margin: 0 auto;
      .footer_under_l{
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        height: 50px;
        width: 500px;
        justify-content: space-between;
      }
      ul{
        li{
          list-style: none;
        a{
          color: #595757;
          font-size: 17px;
          text-decoration: none;
        }
      }}
      .footer_under_r{
        position: absolute;
        top: 0;
        right: 0;
        height: 50px;
        width: 350px;
        a{
          color: #595757;
        }
        .weibo::before{
          display: inline-block;
          font-family: 'icomoon';
          content: '\e976';
          font-size: 30px;
          vertical-align: middle;
          margin: 0 15px;
        }
        .in::before{
          display: inline-block;
          font-family: 'icomoon';
          content: '\e979';
          font-size: 30px;
          vertical-align: middle;
          margin: 0 15px;
        }
        .weixin::before{
          display: inline-block;
          font-family: 'icomoon';
          content: '\e906';
          font-size: 30px;
          vertical-align: middle;
          margin: 0 15px;
        }
        .toutiao::before{
          display: inline-block;
          font-family: 'icomoon';
          content: '\e97d';
          font-size: 30px;
          vertical-align: middle;
          margin: 0 15px;
        }
        .zhihu::before{
          display: inline-block;
          font-family: 'icomoon';
          content: '\e977';
          font-size: 30px;
          vertical-align: middle;
          margin: 0 15px;
        }
      }
    }
  }
</style>