<template>
    <nav id="nav" class="blueGradient ">
      <div class="flex flex-row items-center w-full">
        <router-link to="/"
          ><img class="h-20 w-20 p-3 ml-3" src="../assets/img/Estaal.png" alt="logo"
        /></router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fa fa-bars" aria-hidden="true"></i>
        </button>
        <div class="self-center">
          <ul class="flex flex-row ml-52 text-white space-x-6 uppercase">
            <li >
              <router-link class="text-white"  to="/"
                ><b >Home</b></router-link
              >
            </li>
            <li >
              <router-link  to="/list"
                ><b>Student</b></router-link
              >
            </li>
            <li >
              <router-link  to="/books"
                ><b>Library</b></router-link
              >
            </li>
            <li >
              <router-link  to="/"><b>Login</b></router-link>
            </li>
            <li >
              <div  v-on:click="logout" class="hover:cursor-pointer">
                <b>Logout</b>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style>
.text-white{
    color: white;
}
</style>