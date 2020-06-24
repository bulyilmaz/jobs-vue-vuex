import Vue from "vue";
import Vuex from "vuex";

import * as getters from "./getters.es6";
import * as mutations from "./mutations.es6";
import * as actions from "./actions.es6";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        jobs: [],
        filteredJobs: [],
        city: "",
        keyword: ""
    },
    getters,
    mutations,
    actions
});

export default store;