<template>
	<div class="card flex column">
		<div class="flex main-between">
			<img :src="group.url" alt="" style="width: 54px;">
			<div class="flex main-between">
				<i class="iconfont icon-more" style="color: #A1A09E"></i>
			</div>
		</div>
		
		<span style="color: #FEFEFE; font-weight: 900; margin-top: 16px;">{{group.name}}</span>
		<span style="font-size: 12px; font-weight: 300; color: #47474A; margin-top: 4px;">{{group.quantity}}</span>
		<span style="color: #FEFEFE; margin-top: 4px;">{{group.percentage}}</span>
		<div style="background-color: #11111B; width: 100%; height: 8px; margin-top: 12px; border-radius: 6px;">
			<div :style="{ 'width': group.percentage}" style="background-color: #39BFAB; height: 8px; border-radius: 6px;"></div>
		</div>
	</div>
</template>

<script> 
export default {
	props: {
		group: {
			type: Object,
		}
	}
}
</script>

<style>
.card { background-color: #282831; border-radius: var(--main-margin); padding: var(--main-margin); }
</style>