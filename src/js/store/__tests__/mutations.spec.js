import * as mutations from "../mutations.es6"

describe("mutations", () => {
    test("setJobs()", () => {
        const items = [{id: 1}, {id: 2}];
        const state = {
            jobs: []
        };

        mutations.setJobs(state, items);

        expect(state.jobs).toBe(items);
    });

    test("setCity()", () => {
        const city = "İstanbul";
        const state = {
            city: ""
        };

        mutations.setCity(state, city);

        expect(state.city).toBe(city);
    });
});

