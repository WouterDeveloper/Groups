<template>
    <div class="grid">
      <article class="introText">
        <h1 class="introText__title">Groups</h1>
        <h2 class="introText__subtitle">An overview of all the groups</h2>
      </article>
      <section class="row">
        <div class="row__title">
          <div class="row__left-section">
            <img class="row__title__img" src="../assets/icons/Created-groups_icon.png" height="20px" width="20px">
            <h3> Created groups</h3>
          </div>
          <img class="button button--toggle" src="../assets/icons/Button-toggle.png" height="24px" width="24px">
        </div>
      </section>
      <div class="card"  v-for="group in groups" :key="group.id">
          <div class="card__header"></div>
            <article class="card__text">
                <h4 class="card__text__title">{{group.Title}}</h4>
                <p class="card__text__text">{{group.Text}}</p>
            </article>  
            <button class="card__button">
              <img class="card__icon">
              <p>Exit group</p>
            </button>
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