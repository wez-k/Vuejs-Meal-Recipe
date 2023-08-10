<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import MealsGrid from "../components/MealsGrid.vue";

const keyword = ref("");
const store = useStore();
const meals = computed(() => store.getters.getSearchedMeals ?? []);

function searchMeals() {
  console.log("Search meals action is triggered!");
  console.log("Keyword:", keyword.value);

  store.dispatch("searchMeals", keyword.value).then(() => {
    console.log("Search meals action completed!");
  });
}
</script>

<template>
  <div class="p-8">
    <input
      type="text"
      class="rounded border-2 border-grey-200 w-full"
      placeholder="Search for meals"
      v-model="keyword"
      @input="searchMeals"
    />
  </div>
  <MealsGrid :meals="meals" />
</template>
