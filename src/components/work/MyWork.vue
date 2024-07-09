<template>
    <v-card
    class="ma-6 pr-2 pl-2 pb-2 pt-4"
    rounded="2"
    color="#FFFFFF"
  >
        <h1 class="text-h6 ml-7 mt-4">My Work</h1>
        <v-col v-if="loading" align="center">
            <v-progress-circular color="dark-blue" indeterminate class="mb-3"></v-progress-circular>
        </v-col>
        <v-col v-if="!loading">
            <v-data-table :headers="header" :items="works" class="pa-1" >
            </v-data-table>
        </v-col>
    </v-card>
</template>


<script>
const endpoint = process.env.VUE_APP_GUEDES
const usenowendpoint = `${endpoint}/guedes`
console.log(usenowendpoint)
export default {
    data() {
        return {
            header: [
                { title:'Date', value: 'date', class: 'my-header-style' },
                { title:'Project', value: 'project', class: 'my-header-style' },
                { title:'Area', value: 'area', class: 'my-header-style' },
                { title:'Task', value: 'task', class: 'my-header-style' },
                { title:'Description', value: 'description', class: 'my-header-style' },
                { title:'Responsible', value: 'responsible', class: 'my-header-style' }
            ],
            works: [],
            loading: false,
        }
    },
    mounted: async function() {
        this.loading = true;
        const response = await fetch('')
        this.works = await response.json();
        this.loading = false;
    }
}
</script>

<style scoped>
.title {
    margin-left: 2rem;
    margin-top: 1rem;
}

.my-header-style {
  background-color: #1C3E70;
}
</style>