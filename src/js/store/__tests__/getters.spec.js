import * as getters from "../getters.es6"

describe("getters", () => {
    test("getJobs()", () => {
        const items = [{id: 1}, {id: 2}];
        const state = {
            filteredJobs: items
        };
        const result = getters.getJobs(state);

        expect(result).toBe(items);
    });

    test("getCity()", () => {
        const city = "İstanbul";
        const state = {
            city
        };
        const result = getters.getCity(state);

        expect(result).toEqual(city);
    });
});

