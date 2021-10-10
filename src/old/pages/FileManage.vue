<template>
	<div style="background-color: #11111B; padding: var(--main-margin); height: calc( 100vh - var(--main-margin) * 2 ); width: 100%;" class="flex column">
		<div class="flex main-between" style="margin-bottom: var(--main-margin)">
			<i class="iconfont icon-leftop" style="color: #ffffff;"></i>
			<i class="iconfont icon-more" style="color: #ffffff;"></i>
		</div>
		<div class="card flex column main-between">
			<div class="flex main-center" style="color: #DDDDDE; margin-bottom: 16px;">
				<img src="@/assets/ring.png" alt="" style="width: 120px;">
			</div>
			<div class="flex" style="color: #47474A">
				<div class="flex flex-1">
					<div class="flex cross-end">
						<div style="height: 33px;" class="flex cross-center">
							<div class="mark" style="background-color: #47474A; margin-left: 0;"></div>
						</div>
					</div>
					<div style="margin-left: 12px;">
						<div style="font-size: 12px; font-weight: 300;">Total Space</div>
						<div style="color: #FEFEFE; font-size: 24px; font-weight: 900;">256GB</div>
					</div>
				</div>

				<div class="flex flex-1">
					<div class="flex cross-end">
						<div style="height: 33px; flex-direction: row-reverse" class="flex cross-center">
							<div class="mark" style="background-color: #E97C6C;"></div>
							<div class="mark" style="background-color: #39BFAB;"></div>
							<div class="mark" style="background-color: #F0CAEF;"></div>
							<div class="mark" style="background-color: #FABB58; margin-left: 0;"></div>
						</div>
					</div>
					<div style="margin-left: 12px;">
						<div style="font-size: 12px;">Used</div>
						<div style="color: #FEFEFE; font-size: 24px; font-weight: 900;">180GB</div>
					</div>
				</div>
			</div>
		</div>

		<div style="flex-wrap: wrap; width: 100%; margin-top: calc( var(--main-margin) * 3/2 )" class="flex main-between">
			<div v-for="(item, index) in nav" style="width: calc((100% - var(--main-margin)) / 2); margin-bottom: var(--main-margin)">
				<Group :group="item" />
			</div>
		</div>
		
	</div>
</template>


<script>

import Group from "@/components/FileManage/Group"

export default {
	data() {
		return {
			nav: [
				{ url: require("@/assets/folder-purple.png"), name: 'Photos', percentage: '25%', quantity: '4524' },
				{ url: require("@/assets/folder-orange.png"), name: 'Songs', percentage: '75%', quantity: '250' },
				{ url: require("@/assets/folder-cyan.png"), name: 'Videos', percentage: '85%', quantity: '320' },
				{ url: require("@/assets/folder-red.png"), name: 'Document', percentage: '55%', quantity: '1200' },
			],
		}
	},
	components: {
		Group
	}
}
</script>

<style>
.mark { height: 20px; width: 20px; border-radius: 20px; margin-left: -12px; border: 1px solid #282831; }

</style>