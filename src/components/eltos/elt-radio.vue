<template>
	<div>
		<input id="radio" type="radio" name="gender" value="1" style="display: none" />
		<label for="radio" >
			<div class="el-radio">o</div>
			<div>0111</div>
		</label>
		<div></div>
		<input id="radio1" type="radio" name="gender" value="1" style="display: none" />
		<label for="radio1" class="el-radio">222</label>
	</div>
</template>

<script>
export default {
	data() {
		return { }
	},
	mounted() { },
	components: { },
	methods: { }
}
</script>

<style>
.el-radio { width: 12px; height: 12px; background-color: #6cf; }
input[type="radio"]:checked + .el-radio {
  background-color: var(--primary);
}

/* .eel {  }
input[type="radio"]:checked + .eel {
  background-color: var(--primary);
} */
</style>