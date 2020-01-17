<template>
	<div class="bl-container">
		<div class="bl-row">
			<img src="../assets/image/book.png" class="special-logo" />
			<h1 class="title bl-text-color-black">最新专题</h1>
		</div>
		<div class="container">
			<div class="special-card bl-shadow" v-for="(item,index) in recommoned" :key="index">
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
		
	</div>
	</div>
</template>

<script>
	export default {
		name: 'recommoned',
		// data一定要是个函数
		data() {
			return {
				recommoned: []
			};
		},
		created() {
			this.axios.get('http://localhost:8080/api/special').then(res => {
				console.log(res);
				console.log("ceece")
				this.recommoned = res.data.data;
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

	.special-card {
		margin-right: 15px;
		margin-bottom: 20px;
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
		left: 400px;
	}
</style>
