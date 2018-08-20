<template>
<div class="wrapper">
 <swiper :options="swiperOption">
    <swiper-slide v-for="item of swiperList" :key="item.id">
    	<img class="swiper-image" :src="item.imgUrl" />
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</div>
 
</template>

<script>
	export default{
		name:'HomeSwiper',
		data (){
			return {
				swiperOption:{
					pagination:'.swiper-pagination',
					loop:true
				},
				swiperList:[{
					id:'0001',
					imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/bd/8e4a1c3f470d3702.jpg_750x200_f1f0a8c7.jpg'
				},
				{
					id:'0002',
					imgUrl:'http://img1.qunarzz.com/piao/fusion/1808/c6/44fce1467be17702.jpg_750x200_4a5f74a0.jpg'
				}]
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.wrapper >>> .swiper-pagination-bullet-active{
		background:#fff !important
	}
	.wrapper
		overflow:hidden
		width:100%
		height:0
		padding-bottom:26.5%
		background:#eee
	.swiper-image
		width:100%
</style>