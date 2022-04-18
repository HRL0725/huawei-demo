<template>
  <div class="slider_bar">
        <div class="service">
            <a href="#"></a>
        </div>
        <div class="goback">
            <a href="#"></a>
        </div>
    </div>
</template>

<script>
import sliderbar1 from '../../js/sliderbar1'
export default {
  components:{
    sliderbar1
  },
  methods:{
    sliderbar1(){}
  }
}
</script>

<style lang="less" scoped>
  .slider_bar{
    position: absolute;
    bottom: 30px;
    right: 0;
    width: 50px;
    height: 100px;
    z-index: 333px;
    .service{
      width: 50px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      background-color: rgba(218,79,79,0.8);
      a::after{
        display: inline-block;
        font-family: 'icomoon';
        content: '\f007';
        color: #fff;
        font-size: 30px;
      }
    }
    .goback{
      display: none;
      width: 50px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      background-color: rgba(143,138,138,0.8);
      a::after{
        display: inline-block;
        font-family: 'icomoon';
        content: '\e998';
        color: #fff;
        font-size: 30px;
      }
    }
  }
</style>