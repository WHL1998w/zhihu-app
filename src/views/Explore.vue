<template>
	<div class="bl-container">
		<div class="d-flex p-3">
			<svg class="blue-icon mr-3" viewBox="0 0 24 24" width="32" height="32">
				<path d="M7.667 3.667h11.466a1.2 1.2 0 0 1 1.2 1.2v13.066a2.4 2.4 0 0 1-2.4 2.4H6.467V4.867a1.2 1.2 0 0 1 1.2-1.2zM4.2 9.619h1.689v10.714H5.4a2.4 2.4 0 0 1-2.4-2.4V10.82a1.2 1.2 0 0 1 1.2-1.2zm5.178-2.38a.6.6 0 0 0-.6.6v.585a.6.6 0 0 0 .6.6h8.044a.6.6 0 0 0 .6-.6v-.586a.6.6 0 0 0-.6-.6H9.378zm0 3.57a.6.6 0 0 0-.6.6v.586a.6.6 0 0 0 .6.6h8.044a.6.6 0 0 0 .6-.6v-.585a.6.6 0 0 0-.6-.6H9.378zm0 3.572a.6.6 0 0 0-.6.6v.586a.6.6 0 0 0 .6.6h4.578a.6.6 0 0 0 .6-.6v-.586a.6.6 0 0 0-.6-.6H9.378z"
				 fill-rule="evenodd"></path>
			</svg>
			<p class="bl-title">最新专题</p>
		</div>
		<div class="bl-row justify-content-center">
			<div class="bl-col-6" v-for="(item, index) in specials" :key="index">
				<div class="special-card m-3">
					<div class="card-header"><img :src="item.banner" alt="" width="100%" height="50%" /></div>
					<div class="card-body p-3 border-bottom">
						<div class="left">
							<h3>{{ item.title }}</h3>
							<p class="meta">{{ item.updated }}更新, {{ item.viewCount }}次浏览</p>
						</div>
						<div class="right"><button class="fill-light-blue tiny-round blue strong">关注专题</button></div>
					</div>
					<div class="card-content p-4">
						<p class="ellipsis">{{ item.introduction }}</p>
					</div>
				</div>
			</div>
			<router-link to="/special/all" class="all">查看更多专题</router-link>
		</div>

		<div class="d-flex p-3 align-items-center">
			<svg class="blue-icon mr-3" viewBox="0 0 24 24" width="36" height="36">
				<path d="M12 21.333a9.333 9.333 0 1 1 0-18.666 9.333 9.333 0 0 1 0 18.666zm-.66-11.287c.332.385.609.77.775 1.21.055-.054.665-.99.72-1.706.055-.385.126-1.616-.443-2.367-.443-.496-1.219-.77-1.884-.55a1.788 1.788 0 0 0-1.33 2.036c.887.276 1.607.771 2.161 1.377zm-1.33 1.541c.443-.055.941-.11 1.44 0 0-.055-.484-.936-1.108-1.486-.665-.496-1.33-.973-2.216-.771-.72.11-1.723.77-1.55 2.092.11.606.553 1.101 1.162 1.321.61-.605 1.44-1.046 2.272-1.156zm2.714.165c.056 0 1.164.055 1.828-.165.72-.275 1.412-.68 1.773-1.541.11-.276.23-1.248-.443-1.872-.72-.716-1.717-.716-2.438-.165.222.825.063 1.966-.11 2.532-.103.348-.333.88-.61 1.211zm-1.44.55c-.056 0-1.33.056-1.828.221-.72.275-1.447.668-1.773 1.541-.11.276-.21 1.26.443 1.872.665.661 1.718.661 2.438.11-.295-.811-.166-1.761.055-2.477.166-.495.388-.936.665-1.266zm5.041-.99c-.665.605-1.44.99-2.327 1.211-.443.055-.941.11-1.44 0 0 .055.554.991 1.108 1.431.665.496 1.385.771 2.216.771.72-.11 1.678-.692 1.551-2.092-.055-.605-.554-1.101-1.108-1.321zm-3.656 2.642a3.475 3.475 0 0 1-.776-1.156c-.055.055-.665.991-.72 1.707-.055.385-.101 1.506.499 2.312.443.496 1.218.77 1.883.55.887-.275 1.496-1.1 1.33-2.036a5.38 5.38 0 0 1-2.216-1.377z"
				 fill-rule="evenodd"></path>
			</svg>
			<p class="bl-title">圆桌讨论</p>
		</div>
		<div class="bl-row justify-content-center">
			<div class="bl-col-6" v-for="(item, index) in roundTables" :key="index">
				<div class="roundtable-card m-3">
					<button class="btn-follow-table" ref="btn">关注圆桌</button>
					<div class="card-img-wrapper" ref="box">
						<img :src="item.banner" ref="bgImg" />
						<div class="mask" ref="mask1"></div>
						<div class="mask" ref="mask2"></div>
					</div>

					<div class="info">
						<h3 class="mb-4">{{ item.name }}</h3>
						<p>越是前景光明，越要居安思危。打败你的并不一定是你的敌人，而是自己的故步自封。 而是自己的故步自封.而是自己的故步自封</p>
					</div>
					<div class="content">
						<p>可以推荐几个值得长期投资的基金吗？</p>
						<p class="meta">456个回答</p>
						<p>可以推荐几个值得长期投资的基金吗？</p>
						<p class="meta">456个回答</p>
					</div>
				</div>
			</div>
			<router-link to="round/table/all" class="all">查看更多圆桌</router-link>
		</div>

		<div class="d-flex p-3 align-items-center">
			<svg class="blue-icon mr-3" viewBox="0 0 24 24" width="36" height="36">
				<path d="M5.515 19.64l.918-5.355-3.89-3.792c-.926-.902-.639-1.784.64-1.97L8.56 7.74l2.404-4.871c.572-1.16 1.5-1.16 2.072 0L15.44 7.74l5.377.782c1.28.186 1.566 1.068.64 1.97l-3.89 3.793.918 5.354c.219 1.274-.532 1.82-1.676 1.218L12 18.33l-4.808 2.528c-1.145.602-1.896.056-1.677-1.218z"
				 fill-rule="evenodd"></path>
			</svg>
			<p class="bl-title">热门收藏夹</p>
		</div>
		<div class="bl-row justify-content-center">
			<div class="bl-col-6" v-for="(item, index) in favorites" :key="index">
				<div class="favorites-card m-3 p-4">
					<div class="min-height-2 bl-row mb-2">
						<p class="bl-title">{{ item.title }}</p>
						<div class="button"><button class="fill-light-blue tiny-round blue bl-font-weight">关注专题</button></div>
					</div>
					<div class="min-height-2 mb-3">
						<ul class="bl-row">
							<li><img :src="item.creatorAvatar" alt="" /></li>
							<li>{{ item.creatorName }}</li>
							<li>创建</li>
							<li>{{ item.followers }}人关注</li>
						</ul>
					</div>
					<div class="min-height-1 mb-2">
						<p>{{ item.questionTitle }}</p>
						<p>{{ item.answerAuthorName }}:{{ item.answerContent.substring(0, 25) }}....</p>
						<ul class="bl-row">
							<li>回答</li>
							<li>{{ item.voteupCount }}赞同·{{ item.commentCount }}评论</li>
						</ul>
					</div>
					<div class="min-height-1 mb-3">
						<p>{{ item.questionTitle }}</p>
						<p>{{ item.answerAuthorName }}:{{ item.answerContent.substring(0, 25) }}....</p>
						<ul class="bl-row">
							<li>回答</li>
							<li>{{ item.voteupCount }}赞同·{{ item.commentCount }}评论</li>
						</ul>
					</div>
					<div class="min-height-1 bl-row">
						<p>已经收藏{{ item.totalCount }}条内容></p>
					</div>
				</div>
			</div>
			<router-link to="/favorite/all" class="all">查看更多热门收藏</router-link>
		</div>

		<div class="d-flex p-3 align-items-center">
			<svg class="blue-icon mr-3" viewBox="0 0 24 24" width="36" height="36">
				<path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm4.043-15.524a.745.745 0 0 0-1.053.017l-6.857 7.071 2.237 2.17 6.857-7.071a.743.743 0 0 0-.016-1.052l-1.168-1.135zm-9.028 9.476l-.348 1.381 1.37-.39 1.274-.36-1.973-1.916-.323 1.285z"
				 fill-rule="evenodd"></path>
			</svg>
			<p class="bl-title">专栏</p>
		</div>
		<div class="bl-row justify-content-center">
			<div class="bl-col-6" v-for="(item, index) in columns" :key="index">
				<div class="column-top">
					<img :src="item.imageUrl" alt="" class="column-img" />
				</div>
				<div class="column-middle">
					<h4 class="bl-font-weight bl-text-color-black">{{ item.title}}</h4>
					<span class="colum-font1">{{item.followers}}关注·{{item.aritclesCount}}文章</span>
					<div class="font-space">
						<h5 class="colunm-font2">{{item.description.substring(0,30)}}</h5>
					</div>
				</div>
				<div class="column-bottom">
					<div class="header-col-column">
						<a v-bind:href="item.url" class="button-cloum" style="display: block;">进入专栏</a>
					</div>
				</div>
			</div>
			<router-link to="/clumns" class="all">查看更多专栏</router-link>
		</div>


	</div>
