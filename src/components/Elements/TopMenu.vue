<template>
	<div class="TOPMENUCONTAINER">
		<span class="menuLinks" v-for="item in items" :key="item">
			<span @click="$router.push({ name: `${item}` })">{{ item }}</span>
		</span>
		<p class="menuLinks">{{ currentRoute }}</p>
	</div>
</template>

<script>
	export default {
		name: 'TopMenu',
		props: ['currentRoute'],
		data: function () {
			return {
				items: ['Home', 'Pathfinder', 'CAS Messages', 'System Messages']
			};
		},
		methods: {
			test: function () {
				console.log('test');
			}
		}
	};
</script>

<style lang="scss" scoped>
	.TOPMENUCONTAINER {
		width: 100%;
		display: flex;
		justify-content: space-around;
		padding-top: 1em;

		span {
			color: var(--mainYellow);
			font-family: var(--daysFont);
			font-size: 1.3em;
		}
	}

	.menuLinks {
		grid-template-columns: auto;
		color: var(--mainYellow);
		font-family: var(--daysFont);
		font-size: 1.3em;
	}

	#backButton {
		margin-left: 10%;
	}
	#helpButton {
		justify-self: end;
		margin-right: 10%;
	}
</style>
