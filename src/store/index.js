import { createStore } from "vuex";
import state from "./state";
import * as actions from "./actions";
import mutations from "./mutations"; 
import * as getters from "./getters";


const store = createStore({
  state,
  actions,
  mutations,
  getters,
});

// log
console.log("Initial state in store:", store.state);

export default store;
