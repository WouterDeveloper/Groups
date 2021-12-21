<template>
    <div class="container">
      <div class="button__wrapper">
        <router-link style="text-decoration: none; color: inherit;" :to="{ path: `/GroupEdit/${id}`}">
          <button class="button--back" style="border:none">
              <img src="../assets/icons/Icon_edit.png" height="12px" width="12px">
              <p>Edit</p>
          </button>    
        </router-link>
        <button @click="$router.go(-1)" class="button--back" style="border:none">
          <img src="../assets/icons/Icon-back.png" height="10px" width="15px">
          <p>Go back</p>
        </button>
      </div>
      <article class="introText">
        <h1 class="introText__title">{{group.Title}}</h1>
        <h2 class="introText__subtitle">{{group.Text.substring (0,50)+".."}}</h2>
      </article>
      <section class="row">
        <div class="row__title">
          <div class="row__left-section">
            <img class="row__title__img" src="../assets/icons/Icon_images.png" height="20px" width="20px">
            <h3> Images</h3>
          </div>
        </div>
        <ul class="images-grid">
          <li class="images-grid__item"></li>
          <li class="images-grid__item"></li>
          <li class="images-grid__item" v-bind:style="{ 'background-image': 'url(' + group.img + ')' }"></li>
          <li class="images-grid__item"></li>
        </ul>
      </section>
      <section class="row">
        <div class="row__title">
          <div class="row__left-section">
            <img class="row__title__img" src="../assets/icons/Icon_images.png" height="20px" width="20px">
            <h3> Members</h3>
          </div>
        </div>
        <div class="images-row">
          <div class="images-row__left-side">
            <img class="images-row__item" src="../assets/img/Image_portrait-small_1.png" height="32px" width="32px">
            <img class="images-row__item" src="../assets/img/Image_portrait-small_2.png" height="32px" width="32px">
            <img class="images-row__item" src="../assets/img/Image_portrait-small_3.png" height="32px" width="32px">
            <img class="images-row__item" src="../assets/img/Image_portrait-small_4.png" height="32px" width="32px">
          </div>
          <div class="images-row__button button--view">
            <img class="images-row__icon" src="../assets/icons/Icon_view-group.png" height="12px" width="16px">
            <p class="images-row__button__text button--view__text">View more</p>
          </div>
        </div>
      </section>
      <section class="row">
        <div class="row__title">
          <div class="row__left-section">
            <img class="row__title__img" src="../assets/icons/Icon_book.png" height="20px" width="20px">
            <h3> Biography</h3>
          </div>
        </div>
        <div class="row__text">
            <p v-if="group.Text.length>0">{{group.Text}}</p>
            <p v-else>This group has no biography...</p>
        </div>
      </section>
      <section class="row last">
        <div class="row__title">
          <div class="row__left-section">
            <img class="row__title__img" src="../assets/icons/Icon_feed.png" height="20px" width="20px">
            <h3>Feed</h3>
          </div>
        </div>
        <div class="images-row__button button--view">
          <img class="images-row__icon" src="../assets/icons/Icon_add-black.png" height="12px" width="12px">
          <p class="images-row__button__text button--view__text">Create post</p>
        </div>
      </section>
    </div>
</template>
<script>
import { getGroupById } from "@/firebase/functions.js";

export default {
  props: ["id"],

  data() {
    return {
      group: {}
    };
  },

  created() {
    let id = this.getGroupById();
  },

  methods: {
  async getGroupById() {
      this.group = await getGroupById("Groepen", this.id);
    }
  }
};
</script>