<template>
  <div id="app" class="container p-5">
    <h4>Ajouter une todo</h4>
    <hr />
    <div class="d-flex mb-4">
      <input v-model="todo" type="text" class="form-control" />
      <button
        @click="addTodo({ name: todo, done: false })"
        class="btn btn-primary ml-2"
      >
        Ajouter
      </button>
    </div>
    <div class="card">
      <div class="card-header d-flex flex-row justify-content-between">
        <span> Todo List</span>
        <span> {{ todosLength }}</span>
      </div>
      <div>
        <ul class="list-group">
          <li
            @click="toggleTodo(index)"
            v-for="(todo, index) in todos"
            :key="todo.name"
            class="list-group-item d-flex flex-row justify-content-between align-items-center list-group-item-action"
          >
            <span> {{ todo.name }}</span>
            <span>
              <input class="mx-3" :checked="todo.done" type="checkbox" />
              <button class="btn btn-sm btn-danger" @click="deleteTodo(index)">
                Delete
              </button>
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState, mapMutations } from "vuex";

export default {
  name: "App",
  data() {
    return {
      todo: "",
    };
  },
  computed: {
    ...mapState(["todos"]),
    ...mapGetters(["todosLength"]),
  },

  methods: {
    ...mapMutations(["addTodo", "toggleTodo", "deleteTodo"]),
  },
};
</script>

<style></style>
