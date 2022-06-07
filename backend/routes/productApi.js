// 第三方套件
const express = require('express');
const Product = require('../models/product'); 


const router = express.Router();

router.get('/productApi', (req, res) => {
	Product.findAll()
	.then((products)=>{
		res.send(products)
	})
	.catch((err)=>{
		console.log(err)
	})
});

module.exports = router;