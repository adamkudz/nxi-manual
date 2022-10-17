<template>
	<div class="TOPMENUCONTAINER">
		<div class="menuBox">
			<span v-for="item in items" :key="item">
				<span
					:class="
						currentRoute === item.replace(' ', '')
							? 'currentLink'
							: 'menuLink'
					"
					@click="$router.push({ name: `${item.replace(' ', '')}` })"
					>{{ item }}</span
				>
			</span>
		</div>
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
		width: 100vw;

		background-color: var(--bgGradDark);
		.menuBox {
			display: flex;
			justify-content: space-around;
			max-width: 1000px;
			margin: 1.3rem auto;
		}
	}
	c #backButton {
		margin-left: 10%;
	}
	#helpButton {
		justify-self: end;
		margin-right: 10%;
	}

	.currentLink {
		color: var(--brightWhite);
		font-family: var(--mainFont);
		font-size: larger;
		font-style: italic;
	}

	.menuLink {
		color: var(--mainYellow);
		font-family: var(--mainFont);
		font-size: larger;
	}
</style>
