<template>
  <div id="app">
    <div>
     <Shortcut></Shortcut>
    <Nav></Nav>
    <Slideshow></Slideshow>
    <Sliderbar></Sliderbar>
    <Tuijian></Tuijian> 
    <Recommend></Recommend>
    <Public></Public>
    <New></New>
    <Active></Active>
    <Any></Any>
    <Footer></Footer>
    <Base></Base>
    </div>
  </div>
</template>

<script>
  import Shortcut from '../src/views/shortcut/shortcut.vue'
  import Nav from './views/nav/nav.vue'
  import Slideshow from './views/slideshow/slideshow.vue'
  import Sliderbar from './views/sliderbar/sliderbar.vue'
  import Tuijian from './views/tuijian/tuijian.vue'
  import Recommend from './views/recommend/recommend.vue'
  import Public from './views/public/public.vue'
  import New from './views/new/new.vue'
  import Active from './views/active/active.vue'
  import Any from './views/any/any.vue'
  import Footer from './views/footer/footer.vue'
  import Base from './views/base/base.vue'
export default {
  components:{
   Shortcut,
    Nav,
    Slideshow,
    Sliderbar,
    Tuijian,
    Recommend,
    Public,
    New,
    Active,
    Any, 
    Footer,
    Base
  }
}
</script>

<style lang="less">
  *{
    padding: 0;
    margin: 0;
  }
</style>
