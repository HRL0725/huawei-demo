<template>
  <div class="nav">
    <div class="nav_top">
 <div class="logo">
  <img src="../../assets/huawei_logo.png" alt="">
            </div>
            <div class="nav_c">
                <ul class="nav_main">
                     <li><a href="#" @mouseenter="getnav(family)">个人及家庭产品</a></li>
                    <li><a href="#" >商用产品及方案</a></li>
                    <li><a href="#" >服务支持</a></li>
                    <li><a href="#" >合作伙伴与开发者</a></li>
                    <li><a href="#">关于华为</a></li>
                </ul>
            </div>
            <div class="nav_r">
                <a href="#" class="nav_shop">在线购买</a>
                <a href="#" class="nav_search"></a>
            </div>                    
   </div>
    <div class="nav_under">
            <div class="family">
                <div class="family_top">
                    <div class="family_top_left">
                        <ul class="family_top_left_nav">
                            <li class="shouji">
                                <span></span>
                                <a href="#">手机</a>
                            </li>
                            <li class="diannao">
                                <span></span>
                                <a href="#">电脑</a>
                            </li>
                            <li class="pingban">
                                <span></span>
                                <a href="#">平板</a>
                            </li>
                            <li class="zhihui">
                                <span></span>
                                <a href="#">智慧屏</a>
                            </li>
                            <li class="yanjing">
                                <span></span>
                                <a href="#">VR眼镜</a>
                            </li>
                            <li class="chuandai">
                                <span></span>
                                <a href="#">穿戴</a>
                            </li>
                            <li class="erji">
                                <span></span>
                                <a href="#">耳机音箱</a>
                            </li>
                            <li class="luyou">
                                <span></span>
                                <a href="#">路由器</a>
                            </li>
                            <li class="OS">
                                <span></span>
                                <a href="#">HarmonyOS</a>
                            </li>
                            <li class="quanbu">
                                <span></span>
                                <a href="#">全部产品</a>
                            </li>
                        </ul>
                    </div>
                    <div class="family_top_right">
                        <a href="#"><img src="../../assets/p50.jpg" alt=""></a>
                    </div>
                </div>
                <div class="family_under">
                    <div class="family_under_left">
                        <a href="#" class="shoper">消费者业务网站</a>
                        <a href="#" class="shopping">华为商城</a>
                    </div>
                    <div class="family_under_right">
                        <a href="javescript:;">X</a>
                    </div>
                </div>
            </div>
            <div class="company">
                <div class="company_top">
                    <div class="company_top_1">
                        <h3>产品</h3>
                        <div class="product">
                            <dl v-for="item in product" :key="item.id">
                                <dt>{{item.text}}</dt>
                                <dd><a href="#">{{item.text1}}</a></dd>
                                <dd><a>{{item.text2}}</a></dd>
                                <dd><a>{{item.text3}}</a></dd>
                                <dd><a>{{item.text4}}</a></dd>
                                <dd><a>{{item.text5}}</a></dd>
                                <dd><a>{{item.text6}}</a></dd>
                                <dd><a>{{item.text7}}</a></dd>
                            </dl>
                        </div>
                    </div>
                    <div class="company_top_box">
                      <div class="company_top_2" v-for="item in company" :key="item.id">
                        <h3>{{item.text}}</h3>
                        <div class="serve">
                            <ul>
                                <li><a>{{item.text1}}</a></li>
                                <li><a>{{item.text2}}</a></li>
                                <li><a>{{item.text3}}</a></li>
                                <li><a>{{item.text4}}</a></li>
                                <li><a>{{item.text5}}</a></li>
                                <li><a>{{item.text6}}</a></li>
                                <li><a>{{item.text7}}</a></li>
                                <li><a>{{item.text8}}</a></li>
                            </ul>
                        </div>
                      </div>
                    </div>
                </div>
                <div class="company_under">
                    <div class="company_under_left">
                        <a href="#" class="company_under_left1">企业服务网站</a>
                        <a href="#" class="company_under_left2">运营业务网站</a>
                        <a href="#" class="company_under_left3">华为云网站</a>
                    </div>
                    <div class="company_under_right">
                        <a href="#">x</a>
                    </div>
                </div>
            </div>
            <div class="support">
                <div class="support_top">
                    <div v-for="item in support" :key="item.id">
                        <h3>{{item.text}}</h3>
                        <ul>
                            <li><a href="#">{{item.text1}}</a></li>
                            <li><a href="#">{{item.text2}}</a></li>
                            <li><a href="#">{{item.text3}}</a></li>
                            <li><a href="#">{{item.text4}}</a></li>
                            <li><a href="#">{{item.text5}}</a></li>
                            <li><a href="#">{{item.text6}}</a></li>
                            <li class="many"><a href="#">{{item.text7}}</a></li>
                        </ul>
                    </div>
                </div>
                <div class="support_under">
                    <div class="support_under_right">
                        <a href="#">x</a>
                    </div>
                </div>
            </div>
            <div class="develop">
                <div class="develop_top">
                    <div v-for="item in develop" :key="item.id">
                        <h3>{{item.text}}</h3>
                        <ul>
                            <li><a href="#">{{item.text1}}</a></li>
                            <li><a href="#">{{item.text2}}</a></li>
                            <li><a href="#">{{item.text3}}</a></li>
                            <li><a href="#">{{item.text4}}</a></li>
                            <li><a href="#">{{item.text5}}</a></li>
                            <li><a href="#">{{item.text6}}</a></li>
                            <li><a href="#">{{item.text7}}</a></li>
                        </ul>
                    </div>
                </div>
                <div class="develop_under">
                    <div class="develop_under_right">
                        <a href="#">x</a>
                    </div>
                </div>
            </div>
            <div class="about">
                <div class="about_top">
                    <div class="about_top1" v-for="item in about" :key="item.id">
                        <h3>{{item.text}}</h3>
                        <ul>
                            <li><a href="#">{{item.text1}}&nbsp;&nbsp;</a></li>
                            <li><a href="#">{{item.text2}}</a></li>
                            <li><a href="#">{{item.text3}}&nbsp;&nbsp;</a></li>
                            <li><a href="#">{{item.text4}}</a></li>
                            <li><a href="#">{{item.text5}}&nbsp;&nbsp;</a></li>
                            <li><a href="#">{{item.text6}}</a></li>
                            <li><a href="#">{{item.text7}}</a></li>
                            <li><a href="#">{{item.text8}}</a></li>
                            <li><a href="#">{{item.text9}}</a></li>
                            <li><a href="#">{{item.text10}}</a></li>
                            <li><a href="#">{{item.text11}}</a></li>
                            <li><a href="#">{{item.text12}}</a></li>
                        </ul>
                    </div>
                    <div class="about_top4">
                        <img src="../../assets/13.jpg" alt="">
                    </div>
                </div>
                <div class="about_under">
                    <div class="about_under_right">
                        <a href="#">x</a>
                    </div>
                </div>
            </div>
    </div>
  </div>
