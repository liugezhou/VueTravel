<template>
	<div class="list" ref="wrapper">	
		<div>
			<div class="area">
				<div class="title border-topbottom">当前城市</div>
				<div class="button-list">
					<div class="button-wrapper">
						<div class="button">{{this.currentCity}}</div>
					</div>
				</div>
			</div>
			<div class="area">
				<div class="title border-topbottom">热门城市</div>
				<div class="button-list">
					<div class="button-wrapper" 
						 v-for="item of hot" 
					 	 :key="item.id"
					 	  @click="handleCityClick(item.name)"
					 	 >
						<div class="button">{{item.name}}</div>
					</div>
				</div>
			</div>
			<div class="area" 
				 v-for="(item,key) of cities" 
				 :key="key"
				 :ref ="key"
			>
				<div class="title border-topbottom">{{key}}</div>
				
					<div class="item-list">
						<div class="item border-bottom"
							 v-for="innerItem of item"
							 :key="innerItem.id"
							 @click="handleCityClick(innerItem.name)"
							>
							{{innerItem.name}}
						</div>
					</div>
				
			</div>
		</div>
	</div>
</template>

<script>
	import Bscroll from 'better-scroll'
	import { mapState,mapMutations } from 'vuex'
	export default{
		name:'CityList',
		props:{
			hot:Array,
			cities:Object,
			letter:String
		},
		computed : {
			...mapState({
				currentCity:'city'
			})
		},
		mounted () {
			this.scroll =new Bscroll(this.$refs.wrapper)
		},
		methods:{
			handleCityClick:function(city){
				//this.$store.commit('changeCity',city)
				this.changeCity(city)
				this.$router.push('/')
			},
			...mapMutations(['changeCity'])
		},
		watch : {
			letter () {
				if(this.letter){
					const element =this.$refs[this.letter][0]
					this.scroll.scrollToElement(element)
				}
			}
		}
	}
</script>

<style lang="stylus" scoped>
	@import '~styles/variables.styl'
	.border-topbottom
		&:before
			border-color:#ccc
		&:after
			border-color:#ccc
	.border-bottom
		&:before
			border-color:#ccc
	.list
		position:absolute
		left:0
		top:1.58rem
		right:0
		bottom:0	
		overflow:hidden
		.title
			line-height:.54rem
			padding-left:.2rem
			background:#eee
			color:#666
			font-size:.26rem
		.button-list
			padding:.1rem .6rem .1rem .1rem
			overflow:hidden
			.button-wrapper
				width:33.33%
				float:left
				.button
					padding:.1rem
					text-align:center
					margin:.1rem
					border:.02rem solid #ccc
					border-radius:.06rem
					color:#000
		.item-list
			.item
				padding-left:.2rem
				line-height:.76rem
				color:#000
</style>