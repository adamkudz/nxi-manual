<template>
	<div class="pageTitle">
		<h2>{{ title }}</h2>
		<hr />
	</div>
</template>

<script>
	export default {
		name: 'PageTitle',
		props: ['title']
	};
</script>

<style lang="scss" scoped>
	.pageTitle {
		font-family: var(--daysFont);
		font-size: 1.3em;
		color: var(--mainYellow);
		text-align: center;
	}
	hr {
		color: var(--mainYellow);
		width: 50%;
		margin: auto;
	}
</style>
