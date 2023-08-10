<script>
import { computed, ref } from "vue";
import { RouterLink } from "vue-router";
import store from "../store";

export default {
  data() {
    const keyword = ref("");

    const meals = computed(() => store.getters.getSearchedMeals);

    function searchMeals() {
      console.log("Search meals action is triggered!");
      console.log("Keyword:", keyword.value);

      store.dispatch("searchMeals", keyword.value).then(() => {
        console.log("Search meals action completed!");
      });
    }

    return {
      keyword,
      meals,
      searchMeals,
    };
  },

  computed: {
    letters() {
      return "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    },
  },
  components: { RouterLink },
};
</script>

<template>
  <div class="flex flex-col p-8">
    <div>
      <input type="text" class="rounded border-2 border-grey-200 w-full" placeholder="Search for meals" v-model="keyword"
        @input="searchMeals" />
    </div>

    <div class="flex justify-center gap-2 mt-2">
      <!-- Updated RouterLink with dynamic segment :letter -->
      <router-link v-for="letter of letters" :key="letter" :to="`/by-letter/${letter}`">
        {{ letter }}
      </router-link>
    </div>

    <!-- Display the fetched meals -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
      <div v-for="meal of meals" :key="meal.idMeal" class="bg-white shadow rounded-xl">
        <router-link :to="{ name: 'MealDetails', params: { id: meal.idMeal } }">
          <img :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded-t-xl w-full h-48 object-cover" />
        </router-link>
        <div class="px-3">
          <h3 class="font-bold">{{ meal.strMeal }}</h3>
          <p class="mb-4"></p>
          <div class="py-3 flex items-center justify-between">
            <a :href="meal.strYoutube" target="_blank"
              class="px-3 py-2 rounded border-red-600 border-2 bg-red-500 text-white hover:bg-red-600 hover:text-white transition-colors">
              Youtube
            </a>
            <router-link :to="{ name: 'MealDetails', params: { id: meal.idMeal } }"
              class="px-3 py-2 rounded border-2 border-transparent text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors">
              Meal Details
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
