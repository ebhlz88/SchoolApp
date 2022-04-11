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
  @apply shadow rounded w-full py-2 px-3 mb-3 leading-tight
}

</style>
