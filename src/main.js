import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store/store";
import NxiStore from "./store/NxiStore";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  NxiStore,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
