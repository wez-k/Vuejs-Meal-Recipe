const mutations = {
  setSearchedMeals(state, meals) {
    meals.forEach((meal) => {
      meal.strMeal = meal.strMeal || "";
    });
    state.searchedMeals = meals;
  },
  setMealsByLetter(state, meals) {
    state.mealsByLetter = meals;
  },
  
  // setMealsByIngredients(state, meals) {
  //   state.mealsByIngredient = meals;
  // },
  setIngredient(state, ingredient) {
      state.selectedIngredient = ingredient;
    },
};

export default mutations;
