<!-- <template>
	<div>	
		<div class="mid1 col-5 d-flex justify-content-center align-items-center flex-column flex-nowrap my-5">
		<h3 class="mb-5">註冊</h3>
			<div class="col-10 form-floating px-1 mb-3">
				<input type="text" class="form-control" id="name" placeholder="name" v-model="name" >
				<label for="name">Name</label>
			</div>

			<div class="col-10 form-floating px-1 mb-3">
				<input type="text" class="form-control" id="phone" placeholder="phone" v-model="phone" >
				<label for="phone">Phone</label>
			</div>

			<div class="col-10 form-floating px-1 mb-3">
				<input type="Email" class="form-control" id="email" placeholder="email" v-model="email">
				<label for="email">Email</label>
			</div>

			<div class="col-10 form-floating px-1 mb-3">
				<input type="text" class="form-control" id="password" placeholder="password" v-model="password">
				<label for="password">Password</label>
			</div>
			<button class="btn w-25" @click="submitSignUp()">Sign Up</button>
		</div>
	</div>		
</template> -->

<template>
<div class="w3layouts-main"> 
	<div class="bg-layer">
		<h1>Signup</h1>
		<form class="header-main">
			<div class="main-icon">
				<span class="fa fa-eercast"></span>
			</div>
			<div class="header-left-bottom">
				<div class="">
					<div class="icon1">
						<span class="fa fa-user"></span>
						<input type="text" class="inputStyle" name='name' placeholder="Name" v-model="name" v-bind:class="{ 'is-invalid': nameError }"/>
						<div class="invalid-feedback">{{nameErrMsg}}</div>
					</div>
					<div class="icon1">
						<span class="fa fa-phone"></span>
						<input type="text" class="inputStyle" name='phone' placeholder="Phone" v-model="phone" v-bind:class="{ 'is-invalid': phoneError }" maxlength="10"/>
						<div class="invalid-feedback">{{phoneErrMsg}}</div>
					</div>				
					<div class="icon1">
						<span class="fa fa-envelope"></span>
						<input type="email" name='email' placeholder="Email" required v-model="email" v-bind:class="{ 'is-invalid': emailError }"/>
						<div class="invalid-feedback">{{emailErrMsg}}</div>
					</div>
					<div class="icon1">
						<span class="fa fa-lock"></span>
						<input type="password" name='password' placeholder="Password" required v-model="password" v-bind:class="{ 'is-invalid': passwordError }" minlength="6" maxlength="10"/>
						<div class="invalid-feedback">{{passwordErrMsg}}</div>
					</div>
					<br>
						<button type='button' class="btn" @click="submitSignUp()" >Sign Up</button>
				</div>	
			</div>
		</form>
		
		<!-- copyright -->
		<div class="copyright">
			<p>© 2022 Signup Form . All rights reserved | Design by <a href="banana/" target="_blank">Banana</a></p>
		</div>
		<!-- //copyright --> 
	</div>
</div>	
</template>


<script>
// use axios
import axios from "axios";

