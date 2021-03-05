const express =require ('express')

const router = express.Router()

const Product=require("../models/product.js")

router.post('/',(req,res)=>{
    console.log(req.body)
    product= new Product({
        
        name:req.body.name,
        quantity:req.body.quantity,
        
        price:req.body.price
    

    })
    product.save(()=>{
        res.json(product)
        console.log("aaaa:"+ product)
     })
})


router.get("/", async (req, res) => {
    try{
  
    var product = await Product.find({});
     console.log(product)
    res.json(product);
    }catch(err){
        console.log(err)
    }
  });




module.exports=router