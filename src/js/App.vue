<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <Header/>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from "./components/Header.vue";

    export default {
        name: "App",
        components: {
            Header
        }
    };
</script>