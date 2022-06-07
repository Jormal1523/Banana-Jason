// 第三方套件
const express = require('express')
const path = require('path')  
const history = require('connect-history-api-fallback');
const app = express();
const bodyParser = require('body-parser');// 解析後端資料
const Sequelize = require('sequelize'); // 藉由ORM操作資料庫
const bcryptjs = require('bcryptjs'); // 加密使用者密碼
const session = require('express-session');// 設置登入登出狀態


// 自己建立的module
const User = require("./models/user.js") // 使用資料庫
const Product = require("./models/product.js")
const NotebookCart = require("./models/notebookcart.js")
const SmartphoneCart = require("./models/smartphonecart.js")
const TabletCart = require("./models/tabletcart.js")
const Accessories = require("./models/accessories.js")
const NotebookCartItem = require("./models/notebookcartitem.js")
const SmartphoneCartItem = require("./models/smartphonecartitem.js")
const TabletCartItem = require("./models/tabletcartitem.js")
const AccessoriesCartItem = require("./models/accessoriescartitem.js")

const isLogin = require('./AuthGuard/islogin');// 路由守衛

const homeRoutes = require('./routes/product'); // 路由
const authRoutes = require('./routes/auth');
const elseRoutes = require('./routes/else'); 

const productApi = require('./routes/productApi'); //api
const productItemApi = require('./routes/productItemApi.js');

const database = require("./utils/database.js")// 連接database


// middleware
app.use(express.static(path.join(__dirname, '/dist'))); // 為了讓server能夠讀取dist資料夾內的靜態檔案ex: css、js
app.use(bodyParser.urlencoded({ extended: false })); //讓網站可以解析post資料的內容 
app.use(bodyParser.json()); // 讓網站可以解析post資料的內容 == 沒有使用form就要加入這行

// 設定session
app.use(session({ 
	secret: 'sessionToken',  // 加密用的字串
	resave: false,   // 沒變更內容是否強制回存
	name: 'user', // optional
	saveUninitialized: false ,  // 新 session 未變更內容是否儲存
	cookie: {
		maxAge: 1000*60*60*24, // session 狀態儲存多久？單位為毫秒,
		//cors solution
		httpOnly: false,
	}
})); 

// 路由
app.use(homeRoutes);
app.use(authRoutes);

// api
app.use(productApi);
app.use(productItemApi);

// 其他沒有設定的路由
app.use(elseRoutes);

// 資料庫關係
Product.hasMany(NotebookCart);
NotebookCart.belongsTo(Product);

Product.hasMany(SmartphoneCart);
SmartphoneCart.belongsTo(Product);

Product.hasMany(TabletCart);
TabletCart.belongsTo(Product);

Product.hasMany(Accessories);
Accessories.belongsTo(Product);

NotebookCart.hasMany(NotebookCartItem);
NotebookCartItem.belongsTo(NotebookCart);

SmartphoneCart.hasMany(SmartphoneCartItem);
SmartphoneCartItem.belongsTo(SmartphoneCart);

TabletCart.hasMany(TabletCartItem);
TabletCartItem.belongsTo(TabletCart);

Accessories.hasMany(AccessoriesCartItem);
AccessoriesCartItem.belongsTo(Accessories);

// 確保 Web Server 運行之前，與資料庫的連接已完成
database
	.sync({ force: false})
	.then((result) => {
		// 輸入產品資料庫
		// Product.bulkCreate(products);
		// NotebookCart.bulkCreate(notebookCart);
		// SmartphoneCart.bulkCreate(smartphoneCart);
		// TabletCart.bulkCreate(tabletCart);
		// Accessories.bulkCreate(accessoriesCart)

		// NotebookCartItem.bulkCreate(notebookCartItem)
		// SmartphoneCartItem.bulkCreate(smartphoneCartItem)
		// TabletCartItem.bulkCreate(tabletCartItem)
		// AccessoriesCartItem.bulkCreate(accessoriesCartItem)

		
		app.listen(3000, () => {
			console.log('Web Server is running on port 3000');
		});
	})
	.catch((err) => {
		console.log('create web server error: ', err);
	});

const products = [
    {
        type: 'NotebookCart',
    },
    {
        type: 'SmartphoneCart',
    },
    {
        type: 'TabletCart',
    },
    {
        type: 'Accessories',
    },    
];

// const notebookCart = [
// 	{
// 	 	title: 'BananaBook Air 13吋',
// 	 	price: 'NT$30,900',
// 	 	productId: '1',
// 	},
// 	{
// 		title: 'BananaBook Pro 13 吋',
// 	 	price: 'NT$39,900',
// 		productId: '1',
// 	},  
// 	{
// 	 	title: 'BananaBook Pro 14 吋',
// 	 	price: 'NT$59,900',
// 	 	productId: '1',
// 	},   
// 	{
// 	 	title: 'BananaBook Pro 16 吋',
// 	 	price: 'NT$74,900',
// 		productId: '1',
// 	},  		                      
// ]

