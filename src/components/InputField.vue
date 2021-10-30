<template>
  <div>
    <h3 class="field_title" :class="{ mandatory: field.validation.required }">
      {{ field.name }}
    </h3>
    <input
      :data-id="field.id"
      class="form-control"
      :value="field.input"
      @input="onUpdateInput"
      @focus="onGetFocus"
    />
    <div>{{ dirty }}</div>
    <div>{{ formatted_inputs }}</div>
    <div
      class="text-danger alert alert-warning"
      role="alert"
      v-for="message in messages"
      v-bind:key="message"
    >
      <div class="message">{{ message }}</div>
    </div>
  </div>
</template>

<script>
//import VueJsonPretty from 'vue-json-pretty';
//import 'vue-json-pretty/lib/styles.css';
import { mapActions } from "vuex";

export default {
  name: "InputField",
  components: {
    //VueJsonPretty,
  },
  props: ["field"],
  data() {
    return {
      dirty: false,
    };
  },
  methods: {
    ...mapActions(["updateInput", "updateFormattedInput", "updateMessages"]),
    onGetFocus(e) {
      this.dirty = true;
    },
    onUpdateInput(e) {
      const input = e.target.value;
      const { field } = this;
      this.updateInput({
        field,
        input,
      });
    },
  },
  computed: {
    formatted_inputs() {
      return this.$store.state.fields[this.field.id].formatted_input;
    },
    messages() {
      return this.$store.state.fields[this.field.id].messages;
    },
  },
};
</script>

<style scoped>
.field_title {
  font-size: 0.9em;
  text-align: center;
}
.mandatory::after {
  color: red;
  content: " *";
}
.message {
  font-size: 0.7em;
}
.field {
  font-size: 0.7em;
}
.alert {
  padding: 0.5rem !important;
  margin-bottom: 0.5rem !important;
}
</style>
