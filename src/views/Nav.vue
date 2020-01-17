<template>
	<div>
		<ul class="nav bl-shadow">
			<div class="nav-box">
				<a href="https://www.zhihu.com/">
					<img src="../assets/image/zhihu.png" />
				</a>
				<li class="nav-bar bl-text-color-gray">
					<router-link to="/home">首页</router-link>
				</li>
				<li class="nav-bar bl-text-color-gray">
					<router-link to="/explore">发现</router-link>
				</li>
				<li class="nav-bar bl-text-color-gray">
					<router-link to="/question/waiting">等你来答</router-link>
				</li>
				<div class="nav-bar">
					<input class="search" />
					<img src="../assets/image/search.png" class="search1" />
					<button class="sunmit bl-btn bl-btn-round bl-btn-blue">提问</button>
				</div>
				<li class="nav-bar">
					<img class="infor" src="../assets/image/lingdang_2f.png" />
				</li>
				<li class="nav-bar">
					<img src="../assets/image/ic_talk.png" class="talk"/>
				</li>
				<li class="nav-bar">
					<router-link to="/login">
						<img src="../assets/image/11.jpg" class="bl-user-avatar bl-circle-avatar login"/>
					</router-link>
				</li>
			</div>	
		</ul>
		<!-- 二级路由入口 -->
		<router-view />
	</div>
</template>

<script>
	export default {
		name: 'nav',
		data() {
			return {};
		},
		created() {}
	}
</script>

<style lang="scss" scoped>
	.nav {
		width: 100%;
		height: 60px;
		position: fixed;
		top: 0;
		left: 0;
		background-color: rgb(255,255,255);
		z-index: 999;
	}
	.nav-box{
		width: 70%;
		margin: 0 auto;
		height: 50px;		
}
	.nav-bar {
		position: relative;
		top: -30px;
		margin-left: 30px;
		display: inline-block;
	}
	.router-link-active {
		font-weight: bold;
		color: black;
		border-bottom: 2px solid #000000;
	}
	.search1{
		position: relative;
		left: -30px;
		top: 5px;
	}
	.infor{
		position: relative;
		margin-left: 30px;
	}
	.search{
		border: 0.5px solid darkgrey;
		width: 410px;
		height: 40px;
		border-radius: 3%;
		background-color: rgb(246, 246, 246);
	}
	.sunmit{
		margin-left: 15px;
		height: 40px;
		width: 70px;
	}
	.login{
		position: relative;
		top: 20px;
	}
	.talk{
		position: relative;
		top: 10px;
	}
</style>