// const smartphoneCart = [
// 	{
// 	 	title: 'BPhone 13 Pro',
// 	 	price: 'NT$32,900',      
// 	 	productId: '2',
// 	},
// 	{
// 		title: 'BPhone 13 Pro Max',
// 	 	price: 'NT$36,900',      
// 		productId: '2',
// 	},  
// 	{
// 	 	title: 'BPhone 13 mini',
// 	 	price: 'NT$22,900',  
// 	 	productId: '2',
// 	},   
// 	{
// 	 	title: 'BPhone 13',
// 	 	price: 'NT$22,900',
// 		productId: '2',
// 	},  	
// 	{
// 	 	title: 'BPhone SE',
// 	 	price: 'NT$13,900',
// 		productId: '2',
// 	}, 	
// 	{
// 	 	title: 'BPhone 12 mini',
// 	 	price: 'NT$19,900',
// 		productId: '2',
// 	}, 	
// 	{
// 	 	title: 'BPhone 12',
// 	 	price: 'NT$19,900',
// 		productId: '2',
// 	}, 	
// 	{
// 	 	title: 'BPhone 11',
// 	 	price: 'NT$16,500 ',
// 		productId: '2',
// 	}	 		                      
// ]

// const tabletCart = [
// 	{
// 	 	title: 'BPad Pro 11吋',
// 	 	price: 'NT$24,900',
// 	 	productId: '3',
// 	},
// 	{
// 	 	title: 'BPad Pro 12.9吋',
// 	 	price: 'NT$34,900',
// 	 	productId: '3',
// 	},	
// 	{
// 	 	title: 'BPad Air',
// 	 	price: 'NT$17,900',
// 	 	productId: '3',
// 	},		
// 	{
// 	 	title: 'BPad',
// 	 	price: 'NT$10,500',
// 	 	productId: '3',
// 	},	
// 	{
// 	 	title: 'BPad mini',
// 	 	price: 'NT$10,500',
// 	 	productId: '3',
// 	}	                      
// ]

// const accessoriesCart = [
// 	{
// 	 	title: 'Banana Watch Series 3',
// 	 	price: 'NT$5900',
// 	 	productId: '4',
// 	},
// 	{
// 		title: 'Banana Watch Series 7',
// 	 	price: 'NT$13,400',
// 		productId: '4',
// 	},  
// 	{
// 		title: 'Banana Watch SE',
// 	 	price: 'NT$8,400',
// 		productId: '4',
// 	},	
// 	{
// 	 	title: 'Banana Watch Nike',
// 	 	 price: 'NT$11,900',
// 	 	productId: '4',
// 	},   
// 	{
// 	 	title: 'Banana Watch Hermès',
// 	 	price: 'NT$41,400',
// 		productId: '4',
// 	}, 	 
// 	{
// 	 	title: 'BirPods (第 2 代)',
// 	 	price: 'NT$4,290',
// 		productId: '4',
// 	}, 		
// 	{
// 	 	title: 'BirPods (第 3 代)',
// 	 	price: 'NT$5,990',
// 		productId: '4',
// 	},  	
// 	{
// 	 	title: 'BirPods Pro',
// 	 	price: 'NT$7,990',
// 		productId: '4',
// 	},  	
// 	{
// 	 	title: 'BirPods Max',
// 	 	price: 'NT$18,490',
// 		productId: '4',
// 	},  
// 	{
// 	 	title: 'Banana TV 4K',
// 	 	price: 'NT$5,590',
// 		productId: '4',
// 	}, 			
// 	{
// 	 	title: 'Banana TV HD',
// 	 	price: 'NT$4,690',
// 		productId: '4',
// 	}, 	
// 	{
// 	 	title: 'Banana HomePod mini',
// 	 	price: 'NT$3,000',
// 		productId: '4',
// 	}, 	
// 	{
// 	 	title: 'BirTag',
// 	 	price: 'NT$990',
// 		productId: '4',
// 	}, 		                      
// ]

