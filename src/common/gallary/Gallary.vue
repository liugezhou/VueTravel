<template>
	<div class="container" @click="hanldeGallaryClick">
		<div class="wrapper">
			<swiper :options ="swiperOptions">
			    <swiper-slide 
			    		v-for="(item,index) in imgs" 
			    		:key="index">
			    		<img class="gallary-image" :src="item" />
			    </swiper-slide>
	    			<div class="swiper-pagination"  slot="pagination"></div>
	  		</swiper>
		</div>
	</div>
</template>

<script>
export default {
	name:'CommonGallary',
	props:{
		imgs:{
			type:Array,
			default () {
				return []
				
			}
		}
	},
	methods:{
		hanldeGallaryClick:function(){
			this.$emit('close')
		}
	},
	data () {
		return {
			swiperOptions:{
				pagination:'.swiper-pagination',
				paginationType:'fraction',
				observeParents:true,
				observer:true
			}
		}
	}
}
</script>

<style lang="stylus" scoped>
	.container >>> .swiper-container
		overflow:inherit;
	.container
		display:flex
		flex-direction:column
		justify-content:center
		z-index:99	
		position:fixed
		left:0
		right:0
		top:0
		bottom:0
		background:#000
		.wrapper
			width:100%
			height:0
			padding-bottom:80%
			.gallary-image
				width:100%
			.swiper-pagination
				color:#fff
				bottom:-2rem;
</style>