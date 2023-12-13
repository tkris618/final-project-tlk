<script>
import Characters from "@/components/Characters.vue";
export default {
  name: "SearchView",
  components: {Characters},


}
</script>

<template>
<h3>Characters:</h3>
  <div class="container-fluid searchResults">

    <characters></characters>
  </div>
</template>

<style scoped>
p{
  text-align: center;
}
</style>