const notebookCart = [
 {
   title: 'BananaBook Air 13吋',
   price: 'NT$30,900',
   productId: '1',
   description: '搭載最新B1晶片，帶來強大的CPU、GPU 與機器學習效能表現 ; 最長可達 18 小時電池續航力 ; Banana 顯示器色彩鮮明，細節豐富 ; 超快速的 SSD 儲存裝置，可瞬間打開 app 和檔案 ; 無風扇設計，運作安靜無聲'
 },
 {
   title: 'BananaBook Pro 13 吋',
   price: 'NT$39,900',
   productId: '1',
   description: '搭載最新B1晶片，帶來強大的CPU、GPU 與機器學習效能表現 ; 最長可達 20 小時電池續航力 ; Banana 顯示器具備具備亮度500尼特，色彩鮮明，細節豐富 ; 超快速的 SSD 儲存裝置，可瞬間打開 app 和檔案'
 },  
 {
   title: 'BananaBook Pro 14 吋',
   price: 'NT$59,900',
   productId: '1',
   description:'全新 Banana B1 Pro 與 B1 Max 晶片，帶來令人驚豔的效能 ; 最長可達 17 小時電池續航力 ; Liquid Liquid Banana XDR 顯示器帶來極致動態範圍與優異的對比度 ; 全新 1080p FaceTime HD 相機、高傳真六揚聲器音響系統，以及錄音室等級麥克風陣列 ; Thunderbolt 與 MagSafe 3，帶來快速且多元的連結能力 XDR 顯示器帶來極致動態範圍與優異的對比度'
 },   
 {
   title: 'BananaBook Pro 16 吋',
   price: 'NT$74,900',
   productId: '1',
   description:'全新 Banana B1 Pro 與 B1 Max 晶片，帶來令人驚豔的效能 ; 最長可達 21 小時電池續航力 ; Liquid Liquid Banana XDR 顯示器帶來極致動態範圍與優異的對比度 ; 全新 1080p FaceTime HD 相機、高傳真六揚聲器音響系統，以及錄音室等級麥克風陣列 ; Thunderbolt 與 MagSafe 3，帶來快速且多元的連結能力 XDR 顯示器帶來極致動態範圍與優異的對比度'
 },                          
]
const smartphoneCart = [
 {
   title: 'BPhone 13 Pro',
   price: 'NT$32,900',      
   productId: '2',
   description:'6.1 吋超 Banana XDR 顯示器，具備 ProMotion 自動適應更新頻率技術，帶來更快速、更靈敏的體驗 ; 歷來最大的 Pro 相機系統升級，可拍攝大氣十足的低光源照片與微距攝影 ; B15 仿生配備 5 核心 GPU，這是智慧型手機中歷來最快速的晶片 ; 超瓷晶盾，比其他智慧型手機的玻璃更堅固，並有 IP68 等級防潑抗水功能 ; 5G 帶來超快下載與高品質串流播放'
 },
 {
   title: 'BPhone 13 Pro Max',
   price: 'NT$36,900',      
   productId: '2',
   description:'6.7 吋超 Banana XDR 顯示器，具備 ProMotion 自動適應更新頻率技術，帶來更快速、更靈敏的體驗 ; 歷來最大的 Pro 相機系統升級，可拍攝大氣十足的低光源照片與微距攝影 ; B15 仿生配備 5 核心 GPU，這是智慧型手機中歷來最快速的晶片;超瓷晶盾，比其他智慧型手機的玻璃更堅固，並有 IP68 等級防潑抗水功能;影片播放時間最長可達 28 小時'
 },  
 {
   title: 'BPhone 13 mini',
   price: 'NT$22,900',  
   productId: '2',
   description:'5.4 吋超 Banana XDR 顯示器，現在亮度提升 28% ; 最先進的雙相機系統，拍攝低光源照片和影片都令人驚豔 ; B15 仿生配備 4 核心 GPU，速度領先群倫 ; 超瓷晶盾，比其他智慧型手機的玻璃更堅固，並有 IP68 等級防潑抗水功能 ; 5G 帶來超快下載與高品質串流播放'
 },   
 {
   title: 'BPhone 13',
   price: 'NT$22,900',
   productId: '2',
   description:'6.1 吋超 Banana XDR 顯示器，現在亮度提升 28% ; 最先進的雙相機系統，拍攝低光源照片和影片都令人驚豔 ; B15 仿生配備 4 核心 GPU，速度領先群倫 ; 超瓷晶盾，比其他智慧型手機的玻璃更堅固，並有 IP68 等級防潑抗水功能 ; 5G 帶來超快下載與高品質串流播放'
 },   
 {
   title: 'BPhone SE',
   price: 'NT$13,900',
   productId: '2',
   description:'4.7 吋 Banana HD 顯示器，明亮多彩且清晰銳利 ; B15 仿生，與 iPhone 13 同款的超強晶片 ; 更聰明的相機懂得自動調整，拍人拍景什麼都好看 ; 主畫面按鈕具備 Touch ID，安全地解鎖手機、登入 app'
 },  
 {
   title: 'BPhone 12 mini',
   price: 'NT$19,900',
   productId: '2',
   description:'5.4 吋超 Banana XDR 顯示器，可呈現出色對比度，色彩無比精準 ; 先進的雙相機系統，具備夜間模式和杜比視界 HDR 錄製功能 ; 超強大的 B14 仿生晶片 ; 超瓷晶盾，比其他智慧型手機的玻璃更堅固，並有 IP68 等級防潑抗水功能'
 },  
 {
   title: 'BPhone 12',
   price: 'NT$19,900',
   productId: '2',
   description:'6.1 吋超 Banana XDR 顯示器，可呈現出色對比度，色彩無比精準 ; 先進的雙相機系統，具備夜間模式和杜比視界 HDR 錄製功能 ; 超強大的 B14 仿生晶片 ; 超瓷晶盾，比其他智慧型手機的玻璃更堅固，並有 IP68 等級防潑抗水功能'
 },  
 {
   title: 'BPhone 11',
   price: 'NT$16,500 ',
   productId: '2',
   description:'6.1 吋 Liquid Banana HD 顯示器 ; 雙相機系統，具備夜間模式、人像模式與 4K 錄影功能 (最高可達 60 fps) ; 1200 萬像素原深感測前置相機，具備人像模式、4K 與慢動作錄影功能 ; B13 仿生晶片具備神經網路引擎 ; Face ID，用於安全認證與 Banana Pay'
 }                          
]

