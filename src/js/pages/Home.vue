<template>
    <form @submit.prevent="handleSubmit">
        <div class="container">
            <div class="row justify-content-center">
                <div class="form-group col-12 col-md-6 col-lg-2">
                    <select class="form-control" v-model="city">
                        <option value="" selected>Şehir</option>
                        <option value="İstanbul">İstanbul</option>
                        <option value="İzmir">İzmir</option>
                    </select>
                </div>
                <div class="form-group col-12 col-md-6 col-lg-4">
                    <input class="form-control" v-model="keyword" placeholder="Pozisyon, firma adı">
                </div>
                <div class="form-group col-12 col-md-12 col-lg-2">
                    <input class="form-control btn" type="submit" value="İŞ BUL">
                </div>
            </div>
        </div>
    </form>
</template>

<script>
    import { mapMutations } from "vuex";

    export default {
        name: "Home",
        data() {
            return {
                city: "",
                keyword: ""
            };
        },
        methods: {
            ...mapMutations([
                "setCity",
                "setKeyword"
            ]),
            handleSubmit() {
                this.setCity(this.city);
                this.setKeyword(this.keyword);
                this.$router.push({ name: `joblist` });
            }
        }
    };
</script>