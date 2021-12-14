<template>
  <div class="container">
    <button @click="$router.go(-1)" class="button--back" style="border:none">
     <img src="../assets/icons/Icon-back.png" height="10px" width="15px">
      <p>Go back</p>
      </button>
     <article class="introText">
        <h1 class="introText__title">Create a group</h1>
        <h2 class="introText__subtitle">Fill in the data and create a group in no time at all</h2>
      </article>
    <form class="form" @submit.prevent="createGroup">
      <div class="form__row">
        <h3 clas="form__title">Enter a name for your group</h3>
         <input 
                id="Title"
                name="title"
                placeholder="Your group's name"
                type="text"
                required="required"
                class="form-control"
                aria-describedby="fillNameBlock"
                v-model="group.Title"
             /> 
      </div>
      <div class="form__row">
        <h3 clas="form__title">Enter a description for your group</h3>
        <textarea
                id="Text"
                name="text"
                placeholder="Describe your group in a few words"
                cols="40"
                rows="5"
                required="required"
                class="form-control"
                aria-describedby="fillDescriptionBlock"
                v-model="group.Text"
        ></textarea>
      </div>
      <div class="form__row">
          <button name="submit" type="submit" class="button button--submit">
            <img src="../assets/icons/Icon_save.png" height="12px" width="12px">
            <p class="form__row__text">{{ buttonText }}</p>
          </button>
        </div>
    </form>  
  </div>
</template>


<script>
import { addNew } from "@/firebase/functions.js";

export default {
  props: ["id"],
  data: function() {
    return {
      group: {
        CreatedByUser: true,
        JoinedByUser: true,
        Title: "",
        Text: ""
      },
      buttonText: "Create group"
    };
  },

  methods: {
    async createGroup() {
      let createdGroupId = await addNew("Groepen", this.group);
      this.$router.push({ path: `/GroupDetail/${createdGroupId}` })
    }
  }
};
</script>

