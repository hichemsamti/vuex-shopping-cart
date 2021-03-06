import Vue from "vue";
import Vuex from "vuex"
import axios from "axios"

Vue.use(Vuex,axios)

export default new Vuex.Store({
    state:{
        cartItems:[/*{name:..., price:....}*/]
    },
    getters:{
        total(state){
            let total=0
            state.cartItems.forEach(Item=>{
                total+=Item.price
            })
            return total
        }
            
     /* return state.cartItems.map((cartItem)=>{
              console.log(cartItem.price)
             return  cartItem.price
                
              
            })
        }*/

    },

    mutations:{
        
           
        NEW_CART_ELEMENT(state,{id,name,price,quantity}){
            state.cartItems.push({
                name:name,
                price:price,
                quantity:quantity,
                id:id

            })

        }

    },

    actions:{
         save({commit},{name,price,quantity}){
             console.log(name,price)
           axios.post("http://localhost:3000/product", {
            name:name,
            price:price,
            quantity:quantity
        })
           .then((resp) =>{
               console.log(resp.data)
               const data=resp.data
               commit("NEW_ITEM",data)})
           .catch((err) =>{
               console.log(err)
           })
            
        },
        addElement({commit},{id,name,price,quantity}){
            commit("NEW_CART_ELEMENT",{id,name,price,quantity})
        },



       buy({commit},{cartItems,total}){
            axios.post("http://localhost:3000/order",{
                total:total,
                orderItems:cartItems
            })
            .then((resp)=>{
                console.log(resp.data)
                const data=resp.data
                commit("DONE_ORDER",data)
            })
            .catch((err)=>{
                console.log(err)
            })


        
        }
    }
})

