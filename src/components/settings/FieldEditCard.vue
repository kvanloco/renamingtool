<template>
  <div class="card border-warning my-3">
    <div class="card-header bg-warning">
      <h3 class="d-inline">{{ field.name }}- {{ field.id }}</h3>
      <button class="mx-2 btn btn-primary float-end">Save</button>
      <button class="btn btn-outline-primary float-end">Cancel</button>
    </div>
    <div class="card-body">
      <div class="container">
        <div class="row align-items-start">
          <div class="col">Default</div>
          <div class="col">
            <input
              :data-id="field.id"
              class="form-control"
              :value="field.default"
            />
          </div>
        </div>
        <h5>Validations</h5>
        <div
          class="row align-items-start"
          v-for="(value, name) in field.validation"
          :key="name"
        >
          <div class="col">{{ name }}</div>
          <div class="col">
            <input class="form-control" :value="value" />
          </div>
        </div>
        <h5>Formatting</h5>
        <div
          class="row align-items-start"
          v-for="(value, name) in field.formatting"
          :key="name"
        >
          <div class="col">{{ name }}</div>
          <div class="col">
            <input class="form-control" :value="value" />
          </div>
        </div>
      </div>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</template> 

<script>
export default {
  name: "FieldEditCard",
  props: ["field"],
  computed: {},
};
</script>