<template>
	<div>
		<div class="banner">
			<svg class="star" viewBox="0 0 24 24" width="36" height="36">
				<path d="M5.515 19.64l.918-5.355-3.89-3.792c-.926-.902-.639-1.784.64-1.97L8.56 7.74l2.404-4.871c.572-1.16 1.5-1.16 2.072 0L15.44 7.74l5.377.782c1.28.186 1.566 1.068.64 1.97l-3.89 3.793.918 5.354c.219 1.274-.532 1.82-1.676 1.218L12 18.33l-4.808 2.528c-1.145.602-1.896.056-1.677-1.218z"
				 fill-rule="evenodd"></path>
			</svg>
			<h3 style="margin-left:10px;font-weight: bold;">热门收藏夹</h3>
		</div>
		<div class="container">
			<div class="row" v-for="(item, index) in favorites" :key="index">
				<div class="left">
					<div class="top1">
						<h4 class="title-set">{{ item.title }}</h4>
					</div>
					<div class="middle1">
						<img :src="item.creatorAvatar" alt="" class="img-avatara" />
						<h3 style="margin-left:60px;margin-top: -35px;font-size: 18px;">{{ item.creatorName }}&nbsp;&nbsp;创建</h3>
					</div>
					<div class="bottom">
						<div class="w-row">
							<div class="right1">
								<button class="button2">
									<h4 style="color: #1E90FF;font-size: 1.125rem;font-weight: bold;">关注收藏夹</h4>
								</button>
							</div>
						</div>
						<h4 class="follower">{{ item.followers }}人关注</h4>
					</div>
				</div>
				<!--竖线的写法 -->
				<div style="float:left;margin-top: 24px;width: 1px;height: 200px; background: darkgray;margin-right: 25px;"></div>
				<div class="right">
					<div class="top2">
						<h4 class="title-set1">{{ item.questionTitle }}</h4>
					</div>
					<div class="middle2">
						<h4 class="answer">{{ item.answerAuthorName }}</h4>
					</div>
					<div class="bottom2">
						<button class="button-topic">回答</button>
						<h4 class="tz">{{ item.voteupCount }}赞同·{{ item.commentCount }}评论</h4>
					</div>
					<div class="bottom3">
						<h4 class="totalCount">已收藏{{ item.totalCount }}条内容></h4>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				favorites: []
			};
		},
		created() {
			this.axios({
				method: 'get',
				url: 'http://localhost:8080/api/favorite/all',
				headers: {
					'Content-Type': 'application/json'
				},
			}).then(res => {
				this.favorites = res.data.data;
				console.log(res.data.data);
			});
		},
	};
</script>

<style lang="scss" scoped>
	.img-avatara {
		height: 2.5rem;
		width: 2.5rem;
		margin-top: 50px;
		margin-left: 0.625rem;
	}

	.follower {
		margin-top: -30px;
		margin-left: 120px;
		font-size: 18px;
	}

	.tz {
		font-size: 15px;
		margin-top: -25px;
		margin-left: 60px;
	}

	.answer {
		font-size: 1.125rem;
		color: #333333;
		margin-top: 20px;
	}

	h3 {
		color: #1a1a1a;
		font-size: 30px;
	}

	.totalCount {
		margin-top: 40px;
		font-size: 18px;
	}

	h4 {
		color: #a8b2b4;
		font-size: 20px;
	}

	.title-set {
		font-size: 1.125rem;
		font-weight: bold;
		color: black;
		margin-top: 20px;
	}

	.title-set1 {
		font-size: 1.125rem;
		font-weight: bold;
		color: black;
		margin-top: 15px;
	}

	.img1 {
		width: 30px;
		height: 30px;
		margin-top: 15px;
	}

	.button {
		width: 6.25rem;
		border: none;
		background-color: rgb(235, 245, 255);
		color: rgb(30, 134, 255);
		height: 40px;
		border-radius: 5px;
		margin-left: 40.625rem;
		margin-top: -9.375rem;
	}

	.left {
		margin-left: 1.25rem;
		width: 35%;
	}

	.right {
		width: 65%;
	}

	.title-color {
		color: black;
		font-size: 1.25rem;
		font-weight: bold;
	}

	.button-topic {
		border: none;
		width: 40px;
		background-color: lightgray;
		height: 30px;
		font-size: 15px;
		font-weight: bold;
		margin-top: 15px;
	}

	.meta {
		margin-top: -0.625rem;
		color: gray;
	}

	.banner {
		margin-bottom: 10px;
		margin-top: 70px;
		height: 100px;
		border: 1px solid #d6d6d6;
		box-shadow: 2px 5px 5px #ddd;
		padding-left: 10;
		display: flex;
		align-items: center;

		img {
			width: 12.5rem;
			height: 6.25rem;
		}
	}

	.button2 {
		width: 30%;
		border: none;
		background-color: rgb(235, 245, 255);
		color: rgb(30, 134, 255);
		height: 35px;
		border-radius: 5px;
		
		margin-top: 60px;
	}

	.container {
		overflow: auto;
		margin: 0 auto;
		width: 70%;

		.row {
			background-color: #ffffff;
			display: flex;
			border: 1px solid #d6d6d6;
			border-radius: 4px;
			height: auto;
			padding: 14px;
			box-shadow: 0 1px 3px 0 rgba(26, 26, 26, 0.1);
		}
	}

	.introduction {
		font-size: 18px;
		// color: #5c5e5c;
		margin-top: 0.625rem;
	}

	.star {
		fill: #0084ff;
	}
</style>
