import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store/store";
import RowStore from "./store/rowStore";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  RowStore,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
