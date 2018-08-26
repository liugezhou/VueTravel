<template>
	<div class="icons">
		<swiper :option="swiperOption">
			<swiper-slide v-for="(page,index) of pages" :key="index">
				<div class="icon" 
					v-for="(item,index) of page" 
					:key='item.id'>
					<div class="icon-img">
						<img :src="item.imgUrl" class="icon-img-content"/>
					</div>
					<p class="icon-desc">{{item.desc}}</p>
				</div>
			</swiper-slide>
			
		</swiper>
	</div>
</template>

<script>
	export default{
		name:'HomeIcons',
		data:function(){
			return{
				swiperOption:{
					autoplay:false	
				},
				iconList:[{
					id:"001",
					imgUrl:"http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",
					desc:'景点门票'
				},{
					id:"002",
					imgUrl:"http://img1.qunarzz.com/piao/fusion/1711/df/86cbcfc533330d02.png",
					desc:'景点门票'
				},{
					id:"003",
					imgUrl:"http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png",
					desc:'景点门票'
				},{
					id:"004",
					imgUrl:"http://img1.qunarzz.com/piao/fusion/1611/7f/b1ea3c8c7fb6db02.png",
					desc:'景点门票'
				},{
					id:"005",
					imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
					desc:'景点门票'
				},{
					id:"006",
					imgUrl:"http://img1.qunarzz.com/piao/fusion/1611/59/569d3c096e542502.png",
					desc:'景点门票'
				},{
					id:"007",
					imgUrl:"http://img1.qunarzz.com/piao/fusion/1611/17/4bd370f3eb1acd02.png",
					desc:'景点门票'
				},{
					id:"008",
					imgUrl:"http://img1.qunarzz.com/piao/fusion/1611/7f/b1ea3c8c7fb6db02.png",
					desc:'景点门票'
				},{
					id:"009",
					imgUrl:"http://img1.qunarzz.com/piao/fusion/1711/df/86cbcfc533330d02.png",
					desc:'景点门票'
				}
				]
			}
		},
		computed:{
			pages () {
				const pages = []
				this.iconList.forEach((item,index) =>{
					const page =Math.floor(index/8)
					if(!pages[page]){
						pages[page] =[]
					}
					pages[page].push(item)
				})
				return pages
			}
		}
	}
</script>

<style lang="stylus" scoped>
	@import '~styles/variables.styl'
	@import '~styles/mixins.styl'
	.icons >>> .swiper-container
		height:0
		padding-bottom:50%
	.icons
		margin-top:.1rem
		.icon
			position:relative
			overflow:hidden
			float:left
			width:25%
			padding-bottom:25%
			height:0
			.icon-img
				position:absolute
				top:0
				left:0
				right:0
				bottom:.44rem
				box-sizing:border-box
				padding.1rem
				.icon-img-content
					display:block
					margin:0 auto
					height:100%
			.icon-desc
				position:absolute
				left:0
				right:0
				bottom:0
				line-height:.44rem
				height:.44rem
				color:$darkTextColor
				text-align:center
				ellipsis()
</style>