<template>
    <div class="container">
        <button class="button--back" style="border:none">
     <img src="../assets/icons/Icon_edit.png" height="12px" width="12px">
      <p>Edit</p>
      </button>
      <article class="introText">
        <h1 class="introText__title">{{group.Title}}</h1>
        <h2 class="introText__subtitle">{{group.Text.substring  (0,40)+".."}}</h2>
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
          <li class="images-grid__item"></li>
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
            <p v-if="group.Text.length>0">{{ group.Text }}</p>
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
import { getById } from "@/firebase/functions.js";

export default {
   props: ["id"],
  data() {
    return {
      group: {}
    };
  },

  created() {
    this.getById();
  },

  methods: {
  async getById() {
      this.group = await getById("Groepen", this.id);
    }
  }
};
</script>