</template>

<script>
import jsonData from '../../../data'
export default {
  data() {
    return {
      nav: [],
      product: [],
      company:[],
      support:[],
      develop:[],
      about:[],
    }
  },
  methods:{
    gatnav: function(n){
      var n = document.querySelector('.n')
     n.style.display = 'block'
    }
  },
  mounted(){
    console.log(2223, jsonData)
       if(jsonData.nav.length) {
      this.nav = jsonData.nav
      console.log(2223, this.nav)
    }
    this.company = jsonData.company
    console.log(2227,this.company),
    this.product = jsonData.product
    console.log(2226,this.product);
    this.support = jsonData.support
    console.log(2228,this.support);
    this.develop = jsonData.develop
    console.log(2229,this.develop);
    this.about = jsonData.about
    console.log(2300,this.about);
  },
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
  .nav{
    .nav_top{
      position: relative;
      height: 78px;
      .logo{
        position: absolute;
        top: 10px;
        left: 20px;
        width: 133px;
        height: 66px;
        line-height: 66px;
        margin-left: 50px;
        img{
          width: 133px;
          height: 30px;
        }
      }
      .nav_c{
        position: absolute;
        top: 0;
        left: 500px;
        height: 78px;
        .nav_main{
          margin: 0 20px;
          li{
            float: left;
            height: 78px;
            line-height: 78px;
            padding: 0 20px;
            list-style: none;
            a{
              color: #333333;
              font-size: 18px;
              cursor: pointer;
              text-decoration: none;
            }
          }
          li:hover{
          border-bottom: 2px solid red;
          }
        }
      }
      .nav_r{
        position: absolute;
        top: 0;
        right: 30px;
        height: 78px;
        line-height: 78px;
        .nav_shop{
          font-size: 18px;
          color: #333333;
          padding-right: 20px;
          text-decoration: none;
        }
        .nav_shop::before{
          display: inline-block;
          font-family: 'icomoon';
          content: '\e950';
          color: #333333;
          font-size: 18px;
          margin-right: 3px;
        }
        .nav_shop::after{
          display: inline-block;
          font-family: 'icomoon';
          content: '\e995';
          color: #333333;
          font-size: 18px;
          margin-left: 3px;          
        }
        .nav_search::after{
          display: inline-block;
          font-family: 'icomoon';
          content: '\e986';
          color: #333333;
          font-size: 18px;
          margin: 0 15px;
        }
      }
    }
    .nav_under{
      .family{
        display: none;
        height: 600px;
        .family_top{
          position: relative;
          height: 500px;
          .family_top_left{
            position: absolute;
            top: 0;
            left: 0;
            width: 1200px;
            height: 500px;
            .family_top_left_nav{
              width: 900px;
              height: 500px;
              margin: 80px auto;
              li{
                float: left;
                width: 178px;
                height: 213px;
                margin: 0 auto;
                list-style: none;
                span{
                  display: block;
                  width: 113px;
                  height: 112px;
                }
                a{
                  display: block;
                  font-size: 18px;
                  color: #7d7d7d;
                  padding-top: 10px;
                  margin-left: 23px;
                  text-decoration: none;
                }
                a:hover{
                  color: #000;
                  text-decoration: underline;
                }
               
              }
              .shouji{
                span{
                  background: url(jingling.png) no-repeat -20px -57px;
                }
              }
              .diannao{
                span{
                  background: url(jingling.png) no-repeat -159px -65px;
                }
              }
              .pingban{
                span{
                  background: url(jingling.png) no-repeat -306px -64px;
                }
              }
              .zhihui{
                span{
                  background: url(jingling.png) no-repeat -452px -68px;
                }
              }
              .yanjing{
                span{
                  background: url(jingling.png) no-repeat -602px -67px;
                }
              }
              .chuandai{
                span{
                  background: url(jingling.png) no-repeat -20px -275px;
                }
              }
              .erji{
                span{
                  background: url(jingling.png) no-repeat -160px -283px;
                }
              }
              .luyou{
                span{
                  background: url(jingling.png) no-repeat -310px -282px;
                }
              }
              .OS{
                span{
                  background: url(jingling.png) no-repeat -447px -276px;
                }
              }
              .quanbu{
                span{
                  background: url(jingling.png) no-repeat -601px -264px;
                }
              }
            }
          }
          .family_top_right{
            float: right;
            width: 600px;
            height: 500px;
            a{
              display: block;
              width: 400px;
              height: 400px;
              margin: 40px 0 0 30px;
              img{
                width: 100%;
              }
            }
          }
        }
        .family_under{
          position: relative;
          height: 100px;
          background-color: #f7f7f7;
          .family_under_left{
            position: absolute;
            top: 0;
            left: 50px;
            line-height: 100px;
            .shoper{
              display:inline-block;
              margin-right: 70px;
              color: #7d7d7d;
              font-size: 18px;
              text-decoration: none;
            }
            .shoper:hover::after{
              display: inline-block;
              font-family: 'icomoon';
              content: '\ea13';
              font-size: 20px;
              color: #000;
              vertical-align: middle;
              margin-left: 10px;
            }
            .shoper::before{
              display: inline-block;
              font-family: 'icomoon';
              content: '\e992';
              color: red;
              font-size: 25px;
              margin-right: 7px;
              vertical-align: middle;
            }
            .shopping{
              display: inline-block;
              font-size: 18px;
              color: #7d7d7d;
              text-decoration: none;
            }
            .shopping:hover::after{
             display: inline-block;
              font-family: 'icomoon';
              content: '\ea13';
              font-size: 20px;
              color: #000;
              vertical-align: middle;
              margin-left: 10px;  
            }
            .shopping::before{
              display: inline-block;
              font-family: 'icomoon';
              content: '\e93d';
              color: red;
              font-size: 25px;
              margin-right: 7px;
              vertical-align: middle;
            }
          }
          .family_under_right{
            position: absolute;
            top: 0;
            right: 50px;
            line-height: 100px;
            a{
              font-size: 18px;
              color: #000;
              text-decoration: none;
            }
          }
        }
      }
      .company{
        display: none;
        display: 600px;
        .company_top{
          position: relative;
          height: 480px;
          a{
            font-size: 18px;
            font-weight: 700;
            color: #4d4d4d;
            text-decoration: none;
          }
          a:hover{
            text-decoration: underline;
          }
          .company_top_1{
            position: absolute;
            top: -26.5px;
            left: 130px;
            width: 500px;
            height: 400px;
            h3{
              height: 74px;
              color: #333333;
              line-height: 90px;
              font-size: 35px;
              text-align: left;
              font-weight: normal;
              border-bottom: 1px solid #cccccc;
            }
            .product{
              height: 320px;
              text-align: left;
              dl{
                float: left;
                padding-right: 120px;
                margin-top: 30px;
                dt{
                  font-size: 20px;
                  font-weight: 700;
                  color: #4d4d4d;
                }
                dd{
                  padding: 5px 0;
                  a{
                    font-size: 18px;
                    font-weight: 400;
                    color: #4d4d4d;
                    text-decoration: none;
                  }
                }
              }
            }
          }
          .company_top_box{
            position: absolute;
            top: 0;
            left: 648px;
            .company_top_2{
           float: left;
            width: 310px;
            height: 313px;
            margin: 0 10px;
            h3{
              font-size: 35px;
              text-align: left;
              border-bottom: 1px solid #ccc;
              font-weight: normal;
              color: #333333;
            }
            .serve{
              margin-top: 30px;
              li{
                list-style: none;
                padding: 5px 0;
                a{
                  font-size: 18px;
                  font-weight: normal;
                  color: #4d4d4d;
                  text-decoration: none;
                }
              }
            }
             }
          }
        }
        .company_under{
          position: relative;
          height: 100px;
          line-height: 100px;
          background-color: #f7f7f7;
          .company_under_left{
            position: absolute;
            top: 0;
            left: 50px;
            a{
              color: #4d4d4d;
              text-decoration: none;
              font-size: 20px;
            }
            a:hover::after{
              display: inline-block;
              font-family: 'icomoon';
              content: '\ea13';
              color: #333333;
              font-size: 25px;
              margin-right: 7px;
              vertical-align: middle;
            }
            .company_under_left1{
              display: inline-block;
              margin-left: 50px;
              font-size: 20px;
              }
            .company_under_left1::before{
                display: inline-block;
                font-family: 'icomoon';
                content: '\e900';
                color: red;
                font-size: 25px;
                margin-right: 7px;
                vertical-align: middle;
            }
            .company_under_left2{
              display: inline-block;
              margin-left: 50px;
            }
            .company_under_left2::before{
              display: inline-block;
                font-family: 'icomoon';
                content: '\e93d';
                color: red;
                font-size: 25px;
                margin-right: 7px;
                vertical-align: middle; 
            }
            .company_under_left3{
              display: inline-block;
              margin-left: 50px;
            }
            .company_under_left3::before{
               display: inline-block;
                font-family: 'icomoon';
                content: '\e935';
                color: red;
                font-size: 25px;
                margin-right: 7px;
                vertical-align: middle;
            }
          }
          .company_under_right{
            position: absolute;
            top: 0;
            right: 80px;
            a{
              font-size: 20px;
              color: #000;
              text-decoration: none;
            }
          }
        }
      }
      .support{
        display: none;
        height: 400px;
        .support_top{
          display: flex;
          height: 340px;
          justify-content: space-around;
          align-items: flex-start;
          div{
            width: 260px;
          }
          h3{
            height: 60px;
            line-height: 60px;
            text-align: left;
            color: #333333;
            font-weight: normal;
            border-bottom: 1px solid #ccc;
          }
          ul{
            li{
              padding: 10px 0;
              color: #7d7d7d;
              font-size: 18px;
              list-style: none;
              a{
                color: #7d7d7d;
                text-decoration: none;
              }
              a:hover{
                text-decoration: underline;
              }
            }
            .many::after{
              display: inline-block;
              font-family: 'icomoon';
              content: '\e930';
              color: red;
              font-size: 18px;
              margin-left: 5px;
              vertical-align: middle;
            }
          }
        }
        .support_under{
          position: relative;
          height: 60px;
          .support_under_right{
            position: absolute;
            top: 0;
            right: 80px;
            line-height: 60px;
            a{
              color: #000;
              font-size: 25px;
              text-decoration: none;
            }
          }
        }
      }
      .develop{
        height: 400px;
        display: none;
        .develop_top{
          display: flex;
          height: 340px;
          justify-content: space-around;
          align-items: flex-start;
          div{
            width: 260px;
          }
          h3{
            height: 60px;
            font-size: 25px;
            line-height: 60px;
            text-align: left;
            color: #333333;
            font-weight: 400px;
            border-bottom: 1px solid #ccc;
          }
          ul{
            li{
              padding: 10px 0;
              color: #7d7d7d;
              font-size: 18px;
              list-style: none;
              a{
                color: #7d7d7d;
                text-decoration: none;
              }
              a:hover{
                text-decoration: underline;
              }
            }
            .lot::after{
              display: inline-block;
              font-family: 'icomoon';
              content: '\e930';
              color: red;
              font-size: 18px;
              margin-left: 5px;
              vertical-align: middle;
            }
          }
        }
        .develop_under{
          position: relative;
          height: 60px;
          .develop_under_right{
            position: absolute;
            top: 0;
            right: 70px;
            line-height: 60px;
            a{
              color: #000;
              font-size: 25px;
              text-decoration: none;
            }
          }
        }
      }
      .about{
        height: 400px;
        display: none;
        .about_top{
          height: 370px;
          display: flex;
          justify-content: space-around;
          align-items: flex-start;
          .about_top1{
            width: 300px;
            height: 370px;
            ul{
              display: flex;
              flex-wrap: wrap;
              justify-content: flex-start;
              align-items: flex-start;
              margin-left: -60px;
              }
            }
          h3{
            height: 60px;
            line-height: 60px;
            font-size: 25px;
            text-align: left;
            color: #333333;
            font-weight: normal;
            border-bottom: 1px solid #ccc;
          }
          li{
                list-style: none;
                padding: 10px 0 0 60px;
                color: #7d7d7d;
                font-size: 18px;
                text-align: left;
                a{
                  color: #7d7d7d;
                  text-decoration: none;
                }
                a:hover{
                  text-decoration: underline;
                }
          }
          .about_top4{
            width: 400px;
            margin-top: 20px;
          }
        }
        .about_under{
          position: relative;
          height: 70px;
          .about_under_right{
            position: absolute;
            top: 0;
            right: 80px;
            a{
              color: #000;
              font-size: 25px;
              text-decoration: none;
            }
          }
        }
      }
    }
  } 
</style>