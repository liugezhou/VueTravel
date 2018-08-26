<template>
	<div>
		<div class="recommend-title">热销推荐</div>
		<ul>
			<li class="item border-bottom" v-for="(item,index) of recommendList"
				:key="item.id">
					<img class="item-img" 
						:src="item.imgUrl">
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
					<button class="item-button">查看详情</button>
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
			recommendList:[{
		        "id": "0001",
		        "imgUrl": "http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg",
		        "title": "故宫",
		        "desc": "东方宫殿建筑代表，世界宫殿建筑典范"
		      }, {
		        "id": "0002",
		        "imgUrl": "http://img1.qunarzz.com/sight/p0/1511/d2/d2aec2dfc5aa771290.water.jpg_140x140_abb362a7.jpg",
		        "title": "南山滑雪场",
		        "desc": "北京专业级滑雪圣地"
		      }, {
		        "id": "0003",
		        "imgUrl": "http://img1.qunarzz.com/sight/p0/1501/f4/f467729126949c3a.water.jpg_140x140_ef235b1c.jpg",
		        "title": "天安门广场",
		        "desc": "我爱北京天安门，天安门上太阳升"
		      }, {
		        "id": "0004",
		        "imgUrl": "http://img1.qunarzz.com/sight/p0/1501/40/40b2b6c951b28fdd.water.jpg_140x140_1c863e5c.jpg",
		        "title": "水立方",
		        "desc": "中国的荣耀，阳光下的晶莹水滴"
		      }, {
		        "id": "0005",
		        "imgUrl": "http://img1.qunarzz.com/sight/p0/201308/23/b283071686e64dfec8d65eac.jpg_140x140_8c5a7c49.jpg",
		        "title": "温都水城养生馆",
		        "desc": "各种亚热带植物掩映其间仿佛置身热带雨林"
		      }]
			}
		}
	}
</script>

<style lang="stylus" scoped>
	@import '~styles/mixins.styl'
	.recommend-title
		margin-top:.2rem
		line-height:.8rem
		background:#eee
		text-indent:.2rem
	.item
		display:flex
		overflow:hidden
		height:1.9rem
		padding:0.1rem
		.item-img
			width:1.7rem
			height:1.7rem
			padding:.1rem
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
			.item-button
				line-height:.44rem
				background:#ff9300
				padding:0 .1rem
				border-radius:.06rem
				margin-top:0.1rem
				color:#fff
</style>