<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axiosClient from "axios";

const route = useRoute();
const meal = ref({});

onMounted(() => {
  axiosClient
    .get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${route.params.id}`
    )
    .then((response) => {
      meal.value = response.data.meals[0];
    })
    .catch((error) => {
      console.error("Error fetching meal details:", error);
    });
});
</script>

<template>
  <div class="max-w-[800px] mx-auto p-8">
    <h1 class="text-5xl font-bold mb-5">{{ meal.strMeal }}</h1>
    <img :src="meal.strMealThumb" :alt="meal.strMeal" class="max-w-[100%]" />
  </div>
  <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
    <div class="category">
      <strong class="font-bold">Category: {{ meal.strCategory }} </strong>
    </div>
    <div class="area">
      <strong class="font-bold">Area: {{ meal.strArea }} </strong>
    </div>
    <div class="tags">
      <strong class="font-bold">Tags: {{ meal.strCategory }}</strong>
    </div>
  </div>

  <div class="my-3">
    {{ meal.strInstructions }};
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-2">
    <div>
      <h2 class="text-2xl font-semibold mb-2">Ingredients</h2>
      <ul>
        <template v-for="(ingredient, index) of new Array(20)">
          <li v-if="meal[`strIngredient${index + 1}`]">
            {{ meal[`strIngredient${index + 1}`] }}
          </li>
        </template>
      </ul>
    </div>
    <div>
      <h2 class="text-2xl font-semibold mb-2">Measures</h2>
      <ul>
        <template v-for="(measure, index) of new Array(20)">
          <li v-if="meal[`strMeasure${index + 1}`]">
            {{ meal[`strMeasure${index + 1}`] }}
          </li>
        </template>
      </ul>
    </div>
  </div>
  <div class="py-3 flex items-center justify-center">
    <a :href="meal.strYoutube" target="_blank"
      class="px-3 py-2 rounded border-red-600 border-2 bg-red-500 text-white hover:bg-red-600 hover:text-white transition-colors">
      Youtube
    </a>
  </div>
</template>
