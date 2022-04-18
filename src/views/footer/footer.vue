<template>
    <div class="footer">
        <div class="footer_top">
            <a href="index.html" class="footer_top_l">首页</a>
            <a href="#" class="footer_top_r"></a>
        </div>
        <div class="footer_center">
            <dl>
                <dt>关于华为</dt>
                <dd><a href="#">公司简介</a></dd>
                <dd><a href="#">可持续发展</a></dd>
                <dd><a href="#">信任中心</a></dd>
                <dd><a href="#">管理层信息</a></dd>
                <dd><a href="#">招贤纳士</a></dd>
                <dd><a href="#">供应商</a></dd>
                <dd><a href="#" class="look">查看更多</a></dd>
            </dl>
            <dl>
                <dt>新闻与活动</dt>
                <dd><a href="#">新闻</a></dd>
                <dd><a href="#">展会活动</a></dd>
                <dd><a href="#">媒体图库</a></dd>
            </dl>
            <dl>
                <dt>发现华为</dt>
                <dd><a href="#">HuaweiTech</a></dd>
                <dd><a href="#">出版物</a></dd>
            </dl>
            <dl>
                <dt>我们的产品</dt>
                <dd><a href="#">个人及家庭产品</a></dd>
                <dd><a href="#">企业业务产品</a></dd>
                <dd><a href="#">运营商网络产品</a></dd>
                <dd><a href="#">华为云服务</a></dd>
            </dl>
            <dl>
                <dt>技术支持</dt>
                <dd><a href="#">消费者技术支持</a></dd>
                <dd><a href="#">华为技术支持</a></dd>
                <dd><a href="#">企业技术支持</a></dd>
                <dd><a href="#">运营商技术支持</a></dd>
                <dd><a href="#">产品安全通告</a></dd>
            </dl>
        </div>
        <div class="footer_under">
            <ul class="footer_under_l">
                <li><a href="#">华为商城</a></li>
                <li><a href="#">华为云</a></li>
                <li><a href="#">华为智能光伏</a></li>
                <li><a href="#">产品定义社区</a></li>
                <li><a href="#">华为心声社会</a></li>
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
export default {

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
          .look::after{
            display: inline-block;
            font-family: 'icomoon';
            content: '\e997';
            color: #595757;
            font-size: 17px;
            vertical-align: middle;
            margin-right: 6px;
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