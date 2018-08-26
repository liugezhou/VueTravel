<template>
	<div>
		<div class="weekend-title">周末去哪</div>
		<ul>
			<li class="item border-bottom" v-for="(item,index) of list"
				:key="item.id">
				<div class="item-img-wrap">
					<img class="item-img" 
						:src="item.imgUrl">
				</div>
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name:'HomeRecommend',
		props:{
			list:Array	
		},
	}
</script>

<style lang="stylus" scoped>
	@import '~styles/mixins.styl'
	.weekend-title
		line-height:.8rem
		background:#eee
		text-indent:.2rem
	.item-img-wrap	
		height:0
		padding-bottom:37.09%
		overflow:hidden
		.item-img
			width:100%
	.item-info
		flex:1
		padding:.1rem
		min-width:0
		.item-title
			line-height:.54rem
			font-size:.32rem
			ellipsis()
		.item-desc
			line-height:.4rem
			font-size:.28rem
			color:#ccc
			ellipsis()
</style>