import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../pages/Home.vue";
import JobList from "../pages/JobList.vue";
import JobDetail from "../pages/JobDetail.vue";

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: "/",
            component: Home,
            name: "home"
        },
        {
            path: "/joblist",
            component: JobList,
            name: "joblist"
        },
        {
            path: "/jobdetail/:id",
            component: JobDetail,
            name: "jobdetail"
        },
        {
            path: "*",
            component: Home
        }
    ],
    mode: "history"
});

export default router;


