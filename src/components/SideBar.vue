<template>
    <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        permanent
        @click="rail = false"
        color="#1C3E70"
    >
    <v-list-item>
        <v-img src="@/assets/Logo_White-1.png" alt="" class="py-4 pl-4"></v-img>
        <template v-slot:append>
            <v-btn
              icon="mdi-chevron-left"
              variant="text"
              @click.stop="rail = !rail"
            ></v-btn>
        </template>
    </v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-monitor-dashboard" title="Dashboard" value="dash"></v-list-item>

          <v-list-group value="work" v-model="groupOpened">
            <template v-slot:activator="{ props }">
                <v-list-item v-bind="props" prepend-icon="mdi-briefcase" title="Work"></v-list-item>
            </template>
            <v-list-item prepend-icon="mdi-laptop" title="My Work" value="mywork" class="subgroup" to="/mywork" @click="groupOpened = false"></v-list-item>
            <v-list-item prepend-icon="mdi-clipboard" title="Records" value="records" class="subgroup" to="/records" @click="hideSidebarNavMenu"></v-list-item>
            <v-list-item prepend-icon="mdi-clock" title="Time" value="time" class="subgroup" to="/time" @click="hideSidebarNavMenu"></v-list-item>
            <v-list-item prepend-icon="mdi-notebook" title="Logs" value="logs" class="subgroup" to="/logs" @click="hideSidebarNavMenu"></v-list-item>
            <v-list-item prepend-icon="mdi-account-tie" title="PO" value="po" class="subgroup" to="/po" @click="hideSidebarNavMenu"></v-list-item>
            <v-list-item prepend-icon="mdi-account-tie" title="SM" value="sm" class="subgroup" to="/sm" @click="hideSidebarNavMenu"></v-list-item>
            </v-list-group>

            <v-list-group value="account">
            <template v-slot:activator="{ props }">
                <v-list-item v-bind="props" prepend-icon="mdi-account-circle" title="Account"></v-list-item>
            </template>
            <v-list-item prepend-icon="mdi-account-circle" title="My Account" value="myaccount" to="/myaccount" @click="hideSidebarNavMenu"></v-list-item>
            <v-list-item prepend-icon="mdi-cash" title="Salary" value="salary" to="/salary" @click="hideSidebarNavMenu"></v-list-item>
            <v-list-item prepend-icon="mdi-history" title="History" value="history" to="/history" @click="hideSidebarNavMenu"></v-list-item>
            </v-list-group>

            <v-list-group value="iogamify">
            <template v-slot:activator="{ props }">
                <v-list-item v-bind="props" prepend-icon="mdi-gamepad-variant" title="ioGamify"></v-list-item>
            </template>
            <v-list-item prepend-icon="mdi-podium-gold" title="My Performance" value="myperformance"></v-list-item>
            <v-list-item prepend-icon="mdi-gift" title="Rewards" value="rewards" to="/rewards" @click="hideSidebarNavMenu"></v-list-item>
            <v-list-item prepend-icon="mdi-trophy" title="View Awards" value="viewawards" to="/awards" @click="hideSidebarNavMenu"></v-list-item>
            </v-list-group>

            <v-list-group value="projects">
            <template v-slot:activator="{ props }">
                <v-list-item v-bind="props" prepend-icon="mdi-folder" title="Projects"></v-list-item>
            </template>
            <v-list-item prepend-icon="mdi-chart-bar" title="Charts" value="charts" to="/chart" @click="hideSidebarNavMenu"></v-list-item>
            <v-list-item prepend-icon="mdi-table-large" title="Table" value="table" to="/table" @click="hideSidebarNavMenu"></v-list-item>
            </v-list-group>

          
          <v-list-item prepend-icon="mdi-newspaper-variant" title="Rules" value="rules" to="/rules" @click="hideSidebarNavMenu"></v-list-item>
        </v-list>
    </v-navigation-drawer>

</template>

<script>
  export default {
    data () {
      return {
        drawer: true,
        rail: true,
        groupOpened: false
      }
    },
    methods: {
    hideSidebarNavMenu() {
        this.drawer.stop = false;
    },
  }
  }
</script>

<style scoped>
.subgroup {
    margin-left: 0.5rem;
}

</style>