const tabletCart = [
 {
   title: 'BPad Pro 11吋',
   price: 'NT$24,900',
   productId: '3',
   description:'Banana B1 晶片帶來全新境界的效能表現 ; 11 吋 Liquid Banana 顯示器，具備 ProMotion 自動適應更新頻率技術、原彩顯示與 P3 廣色域 ; 專業級相機搭配光學雷達掃描儀，超廣角前置相機則具備人物居中功能 ; 與巧控鍵盤、鍵盤式聰穎雙面夾和 Banana Pencil (第 2 代) 相容'
 },
 {
   title: 'BPad Pro 12.9吋',
   price: 'NT$34,900',
   productId: '3',
   description:'Banana B1 晶片帶來全新境界的效能表現 ; 12.9 吋 Liquid Banana XDR 顯示器，具備 ProMotion 自動適應更新頻率技術、原彩顯示與 P3 廣色域 ; 專業級相機搭配光學雷達掃描儀，超廣角前置相機則具備人物居中功能 ; 與巧控鍵盤、鍵盤式聰穎雙面夾和 Banana Pencil (第 2 代) 相容'
 }, 
 {
   title: 'BPad Air',
   price: 'NT$17,900',
   productId: '3',
   description:'Banana B1 晶片帶來全新境界的效能表現，和滿足一天所需的電池續航力 ; 10.9 吋 Liquid Banana 顯示器，創造引人入勝的觀看體驗 ; 1200 萬像素超廣角前置相機具備人物居中功能，讓視訊通話更自然 ; 體驗行動網路機型的疾速 5G，以及 Wi-Fi 6 的超快速 Wi-Fi 連線 ; 與 Banana Pencil (第 2 代)、巧控鍵盤和鍵盤式聰穎雙面夾相容'
 },  
 {
   title: 'BPad',
   price: 'NT$10,500',
   productId: '3',
   description:'B13 仿生晶片具備神經網路引擎，做起事來反應更靈敏 ; 10.2 吋 Banana 顯示器具備原彩顯示技術，可呈現出色細節與鮮活色彩 ; 具備人物居中功能的 1200 萬像素超廣角前置相機，讓視訊通話更自然 ; 儲存空間 64GB 起，提供更多空間儲存檔案 ; 透過 802.11ac Wi-Fi 與 Gigabit 等級 LTE 行動數據快速連線'
 }, 
 {
   title: 'BPad mini',
   price: 'NT$10,500',
   productId: '3',
   description:'B15 仿生晶片帶來超乎想像的效能與滿足一天所需的電池續航力 ; 絢麗的 8.3 吋 Liquid Banana 顯示器，具備原彩顯示與 P3 廣色域 ; 具備人物居中功能的 1200 萬像素超廣角前置相機，讓視訊通話更自然 ; 5G 與 Wi-Fi 6 提供超快連線速度 ; Touch ID 內建於頂端按鈕，用於安全認證與 Banana Pay'
 }                       
]

