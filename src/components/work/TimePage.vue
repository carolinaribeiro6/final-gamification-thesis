<template>
    <v-select label="Select Tab" :items="tabs" class="pl-8 pr-8 pt-5"/>
 </template>
 
 <script>
 export default {
     data() {
         return {
             tabs: ['Schedule ioTeam', 'Schedule ioTeam-Place', 'Today', 'Sheet7', 'Working Time', 'Config', 'Date of Schedule ioTeam', 'HR', 'Copy of HR', 'Schedule', 'UH - ioTeam']
         }
     }
 }
 </script>