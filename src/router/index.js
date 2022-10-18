import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import PathfinderView from '../views/PathfinderView';
import Path2 from '../views/Path2.vue';
import SimulationView from '../views/SimulationView.vue';
import PdfView from '../components/PDF/PdfView.vue';
import CasMessagesView from '../views/CasMessagesView';
import SystemMessagesView from '../views/SystemMessagesView';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/pathfinder',
		name: 'Pathfinder',
		component: PathfinderView
	},

	{
		path: '/path2',
		name: 'Path2',
		component: Path2
	},

	{
		path: '/simulationview',
		name: 'SimulationView',
		component: SimulationView
	},
	{
		path: '/pdfview',
		name: 'PdfView',
		component: PdfView
	},
	{
		path: '/casmessages',
		name: 'CASMessages',
		component: CasMessagesView
	},
	{
		path: '/systemmessages',
		name: 'SystemMessages',
		component: SystemMessagesView
	}
];

const router = new VueRouter({
	base: process.env.BASE_URL,
	mode: 'hash',
	routes
});

export default router;
