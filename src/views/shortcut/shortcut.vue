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
        <dl v-for="item in shortcut1" :key="item.id"> 
          <dt class="before">{{item.text}}</dt>
          <dd>{{item.text1}}</dd>
        </dl>
      </div>
      <div class="language">
         <h1>选择区域/语言</h1>
                <div class="language_place">
                    <table class="language_td">
                        <tr v-for="item in shortcut2" :key="item.id">
                          <td>{{item.country1}}<a>{{item.language1}}</a></td>
                          <td>{{item.country2}}<a>{{item.language2}}</a></td>
                          <td>{{item.country3}}<a>{{item.language3}}</a></td>
                          <td>{{item.country4}}<a>{{item.language4}}</a></td>
                          <td>{{item.country5}}<a>{{item.language5}}</a></td>
                        </tr>
                    </table>
                </div>
      </div>
    </div>
  </div>
</template>

<script>
import shortcutData from "../../../data"
export default {
  data() {
    return {
      shortcut1: [],
      shortcut2:[],

    }
  },
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
  },
  mounted(){
    console.log(shortcutData);
    this.shortcut1 = shortcutData.shortcut1
    this.shortcut2 = shortcutData.shortcut2
    this.country = shortcutData.shortcut2.country
    console.log(222,this.shortcut1);
    console.log(224,this.shortcut2);
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
          margin: 40px 60px;
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
              }
              ::before{
                display: inline-block;
                font-family: 'icomoon';
                content: '\e930';
                color: red;
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