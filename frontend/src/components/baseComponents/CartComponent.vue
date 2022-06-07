<template>
<div>
  <div class="card" style="width: 18rem; height: 30rem;" v-for="(item, index) of parentProduct.cartItems" v-show="item.color == chooseColor"> 
      <router-link :to="`/product/${parentName + '/' + parentIndex + '/' + parentProduct.title + '/'+ item.id}`">
        <img  class="card-img-top" :src="item.url">
      </router-link>    
      <div class="card-body">
        <h5 class="card-title">{{ parentProduct.title }}</h5>
        <p class="card-text">{{ parentProduct.price }}</p>
        <button class="btn btn-primary">加入購物車</button>
      </div>
  </div>
          <button  class="btnColor" v-for="(item, index) of parentProduct.cartItems" :style="{background: item.color}" @click="changeImg(item.color)" >
        </button> 
</div>    
</template>


<script>
// import "bootstrap/dist/css/bootstrap.css"

export default {
  name: 'CartComponent',
  props:['parentProduct', 'parentIndex', 'parentName'],
  data(){
    return{ 
      chooseColor: this.parentProduct.cartItems[0].color
    }
  },
  methods:{
    changeImg(data){
      this.chooseColor = data 
    },
    addToCart(){
    }
  }
}
</script>

<style type="text/css" scoped>

*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;   
}   
.cartContainer{
  position: relative;
}

/* btn color*/
.btnColor{
  border-radius: 50%;
  width: 25px;
  height: 25px;
  margin: 5px;
  border: none;
}

</style>