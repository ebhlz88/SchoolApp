<template>
  <div>
      <input type="text" class="inputprimary w-64 m-4" placeholder="Search Here" v-model="searchtext">
      <MyTable :data="data"/>
  </div>
</template>

<script>
import MyTable from '../components/Table.vue'
import ApiService from "../Services/ApiService";
export default {
name:'Students',
components:{
    MyTable
},
data(){
    return{
        data:undefined,
        searchtext:'',
    }
},
watch:{
    searchtext(){
        ApiService.getRequest('studentsearch/?search='+this.searchtext).then(res=>{
        this.data=res.data

    })
    }
},
mounted(){
    ApiService.getRequest('studentsearch/').then(res=>{
        this.data=res.data

    })
},
methods:{


}
}
</script>

<style>

</style>