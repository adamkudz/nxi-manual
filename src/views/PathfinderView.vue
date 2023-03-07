<template>
	<div class="PATHFINDERCONTAINER">
		<header>
			<div class="searchContainer">
				<PageTitle :title="title" />
			</div>
		</header>
		<div class="searchBox">
			<div class="searchItems">
				<input
					v-model="searchText"
					type="text"
					placeholder="Search for path, .eg 'traffic'"
					v-focus />
			</div>
		</div>

		<div v-if="searchText" class="resultsContainer">
			<div
				@click="getPath"
				:id="results.id"
				class="resultsItems"
				v-for="results in searchResults"
				:key="results.id">
				<BaseBezelItem :results="results" />
			</div>
		</div>
		<div v-else class="resultsContainer">
			<div
				@click="getPath"
				:id="results.id"
				class="resultsItems"
				v-for="results in pfdData"
				:key="results.id">
				<BaseBezelItem :results="results" />
			</div>
		</div>
	</div>
</template>

<script>
	// import pfdData from "../static/javascript/pfd";
	import Fuse from 'fuse.js';
	import store from '../store/store';
	import PageTitle from '../components/Elements/PageTitle';
	import TopMenu from '../components/Elements/TopMenu';
	import BaseBezelItem from '../components/Lists/BaseBezelItem';

	export default {
		name: 'Pathfinder',

		components: {
			PageTitle,
			TopMenu,
			BaseBezelItem,
		},
		data() {
			return {
				title: 'PathFinder',
				searchText: '',
				pfdData: '',
			};
		},
		// filters: {
		//   limitLength: function(value) {
		//     if (value.length > 150) {
		//       return value.toString().slice(0, 150) + "...";
		//     } else {
		//       return value;
		//     }
		//   },
		// },
		directives: {
			focus: {
				inserted: function (input) {
					input.focus();
				},
			},
		},
		created: function () {
			this.pfdData = this.$store.getters['pfdStore/getPfdData'];
		},
		methods: {
			// goBack: function() {
			//   console.log(this.$router.go(-1));
			// },
			// getHelp: function() {
			//   console.log("get help");
			// },
			getPath: function (e) {
				this.$store.dispatch('pfdStore/setSelected', e.target.id);

				this.$router.push(`/path2`);
			},
			getInfo: function (e) {
				this.$store.dispatch(
					'pfdStore/setSelected',
					e.target.dataset.pathid
				);
				this.$router.push(`/info/${e.target.dataset.pathid}`);
			},
			setPfdData: function () {
				this.pfdData = this.$store.getters['pfdStore/getPfdData'];
			},
			simulate: function () {
				this.$router.push('/simulate');
			},
		},
		computed: {
			searchResults: function () {
				const options = {
					tokenize: true,
					matchAllTokens: true,
					includeScore: false,
					shouldSort: true,
					maxPatternLength: 4,
					minMatchCharLength: 1,
					findAllMatches: false,
					keys: ['desc', 'buttonName'],
					location: 0,
					threshold: 0.3,
					distance: 3,
				};
				const fuse = new Fuse(this.pfdData, options);
				return fuse.search(this.searchText);
			},
		},
	};
</script>

<style lang="scss" scoped>
	.PATHFINDERCONTAINER {
		width: 100%;
		height: 100vh;
		max-width: 800px;
		margin: auto;
		display: grid;
		grid-template-rows: 10vh min-content 1fr;

		overflow-y: hidden;
		position: relative;
	}

	.titleText {
		font-size: 66px;
	}
	.smallTitle {
		font-size: 49px;
		text-align: center;
	}
	hr {
		border: 1px solid var(--lightWhite);
	}

	.searchContainer {
		height: 100%;
		width: 100%;

		h2 {
			text-align: center;
			font-family: var(--daysFont);
			color: var(--mainYellow);
		}
	}
	.resultsContainer {
		overflow-y: scroll;
		padding-top: 1rem;
		padding-bottom: 2rem;
		display: grid;
		grid-template-columns: auto;
		gap: 0.5rem;
		margin-bottom: 100px;
		margin-top: 2rem;
		border: 1px solid var(--colors-yellow6);
		border-radius: 7px;
	}

	.resultsItems {
		margin: 0 1rem;
	}

	.searchBox {
		margin: 2rem;
	}
	.searchItems {
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;

		p {
			color: var(--brightWhite);
			font-size: 1.3em;
			padding: 1em;

			letter-spacing: 1px;
			font-weight: 200;
		}
		input {
			width: 329px;
			height: 35px;
			border-top: none;
			border-left: none;
			border-right: none;

			font-size: 1.3em;
			padding: 0.3em;
			background: transparent;
			color: white;
			text-align: center;
		}
	}

	.noPhoneMessage {
		height: 100vh;
		width: 100vw;
		background: black;
		color: white;
		display: none;
		justify-content: center;
		align-items: center;
		position: absolute;
		top: 0;
		left: 0;
		padding: 10%;
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
			padding: 10%;
		}
	}
</style>
