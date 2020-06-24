<template>
    <div class="card" v-if="job.jobId">
        <div class="card-body">
            <h5 class="card-title">{{job.positionName}}</h5>
            <h6 class="card-subtitle">{{job.companyName}}</h6>
            <p class="card-text text-secondary">{{job.cityName}}</p>
            <p class="card-text">{{job.description}}</p>
            <p class="card-text">{{job.address}}</p>
            <p class="card-text">{{job.contactPhone.countryCallingCode}}({{job.contactPhone.areaCode}}){{job.contactPhone.number}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Job",
        props: ["job"]
    };
</script>