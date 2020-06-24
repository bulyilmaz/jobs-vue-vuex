import * as actions from "../actions.es6"

describe("actions", () => {
    test("fetchJobs()", () => {
        const context = {
            commit: jest.fn(),
            state: {
                jobs: [{id: 1}, {id: 2}],
                city: "",
                keyword: ""
            }
        };

        actions.fetchJobs(context);
    });
});

