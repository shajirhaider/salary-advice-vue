<template>
    <div class="row justify-content-center">
        <div class="col-md-5 col-12 col-sm-6">
            <div class="panel">
                <h4 style=" color:#009688">Salary Advice</h4>
                <h5 class="log-text">Log In</h5>
                <div style="height:15px;" >
                    <h6 :class=messageClass>{{ message }}</h6>
                </div>
                <hr>               
                <div class="group">      
                    <input class="inputMaterial" type="text" required v-model="username">
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>Username</label>
                    </div>
                        <div class="group">      
                    <input class="inputMaterial" type="password" required v-model="password">
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>Password</label>
                </div>
                <div class="text-right">
                    <button class="btn btn-log-in btn-sm ripple" :disabled='buttonEnable' @click="login()"> Log In</button>
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

<style scoped>
.red{
    color: red;
}
.green{
    color: green;
}
.btn-log-in{
    background: #009688;
    color: white;
    width: 80px;
}
.log-text{
    background: #009688;
    color: white;
    padding: 5px;
}
.group 			  { 
  position:relative; 
  margin-bottom: 35px; 
  margin-left: 40px;
}
.inputMaterial {
  font-size:15px;
  padding:7px 7px 7px 5px;
  display:block;
  width:320px;
  border:none;
  border-bottom:1px solid #757575;
}

.inputMaterial:focus { outline:none;}

label 				 {
  color:#999; 
  font-size:14px;
  font-weight:normal;
  position:absolute;
  pointer-events:none;
  margin-top: 5px;
  left:5px;
  top:10px;
  transition:0.2s ease all; 
  -moz-transition:0.2s ease all; 
  -webkit-transition:0.2s ease all;
}

.inputMaterial:focus ~ label, .inputMaterial:valid ~ label 		{
  top:-20px;
  font-size:14px;
  color: #009688;
}

.bar{ 
    position:relative; 
    display:block; width:320px; 
}
.bar:before, .bar:after 	{
  content:'';
  height:2px; 
  width:0;
  bottom:1px; 
  position:absolute;
  background: #009688; 
  transition:0.2s ease all; 
  -moz-transition:0.2s ease all; 
  -webkit-transition:0.2s ease all;
}
.bar:before {
  left:50%;
}
.bar:after {
  right:50%; 
}

.inputMaterial:focus ~ .bar:before, .inputMaterial:focus ~ .bar:after {
  width:50%;
}

.inputMaterial:focus ~ .highlight {
  -webkit-animation:inputHighlighter 0.3s ease;
  -moz-animation:inputHighlighter 0.3s ease;
  animation:inputHighlighter 0.3s ease;
}

@-webkit-keyframes inputHighlighter {
	from { background:#5264AE; }
  to 	{ width:0; background:transparent; }
}
@-moz-keyframes inputHighlighter {
	from { background:#5264AE; }
  to 	{ width:0; background:transparent; }
}
@keyframes inputHighlighter {
	from { background:#5264AE; }
  to 	{ width:0; background:transparent; }
}
body{
  background: #eceff1;
}
</style>
