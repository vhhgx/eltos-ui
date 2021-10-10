<template>
	<div style="background-color: #11111B; padding: var(--main-margin); height: calc( 100vh - var(--main-margin) * 2 ); width: 100%;" class="flex column">
		<div class="flex main-between cross-center">
			<i class="iconfont icon-back" style="color: #ffffff; font-size: 30px;"></i>
			<img src="https://cdn.vhhg.site/images/avatar.png" alt="" style="width: 36px; height: 36px; border-radius: 30px;">
		</div>

		<div style="margin-top: calc( var(--main-margin) * 3/2 )">
			<div style="color: #FEFEFE; font-size: 24px; font-weight: 900;">Favorite</div>
		</div>

		<div class="flex" style="margin-top: calc( var(--main-margin) * 3/2 );">
			<div class="card flex column flex-1">
				<span style="color: #FEFEFE; font-weight: 900;">Photos</span>
				<span style="font-size: 12px; font-weight: 300; color: #78777A; margin-top: 4px;">4,524 Files</span>
				<div style="margin-left: 8px; margin-top: 12px;" class="flex cross-center">
					<div class="mark" style="background-color: #E97C6C;"></div>
					<div class="mark" style="background-color: #39BFAB;"></div>
					<div class="mark" style="background-color: #F0CAEF;"></div>
				</div>
			</div>

			<div class="card flex column flex-1" style="margin-left: var(--main-margin)">
				<span style="color: #FEFEFE; font-weight: 900;">Videos</span>
				<span style="font-size: 12px; font-weight: 300; color: #78777A; margin-top: 4px;">190 Files</span>
				<div style="margin-left: 8px; margin-top: 12px;" class="flex cross-center">
					<div class="mark" style="background-color: #E97C6C;"></div>
					<div class="mark" style="background-color: #FABB58;"></div>
					<div class="mark" style="background-color: #F0CAEF;"></div>
				</div>
			</div>
		</div>

		<div class="flex main-between" style="margin-top: calc( var(--main-margin) * 3/2 );">
			<div style="color: #FEFEFE; font-size: 24px; font-weight: 900;">My Folders</div>
			<div class="flex center" style="width: 32px; height: 32px; border-radius: 32px; background-color: #FABB58; font-weight: 700;">
				<i class="iconfont icon-increase" style="color: #11111B; font-size: 20px;"></i>
			</div>
		</div>

		<div class="flex main-between" style="margin-top: calc( var(--main-margin) * 3/2 );">
			
		</div>

		
	</div>
</template>

<script>
export default {
	
}
</script>

<style>
.card { background-color: #282831; border-radius: var(--main-margin); padding: var(--main-margin); }
.mark { height: 20px; width: 20px; border-radius: 20px; margin-left: -8px; border: 1px solid #282831; }
</style>