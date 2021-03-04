const express =require ('express')

const router = express.Router()

const Order=require("../models/order.js")

//const Product=require("../models/product.js")

router.post('/',(req,res)=>{
    const orderItems=[]
    const cart=req.body.orderItems
    cart.forEach((element=>{orderItems.push(element.id)}))
    Order= new Menu({
       orderItems:orderItems,
       price:req.body.price

    

    })
    Order.save(()=>{
        res.json(Order)
     })
})

router.delete("/:id", (req, res) => {
    Menu.findByIdAndDelete(req.params.id, (err) => {
      res.json({ message: "deleted" });
    });
  });







module.exports=router