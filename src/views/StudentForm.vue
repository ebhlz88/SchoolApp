<template>
    <div>
        <FormContainer>
            <div class="ml-auto mr-11">
                <div class="overflow-hidden sm:rounded-md">
                    <div class="px-4 py-5 sm:p-6">
                        <div class="grid grid-cols-6 gap-6">

                            <div class="col-span-6 sm:col-span-3">
                                    <label for="formFile" class="block text-sm font-medium text-gray-700">Default file input example</label>
                                    <input @change="onChange" class="form-control
                                    block
                                    w-full
                                    px-3
                                    py-1.5
                                    text-base
                                    font-normal
                                    text-gray-700
                                    bg-white bg-clip-padding
                                    border border-solid border-gray-300
                                    rounded
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="file" id="formFile">
                               
                            </div>
                            <br/>
                            <div class="col-span-6 sm:col-span-3">
                                <label for="first_name" class="block text-sm font-medium text-gray-700">
                                    Name</label>
                                <input type="text" name="first_name" v-model="posts.s_name" id="first_name" autocomplete="given-name"
                                    class="inputprimary">
                            </div>

                            <div class="col-span-6 sm:col-span-3">
                                <label for="last_name" class="block text-sm font-medium text-gray-700">Father
                                    Name</label>
                                <input type="text" v-model="posts.s_fname" name="last_name" id="last_name" autocomplete="family-name"
                                    class="inputprimary">
                            </div>

                            <div class="col-span-6 sm:col-span-4">
                                <label for="email_address" class="block text-sm font-medium text-gray-700">
                                    Address</label>
                                <input type="text" v-model="posts.address" name="email_address" id="email_address" autocomplete="email"
                                    class="inputprimary">
                            </div>

                            <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                <label for="postal_code" class="block text-sm font-medium text-gray-700">Date of
                                    Birth</label>
                                <MyDateInput v-model="posts.dob" mask="9999-99-99" />
                            </div>

                            <div class="col-span-6 sm:col-span-3">
                                <label for="country" class="block text-sm font-medium text-gray-700">Sex</label>
                                <select id="country" v-model="posts.sex" name="country" autocomplete="country" class="inputprimary">
                                    <option disabled>Select Gender</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                            </div>

                            <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                <label for="postal_code" class="block text-sm font-medium text-gray-700">Date of
                                    Joining</label>
                                <MyDateInput v-model="posts.date_join" mask="9999-99-99" />
                            </div>

                            <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                                <label for="street_address" class="block text-sm font-medium text-gray-700">Mobile</label>
                                <input type="text" name="street_address" v-model="posts.fm_number" id="street_address"
                                    autocomplete="street-address" class="inputprimary">
                            </div>

                             <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                <label for="country" class="block text-sm font-medium text-gray-700">Blood Group</label>
                                <select id="country" v-model="posts.bloodgroup" name="country" autocomplete="country" class="inputprimary">
                                    <option disabled>Select Blood Group</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                            </div>
                            
                             <div class="col-span-6 sm:col-span-3 pt-10 lg:col-span-2 items-end justify-end">
                                <input v-model="posts.c_position" class="form-check-input  appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" checked>
                                    <label class="form-check-label inline-block text-gray-800" for="flexCheckChecked">
                                        Currently Enrolled</label>
                            </div>
                        </div>
                    </div>
                    <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                        <button  @click="savedata"
                            class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </FormContainer>
        {{posts}}
    </div>
</template>

<script>
import MyDateInput from '../components/MyDateInput.vue'
import FormContainer from '../components/FormContainer.vue'

import ApiService from "../Services/ApiService";
export default {
    name: 'Formcontainer',
    data() {
        return {
                  posts: {
                        s_name: null,
                        s_fname: null,
                        dob: '',
                        date_join: '',
                        c_position: true,
                        address: null,
                        fm_number: null,
                        sex: null,
                        bloodgroup: null,
                        currentStandard: 5,
                        imagefile:null,
                    },
        }
    },
    components: {
        MyDateInput,
        FormContainer
    },
    methods:{
        onChange(e){
            this.posts.imagefile = e.target.files[0]
              },
        savedata(){
            let data = new FormData();
            data.append("s_name", this.posts.s_name);
            data.append("s_fname", this.posts.s_fname);
            data.append("dob", this.dob);
            data.append("date_join", this.join_date);
            data.append("sex", this.posts.sex);
            data.append("fm_number", this.posts.fm_number);
            data.append("c_position", this.posts.c_position);
            data.append("address", this.posts.address);
            data.append("student_pic", this.posts.imagefile);
            data.append("bloodgroup", this.posts.bloodgroup);
            data.append("currentStandard", this.posts.currentStandard);
            ApiService.postRequest('',data).then(res=>{
                console.log(res.data)
            })

        }

}
}
</script>

<style>
</style>