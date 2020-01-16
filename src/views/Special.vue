<template>
	<div>
		<div class="banner">
			<img src="../assets/image/heart.png" />
			<h3>全部专题</h3>
			<h4>共有{{specials.length}}个文章</h4>
		</div>
		<div class="bl-container bl-shadow">
			<div class="bl-row" v-for="(item,index) in specials" :key="index">
				<div class="bl-col-4 "><img :src="item.banner" class="img-circle"></div>
				<div class="bl-col-8">
					<h3>{{ item.title}}</h3>
					<p class="bl-meta">{{ item.updated}} 更新，{{ item.viewCount }}次浏览</p>
					<p class="bl-sub-title">{{ item.introduction }}</p>
					<span v-for="(section,index) in item.sections" :key="index" class="bl-meta">
						{{ section.sectionTitle }}
					</span>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'special',
		data() {
			return {
				specials: [],
				page: 0,
				onFetching: false
			};
		},
		created() {
			this.$nextTick(function() {
				this.box = this.$refs.viewBox;
				this.box.addEventListener('scroll', () => {
					var scrollTop = tis.$refs.viewBox.scrollTop;
					var scrollHeight = this.$refs.viewBox.scrollHeight;
					var clientHeight = this.$refs.viewBox.clientHeight;
					if (this.onFetching) {

					} else {
						if (clientHeight >= scrollHeight - scrollTop - 5) {
							this.onFetching = true;
							setTimeout(() => {
								this.page += 1;
								this.get();
								this.onFetching = false;
							}, 1000)
						}
					}
				}, false)
			})
		},
		mounted() {
			this.get();
		},
		methods: {
			get() {
				this.axios.get('http://localhost:8080/api/special/all', {
					params: {
						catis_id: 1,
						page: this.page
					}
				}).then(res => {
					console.log(res.data.data.length);
					this.specials = res.data.data;
					this.specials.length = res.data.data.length;
				})
			}
		},
	}
</script>

<style lang="scss" scoped>
	h3 {
		color: #1a1a1a;
		font-size: 30px;
	}
	h4 {
		color: #a8b2b4;
		font-size: 20px;
	}
	.banner {
		width: 90%;
		margin-bottom: 10px;
		margin-top: 80px;
		height: 100px;
		border: 1px solid #d6d6d6;
		box-shadow: 2px 5px 5px #ddd;
		padding-left: 10%;
		display: flex;
		align-items: center;
		img {
			height: 60%;
		}
	}	
	.img-circle {
		padding: 5px;
	    width: 90%;
	    height: 90%;
		border-radius: 10px;
	}
</style>
