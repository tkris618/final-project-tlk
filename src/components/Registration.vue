<script setup>
import {ref} from "vue";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {useRouter} from 'vue-router' //import the router
const email = ref("");
const password = ref("");
const router = useRouter()
const register = () => {
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
      .then((data) => {
        console.log("successfully registered");
        router.push('/favorite') //redirect to favorites
      })
}

</script>
<script>
export default {
  name: "Registration"
}
</script>

<template>
  <p><input type="text" placeholder="Email" v-model="email"/></p>
  <p><input type="password" placeholder="Password" v-model="password"/></p>
  <p><button class="btn btn-primary" @click="register">Submit</button></p>
</template>

<style scoped>

</style>