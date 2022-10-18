<template>
	<div class="CASMESSAGESCONTAINER">
		<PageTitle :title="title" />
		<MasterWarningAndCaution
			@toggleWarning="toggleWarning"
			@toggleCaution="toggleCaution"
		/>
		<div class="searchContainer">
			<div class="searchBox">
				<div class="searchItems">
					<input
						v-model="searchText"
						type="text"
						placeholder="Search CAS Messages"
						v-focus
					/>
				</div>
			</div>
		</div>
		<div v-if="!searchText && showWarnings" class="messageList">
			<div v-for="(warnings, index) in warningMessages" :key="index">
				<BaseCasItem class="warningList" :results="warnings" />
			</div>
		</div>
		<div v-if="!searchText && showCautions" class="messageList">
			<div v-for="(cautions, index) in cautionMessages" :key="index">
				<BaseCasItem class="warningList" :results="cautions" />
			</div>
		</div>
		<div v-if="searchText" class="resultsContainer">
			<div
				:id="searchResults.id"
				class="warningList"
				v-for="(results, index) in searchResults"
				:key="index"
				ref="list"
			>
				<BaseCasItem :results="results" />
			</div>
		</div>
	</div>
</template>

<script>
	import store from '../store/store';
	import MasterWarningAndCaution from '../components/Elements/MasterWarningAndCaution';
	import PageTitle from '../components/Elements/PageTitle';
	import TopMenu from '../components/Elements/TopMenu';
	import BaseCasItem from '../components/Lists/BaseCasItem';

	export default {
		name: 'CASMessages',

		components: {
			MasterWarningAndCaution,
			PageTitle,
			TopMenu,
			BaseCasItem
		},
		data() {
			return {
				title: 'CAS Messages',
				searchText: '',
				cautionMessages: '',
				warningMessages: '',
				allMessages: '',
				showWarnings: false,
				showCautions: true
			};
		},
		methods: {
			toggleWarning: function () {
				this.showWarnings = true;
				this.showCautions = false;
			},
			toggleCaution: function () {
				this.showWarnings = false;
				this.showCautions = true;
			}
		},

		mounted: function () {
			this.warningMessages =
				this.$store.getters['CASMessageStore/getWarningMessages'];
			this.cautionMessages =
				this.$store.getters['CASMessageStore/getCautionMessages'];
			this.allMessages = this.cautionMessages.concat(
				this.warningMessages
			);
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
				const fuse = new Fuse(this.allMessages, options);
				return fuse.search(this.searchText);
			}
		}
	};
</script>

<style lang="scss" scoped>
	.CASMESSAGESCONTAINER {
		height: 100vh;
		width: 100vw;
		display: grid;
		gap: 30px;
		grid-template-rows: min-content min-content min-content 1fr;
		overflow-x: scroll;
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
	.messageList {
		overflow-y: scroll;
		overflow-x: hidden;
	}

	.warningList {
		width: 90%;
		margin-left: 5%;
		margin-bottom: 0.5em;
	}

	.searchContainer {
		height: 100%;
		width: 100%;
		place-content: center;
		margin-top: 10px;
	}
	.buttons {
		text-align: center;
		margin-bottom: 2em;
		height: 10vh;
		display: grid;
		grid-template-rows: 1fr 2fr;
		button {
			height: 50px;
			justify-self: center;
		}
		h3 {
			color: var(--lightWhite);
			font-style: italic;
		}
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
