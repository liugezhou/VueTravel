<template>
	<div>
		<div class='banner' @click="hanldeBannerClick">
			<img class="banner-img" src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg"  />
			<div class="banner-info">
				<div class="banner-title">这里是标题</div>
				<div class="banner-number"><span class="iconfont banner-icon">&#xe674;;</span>39</div>
			</div>
		</div>
		<common-gallary :imgs="imgs" v-show="showgallary"
			@close="hanldeBannerClick">
		</common-gallary>
	</div>
</template>

<script>
	import CommonGallary from 'common/gallary/Gallary'
	export default{
		name:'DetailBanner',
		components:{
			CommonGallary
		},
		data () {
			return{
			showgallary:false,
			imgs:['http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg',
				'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg']	
			}
		},
		methods:{
			hanldeBannerClick:function(){
				this.showgallary=!this.showgallary
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.banner
		position:relative
		overflow: hidden
		height: 0;
		padding-bottom:55%;
		.banner-img
			width:100%
		.banner-info
			display: flex
			position: absolute
			left:0
			right:0
			bottom:0
			line-height:.6rem
			color:#fff
			background:linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8));
			.banner-title
				font-size:.32rem
				flex:1
				padding:0 .2rem
			.banner-number
				padding:0 .4rem
				line-height:.32rem
				height:.32rem
				margin-top:.14rem
				font-size:.24rem
				border-radius:.2rem
				background:rgba(0,0,0,0.8)
				.banner-icon
					font-size:.24rem
					
</style>