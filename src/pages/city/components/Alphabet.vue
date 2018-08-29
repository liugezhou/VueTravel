<template>
	<div class="list">
		<li class="item" 
			v-for="item of letters" 
			:key="item"
			@click="handleLetterClick"
			@touchstart.prevent ="handeleTouchStart"
			@touchmove="handleTouchMove"
			@touchend ="handleTouchEnd"
			:ref="item">
			{{item}}
		</li>
	</div>
</template>

<script>
	export default{
		name:'CityAlphabet',
		props:{
			cities:Object
		},
		computed:{
			letters () {
				const letters =[]
				for(let i in this.cities){
					letters.push(i)
				}
				return letters
			}
			
		},
		data () {
			return {
				touchStatus :false,
				startY:0,
				timer:null
			}
		},
		updated () {
			this.startY =this.$refs['A'][0].offsetTop
		},
		methods:{
			handleLetterClick:function(e){
				this.$emit('change',e.target.innerText)
			},
			handeleTouchStart:function(){
				this.touchStatus=true
			},
			handleTouchMove:function(e){
				if(this.touchStatus=true){
					if(this.timer){
						clearTimeout(this.timer)
					}
					this.timer =setTimeout( () =>{
						const touchY = e.touches[0].clientY -79
						const index = Math.floor((touchY -this.startY )/20)
						if(index>-0 && index<this.letters.length){
							this.$emit('change',this.letters[index])
						}
					},16)
				}
			},
			handleTouchEnd:function(){
				this.touchStatus=false
			}
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
			line-height:.36rem
			height:.36rem
			text-align:center
			color:$bgColor
</style>