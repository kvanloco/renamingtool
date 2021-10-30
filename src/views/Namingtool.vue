<template>
  <div class="container">
    <input type="checkbox" v-model="options_visible" /> show options
    <div class="row">
      <div class="col" v-for="field in fields" :key="field.name">
        <div v-if="options_visible">
          <ul
            class="options_list"
            v-for="option in field.options"
            :key="option"
          >
            <li>{{ option }}</li>
          </ul>
        </div>
      </div>
      <div class="col-md-1"></div>
    </div>

    <!-- INPUT CHILD COMPONENT -->
    <div class="row">
      <div class="col" v-for="field in fields" :key="field.id">
        <InputField :field="field"></InputField>
      </div>
      <div class="col-md-1">
        <h3 class="field_title">buttons</h3>
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-info" @click="onReset">
            Reset
          </button>
          <button type="button" class="btn btn-info" @click="onDefault">
            Default
          </button>
        </div>
      </div>
    </div>

    <!-- DOCNAME  -->
    <div class="row">
      <div class="col-md-12 text-center">
        <div
          class="doc_name_container"
          v-bind:class="{ warning: !isNotWarning }"
        >
          <span class="px-4"> {{ doc_name }} </span>
          <span class="doc_name_btn" v-if="isNotWarning"
            ><button class="btn btn-info">copy to clipboard</button></span
          >
        </div>
      </div>
    </div>
    <!-- -->
  </div>
</template>

<script>
import InputField from "../components/InputField";
import { mapActions } from "vuex";

export default {
  components: {
    InputField,
  },
  name: "Namingtool",
  data() {
    return {
      options_visible: false,
    };
  },
  methods: {
    ...mapActions(["updateInput"]),

    onReset: function () {
      this.fields.forEach((field) => {
        const input = "";
        this.updateInput({
          field,
          input,
        });
      });
    },
    onDefault: function () {
      this.fields.forEach((field) => {
        const input = field.default;
        this.updateInput({
          field,
          input,
        });
      });
    },
  },

  computed: {
    fields: function () {
      return this.$store.getters["getFields"];
    },
    // takes all "formatted_input" values and chain them together
    doc_name: function () {
      return this.fields.reduce((acc, el, index) => {
        let input = el.formatted_input; // change to formatted_input

        if (input === "") {
          return acc;
        }
        // first element
        if (index === 0) {
          return `${input}`;
        }
        acc = `${acc}-${input}`;
        return acc;
      }, "");
    },
    isNotWarning: function () {
      return this.fields.every((el) => {
        return el.messages.length === 0;
      });
    },
  },
};
</script>

<style scoped>
#appp {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 12px;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.field_title {
  font-size: 0.9em;
  text-align: center;
}
.mandatory::after {
  color: red;
  content: " *";
}
.options_list {
  font-size: 0.7em;
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.options_list li {
  margin: 1px;
  background: #ffe5e5;
  padding: 3px 10px;
}
.input {
  width: 100%;
}
.message {
  min-height: 50px;
  color: red;
  font-size: 0.7em;
}
.warning {
  color: red;
}
input:invalid {
  border-color: red;
  color: red;
}
.invisible {
  display: none;
}
.field_title {
  font-size: 0.9em;
  text-align: center;
}
</style>
