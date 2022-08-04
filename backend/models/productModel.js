const { kMaxLength } = require('buffer')
const mongoose=require('mongoose')

const productSchema=mongoose.Schema({

name:{
    type:String,
    required:[true, 'please enter product name'],
    trim:true
},
description:{
    type:String,
    require:[true, 'please add product description ']
},
price:{
    type:Number,
    required:[true,'please enter price'],
    maxLength:[6,'price cannot exceed 8 figure']
},
rating:{
    type:Number,
    default:0
},
Images:[{
    public_id:{
        type:String,
        required:true
    },
    url:{
        type:String,
        required:true
    }

}],
category:{
    type:String,
    required:[true,"please enter product category"]

},
Stock:{
    type:Number,
    required:[true,'please enter product stock'],
    maxLength:[3,'stock cannot exceed 4 character'],
    default:1
},
numofReviews:{
    type:Number,
    default:0
},
reviews:[
    {
    name:{
    type:String,
    reuired:true,
    },
    rating:{
    type:Number,
    required:true,
    },
    comment:{
        type:String,
        required:true
    }
}
], 
createdAt:{
    type:Date,
    default:Date.now
}

})

module.exports=mongoose.model("Product",productSchema);