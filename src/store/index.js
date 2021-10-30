import Vue from "vue";
import Vuex from "vuex";

import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

import FormatService from "../services/format.service";
import ValidateService from "../services/validate.service";

Vue.use(Vuex);

const store = new Vuex.Store({
  namespaced: true,
  state: {
    fields: [
      {
        id: 0,
        name: "Projectref",
        options: ["PMO369", "PMO789", "MPO987"],
        validation: {
          required: true,
          maxLength: 6,
          minLength: 6,
          regex: "a{3,6}"
        },
        formatting: {
          uppercase: true,
          spaces: ""
        },
        input: "",
        formatted_input: "",
        messages: [],
        default: "PMOxxx"
      },
      {
        id: 1,
        name: "Perceel",
        options: ["P1", "P2", "P3"],
        validation: {
          required: false,
          maxLength: 12,
          //minLength: 2,
          regex: "a{3,6}"
        },
        formatting: {
          uppercase: true,
          spaces: "_"
        },
        input: "",
        formatted_input: "",
        messages: [],
        default: "Px"
      },
      {
        id: 2,
        name: "Beschrijving",
        options: [],
        validation: {
          required: false,
          maxLength: 25,
          minLength: 3,
          regex: "a{3,6}"
        },
        formatting: {
          uppercase: false,
          spaces: "_"
        },
        input: "",
        formatted_input: "",
        messages: [],
        default: ""
      },
      {
        id: 3,
        name: "Status",
        options: ["IFI", "IFR", "ASB"],
        validation: {
          required: false,
          maxLength: 3,
          minLength: 3,
          regex: "a{3,6}"
        },
        formatting: {
          uppercase: true,
          spaces: "_"
        },
        input: "",
        formatted_input: "",
        messages: [],
        default: ""
      },
      {
        id: 4,
        name: "Volgnummer",
        options: ["000", "001", "002"],
        validation: {
          required: true,
          maxLength: 3,
          minLength: 3,
          regex: "a{3,6}"
        },
        formatting: {
          uppercase: true,
          spaces: "_"
        },
        input: "",
        formatted_input: "",
        messages: [],
        default: "000"
      },
      {
        id: 5,
        name: "Versionnummer",
        options: ["00", "01", "02"],
        validation: {
          required: true,
          maxLength: 2,
          minLength: 2,
          regex: "a{3,6}"
        },
        formatting: {
          uppercase: true,
          spaces: "_"
        },
        input: "",
        formatted_input: "",
        messages: [],
        default: "00"
      }
    ]
  },
  actions: {
    updateInput({ commit }, { field, input }) {
      let formatted_input = FormatService(input, field.formatting);
      // validate input incl set messages array
      let { messages } = ValidateService(formatted_input, field.validation);
      commit("UPDATE_FORMATTED_INPUT", { field, formatted_input });
      commit("UPDATE_MESSAGES", { field, messages });
      commit("UPDATE_INPUT", { field, input });
    },
    updateFormattedInput({ commit }, { field, formatted_input }) {
      commit("UPDATE_FORMATTED_INPUT", { field, formatted_input });
    },
    updateMessages({ commit }, { field, messages }) {
      commit("UPDATE_MESSAGES", { field, messages });
    }
  },
  getters,
  mutations: {
    UPDATE_INPUT(state, { field, input }) {
      const index = state.fields.indexOf(field);
      const uri = "input";
      console.log(uri);
      state.fields[index].input = input;
      //String(uri) = input;
    },
    UPDATE_FORMATTED_INPUT(state, { field, formatted_input }) {
      const index = state.fields.indexOf(field);
      state.fields[index].formatted_input = formatted_input;
    },
    UPDATE_MESSAGES(state, { field, messages }) {
      const index = state.fields.indexOf(field);
      state.fields[index].messages = messages;
    }
  }
});

export default store;
