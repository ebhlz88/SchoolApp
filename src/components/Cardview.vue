<template>
    <div class="hover:cursor-pointer">
      <div class="flex flex-col justify-center items-centerrounded-lx">
       <img class="h-64 w-64" :src="src" alt="">
        <div class="bg-interblue py-5 px-12 w-64 rounded-xl text-white flex justify-center items-center"><p>{{text}}</p></div>
      </div>
    </div>  
</template>

<script>
export default {
    name:'cardview',
    props:{
        'text':String,
        'src':String,
    },
    

}
</script>

<style>
.color{
    color: rgb(77, 77, 255);
}
.hh{
  background-image: url('../assets/img/StaffMgmt.png')
}
</style>