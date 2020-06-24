import axios from "axios";

export const fetchJobs = async ({ commit, state }) => {
    try {
        if (state.jobs.length === 0) {
            const response = await axios.get("http://localhost:3000/jobs");

            commit("setJobs", response.data);
        }

        let filteredJobs;

        if (state.city !== "" || state.keyword !== "") {
            const city = state.city.trim().toLowerCase();
            const keyword = state.keyword.trim().toLowerCase();

            filteredJobs = state.jobs.filter(job => {
                return (
                        city === ""
                        || job.cityName.toLowerCase().includes(city)
                    )
                    && (
                        keyword === ""
                        || (
                            job.positionName.toLowerCase().includes(keyword)
                            ||
                            job.companyName.toLowerCase().includes(keyword)
                        )
                    );
            });
        } else {
            filteredJobs = state.jobs;
        }

        commit("setFilteredJobs", filteredJobs);
    } catch(error) {
        console.error(error);
    }
};

export const getJob = async ({ commit, state }, payload) => {
    try {
        const response = await axios.get(`http://localhost:3000/jobs/${payload.jobId}`);

        return response;
    } catch(error) {
        console.error(error);
    }
};