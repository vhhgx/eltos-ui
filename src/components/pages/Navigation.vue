<template>
	<div id="head" class="navi-card flex column" style="">
		<div class="flex cross-center">
			<i class="iconfont" style="font-size: 18px" @click="back">&#xe748;</i>
			<span class="title">{{title}}</span>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		title: { type: String, default: '' },
	},
	methods: {
		back() { this.$router.go(-1) }
	}
}
</script>

<style>
.navi-card { background-color: var(--bgcolor); margin: -16px -16px 0 -16px; padding: var(--padding); color: var(--white); }
.navi-card .title { margin-left: 12px; }
</style>