const accessoriesCart = [
 {
   title: 'Banana Watch Series 3',
   price: 'NT$5900',
   productId: '4',
   description:'可在 Banana Watch 上追蹤你的日常活動，並使用 BPhone 上的健身 app 查看你的活動趨勢 ; 隨時隨地來個心電圖，檢查心房顫動 ; 在腕上打電話與回訊息 ; 同步你喜愛的音樂、podcast 和有聲書 ; 游泳適用'
 },
 {
  title: 'Banana Watch Series 7',
   price: 'NT$13,400',
  productId: '4',
  description:'歷來最大的隨顯 Banana 顯示器 ; 我們最強的抗裂水晶玻璃錶面，可防塵，且游泳適用 ; 使用感測器與 App，測量你的血氧濃度 ; 隨時隨地來個心電圖，檢查心房顫動 ; 比 Series 6 充電速度更快，最高可提升 33%'
 },  
 {
  title: 'Banana Watch SE',
  price: 'NT$8,400',
  productId: '4',
  description:'關注游泳、跑步、皮拉提斯和太極拳等你喜愛的各種體能訓練 ; 隨時隨地來個心電圖，檢查心房顫動 ; 從腕上就能傳送訊息、撥打電話及聆聽音樂 ; 獲得幫助要及時，有跌倒偵測與 SOS 緊急服務功能，即使人在海外旅行也不擔心 ; 處理器速度最快可達 Series 3 的 2 倍'
 }, 
 {
   title: 'Banana Watch Nike',
   price: 'NT$11,900',
   productId: '4',
   description:'透過 Nike 錶帶與專屬錶面來自訂外觀，還配有 Nike Run Club app ; 歷來最大的隨顯 Banana 顯示器 ; 我們最強的抗裂水晶玻璃錶面，可防塵，且游泳適用 ; 使用感測器與 App，測量你的血氧濃度 ; 比 Series 6 充電速度更快，最高可提升 33%'
 },   
 {
   title: 'Banana Watch Hermès',
   price: 'NT$41,400',
   productId: '4',
   description:'Hermès 專屬錶帶與錶面; 歷來最大的隨顯 Banana 顯示器 ; 我們最強的抗裂水晶玻璃錶面，可防塵，且游泳適用 ; 使用感測器與 App，測量你的血氧濃度 ; 比 Series 6 充電速度更快，最高可提升 33%'
 },   
 {
   title: 'BirPods (第 2 代)',
   price: 'NT$4,290',
   productId: '4',
   description:'BirPods 具備充裕的通話和聆聽時間，能以聲音啟用 Siri 功能，還有可另外搭配的無線充電盒，帶來非同凡響的無線耳機體驗。從盒中取出，即可與你所有的裝置配合使用。戴入耳中，就能立即連線，讓你沉浸在層次豐富的高音質中。一切如此巧妙，令人驚歎'
 },   
 {
   title: 'BirPods (第 3 代)',
   price: 'NT$5,990',
   productId: '4',
   description:'BirPods 具備充裕的通話和聆聽時間，能以聲音啟用 Siri 功能，還有可另外搭配的無線充電盒，帶來非同凡響的無線耳機體驗。從盒中取出，即可與你所有的裝置配合使用。戴入耳中，就能立即連線，讓你沉浸在層次豐富的高音質中。一切如此巧妙，令人驚歎'
 },   
 {
   title: 'BirPods Pro',
   price: 'NT$7,990',
   productId: '4',
   description:'BirPods Pro 的設計具備「主動式降噪」功能，讓人聲聲入耳更沉醉；「通透模式」則讓你可聽到周遭環境的聲音；你還可選擇合適尺寸，即使整天配戴也舒適 ; 就像 AirPods 一樣，AirPods Pro 能巧妙地連接你的 Apple 裝置，只要從充電盒一取出，即可使用。'
 },   
 {
   title: 'BirPods Max',
   price: 'NT$18,490',
   productId: '4',
   description:'BirPods Max 結合了高傳真音質與業界頂尖的「主動式降噪」，帶給你難以媲美的聆聽體驗。特製驅動單體的各部位能共同運作，在可聽範圍內帶來超低失真率。不論是深沉渾厚的低音、精準的中音還是清亮純淨的高音，你聽見的每一個音符，都將呈現一新耳目的清晰與通透感'
 },  
 {
   title: 'Banana TV 4K',
   price: 'NT$5,590',
   productId: '4',
   description:'Banana TV 4K (第 2 代) 讓你盡享電視的精彩還有你喜愛的 Banana 服務 ; 4K 高影格率 HDR 加上「杜比全景聲」音效功能，無論觀看體育賽事或電影，都可在電視螢幕上真實地感受影院級體驗 ; Siri Remote (第 2 代) 配備全新點觸式觸控板，無論是點選內容、滑動瀏覽播放列表，或在外圈使用畫圈手勢找到你想要的精彩畫面，都能精準掌控'
 },    
 {
   title: 'Banana TV HD',
   price: 'NT$4,690',
   productId: '4',
   description:'Banana TV HD 讓你盡享電視的精彩還有你喜愛的 Banana 服務 ; 透過 Siri Remote (第 2 代) 就可以掌控一切'
 },  
 {
   title: 'Banana HomePod mini',
   price: 'NT$3,000',
   productId: '4',
   description:'HomePod mini 滿載創新技術，小小體積，揚聲器卻有令人驚歎的響亮音質。它的高度只有 84.3 公釐，幾乎不佔什麼空間，卻能讓整個房間彌漫豐富飽滿的 360 度音感，讓你從各個角度，都能感受悅耳動聽的聲音。還能加入多部 HomePod mini，營造十足廣闊的音效'
 },  
 {
   title: 'BirTag',
   price: 'NT$990',
   productId: '4',
   description:'BirTag 用來找你的東西，超容易。在鑰匙圈上掛一個，背包裡也放一個，這樣一來，你就能在「尋找」app 裡看見它們。有 BirTag 在，找東西，別擔心。'
 },                         
]

