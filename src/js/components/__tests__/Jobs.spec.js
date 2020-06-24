import Vue from "vue";
import VueRouter from "vue-router";
import { shallowMount } from "@vue/test-utils";

import Jobs from "../Jobs.vue";

Vue.use(VueRouter);

describe("Jobs", () => {
    const wrapper = shallowMount(Jobs, {
        propsData: {
            jobs: [
                {
                    jobId: 1,
                    positionName: "A",
                    companyName: "B",
                    cityName: "C"
                }
            ]
        }
    });

    test("should render h5", () => {
        expect(wrapper.html()).toContain(`<h5 class="card-title">A</h5>`)
    });

    test("h6 content is 'B'", () => {
        expect(wrapper.find("h6").text()).toEqual("B");
    });
});