<template>
    <v-card
    class="ma-6 pr-2 pl-2 pb-2 pt-4"
    rounded="2"
    color="#FFFFFF"
  >
        <h1 class="text-h6 ml-7 mt-4">Project Owner Projects</h1>
        <v-col v-if="loading" align="center">
            <v-progress-circular color="dark-blue" indeterminate class="mb-3"></v-progress-circular>
        </v-col>
        <v-col v-if="!loading">
            <v-data-table :items="sm" class="pa-5"></v-data-table>
        </v-col>
    </v-card>
  </template>

<script>
export default {
    data() {
        return {
            sm: [],
            loading: false,
        }
    },
    mounted: async function() {
        this.loading = true;
        const response = await fetch('https://script.googleusercontent.com/macros/echo?user_content_key=wN3sYzfTHr8eUcnt0EaDEJidbCwowrh-tE_tqOPI9t65SxSlZkUGyYMSFES0vtMMIVhRITEkSb1ghBexCU-Wr6lOz1NTHtMQOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHaxE7iUcfzKPGVBTNtwRwCZm1d1RUAMXf7LKZaDVSkC9MmxZ2d2aH1rLVc-ItEcE4M92QyuPbGk92pS0Ldp0W-a-FmIWIcb5HAfa37EJiSgEaX9cFHI9_7ZU-t7Unbk_ivA&lib=MfXf9M1aXI2OGAdtBCOkbvWjHAwoJIls-');
        this.sm = await response.json();
        this.loading = false;
    }
}
</script>

<style scoped>
.title {
    margin-left: 2rem;
    margin-top: 1rem;
}

v-data-table-header {
    background-color: #1C3E70;
}
</style>