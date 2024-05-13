const ProductModel = require('../models/productModels');
//Get products API-/api/v1/product
exports.getProducts = async (req,res,next)=>{
   const query =  req.query.keyword?{ name : { 
        $regex: req.query.keyword,
        $options: 'i'
    }}:{}
   const products = await ProductModel.find(query);

    res.json({
        success:true,
        products
    })
}
//Get Singleproduct API-/api/v1/product/:id
exports.getSingleProduct = async(req,res,next)=>{
    try {
        const product = await ProductModel.findById(req.params.id);
        res.json({
            success:true,
            product
        })
    } catch (error) {
        res.status(404).json({
            success:false,
            message: 'unable to get that product with that id'
        })
    }

   

    
}