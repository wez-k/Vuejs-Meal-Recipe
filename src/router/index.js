import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import MealsByName from "../views/MealsByName.vue";
import MealsByLetter from "../views/MealsByLetter.vue";
import MealDetails from "../views/MealDetails.vue";
import Ingredients from "../views/Ingredients.vue";
import SelectedIngredient from "../components/SelectedIngredient.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/by-name/:name",
    name: "byName",
    component: MealsByName,
  },
  {
    path: "/by-letter/:letter",
    name: "byLetter",
    component: MealsByLetter,
  },
  {
    path: "/ingredients",
    name: "ingredients",
    component: Ingredients,
  },
  {
    path: "/ingredients/{ingredient}",
    name: "ingredient",
    component: SelectedIngredient,
  },
  {
    path: "/meal/:id",
    name: "MealDetails",
    component: MealDetails,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
