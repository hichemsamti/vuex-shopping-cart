const express =require ('express')

const router = express.Router()

const Order=require("../models/order.js")

//const Product=require("../models/product.js")

router.post('/',(req,res)=>{
    console.log(req.body)
    const orderItems=[]
    const cart=req.body.orderItems
    cart.forEach((element=>{orderItems.push(element.id)}))
    order= new Order ({
       orderItems:orderItems,
       total:req.body.total

    

    })
    order.save(()=>{
        res.json(order)
     })
})

router.delete("/:id", (req, res) => {
    Menu.findByIdAndDelete(req.params.id, (err) => {
      res.json({ message: "deleted" });
    });
  });







module.exports=router