<template>
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
</template>

<script>
// use axios
import axios from "axios";

export default {
  name: 'SignComponent',
  data(){
  	return{
  		name: '',
  		phone: '',
  		email: '',
  		password: '',
  	}
  },
  methods:{
		submitSignUp(){

			let userData = {
				name: this.name,
				phone: this.phone,
				email: this.email,
				password: this.password
			}  		
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
</script>


<style>
	.mid1 {
		margin: auto;
	}
</style>