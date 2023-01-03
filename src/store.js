import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    todos: [
      {
        name: "eat a pizza",
        done: false,
      },
      {
        name: "walk on the moon",
        done: false,
      },
    ],
  },
  getters: {
    todosLength(state) {
      return state.todos.length;
    },
  },
});

export default store;
