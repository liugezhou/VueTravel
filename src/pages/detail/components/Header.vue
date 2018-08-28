<template>
	<div>
		<router-link 
			tag="div"
			class="header-abs"
			to="/"
			v-show="showAbs"
			ref="top">
			<div class="iconfont header-abs-back">&#xe624;</div>
		</router-link>
		
		<router-link 
		tag="div"
		class="header-fixed"
		to="/"
		v-show="!showAbs"
		:style="opacityStyle">
			<div class="iconfont header-fixed-back">&#xe624;</div>景点详情
		</router-link>

	</div>
</template>

<script>
	export default{
		name:'DetaiHeader',
		data () {
			return {
				showAbs:true,
				opacityStyle:{
					opacity:0
				}
			}
		},
		methods:{
			handleScroll:function(){
				const top =document.documentElement.scrollTop
				if(top>45){
					let opacity =top/140
					opacity =opacity > 1 ?1:opacity
					this.opacityStyle ={
						opacity
					}
					this.showAbs = false
				}else{
					this.showAbs =true
				}
			}
		},
		activated (){
			window.addEventListener('scroll',this.handleScroll)
		},
		deactivated () {
			window.removeEventListener('scroll',this.handleScroll)
		}
	}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
	.header-abs
		position:absolute
		left:.2rem
		top:.2rem
		width:.8rem
		height:.8rem
		border-radius:.4rem
		background:rgba(0,0,0,0.8)
		text-align:center
		line-height:.8rem
		.header-abs-back
			color:#fff
			font-size:.4rem
	.header-fixed
		position:fixed
		top:0
		left:0
		right:0
		height:$headerHeight
		line-height:$headerHeight
		text-align:center
		color:$whiteColor
		background:$bgColor
		font-size:.32rem
		.header-fixed-back
			position:absolute
			width:.64rem
			text-align:center
			font-size:.4rem
			top:0
			left:0
			color:$whiteColor
</style>