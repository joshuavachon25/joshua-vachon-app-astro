<template> 
  <div>
    <div v-for="(article, index) in articles" :key="index">
      <CarteArticle :article="article" />
    </div>
  </div>
</template>

<script>
import CarteArticle from './CarteArticle.vue'
export default {
  components: { CarteArticle },
  props: ['articles']
}
</script>

<style>

</style>