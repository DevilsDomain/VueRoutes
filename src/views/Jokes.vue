<script setup>
	import { ref, renderSlot } from 'vue'
	const response = ref({})
    
  try {

    async function getJoke(){
    const res = await fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,explicit,racist&amount=10')
    console.log(res)
    response.value = (await res.json())
    console.log(response.value)
    }
    getJoke()
    console.log("first joke"+response.value)
    
  } catch (error) {
    response.value = { answer: 'Error! Could not reach the API. ' + error, image: '' }
  }

  console.log(Boolean(response))
</script>

<template>
  <h1>the jokes</h1>
  <div v-if="response">
  <div v-for="(joke, index) in response.jokes">
    <div v-if="joke.category=='Pun'">
    <div v-if="joke.type =='single'">
      <p>joke{{(index+1+" ")}}:{{joke.joke }}</p>
    </div>
    <div v-else>
      <p>joke{{(index+1+" ")}}:{{joke.setup }}</p>
      <p>{{joke.delivery }}</p>
    </div>
  </div>
  </div>
</div>
<div v-else>
  <p>Ooops! Looks lie there are no </p>
</div>



</template>
