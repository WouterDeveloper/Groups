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
        <div v-for="group in groups" :key="group.id">
          <div class="card" v-if="group.CreatedByUser === true && group.JoinedByUser === true">
            <div class="card__header" v-bind:style="{ 'background-image': 'url(' + group.img + ')' }"></div>
              <article class="card__text">
                  <h4 class="card__text__title">{{group.Title}}</h4>
                  <p class="card__text__text">{{group.Text}}</p>
              </article>  
              <router-link style="text-decoration: none; color: inherit;" :to="{ path: `/GroupDetail/${group.id}`}" class="card__button">
                <img class="card__icon" src="../assets/icons/Icon_view-group.png" height="12px" width="16px">
                <p>View group</p>
              </router-link>
            </div>
        </div> 
      </section>
 
      <section class="row">
        <div class="row__title">
          <div class="row__left-section">
            <img class="row__title__img" src="../assets/icons/Joined-groups_icon.png" height="20px" width="20px">
            <h3> Joined groups</h3>
          </div>
          <img class="button button--toggle" src="../assets/icons/Button-toggle.png" height="24px" width="24px">
        </div>
        <div v-for="group in groups" :key="group.id">
          <div class="card" v-if="group.CreatedByUser === false && group.JoinedByUser === true">
            <div class="card__header" v-bind:style="{ 'background-image': 'url(' + group.img + ')' }"></div>
                <article class="card__text">
                    <h4 class="card__text__title">{{group.Title}}</h4>
                    <p class="card__text__text">{{group.Text}}</p>
                </article>  
                <router-link style="text-decoration: none; color: inherit;" :to="{ path: `/GroupDetail/${group.id}`}" class="card__button">
                  <img class="card__icon" src="../assets/icons/Icon_view-group.png" height="12px" width="16px">
                  <p>View group</p>
                </router-link>
            </div>
        </div> 
      </section>
       <section class="row">
        <div class="row__title">
          <div class="row__left-section">
            <img class="row__title__img" src="../assets/icons/Other-groups_icon.png" height="20px" width="20px">
            <h3> Other groups</h3>
          </div>
          <img class="button button--toggle" src="../assets/icons/Button-toggle.png" height="24px" width="24px">
        </div>
          <div v-for="group in groups" :key="group.id">
        <div class="card" v-if="group.CreatedByUser === false && group.JoinedByUser === false">
            <div class="card__header" v-bind:style="{ 'background-image': 'url(' + group.img + ')' }"></div>
              <article class="card__text">
                  <h4 class="card__text__title">{{group.Title}}</h4>
                  <p class="card__text__text">{{group.Text}}</p>
              </article>  
              <router-link style="text-decoration: none; color: inherit;" :to="{ path: `/GroupDetail/${group.id}`}" class="card__button">
                <img class="card__icon" src="../assets/icons/Icon_view-group.png" height="12px" width="16px">
                <p>View group</p>
              </router-link>
          </div>
      </div>  
      </section>
      <router-link class="button__create-group" to="/CreateGroup" tag="button">
        <img class="row__title__img" src="../assets/icons/Icon_create-group.png" height="16px" width="16px">
        <p>Create group</p>
      </router-link>
    </div>
</template>

<script>
import { getAll } from "@/firebase/functions.js";
import { getGroupById } from "@/firebase/functions.js";

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
    },
     async getGroupById() {
      this.group = await getGroupById("Groepen", this.id);
    }
  }
};
</script>
