<template>
	<div>
		<div class="weekend-title">周末去哪</div>
		<ul>
			<li class="item border-bottom" v-for="(item,index) of weekendList"
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
		data () {
			return {
		    weekendList: [{
		        "id": "0001",
		        "imgUrl": "http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg",
		        "title": "北京温泉排行榜",
		        "desc": "细数北京温泉，温暖你的冬天"
		      }, {
		        "id": "0002",
		        "imgUrl": "http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg",
		        "title": "北京必游TOP10",
		        "desc": "来北京必去的景点非这些地方莫属"
		      }, {
		        "id": "0003",
		        "imgUrl": "http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg",
		        "title": "寻找北京的皇城范儿",
		        "desc": "数百年的宫廷庙宇，至今依旧威严霸气"
		      }, {
		        "id": "0004",
		        "imgUrl": "http://img1.qunarzz.com/sight/source/1505/ce/bc89bc2f0e33ea.jpg_r_640x214_3e408453.jpg",
		        "title": "学生最爱的博物馆",
		        "desc": "周末干嘛？北京很多博物馆已经免费开放啦"
		      }, {
		        "id": "0005",
		        "imgUrl": "http://img1.qunarzz.com/sight/source/1505/b2/fde1bfcd057a52.jpg_r_640x214_bbf3fa44.jpg",
		        "title": "儿童剧场，孩子的乐园",
		        "desc": "带宝贝观看演出，近距离体验艺术的无穷魅力"
		      }]
			}
		}
	}
</script>

<style lang="stylus" scoped>
	@import '~styles/mixins.styl'
	.weekend-title
		margin-top:.2rem
		line-height:.8rem
		background:#eee
		text-indent:.2rem
	.item-img-wrap	
		height:0
		padding-bottom:33.9%
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