<script>
export default {
  name: "Favorites",
  data() {
    return {
      favorites: []
    }
  },
  mounted() {
    this.getFavoritesFromLocalStorage()

    console.log('favorite item', this.favorites)
  },
  methods: {
    getFavoritesFromLocalStorage: function () {
      let currentList = JSON.parse(localStorage.getItem('favorites'))

      console.log(currentList)
      if(currentList) {
        this.favorites = currentList
      }
    },
    removeFromList: function (comicId) {
      let currentList =  this.favorites;

      this.favorites = currentList.filter(x => x.id !== comicId)

      localStorage.setItem('favorites', JSON.stringify(this.favorites))
    }
  }
}
</script>

<template>
<h3>Favorite Items</h3>

  <div class="col-md-5 col-lg-4 col-xl-3 offset-xl-1 order-md-last">
    <ul class="list-group mb-3" v-for="(item, index) in favorites">
      <li class="list-group-item d-flex justify-content-between lh-sm" :key="index">
        <div>
          <h6 class="my-0">{{ item.title  }}</h6>
        </div>
        <button class="btn btn-primary btn-sm" @click="removeFromList(item.id)">Remove</button>
      </li>
    </ul>
  </div>

</template>

<style scoped>
btn {

}
</style>