<template>
    <div>
        <p v-if="city !== ``"><strong>Şehir:</strong> {{city}}</p>
        <p v-if="keyword !== ``"><strong>Anahtar kelime:</strong> {{keyword}}</p>

        <Jobs :jobs="jobs"/>

        <p v-if="jobs.length === 0">Sonuç bulunamadı</p>
    </div>
</template>

<script>
    import { mapGetters } from "vuex";

    import Jobs from "../components/Jobs.vue";

    export default {
        name: "JobList",
        components: {
            Jobs
        },
        computed: {
            ...mapGetters([
                "getJobs",
                "getCity",
                "getKeyword"
            ]),
            jobs() {
                return this.getJobs;
            },
            city() {
                return this.getCity;
            },
            keyword() {
                return this.getKeyword;
            }
        },
        created() {
            this.$store.dispatch("fetchJobs");
        }
    };
</script>