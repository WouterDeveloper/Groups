<template>
  <div class="container">
    <button @click="$router.go(-1)" class="button--back" style="border:none">
      <img src="../assets/icons/Icon-back.png" height="10px" width="15px">
      <p>Go back</p>
    </button>
     <article class="introText">
        <h1 class="introText__title">Edit group</h1>
        <h2 class="introText__subtitle">Edit the fields you want and click save</h2>
      </article>
    <form class="form" @submit.prevent="EditGroup">
       <div class="form__row">
        <h3 clas="form__title">Change the name of the group</h3>
        <p>{{group.Title}}</p>
         <input 
                id="Title"
                name="title"
                :placeholder="group.Title"
                type="text"
                required="required"
                class="form-control"
                aria-describedby="fillNameBlock"
                v-model="group.Title"
             /> 
      </div>
      <div class="form__row">
        <h3 clas="form__title">Pick an image for your group</h3>
        <input
              id="img"
              name="img"
              type="file"
              accept="image/*"
              class="form-control"
              ref="imageInput"
              style="display: none"
              @change="previewImage"
          />
          <div class="form__image-preview" type="button"
            v-bind:style="{ 
              'background-image': 'url(' + group.img + ')'
              }">
          </div>
          <button class="form__image-button button__pick-image" @click="pickImage">
            <p>Click here to upload an image</p>
          </button>
      </div>
      <div class="form__row">
        <h3 clas="form__title">Enter a description for your group</h3>
        <textarea
                id="Text"
                name="text"
                :placeholder="group.Text"
                cols="40"
                rows="5"
                required="required"
                class="form-control"
                aria-describedby="fillDescriptionBlock"
                v-model="group.Text"
        ></textarea>
      </div>
      <div class="form__row">
          <button name="submit" type="submit" class="button button--submit" @click="editGroup">
            <img src="../assets/icons/Icon_save.png" height="12px" width="12px">
            <p class="form__row__text">{{ buttonText }}</p>
          </button>
        </div>
    </form>  
  </div>
</template>


<script>
import { 
  getGroupById,
  updateById,
  uploadFile
  } 
  from "@/firebase/functions.js";

export default {
  props: ["id"],
  data: function() {
    return {
      group: {},
      imgFile: null,
      buttonText: "Save group"
    };
  },

  created() {
    this.getGroupById();
  },

  methods: {
  async getGroupById() {
        this.group = await getGroupById("Groepen", this.id);
  },
    
  async editGroup() {
    if (this.imgFile != null) {
      this.group.img = await uploadFile(this.imgFile);
    }
    if (this.id != null) {
      updateById("Groepen", this.id, this.group);  
    } 
    this.$router.push({ path: `/GroupDetail/${this.id}` })
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

