const express =require ('express')

const router = express.Router()

const Product=require("../models/product.js")

router.post('/',(req,res)=>{
    product= new Product({
        
        name:req.body.name,
        quantity:req.body.quantity,
        
        price:req.body.price
    

    })
    product.save(()=>{
        res.json(product)
     })
})




module.exports=router