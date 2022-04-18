<template>
 <div class="w active">
        <div class="active_l">
            <div class="active_l_top">
                <a href="#"><img src="../../assets/11.jpg" alt=""></a>
            </div>
            <span class="active_l_center">展会活动</span>
            <div class="active_l_under">
                <a>
                    <h4>2022世界移动大会</h4>
                    <span class="site">西班牙，巴塞罗那</span><span class="date">2022年2月28日 - 3月3日</span>
                    <p>面向未来，华为与全球运营商、合作伙伴一起，打造极简、绿色、智能的ICT基础设施，坚持科技向善，致力于以创新的技术和产品解决方案让生活更美好、商业更智...</p>
                </a>
            </div>
        </div>
        <div class="active_c">
            <div class="active_c_top">
                <a><img src="../../assets/12.jpg" alt=""></a>
            </div>
            <span class="active_c_center">展会活动</span>
            <div class="active_c_under">
                <a href="#">
                    <h4>2022运营转型峰会</h4>
                    <span class="site">西班牙，巴塞罗那</span><span class="date">2022年3月1日 - 2日</span>
                    <p>
                        沿着运营运维数智化转型的旅程，携手将数智技术和创新带入运营运维每一个环节，引领智能新体验、新价值，构建万物互联的智能世界。
                    </p>
                </a>
            </div>
        </div>
        <div class="active_r">
            <div>
                <a href="#" class="red">
                    <h4>
                        华为获新加坡资媒局授予数据保护信任标志
                    </h4>
                    <span>2022年03月16日</span>
                </a>
                <a href="#" class="red">
                    <h4>
                        华为和中国联通携手产业伙伴发布5G专网PLUS系列成果
                    </h4>
                    <span>2022年03月11日</span>
                </a>
                <a href="#" class="red">
                    <h4>
                        华为联合中国移动等产业伙伴发布《5G -Advanced网络技术演进白皮书2.0》
                    </h4>
                    <span>
                        2022年03月10日
                    </span>
                </a>
                <a href="#" class="red">
                    <h4>
                        "打破偏见"，华为庆祝2022国际妇女节
                    </h4>
                    <span>
                        2022年03月09日
                    </span>
                </a>
                <a href="#" class="red">
                    <h4>
                        华为联合中国信通院、中国移动研究院发布《5G ToC音视频体验需求蓝皮书》
                    </h4>
                    <span>2022年03月08日</span>
                </a>
            </div>
            <span class="active_r_top">新闻</span>
        </div>
    </div>  
</template>

<script>
export default {

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