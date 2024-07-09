<template>
    <v-app-bar>
      <v-toolbar dense floating>
        <v-text-field prepend-icon="mdi-magnify" placeholder="Search" hide-details class="ml-6"></v-text-field>
        <v-spacer></v-spacer>
        <v-btn fab depressed>
          <v-icon>mdi-email-box</v-icon>
        </v-btn>
        <v-btn fab depressed @click="toggleTheme">
          <v-icon>mdi-theme-light-dark</v-icon>
        </v-btn>
        <v-btn fab depressed>
          <v-icon>mdi-account-circle</v-icon>
        </v-btn>
      </v-toolbar>
    </v-app-bar>
</template>

<script setup>
import { useTheme } from 'vuetify'

const theme = useTheme()

function toggleTheme () {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>