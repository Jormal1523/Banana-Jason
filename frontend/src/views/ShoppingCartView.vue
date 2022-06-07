<template>
  <NavbarComponent></NavbarComponent>
  <ul class="navBar">
    <li v-for="(data, index) of productsName" class="listUnstyled" @click="changeCart(data.type)">
      {{ data.type }}
    </li>
  </ul>
  <component :is="currentTab"></component>
  <FooterComponent></FooterComponent>   
</template>


<script>
import NotebookCartComponent from '@/components/CartComponents/NotebookCartComponent'
import SmartphoneCartComponent from '@/components/CartComponents/SmartphoneCartComponent'
import TabletCartComponent from '@/components/CartComponents/TabletCartComponent'
import AccessoriesComponent from '@/components/CartComponents/AccessoriesComponent'

import  NavbarComponent from '@/components/NavbarComponent'
import  FooterComponent from '@/components/FooterComponent'

// use axios
import axios from "axios";

export default {
  name: 'ShoppingCartView',
  components: {
    NotebookCartComponent,
    SmartphoneCartComponent,
    TabletCartComponent,
    AccessoriesComponent,
    NavbarComponent,
    FooterComponent
  },
  data(){
    return{
      productsName: [],
      currentTab: 'NotebookCartComponent',
    }
  },
  methods:{
    changeCart(data){
      this.currentTab = `${data}Component`;
    }
  },
  mounted(){
    axios.get('/productApi')
      .then((res)=>{
        this.productsName = res.data
      })
      .catch((err)=>{
        console.log(err);
      })
  },
}
</script>


<style type="text/css" scoped>
.listUnstyled{
  list-style: none;
    padding:0;
    margin:0;
}
.navBar{
  display: flex;
  justify-content: center;
} 

.navBar li{
  margin: 0.5rem;
  cursor: pointer;
}
.navBar li:hover{
  color: red;
}

</style>