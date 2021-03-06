<template>
  <div>
    <b-form-input v-model="name" placeholder="Enter your name"></b-form-input>
    <div class="mt-2">Value: name</div>
    <b-form-input
      v-model="quantity"
      type="number"
      placeholder="Enter your name"
    ></b-form-input>
    <div class="mt-2">Value: quantity</div>
    <b-form-input
      v-model="price"
      type="number"
      placeholder="Enter your name"
    ></b-form-input>
    <div class="mt-2">Value: price</div>
    <b-button @click="save()" type="button" variant="primary">Submit</b-button>

    <div>
      <b-card v-for="(product, index) in products" :key="index">
        <b-card-text>
          {{ product.name }}
        </b-card-text>
        <b-card-text>
          {{ product.quantity }}
        </b-card-text>
        <b-card-text>
          {{ product.price }}
        </b-card-text>
        <b-card-text style="display: none">
          {{ product._id }}
        </b-card-text>
        
        <b-button type="button" @click="addElement(product)" variant="primary"
          >Add to Cart</b-button
        >
      </b-card>
    </div>

    <div>
      <Order
        v-for="(cartItem, index) in cartItems"
        :key="index"
        :cartItem="cartItem"
      ></Order>
      <span>your total is {{total}}</span>
      <button type="button" @click="buy(cartItems,total)">buy</button>
      
     
    </div>
  </div>
</template>

<script>
//import {mapGetters} from "vuex"
import {mapState} from "vuex"
import axios from "axios"
import Order from "./Order.vue"
export default {
  name:"Product",
  components:{
    Order,
  },

  data() {
    return {
      name: '',
      quantity:0,
      price:0,
      products:"",
      id:0,
      
   

    }
  },
  async beforeMount(){
    const resp= await axios.get("http://localhost:3000/product")
     this.products=resp.data
     console.log(resp.data)
  },
  methods:{

      /* async save() {

          await axios.post("http://localhost:3000/product", {
        name: this.name,

        price: this.price,

      })



       }
      }*/
  save() {
    const payload={
      name:this.name,
      price:this.price,
      quantity:this.quantity,

    }
          this.$store.dispatch("save", payload)


      },



  addElement(product){
    const payload={

    name:product.name,
    id:product._id,
    price:product.price,
    quantity:1
    }
    console.log(payload)
     this.$store.dispatch("addElement", payload)

  },

  buy(cartItems,total){

   /*  var acc=[]
   cartItems.forEach((Item)=>{
     acc.push(Item.id)

   })*/

    const payload={
      cartItems:cartItems,
      total:total




    }
    console.log(payload)
    this.$store.dispatch("buy", payload)
  }
  

  

   





   } ,
computed:{
     

   ...mapState({
      cartItems:"cartItems"
}),
   /*...mapGetters({
     total:"total"
     })
    */
     total(){
      
       return this.$store.getters.total
     },

   
     

     
}
  



}
</script>