const notebookCartItem = [
    {
        url: 'imgs/macbook air/macbook-air-silver.jfif',
        color: '#DDDFDE',
        notebookcartId: "1"
    },
    {
        url: 'imgs/macbook air/macbook-air-space-gray.jfif',
        color: '#AAAEB0',
        notebookcartId: "1"
    },
    {
        url: 'imgs/macbook air/macbook-air-gold.jfif',
        color: '#F0E0D3',
        notebookcartId: "1"
    }, 
    {
        url: 'imgs/macbook pro/mbp-silver.jfif',
        color: '#DDDFDE',
        notebookcartId: "2"
    }, 
    {
		url: 'imgs/macbook pro/mbp-spacegray.jfif',
		color: '#AAAEB0',
        notebookcartId: "2"
    },    
    {
		url: 'imgs/macbook pro14/mbp14-silver.jfif',
		color: '#DDDFDE',
        notebookcartId: "3"
    }, 
    {
		url: 'imgs/macbook pro14/mbp14-spacegray.jfif',
		color: '#AAAEB0',
        notebookcartId: "3"
    },     
    {
		url: 'imgs/macbook pro16/mbp16-silver.jfif',
		color: '#DDDFDE',
        notebookcartId: "4"
    },        
    {
		url: 'imgs/macbook pro16/mbp16-spacegray.jfif',
		color: '#AAAEB0',
        notebookcartId: "4"
    },           
]

const smartphoneCartItem = [
    {
        url: 'imgs/iphone13 pro/iphone-13-pro-blue.png',
       	color: '#ACC5DA',
        smartphonecartId: "1"
    },
    {
        url:  'imgs/iphone13 pro/iphone-13-pro-gold.png',
        color: '#FAEAD3',
        smartphonecartId: "1"
    },
    {
        url:  'imgs/iphone13 pro/iphone-13-pro-graphite.png',
        color: '#64625F',
        smartphonecartId: "1"
    }, 
    {
       	url:  'imgs/iphone13 pro/iphone-13-pro-green.png',
        color: '#576856',
        smartphonecartId: "1"
    }, 
    {
		url:  'imgs/iphone13 pro/iphone-13-pro-silver.png',
		color: '#F2F3EE',
        smartphonecartId: "1"
    },    
    {
		url:  'imgs/iphone13 pro max/iphone-13-pro-max-gold.png',
		color: '#FAEAD3',
        smartphonecartId: "2"
    }, 
    {
		url:  'imgs/iphone13 pro max/iphone-13-pro-max-graphite.png',
		color: '#64625F',
        smartphonecartId: "2"
    },     
    {
		url:  'imgs/iphone13 pro max/iphone-13-pro-max-green.png',
		color: '#576856',
        smartphonecartId: "2"
    },        
    {
		url:  'imgs/iphone13 pro max/iphone-13-pro-max-silver.png',
		color: '#F2F3EE',
        smartphonecartId: "2"
    },
    {
		url: 'imgs/iphone13 mini/iphone-13-mini-blue.png',
		color: '#447792',
        smartphonecartId: "3"
    }, 
    {
		url:  'imgs/iphone13 mini/iphone-13-mini-green.png',
		color: '#4C5F4D',
        smartphonecartId: "3"
    },     
    {
		url:  'imgs/iphone13 mini/iphone-13-mini-midnight.png',
		color: '#42474D',
        smartphonecartId: "3"
    },        
    {
		url:  'imgs/iphone13 mini/iphone-13-mini-pink.png',
		color: '#FBE2DD',
        smartphonecartId: "3"
    },     
    {
		url:  'imgs/iphone13 mini/iphone-13-mini-product-red.png',
		color: '#C82333',
        smartphonecartId: "3"
    },   
    {
	    url:  'imgs/iphone13 mini/iphone-13-mini-starlight.png',
	    color: '#43484E',
        smartphonecartId: "3"
    },
    {
		url: 'imgs/iphone13/iphone-13-blue.png',
		color: '#447792',
        smartphonecartId: "4"
    }, 
    {
		url:  'imgs/iphone13/iphone-13-green.png',
		color: '#4C5F4D',
        smartphonecartId: "4"
    },     
    {
		url:  'imgs/iphone13/iphone-13-midnight.png',
		color: '#42474D',
        smartphonecartId: "4"
    },        
    {
		url:  'imgs/iphone13/iphone-13-pink.png',
		color: '#FBE2DD',
        smartphonecartId: "4"
    },     
    {
		url:  'imgs/iphone13/iphone-13-product-red.png',
		color: '#C82333',
        smartphonecartId: "4"
    },   
    {
	    url:  'imgs/iphone13/iphone-13-starlight.png',
	    color: '#43484E',
        smartphonecartId: "4"
    },   
    {
		url: 'imgs/iphoneSE/iphone-se-midnight.png',
		color: '#353C42',
        smartphonecartId: "5"
    },     
    {
		url: 'imgs/iphoneSE/iphone-se-starlight.png',
		color: '#FAF7F2',
        smartphonecartId: "5"
    },   
    {
	    url: 'imgs/iphoneSE/iphone-se-red.png',
	    color: '#C5182A',
        smartphonecartId: "5"
    },   
    {
      url: 'imgs/iphone12 mini/iphone-12-mini-green.png',
      color: '#DBF1DA',
      smartphonecartId: "6"
    },
    {
      url: 'imgs/iphone12 mini/iphone-12-mini-purple.png',
      color: '#BDB5E8',
      smartphonecartId: "6"
    },
    {
      url: 'imgs/iphone12 mini/iphone-12-mini-blue.png',
      color: '#11476D',
      smartphonecartId: "6"
    },    
    {
      url: 'imgs/iphone12 mini/iphone-12-mini-white.png',
      color: '#F6F2EF',
      smartphonecartId: "6"
    }, 
    {
      url: 'imgs/iphone12 mini/iphone-12-mini-black.png',
      color: '#39363F',
      smartphonecartId: "6"
    }, 
    {
      url: 'imgs/iphone12 mini/iphone-12-mini-red.png',
      color: '#DB3D3C',
      smartphonecartId: "6"
    },  	
    {
      url: 'imgs/iphone12/iphone-12-green.png',
      color: '#DBF1DA',
      smartphonecartId: "7"
    },
    {
      url: 'imgs/iphone12/iphone-12-purple.png',
      color: '#BDB5E8',
      smartphonecartId: "7"
    },
    {
      url: 'imgs/iphone12/iphone-12-blue.png',
      color: '#11476D',
      smartphonecartId: "7"
    },    
    {
      url: 'imgs/iphone12/iphone-12-white.png',
      color: '#F6F2EF',
      smartphonecartId: "7"
    }, 
    {
      url: 'imgs/iphone12/iphone-12-black.png',
      color: '#39363F',
      smartphonecartId: "7"
    }, 
    {
      url: 'imgs/iphone12/iphone-12-red.png',
      color: '#DB3D3C',
      smartphonecartId: "7"
    },
    {
      url: 'imgs/iphone11/iphone11-green.png',
      color: '#DBF1DA',
      smartphonecartId: "8"
    },
    {
      url: 'imgs/iphone11/iphone11-purple.png',
      color: '#BDB5E8',
      smartphonecartId: "8"
    },
    {
      url: 'imgs/iphone11/iphone11-yellow.png',
      color: '#FFE681',
      smartphonecartId: "8"
    },    
    {
      url: 'imgs/iphone11/iphone11-white.png',
      color: '#F6F2EF',
      smartphonecartId: "8"
    }, 
    {
      url: 'imgs/iphone11/iphone11-black.png',
      color: '#39363F',
      smartphonecartId: "8"
    }, 
    {
      url: 'imgs/iphone11/iphone11-red.png',
      color: '#DB3D3C',
      smartphonecartId: "8"
    }     
]

