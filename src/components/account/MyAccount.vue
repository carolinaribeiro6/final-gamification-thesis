<template>
    <v-card
    class="ma-6 pr-2 pl-2 pb-2 pt-4"
    rounded="2"
    color="#FFFFFF"
  >
  <h1 class="text-h6 ml-7 mt-4">My Account</h1>
  <v-container>
    <v-row no-gutters>
      <v-col cols="2">
        <v-avatar
        color="grey"
        size="150"
        class="rounded-circle ml-8"
      >
        <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg" cover></v-img>
      </v-avatar>
      </v-col>
      <v-col cols="10" class="pl-8 mt-3">
        <v-card color="#C2D7FB">
        <v-list-item
        class="text-black"
        title="Name"
      ></v-list-item>
      <v-list-item
        class="text-black"
        title="Email"
      ></v-list-item>
      <v-list-item
        class="text-black"
        title="Phone Number"
      ></v-list-item>
    </v-card>
      </v-col>
      <v-col cols="12">
        <v-card class="pa-1 mt-4" color="#DFEBFF">
          DESCRIPTION
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  </v-card>
</template>
