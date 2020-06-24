<template>
    <div class="list">
        <div class="card" v-for="(job, index) in jobs" :key="index">
            <router-link tag="div" :to="{ name: `jobdetail`, params: { id: job.jobId } }">
                <div class="card-body">
                    <h5 class="card-title">{{job.positionName}}</h5>
                    <h6 class="card-subtitle">{{job.companyName}}</h6>
                    <p class="card-text text-secondary">{{job.cityName}}</p>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Jobs",
        props: ["jobs"]
    };
</script>