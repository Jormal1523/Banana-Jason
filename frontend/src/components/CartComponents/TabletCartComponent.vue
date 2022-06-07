<template>
	<div class="cartBoxContainer">
		<CartComponent v-for="(product,index) of products" :parent-product="product" :parent-index="index+1" parent-name="TabletCart" class="cartBox"></CartComponent>	
	</div>
</template>

<script type="text/javascript">
import CartComponent from '@/components/baseComponents/CartComponent'
// use axios
import axios from "axios";

export default {
	name: 'SmartphoneCartComponent',
	components: {
  	CartComponent
	 },
	data(){
		return{
		  // products: [
		  // 	{
		  // 		subTitle: 'BPad Pro 11吋',
		  // 		imgInfo: [
		  // 			{
		  // 				id: 52,
		  // 				url: 'imgs/iPad Pro/ipad-pro-11-silver.jfif',
		  // 				color: '#DDDFDE',
		  // 				number: 1
		  // 			},
		  // 			{
		  // 				id: 53,
		  // 				url: 'imgs/iPad Pro/ipad-pro-11-spacegray.jfif',
		  // 				color: '#ABAEB1',
		  // 				number: 1
		  // 			},
		  // 		],
		  // 		price: 'NT$24,900 '
		  // 	},                       
		  // 	{
		  // 		subTitle: 'BPad Pro 12.9吋',
		  // 		imgInfo: [
		  // 			{
		  // 				id: 54,
		  // 				url: 'imgs/ipad pro12.9/ipad-pro-12-silver.jfif',
		  // 				color: '#DDDFDE',
		  // 				number: 1
		  // 			},
		  // 			{
		  // 				id: 55,
		  // 				url: 'imgs/ipad pro12.9/ipad-pro-12-spacegray.jfif',
		  // 				color: '#ABAEB1',
		  // 				number: 1
		  // 			},
		  // 		],
		  // 		price: 'NT$34,900'
		  // 	},
		  // 	{
		  // 		subTitle: 'BPad Air',
		  // 		imgInfo: [
		  // 			{
		  // 				id: 56,
		  // 				url: 'imgs/ipad air/ipad-air-spacegray.png',
		  // 				color: '#777579',
		  // 				number: 1
		  // 			},
		  // 			{
		  // 				id: 57,
		  // 				url: 'imgs/ipad air/ipad-air-pink.png',
		  // 				color: '#E7D2CF',
		  // 				number: 1
		  // 			},
		  // 			{
		  // 				id: 58,
		  // 				url: 'imgs/ipad air/ipad-air-purple.png',
		  // 				color: '#C0BFD5',
		  // 				number: 1
		  // 			},
		  // 			{
		  // 				id: 59,
		  // 				url: 'imgs/ipad air/ipad-air-blue.png',
		  // 				color: '#91B5C3',
		  // 				number: 1
		  // 			},		
		  // 			{
		  // 				id: 60,
		  // 				url: 'imgs/ipad air/ipad-air-starlight.png',
		  // 				color: '#FAF7F2',
		  // 				number: 1
		  // 			},				  				  			
		  // 		],
		  // 		price: 'NT$17,900'
		  // 	}, 
		  // 	{
		  // 		subTitle: 'BPad',
		  // 		imgInfo: [
		  // 			{
		  // 				id: 61,
		  // 				url: 'imgs/ipad/ipad-spacegray.png',
		  // 				color: '#B3B6B8',
		  // 				number: 1
		  // 			},
		  // 			{
		  // 				id: 62,
		  // 				url: 'imgs/ipad/ipad-silver.png',
		  // 				color: '#E0E2E1',
		  // 				number: 1
		  // 			}				  				  			
		  // 		],
		  // 		price: 'NT$10,500'
		  // 	}, 
		  // 	{
		  // 		subTitle: 'BPad mini',
		  // 		imgInfo: [
		  // 			{
		  // 				id: 63,
		  // 				url: 'imgs/ipad mini/ipad-mini-space-gray.png',
		  // 				color: '#B0B4B6',
		  // 				number: 1
		  // 			},
		  // 			{
		  // 				id: 64,
		  // 				url: 'imgs/ipad mini/ipad-mini-pink.png',
		  // 				color: '#E8D1CF',
		  // 				number: 1
		  // 			},	
		  // 			{
		  // 				id: 65,
		  // 				url: 'imgs/ipad mini/ipad-mini-purple.png',
		  // 				color: '#BCBBD3',
		  // 				number: 1
		  // 			},	
		  // 			{
		  // 				id: 66,
		  // 				url: 'imgs/ipad mini/ipad-mini-starlight.png',
		  // 				color: '#E5DED4',
		  // 				number: 1
		  // 			}				  							  					  				  			
		  // 		],
		  // 		price: 'NT$10,500'
		  // 	} 				  				  				  			  	
		  // ]
		  products: []
		}
	},
  mounted(){
  	const vm = this; // 取得vue實體
		function getimg(id, CartName) {
			let data = {
				id: id,
				cartName: CartName
			}
	    return axios.post('/productItemApi', data)
	      .then((res)=>{
	        // console.log(res.data)
	        return res.data
	      })
	      .catch((err)=>{
	        console.log(err);
	      })			
		}

		Promise.all([
			getimg(1,'TabletCart'), 
			getimg(2,'TabletCart'), 
			getimg(3,'TabletCart'),  
			getimg(4,'TabletCart'), 
			getimg(5,'TabletCart'),			
		])
		.then(function (results) {
			// console.log(results)
			vm.products = results
			// console.log(vm.products)
		});		  
  },
}
</script>


<style type="text/css" scoped>

.cartBoxContainer{
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
}
.cartBox{
  margin: 0.5rem;
}	
</style>

