<template>
	<div id="head" class="flex column main-center head-card" style=" ">
		<div class="title">{{title}}</div>
		<div class="intro">{{intro}}</div>
  </div>
</template>

<script>
export default {
	props: {
		title: { type: String, default: '' },
		intro: { type: String, default: '' },
	},
	data() {
		return { }
	},
	mounted() { },
	components: { },
	methods: { }
}
</script>

<style>

.head-card { height: 120px; background-color: #0050b3; margin: -16px -16px 0 -16px; padding: 16px 16px; }
.head-card .title { font-size: var(--h1); color: #ffffff;}
.head-card .intro { color: #ffffff; margin-top: 12px; font-size: 15px; }
/* font-size: 40px; color: #ffffff; */
</style>