</template>

<script>
	export default {
		name: 'explore',
		// data一定要是个函数
		data() {
			return {
				specials: [],
				roundTables: [],
				favorites: [],
				columns: []
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

				this.$nextTick(() => {
					//获得循环中的引用对象，都将会是数组的形式
					let boxArr = this.$refs.box;
					let imgArry = this.$refs.bgImg;
					let btnArr = this.$refs.btn;
					let mask1Arr = this.$refs.mask1;
					let mask2Arr = this.$refs.mask2;
					//遍历，对每个对象进行处理
					for (var i = 0, len = boxArr.length; i < len; i++) {
						let box = boxArr[i];
						let img = imgArry[i];
						let btn = btnArr[i];
						let mask1 = mask1Arr[i];
						let mask2 = mask2Arr[i];
						//第三方库，可以获取图片的主色、次色等
						RGBaster.colors(img, {
							success: function(payload) {
								// payload.dominant是主色，payload.secondary是次色, payload.palette是调色板，含多个主要颜色数组,RGB形式表示
								this.dominant = payload.dominant;
								this.secondary = payload.secondary;
								// console.log('主色：' + payload.dominant);
								//去掉rgb的外层rgb字母和括号，得到112,34,56这样的值
								let str = payload.dominant.substring(4, payload.dominant.length - 1);
								//按逗号分割，得到字符串数组
								let strArr = str.split(',');
								//分别获得r,g,b的值，并转为整型
								let r = parseInt(strArr[0]);
								let g = parseInt(strArr[1]);
								let b = parseInt(strArr[2]);
								// console.log(r + '=>' + g + '=>' + b);
								//定义两个透明度的值
								let a1 = 0;
								let a2 = 0.5;
								//创建两个rgba颜色，用来生成遮罩层的渐变色
								let color1 = `rgba(${r},${g},${b},${a1})`;
								let color2 = `rgba(${r},${g},${b},${a2})`;
								// console.log('颜色1：' + color1);
								// console.log('颜色2：' + color2);
								//圆桌卡片顶部整宽部分背景色设置为图片主色
								box.style.backgroundColor = this.dominant;
								//右侧logo图覆盖两层蒙版，使用以下渐变色规则
								mask1.style.background = 'linear-gradient(to right,' + this.dominant + ' 0%,' + color1 + ' 100%)';
								mask2.style.background = 'linear-gradient(to right,' + color2 + ' 0%,' + color1 + ' 100%)';
								//关注按钮的文字颜色，使用图片主色
								btn.style.color = this.dominant;
							}
						});
					}
				});
			});
			this.axios.get('http://localhost:8080/api/favorite').then(res => {
				console.log(res);
				this.favorites = res.data.data;
			});
			this.axios.get('http://localhost:8080/api/columns').then(res => {
				console.log(res);
				this.columns = res.data.data;
			});
		}
	};
