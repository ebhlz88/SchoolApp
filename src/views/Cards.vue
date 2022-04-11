<template>
<div class="flex flex-col justify-center items-center p-11 space-y-10">
  <div @click="navigate('/results')" class="flex flex-row space-x-20">
      <Cardview @click="navigate('/results')" text="Student Management" src="../src/assets/img/StudentMgmt.png"/>
      <Cardview @click="navigate('/results')" text="Staff Management" src="../src/assets/img/StaffMgmt.png"/>
      <Cardview @click="navigate('/results')" text="Result " src="../src/assets/img/ExamMgmt.png"/>
      <Cardview @click="navigate('/results')" text="Fees" src="../src/assets/img/ExamMgmt.png"/>
  </div>
  <div>
      
      <Cardview text="Library is text" src="../src/assets/img/ExamMgmt.png"/>
  </div>
  </div>
</template>

<script>
import Cardview from '../components/Cardview.vue'
export default {
    name:'cards',
    components:{
        Cardview
    },
    methods:{
      navigate(path){
        this.$router.push(path)
      }
    }

}
</script>

<style>

</style>