export default {
  name: 'SignComponent',
  data(){
  	return{
  	  name: '',
	  nameError: false,
	  nameErrMsg: '',
	  phone: '',
	  phoneError: false,
	  phoneErrMsg: '',
	  email: '',
	  emailError: false,
	  emailErrMsg: '',
	  password: '',
	  passwordError: false,
	  passwordErrMsg: '',
  	}
  },
  watch: {
	   name: function () {
            const re =/^[a-zA-Z0-9]+$/;
            if (!re.test(this.name)) {
				this.nameError = true;
            	this.nameErrMsg = '請勿包含特殊字元！'
            } else {
				this.nameError = false
			}
        },
	   phone: function () {
            const re = /^09\d{8}$/;
            if (!re.test(this.phone)) {
				this.phoneError = true;
            	this.phoneErrMsg = '手機格式錯誤！'
            } else {
				this.phoneError = false
			}
        },
	   email: function () {
            const re = /^(([.](?=[^.]|^))|[\w_%{|}#$~`+!?-])+@(?:[\w-]+\.)+[a-zA-Z.]{2,63}$/;
            if (!re.test(this.email)) {
				this.emailError = true;
            	this.emailErrMsg = '格式錯誤！'
            } else {
				this.emailError = false
			}
        },
	  password: function () {
            const re = /^[a-zA-Z0-9]+$/;
            if (!re.test(this.password)) {
				this.passwordError = true;
            	this.passwordErrMsg = '請勿包含特殊字元！'
            } else if (this.password.length < 6) {
				this.passwordError = true
				this.passwordErrMsg = '密碼長度請勿低於6個字元'
			} else {
				this.passwordError = false
			}
        },
  },  
  methods:{
		submitSignUp(){

			let userData = {
				name: this.name,
				phone: this.phone,
				email: this.email,
				password: this.password
			}  		
		  if(this.nameError=== true || this.phone.Error===true || this.emailError===true || this.passwordError===true) {
			  alert('輸入格式有錯！');
		  } 
		  else {
		    axios.post("/signup", userData)
		      .then((res)=>{
		      	// console.log(res)
		      	if(res.data.status == 1){
		      		//導向到/login
		      		this.$router.push('/login')
		      	}
		      	else{
		      		alert('此帳號已存在！請使用其他 Email。');
		      		this.$router.push('/signup')
		      	}
		      })
		      .catch((err)=>{
		        console.log("err");
		      })		  	
		  }
		}  	
  }
}
</script>


<style scoped>
* {
    padding: 0;
    margin: 0;
}
body {
	font-family: 'Hind', sans-serif;
} 
/*-- main --*/ 

h1 {
	font-size: 45px;
	color: white;
	font-weight: 300;
	text-transform: uppercase;
	letter-spacing: 4px;
	text-align: center;
	padding: 1em 0 0.4em 0;
}

/*-- slide --*/

@keyframes slideleft {
    from {
        background-position: 0%;
    }
    to {
        background-position: 90000%;
    }
}

@-webkit-keyframes slideleft {
    from {
        background-position: 0%;
    }
    to {
        background-position: 90000%;
    }
}

.w3layouts-main{
    background-image: url("../../assets/ipad.jpg");
    background-repeat: repeat-x;
    animation: slideleft 20000s infinite linear;
    -webkit-animation: slideleft 20000s infinite linear;
    background-size: cover;
	-webkit-background-size:cover;
	-moz-background-size:cover; 
    background-attachment: fixed;
    position: relative;
	min-height: 100vh;
}

.bg-layer {
    background: rgba(0, 0, 0, 0.5);
	min-height: 100vh;
}
/*-- //slide --*/

/*--header start here--*/
.inputStyle {
	border: none;
	background: transparent;
	outline: none
}


.w3ls-header {
    padding: 0em 0 0;
}
.icon1 {
	margin: 0 0 1em;
	padding: .8em 1em;
	background: rgba(255, 255, 255, 0.94);
}
.icon1 span.fa {
    color: #222;
    width: 22px;
}
.main-icon {
    text-align: center;
}
.main-icon span.fa{
    font-size: 50px;
    color: #fff;
    margin-bottom: 1em;
}

.wthree li {
    display: inline-block;
}
a {
    color: #585858;
    margin: 0em;
}
.bottom {
    margin: 1em 0 0;
}
.header-main {
	max-width: 30%;
	margin: 0 auto;
	position: relative;
	z-index: 999;
	padding: 3em 2em;
	background: rgba(255, 255, 255, 0.04);
	-webkit-box-shadow: -1px 4px 28px 0px rgba(0,0,0,0.75);
	-moz-box-shadow: -1px 4px 28px 0px rgba(0,0,0,0.75);
	box-shadow: -1px 4px 28px 0px rgba(0,0,0,0.75);
}

.sign-up {
    margin: 2em 0;
}
.header-left {
  background: #fff;
  padding: 0px;
}
.sign-up h2 {
    font-size: 22px;
    color: #fff;
    text-align: center;
    background: #fbbc05;
    width: 40px;
    height: 40px;
    line-height: 1.9em;
    border-radius: 50%;
    margin: 0 auto;
}
::-webkit-input-placeholder{
    color: #333!important;
}
.header-left-bottom input[type="email"] {
    outline: none;
    font-size: 15px;
    color: #222;
	border:none;
    width: 90%;
    display: inline-block;
    background: transparent;
    letter-spacing: 1px;
}
.header-left-bottom input[type="password"]{
	outline: none;
	font-size: 15px;
    color: #222;
	border:none;
    width: 90%;
	display: inline-block;
	background: transparent;
    letter-spacing: 1px;
}
.header-left-bottom button.btn {
    background: #007cc0;
    color: #fff;
    font-size: 15px;
    text-transform: uppercase;
    padding: .8em 2em;
    letter-spacing: 1px;
    transition: 0.5s all;
    -webkit-transition: 0.5s all;
    -moz-transition: 0.5s all;
    -o-transition: 0.5s all;
    display: inline-block;
    cursor: pointer;
    outline: none;
    border: none;
	width: 100%;
}

/*-- agileits --*/
.header-left-bottom p {
    font-size: 17px;
    color: #000;
    display: inline-block;
    width: 50%;
    margin: 20px 0 0;
    letter-spacing: 1px;
    float: left;
}

.header-left-bottom p.right {
	text-align: right;
}
.header-left-bottom p a {
	font-size: 11px;
	color: #e2e2e2;
	text-transform: uppercase;
}
.login-check {
    position: relative;
}
.checkbox i {
    position: absolute;
    top: 0px;
    left: 0%;
    text-align: center;
    display: block;
    width: 19px;
    height: 17px;
    outline: none;
    background: #fff;
    border-radius: 0px;
    -webkit-border-radius: 0px;
    -moz-border-radius: 0px;
    -o-border-radius: 0px;
    cursor: pointer;
}
.checkbox input:checked + i:after {
    opacity: 1;
}
.checkbox input + i:after {
    position: absolute;
    opacity: 0;
    transition: opacity 0.1s;
    -o-transition: opacity 0.1s;
    -ms-transition: opacity 0.1s;
    -moz-transition: opacity 0.1s;
    -webkit-transition: opacity 0.1s;
}
.checkbox input + i:after {
    /*content: url(../images/tick.png);*/
    top: -1px;
    left: 2px;
    width: 15px;
    height: 15px;
}
.checkbox {
    position: relative;
    display: block;
    padding-left: 30px;
    text-transform: capitalize;
    letter-spacing: 1px;
    font-size: 14px;
    color: #fff;
}
input[type="checkbox" i] {
    display: none;
}
.btn {
	background: par;
}

/*-- copyright --*/
.copyright {
    padding: 2em 0;
    text-align: center;
}
.copyright p {
    font-size: 15px;
    letter-spacing: 1px;
    color: #ccc;
    line-height: 1.8em;
}
.copyright p a{
    color: #fff; 
	-webkit-transition: 0.5s all;
	-moz-transition: 0.5s all;
	-o-transition: 0.5s all;
	-ms-transition: 0.5s all;
	transition: 0.5s all;
}
/*-- //copyright --*/
/*-- //main --*/

/*-- responsive-design --*/ 

@media(max-width:667px){
	
	h1 {
		font-size: 40px;
		letter-spacing: 3px;
	}
}

@media(max-width:415px){
	
	h1 {
		font-size: 35px;
		letter-spacing: 3px;
	}
	.social {
		margin: 1em 0 0;
	}
	.copyright {
		padding: 2em 1em;
	}
}
@media(max-width:384px){
	.main-icon span.fa {
		margin-bottom: .6em;
	}
	.header-main {
		max-width: 310px;
		margin: 0 1em;
	}
	.header-left-bottom input[type="email"],.header-left-bottom input[type="password"] {
		width: 88%;
	}
	.social ul li {
		margin: 0 2px;
	}
	h1 {
		font-size: 30px;
	}
} 		
</style>