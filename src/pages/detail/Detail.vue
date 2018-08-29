<template>
	<div>
		<detail-banner 
			:sightName="sightName"
			 :bannerImg="bannerImg"
			 :gallaryImgs="gallaryImgs"
			 >
		</detail-banner>
		<detail-header></detail-header>
		<detail-list :list="list"></detail-list>
		<div class="content"></div>
	</div>
</template>


<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
export default {
	name:'Detail',
	components:{
		DetailBanner,
		DetailHeader,
		DetailList
	},
	data () {
		return {
			list:[],
			sightName:'',
			bannerImg:'',
			gallaryImgs:[]
		}
	},
	methods:{
		getDetail () {
			axios.get('/api/detail.json',{
				params:{
					id:this.$route.params.id
				}
			}).then(this.getDetailInfoSucc)
		},
		getDetailInfoSucc (res) {
			res =res.data
			if(res.ret && res.data){
				const data =res.data
				this.list=data.categoryList
				this.sightName =data.sightName
				this.bannerImg=data.bannerImg
				this.gallaryImgs=data.gallaryImgs
			}
		}
	},
	mounted (){
		this.getDetail()	
	}
}
</script>

<style lang="stylus" scoped>
	.content
		height:5rem;
</style>