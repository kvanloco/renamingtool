<template>
  <div class="Documentlist">
    <h3>Project Management</h3>
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Functional responsibility</th>
          <th>Description</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in list" :key="item">
          <td><input type="checkbox" :value="item" v-model="selected" /></td>
          <td>{{ item.fs }}</td>
          <td>{{ item.description }}</td>
          <td>{{ item.type }}</td>
        </tr>
      </tbody>
    </table>
    <div v-for="(groupitem, name) in grouped" :key="groupitem">
      <p>
        Functional responsibility: <strong>{{ name }}</strong>
      </p>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Description</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in groupitem" :key="item">
            <td><input type="checkbox" :value="item" v-model="selected" /></td>

            <td>{{ item.description }}</td>
            <td>{{ item.type }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p>Selected: {{ selected }}</p>
    <p>grouped: {{ grouped }}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import groupby from "@/services/groupby.service.js";

export default {
  name: "Documentlist",
  components: {},
  data() {
    return {
      list: [
        {
          fs: "Project Management",
          description: "Project Execution plan",
          type: "Document",
        },
        {
          fs: "Project Management",
          description: "Home Office IT Plan",
          type: "Document",
        },
        {
          fs: "Project Management",
          description: "Design Work Plan",
          type: "Chart",
        },
        {
          fs: "Mechanical",
          description: "Design Work Plan",
          type: "Chart",
        },
      ],
      selected: [],
    };
  },
  computed: {
    grouped: function () {
      return groupby(this.list, "fs");
    },
  },
};
</script>

<style scoped>
* {
  text-align: left;
}
</style>
