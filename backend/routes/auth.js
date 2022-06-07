// 第三方套件
const express = require('express');
const bcryptjs = require('bcryptjs');// 加密使用者密碼
const path = require('path');
const cookie = require('js-cookie');

// 自己建立的module
const User = require("../models/user.js")// 使用資料庫
const rootPath = path.resolve(__dirname,'..'); //取得上一層路徑位置  


const router = express.Router();




// post login, signup
router.post('/signup', (req, res) => {
	let {name, phone, email, password} = req.body
	User.findOne({where: {email}})	// 判斷使用者是否已經存在
		.then((user)=>{
			if(user){
				return res.send({status: 0})
			}
			else{
				res.send({status: 1})
                return bcryptjs.hash(password, 12)// 密碼加密
                    .then((hashedPassword) => {
                        return User.create({ name, phone, email, password: hashedPassword });
                    })
                    .catch((err) => {
                        console.log('create new user error: ', err);
                    })
			}
		})
});

router.post('/login', (req, res) => {
	let {email, password} = req.body
	User.findOne({where: {email}})	// 判斷使用者是否已經註冊
		.then((user)=>{
	        if (!user) {
	            return res.send({status: 0})
	        }
	        bcryptjs
	            .compare(password, user.password)
	            .then((isMatch) => {
	                if (isMatch) {
	                	req.session.email = email;
	                	return res.send({
	                		status: 1,
	                		userName: user.name 
	                	})
	                }
	                else{
	                	return res.send({status: 0})
	                }
	            })
	            .catch((err) => {
	            	return res.send({status: 0})
	            })		            
		})	
});

// 登出刪除session
router.post('/logout', (req, res) => {
	req.session.destroy();
	return res.send({status: 1})
});


//需要有登入才可以顯示,
router.post('/shopcart', (req, res) => {
	if (req.session.email) {
		console.log('authenticated')
		return res.send({status: 1,})
	} 
	else {
		console.log('not authenticated')
		return res.send({status: 0})
	}    
});

module.exports = router;