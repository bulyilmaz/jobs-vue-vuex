<template>
    <div>
        <ul class="nav">
            <li class="nav-item">
                <a class="nav-link" href="#" @click="$router.go(-1)"><i class="fas fa-arrow-left text-dark"></i></a>
            </li>
        </ul>

        <Job :job="job"/>
    </div>
</template>

<script>
    import Job from "../components/Job.vue";

    export default {
        name: "JobDetail",
        components: {
            Job
        },
        data() {
            return {
                job: {}
            };
        },
        async created() {
            try {
                const response = await this.$store.dispatch("getJob", {
                    jobId: this.$route.params.id
                });
                this.job = response.data;
            } catch (error) {
                console.log(error);
            }
        }
    };
</script>