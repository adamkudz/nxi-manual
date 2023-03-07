<template>
	<div class="HOMECONTAINER">
		<div class="noPhoneMessage">
			<h1>
				Not Available for use on Phones. Please use a tablet or desktop.
			</h1>
		</div>
		<!-- <div class="noLaptopMessage">
      <h1>Horizontal Mode Not Currently Supported</h1>
    </div> -->
		<!-- <div class="titleBox">
      <h1 class="smallTitle">Avionics Companion</h1>
      <p>Garmin G1000 NXi</p>
      <br />
      <hr />
    </div> -->
		<AppHeader />

		<div class="messageBox">
			<p>Please choose an option</p>
		</div>
		<div class="OPTIONSCONTAINER">
			<div @click="gotoPathfinder" class="optionBox" id="pathFinderBox">
				<p>Pathfinder</p>
			</div>
			<div @click="gotoCasMessages" class="optionBox" id="casMessagesBox">
				<p>CAS Messages</p>
			</div>
			<div
				@click="gotoSystemMessages"
				class="optionBox"
				id="systemMessagesBox">
				<p>System Messages</p>
			</div>
		</div>
	</div>
</template>

<script>
	// import pfdData from "../static/javascript/pfd";
	import Fuse from 'fuse.js';
	import store from '../store/store';
	import AppHeader from '../components/Elements/AppHeader';
	import PdfView from '../components/PDF/PdfView.vue';
	export default {
		name: 'Home',
		components: {
			AppHeader,
			PdfView,
		},
		data() {
			return {
				searchText: '',
				pfdData: [],
			};
		},

		created: function () {
			this.$store.dispatch('pfdStore/setPfdData', { self: this });
			this.$store.dispatch('SystemMessagesStore/setSystemMessages');
			this.$store.dispatch('CASMessageStore/setCASMessages');
		},
		methods: {
			gotoPathfinder: function () {
				this.$router.push(`/pathfinder`);
			},
			gotoCasMessages: function () {
				this.$router.push(`/casmessages`);
			},
			gotoSystemMessages: function () {
				this.$router.push(`/systemmessages`);
			},
			gotoSimulation: function () {
				this.$router.push(`/simulationview`);
			},
		},
	};
</script>

<style lang="scss" scoped>
	.HOMECONTAINER {
		max-width: 700px;
		margin: auto;
		display: grid;
		grid-template-rows: 20vh 5vh min-content;

		overflow: hidden;
		position: relative;
	}

	.messageBox {
		text-align: center;
		color: var(--lightFont);
		font-size: 0.9em;
		font-style: italic;
	}
	.OPTIONSCONTAINER {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
	}
	.optionBox {
		border: solid var(--colors-yellow5) 2px;

		justify-self: center;
		display: flex;
		border-radius: 7px;
		min-width: 164px;

		justify-content: center;
		align-items: center;
		background: #1a1a19;

		p {
			color: var(--mainYellow);
			padding: 1rem;
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
