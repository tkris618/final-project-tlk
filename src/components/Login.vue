<script setup>
import {ref} from "vue";
import {useRouter} from 'vue-router'
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import firebase from "firebase/compat/app";
const email = ref("");
const password = ref("");
const router = useRouter()

const login = () => {


  const auth = getAuth();
  signInWithEmailAndPassword(auth, email.value, password.value)
      .then((data) => {
        console.log('successfully signed in!')

        router.push("/search");
      })

}
</script>

<script>

export default {
  name: "Login"
}
</script>

<template>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="text" placeholder="Email" v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">

    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" placeholder="Password" v-model="password" class="form-control" id="exampleInputPassword1">
  </div>
  <button class="btn btn-primary" @click.prevent="login" id="login">Submit</button>
  <p id="message"></p>

  <div>
    <p>Dont have an account? </p>
    <router-link to="/register"><button type="button" id="signupbtn" class="btn btn-primary">Sign Up</button></router-link>

  </div>

</template>

<style scoped>
#signupbtn{
  padding-bottom: 20px;
}
</style>