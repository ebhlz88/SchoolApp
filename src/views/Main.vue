<template>
    <div class="blueGradient">
        <div>
            <div>
                <div class="flex flex-row justify-cente space-x-4 r p-7 ">
                    <div class="flex items-center shadow-2xl flex-col w-1/3 rounded-lg text-white">
                        <h3 class="text-center p-5 font-bold text-2xl">Login</h3>
                        <form class=" rounded w-3/4 px-8 pt-6 pb-8 mb-4">
                            <div class="mb-4">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    Username
                                </label>
                                <input
                                    class="inputprimary"
                                    id="username" type="text" placeholder="Username" v-model="logindata.username">
                            </div>
                            <div class="mb-6">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                                    Password
                                </label>
                                <input
                                    class="inputprimary"
                                    id="password" type="password" placeholder="******************" v-model="logindata.password">
                            </div>
                            <div class="flex items-center justify-between">
                                <button
                                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="button" @click="login">
                                    Sign In
                                </button>
                            </div>
                        </form>
                    </div>
                    <div class="flex justify-center items-end w-3/5">
                        <img src="../assets/img/students.png" class="" alt="landing image" />
                    </div>
                </div>
            </div>
            <div class="h-14"></div>

            <img src="../assets/img/wave1.png" alt="wave" class="bottom-image" />
        </div>
    </div>
    <!-- <font-awesome-icon  :icon="['fas', 'user']" id="basic-addon1" /> -->
</template>

<script>
import ApiService from "../Services/ApiService";
import AuthService from "../Services/AuthService";
export default {
    data(){
  return{
    logindata:{
      username:null,
      password:null,
    }
  }

},
methods:{
  login(){
    ApiService.postRequest('login',this.logindata).then(res=>{
    AuthService.setAccessToken(res.data.token)
    this.$router.push('/card')
})
  },
}
}
</script>

<style scoped>
</style>
