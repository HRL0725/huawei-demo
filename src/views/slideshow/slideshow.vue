<template>
  <div class="w slideshow">
        <div class='slideshow_fl'>
            <a href="javescript:;" class="arrow_l">
                &lt;
            </a>
            <a href="javescript:;" class="arrow_r">
                &gt;
            </a>
            <ul>
                <li>
                    <a href="#"><img src="../../assets/01.jpg" alt=""></a>
                    <a href="#" class="xinpin">了解更多</a>
                </li>
                <li>
                    <a href="#"><img src="../../assets/02.jpg" alt=""></a>
                    <a href="#" class="caigou">了解更多</a>
                </li>
            </ul>
            <ol class="circle">
            </ol>
        </div>
    </div>
</template>

<script>
import slideshow1 from '../../js/slideshow1.js'
export default {
  components:{
    slideshow1
  },
  methods:{
    slideshow1(){}
  }
}
</script>

<style lang="less" scoped>
  .slideshow{
    width: 1700px;
    height: 647px;
    .slideshow_fl{
      position: relative;
      width: 1920px;
      height: 647px;
      overflow: hidden;
      .arrow_l{
        display: none;
        position: absolute;
        left: 10px;
        top: 43%;
        z-index: 2;
        color: orangered;
        font-size: 50px;
        cursor: pointer;
        text-decoration: none;
      }
      .arrow_r{ 
        display: none;  
      position: absolute;
      right: 240px;
      top: 43%;
      z-index: 2;
      color: orangered;
      font-size: 50px;
      cursor: pointer;
      text-decoration: none;   
      }
      ul{
        position: absolute;
        top: 0;
        left: 0;
        width: 300%;
        li{
          float: left;
          position: relative;
          .xinpin{
          position: absolute;
          display: inline-block;
          border: 1px solid #333;
          z-index: 100;
          padding: 10px 40px;
          top: 43%;
          left: 28%;
          color: #333;
          vertical-align: middle;
          text-align: center;
          font-size: 20px;
          text-decoration: none;
        }
        .xinpin:hover{
          background-color: red;
          border: none;
          color: #fff;
        }
        .caigou{
          position: absolute;
          display: inline-block;
          border: 1px solid #333;
          z-index: 100;
          padding: 10px 40px;
          top: 60%;
          left: 28%;
          color: #333;
          vertical-align: middle;
          text-align: center;
          font-size: 20px;
          text-decoration: none;
        }
        .caigou:hover{
          background-color: red;
          border: none;
          color: #fff;
        }
        }
      }
      .circle{
          li{
            float: left;
            width: 20px;
            height: 20px;
            z-index: 1000;
            border: 2px solid rgba(255, 255, 255, 0.5);
            margin: 0 3px;
            border-radius: 50%;
            cursor: pointer;
          }
        }
        .current{
          background-color: #fff;
          z-index: 1000;
        }
    }
  }
</style>