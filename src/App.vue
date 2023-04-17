<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import './font/style.css'
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
  /* CSS reset */
  html{color:#000;background:#fff;-webkit-tap-highlight-color:rgba(0,0,0,0);font-family: 'PingFangSC-Light',"Microsoft YaHei","微软雅黑","sans-serif";font-size: 12px;}
  body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,form,input,button,textarea,p,th,td,strong{padding:0;margin:0;font-family: 'PingFangSC-Light',"Microsoft YaHei","微软雅黑","sans-serif";}
  table{border-collapse:collapse;border-spacing:0;}
  img{border:0;}
  a{text-decoration:none; color:#999; outline:none;}/*此处待添加默认链接颜色*/
  var,em,strong{font-style:normal;}
  em,strong,th,var{font-style:inherit;font-weight:inherit;}
  li{list-style:none;}
  caption,th{text-align:left;}
  h1,h2,h3,h4{font-size:100%;font-weight:normal;}
  input,button,textarea,select,option{font-family:inherit; font-size:inherit;font-style:inherit;font-weight:inherit;}
  input,button,textarea,select{*font-size:100%;}
  .clearfix:after {content:"\200B"; display:block; height:0; clear:both; }
  .clearfix { *zoom:1; }

  html {
    position: relative;
    width: 100%;
    overflow: hidden;
    overflow-y: scroll;
  }
  #app {
  }
  .pc {
    width: 100%;
    overflow: hidden;
  }
  .selection {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }

  .pc {

  }
  .mob {
    display: none;
  }

  /*返回顶部*/
  .top {
    display: none;
    position: fixed;
    right: 2.86vw;
    bottom: 16.63vw;
    width: 4.11vw;
    z-index: 99999;
    cursor: pointer;
  }
  .top img {
    float: left;
    width: 100%;
    margin-bottom: 0.74vh;
  }

  .down-con {
    position: absolute;
    left: 0;
    width: 100%;
    bottom: 5.7vh;
  }
  .down {
    position: relative;
    margin: 0 auto 1.59vh;
    width: 2.29vw;
    height: 3.75vw;
    background: url('../src/assets/4.svg') center center no-repeat;
    background-size: 100% 100%;
  }
  .down:after {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 1.6vh;
    margin: 0 auto;
    content: '';
    width: 0.26vw;
    height: 0.78vw;
    background: url('../src/assets/5.svg') center center no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
    -webkit-animation: fall 1.2s infinite;
    animation: fall 1.2s infinite;
  }

  /*向下效果*/
  @-webkit-keyframes fall {
    0% {
      -webkit-transform: translateY(-10px);
      -moz-transform: translateY(-10px);
      -ms-transform: translateY(-10px);
      -o-transform: translateY(-10px);
    }
    60% {
      -webkit-transform: translateY(15px);
      -moz-transform: translateY(15px);
      -ms-transform: translateY(15px);
      -o-transform: translateY(15px);
    }
    100% {
      -webkit-transform: translateY(-10px);
      -moz-transform: translateY(-10px);
      -ms-transform: translateY(-10px);
      -o-transform: translateY(-10px);
    }
  }
  @keyframes fall {
    0% {
      -webkit-transform: translateY(-10px);
      -moz-transform: translateY(-10px);
      -ms-transform: translateY(-10px);
      -o-transform: translateY(-10px);
    }
    60% {
      -webkit-transform: translateY(15px);
      -moz-transform: translateY(15px);
      -ms-transform: translateY(15px);
      -o-transform: translateY(15px);
    }
    100% {
      -webkit-transform: translateY(-10px);
      -moz-transform: translateY(-10px);
      -ms-transform: translateY(-10px);
      -o-transform: translateY(-10px);
    }
  }

  @media screen and (max-width: 750px) {
    .pc {
      display: none;
    }
    .mob {
      display: block;
    }

    .down-con {
      position: absolute;
      left: 0;
      width: 100%;
      bottom: 5.7vh;
    }
    .down {
      margin: 0 auto 1.59vh;
      width: 6.4vw;
      height: 9.87vw;
    }
    .down:after {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 1.6vh;
      margin: 0 auto;
      content: '';
      width: 1.26vw;
      height: 1.78vw;
    }
    .top {
      right: 2.86vw;
      bottom: 40.63vw;
      width: 10.13vw;
    }

    .swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction {
        bottom: 0;
    }
    .swiper-pagination-bullet {
      background: #575757;
    }
    .swiper-pagination-bullet-active {
      background: #575757;
    }
  }
</style>
