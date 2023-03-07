<template>
	<div id="app">
		<TopMenu class="nav" :currentRoute="currentRoute" />
		<div class="noPhoneMessage"></div>
		<transition name="fade" mode="out-in"
			><router-view></router-view
		></transition>
		<div class="footer">
			<div>
				<p>footer</p>
			</div>
		</div>
	</div>
</template>

<script>
	import AppHeader from '../src/components/Elements/AppHeader';
	import TopMenu from './components/Elements/TopMenu.vue';
	export default {
		name: 'App',
		components: {
			AppHeader,
			TopMenu,
		},
		computed: {
			currentRoute: function () {
				return this.$route.name;
			},
		},
	};
</script>

<style lang="scss">
	:root {
		--colors-amber1: #1f1300;
		--colors-amber2: #271700;
		--colors-amber3: #341c00;
		--colors-amber4: #3f2200;
		--colors-amber5: #4a2900;
		--colors-amber6: #573300;
		--colors-amber7: #693f05;
		--colors-amber8: #824e00;
		--colors-amber9: #ffb224;
		--colors-amber10: #ffcb47;
		--colors-amber11: #f1a10d;
		--colors-yellow1: #1c1500;
		--colors-yellow2: #221a00;
		--colors-yellow3: #2c2100;
		--colors-yellow4: #352800;
		--colors-yellow5: #3e3000;
		--colors-yellow6: #493c00;
		--colors-yellow7: #594a05;
		--colors-yellow8: #705e00;
		--colors-yellow9: #f5d90a;
		--colors-yellow10: #ffef5c;
		--colors-yellow11: #f0c000;

		--mainFont: 'Open Sans';
		--backupFont: 'Open Sans';
		// --cautionText: #f6e700;
		--maxWidth: 800px;
		--bezelGreen: #80ff6a;
		--bgGradLight: #4d5c80;
		--bgGradDark: #181816;
		--lightWhite: #c3c3c3;
		--brightWhite: #f8f8f8;
		--mainGreen: #53ee5e;
		--darkGreen: #3ab142;
		--lightFont: #e4e4e4;
		--labelDeselected: #8a8a8a;
		--bezelLightOff: #e9ffff;
		--daysFont: 'Oswald', sans-serif;
		--mainYellow: var(--colors-yellow10);
		--max-width: 500px;
		--cautionText: var(--mainYellow);
	}
	html {
		font-family: 'Open Sans';

		font-size: 16px;
		word-spacing: 1px;
		-ms-text-size-adjust: 100%;
		-webkit-text-size-adjust: 100%;
		-moz-osx-font-smoothing: grayscale;
		-webkit-font-smoothing: antialiased;
		box-sizing: border-box;
		overflow-y: hidden;
		background-color: var(--bgGradDark);
	}

	*,
	*:before,
	*:after {
		box-sizing: border-box;
		margin: 0;
	}

	h1 {
		font-family: var(--daysFont);
	}

	.navButton {
		width: 200px;

		border: var(--darkGreen) solid 1px;
		border-radius: 20px;
		line-height: 1.7;
		background: black;
		color: var(--lightFont);

		font-size: 1.1em;
		text-align: center;
		font-family: 'Segoe UI';
	}
	.bezelRowCover {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 2;
	}
	.bezelLabelBackground {
		background: url('./assets/singleLabel.svg') no-repeat;
		background-size: 70%;
		background-position: center;
		p {
			padding: 10px;
			text-align: center;
			color: var(--brightWhite);
		}
	}
	.notForPhone {
		width: 100vw;
		height: 100vh;
		background: black;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 50;
	}
	.pageOutline {
		height: 97%;
		width: 97%;
		border: solid var(--mainYellow) 2px;
		border-radius: 10px;
		background: transparent;
		position: absolute;
		margin-left: 1.5%;
		margin-top: 1.5%;
		z-index: -1;
	}
	.main {
		max-width: var(--maxWidth);
	}
	.nav {
		margin-bottom: 2rem;
	}

	@media screen and (max-width: 700px) {
		.noPhoneMessage {
			height: 100vh;
			width: 100vw;
			background: black;
			color: white;
			display: flex;
			justify-content: center;
			align-items: center;
			position: absolute;
			top: 0;
			left: 0;
			z-index: 50;
			padding: 10%;
		}
	}
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 0.3s;
	}

	.fade-enter-from,
	.fade-leave-to {
		opacity: 0;
	}
</style>
