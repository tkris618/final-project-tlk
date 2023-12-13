<script>
import { public_key, ts, hashCode} from "@/js/marvel";
import axios from "axios";
import character from "@/components/Character.vue";

export default {
  name: "Characters",
  data() {
    return{
      characters: [],
      url: '',
      size: 'standard_large.jpg',
    }
  },

  mounted() {
    this.getCharacter();

  },
  methods: {
    // apikey=fc54e6d6e8283443b4ba296fcc41aa7f&hash=3b96eb3a4473663f11c9d0ea500e4c2a&ts=1
    getCharacter: function() {
      axios.get(`https://gateway.marvel.com/v1/public/characters?&apikey=${public_key}&hash=${hashCode}&ts=${ts}`)
          .then((result) => {
            console.log(result)
            result.data.data.results.forEach((item) => {
              // console.log(item)

              this.characters.push(item)
            })
          })
          .catch((error) => {
            console.log(error);
          })
    }
  }
}
</script>

<template>
  <div class="container-fluid searchResults">
    <div class="row">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-4 g-3 cardContainer">
  <div class="col-sm-6" v-for="character in characters">
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">{{character.name}}</h5>
      <router-link :to="{name: 'character', params: {id: character.id} }"><button class="btn btn-primary">View Comics</button></router-link>
    </div>
  </div>
      </div>
    </div>
  </div>
  </div>

</template>

<style scoped>

</style>