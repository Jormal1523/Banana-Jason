<template>
	<div class="cartBoxContainer">
		<CartComponent v-for="(product,index) of products" :parent-product="product" :parent-index="index+1" parent-name="NotebookCart" class="cartBox"></CartComponent>	
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
			  //     subTitle: 'BananaBook Air 13吋',
			  //     imgInfo: [
			  //       {
			  //         id: 0,
			  //         url: 'imgs/macbook air/macbook-air-silver.jfif',
			  //         color: '#DDDFDE',
			  //         number: 1
			  //       },
			  //       {
			  //         id: 1,
			  //         url: 'imgs/macbook air/macbook-air-space-gray.jfif',
			  //         color: '#AAAEB0',
			  //         number: 1
			  //       },
			  //       {
			  //         id: 2,
			  //         url: 'imgs/macbook air/macbook-air-gold.jfif',
			  //         color: '#F0E0D3',
			  //         number: 1
			  //       }
			  //     ],
			  //     price: 'NT$30,900'
			  //   },           
			  //   {
			  //     subTitle: 'BananaBook Pro 13 吋',
			  //     imgInfo: [
			  //       {
			  //         id: 3,
			  //         url: 'imgs/macbook pro/mbp-silver.jfif',
			  //         color: '#DDDFDE',
			  //         number: 1
			  //       },
			  //       {
			  //         id: 4,
			  //         url: 'imgs/macbook pro/mbp-spacegray.jfif',
			  //         color: '#AAAEB0',
			  //         number: 1
			  //       }
			  //     ],
			  //     price: 'NT$39,900'
			  //   },
			  //   {
			  //     subTitle: 'BananaBook Pro 14 吋',
			  //     imgInfo: [
			  //       {
			  //         id: 5,
			  //         url: 'imgs/macbook pro14/mbp14-silver.jfif',
			  //         color: '#DDDFDE',
			  //         number: 1
			  //       },
			  //       {
			  //         id: 6,
			  //         url: 'imgs/macbook pro14/mbp14-spacegray.jfif',
			  //         color: '#AAAEB0',
			  //         number: 1
			  //       }
			  //     ],
			  //     price: 'NT$59,900'
			  //   },
			  //   {
			  //     subTitle: 'BananaBook Pro 16 吋',
			  //     imgInfo: [
			  //       {
			  //         id: 7,
			  //         url: 'imgs/macbook pro16/mbp16-silver.jfif',
			  //         color: '#DDDFDE',
			  //         number: 1
			  //       },
			  //       {
			  //         id: 8,
			  //         url: 'imgs/macbook pro16/mbp16-spacegray.jfif',
			  //         color: '#AAAEB0',
			  //         number: 1
			  //       }
			  //     ],
			  //     price: 'NT$74,900'
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
			getimg(1,'NotebookCart'), 
			getimg(2,'NotebookCart'), 
			getimg(3,'NotebookCart'),  
			getimg(4,'NotebookCart'), 
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

