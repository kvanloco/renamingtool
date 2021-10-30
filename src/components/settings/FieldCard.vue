<template>
  <div class="card my-3">
    <div class="card-header">
      <h3 class="d-inline">{{ field.name }}- {{ field.id }}</h3>
      <button :data-field-id="field.id" class="btn btn-primary float-end">
        edit
      </button>
    </div>
    <div class="card-body">
      <div class="container">
        <div class="row align-items-start">
          <div class="col">Default</div>
          <div class="col">{{ field.default }}</div>
        </div>
        <h5>Validations</h5>
        <div
          class="row align-items-start"
          v-for="(value, name) in field.validation"
          :key="name"
        >
          <div class="col">{{ name }}</div>
          <div class="col">
            {{ value }}
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
            {{ value }}
          </div>
        </div>
      </div>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</template> 

<script>
export default {
  name: "FieldCard",
  props: ["field"],
  computed: {},
};
</script>