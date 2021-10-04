<template>
	<div class="el-space">
		<div class="el-label-area">
			<label for="input" class="el-label">{{title}}</label>
		</div>
		<input id="input" :type="type" :class="[{ 'el-input-error': isCorrect }, 'el-input']" :placeholder="holder">
	</div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
		title: { type: String, default: '' },
		holder: { type: String, default: '' },
		type: { type: String, default: 'text' },
		isCorrect: { type: Boolean, default: false }
  },
  methods: {
    
  },
};
</script>

<style>
.el-space { display: flex; flex-direction: column; margin: 12px 0;}
.el-space .el-label-area { margin-bottom: 6px; }
.el-space .el-label { font-size: 12px; color: var(--text); }
/* 普通状态 */
.el-input { border: 1px solid var(--border); height: 28px; border-radius: 8px; width: auto; padding: 4px 12px; color: var(--text); display: flex; }
/* 激活状态 */
.el-input:focus { outline: none; border: 1px solid var(--primary-light); background-color: var(primary-border); }
/* 错误状态 */
.el-input-error { border: 1px solid var(--error); background-color: var(--error-light); }
/* 预输入 */
::-webkit-input-placeholder { color: var(--info); }
</style>