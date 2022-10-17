import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import PathfinderView from '../views/PathfinderView';
import Path2 from '../views/Path2.vue';
import SimulationView from '../views/SimulationView.vue';
import viewpdf from '../views/viewpdf.vue';
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
		path: '/viewpdf',
		name: 'viewpdf',
		component: viewpdf
	},
	{
		path: '/casmessages',
		name: 'CAS Messages',
		component: CasMessagesView
	},
	{
		path: '/systemmessages',
		name: 'System Messages',
		component: SystemMessagesView
	}
];

const router = new VueRouter({
	base: process.env.BASE_URL,
	mode: 'history',
	routes
});

export default router;
