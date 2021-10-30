<template>
  <div>
    <h1>Settings page</h1>
    <p>{{ editing }}</p>

    <div v-for="field in fields" :key="field.id">
      <FieldCard v-show="!editing[field.id]" :field="field"> </FieldCard>
      <FieldEditCard v-show="editing[field.id]" :field="field"> </FieldEditCard>
    </div>
  </div>
</template>

<script>
import FieldCard from "../components/settings/FieldCard";
import FieldEditCard from "../components/settings/FieldEditCard";

export default {
  name: "Contacts",
  components: {
    FieldCard,
    FieldEditCard,
  },
  data() {
    return {
      inEditMode: null,
      editing: [],
    };
  },
  computed: {
    fields: function () {
      return this.$store.getters["getFields"];
    },
  },
  methods: {
    onEditBtn: function () {},
    onEditing: function () {},
  },
  created() {
    this.fields.map((field) => {
      return (this.editing[field.id] = false);
    });
  },
};
</script>
