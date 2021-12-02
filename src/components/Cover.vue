<template>
  <div>
    <div :style="{background: 'url(' + img + ')', height: '50vh', backgroundSize: 'cover', backgroundPosition: 'center center', }">
      <div class="w-full h-full flex flex-col justify-center items-center" style="background: rgba(0,0,0,0.7)">
        <div>
          <h1 class="text-6xl text-center text-white py-5">{{titre}}</h1>
          <p class="text-center text-gray-400">Publié le {{dateFormate}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { format } from 'date-fns'
  import { fr } from 'date-fns/locale'
  export default {
    props: ['img', 'titre', 'date'],
    computed:{
      dateFormate(){
        return format(new Date(this.date), "dd MMMM y", { locale: fr })
      } 
    }
  }
</script>

<style>

</style>