</script>
<style lang="scss" scoped>
	.special-card {
		height: 430px;
		border: 1px solid #eee;
		box-sizing: border-box;
		border-radius: 5px;
		box-shadow: 0 1px 3px 0 rgba(26, 26, 26, 0.1);
		background-color: #fff;

		.card-header {
			height: 50%;

			img {
				width: 100%;
				height: 100%;
				border-top-left-radius: 5px;
				border-top-right-radius: 5px;
			}
		}

		.card-body {
			display: flex;
			justify-content: space-between;
			line-height: 26px;

			.left {
				flex: 0 0 70%;
			}

			.right {
				button {
					width: 102px;
					height: 35px;
				}
			}
		}
	}

	.roundtable-card {
		height: 430px;
		border: 1px solid #eee;
		box-sizing: border-box;
		border-radius: 5px;
		box-shadow: 0 1px 3px 0 rgba(26, 26, 26, 0.1);
		background-color: #fff;
		position: relative;

		.btn-follow-table {
			position: absolute;
			right: 10%;
			top: 40%;
			flex-shrink: 0;
			width: 88px;
			height: 34px;
			background-color: #fff;
			font-size: 14px;
			font-weight: 600;
			border-radius: 3px;
			z-index: 200;
		}

		.card-img-wrapper {
			position: relative;
			width: 100%;
			height: 240px;
			border-top-left-radius: 5px;
			border-top-right-radius: 5px;

			img,
			.mask {
				position: absolute;
				top: 0;
				right: 0;
				width: 240px;
				height: 240px;
				border-top-right-radius: 5px;
			}

			img {
				z-index: 90;
			}

			.mask {
				z-index: 100;
			}
		}

		.info {
			position: absolute;
			top: 15%;
			left: 5%;
			width: 65%;
			color: #fff;
			z-index: 200;
		}

		.content {
			position: absolute;
			left: 5%;
			bottom: 10%;
			line-height: 26px;
		}
	}

	.favorites-card {
		height: 450px;
		border: 1px solid #eee;
		box-sizing: border-box;
		border-radius: 5px;
		box-shadow: 0 1px 3px 0 rgba(26, 26, 26, 0.1);
		background-color: #fff;

		.button {
			width: 130px;
			height: 40px;
		}


	}

	.all {
		width: 150px;
		height: 50px;
		border: 1px solid #eee;
		background-color: #fff;
		color: #8590a6;
		cursor: pointer;
		font-weight: 600;
		border-radius: 50px;
		line-height: 50px;
		text-align: center;
		text-decoration: none;
	}
</style>
