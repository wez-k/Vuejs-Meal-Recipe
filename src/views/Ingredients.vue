<script setup>
import { computed } from "@vue/reactivity";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import axiosClient from "../axiosClient";
import store from "../store";

const router = useRouter();
const keyword = ref("");
const ingredient = ref([]);
const computedIngredients = computed(() => {
  if (!computedIngredients) return ingredient;
  return ingredient.value.filter((i) =>
    i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
  );
});

function openIngredient(ingredient) {
  console.log("Selected ingredient:", ingredient);
  store.commit('setIngredient', ingredient)
  router.push({
    name: "ingredient",
  });
}

onMounted(() => {
  axiosClient.get("list.php?i=list").then(({ data }) => {
    console.log("Ingredients data:", data.meals);
    ingredient.value = data.meals;
  });
});

</script>

<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">Ingredients</h1>
  </div>
  <div class="px-8">
    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 bg-white border-gray-200 focus:ring-orange-500 focus:border-orange-500 mb-3 w-full"
      placeholder="Search for Ingredients"
    />
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
      <a
        href="#"
        @click.prevent="openIngredient(ing)"
        v-for="ing of computedIngredients"
        :key="ing.idIngredient"
        class="block bg-white rounded p-3 mb-3 shadow"
      >
        <h3 class="text-2xl font-bold mb-2">{{ ing.strIngredient }}</h3>
      </a>
    </div>
  </div>
</template>


