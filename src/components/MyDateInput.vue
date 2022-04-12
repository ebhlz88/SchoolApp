<template>
  <div>
      <input type="text" class="inputprimary" v-mask="{mask: mask}" :value="modelValue" @input="onValueChange">
  </div>
</template>

<script>
export default {
name:'MyDateinput',
props:{
    modelValue:{
        type: String,
        default: "",
        required: true
    },
    mask:String,
},
data(){
    return{
        input_mode: this.mode,
        value: '',
        input_mask: this.mask,
    }
},
methods:{
     /**
     * Listen input value change emit to parent component
     * @param {string} event Input Event
     */
    onValueChange(event){
        this.$emit('update:modelValue',event.target.value)
    }
}
}
</script>

<style>

</style>