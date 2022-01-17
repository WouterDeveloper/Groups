<template>
  <div class="container">
    <button @click="$router.go(-1)" class="button--back" style="border:none">
     <img src="../assets/icons/Icon-back.png" height="10px" width="15px">
      <p>Go back</p>
      </button>
     <article class="introText margin-top">
        <h1 class="introText__title">Create a group</h1>
        <h2 class="introText__subtitle">Fill in the data and create a group in no time at all</h2>
      </article>
    <form class="formulier" @submit.prevent="createGroup">
       <div class="formulier__row">
        <h3 clas="formulier__title">Enter a name for your group</h3>
         <input 
                id="Title"
                name="title"
                placeholder="Your group's name"
                type="text"
                required="required"
                class="formulier-control"
                aria-describedby="fillNameBlock"
                v-model="group.Title"
             /> 
      </div>
      <div class="formulier__row">
        <h3 clas="formulier__title">Pick an image for your group</h3>
        <input
              id="img"
              name="img"
              type="file"
              accept="image/*"
              class="formulier-control"
              ref="imageInput"
              style="display: none"
              @change="previewImage"
          />
          <div class="formulier__image-preview" 
          v-bind:style="{ 
            'background-image': 'url(' + group.img + ')'
            }"></div>
          <button class="formulier__image-button button__pick-image" type="button" @click="pickImage">
            <p>Click here to upload an image</p>
          </button>
      </div>
      <div class="formulier__row">
        <h3 clas="formulier__title">Enter a description for your group</h3>
        <textarea
                id="Text"
                name="text"
                placeholder="Describe your group in a few words"
                cols="40"
                rows="5"
                required="required"
                class="formulier-control"
                aria-describedby="fillDescriptionBlock"
                v-model="group.Text"
        ></textarea>
      </div>
      <div class="formulier__row">
          <button name="submit" type="submit" class="button button--submit" >
            <img src="../assets/icons/Icon_save.png" height="12px" width="12px">
            <p class="formulier__row__text">{{ buttonText }}</p>
          </button>
        </div>
    </form>  
  </div>
</template>


<script>
import { 
  addNew,
  uploadFile
  } 
  from "@/firebase/functions.js";

export default {
  props: ["id"],
  data: function() {
    return {
      group: {
        CreatedByUser: true,
        JoinedByUser: true,
        Title: "",
        Text: "",
        img: "http://via.placeholder.com/360x90?text=Placeholder+img+360x90",
      },
      imgFile: null,
      buttonText: "Create group"
    };
  },

  methods: {
    async createGroup() {
      if (this.imgFile != null) {
        this.group.img = await uploadFile(this.imgFile);
      }
      let createdGroupId = await addNew("Groepen", this.group);
      this.$router.push({ path: `/GroupDetail/${createdGroupId}` })
    },

    pickImage() {
      this.$refs.imageInput.click();
    },

    previewImage(event) {
      const file = event.target.files[0];
      const fileReader = new FileReader();
      fileReader.addEventListener("load", () => {
        this.group.img = fileReader.result;
      });
      fileReader.readAsDataURL(file);
      this.imgFile = file;
    }
  }
};
</script>

