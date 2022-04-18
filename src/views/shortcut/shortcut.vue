<template>
  <div class="shortcut">
    <div class="shortcut_top">
      <ul>
        <li class="fr_1"><a href="#">登录</a></li>
        <li class="fr_2" id="li01"><a href="#" @click="language_click">选择区域/语言</a></li>
        <li class="fr_3" id="li02"><a href="javascript:;" @click="item_click">集团网站</a></li>
      </ul>
    </div>
    <div class="shortcut_under">
      <div class="item">
        <dl>
          <dt class="before">集团网站</dt>
          <dd>公司介绍，新闻动态，展会活动<br>等信息</dd>
        </dl>
        <dl>
          <dt class="after"><a>消费业务网站</a></dt>
          <dd>手机，PC和平板等智慧生活产<br>品</dd>
        </dl>
        <dl>
          <dt class="after"><a>企业业务网站</a></dt>
          <dd>企业商用产品、解决方案和云服<br>务</dd>
        </dl>
        <dl>
          <dt class="after"><a>运营商业务网络网站</a></dt>
          <dd>运营商网络解决方案、产品及服<br>务</dd>
        </dl>
        <dl>
          <dt class="after"><a>华为云网站</a></dt>
          <dd>华为云服务及解决方<br>案</dd>
        </dl>
      </div>
      <div class="language">
         <h1>选择区域/语言</h1>
                <div class="language_place">
                    <table class="language_td">
                        <tr>
                            <td>Australia - <a>English</a></td>
                            <td>Belarus - <a>Pусский</a></td>
                            <td>Brazil - <a>Portuguese</a></td>
                            <td>Canada - <a>English</a></td>
                            <td class="china">China - <a>简体中文</a></td>
                        </tr>
                        <tr>
                            <td>France - <a>Français</a></td>
                            <td>Germany - <a>Deutsch</a></td>
                            <td>Ireland - <a>English</a></td>
                            <td>Italy - <a>Italiano</a></td>
                            <td>Japan - <a>日本語</a></td>
                        </tr>
                        <tr>
                            <td>Kazakstan - <a>Pусский</a></td>
                            <td>Kenya - <a>English</a></td>
                            <td>Korea - <a>한국어</a></td>
                            <td>Malaysia - <a>English</a></td>
                            <td>Mexico - <a>Español</a></td>
                        </tr>
                        <tr>
                            <td>New Zealand - <a>English</a></td>
                            <td>Netherlands - <a>Dutch</a></td>
                            <td>Romania - <a>Română</a></td>
                            <td>Russia - <a>Pусский</a></td>
                            <td>South Africa - <a>English</a></td>
                        </tr>
                        <tr>
                            <td>Spain - <a>Español</a></td>
                            <td>Switzerland - <a>English</a></td>
                            <td>Thailand - <a>ภาษาไทย</a></td>
                            <td>Turkey - <a>Türkiye</a></td>
                            <td>kraine - <a>Українська</a></td>
                        </tr>
                        <tr>
                            <td>United Kingdom - <a>English</a></td>
                            <td>United States - <a>English</a></td>
                            <td>Uzbekistan - <a>Pусский</a></td>
                            <td>Uzbekistan - <a>O'zbek</a></td>
                            <td>Vietnam - <a>Tiếng Việt</a></td>
                        </tr>
                        <tr>
                            <td>Global- <a>English</a></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </table>
                </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    language_click(){
      var language = document.querySelector('.language')
      if(language.style.display != 'block'){
        language.style.display = 'block'
      }else{
        language.style.display = 'none'
      }
    },
    item_click(){
      var item = document.querySelector('.item')
      if(item.style.display != 'block'){
        item.style.display = 'block'
      }else{
        item.style.display = 'none'
      }
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
  .shortcut{
    background-color: #333333;
    .shortcut_top{
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      height: 25px;
      padding: 0 5px;
      margin-right: 40px;
      line-height: 25px;
      color: #cccccc;
      font-size: 12px;
      li{
        float: right;
        font-size: 12px;
        color: #cccccc;
        margin: 0 20px;
        list-style: none;
        a{
          font-size: 12px;
          color: #cccccc;
          text-decoration: none;
        }
      }
      .fr_1::before{
        display: inline-block;
        font-family: 'icomoon';
        content: '\e98f';
        margin-right: 5px;
      }
      .fr_2{
        ::before{
          display: inline-block;
          font-family: 'icomoon';
          content: '\e956';
          margin-right: 5px;
        }
        ::after{
          display: inline-block;
          font-family: 'icomoon';
          content: '\e92e';
          margin-left: 5px;
        }
      }
      .fr_3{
        ::before{
          display: inline-block;
          font-family: 'icomoon';
          content: '\e973';
          margin-right: 5px;
        }
        ::after{
          display: inline-block;
          font-family: 'icomoon';
          content: '\e92e';
          margin-left: 5px;
        }
      }
    }
    .shortcut_under{
      .item{
        display: none;
        height: 180px;
        background-color: #f7f7f7;
        dl{
          float: left;
          margin: 40px 70px;
          dt{
            font-size: 17px;
            color: #4d4d4d;
          }
          dd{
            display: inline-block;
            font-size: 15px;
            color: #808080;
            padding: 20px 0;
            margin: 0;
          }
          .after{
            a{
              font-size: 17px;
              color: #4d4d4d;
              cursor: pointer;
              text-decoration: none;
            }
            a:hover{
              display: inline-block;
              border-bottom: 1px solid #7d7d7d;
              margin-right: 10px;
            }
            ::after{
              font-family: 'icomoon';
              content: '\e930';
              color: #4d4d4d;
              font-size: 17px;
              margin-right: 10px;
            }
          }
          .before::before{
              font-family: 'icomoon';
              content: '\e930';
              color: red;
              font-size: 17px;
              margin-left: 10px;
          }
          
        }
      }
      .language{
        display: none;
        height: 509px;
        background-color: #f7f7f7;
        padding: 40px 60px;
        h1{
          font-size: 27px;
          color: #333333;
          margin: 20px 0 10px;
        }
        .language_place{
          margin: 40px auto;
          .language_td{
            width: 1600px;
            height: 340px;
            color: #808080;
            font-size: 17px;
            a{
              font-size: 17px;
              color: #808080;
              cursor: pointer;
              text-decoration: none;
            }
            a:hover{
              border-bottom: 1px solid #808080;
            }
            .china{
              color: #000;
              a{
                font-weight: 700;
                color: #000;
              }
              ::before{
                display: inline-block;
                font-family: 'icomoon';
                content: '\e930';
                color: red;
                font-size: 17px;
                margin-right: 5px;
              }
              a:hover{
                border-bottom: 1px solid #000;
              }
            }
          }
        }
      }
    }
  }
</style>