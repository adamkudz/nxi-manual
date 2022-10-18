<template>
	<div class="PATH2CONTAINER">
		<div v-if="showPDF" class="pdfContainer">
			<PDFComponent @togglePDF="togglePDF" :selected="selected" />
		</div>

		<PageTitle :title="title" />

		<div class="featureDescription">
			<DescriptionWithLabel :selected="selected" :count="count" />
		</div>

		<div
			v-for="(bezelKey, index) in selectionArray"
			:key="bezelKey.index"
			class="bezelRows"
		>
			<PathBezelRow
				@selectCurrentKey="selectCurrentKey"
				:bezelKey="selectionArray[index]"
				:count="count"
				:highlighted="highlightArray[index]"
				:selected="selected"
				class="row"
			/>
		</div>
		<div v-if="displayDescription" class="buttonContainer">
			<button v-if="selected.ref" class="navButton" @click="togglePDF">
				See Docs
			</button>
			<button class="navButton" @click="searchAgain">Search Again</button>
		</div>
	</div>
</template>

<script>
	import PathBezelRow from '../components/PathBezelRow.vue';
	import pfdBezelRow from '../components/PFDComponents/pfdBezelRow.vue';
	import DescriptionWithLabel from '../components/DescriptionWithLabel';

	import PageTitle from '../components/Elements/PageTitle';
	import TopMenu from '../components/Elements/TopMenu';

	export default {
		name: 'Pathfinder',

		components: {
			PathBezelRow,
			DescriptionWithLabel,

			pfdBezelRow,
			PageTitle,
			TopMenu
		},
		data() {
			return {
				title: 'PathFinder',
				selectionArray:
					this.$store.getters['pfdStore/getSelectionArray'],
				highlightArray:
					this.$store.getters['pfdStore/getHighlightArray'],
				selected: this.$store.getters['pfdStore/getSelected'],
				count: 0,
				displayDescription: false,
				showPDF: false
			};
		},
		mounted() {},
		methods: {
			countUp: function () {
				this.count++;
			},
			countDown: function () {
				this.count--;
			},
			selectCurrentKey(payload) {
				if (payload) {
					this.count++;
				} else {
					this.displayDescription = true;
				}
			},
			searchAgain: function () {
				this.$router.push('/pathfinder');
			},
			goSimulate: function () {
				this.$router.push('/simulationview');
			},
			showFullPath: function () {
				this.count = 5;
				this.displayDescription = true;
			},
			togglePDF: function () {
				this.showPDF = !this.showPDF;
			}
		}
	};
</script>

