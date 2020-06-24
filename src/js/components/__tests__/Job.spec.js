import Vue from "vue";
import VueRouter from "vue-router";
import { shallowMount } from "@vue/test-utils";

import Job from "../Job.vue";

Vue.use(VueRouter);

describe("Job", () => {
    const wrapper = shallowMount(Job, {
        propsData: {
            job: {
                jobId: 1,
                positionName: "A",
                companyName: "B",
                cityName: "C",
                description: "",
                address: "",
                contactPhone: {
                    countryCallingCode: "",
                    areaCode: "",
                    number: ""
                }
            }
        }
    });

    test("should render h5", () => {
        expect(wrapper.html()).toContain(`<h5 class="card-title">A</h5>`)
    });

    test("h6 content is 'B'", () => {
        expect(wrapper.find("h6").text()).toEqual("B");
    });

    test("'.card-text' count is 4", () => {
        expect(wrapper.findAll(".card-text").length).toEqual(4);
    });
});