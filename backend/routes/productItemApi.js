// 第三方套件
const express = require('express');
const asyncHandler = require('express-async-handler')

// 自己加入的module
const NotebookCart = require("../models/notebookcart.js")
const SmartphoneCart = require("../models/smartphonecart.js")
const TabletCart = require("../models/tabletcart.js")
const Accessories = require("../models/accessories.js")

const NotebookCartItem = require("../models/notebookcartitem.js")
const SmartphoneCartItem = require("../models/smartphonecartitem.js")
const TabletCartItem = require("../models/tabletcartitem.js")
const AccessoriesCartItem = require("../models/accessoriescartitem.js")

const router = express.Router();

router.post('/productItemApi', (req, res) => {
	let{id, cartName} = req.body
	switch(cartName)
	{
	    case 'NotebookCart':
			NotebookCart.findOne({
				where: {
					id: id
				},
				// 新增 include 這個參數來指定 Model
				include: NotebookCartItem
			})
			.then(product => {

				let data = {
					title: product.title,
					price: product.price,
					description: product.description,
					cartItems: product.notebookcartitems
				}
				res.send(JSON.stringify(data))
			});
	        break;

	    case 'SmartphoneCart':
			SmartphoneCart.findOne({
				where: {
					id: id
				},
				// 新增 include 這個參數來指定 Model
				include: SmartphoneCartItem
			})
			.then(product => {

				let data = {
					title: product.title,
					price: product.price,
					description: product.description,
					cartItems: product.smartphonecartitems
				}
				res.send(JSON.stringify(data))
			});
	        break;	      

	    case 'TabletCart':
			TabletCart.findOne({
				where: {
					id: id
				},
				// 新增 include 這個參數來指定 Model
				include: TabletCartItem
			})
			.then(product => {
				let data = {
					title: product.title,
					price: product.price,
					description: product.description,
					cartItems: product.tabletcartitems
				}
				res.send(JSON.stringify(data))
			});
	        break;	 	 

	    case 'Accessories':
			Accessories.findOne({
				where: {
					id: id
				},
				// 新增 include 這個參數來指定 Model
				include: AccessoriesCartItem
			})
			.then(product => {

				let data = {
					title: product.title,
					price: product.price,
					description: product.description,
					cartItems: product.accessoriescartitems
				}
				res.send(JSON.stringify(data))
			});
	        break;		                 
	}	
});

module.exports = router;