<script setup>
import Header from './Layout/Header.vue'
</script>

<template>
 <Header/>
  <RouterView />
</template>

<style>
.blueGradient{
  @apply bg-gradient-to-r from-blue to-lightblue
}
.inputprimary{
  @apply mt-1 md:h-10  block w-full shadow-sm sm:text-sm rounded-md md:border-slate border-2 md:p-2
}

</style>
