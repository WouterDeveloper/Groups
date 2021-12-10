<template>

  <div class="container">
      <div class="card">
        <img class="card__header-image" src="../assets/logo.png">
         <input
              id="name"
              name="name"
              placeholder="Your group's name"
              type="text"
              required="required"
              class="form-control"
              v-model="group.title"
            /> 
        </div>
        <div class="form-group row">
          <label for="description" class="col-md-4 col-12 col-form-label">Group Description</label>
          <div class="col-md-8 col-12">
            <textarea
              id="description"
              name="description"
              placeholder="Describe your group in a few words"
              cols="40"
              rows="5"
              class="form-control"
              aria-describedby="descriptionHelpBlock"
              v-model="group.text"
            ></textarea>
          </div>
        </div>
  </div>
</template>


<script>
import {
  getById,
} from "@/firebase/functions.js";

export default {
  props: ["id"],
  data: function() {
    return {
      group: {
        name: "",
        description: "",
      },
      buttonText: "create new group"
    };
  },

  watch: {
    // call again the method if the route changes
    $route: "getgroup"
  },

  methods: {
    // async processForm() {
    //   if (this.id != null) {
    //     updateById("group", this.id, this.group);
    //   } else {
    //     addNew("group", this.group);
    //   }
    //   this.$router.push({ name: "teamoverview" });
    // },

    async getgroup() {
      this.group = await getById("group", this.id);
      this.buttonText =
        this.group.id !== null ? "edit group" : "create new group";
    },

  }
};
</script>

