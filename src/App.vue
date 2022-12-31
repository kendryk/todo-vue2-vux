<template>
  <div id="app" class="container p-5">
    <h4>Ajouter une todo</h4>
    <hr />
    <div class="d-flex mb-4">
      <input v-model="todo" type="text" class="form-control mr-5" />
      <button class="btn btn-primary">Ajouter</button>
    </div>
    <div class="card">
      <div class="card-header d-flex flex-row justify-content-between">
        <span> Todo List</span>
      </div>
      <div>
        <ul class="list-group">
          <li
            class="list-group-item d-flex flex-row justify-content-between align-items-center list-group-item-action"
          >
            <span> {{todo.name}}</span>
            <span>
              <input class="mx-3" type="checkbox" />
              <button class="btn btn-sm btn-danger">Delete</button>
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      todo: "",
    };
  },
  components: {},
};
</script>

<style></style>
