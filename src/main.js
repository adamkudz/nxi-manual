import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store/store';
import NxiStore from './store/NxiStore';

Vue.config.productionTip = false;
Vue.filter('limitLength', function (value) {
	if (value.length > 110) {
		return value.toString().slice(0, 110) + '...';
	} else {
		return value;
	}
});

Vue.directive('focus', {
	inserted: function (el) {
		el.focus();
	}
});

new Vue({
	router,
	store,
	NxiStore,
	render: function (h) {
		return h(App);
	}
}).$mount('#app');
