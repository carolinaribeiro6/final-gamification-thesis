<template>
  <v-app>
    <!-- sidebar -->
    <SideBar />

    <!-- navbar -->
    <HeaderBar />
    
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import SideBar from './components/SideBar.vue';
import HeaderBar from './components/HeaderBar.vue';

export default {
  data() {
    return {
      url: 'https://script.google.com/macros/s/AKfycbxdTmjkTUs8go2wILpeB2IFW47E1LSjuH_9JFcgfSlCPloHE61yywxd_t1mMMiqV990ZA/exec'
    }
  },
  components: {
    SideBar,
    HeaderBar,
  }
}
</script>