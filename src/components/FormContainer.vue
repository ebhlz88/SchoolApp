<template>
    <div class="blueGradient min-h-screen flex flex-row">
        <div class="w-1/5 bg-blend-color-dodge"></div>
        <div class="bg-blend-color-dodge  flex ml-auto">
            <div class="p-10 pl-24 bg-white shadow borderRad">
                <slot></slot>
            </div>
        </div>  
    
    </div>
</template>

<script>
import MyDateInput from '../components/MyDateInput.vue'
export default {
    name:'Formcontainer',
    data(){
        return{
            date:''
        }
    },
    components:{
        MyDateInput
    }

}
</script>

<style scoped>
.borderRad {
    border-radius: 14% 0% 0% 11% / 45% 0% 0% 49%
}
</style>