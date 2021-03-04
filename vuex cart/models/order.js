const mongoose=require('mongoose')
const Schema = mongoose.Schema;
const OrderSchema = new Schema({
  orderItems: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    }],
    total: {
        type: Number,
        ref: "total",
      }
    })

    module.exports=mongoose.model('Order',OrderSchema)