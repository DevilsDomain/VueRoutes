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


</script>

<template>
  <h1>Programming Jokes</h1>

  <div v-for="(joke, index) in response.jokes">
    <div v-if="joke.category=='Programming'">
    <div v-if="joke.type =='single'" >
      <div class="card">
        <div><p>{{joke.joke }}</p></div>
    </div>
    </div>
    <div v-else>
      <div class="card">
        <div>
          <p>{{joke.setup }}</p>
          <p>{{joke.delivery }}</p>
      </div>
    </div>
    </div>
  </div>
  </div>

<div v-if="Boolean(response)== false">Oops! looks like there aren't any jokes in this category yet ;(</div>

<RouterLink to="/">Home</RouterLink>

</template>

<style>
.card {
  height: 100px;
  width: 500px;
  background-color: lightgrey;
  margin-bottom: 40px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  text-align: left;
}

p {
  color: black;
  font-size: 17px;
}


</style>