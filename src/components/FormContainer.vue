<template>
  <div id="regist" class="register">
    <!-- v-if="isloggedin" -->
    <div class="row">
      <div class="col-md-3 register-left">
        <div class="card-container">
          <div class="card m-3">
            <div class="front">
              <i class="fa fa-users icon"></i><br />
              <p class="fontsize"><b>Number of Students</b></p>
            </div>
            <div v-if="countinfo" class="back">
              {{ countinfo.studentcount }}
            </div>
          </div>
        </div>
        <br />
        <div class="card-container">
          <div class="card">
            <div class="front">
              <i class="fa fa-users icon"></i><br />
              <p class="fontsize"><b>Number of Teachers</b></p>
            </div>
            <div v-if="countinfo" class="back">
              {{ countinfo.teachercount }}
            </div>
          </div>
        </div>
        <br />
      </div>
      <div class="col-md-9 register-right">
        <ul class="nav nav-tabs nav-justified" id="myTab" role="tablist">
          <li class="nav-item">
            <button
              class="nav-link"
              :class="{ active: studentshow }"
              id="home-tab"
              data-toggle="tab"
              v-on:click="
                teachershow = false;
                studentshow = true;
              "
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              Add Student
            </button>
          </li>
          <li class="nav-item">
            <button
              class="nav-link"
              v-on:click="
                studentshow = false;
                teachershow = true;
              "
              :class="{ active: teachershow }"
              id="profile-tab"
              data-toggle="tab"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Add Teacher
            </button>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.fontsize {
  font-size: 50%;
}
.icon {
  padding-top: 40px;
}
.register {
  background: -webkit-linear-gradient(left, #3931af, #00c6ff);
  padding: 3%;
}
.nl {
  width: 100px;
}
.register-left {
  text-align: center;
  color: #fff;
  margin-top: 4%;
}
.register-left .routerlink {
  border: none;
  border-radius: 1.5rem;
  padding: 4% 8%;
  width: auto;
  background: #f8f9fa;
  text-decoration: none;
  font-weight: bold;
  color: #383d41;
  margin-top: 0%;
  margin-bottom: 15%;
  cursor: pointer;
}
.register-right {
  background: #f8f9fa;
  border-top-left-radius: 10% 50%;
  border-bottom-left-radius: 10% 50%;
}
@-webkit-keyframes mover {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-20px);
  }
}
@keyframes mover {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-20px);
  }
}
.register-left p {
  font-weight: lighter;
  padding: 12%;
  margin-top: -9%;
}
.register .register-form {
  padding: 10%;
  margin-top: 10%;
}
.btnRegister {
  float: right;
  margin-top: 10%;
  border: none;
  border-radius: 1.5rem;
  padding: 2%;
  background: #0062cc;
  color: #fff;
  font-weight: 600;
  width: 50%;
  cursor: pointer;
}
.register .nav-tabs {
  margin-top: 3%;
  border: none;
  background: #0062cc;
  border-radius: 1.5rem;
  width: 28%;
  float: right;
}
.register .nav-tabs .nav-link {
  padding: 1%;
  height: 34px;
  font-weight: 600;
  color: #fff;
  border-top-right-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;
}
.register .nav-tabs .nav-link:hover {
  border: none;
}
.register .nav-tabs .nav-link.active {
  width: 120px;
  color: #0062cc;
  border: 2px solid #0062cc;
  border-top-left-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;
}
.register-heading {
  text-align: center;
  margin-top: 8%;
  margin-bottom: -15%;
  color: #495057;
}
#myTabContent #home {
  background-color: transparent;
}
.form-group {
  margin: 6px;
}
.widthdp {
  width: 355px;
}
@media screen and (max-width: 450px) {
  .widthdp {
    width: 230px;
  }
  .form-group {
    width: 230px;
  }
  .register .nav-tabs {
    width: 35%;
  }
  .btnRegister {
    padding: 6%;
    width: 110px;
  }
}
.current {
  padding-right: 200px;
}

.card-container {
  display: inline-block;
  margin: 0 auto;
  padding: 0 12px;
  perspective: 900px;
  text-align: center;
}
#regist .card {
  position: relative;
  width: 197px;
  height: 150px;
  background: #0c54b3;
  transition: all 0.6s ease;
  transform-style: preserve-3d;
}

.front,
.back {
  position: absolute;
  background: #59a1ff;
  top: 0;
  left: 0;
  width: 200px;
  height: 150px;
  border-radius: 5px;
  color: rgb(255, 255, 255);
  box-shadow: 0 27px 55px 0 rgba(0, 0, 0, 0.3),
    0 17px 17px 0 rgba(0, 0, 0, 0.15);
  backface-visibility: hidden;
}

.front {
  display: table-column-group;
  align-items: center;
  justify-content: center;
  font-size: 30px;
}

.back {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
}

.card-container:hover .card {
  transform: rotateY(180deg);
}

.back {
  transform: rotateY(180deg);
}
.invalid {
  color: #dc3545;
  font-size: 14px;
}
#profileupload {
  display: flex;
  align-items: center;
}
.profilep {
  width: 166px;
  margin-bottom: 0px !important;
}
</style>