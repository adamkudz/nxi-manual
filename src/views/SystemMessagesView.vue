<template>
	<div class="SYSTEMMESSAGESCONTAINER">
		<div class="noPhoneMessage">
			<h1>
				Not Available for use on Phones. Please use a tablet or desktop.
			</h1>
		</div>

		<PageTitle :title="title" />
		<div class="searchContainer">
			<div class="searchBox">
				<div class="searchItems">
					<input
						v-focus
						v-model="searchText"
						type="text"
						placeholder="Search System Messages"
					/>
				</div>
			</div>
		</div>

		<div v-if="searchText" class="resultsContainer">
			<div
				:id="searchResults.id"
				class="resultsItems"
				v-for="(results, index) in searchResults"
				:key="index"
				ref="list"
			>
				<BaseSystemItem :results="results" />
			</div>
		</div>
	</div>
</template>

<script>
	import Fuse from 'fuse.js';
	import store from '../store/store';
	import PageTitle from '../components/Elements/PageTitle';
	import TopMenu from '../components/Elements/TopMenu';
	import BaseSystemItem from '../components/Lists/BaseSystemItem';

	export default {
		name: 'SystemMessages',

		components: {
			PageTitle,
			TopMenu,
			BaseSystemItem
		},
		data() {
			return {
				title: 'System Messages',
				searchText: '',
				systemMessages: ''
			};
		},

		directives: {
			focus: {
				inserted: function (input) {
					input.focus();
				}
			}
		},
		mounted: function () {
			this.systemMessages =
				this.$store.getters['SystemMessagesStore/getSystemMessages'];
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
					keys: ['message'],
					location: 0,
					threshold: 0.3,
					distance: 3
				};
				const fuse = new Fuse(this.systemMessages, options);
				return fuse.search(this.searchText);
			}
		}
	};
</script>

<style lang="scss" scoped>
	.SYSTEMMESSAGESCONTAINER {
		height: 100vh;
		width: 100vw;
		display: grid;
		gap: 30px;
		grid-template-rows: min-content min-content min-content 1fr;
		overflow-y: hidden;
		position: relative;
	}
	.titleBox {
		font-family: var(--daysFont);
		color: var(--mainYellow);
		margin: auto;
		p {
			text-align: center;
			font-family: var(--mainFont);
			margin-top: 10px;
			font-size: 25px;

			color: hsla(88, 87%, 60%, 0.9);
		}
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
		place-content: center;
		margin-top: 10px;
	}

	.resultsContainer {
		overflow-y: scroll;
		overflow-x: hidden;
		width: 95%;
		margin: auto;
	}
	.resultsItems {
		margin-top: 1em;
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
			border-bottom: #e0e0e0 solid 1px;
			font-size: 1.3em;
			padding: 0.3em;
			background: transparent;
			color: white;
		}
	}

	.resultsDesc {
		align-self: center;
		justify-self: center;
		font-size: 0.85em;
		color: var(--lightWhite);
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
