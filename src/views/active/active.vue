<template>
 <div class="w active">
        <div class="active_l" v-for="item in active" :key="item.id">
            <div class="active_l_top">
                <a href="#"><img src="../../assets/11.jpg" alt=""></a>
            </div>
            <span class="active_l_center">{{item.text}}</span>
            <div class="active_l_under">
                <a>
                    <h4>{{item.text1}}</h4>
                    <span class="site">{{item.text2}}</span><span class="date">{{item.text3}}</span>
                    <p>{{item.text4}}</p>
                </a>
            </div>
        </div>
        <div class="active_r">
            <div>
                <a href="#" class="red" v-for="item in active1" :key="item.id">
                    <h4>
                        {{item.text}}
                    </h4>
                    <span>{{item.text1}}</span>
                </a>
            </div>
            <span class="active_r_top">新闻</span>
        </div>
    </div>  
</template>

<script>
 import jsonData from "../../../data"
export default {
    data(){
    return {
      active:[],
      active1:[]
    }
  },
mounted(){
 console.log(555,jsonData);
 this.active = jsonData.active
 console.log(666,this.active);
 this.active1  = jsonData.active1
 console.log(777,this.active1);
 }
}
</script>

<style lang="less" scoped>
.active{
  display: flex;
  justify-content: space-between;
  width: 1500px;
  height: 470px;
  margin: 10px auto;
  .active_l{
  position: relative;
  width: 490px;
  height: 470px;
  background-color: #f8f8f8;
  .active_l_top{
    width: 490px;
    height: 280px;
    overflow: hidden;
    a{
      cursor: pointer;
      img{
        width: 100%;
        height: 100%;
        transition: all 0.5s;
      }
      img:hover{
        transform: scale(1.2);
      }
    }
  }
  .active_l_center{
    position: absolute;
    top: 0;
    left: 0;
    padding: 5px 10px;
    color: #fff;
    font-size: 16px;
    background-color: #7d7d7d;
  }
  .active_l_under{
    height: 190px;
    padding: 5px 10px;
    a{
      cursor: pointer;
      h4{
        color: #333;
        font-size: 18px;
        padding: 6px 0;
      }
      span{
        color: #333;
        font-size: 16px;
      }
      .site::before{
        display: inline-block;
        font-family: 'icomoon';
        content: '\e948';
        color: #666666;
        font-size: 16px;
        margin-right: 6px;
      }
      .date::before{
        display: inline-block;
        font-family: 'icomoon';
        content: '\e94a';
        color: #666666;
        font-size: 16px;
        padding: 0 6px 0 100px;
      }
      p{
        color: #666666;
        font-size: 16px;
        margin-top: 30px;
      }
    }
  }
  .active_l_under:hover{
    background-color: #d8d8d8;
  }
  }
  .active_c{
  position: relative;
  width: 490px;
  height: 470px;
  background-color: #f8f8f8;
  .active_c_top{
    width: 490px;
    height: 280px;
    overflow: hidden;
    a{
      cursor: pointer;
      img{
        width: 100%;
        height: 100%;
        transition: all 0.5s;
      }
      img:hover{
        transform: scale(1.2);
      }
    }
  }
  .active_c_center{
    position: absolute;
    top: 0;
    left: 0;
    padding: 5px 10px;
    color: #fff;
    font-size: 16px;
    background-color: #7d7d7d;
  }
  .active_c_under{
    height: 190px;
    padding: 5px 10px;
    a{
      text-decoration: none;
      cursor: pointer;
      h4{
        color: #333;
        font-size: 18px;
        padding: 6px 0;
      }
      span{
        color: #333;
        font-size: 16px;
      }
      .site::before{
        display: inline-block;
        font-family: 'icomoon';
        content: '\e948';
        color: #666666;
        font-size: 16px;
        margin-right: 6px;
      }
      .date::before{
        display: inline-block;
        font-family: 'icomoon';
        content: '\e94a';
        color: #666666;
        font-size: 16px;
        padding: 0 6px 0 100px;
      }
      p{
        color: #666666;
        font-size: 16px;
        margin-top: 30px;
      }
    }
  }
   .active_c_under:hover{
    background-color: #d8d8d8;
  }
  }
  .active_r{
    position: relative;
    width: 490px;
    height: 370px;
    padding: 50px 10px;
    background-color: #f8f8f8;
    .active_r_top{
      position: absolute;
      top: 0;
      left: 0;
      padding: 5px 10px;
      color: #fff;
      font-size: 16px;
      background-color: #7d7d7d;
    }
    a{
      display: block;
      margin-bottom: 15px;
      text-align: left;
      text-decoration: none;
    }
    h4{
      font-size: 18px;
      color: #333;
      padding-bottom: 6px;
    }
    span{
      font-size: 16px;
      color: #666666;
    }
    a:hover{
      color: red;
    }
  }
}
</style>