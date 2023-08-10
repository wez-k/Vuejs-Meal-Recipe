<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const selectedIngredient = computed(() => store.state.selectedIngredient)

const ingredientImageUrl = computed(() => {
  if (selectedIngredient.value) {
    const ingredientName = selectedIngredient.value.strIngredient
    return `https://www.themealdb.com/images/ingredients/${encodeURIComponent(ingredientName)}.png`
  }
  return ''
})

</script>

<template>
  <div v-if="selectedIngredient" class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
    <div class="bg-white rounded p-4 shadow">
      <h3 class="text-2xl font-bold mb-4">{{ selectedIngredient.strIngredient }}</h3>
      <p class="text-gray-600">{{ selectedIngredient.strDescription }}</p>
    </div>
    <div class="bg-white rounded p-4 shadow">
      <img
        v-if="ingredientImageUrl"
        :src="ingredientImageUrl"
        :alt="selectedIngredient.strIngredient"
        class="rounded-t-xl w-full h-100 object-cover"
      />
    </div>
  </div>
  <div v-else>Loading...</div>
  
</template>