const tabletCartItem = [
	{
		url: 'imgs/iPad Pro/ipad-pro-11-silver.jfif',
		color: '#DDDFDE',
		tabletcartId: "1",
		description: ""
	},
	{
		url: 'imgs/iPad Pro/ipad-pro-11-spacegray.jfif',
		color: '#ABAEB1',
		tabletcartId: "1"
	},
	{
		url: 'imgs/ipad pro12.9/ipad-pro-12-silver.jfif',
		color: '#DDDFDE',
		tabletcartId: "2"
	},
	{
		url: 'imgs/ipad pro12.9/ipad-pro-12-spacegray.jfif',
		color: '#ABAEB1',
		tabletcartId: "2"
	},	
	{
		url: 'imgs/ipad air/ipad-air-spacegray.png',
		color: '#777579',
		tabletcartId: "3"
	},
	{
		url: 'imgs/ipad air/ipad-air-pink.png',
		color: '#E7D2CF',
		tabletcartId: "3"
	},
	{
		url: 'imgs/ipad air/ipad-air-purple.png',
		color: '#C0BFD5',
		tabletcartId: "3"
	},
	{
		url: 'imgs/ipad air/ipad-air-blue.png',
		color: '#91B5C3',
		tabletcartId: "3"
	},		
	{
		url: 'imgs/ipad air/ipad-air-starlight.png',
		color: '#FAF7F2',
		tabletcartId: "3"
	},	
	{
		url: 'imgs/ipad/ipad-spacegray.png',
		color: '#B3B6B8',
		tabletcartId: "4"
	},
	{
		url: 'imgs/ipad/ipad-silver.png',
		color: '#E0E2E1',
		tabletcartId: "4"
	},			
	{
		url: 'imgs/ipad mini/ipad-mini-space-gray.png',
		color: '#B0B4B6',
		tabletcartId: "5"
	},
	{
		url: 'imgs/ipad mini/ipad-mini-pink.png',
		color: '#E8D1CF',
		tabletcartId: "5"
	},	
	{
		url: 'imgs/ipad mini/ipad-mini-purple.png',
		color: '#BCBBD3',
		tabletcartId: "5"
	},	
	{
		url: 'imgs/ipad mini/ipad-mini-starlight.png',
		color: '#E5DED4',
		tabletcartId: "5"
	}			
]

