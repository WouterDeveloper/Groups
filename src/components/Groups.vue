<template>
    <div class="grid">
      <article class="introText">
        <h1 class="introText__title">Groups</h1>
        <h2 class="introText__subtitle">An overview of all the groups</h2>
      </article>
      <section class="row">
        <div class="row__title">
          <img class="row__title" src="">
          <h3> Created groups</h3>
          <div class="button button--toggle"></div>
        </div>
      </section>
      <div class="card"  v-for="group in groups" :key="group.id">
          <div class="card__header"></div>
            <article class="card__text">
                <h4 class="card__text__title">{{group.Title}}</h4>
                <p class="card__text__text">{{group.Text}}</p>
            </article>  
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
      this.groups = await getAll("Groepen");
    }
  }
};
</script>

</script>