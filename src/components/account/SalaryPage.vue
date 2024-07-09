<template>
    <v-card
    class="ma-6 pr-2 pl-2 pb-2 pt-4"
    rounded="2"
    color="#FFFFFF">
        <h1 class="text-h6 ml-7 mt-4">Salary and Benefits</h1>
        <v-expansion-panels class="mt-4 ">
            <v-expansion-panel class="ma-2" style="background:#1C3E70;color:white">
                <v-expansion-panel-title>Salary</v-expansion-panel-title>
                <v-expansion-panel-text>
                    <v-data-table :items="salary" class="pa-5"></v-data-table>
                </v-expansion-panel-text>
            </v-expansion-panel>
            <v-expansion-panel class="ma-2" style="background:#1C3E70;color:white">
                <v-expansion-panel-title>Benefits</v-expansion-panel-title>
                <v-expansion-panel-text>
                    <v-data-table :items="salary" class="pa-5"></v-data-table>
                </v-expansion-panel-text>
            </v-expansion-panel>
        </v-expansion-panels>
    </v-card>
</template>

<script>
export default {
    data() {
        return {
            salary: [],
            loading: false,
        }
    },
    mounted: async function() {
        this.loading = true;
        const response = await fetch('https://script.googleusercontent.com/macros/echo?user_content_key=cByVwQZjG6V42vh68OlQ3mCTlYjEAO7jTVwNG_UHyuWd__ZPMrc_zcwkgleTgM9_ZTK-Ah0UkXvl7Y3IP2XnpYZ-0ztYxbr2OJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHayaGoePrRC5_h_8oGbkaBpdaCWQlYOQK9irVM8C7gkvCsSVAFXByUgT6V2ScrttWvvSLSWi2aochtc-u4gwWjZrW-hffsCVizfa37EJiSgEaBPwtoEFoK-zPvwjybOxHyg&lib=MfXf9M1aXI2OGAdtBCOkbvWjHAwoJIls-')
        this.salary = await response.json();
        this.loading = false;
    }
}
</script>