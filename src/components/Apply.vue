<template>
  <div class="apply mob">
  	<div class="header"><a class="back" href="#"><img src="../assets/back.png" alt=""></a>{{title}}</div>
  	<div class="get-info" v-if="!isOpen">
	  	<div class="bg">
	  		<img src="../assets/pcdalogo.svg" alt="">
	  	</div>
	  	<ul class="info">
	  		<li>
	  			<strong>联系人姓名</strong><input type="text" max="10" placeholder="请填写联系人姓名">
	  		</li>
	  		<li>
	  			<strong>联系人手机</strong><input type="text" max="11" placeholder="请填写联系人手机">
	  		</li>
	  		<!-- <li>
	  			<strong>手机验证码</strong><input type="text" max="4" placeholder="验证码"><p class="send">发送验证码</p>
	  		</li> -->
	  		<li>
	  			<strong>联系人邮箱</strong><input type="text" placeholder="请填写联系人邮箱">
	  		</li>
	  		<li>
	  			<strong>企业名称</strong><input type="text" placeholder="请填写企业名称">
	  		</li>
	  		<li>
	  			<strong>所属行业</strong><div class="sel-p"><p id="trigger1">请选择</p><span class="next"></span></div>
	  		</li>
	  	</ul>
	  	<div class="footer">
	  		<div class="kf">
	  			<div class="kf-con">
		  			<img src="../assets/kfrx@3x.svg" alt="">
		  			<span>客服热线</span>
	  			</div>
	  		</div>
	  		<div @click="freeOpen" class="freeopen">免费开通</div>
	  	</div>
  	</div>
  	<div class="result" v-else>
  		<div class="result-con">
	  		<img src="../assets/fkcg@3x.svg" alt="">
	  		<p>恭喜你提交成功！</p>
	  		<p>我们将会在48小时内联系你</p>
  		</div>
  	</div>
  </div>
</template>

<script>
import MobileSelect from 'mobile-select'
import qs from 'qs'

export default {
  name: 'Apply',
  data () {
    return {
    	title: '',
    	isOpen: false
    }
  },
  created() {
  	this.title = '创物云账号申请';
  },
  methods: {
    judgePhone() {
    	// let regPhone = /^[1][3,4,5,7,8,9][0-9]{9}$/;
    	// let regEmail = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
    },
    freeOpen() {
    	this.isOpen = true;
    	this.title = '结果提示';
    }
  },
  mounted() {
  	var mobileSelect4 = new MobileSelect({
        trigger: "#trigger1",
        title: "",
        wheels: [
            {data: ["贷款","保险","房产","信用卡"]}
        ],
        callback:function(indexArr, data){
            console.log(data);
        }
    });

    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@media screen and (min-width: 750px) { 
		#app {
			background: #f5f5f5;
		}
		.header {
			position: fixed;
			left: 0;
			top: 0;
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100vw;
			height: 6.6vh;
			color: #000000;		
			text-align: center;
			line-height: 4.8vw;
			font-family: 'PingFangSC-Regular';
			font-size: 4.8vw;
			background: #fff;
			box-shadow: 0 0 0 0 #D5D5DB;
			z-index: 100000;
		}
		.back {
			position: absolute;
			left: 0;
			top: 0;
			display: flex;
			justify-content: center;
			align-items: center;
			width: 10vw;
			height: 6.6vh;
		}
		
		.back img {
			display: block;
			width: 6.4vw;
		}
		.bg {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100vw;
			height: 40vw;
			margin-bottom: 1.05vh;
			padding-top: 6.6vh;
			background: url('../assets/gg@3x.jpg') center center no-repeat;
			background-size: 100% 100%;
		}
		.bg img {
			width: 40vw;
		}

		.info {
			padding: 0 4vw;
			background: #fff;
		}
		.info li {
			display: flex;
			align-items: center;
			height: 12.8vw;
			border-bottom: 0.27vw solid #ddd;
		}
		.info li strong {
			width: 30%;
			text-align: left;
			color: #000000;
			line-height: 3.73vw;
			font-family: 'PingFangSC-Regular';
			font-size: 3.73vw;
		}
		.info li input {
			border: none;
			outline: none;
			color: #989A9C;
			line-height: 3.73vw;	
			font-family: 'PingFangSC-Regular';
			font-size: 3.73vw;
		}
		.info li .send {
			flex: 1;
			text-align: right;
			color: #000000;
			line-height: 3.73vw;
			font-family: 'PingFangSC-Regular';
			font-size: 3.73vw;
		}
		.info li .sel-p {
			display: flex;
			justify-content: center;
			align-items: center;
			flex: 1;
			text-align: left;
			color: #989A9C;
			line-height: 3.73vw;
			font-family: 'PingFangSC-Regular';
			font-size: 3.73vw;
		}
		.info li .sel-p p {
			flex: 1;
		}
		.next {
			display: inline-block;
			width: 6.4vw;
			height: 6.4vw;
			background: url('../assets/next.png') center center no-repeat;
			background-size: 100% 100%;
		}

		.footer {
			position: fixed;
			left: 0;
			bottom: 0;
			display: flex;
			align-items: center;
			width: 100vw;
			height: 7.5vh;
			border-top: 0.05vw solid #ccc; 
		}
		.footer .kf {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 19.73vw;
			color: #666666;
			text-align: center;
			line-height: 2.67vw;
			font-family: 'PingFangSC-Light';
			font-size: 2.67vw;
		}
		.footer img {
			display: block;
			width: 6.4vw;
			height: 6.4vw;
			margin: 0 auto 0.6vh;
		}
		.footer .freeopen {
			display: flex;
			justify-content: center;
			align-items: center;
			flex: 1;
			height: 100%;
			font-family: 'PingFangSC-Regular';
			font-size: 4vw;
			color: #FFFFFF;
			line-height: 3.73vw;
			background: #1D9EF4;
		}
		.result {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			padding-top: 6.6vh;
			height: 93.4vh;
		}
		.result img {
			display: block;
			width: 13.33vw;
			height: 13.33vw;
			margin: 0 auto 2.85vh;
		}
		.result p {
			margin-bottom: 0.75vh;
			font-family: 'PingFangSC-Regular';
			font-size: 3.73vw;
			color: #000000;
			text-align: center;
			line-height: 4.27vw;	
		}
	}
</style>
