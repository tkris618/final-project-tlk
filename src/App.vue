<script setup>

import { RouterLink, RouterView } from 'vue-router'

import {ref, watchEffect} from "vue";
//import firebase from 'firebase';

import {useRouter} from "vue-router";
const router = useRouter()
const isLoggedIn = ref(false);

firebase.auth().onAuthStateChanged(function(user) {
  if(user) {
    isLoggedIn.value = true //if there is a user logged in
  } else {
    isLoggedIn.value = false // if no user is logged in
  }
})
const signOut = () => {
  firebase.auth().signOut()
  router.push('/')
}



</script>

<template>

  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <h1>Comics R Us: <small>Marvel Edition</small> </h1>
      <div class="" id="navbarNavAltMarkup">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/search" class="nav-link">Search</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/cart" class="nav-link">Cart</RouterLink>
          </li>
          <li class="nav-item">
            <router-link to="/favorites" class="nav-link" v-if="isLoggedIn">Favorites</router-link>
          </li>
          <li class="nav-item">
          <button class="btn btn-primary" @click="signOut" v-if="isLoggedIn">Sign Out</button>
            <router-link to="/login" class="nav-link btn btn-primary" v-else >Login</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

    <div class="container-fluid">
      <div class="row-header" >
        <div class="col text-center headerImgContainer">
          <!--Image borrowed for educational purposes-->
          <img src="/src/assets/images/Marvel-Artists-Page-Banner.jpg" class="img-fluid" alt="marvel logo" />        </div>
      </div>
    </div>



<div class="container-fluid mainContent">
  <RouterView />
</div>
    <!-- Footer -->
    <footer class="text-center">
      <!-- Grid container -->
      <div class="container p-4 pb-0">
        <!-- Section: CTA -->
        <section class="footerBtns">
          <p class="d-flex justify-content-center align-items-center">
            <span class="me-3"><RouterLink to="/about"><button type="button" class="btn btn-primary btn-rounded btnfooter">About</button></RouterLink> </span>
            <RouterLink to="/register"><button data-mdb-ripple-init type="button" class="btn btn-primary btn-rounded btnfooter">Sign Up</button></RouterLink>

          </p>
        </section>
        <!-- Section: CTA -->
      </div>
      <!-- Grid container -->

      <!-- Copyright -->
      <div class="text-center p-3 copyright">
        © 2023 Copyright: Comics R Us <br>
        Data Provided By Marvel. © 2023 MARVEL
      </div>
      <!-- Copyright -->
    </footer>
    <!-- Footer -->


</template>

<style scoped>

</style>
