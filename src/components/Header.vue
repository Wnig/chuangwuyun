<template>
  <header>
  <div class="pc">
	  <div class="cont">
		<a class="logo" @click="jump" ><img src="../assets/C-LOGO-09-min.png" alt=""></a>
	  	<nav>
	  		<ul>
				<li v-for="(navs, index) in navData">
	              <a :href="navs.links">{{navs.tit}}</a>
	            </li>
	            <li class="backstage">
	              <a href="http://web.chuangwuyun.com/ucmweb/login.action" target="_blank">后台登入</a>
	            </li>
	  		</ul>
	  	</nav>
	  </div>
  </div>
  <div class="mob">
  	<div class="cont">
		<div class="con">
  			<div class="logo">
  				<img src="../assets/C-LOGO-09-min.png" alt="">
          	</div>
        	<img @click="isShow" class="menu" src="../assets/fenlei.svg" alt="">
        	<transition name='fade'>
				<div class="nav" v-show="selShow" @click="isShow">
					<transition name='slide'>
					  	<nav v-if="selShow">
					  		<ul>
								<li v-for="(navs, index) in nav">
					              <a :href="navs.links">{{navs.tit}}</a>
					            </li>
					            <li>
					              <a href="http://web.chuangwuyun.com/ucmweb/login.action" target="_blank">后台登入</a>
					            </li>
					  		</ul>
					  		<div class="code">
								<img src="../assets/pcerweima@2x-min.jpg" alt="">
								<p>长按识别公众号</p>
							</div>
					  	</nav>
					</transition>
				</div>
			</transition>
  		</div>
  	</div>
  </div>
  </header>
</template>

<script>
let storage = window.sessionStorage;
export default {
  name: 'Header',
  data () {
    return {
    	navData: [
	        {tit: '首页', links:'/'},
	        {tit: '产品', links:'#7'},
	        {tit: '招商加盟', links:'#11'},
	        {tit: '关于我们', links:'#13'},
        ],
        nav: [
	        {tit: '首页', links:'/'},
	        {tit: '产品', links:'#07'},
	        {tit: '招商加盟', links:'#011'},
	        {tit: '关于我们', links:'#013'},
        ],
      	num: '',
      	selShow: false
    }
  },
  created: function() {
    if(storage['selNumcwy']) {
      this.num= storage['selNumcwy'];
    } else {
      this.num = 0;
    };
  },
  methods: {
    selMenus(index) {
      storage['selNumcwy'] = index;
      this.selShow = false;
    },
    isShow() {
      //点击：左侧菜单栏 收起-展开
      this.selShow = ! this.selShow;
    },
    jump() {
      storage['selNumcwy'] = 0;
      this.selShow = false;
      this.$router.push({path: '/'});
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	header {
		display: flex;
		justify-content: center;
	}
	.cont {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 90%;
		height: 10vw;
		margin: 0 auto;
	}
	.logo {
		display: flex;
		width: 15.44vw;
		height: 7.19vw;
		margin-right: 5vw;
		cursor: pointer;
	}
	.logo img {
		display: block;
		width: 100%;
	}
	nav {
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
	}
	nav ul {
		display: flex;
		justify-content: center;
	}
	nav li a {
		color: #fff;
		font-size: 1.3vw;
	}
	nav a {
		display: block;
		width: 11.41vw;
		height: 2.76vw;
		line-height: 2.76vw;
		cursor: pointer;
	}
	.backstage a {
		color: #222;
		font-family: 'PingFangSC-Regular';
	}
	.backstage {
		margin-left: 7vw;
		margin-right: 1vw;
		background: #FFFFFF;
		border-radius: 8px;
	}

	@media screen and (max-width: 750px) {
		.mob {
			width: 100%;
		}
		.cont {
			height: 22vw;
		}
    	.con {
    		display: flex;
    		justify-content: center;
    		align-items: center;
    		width: 90%;
    		height: 20vh;
    		margin: 0 auto;
    	}
    	.logo {
    		flex: 1;
  			height: 17.87vw;
    	}
    	.logo img {
    		width: 40.2vw;
    		height: 17.87vw;
    	}
    	.menu {
    		width: 9.6vw;
    	}
    	.nav {
			position: fixed;
			left: 0;
			top: 0;
			width: 100%;
			height: 100vh;
			background: rgba(0, 0, 0, 0.65);
			z-index: 9999;
			opacity: 1;
		}
		.nav-btn-con {
			display: flex;
			justify-content: flex-end;
		}

		.fade-enter-active, .fade-leave-active {
		    transition: all .3s
		}

		.fade-enter, .fade-leave-to {
		    opacity: 0;
		}

		nav {
			display: block;
			width: 62.93vw;
			height: 100vh;
			background: #fff;
			transform: translate3d(0, 0, 0);
		}
		.slide-enter-active, .slide-leave-active {
		    transition: all .3s
		}

		.slide-enter, .slide-leave-to {
		    transform: translate3d(-100%, 0, 0);
		}

		nav ul {
			display: block;
			padding-top: 14.33vh;
		}
		nav li {
			display: block;
			margin-bottom: 6.3vh;
		}
		nav p {
	      margin-bottom: 1.05vh;
	      color: #797979;
	      font-size: 3.2vw;
	    }
	    nav h2 {
	      color: #000000;
	      line-height: 6.67vw;
	      font-size: 6.67vw;
	      font-family: 'PingFangSC-Semibold';
	    }
	    nav .hot {
	      position: absolute;
	      left: 9.2vw;
	      bottom: 7.95vh;
	    }
	    nav li a {
	    	display: block;
	    	width: 100%;
	    	height: 7.33vw;
	    	color: #000;
	    	text-align: center;
	    	line-height: 7.33vw;
			font-size: 5.33vw;
		}
		nav .btn_sel a {
			color: #71B9F4;
			font-size: 5.33vw;
			font-family: 'PingFangSC-Medium';
		}

		.code img {
			display: block;
			width: 22.93vw;
			margin: 16.79vh auto 2.85vh;
		}
		.code p {
			color: #989A9C;
			text-align: center;
			font-size: 2.93vw;
			font-family: 'PingFangSC-Light';
		}

    }
</style>
