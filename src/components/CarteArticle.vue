<template>
    <article>
        <a :href="article.url">
          <img :src="article.img" class="object-cover w-full h-56 mb-5 bg-center rounded" alt="Kutty" loading="lazy" />
        </a>
        <h2 class="mb-2 text-lg font-semibold text-gray-900">
          <a :href="article.url" class="text-gray-900 hover:text-purple-700">{{article.title}}</a>
        </h2>
        <p class="mb-3 text-sm font-normal text-gray-500">
         {{article.extrait}}
        </p>
        <p class="mb-3 text-sm font-normal text-gray-500">
          <a href="#" class="font-medium text-gray-900 hover:text-purple-700 capitalize">{{article.cat}}</a>
        </p>
    </article>
</template>

<script>
  import { format } from 'date-fns'
  import { fr } from 'date-fns/locale'
  export default {
    props: ['article']
  }
</script>

<style>

</style>