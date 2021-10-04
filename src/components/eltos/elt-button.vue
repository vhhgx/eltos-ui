<template>
	<div>
		<button class="el-button" :class="{ 'el-primary': type == 'light', 'el-primary': type == 'primary', 'el-error': type == 'error', 'el-warning': type == 'warning', 'el-round': !!round }">
			<slot>{{text}}</slot>
		</button>


		<!-- <button class="el-button" style="border: 1px solid #E4E4EB; background-color: #ffff ; color: #000;">普通线框</button> -->
		<button class="el-button" style="background-color: #00000000; color: var(--info);">普通线框</button>
	</div>
</template>

<script>
export default {
	props: {
		text: { type: String, default: "普通按钮" },
		type: { type: String, default: "primary" },
		round: { type: Boolean, default: false },
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
.el-button { outline: none; border: none; height: 38px; border-radius: 8px; padding: 4px 20px;  }
.el-primary { background-color: var(--primary); color: var(--white);}
.el-error { background-color: var(--error); color: var(--white);}
.el-warning { background-color: var(--warning); color: var(--white);}
.el-light { background-color: var(--light); color: var(--primary-info); }


.el-round { border-radius: 20px; }
</style>