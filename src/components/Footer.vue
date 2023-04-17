<template>
  <footer>
  	<div class="pc">
	  	<div class="cont">
	  		<div class="cont_">
	  			<h2>创物云（厦门）网络科技有限公司</h2>	
	  			<h3><p class="add">TEL：400-861-8089 / 0592-5917068</p><br/><p class="add">ADD：厦门市思明区观音山商务营运中心18号4层&nbsp;&nbsp;|&nbsp;&nbsp;E-mail：smartmap@smartmapdt.com</p></h3>
			 </div>
		  	<div class="code">
		  		<img src="../assets/pcerweima@2x-min.jpg" alt="">
		  	</div>
	  	</div>
  	</div>
  	<div class="mob">
  		<div class="cont">
	  		<div class="cont_">
				<h2>创物云（厦门）网络科技有限公司</h2>	
	  			<h3><p class="add">TEL：400-861-8089</p><br/><p class="add">ADD：厦门市思明区观音山商务营运中心18号4层<br/> E-mail：smartmap@smartmapdt.com</p></h3>
	  		</div>
	  	</div>
  	</div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	footer {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 27.96vh;
		text-align: center;
		background: #323232;
	}
	.cont {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 80%;
		height: 100%;
		margin: 0 auto;
	}
	.cont_ {
		flex: 1;
	}
	.cont h2 {
		margin-bottom: 1.94vh;
		color: #FFFFFF;
		text-align: left;
		font-family: 'PingFangSC-Light';
		font-size: 1.56vw;
	}
	.cont h3 {
		margin-bottom: 2.04vh;
		text-align: left;
		color: #A7A7A7;
		line-height: 2.14vw;
		font-family: 'PingFangSC-Regular';
		font-size: 1.04vw;
	}
	.cont p, .cont span {
		display: inline-block;
		margin-right: 1.04vw;
	}
	.cont .hot, .cont .icp {
		margin-right: 0;
	}
	.cont h4 {
		color: #616161;
		font-size: 0.83vw;
	}
	.code {
		width: 9.11vw;
	}
	.code img {
		display: block;
		width: 100%;
	}

	@media screen and (max-width: 750px) {
	    .mob {
	      	display: block;
	      	width: 100%;
	    }

	    footer {
			height: 22.49vh;
		}
		.cont {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100%;
		}
		.cont h2 {
			margin-bottom: 1.95vh;
			color: #999999;
			text-align: center;
			font-family: 'PingFangSC-Regular';
			font-size: 4.27vw;
		}
		.cont h3 {
			color: #999999;
			text-align: center;
			line-height: 5.14vw;
			font-family: 'PingFangSC-Regular';
			font-size: 3.2vw;
		}
		.cont .hot, .cont .icp {
			margin-right: 0;
		}
		.cont h4 {
			color: #616161;
			text-align: center;
			font-size: 3.2vw;
			font-family: 'PingFangSC-Light';
		}
	}
</style>