<style lang="scss" scoped>
	/* Portrait */
	.PATH2CONTAINER {
		height: 100vh;
		width: 100vw;
		max-width: 1000px;
		color: var(--lightWhite);
	}
	header {
		text-align: center;

		button {
			margin-top: 1em;
		}
	}
	.pdfContainer {
		width: 100%;
		height: 100%;
		position: absolute;
		background: #2c2a2a;
		padding: 2em;
	}
	.featureDescription {
		padding: 20px;
		max-width: 900px;
		margin: auto;
	}
	.bezelRows {
		margin: auto;
		width: 100%;
		display: grid;
		grid-gap: 2em;
		padding-bottom: 20px;
		padding-top: 20px;
		grid-auto-rows: 10vh;
		max-width: 900px;
		// background: url("../assets/PFD-Bezel-Row.svg") no-repeat;
		// background-size: contain;
	}
	.buttonContainer {
		width: 100%;
		display: grid;
		grid-gap: 1.3em;
		grid-template-rows: 1fr 1fr;
		place-content: center;
		padding-top: 2em;
	}
	.fullPathButton {
		text-align: center;
		margin-top: 1em;
	}

	@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1) {
		.TESTCOMPONENTCONTAINER {
			height: 100vh;
			width: 100vw;
			color: var(--lightWhite);
		}
		.bezelRows {
			margin: auto;
			width: 100%;
			display: grid;
			grid-gap: 2em;
			padding-bottom: 10px;
			padding-top: 10px;
			grid-auto-rows: 10vh;

			max-width: 900px;
		}
		header {
			text-align: center;

			button {
				margin-top: 0.5em;
			}
		}
		.buttonContainer {
			width: 100%;
			display: grid;
			grid-gap: 1.3em;
			grid-template-rows: 1fr 1fr;
			place-content: center;
			padding-top: 1em;
		}
		.pdfContainer {
			width: 100%;
			height: 100%;
			position: absolute;
			background: #2c2a2a;
			padding: 2em;
		}
		.featureDescription {
			padding: 20px;
			max-width: 700px;
			margin: auto;
		}
	}
	/* ----------- iPad Pro 10.5" ----------- */

	/* Portrait and Landscape */
	@media only screen and (min-device-width: 834px) and (max-device-width: 1112px) and (-webkit-min-device-pixel-ratio: 2) {
	}

	/* Portrait */
	/* Declare the same value for min- and max-width to avoid colliding with desktops */
	/* Source: https://medium.com/connect-the-dots/css-media-queries-for-ipad-pro-8cad10e17106*/
	@media only screen and (min-device-width: 834px) and (max-device-width: 834px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 2) {
	}

	/* Landscape */
	/* Declare the same value for min- and max-width to avoid colliding with desktops */
	/* Source: https://medium.com/connect-the-dots/css-media-queries-for-ipad-pro-8cad10e17106*/
	@media only screen and (min-device-width: 1112px) and (max-device-width: 1112px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 2) {
		.TESTCOMPONENTCONTAINER {
			height: 100vh;
			width: 100vw;
			color: var(--lightWhite);
		}
		.bezelRows {
			margin: auto;
			width: 100%;
			display: grid;
			grid-gap: 2em;
			padding-bottom: 10px;
			padding-top: 10px;
			grid-auto-rows: 10vh;

			max-width: 900px;
		}
		header {
			text-align: center;

			button {
				margin-top: 0.5em;
			}
		}
		.buttonContainer {
			width: 100%;
			display: grid;
			grid-gap: 1.3em;
			grid-template-rows: 1fr 1fr;
			place-content: center;
			padding-top: 1em;
		}
		.pdfContainer {
			width: 100%;
			height: 100%;
			position: absolute;
			background: #2c2a2a;
			padding: 2em;
		}
		.featureDescription {
			padding: 20px;
			max-width: 700px;
			margin: auto;
		}
	}
	/* ----------- iPad Pro 12.9" ----------- */

	/* Portrait and Landscape */
	@media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) and (-webkit-min-device-pixel-ratio: 2) {
		.featureDescription {
			padding: 20px;
			max-width: 900px;
			margin: auto;
		}
	}

	/* Portrait */
	/* Declare the same value for min- and max-width to avoid colliding with desktops */
	/* Source: https://medium.com/connect-the-dots/css-media-queries-for-ipad-pro-8cad10e17106*/
	@media only screen and (min-device-width: 1024px) and (max-device-width: 1024px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 2) {
	}

	/* Landscape */
	/* Declare the same value for min- and max-width to avoid colliding with desktops */
	/* Source: https://medium.com/connect-the-dots/css-media-queries-for-ipad-pro-8cad10e17106*/
	@media only screen and (min-device-width: 1366px) and (max-device-width: 1366px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 2) {
		.featureDescription {
			padding: 20px;
			max-width: 700px;
			margin: auto;
		}
		.bezelRows {
			margin: auto;
			width: 100%;
			display: grid;
			grid-gap: 2em;
			padding-bottom: 10px;
			padding-top: 10px;
			grid-auto-rows: 10vh;

			max-width: 900px;
		}
	}

	/*LAPTOPS */
	/* ----------- Non-Retina Screens ----------- */
	@media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1) {
		.featureDescription {
			padding: 20px;
			max-width: 900px;
			margin: auto;
		}
		.bezelRows {
			margin: auto;
			width: 100%;
			display: grid;
			grid-gap: 2em;
			padding-bottom: 10px;
			padding-top: 10px;
			grid-auto-rows: 10vh;

			max-width: 1100px;
		}
	}

	/* ----------- Retina Screens ----------- */
	@media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 2) and (min-resolution: 192dpi) {
		.featureDescription {
			padding: 20px;
			max-width: 700px;
			margin: auto;
		}
		.bezelRows {
			margin: auto;
			width: 100%;
			display: grid;
			grid-gap: 2em;
			padding-bottom: 10px;
			padding-top: 10px;
			grid-auto-rows: 10vh;

			max-width: 900px;
		}
	}
</style>
