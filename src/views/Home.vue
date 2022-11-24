<script setup>
const categories = ['programming', 'misc', 'dark', 'pun', 'spooky', 'christmas']
let word = categories[0]
let link = `/${word}`
console.log(link)
</script>

<template>
  
  <h1>Pick a category for a joke</h1>
  <ul>
    <li><RouterLink to="programming">Programming</RouterLink></li>
    <li><RouterLink to="misc">misc</RouterLink></li>
    <li><RouterLink to="dark">dark</RouterLink></li>
    <li><RouterLink to="pun">pun</RouterLink></li>
    <li><RouterLink to="spooky">spooky</RouterLink></li>
    <li><RouterLink to="christmas">christmas</RouterLink></li>



  </ul>



</template>

<style>
ul {
list-style: none;
}

</style>