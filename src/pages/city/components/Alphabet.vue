<template>
	<div class="list">
		<li class="item" v-for="(item,key) of cities" ::key="key">
			{{key}}
		</li>
		<li class="item">A</li>
		<li class="item">A</li>
	</div>
</template>

<script>
	export default{
		name:'CityAlphabet',
		props:{
			cities:Object
		}
	}
</script>

<style lang="stylus" scoped>
	@import '~styles/variables.styl'
	.list
		display:flex
		flex-direction:column
		justify-content:center
		position:absolute
		top:1.58rem
		right:0
		bottom:0
		width:.4rem
		list-style:none
		.item
			line-height:.4rem
			height:.4rem
			text-align:center
			color:$bgColor
</style>