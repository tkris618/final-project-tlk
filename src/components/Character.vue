<script>
import {public_key, ts, hashCode} from "@/js/marvel";
import axios from "axios";

export default {
  name: "Character",

  data() {
    return {
      comics: [],
      url: '',
      size: 'standard_large.jpg',

    }
  },

  mounted() {
    this.getCharacter()

  },

  methods: {
    getCharacter: function() {

      var characterId = this.$route.params.id

      axios.get(`https://gateway.marvel.com/v1/public/characters/${characterId}/comics?&apikey=${public_key}&hash=${hashCode}&ts=${ts}`)
          .then((result) => {
            console.log('Selected comics', result)
              result.data.data.results.forEach((item) => {
                this.comics.push(item)


                this.url = `${item.thumbnail.path.replace('http://', 'https://')}/${this.size}`
                console.log(this.url)

              })
            })
          .catch((error) => {
        console.log(error)
      })

    },
    addToCart: function (comic){

      console.log(comic)
      let newCart = [];
      let currentCart = JSON.parse(localStorage.getItem('cart'));

      if(currentCart) {
        newCart = currentCart;
      }

      newCart.push(comic);

      localStorage.setItem('cart', JSON.stringify(newCart))

    },

    addToFavorites: function (comic){
      console.log(comic)
      let favoritesList = [];
      let currentList = JSON.parse(localStorage.getItem('favorites'));

      if(currentList) {
        favoritesList = currentList;
      }
      favoritesList.push(comic);

      localStorage.setItem('favorites', JSON.stringify(favoritesList))
    }

  },

}
</script>

<template>
  <h3>Characters Comics: </h3>
  <div class="container-fluid searchResults">
    <div class="row">
  <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-4 g-3 cardContainer">
    <div class="col-sm-6" v-for="comic in comics" :key="comic.id" :item="comic.id" v-if="comic in comics !== 0">
      <div class="card" style="width: 18rem;">

        <div class="card-body">
          <img :src="url" class="card-img-top" alt="...">
              <h5 class="card-title">Comic {{comic.title}}</h5>
              <p class="card-text">{{comic.description}}</p>
              <a href="#" class="btn btn-primary" @click="addToCart(comic)" id="add">Add to cart</a>
          <button class="btn btn-primary" id="btnFav" @click="addToFavorites(comic)">Favorite</button>
        </div>
      </div>
    </div>
    <div v-else>
      <h2>Sorry no comics for this person.</h2>
    </div>
  </div>

    </div>
  </div>
</template>

<style scoped>
btnFav{
  margin-left: 10px;
}
</style>