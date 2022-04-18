<template>
  <div class="nav">
    <div class="nav_top">
 <div class="logo">
  <img src="../../assets/huawei_logo.png" alt="">
            </div>
            <div class="nav_c">
                <ul class="nav_main">
                    <li v-for="(item, index) in nav" :key="index"><a :href="item.link" class="navmain1" @mouseenter="aa(item)">{{item.text}}</a></li>
                </ul>
            </div>
            <div class="nav_r">
                <a href="#" class="nav_shop">在线购买</a>
                <a href="#" class="nav_search"></a>
            </div>                    
   </div>
    <div class="nav_under">
            <div class="family" @mouseleave="bb">
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
            <div class="company" @mouseleave="dd">
                <div class="company_top">
                    <div class="company_top_1">
                        <h3>产品</h3>
                        <div class="product">
                            <dl>
                                <dt>联接</dt>
                                <dd><a href="#">运营商网络</a></dd>
                                <dd><a>企业无线</a></dd>
                                <dd><a>企业网络</a></dd>
                                <dd><a>企业光网络</a></dd>
                                <dd><a>数字能源</a></dd>
                            </dl>
                            <dl>
                                <dt>云与计算</dt>
                                <dd><a>华为云</a></dd>
                                <dd><a>计算</a></dd>
                                <dd><a>数据存储</a></dd>
                                <dd><a>机器视觉</a></dd>
                                <dd><a>智能协作</a></dd>
                                <dd><a>鲲鹏计算机平台</a></dd>
                                <dd><a>昇腾AI计算机</a></dd>
                            </dl>
                        </div>
                    </div>
                    <div class="company_top_2">
                        <h3>服务</h3>
                        <div class="serve">
                            <ul>
                                <li><a>运营商网络服务</a></li>
                                <li><a>企业网络服务</a></li>
                                <li><a>华为云服务</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="company_top_3">
                        <h3>行业解决方案</h3>
                        <div class="solution">
                            <ul>
                                <li><a href="#">华为云行业解决方案</a></li>
                                <li><a href="#">电信行业</a></li>
                                <li><a href="#">数字政府</a></li>
                                <li><a href="#">智慧园区</a></li>
                                <li><a href="#">交通行业</a></li>
                                <li><a href="#">电力行业</a></li>
                                <li><a href="#">金融行业</a></li>
                                <li><a href="#" class="more">查看更多</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="company_top_4">
                        <h3>热门话题</h3>
                        <div class="hot">
                            <ul>
                                <li><a href="#">智能体</a></li>
                                <li><a href="#">5G,点亮未来</a></li>
                                <li><a href="#">FG5,光联万物</a></li>
                                <li><a href="#">自动驾驶网络</a></li>
                                <li><a href="#">IPv6+,智联无限</a></li>
                                <li><a href="#">先进工业网络</a></li>
                            </ul>
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
            <div class="support" @mouseleave="ff">
                <div class="support_top">
                    <div>
                        <h3>个人及家庭产品支持</h3>
                        <ul>
                            <li><a href="#">在线客服</a></li>
                            <li><a href="#">华为服务日</a></li>
                            <li><a href="#">服务点查询</a></li>
                            <li><a href="#">寄修服务</a></li>
                            <li><a href="#">保修期及权益查询</a></li>
                            <li><a href="#">备件价格查询</a></li>
                            <li class="many"><a href="#">查看更多</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3>华为云服务支持</h3>
                        <ul>
                            <li><a href="#">智能客服</a></li>
                            <li><a href="#">新手入门</a></li>
                            <li><a href="#">支持计划</a></li>
                            <li><a href="#">自助服务</a></li>
                            <li><a href="#">云社区</a></li>
                            <li class="many"><a href="#">查看更多</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3>企业业务支持</h3>
                        <ul>
                            <li><a href="#">智能客服</a></li>
                            <li><a href="#">支持产品</a></li>
                            <li><a href="#">软件下载</a></li>
                            <li><a href="#">互动社区</a></li>
                            <li><a href="#">工具</a></li>
                            <li class="many"><a href="#">查看更多</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3>运营商网络支持</h3>
                        <ul>
                            <li><a href="#">智能客服</a></li>
                            <li><a href="#">产品支持</a></li>
                            <li><a href="#">Group Space</a></li>
                            <li><a href="#">公告</a></li>
                            <li><a href="#">华为资料直通库</a></li>
                            <li class="many"><a href="#">查看更多</a></li>
                        </ul>
                    </div>
                </div>
                <div class="support_under">
                    <div class="support_under_right">
                        <a href="#">x</a>
                    </div>
                </div>
            </div>
            <div class="develop" @mouseleave="hh">
                <div class="develop_top">
                    <div>
                        <h3>合作伙伴</h3>
                        <ul>
                            <li><a href="#">成为合作伙伴</a></li>
                            <li><a href="#">查找合作伙伴</a></li>
                            <li><a href="#">云市场</a></li>
                            <li class="lot"><a href="#">查看更多</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3>培训与认证</h3>
                        <ul>
                            <li><a href="#">学习</a></li>
                            <li><a href="#">华为认证</a></li>
                            <li><a href="#">企业客户培训</a></li>
                            <li><a href="#">华为ICT学院</a></li>
                            <li><a href="#">华为云开发者课堂</a></li>
                            <li class="lot"><a href="#">查看更多</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3>云与计算开发者</h3>
                        <ul>
                            <li><a href="#">华为云</a></li>
                            <li><a href="#">鲲鹏</a></li>
                            <li><a href="#">昇腾</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3>终端开发者</h3>
                        <ul>
                            <li><a href="#">开发</a></li>
                            <li><a href="#">分发</a></li>
                            <li><a href="#">变现</a></li>
                            <li><a href="#">活动</a></li>
                            <li><a href="#">开发者学堂</a></li>
                            <li><a href="#">社区</a></li>
                            <li class="lot"><a href="#">查看更多</a></li>
                        </ul>
                    </div>
                </div>
                <div class="develop_under">
                    <div class="develop_under_right">
                        <a href="#">x</a>
                    </div>
                </div>
            </div>
            <div class="about" @mouseleave="jj">
                <div class="about_top">
                    <div class="about_top1">
                        <h3>关于华为</h3>
                        <ul>
                            <li><a href="#">公司介绍&nbsp;&nbsp;</a></li>
                            <li><a href="#">公司年报</a></li>
                            <li><a href="#">公司治理&nbsp;&nbsp;</a></li>
                            <li><a href="#">管理层信息</a></li>
                            <li><a href="#">招贤纳士&nbsp;&nbsp;</a></li>
                            <li><a href="#">联系我们</a></li>
                            <li><a href="#">可持续发展</a></li>
                            <li><a href="#">信任中心</a></li>
                            <li><a href="#">合规与诚信</a></li>
                            <li><a href="#">公共政策</a></li>
                            <li><a href="#">债券投资者</a></li>
                            <li><a href="#">供应商</a></li>
                        </ul>
                    </div>
                    <div class="about_top2">
                        <h3>新闻与活动</h3>
                        <ul>
                            <li><a href="#">新闻</a></li>
                            <li><a href="#">展会活动</a></li>
                            <li><a href="#">媒体图库</a></li>
                        </ul>
                    </div>
                    <div class="about_top3">
                        <h3>发现华为</h3>
                        <ul>
                            <li><a href="#">HaweiTech</a></li>
                            <li><a href="#">出版物</a></li>
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
import jsonData from '../../../data.json'
export default {
  data() {
    return {
      nav: []
    }
  },
  methods:{
    aa(){
      var family = document.querySelector('.family')
      family.style.display = 'block'
    },
    bb(){
      var family = document.querySelector('.family')
      family.style.display = 'none'
    },
    cc(){
      var company = document.querySelector('.company')
      company.style.display = 'block'
    },
    dd(){
      var company = document.querySelector('.company')
      company.style.display = 'none'
    },
    ee(){
      var support = document.querySelector('.support')
      support.style.display = 'block'
    },
    ff(){
      var support = document.querySelector('.support')
      support.style.display = 'none'
    },
    gg(){
      var develop = document.querySelector('.develop')
      develop.style.display = 'block'
    },
    hh(){
      var develop = document.querySelector('.develop')
      develop.style.display = 'none'
    },
    ii(){
      var about = document.querySelector('.about')
      about.style.display = 'block'
    },
    jj(){
      var about = document.querySelector('.about')
      about.style.display = 'none'
    }
  },
  mounted(){
    console.log(2223, jsonData.nav.length)
    if(jsonData.nav.length) {
      this.nav = jsonData.nav
      console.log(2223, this.nav)
    }
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
          .company_top_2{
            position: absolute;
            top: 0;
            left: 648px;
            width: 310px;
            height: 313px;
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
          .company_top_3{
            position: absolute;
            top: 0;
            right: 398px;
            width: 318px;
            height: 596px;
            h3{
              font-size: 35px;
              text-align: left;
              border-bottom: 1px solid #ccc;
              font-weight: normal;
              color: #333333;
            }
            .solution{
              margin-top: 30px;
              li{
                padding: 5px 0;
                list-style: none;
                a{
                  font-size: 18px;
                  font-weight: normal;
                  color: #4d4d4d;
                  text-decoration: none;
                }
              }
              .more::after{
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
          .company_top_4{
            position: absolute;
            top: 0;
            right: 60px;
            width: 322px;
            height: 474px;
            h3{
              font-size: 35px;
              text-align: left;
              border-bottom: 1px solid #ccc;
              font-weight: normal;
              color: #333333;
            }
            .hot{
              margin-top: 30px;
              li{
                padding: 5px 0;
                list-style: none;
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
          height: 370px;
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
          height: 370px;
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
          .about_top2{
            width: 170px;
          }
          .about_top3{
            width: 170px;
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