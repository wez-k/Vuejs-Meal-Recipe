<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import { RouterLink, useRouter } from "vue-router";

const store = useStore();

const router = useRouter();

const letters = computed(() => "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""));

const selectedLetter = computed(() => router.currentRoute.value.params.letter);

const meals = computed(() => store.state.mealsByLetter);

import { onMounted, watch } from "vue";
import { searchMealsByLetter } from "../store/actions";

function fetchMealsByLetter(letter) {
  store.dispatch("searchMealsByLetter", letter);
}

onMounted(() => {
  fetchMealsByLetter(selectedLetter.value);
});

watch(selectedLetter, (newLetter) => {
  fetchMealsByLetter(newLetter);
});
</script>

<template>
  <div>
    <div class="animate-pulse flex justify-center gap-2 mt-2 p-16">
      <RouterLink
        v-for="letter of letters"
        :key="letter"
        :to="`/by-letter/${letter}`"
      >
        {{ letter }}
      </RouterLink>
    </div>
    <div
      class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8"
      v-if="meals && meals.length > 0"
    >
      <div v-for="meal in meals" :key="meal.idMeal">
        <RouterLink :to="`/meal/${meal.idMeal}`"
          >{{ meal.strMeal }}
          <img
            :src="meal.strMealThumb"
            :alt="meal.strMeal"
            class="rounded-t-xl w-full h-48 object-cover"
          />
        </RouterLink>
        <div class="px-3">
          <h3 class="font-bold">{{ meal.strMeal }}</h3>
          <p class="mb-4"></p>
          <div class="py-3 flex items-center justify-between">
            <a
              :href="meal.strYoutube"
              target="_blank"
              class="px-3 py-2 rounded border-red-600 border-2 bg-red-500 text-white hover:bg-red-600 hover:text-white transition-colors"
            >
              Youtube
            </a>
            <router-link
              :to="{ name: 'MealDetails', params: { id: meal.idMeal } }"
              class="px-3 py-2 rounded border-2 border-transparent text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors"
            >
              Meal Details
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
