<template>
	<div class="cartBoxContainer">
		<CartComponent v-for="(product,index) of products" :parent-product="product" :parent-index="index+1" parent-name="SmartphoneCart" class="cartBox"></CartComponent>	
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
			  //   {
			  //     subTitle: 'BPhone 13 Pro',
			  //     imgInfo: [
			  //       {
			  //         id: 9,
			  //         url: 'imgs/iphone13 pro/iphone-13-pro-blue.png',
			  //         color: '#ACC5DA',
			  //         number: 1
			  //       },
			  //       {
			  //         id: 10,
			  //         url:  'imgs/iphone13 pro/iphone-13-pro-gold.png',
			  //         color: '#FAEAD3',
			  //         number: 1
			  //       },
			  //       {
			  //         id: 11,
			  //         url:  'imgs/iphone13 pro/iphone-13-pro-graphite.png',
			  //         color: '#64625F',
			  //         number: 1
			  //       }, 
			  //       {
			  //         id: 12,
			  //         url:  'imgs/iphone13 pro/iphone-13-pro-green.png',
			  //         color: '#576856',
			  //         number: 1
			  //       },    
			  //       {
			  //         id: 13,
			  //         url:  'imgs/iphone13 pro/iphone-13-pro-silver.png',
			  //         color: '#F2F3EE',
			  //         number: 1
			  //       },                                             
			  //     ],        
			  //     price: 'NT$32,900'      
			  //   },
			  //   {
			  //     subTitle: 'BPhone 13 Pro Max',
			  //     imgInfo: [
			  //       {
			  //         id: 14,
			  //         url: 'imgs/iphone13 pro max/iphone-13-pro-max-blue.png',
			  //         color: '#ACC5DA',
			  //         number: 1
			  //       },
			  //       {
			  //         id: 15,
			  //         url:  'imgs/iphone13 pro max/iphone-13-pro-max-gold.png',
			  //         color: '#FAEAD3',
			  //         number: 1
			  //       },
			  //       {
			  //         id: 16,
			  //         url:  'imgs/iphone13 pro max/iphone-13-pro-max-graphite.png',
			  //         color: '#64625F',
			  //         number: 1
			  //       }, 
			  //       {
			  //         id: 17,
			  //         url:  'imgs/iphone13 pro max/iphone-13-pro-max-green.png',
			  //         color: '#576856',
			  //         number: 1
			  //       },    
			  //       {
			  //         id: 18,
			  //         url:  'imgs/iphone13 pro max/iphone-13-pro-max-silver.png',
			  //         color: '#F2F3EE',
			  //         number: 1
			  //       },                                             
			  //     ],        
			  //     price: 'NT$36,900'      
			  //   },            
			  //   {
			  //     subTitle: 'BPhone 13 mini',
			  //     imgInfo: [
			  //       {
			  //         id: 19,
			  //         url: 'imgs/iphone13 mini/iphone-13-mini-blue.png',
			  //         color: '#447792',
			  //         number: 1
			  //       },
			  //       {
			  //         id: 20,
			  //         url:  'imgs/iphone13 mini/iphone-13-mini-green.png',
			  //         color: '#4C5F4D',
			  //         number: 1
			  //       },
			  //       {
			  //         id: 21,
			  //         url:  'imgs/iphone13 mini/iphone-13-mini-midnight.png',
			  //         color: '#42474D',
			  //         number: 1
			  //       }, 
			  //       {
			  //         id: 22,
			  //         url:  'imgs/iphone13 mini/iphone-13-mini-pink.png',
			  //         color: '#FBE2DD',
			  //         number: 1
			  //       },    
			  //       {
			  //         id: 23,
			  //         url:  'imgs/iphone13 mini/iphone-13-mini-product-red.png',
			  //         color: '#C82333',
			  //         number: 1
			  //       },    
			  //       {
			  //         id: 24,
			  //         url:  'imgs/iphone13 mini/iphone-13-mini-starlight.png',
			  //         color: '#43484E',
			  //         number: 1
			  //       },                                                          
			  //     ],        
			  //     price: 'NT$22,900'      
			  //   }, 
			  //   {
			  //     subTitle: 'BPhone 13',
			  //     imgInfo: [
			  //       {
			  //         id: 25,
			  //         url: 'imgs/iphone13/iphone-13-blue.png',
			  //         color: '#447792',
			  //         number: 1
			  //       },
			  //       {
			  //         id: 26,
			  //         url:  'imgs/iphone13/iphone-13-green.png',
			  //         color: '#4C5F4D',
			  //         number: 1
			  //       },
			  //       {
			  //         id: 27,
			  //         url:  'imgs/iphone13/iphone-13-midnight.png',
			  //         color: '#42474D',
			  //         number: 1
			  //       }, 
			  //       {
			  //         id: 28,
			  //         url:  'imgs/iphone13/iphone-13-pink.png',
			  //         color: '#FBE2DD',
			  //         number: 1
			  //       },    
			  //       {
			  //         id: 29,
			  //         url:  'imgs/iphone13/iphone-13-product-red.png',
			  //         color: '#C82333',
			  //         number: 1
			  //       },    
			  //       {
			  //         id: 30,
			  //         url:  'imgs/iphone13/iphone-13-starlight.png',
			  //         color: '#43484E',
			  //         number: 1
			  //       },                                                          
			  //     ],        
			  //     price: 'NT$22,900'      
			  //   }, 
			  //   {
			  //     subTitle: 'BPhone SE',
			  //     imgInfo: [
			  //       {
			  //         id: 31,
			  //         url: 'imgs/iphoneSE/iphone-se-midnight.png',
			  //         color: '#353C42',
			  //         number: 1
			  //       },
			  //       {
			  //         id: 32,
			  //         url: 'imgs/iphoneSE/iphone-se-starlight.png',
			  //         color: '#FAF7F2',
			  //         number: 1
			  //       },
			  //       {
			  //         id: 33,
			  //         url: 'imgs/iphoneSE/iphone-se-red.png',
			  //         color: '#C5182A',
			  //         number: 1
			  //       }                                                       
			  //     ],        
			  //     price: 'NT$13,900'      
			  //   }, 
			  //   {
			  //     subTitle: 'BPhone 12 mini',
			  //     imgInfo: [
			  //       {
			  //         id: 34,
			  //         url: 'imgs/iphone12 mini/iphone-12-mini-green.png',
			  //         color: '#DBF1DA',
			  //         number: 1
			  //       },
			  //       {
			  //         id: 35,
			  //         url: 'imgs/iphone12 mini/iphone-12-mini-purple.png',
			  //         color: '#BDB5E8',
			  //         number: 1
			  //       },
			  //       {
			  //         id: 36,
			  //         url: 'imgs/iphone12 mini/iphone-12-mini-blue.png',
			  //         color: '#11476D',
			  //         number: 1
			  //       },    
			  //       {
			  //         id: 37,
			  //         url: 'imgs/iphone12 mini/iphone-12-mini-white.png',
			  //         color: '#F6F2EF',
			  //         number: 1
			  //       }, 
			  //       {
			  //         id: 38,
			  //         url: 'imgs/iphone12 mini/iphone-12-mini-black.png',
			  //         color: '#39363F',
			  //         number: 1
			  //       }, 
			  //       {
			  //         id: 39,
			  //         url: 'imgs/iphone12 mini/iphone-12-mini-red.png',
			  //         color: '#DB3D3C',
			  //         number: 1
			  //       }  			          			        			                                                           
			  //     ],        
			  //     price: 'NT$19,900'      
			  //   },	
			  //   {
			  //     subTitle: 'BPhone 12',
			  //     imgInfo: [
			  //       {
			  //         id: 40,
			  //         url: 'imgs/iphone12/iphone-12-green.png',
			  //         color: '#DBF1DA',
			  //         number: 1
			  //       },
			  //       {
			  //         id: 41,
			  //         url: 'imgs/iphone12/iphone-12-purple.png',
			  //         color: '#BDB5E8',
			  //         number: 1
			  //       },
			  //       {
			  //         id: 42,
			  //         url: 'imgs/iphone12/iphone-12-blue.png',
			  //         color: '#11476D',
			  //         number: 1
			  //       },    
			  //       {
			  //         id: 43,
			  //         url: 'imgs/iphone12/iphone-12-white.png',
			  //         color: '#F6F2EF',
			  //         number: 1
			  //       }, 
			  //       {
			  //         id: 44,
			  //         url: 'imgs/iphone12/iphone-12-black.png',
			  //         color: '#39363F',
			  //         number: 1
			  //       }, 
			  //       {
			  //         id: 45,
			  //         url: 'imgs/iphone12/iphone-12-red.png',
			  //         color: '#DB3D3C',
			  //         number: 1
			  //       }  			          			        			                                                           
			  //     ],        
			  //     price: 'NT$19,900'      
			  //   }, 
			  //   {
			  //     subTitle: 'BPhone 11',
			  //     imgInfo: [
			  //       {
			  //         id: 46,
			  //         url: 'imgs/iphone11/iphone11-green.png',
			  //         color: '#DBF1DA',
			  //         number: 1
			  //       },
			  //       {
			  //         id: 47,
			  //         url: 'imgs/iphone11/iphone11-purple.png',
			  //         color: '#BDB5E8',
			  //         number: 1
			  //       },
			  //       {
			  //         id: 48,
			  //         url: 'imgs/iphone11/iphone11-yellow.png',
			  //         color: '#FFE681',
			  //         number: 1
			  //       },    
			  //       {
			  //         id: 49,
			  //         url: 'imgs/iphone11/iphone11-white.png',
			  //         color: '#F6F2EF',
			  //         number: 1
			  //       }, 
			  //       {
			  //         id: 50,
			  //         url: 'imgs/iphone11/iphone11-black.png',
			  //         color: '#39363F',
			  //         number: 1
			  //       }, 
			  //       {
			  //         id: 51,
			  //         url: 'imgs/iphone11/iphone11-red.png',
			  //         color: '#DB3D3C',
			  //         number: 1
			  //       }  			          			        			                                                           
			  //     ],        
			  //     price: 'NT$16,500 '      
			  //   } 			    					    		         			                         
			  // ],
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
			getimg(1,'SmartphoneCart'), 
			getimg(2,'SmartphoneCart'), 
			getimg(3,'SmartphoneCart'),  
			getimg(4,'SmartphoneCart'), 
			getimg(5,'SmartphoneCart'), 
			getimg(6,'SmartphoneCart'), 
			getimg(7,'SmartphoneCart'),  
			getimg(8,'SmartphoneCart'), 			
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

