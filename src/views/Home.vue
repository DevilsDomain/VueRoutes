<script setup>
const categories = ['Programming', 'Misc', 'Dark', 'Pun', 'Spooky', 'Christmas']

</script>

<template>
  
  <h1>Pick a category for a joke</h1>
  <div v-for="category in categories">
    <a href="">{{category}}</a>
  </div>


</template>