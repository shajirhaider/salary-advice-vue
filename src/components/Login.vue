<template>
    <div class="row justify-content-center">
        <div class="col-md-5 col-12 col-sm-6">
            <div class="panel">
                <h4>Salary Advice</h4>
                <h5>Log In</h5>
                <hr>
                <div style="height:15px;" >
                    <h6 :class=messageClass>{{ message }}</h6>
                </div>
                <label class="float-left"> Username</label>
                <input type="text" class="form-control mb-3" v-model="username">
                <label class="float-left"> Password</label>
                <input type="password" class="form-control mb-3" v-model="password">
                <div class="text-right">
                    <button class="btn btn-primary btn-sm ripple" :disabled='buttonEnable' @click="login()"> Log In</button>
                </div>
            </div>   
        </div>
    </div>

</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      messageClass:'',
      message:'',
      messageShow: false
    };
  },
  computed:{
    buttonEnable(){
      if(!this.username || !this.password){
		return true
      }
      else{
        return false
      }
    }
  },
  methods: {
    login() {
        this.messageShow = true
        if( this.username && this.password){
            if (this.username == 'Admin' && this.password == 'Asdf@1234'){
                this.messageClass = "green float-center"
                this.message = 'Login Successful'
                this.$router.push({ name: 'Home'});
            }else{
                this.messageClass = "red float-center"
                this.message = 'Incorrect Username or Password'
            }
        }

        }
     
    }
  }

</script>
</script>

<style>
.red{
    color: red;
}
.green{
    color: green;
}

</style>