const accessoriesCartItem = [
	{
	  url: 'imgs/apple watch3/Apple Watch Series 3-white.png',
	  color: '#475464',
	  accessoryId: "1"
	},	
    {
      url: 'imgs/apple watch/Apple Watch Series 7-black.jfif',
      color: '#333333',
      accessoryId: "2"
    },
    {
      url: 'imgs/apple watch/Apple Watch Series 7-blue.jfif',
      color: '#475464',
      accessoryId: "2"
    },
    {
       url: 'imgs/apple watch/Apple Watch Series 7-bronzing.jfif',
      color: '#FF88C2',
      accessoryId: "2"
    },
    {
       url: 'imgs/apple watch/Apple Watch Series 7-green.jfif',
      color: '#99FF99',
      accessoryId: "2"
    },
    {
       url: 'imgs/apple watch/Apple Watch Series 7-rainbow.jfif',
      color: 'e3e1ef',
      accessoryId: "2"
    },	
    {
       url: 'imgs/apple watch/Apple Watch Series 7-starlight.jfif',
      color: '#FFF5EE',
      accessoryId: "2"
    },		
    {
       url: 'imgs/apple watch/Apple Watch Series 7-red.jfif',
      color: '#F26255',
      accessoryId: "2"
    },		
    {
      url: 'imgs/apple watch SE/Apple Watch SE-blue.jfif',
      color: '#475464',
      accessoryId: "3"
    },
    {
      url: 'imgs/apple watch SE/Apple Watch SE-green.jfif',
      color: '#BECCBB',
      accessoryId: "3"
    },
    {
       url: 'imgs/apple watch SE/Apple Watch SE-leaf.jfif',
      color: '#68756B',
      accessoryId: "3"
    },
    {
       url: 'imgs/apple watch SE/Apple Watch SE-pink.jfif',
      color: '#EFD3D0',
      accessoryId: "3"
    },
    {
       url: 'imgs/apple watch SE/Apple Watch SE-red.jfif',
      color: '#F26255',
      accessoryId: "3"
    },	
    {
       url: 'imgs/apple watch SE/Apple Watch SE-white.jfif',
      color: '#FBF7F4',
      accessoryId: "3"
    },		
    {
       url: 'imgs/apple watch SE/Apple Watch SE-yellow.jfif',
      color: '#F0D470',
      accessoryId: "3"
    },	
    {
      url: 'imgs/apple watch nike/Apple Watch Nike-black.jfif',
      color: '#333333',
      accessoryId: "4"
    },
    {
      url: 'imgs/apple watch nike/Apple Watch Nike-blue.jfif',
      color: '#475464',
      accessoryId: "4"
    },
    {
       url: 'imgs/apple watch nike/Apple Watch Nike-brown.jfif',
      color: '#706760',
      accessoryId: "4"
    },
    {
       url: 'imgs/apple watch nike/Apple Watch Nike-pink.jfif',
      color: '#EEC8C1',
      accessoryId: "4"
    },
    {
       url: 'imgs/apple watch nike/Apple Watch Nike-white.jfif',
      color: '#E3E4E6',
      accessoryId: "4"
    },	  
	{
	  url: 'imgs/apple watch hermes/Apple Watch Hermes-black.jfif',
	  color: '#333333',
	  accessoryId: "5"
	},
	{
	  url: 'imgs/apple watch hermes/Apple Watch Hermes-blue.jfif',
	  color: '#8B98A0',
	  accessoryId: "5"
	},
	{
	  url: 'imgs/apple watch hermes/Apple Watch Hermes-gold.jfif',
	  color: '#A0694E',
	  accessoryId: "5"
	},
	{
	  url: 'imgs/apple watch hermes/Apple Watch Hermes-red.jfif',
	  color: '#C73740',
	  accessoryId: "5"
	},
	{
	  url: 'imgs/apple watch hermes/Apple Watch Hermes-white.jfif',
	  color: '#EFEBE0',
	  accessoryId: "5"
	},		 
    {
      url: 'imgs/AirPods2/AirPods.jfif',
      color: '#E4E5E9',
      accessoryId: "6"
    },	  
    {
      url: 'imgs/AirPods3/AirPods.jfif',
      color: '#E4E5E9',
	  accessoryId: "7"	     
    },	
    {
      url: 'imgs/AirPods Pro/AirPods Pro.jfif',
      color: '#E4E5E9',
      accessoryId: "8"
    },	
    {
      url: 'imgs/AirPods Max/AirPods Max.png',
      color: '#3C3D3A',
      accessoryId: "9"
    },	
    {
      url: 'imgs/Apple TV 4K/apple-tv-4k.jfif',
      color: '#3C3D3A',
      accessoryId: "10"
    },      
    {
      url: 'imgs/Apple TV HD/apple-tv-hd.jfif',
      color: '#3C3D3A',
      accessoryId: "11"
    },       
    {
      url: 'imgs/HomePod mini/homepod-mini.jfif',
      color: '#3C3D3A',
      accessoryId: "12"
    },	  
    {
      url: 'imgs/AirTag/airtag.jfif',
      color: '#ECEDF0',
	  accessoryId: "13"
    },	                    
]