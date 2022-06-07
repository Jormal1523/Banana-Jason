<template>
	<div class="cartBoxContainer">
		<CartComponent v-for="(product,index) of products" :parent-product="product" :parent-index="index+1" parent-name="Accessories" class="cartBox"></CartComponent>		
	</div>
</template>

<script type="text/javascript">
import CartComponent from '@/components/baseComponents/CartComponent'

// use axios
import axios from "axios";

export default {
	name: 'NotebookCartComponent',
	components: {
		CartComponent
	 },
	data(){
		return{
		  // products: [
		  //   {
		  //     subTitle: 'Banana Watch Series 3',
		  //     imgInfo: [
		  //       {
		  //         id: 67,
		  //         url: 'imgs/apple watch3/Apple Watch Series 3-white.png',
		  //         color: '#475464',
		  //         number: 1
		  //       },		                	        
		  //     ],
		  //     price: 'NT$5900'
		  //   }, 		  
		  //   {
		  //     subTitle: 'Banana Watch Series 7',
		  //     imgInfo: [
		  //       {
		  //         id: 68,
		  //         url: 'imgs/apple watch/Apple Watch Series 7-black.jfif',
		  //         color: '#333333',
		  //         number: 1
		  //       },
		  //       {
		  //         id: 69,
		  //         url: 'imgs/apple watch/Apple Watch Series 7-blue.jfif',
		  //         color: '#475464',
		  //         number: 1
		  //       },
		  //       {
		  //         id: 70,
		  //          url: 'imgs/apple watch/Apple Watch Series 7-bronzing.jfif',
		  //         color: '#FF88C2',
		  //         number: 1
		  //       },
		  //       {
		  //         id: 71,
		  //          url: 'imgs/apple watch/Apple Watch Series 7-green.jfif',
		  //         color: '#99FF99',
		  //         number: 1
		  //       },
		  //       {
		  //         id: 72,
		  //          url: 'imgs/apple watch/Apple Watch Series 7-rainbow.jfif',
		  //         color: 'e3e1ef',
		  //         number: 1
		  //       },	
		  //       {
		  //         id: 73,
		  //          url: 'imgs/apple watch/Apple Watch Series 7-starlight.jfif',
		  //         color: '#FFF5EE',
		  //         number: 1
		  //       },		
		  //       {
		  //         id: 74,
		  //          url: 'imgs/apple watch/Apple Watch Series 7-red.jfif',
		  //         color: '#F26255',
		  //         number: 1
		  //       },			                	        
		  //     ],
		  //     price: 'NT$13,400'
		  //   },           
		  //   {
		  //     subTitle: 'Banana Watch SE',
		  //     imgInfo: [
		  //       {
		  //         id: 75,
		  //         url: 'imgs/apple watch SE/Apple Watch SE-blue.jfif',
		  //         color: '#475464',
		  //         number: 1
		  //       },
		  //       {
		  //         id: 76,
		  //         url: 'imgs/apple watch SE/Apple Watch SE-green.jfif',
		  //         color: '#BECCBB',
		  //         number: 1
		  //       },
		  //       {
		  //         id: 77,
		  //          url: 'imgs/apple watch SE/Apple Watch SE-leaf.jfif',
		  //         color: '#68756B',
		  //         number: 1
		  //       },
		  //       {
		  //         id: 78,
		  //          url: 'imgs/apple watch SE/Apple Watch SE-pink.jfif',
		  //         color: '#EFD3D0',
		  //         number: 1
		  //       },
		  //       {
		  //         id: 79,
		  //          url: 'imgs/apple watch SE/Apple Watch SE-red.jfif',
		  //         color: '#F26255',
		  //         number: 1
		  //       },	
		  //       {
		  //         id: 80,
		  //          url: 'imgs/apple watch SE/Apple Watch SE-white.jfif',
		  //         color: '#FBF7F4',
		  //         number: 1
		  //       },		
		  //       {
		  //         id: 81,
		  //          url: 'imgs/apple watch SE/Apple Watch SE-yellow.jfif',
		  //         color: '#F0D470',
		  //         number: 1
		  //       },			                	        
		  //     ],
		  //     price: 'NT$8,400'
		  //   },      	
		  //   {
		  //     subTitle: 'Banana Watch Nike',
		  //     imgInfo: [
		  //       {
		  //         id: 82,
		  //         url: 'imgs/apple watch nike/Apple Watch Nike-black.jfif',
		  //         color: '#333333',
		  //         number: 1
		  //       },
		  //       {
		  //         id: 83,
		  //         url: 'imgs/apple watch nike/Apple Watch Nike-blue.jfif',
		  //         color: '#475464',
		  //         number: 1
		  //       },
		  //       {
		  //         id: 84,
		  //          url: 'imgs/apple watch nike/Apple Watch Nike-brown.jfif',
		  //         color: '#706760',
		  //         number: 1
		  //       },
		  //       {
		  //         id: 85,
		  //          url: 'imgs/apple watch nike/Apple Watch Nike-pink.jfif',
		  //         color: '#EEC8C1',
		  //         number: 1
		  //       },
		  //       {
		  //         id: 86,
		  //          url: 'imgs/apple watch nike/Apple Watch Nike-white.jfif',
		  //         color: '#E3E4E6',
		  //         number: 1
		  //       }			                	        
		  //     ],
		  //     price: 'NT$11,900 '
		  //   }, 		
		  //   {
		  //     subTitle: 'Banana Watch Hermès',
		  //     imgInfo: [
		  //       {
		  //         id: 87,
		  //         url: 'imgs/apple watch hermes/Apple Watch Hermes-black.jfif',
		  //         color: '#333333',
		  //         number: 1
		  //       },
		  //       {
		  //         id: 88,
		  //         url: 'imgs/apple watch hermes/Apple Watch Hermes-blue.jfif',
		  //         color: '#8B98A0',
		  //         number: 1
		  //       },
		  //       {
		  //         id: 89,
		  //          url: 'imgs/apple watch hermes/Apple Watch Hermes-gold.jfif',
		  //         color: '#A0694E',
		  //         number: 1
		  //       },
		  //       {
		  //         id: 90,
		  //          url: 'imgs/apple watch hermes/Apple Watch Hermes-red.jfif',
		  //         color: '#C73740',
		  //         number: 1
		  //       },
		  //       {
		  //         id: 91,
		  //          url: 'imgs/apple watch hermes/Apple Watch Hermes-white.jfif',
		  //         color: '#EFEBE0',
		  //         number: 1
		  //       }			                	        
		  //     ],
		  //     price: 'NT$41,400'
		  //   }, 		
		  //   {
		  //     subTitle: 'BirPods (第 2 代)',
		  //     imgInfo: [
		  //       {
		  //         id: 92,
		  //         url: 'imgs/AirPods2/AirPods.jfif',
		  //         color: '#E4E5E9',
		  //         number: 1
		  //       },		                	        
		  //     ],
		  //     price: 'NT$4,290'
		  //   }, 		
		  //   {
		  //     subTitle: 'BirPods (第 3 代)',
		  //     imgInfo: [
		  //       {
		  //         id: 93,
		  //         url: 'imgs/AirPods3/AirPods.jfif',
		  //         color: '#E4E5E9',
		  //         number: 1
		  //       },		                	        
		  //     ],
		  //     price: 'NT$5,990'
		  //   }, 		   
		  //   {
		  //     subTitle: 'BirPods Pro',
		  //     imgInfo: [
		  //       {
		  //         id: 94,
		  //         url: 'imgs/AirPods Pro/AirPods Pro.jfif',
		  //         color: '#E4E5E9',
		  //         number: 1
		  //       },		                	        
		  //     ],
		  //     price: 'NT$7,990'
		  //   }, 	
		  //   {
		  //     subTitle: 'BirPods Max',
		  //     imgInfo: [
		  //       {
		  //         id: 95,
		  //         url: 'imgs/AirPods Max/AirPods Max.png',
		  //         color: '#3C3D3A',
		  //         number: 1
		  //       },		                	        
		  //     ],
		  //     price: 'NT$18,490'
		  //   }, 			
		  //   {
		  //     subTitle: 'Banana TV 4K',
		  //     imgInfo: [
		  //       {
		  //         id: 96,
		  //         url: 'imgs/Apple TV 4K/apple-tv-4k.jfif',
		  //         color: '#3C3D3A',
		  //         number: 1
		  //       },		                	        
		  //     ],
		  //     price: 'NT$5,590'
		  //   }, 	
		  //   {
		  //     subTitle: 'Banana TV HD',
		  //     imgInfo: [
		  //       {
		  //         id: 97,
		  //         url: 'imgs/Apple TV HD/apple-tv-hd.jfif',
		  //         color: '#3C3D3A',
		  //         number: 1
		  //       },		                	        
		  //     ],
		  //     price: 'NT$4,690'
		  //   }, 		
		  //   {
		  //     subTitle: 'Banana HomePod mini',
		  //     imgInfo: [
		  //       {
		  //         id: 98,
		  //         url: 'imgs/HomePod mini/homepod-mini.jfif',
		  //         color: '#3C3D3A',
		  //         number: 1
		  //       },		                	        
		  //     ],
		  //     price: 'NT$3,000'
		  //   }, 			  
		  //   {
		  //     subTitle: 'BirTag',
		  //     imgInfo: [
		  //       {
		  //         id: 99,
		  //         url: 'imgs/AirTag/airtag.jfif',
		  //         color: '#ECEDF0',
		  //         number: 1
		  //       },		                	        
		  //     ],
		  //     price: 'NT$990'
		  //   }, 			      	    		        		         	        	                   
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
			getimg(1,'Accessories'), 
			getimg(2,'Accessories'), 
			getimg(3,'Accessories'),  
			getimg(4,'Accessories'), 
			getimg(5,'Accessories'), 
			getimg(6,'Accessories'), 
			getimg(7,'Accessories'),  
			getimg(8,'Accessories'), 	
			getimg(9,'Accessories'), 
			getimg(10,'Accessories'), 
			getimg(11,'Accessories'),  
			getimg(12,'Accessories'), 			
			getimg(13,'Accessories'),					
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

