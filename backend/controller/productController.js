const Product= require('../models/productModel')
const Errorhander = require('../utils/errorhander')
const catchAsyncErrors= require("../middleware/catchAsyncErrors")


//create product -- admin
exports.createProduct=catchAsyncErrors(async(req,res,next)=>{
    const product= await Product.create(req.body)
    res.status(200).json({
        success:true,
        product
    })
});
// //get all product

exports.getAllProduct=catchAsyncErrors(async(req,res)=>{

const products=await Product.find();    
res.status(200).json({
    success:true,
    products
    
})
})
// update product --Admin

exports.updateProduct= catchAsyncErrors(async(req,res,next)=>{
    let product=await Product.findById(req.params.id);
    if(!product){
        return next(new Errorhander("product not found",404));
    }

    product= await Product.findByIdAndUpdate(req.params.id,req.body,{
    new:true,
    runValidators:true,
    useFindAndModify:false
});
res.status(200).json({
    success:true,
    product
})
})

//delete product

exports.deleteProduct= catchAsyncErrors(async(req,res,next)=>{
    const product =await Product.findById(req.params.id);
    if(!product){
            return next(new Errorhander("product not found",404));
    }
await product.remove();

res.status(200).json({
    success:true,
    message:"product deleted succes....."
})

})
// get single /product product
exports.getProductDetails=catchAsyncErrors(async(req,res,next)=>{
    const product = await Product.findById(req.params.id);
  
  
    if(!product){
      return next(new Errorhander("product not found",404));
      
    }
    res.status(200).json({
        success:true,
        product
    })
    
  })
  