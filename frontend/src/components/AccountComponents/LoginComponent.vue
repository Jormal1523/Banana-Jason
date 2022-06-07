<template>
<div>	
	<div class="mid1 col-5 d-flex justify-content-center align-items-center flex-column flex-nowrap my-5">
		<h3 class="mb-5">登入</h3>
		<div class="col-10 form-floating px-1 mb-3">
			<input type="email" class="form-control" id="Email" placeholder="email" v-model="email">
			<label for="Email">Email</label>
		</div>

		<div class="col-10 form-floating px-1 mb-3">
			<input type="password" class="form-control" id="Password" placeholder="password" v-model="password">
			<label for="Password">Password</label>
		</div>
		<button class="btn w-25" @click="submitAccount()">Log In</button>
	</div>
</div>
</template>

<script>

// use axios
import axios from "axios";

export default {
  name: 'LoginView',
  data(){
  	return{
  		email: '',
  		password: ''
  	}
  },
  methods:{
  	submitAccount(){
			let userData={
				email: this.email,
				password: this.password
			}  		
	    axios.post("/login", userData)
	      .then((res)=>{
	      	if(res.data.status == 1){
						alert(`您好，${res.data.userName}`)
	      		this.$router.push('/shopcart')
	      	}
	      	else{
	      		alert('錯誤的帳號或密碼!!');	      		
	      		this.$router.push('/login')
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