<template>
	<div class="icons">
		<div class="icon" v-for="item of iconList" :key="item.id">
			<div class="icon-img">
				<img :src="item.imgUrl" class="icon-imgcontent"/>
			</div>
			<p class="icon-desc">TEXT</p>
		</div>
	</div>
</template>

<script>
	export default{
		name:'HomeIcons',
		data:function(){
			return{
				iconList:[{
					id:"001",
					imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
				},{
					id:"002",
					imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
				},{
					id:"003",
					imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
				},{
					id:"004",
					imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
				},{
					id:"005",
					imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
				},{
					id:"006",
					imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
				},{
					id:"007",
					imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
				},{
					id:"008",
					imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
				},
				]
			}
		}
	}
</script>

<style lang="stylus" scoped>
	@import '~styles/variables.styl'
	.icons
		overflow:hidden
		height:0
		padding-bottom:50%
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
				.icon-imgcontent
					display:block
					margin:auto
					height:100%
			.icon-desc{
				position:absolute
				left:0
				right:0
				bottom:0
				line-height:.44rem
				height:.44rem
				color:$darkTextColor
				text-align:center
			}
					
</style>