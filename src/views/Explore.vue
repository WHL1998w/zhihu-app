<template>
	<div class="bl-container">
		<!--最新专题-->
		<div class="bl-row">
			<svg class="star special-logo" viewBox="0 0 24 24" width="36" height="36">
				<path d="M7.667 3.667h11.466a1.2 1.2 0 0 1 1.2 1.2v13.066a2.4 2.4 0 0 1-2.4 2.4H6.467V4.867a1.2 1.2 0 0 1 1.2-1.2zM4.2 9.619h1.689v10.714H5.4a2.4 2.4 0 0 1-2.4-2.4V10.82a1.2 1.2 0 0 1 1.2-1.2zm5.178-2.38a.6.6 0 0 0-.6.6v.585a.6.6 0 0 0 .6.6h8.044a.6.6 0 0 0 .6-.6v-.586a.6.6 0 0 0-.6-.6H9.378zm0 3.57a.6.6 0 0 0-.6.6v.586a.6.6 0 0 0 .6.6h8.044a.6.6 0 0 0 .6-.6v-.585a.6.6 0 0 0-.6-.6H9.378zm0 3.572a.6.6 0 0 0-.6.6v.586a.6.6 0 0 0 .6.6h4.578a.6.6 0 0 0 .6-.6v-.586a.6.6 0 0 0-.6-.6H9.378z"
				 fill-rule="evenodd"></path>
			</svg>
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
			<svg class="star special-logo" viewBox="0 0 24 24" width="36" height="36">
				<path d="M12 21.333a9.333 9.333 0 1 1 0-18.666 9.333 9.333 0 0 1 0 18.666zm-.66-11.287c.332.385.609.77.775 1.21.055-.054.665-.99.72-1.706.055-.385.126-1.616-.443-2.367-.443-.496-1.219-.77-1.884-.55a1.788 1.788 0 0 0-1.33 2.036c.887.276 1.607.771 2.161 1.377zm-1.33 1.541c.443-.055.941-.11 1.44 0 0-.055-.484-.936-1.108-1.486-.665-.496-1.33-.973-2.216-.771-.72.11-1.723.77-1.55 2.092.11.606.553 1.101 1.162 1.321.61-.605 1.44-1.046 2.272-1.156zm2.714.165c.056 0 1.164.055 1.828-.165.72-.275 1.412-.68 1.773-1.541.11-.276.23-1.248-.443-1.872-.72-.716-1.717-.716-2.438-.165.222.825.063 1.966-.11 2.532-.103.348-.333.88-.61 1.211zm-1.44.55c-.056 0-1.33.056-1.828.221-.72.275-1.447.668-1.773 1.541-.11.276-.21 1.26.443 1.872.665.661 1.718.661 2.438.11-.295-.811-.166-1.761.055-2.477.166-.495.388-.936.665-1.266zm5.041-.99c-.665.605-1.44.99-2.327 1.211-.443.055-.941.11-1.44 0 0 .055.554.991 1.108 1.431.665.496 1.385.771 2.216.771.72-.11 1.678-.692 1.551-2.092-.055-.605-.554-1.101-1.108-1.321zm-3.656 2.642a3.475 3.475 0 0 1-.776-1.156c-.055.055-.665.991-.72 1.707-.055.385-.101 1.506.499 2.312.443.496 1.218.77 1.883.55.887-.275 1.496-1.1 1.33-2.036a5.38 5.38 0 0 1-2.216-1.377z"
				 fill-rule="evenodd"></path>
			</svg>
			<h1 class="title bl-text-color-black">圆桌讨论</h1>
		</div>
		<div class="round-table">
			<div class="special-card bl-shadow" v-for="(item,index) in roundTables" :key="index">
				<img :src="item.banner" alt="" class="round-banner">
				<div class="special-card-body">
					<div class="bl-row">
						<div class="bl-col round-table-title">
							<h2 class="bl-font-weight bl-text-color-white">{{ item.name}}</h2>
							<p class=" bl-meta meta">{{ item.includeCount}} 位嘉宾参与 | {{ item.visitsCount }}人关注</p>
						</div>
						<button class="bl-btn bl-btn-round round-btn bl-font-weight bl-btn-blue">关注圆桌</button>
					</div>
				</div>
			</div>
			<button class="special-watch-btn bl-btn bl-font-weight">
				<router-link to="/round/table/all">查看更多圆桌</router-link>
			</button>
		</div>
		<!--热门收藏-->
		<div class="bl-row">
			<svg class="star special-logo" viewBox="0 0 24 24" width="36" height="36">
				<path d="M5.515 19.64l.918-5.355-3.89-3.792c-.926-.902-.639-1.784.64-1.97L8.56 7.74l2.404-4.871c.572-1.16 1.5-1.16 2.072 0L15.44 7.74l5.377.782c1.28.186 1.566 1.068.64 1.97l-3.89 3.793.918 5.354c.219 1.274-.532 1.82-1.676 1.218L12 18.33l-4.808 2.528c-1.145.602-1.896.056-1.677-1.218z"
				 fill-rule="evenodd"></path>
			</svg>
			<h1 class="title bl-text-color-black">热门收藏夹</h1>
		</div>
		<div class="favorite">
			<div class="special-card" v-for="(item, index) in favorites" :key="index">
				<div class="card-heard">
					<div class="card-header-row">
						<div class="header-col-1">
							<h3 style="font-weight: bold;">{{ item.title }}</h3>
						</div>
						<div class="header-col-2"><input type="button" value="关注收藏夹" /></div>
					</div>
					<div class="card-header-row">
						<div class="header-col-3">
							<ul class="">
								<li><img :src="item.creatorAvatar" alt="" /></li>
								<li>{{ item.creatorName }}</li>
								<li class="header-text">创建</li>
								<li class="header-text">{{ item.followers }}人关注</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="card-body">
					<div class="card-body-row">
						<div class="card-col-1">{{ item.questionTitle }}</div>
					</div>
					<div class="card-body-row">
						<div class="card-col-2">{{ item.answerAuthorName }}:{{ item.answerContent }}</div>
					</div>
					<div class="card-body-row">
						<div class="card-col-3">
							<ul class="body-ul">
								<li>回答</li>
								<li>{{ item.voteupCount }}赞同·{{ item.commentCount }}评论</li>
							</ul>
						</div>
					</div>
					<div class="card-body-row">
						<div class="card-col-1">{{ item.questionTitle }}</div>
					</div>
					<div class="card-body-row">
						<div class="card-col-2">{{ item.answerAuthorName }}:{{ item.answerContent }}</div>
					</div>
					<div class="card-body-row">
						<div class="card-col-3">
							<ul class="body-ul">
								<li>回答</li>
								<li>{{ item.voteupCount }}赞同·{{ item.commentCount }}评论</li>
							</ul>
						</div>
					</div>

					<div class="card-body-row">
						<div class="card-col-4">
							已经收藏{{ item.totalCount }}条内容>
							<i class="fa fa-angle-right"></i>
						</div>
					</div>
				</div>
			</div>
		</div>
		<button class="favorite-btn bl-btn bl-font-weight">
			<router-link to="/favorite/all">查看更多热门收藏</router-link>
		</button>
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
				roundTables: [],
				favorites: []
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
			this.axios.get('http://localhost:8080/api/favorite').then(res => {
				console.log(res);
				this.favorites = res.data.data;
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

	.round-table {
		position: relative;
		top: 20px;
		/*网格布局*/
		width: 80%;
		margin: 0 auto;
		display: grid;
		grid-template-columns: 500px 500px;
		grid-template-rows: 300px 300px;
	}

	.favorite {
		position: relative;
		top: 20px;
		/*网格布局*/
		width: 80%;
		margin: 0 auto;
		display: grid;
		grid-template-columns: 500px 500px;
		grid-template-rows: 450px 450px;
	}

	.special-card {
		margin-right: 15px;
		margin-bottom: 20px;
		background-color: white;
		border-radius:3%
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

	.round-banner {
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

	.special-watch-btn {
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
	.favorite-btn{
		width: 15%;
		height: 50px;
		color: gainsboro;
		font-size: 18px;
		border-radius: 30px;
		background-color: skyblue;
		position: relative;
		top: 10px;
		left:42%;
	}

	.round-table-title {
		position: relative;
		top: -100px;
		left: 20px;
		z-index: 9999;
	}

	.meta {
		position: relative;
		top: 10px;
	}

	.round-btn {
		position: relative;
		top: -20px;
		left: 85px;
		width: 90px;
		height: 40px;
	}

	.star {
		fill: #0084ff;
	}

	.card-heard {
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		height: 112px;
		border-bottom: 1px solid #ebebeb;
		overflow: hidden;
		margin: 0px 10px 20px 20px;
		width: 92%;
	}
	.card-header-row {
		margin: 15px;
		display: flex;
		width: 100%;
		height: 48%;
	}
	.header-col-1 {
		flex: 0 0 60%;
	}
	.header-col-3 {
		flex: 0 0 100%;
		ul {
			margin-top: -20px;
			width: 100%;
			display: flex;
			img {
				margin-left: -20px;
				width: 2.5rem;
				height: 2.5rem;
			}
			li {
				list-style-type: none;
				margin-left: 15px;
				margin-top: -7px;
			}
			li:last-child {
				margin-left: 30px;
			}
			.header-text {
				color: #999;
			}
		}
	}
	.header-col-2 {
		flex: 0 0 37%;
		input[type='button'] {
			width: 102px;
			height: 34px;
			border-radius: 3px;
			font-size: 14px;
			font-weight: 600;
			color: #0084ff;
			border: none;
			float: right;
			outline: none;
			background-color: rgba(0, 132, 255, 0.08);
			margin-top: 20px;
		}
	}
	.card-body {
		width: 92%;
		height: 210px;
		margin: 20px 20px 20px 20px;
	}
	.card-body-row {
		display: flex;
		width: 100%;
	}
	.card-col-1 {
		flex: 0 0 100%;
		display: block;
		height: 21px;
		line-height: 21px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		font-weight: 600;
		font-synthesis: style;
	}
	.card-col-2 {
		margin-top: 15px;
		height: 21px;
		line-height: 21px;
		color: #444;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.card-col-4 {
		height: 24px;
		font-size: 18px;
		color: #8590a6;
		font-weight: 600;
		margin-top: 22px;
		margin-left: 5px;
		font-synthesis: style;
		i {
			color: #8590a6;
			font-size: 22px;
			margin: 5px 20px;
		}
	}
	.card-col-3 {
		.body-ul {
			height: 17px;
			line-height: 17px;
			font-size: 15px;
			display: flex;
			margin-left: -20px;
			margin-top: 15px;
			margin-left: 20px;
			color: gainsboro;
			list-style-type: none;
			li:first-child {
				margin-left: -15px;
			}
			li {
				margin-left: 20px;
				color: gainsboro;
			}
		}
	}
</style>
