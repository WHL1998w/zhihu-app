<template>
	<div class="bl-container">
		<!--最新专题-->		<div class="bl-row">
			<img src="../assets/image/book.png" class="special-logo" />
			<h1 class="title bl-text-color-black">最新专题</h1>
		</div>
		<div class="container">
			<div class="special-card bl-shadow" v-for="(item,index) in specials" :key="index">
				<img :src="item.banner" alt="" class="img-circle">
				<div class="special-card-body">
					<div class="bl-row">
						<div class="bl-col">
							<h3 class="bl-font-weight bl-text-color-black">{{ item.title}}</h3>
							<p class="bl-text-color-gray bl-meta">{{ item.updated}} 更新，{{ item.viewCount }}次浏览</p>
						</div>
						<button class="bl-btn bl-btn-round care-btn bl-font-weight">关注专题</button>
					</div>
					<hr class="line" />
					<div class="special-intr">
						<small>{{item.introduction}}</small>
						<span v-for="(section,index) in item.sections" :key="index" class="section">
							{{ section.sectionTitle }}
						</span>
					</div>
				</div>
			</div>
			<button class="special-watch-btn bl-btn bl-font-weight">
				<router-link to="/special/all">查看更多专题</router-link>
			</button>
		</div>
		<!--圆桌讨论-->
		<div class="bl-row">
			<img src="../assets/image/圆形.png" class="special-logo" />
			<h1 class="title bl-text-color-black">圆桌讨论</h1>
		</div>
		<div class="round-table">
			<div class="special-card bl-shadow" v-for="(item,index) in roundTables" :key="index">
				<img :src="item.banner" alt="" class="round-banner">
				<div class="special-card-body">
					<div class="bl-row">
						<div class="bl-col round-table-title">
							<h2 class="bl-font-weight bl-text-color-white">{{ item.name}}</h2>
							<p class=" bl-meta meta">{{ item.includeCount}} 位嘉宾参与  |  {{ item.visitsCount }}人关注</p>
						</div>
						<button class="bl-btn bl-btn-round round-btn bl-font-weight bl-btn-blue">关注圆桌</button>
					</div>
				</div>
			</div>
			<button class="special-watch-btn bl-btn bl-font-weight">
				<router-link to="/round/table/all">查看更多圆桌</router-link>
			</button>
		</div>
	</div>
	</div>
</template>

<script>
	export default {
		name: 'specials',
		// data一定要是个函数
		data() {
			return {
				specials: [],
				roundTables: []
			};
		},
		created() {
			this.axios.get('http://localhost:8080/api/special').then(res => {
				console.log(res);
				console.log("ceece")
				this.specials = res.data.data;
			});
			this.axios({
				method: 'get',
				url: 'http://localhost:8080/api/round/table',
				headers: {
					'Content-Type': 'application/json'
				},
			}).then(res => {
				this.roundTables = res.data.data;
				console.log(res.data.data);
			});
		}
	};
</script>
<style lang="scss" scoped>
	.router {
		text-decoration: none;
	}

	.title {
		font-weight: bold;
		font-size: 25px;
		margin-top: 90px;
		margin-left: 130px;
	}

	.special-logo {
		margin-top: 90px;
		position: relative;
		left: 120px;
	}

	.container {
		position: relative;
		top: 20px;
		/*网格布局*/
		width: 80%;
		margin: 0 auto;
		display: grid;
		grid-template-columns: 500px 500px;
		grid-template-rows: 500px 500px;
	}
	.round-table{
		position: relative;
		top: 20px;
		/*网格布局*/
		width: 80%;
		margin: 0 auto;
		display: grid;
		grid-template-columns: 500px 500px;
		grid-template-rows: 300px 300px;
	}
	.special-card {
		margin-right: 15px;
		margin-bottom: 20px;
		background-color: white;
	}

	.special-card-body {
		padding: 15px 15px 15px 15px;
		position: relative;
		top: 10px;
	}

	.line {
		position: relative;
		top: 10px;
		width: 100%;
		border: 0.1px solid silver;
	}

	.img-circle {
		width: 100%;
		height: 60%;
		border-radius: 3%;
	}
	.round-banner{
		width: 100%;
		height: 80%;
		border-radius: 3%;
	}
	.special-intr {
		position: relative;
		top: 10px;
	}

	.care-btn {
		position: relative;
		left: 85px;
		width: 110px;
		height: 30px;
		color: deepskyblue;
		background-color: rgb(235, 245, 255);
	}
	.special-watch-btn{
		width: 160px;
		height: 50px;
		color: gainsboro;
		font-size: 18px;
		border-radius: 30px;
		background-color: skyblue;
		position: relative;
		top: 10px;
		left: 430px;
	}
	.round-table-title{
		position: relative;
		top: -100px;
		left: 20px;
		z-index: 9999;
	}
	.meta{
		position: relative;
		top: 10px;
	}
	.round-btn{
		position: relative;	
		top: -20px;
		left: 85px;
		width: 90px;
		height: 40px;
	}
</style>
