<template>
      <div class="recommend">
        <div class="recommend_top">
            <div class="pro">
                <img src="../../assets/03.jpg" alt="">
                <div>
                    <h4>产品</h4>
                    <h2>HUAWEI MateBook&nbsp;X&nbsp;Pro</h2>
                    <h5>入目惊鸿</h5>
                    <a href="#">了解更多</a>
                </div>
            </div>
            <div class="SE">
                <div>
                    <h4>产品</h4>
                    <h2>HUAWEI&nbsp;nova&nbsp;9&nbsp;SE</h2>
                    <h5>精彩，由我设定</h5>
                    <a href="#">了解更多</a>
                </div>
                <img src="../../assets/04.jpg" alt="">
            </div>
        </div>
        <div class="recommend_center">
            <div class="paper">
                <div>
                    <h4>产品</h4>
                    <h2>HUAWEI&nbsp;Matepad&nbsp;Paper<br>墨水平板</h2>
                    <h5>纸笔之间，卓然成篇</h5>
                    <a href="#">了解更多</a>
                </div>
                <img src="../../assets/05.jpg" alt="">
            </div>
            <div class="house">
                <div>
                    <h4>产品</h4>
                    <h2>华为全屋智能</h2>
                    <h5>定义未来家</h5>
                    <a href="#">了解更多</a>
                </div>
                <img src="../../assets/06.jpg" alt="">
            </div>
        </div>
        <div class="recommend_under">
            <div class="job">
                <div>
                    <h4>招聘</h4>
                    <h2>
                        华为面向全球招聘
                    </h2>
                    <h5>诚邀东欧、中欧、亚太等全球的科学家、博士、竞<br>赛人才、研发工程师、优秀大学生加盟</h5>
                    <a href="#">了解更多</a>
                </div>
                <img src="../../assets/07.jpg" alt="">
            </div>
            <div class="signal">
                <div>
                    <h4>前沿探索</h4>
                    <h2>
                        憧憬6G,共同定义6G
                    </h2>
                    <h5>《6G无线通信新征程》序言</h5>
                    <a href="#">了解更多</a>
                </div>
                <img src="../../assets/08.jpg" alt="">
            </div>
            <div class="figure">
                <div>
                    <h4>《ICT新视界》</h4>
                    <h2>
                        徐文伟，繁荣人才生态，共创行业新价值
                    </h2>
                    <a href="#">了解更多</a>
                </div>
                <img src="../../assets/09.jpg" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
  .recommend{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 1500px;
    height: 1450px;
    margin: 20px auto;
    .recommend_top{
      display: flex;
      justify-content: space-between;
      width: 1500px;
      height: 470px;
      .pro{
        position: relative;
        width: 1000px;
        height: 470px;
        overflow: hidden;
        div{
          position: absolute;
          left: 30px;
          top: 370px;
          text-align: left;
          width: 100%;
          height: 100%;
          transition: all 0.5s;
          h4{
            font-size: 18px;
            color: #fff;
            font-weight: 400;
          }
          h2{
            font-size: 23px;
            color: #fff;
          }
          h5{
            font-size: 17px;
            color: #7d7d7d;
            font-weight: normal;
          }
          a{
            display: inline-block;
            margin-top: 20px;
            font-size: 18px;
            color: #fff;
          }
          a::after{
            display: inline-block;
            font-family: 'icomoon';
            content: '\e997';
            color: red;
            font-size: 18px;
            margin-left: 8px;
          }
        }
        div:hover{
          transform: translateY(-50px);
        }
        img{
          width: 100%;
          height: 100%;
          transition: all 0.5s;
        }
        img:hover{
          transform: scale(1.2);
        }
      }
      .SE{
        position: relative;
        width: 470px;
        height: 470px;
        overflow: hidden;
        div{
          position: absolute;
          left: 30px;
          top: 370px;
          width: 100%;
          height: 100%;
          transition: all 0.5s;
          z-index: 2;
            h4{
            font-size: 18px;
            color: #fff;
            font-weight: 400;
          }
          h2{
            font-size: 23px;
            color: #fff;
          }
          h5{
            font-size: 17px;
            color: #7d7d7d;
            font-weight: normal;
          }
          a{
            display: inline-block;
            margin-top: 20px;
            font-size: 18px;
            color: #fff;
          }
          a::after{
            display: inline-block;
            font-family: 'icomoon';
            content: '\e997';
            color: red;
            font-size: 18px;
            margin-left: 8px;
          }
        }
        div:hover{
          transform: translateY(-50px);
        }
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
    .recommend_center{
      display: flex;
      justify-content: space-between;
      width: 1500px;
      height: 470px;
      margin-top: 20px;
      .paper{
        position: relative;
        width: 470px;
        height: 470px;
        overflow: hidden;
        div{
          position: absolute;
          top: 350px;
          left: 30px;
          width: 100%;
          height: 100%;
          transition: all 0.5s;
          z-index: 2;
            h4{
            font-size: 18px;
            color: #fff;
            font-weight: 400;
          }
          h2{
            font-size: 23px;
            color: #fff;
          }
          h5{
            font-size: 17px;
            color: #7d7d7d;
            font-weight: normal;
          }
          a{
            display: inline-block;
            margin-top: 20px;
            font-size: 18px;
            color: #fff;
          }
          a::after{
            display: inline-block;
            font-family: 'icomoon';
            content: '\e997';
            color: red;
            font-size: 18px;
            margin-left: 8px;
          }
        }
        div:hover{
          transform: translateY(-50px);
        }
        img{
          width: 100%;
          height: 100%;
          transition: all 0.5s;
        }
        img:hover{
          transform: scale(1.2);
        }
      }
      .house{
        position: relative;
        width: 1000px;
        height: 470px;
        overflow: hidden;
        div{
          position: absolute;
          top: 370px;
          left: 30px;
          width: 100%;
          height: 100%;
          z-index: 2;
          transition: all 0.5s;
            h4{
            font-size: 18px;
            color: #fff;
            font-weight: 400;
          }
          h2{
            font-size: 23px;
            color: #fff;
          }
          h5{
            font-size: 17px;
            color: #7d7d7d;
            font-weight: normal;
          }
          a{
            display: inline-block;
            margin-top: 20px;
            font-size: 18px;
            color: #fff;
          }
          a::after{
            display: inline-block;
            font-family: 'icomoon';
            content: '\e997';
            color: red;
            font-size: 18px;
            margin-left: 8px;
          }
        }
        div:hover{
          transform: translateY(-50px);
        }
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
    .recommend_under{
      display: flex;
      justify-content: space-between;
      width: 1500px;
      height: 446px;
      .job{
        position: relative;
        width: 480px;
        height: 446px;
        overflow: hidden;
        div{
          position: absolute;
          left: 30px;
          top: 330px;
          width: 100%;
          height: 100%;
          z-index: 2;
          transition: all 0.5s;
          h4{
            font-size: 18px;
            color: #fff;
            font-weight: 400;
          }
          h2{
            font-size: 23px;
            color: #fff;
          }
          h5{
            font-size: 17px;
            color: #7d7d7d;
            font-weight: 400;
          }
          a{
            display: inline-block;
            margin-top: 20px;
            font-size: 18px;
            color: #fff;
          }
          a::after{
            display: inline-block;
            font-family: 'icomoon';
            content: '\e997';
            color: red;
            font-size: 18px;
            margin-left: 8px;
          }
        }
        div:hover{
          transform: translateY(-50px);
        }
        img{
          width: 100%;
          height: 100%;
          transition: all 0.5s;
        }
        img:hover{
          transform: scale(1.2);
        }
      }
      .signal{
        position: relative;
        width: 480px;
        height: 446px;
        overflow: hidden;
        div{
          position: absolute;
          left: 30px;
          top: 356px;
          width: 100%;
          height: 100%;
          z-index: 2;
          transition: all 0.5s;
          h4{
            font-size: 18px;
            color: #fff;
            font-weight: 400;
          }
          h2{
            font-size: 23px;
            color: #fff;
          }
          h5{
            font-size: 17px;
            color: #7d7d7d;
            font-weight: 400;
          }
          a{
            display: inline-block;
            margin-top: 20px;
            font-size: 18px;
            color: #fff;
          }
          a::after{
            display: inline-block;
            font-family: 'icomoon';
            content: '\e997';
            color: red;
            font-size: 18px;
            margin-left: 8px;
          }
        }
        div:hover{
          transform: translateY(-50px);
        }
        img{
          width: 100%;
          height: 100%;
          transition: all 0.5s;
        }
        img:hover{
          transform: scale(1.2);
        }
      }
      .figure{
        position: relative;
        width: 480px;
        height: 446px;
        overflow: hidden;
        div{
          position: absolute;
          left: 30px;
          top: 370px;
          width: 100%;
          height: 100%;
          z-index: 2;
          transition: all 0.5s;
          h4{
            font-size: 18px;
            color: #fff;
            font-weight: 400;
          }
          h2{
            font-size: 23px;
            color: #fff;
          }
          h5{
            font-size: 17px;
            color: #7d7d7d;
            font-weight: 400;
          }
          a{
            display: inline-block;
            margin-top: 20px;
            font-size: 18px;
            color: #fff;
          }
          a::after{
            display: inline-block;
            font-family: 'icomoon';
            content: '\e997';
            color: red;
            font-size: 18px;
            margin-left: 8px;
          }
        }
        div:hover{
          transform: translateY(-50px);
        }
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
  }
</style>