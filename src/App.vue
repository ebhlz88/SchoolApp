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

</style>
