<template>
	<div>
		<button @click="$emit('buttonClick')" class="el-button" :class="{ 'el-button-text': type == 'text', 'el-button-light': type == 'light', 'el-button-pri': type == 'primary', 'el-button-err': type == 'error', 'el-button-warn': type == 'warn', 'el-button-round': !!round }">
			<slot>{{text}}</slot>
		</button>
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
.el-button-pri { background-color: var(--primary); color: var(--white);}
.el-button-err { background-color: var(--error); color: var(--white);}
.el-button-warn { background-color: var(--warning); color: var(--white);}
.el-button-light { background-color: var(--light); color: var(--primary-info); }
.el-button-text { background-color: #00000000; color: var(--info); }
.el-button-line { border: 1px solid #E4E4EB; background-color: #ffff ; color: #000; }
.el-button-round { border-radius: 20px; }
</style>