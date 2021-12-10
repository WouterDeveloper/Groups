<template>
  <div class="container">
        <div class="wrapper" v-for="group in groups" :key="group.id">
          <div class="card">
            <img class="card__header-image" src="../assets/logo.png">
              <article class="card__text">
                  <h1 class="card__text__title">{{group.name}}</h1>
                  <p class="card__text__text">{{group.description}}</p>
              </article>   
          </div>
        </div>
  </div>  
</template>

<script>
import { getAll } from "@/firebase/functions.js";

export default {
  data() {
    return {
      groups: []
    };
  },

  created() {
    this.getGroups();
  },

  methods: {
    async getGroups() {
      this.Groups = await getAll("Groups");
    }
  }
};
</script>