import Vue from "vue";

import App from "./App.vue";

import router from "./router/index.es6";
import store from "./store/index.es6";

import "../css/style.scss";

new Vue({
    el: "#root",
    router,
    store,
    render: h => h(App)
});