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
  mutations: {
    addTodo(state, payload) {
      state.todos = [...state.todos, payload];
    },
    toggleTodo(state, payload) {
      state.todos[payload].done = !state.todos[payload].done;
    },
    deleteTodo(state, payload) {
      state.todos.splice(state.todos.indexOf(payload, 1));
    },
  },
});

export default store;
