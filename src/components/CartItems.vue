<script>
export default {
  name: "CartItems",
  data() {
    return {
      cartItems: []
    }
  },
  mounted() {
    this.getCartFromLocalStorage()

    console.log('cart item', this.cartItems)
  },
  methods: {
    getCartFromLocalStorage: function() {
      let currentCart = JSON.parse(localStorage.getItem('cart'));

      console.log(currentCart)
      if(currentCart) {
        this.cartItems = currentCart
      }
    },
    removeFromCart: function(comicId) {
      let currentCart = this.cartItems;

      this.cartItems = currentCart.filter(x => x.id !== comicId)

      localStorage.setItem('cart', JSON.stringify(this.cartItems))

    }
  }
}
</script>

<template>
  <div class="col-md-5 col-lg-4 col-xl-3 offset-xl-1 order-md-last">
    <h4 class="d-flex justify-content-between align-items-center mb-3">Cart</h4>
    <ul class="list-group mb-3" v-for="(item, index) in cartItems">
      <li class="list-group-item d-flex justify-content-between lh-sm" :key="index">
        <div>
          <h6 class="my-0">{{ item.title  }}</h6>
        </div>
        <button class="btn btn-primary btn-sm" @click="removeFromCart(item.id)">Remove</button>
      </li>
    </ul>
  </div>

</template>

<style scoped>

</style>