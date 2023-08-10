import axiosClient from "../axiosClient";

export function searchMeals({ commit }, keyword) {
  axiosClient
    .get(`search.php?s=${keyword}`)
    .then(({ data }) => {
      commit("setSearchedMeals", data.meals);
    })
    .catch((error) => {
      console.error("Error searching meals:", error);
    });
}

export function searchMealsByLetter({ commit }, letter) {
  axiosClient
    .get(`search.php?f=${letter}`)
    .then(({ data }) => {
      commit("setMealsByLetter", data.meals);
    })
    .catch((error) => {
      console.error("Error searching meals by letter:", error);
    });
}

export function setIngredient({ commit }, ingredient) {
  axiosClient
    .get(`search.php?i=${ingredient}`)
    .then(({ data }) => {
      commit("setIngredient", data.meals);
    })
    .catch((error) => {
      console.error("Error searching meals:", error);
    });
}

export function setSelectedIngredient(ingredient) {
  this.selectedIngredient = ingredient;
}
