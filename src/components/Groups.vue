<template>
  <!-- <div class="container">
        <div class="wrapper" v-for="group in groepen" :key="group.id">
          <div class="card">
            <img class="card__header-image" src="../assets/logo.png">
              <article class="card__text">
                  <h1 class="card__text__title">{{group.Title}}</h1>
                  <p class="card__text__text">{{group.Text}}</p>
              </article>   
          </div>
        </div>
  </div>   -->
  <div class="container">
        <div class="wrapper">
          <div class="card">
            <img class="card__header-image" src="../assets/logo.png">
              <article class="card__text">
                  <h1 class="card__text__title"></h1>
                  <p class="card__text__text"></p>
              </article>   
          </div>
        </div>
  </div>  
</template>

<script>
import { collection, getDocs } from "firebase/firestore"; 


export default {
 created() {
    this.getGroups();
  },

 methods: {
    async getGroups() {
     const querySnapshot = await getDocs(collection(db, "Groepen"));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
      });
    }
  }
};

</script>