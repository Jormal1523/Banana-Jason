(function(){"use strict";var t={554:function(t,n,o){var a=o(963),e=o(252);function r(t,n){const o=(0,e.up)("router-view");return(0,e.wg)(),(0,e.j4)(o)}var s=o(744);const c={},l=(0,s.Z)(c,[["render",r]]);var i=l,u=o(119),p=o(955),m=o(669),d=o.n(m),b=o.p+"img/img1.png",h=o.p+"img/img2.png";const f=(0,e._)("div",{class:"phoneVideo"},[(0,e._)("iframe",{width:"100%",height:"580",src:"https://www.youtube.com/embed/XKfgdkcIUxw?modestbranding=1&autohide=0&showinfo=0&controls=0&autoplay=1&mute=1&fs=0&iv_load_policy=3&loop=1&playlist=XKfgdkcIUxw&rel=0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},"\r\n    ")],-1),g={class:"phonePage"},v=(0,e._)("br",null,null,-1),_=(0,e._)("h1",null,"Bphone 13 Pro",-1),w=(0,e._)("h3",null,"就。很。Pro",-1),C=(0,e.Uk)("購買 >"),k=(0,e._)("br",null,null,-1),y=(0,e._)("img",{class:"phoneImg",src:"https://www.apple.com/v/iphone-13-pro/f/images/meta/iphone-13-pro_overview__f8jyv9tx1pe2_og.png",alt:""},null,-1),x={class:"macPage"},I=(0,e._)("br",null,null,-1),N=(0,e._)("h1",null,"BananaBook Pro",-1),D=(0,e._)("h3",null,"超Banana",-1),W=(0,e.Uk)("購買 >"),P=(0,e._)("br",null,null,-1),U=(0,e._)("img",{class:"macImg",src:"https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2021/10/19/0/14362405.png&s=Y&x=152&y=0&sw=855&sh=570&exp=3600",alt:""},null,-1),A=(0,e.uE)('<div class="homePageSection"><div class="block a"><img class="blockImg" src="'+b+'" alt=""></div><div class="block b"><img class="blockImg" src="'+h+'" alt=""></div></div>',1);function B(t,n,o,a,r,s){const c=(0,e.up)("NavbarComponent"),l=(0,e.up)("router-link"),i=(0,e.up)("FooterComponent");return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e.Wm)(c),f,(0,e._)("div",g,[v,_,w,(0,e.Wm)(l,{to:"/"},{default:(0,e.w5)((()=>[C])),_:1}),k,y]),(0,e._)("div",x,[I,N,D,(0,e.Wm)(l,{to:"/"},{default:(0,e.w5)((()=>[W])),_:1}),P,U]),A,(0,e.Wm)(i)],64)}const F={class:"navbar navbar-dark navbar-expand-lg bg-dark"},S={class:"container-fluid"},Z=(0,e._)("img",{src:"https://img.icons8.com/external-basicons-color-danil-polshin/50/000000/external-banana-fruits-and-berries-basicons-color-danil-polshin.png"},null,-1),j=(0,e.Uk)("Banana"),L={class:"collapse navbar-collapse"},O=(0,e._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#navbarOffcanvasLg","aria-controls":"navbarOffcanvasLg"},[(0,e._)("span",{class:"navbar-toggler-icon"})],-1),Y={class:"offcanvas offcanvas-end",tabindex:"-1",id:"navbarOffcanvasLg","aria-labelledby":"navbarOffcanvasLgLabel"},H=(0,e._)("div",{class:"offcanvas-header"},[(0,e._)("h5",{class:"offcanvas-title",id:"offcanvasNavbarLabel"},"Banana"),(0,e._)("button",{type:"button",class:"btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"})],-1),T={class:"offcanvas-body bg-dark"};function V(t,n,o,a,r,s){const c=(0,e.up)("router-link"),l=(0,e.up)("MenuComponent");return(0,e.wg)(),(0,e.iD)("nav",F,[(0,e._)("div",S,[Z,(0,e.Wm)(c,{class:"navbar-brand",to:"/"},{default:(0,e.w5)((()=>[j])),_:1}),(0,e._)("div",L,[(0,e.Wm)(l)]),O,(0,e._)("div",Y,[H,(0,e._)("div",T,[(0,e.Wm)(l)])])])])}const E={class:"navbar-nav justify-content-end flex-grow-1 pe-3"},$={class:"nav-item"},K=(0,e.Uk)("首頁"),z={class:"nav-item"},M=(0,e.Uk)("註冊"),q={class:"nav-item"},X=(0,e.Uk)("登入"),G={class:"nav-item"},J=(0,e.Uk)("關於我們"),Q={class:"nav-item"},R=(0,e.Uk)("商品一覽"),tt={class:"nav-item"},nt=(0,e.Uk)("購物車"),ot=(0,e.Uk)("會員資訊");function at(t,n,o,r,s,c){const l=(0,e.up)("router-link");return(0,e.wg)(),(0,e.iD)("ul",E,[(0,e._)("li",$,[(0,e.Wm)(l,{class:"nav-link active","aria-current":"page",to:"/"},{default:(0,e.w5)((()=>[K])),_:1})]),(0,e._)("li",z,[(0,e.wy)((0,e.Wm)(l,{class:"nav-link",to:"/signup"},{default:(0,e.w5)((()=>[M])),_:1},512),[[a.F8,!c.isLogin]])]),(0,e._)("li",q,[(0,e.wy)((0,e.Wm)(l,{class:"nav-link",to:"/login"},{default:(0,e.w5)((()=>[X])),_:1},512),[[a.F8,!c.isLogin]]),(0,e.wy)((0,e._)("button",{onClick:n[0]||(n[0]=t=>c.logout()),class:"nav-link nonBtn"},"登出",512),[[a.F8,c.isLogin]])]),(0,e._)("li",G,[(0,e.Wm)(l,{class:"nav-link",to:"/about"},{default:(0,e.w5)((()=>[J])),_:1})]),(0,e._)("li",Q,[(0,e.Wm)(l,{class:"nav-link",to:"/products"},{default:(0,e.w5)((()=>[R])),_:1})]),(0,e._)("li",tt,[(0,e.Wm)(l,{class:"nav-link",to:"/shopcart"},{default:(0,e.w5)((()=>[nt])),_:1}),(0,e.wy)((0,e.Wm)(l,{class:"nav-link",to:"/member"},{default:(0,e.w5)((()=>[ot])),_:1},512),[[a.F8,c.isLogin]])])])}var et={name:"MenuComponent",data(){return{}},computed:{isLogin(){return void 0!==p.Z.get("user")}},methods:{logout(){d().post("logout").then((t=>{1==t.data.status&&(alert("已經登出!"),p.Z.remove("user"),this.$router.push("/"))})).catch((t=>{console.log("err")}))}}};const rt=(0,s.Z)(et,[["render",at],["__scopeId","data-v-14bd8b44"]]);var st=rt,ct={name:"NavbarComponent",data(){return{}},components:{MenuComponent:st}};const lt=(0,s.Z)(ct,[["render",V]]);var it=lt;const ut={class:"bg-dark text-center text-white"},pt=(0,e._)("div",{class:"container p-4 pb-0"},[(0,e._)("section",{class:"mb-4"},[(0,e._)("a",{class:"btn btn-outline-light btn-floating m-1",href:"#!",role:"button"},[(0,e._)("i",{class:"fab fa-facebook-f"})]),(0,e._)("a",{class:"btn btn-outline-light btn-floating m-1",href:"#!",role:"button"},[(0,e._)("i",{class:"fab fa-twitter"})]),(0,e._)("a",{class:"btn btn-outline-light btn-floating m-1",href:"#!",role:"button"},[(0,e._)("i",{class:"fab fa-google"})]),(0,e._)("a",{class:"btn btn-outline-light btn-floating m-1",href:"#!",role:"button"},[(0,e._)("i",{class:"fab fa-instagram"})]),(0,e._)("a",{class:"btn btn-outline-light btn-floating m-1",href:"#!",role:"button"},[(0,e._)("i",{class:"fab fa-linkedin-in"})]),(0,e._)("a",{class:"btn btn-outline-light btn-floating m-1",href:"#!",role:"button"},[(0,e._)("i",{class:"fab fa-github"})])])],-1),mt=(0,e._)("div",{class:"text-center p-3",style:{"background-color":"rgba(0, 0, 0, 0.2)"}},[(0,e.Uk)(" © 2020 Copyright: "),(0,e._)("a",{class:"text-white",href:"https://mdbootstrap.com/"},"MDBootstrap.com")],-1),dt=[pt,mt];function bt(t,n){return(0,e.wg)(),(0,e.iD)("footer",ut,dt)}const ht={},ft=(0,s.Z)(ht,[["render",bt]]);var gt=ft,vt={name:"HomeView",components:{NavbarComponent:it,FooterComponent:gt}};const _t=(0,s.Z)(vt,[["render",B]]);var wt=_t;const Ct=(0,e._)("div",{class:"container"},[(0,e._)("div",{class:"row justify-content-center"},[(0,e._)("div",{class:"col-10 col-md-8 col-lg-8"},[(0,e._)("h2",null,"關於我們"),(0,e._)("p",null,[(0,e.Uk)("Banana，起初是由三個養程班的同學突發其想，在某個小教室裡討論所誕生的。"),(0,e._)("br"),(0,e._)("br"),(0,e.Uk)("      在這個與時俱進的時代裡，3C產品已經變成每個人生活中不可或缺的存在，想要跟上這個時代的洪流，在這樣的理念下，我們創造了最初的發想，首先嘗試做出了我們的第一個形象網站以及第一部智能手機Bphone，在積極推銷自家的產品理念後，很幸運的，我們得到了許多貴人的幫助以及贊助，才能有現在如此規模的成長，之後的幾年時間，也陸續推出了BananaBook、Banana Watch等智慧型商品，我們的未來展望，就如我們最初的發想理念，希望顧客們都可以躋身在這科技洪流之中，為此，我們會繼續研發並且精進自己，讓Banana的家庭更加壯大。")])])]),(0,e._)("img",{class:"aboutImg",src:"https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iOS/ios14-memoji-hero.jpg",alt:""})],-1);function kt(t,n,o,a,r,s){const c=(0,e.up)("NavbarComponent"),l=(0,e.up)("FooterComponent");return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e.Wm)(c),Ct,(0,e.Wm)(l,{class:"fixed-bottom"})],64)}var yt={name:"AboutView",components:{NavbarComponent:it,FooterComponent:gt}};const xt=(0,s.Z)(yt,[["render",kt]]);var It=xt;function Nt(t,n,o,a,r,s){const c=(0,e.up)("NavbarComponent"),l=(0,e.up)("LoginComponent"),i=(0,e.up)("FooterComponent");return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e.Wm)(c),(0,e.Wm)(l),(0,e.Wm)(i,{class:"fixed-bottom"})],64)}const Dt={class:"mid1 col-5 d-flex justify-content-center align-items-center flex-column flex-nowrap my-5"},Wt=(0,e._)("h3",{class:"mb-5"},"登入",-1),Pt={class:"col-10 form-floating px-1 mb-3"},Ut=(0,e._)("label",{for:"Email"},"Email",-1),At={class:"col-10 form-floating px-1 mb-3"},Bt=(0,e._)("label",{for:"Password"},"Password",-1);function Ft(t,n,o,r,s,c){return(0,e.wg)(),(0,e.iD)("div",null,[(0,e._)("div",Dt,[Wt,(0,e._)("div",Pt,[(0,e.wy)((0,e._)("input",{type:"email",class:"form-control",id:"Email",placeholder:"email","onUpdate:modelValue":n[0]||(n[0]=t=>s.email=t)},null,512),[[a.nr,s.email]]),Ut]),(0,e._)("div",At,[(0,e.wy)((0,e._)("input",{type:"password",class:"form-control",id:"Password",placeholder:"password","onUpdate:modelValue":n[1]||(n[1]=t=>s.password=t)},null,512),[[a.nr,s.password]]),Bt]),(0,e._)("button",{class:"btn w-25",onClick:n[2]||(n[2]=t=>c.submitAccount())},"Log In")])])}var St={name:"LoginView",data(){return{email:"",password:""}},methods:{submitAccount(){let t={email:this.email,password:this.password};d().post("/login",t).then((t=>{1==t.data.status?(alert(`您好，${t.data.userName}`),this.$router.push("/shopcart")):(alert("錯誤的帳號或密碼!!"),this.$router.push("/login"))})).catch((t=>{console.log("err")}))}}};const Zt=(0,s.Z)(St,[["render",Ft]]);var jt=Zt,Lt={name:"LoginView",components:{NavbarComponent:it,FooterComponent:gt,LoginComponent:jt}};const Ot=(0,s.Z)(Lt,[["render",Nt]]);var Yt=Ot;function Ht(t,n,o,a,r,s){const c=(0,e.up)("NavbarComponent"),l=(0,e.up)("SignupComponent"),i=(0,e.up)("FooterComponent");return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e.Wm)(c),(0,e.Wm)(l),(0,e.Wm)(i,{class:"fixed-bottom"})],64)}const Tt={class:"mid1 col-5 d-flex justify-content-center align-items-center flex-column flex-nowrap my-5"},Vt=(0,e._)("h3",{class:"mb-5"},"註冊",-1),Et={class:"col-10 form-floating px-1 mb-3"},$t=(0,e._)("label",{for:"name"},"Name",-1),Kt={class:"col-10 form-floating px-1 mb-3"},zt=(0,e._)("label",{for:"phone"},"Phone",-1),Mt={class:"col-10 form-floating px-1 mb-3"},qt=(0,e._)("label",{for:"email"},"Email",-1),Xt={class:"col-10 form-floating px-1 mb-3"},Gt=(0,e._)("label",{for:"password"},"Password",-1);function Jt(t,n,o,r,s,c){return(0,e.wg)(),(0,e.iD)("div",null,[(0,e._)("div",Tt,[Vt,(0,e._)("div",Et,[(0,e.wy)((0,e._)("input",{type:"text",class:"form-control",id:"name",placeholder:"name","onUpdate:modelValue":n[0]||(n[0]=t=>s.name=t)},null,512),[[a.nr,s.name]]),$t]),(0,e._)("div",Kt,[(0,e.wy)((0,e._)("input",{type:"text",class:"form-control",id:"phone",placeholder:"phone","onUpdate:modelValue":n[1]||(n[1]=t=>s.phone=t)},null,512),[[a.nr,s.phone]]),zt]),(0,e._)("div",Mt,[(0,e.wy)((0,e._)("input",{type:"Email",class:"form-control",id:"email",placeholder:"email","onUpdate:modelValue":n[2]||(n[2]=t=>s.email=t)},null,512),[[a.nr,s.email]]),qt]),(0,e._)("div",Xt,[(0,e.wy)((0,e._)("input",{type:"text",class:"form-control",id:"password",placeholder:"password","onUpdate:modelValue":n[3]||(n[3]=t=>s.password=t)},null,512),[[a.nr,s.password]]),Gt]),(0,e._)("button",{class:"btn w-25",onClick:n[4]||(n[4]=t=>c.submitSignUp())},"Sign Up")])])}var Qt={name:"SignComponent",data(){return{name:"",phone:"",email:"",password:""}},methods:{submitSignUp(){let t={name:this.name,phone:this.phone,email:this.email,password:this.password};d().post("/signup",t).then((t=>{1==t.data.status?this.$router.push("/login"):(alert("此帳號已存在！請使用其他 Email。"),this.$router.push("/signup"))})).catch((t=>{console.log("err")}))}}};const Rt=(0,s.Z)(Qt,[["render",Jt]]);var tn=Rt,nn={name:"LoginView",components:{NavbarComponent:it,FooterComponent:gt,SignupComponent:tn}};const on=(0,s.Z)(nn,[["render",Ht]]);var an=on,en=o(577);const rn={class:"navBar"},sn=["onClick"];function cn(t,n,o,a,r,s){const c=(0,e.up)("NavbarComponent"),l=(0,e.up)("FooterComponent");return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e.Wm)(c),(0,e._)("ul",rn,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(r.productsName,((t,n)=>((0,e.wg)(),(0,e.iD)("li",{class:"listUnstyled",onClick:n=>s.changeCart(t.type)},(0,en.zw)(t.type),9,sn)))),256))]),((0,e.wg)(),(0,e.j4)((0,e.LL)(r.currentTab))),(0,e.Wm)(l)],64)}const ln={class:"cartBoxContainer"};function un(t,n,o,a,r,s){const c=(0,e.up)("CartComponent");return(0,e.wg)(),(0,e.iD)("div",ln,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(r.products,((t,n)=>((0,e.wg)(),(0,e.j4)(c,{"parent-product":t,"parent-index":n+1,"parent-name":"NotebookCart",class:"cartBox"},null,8,["parent-product","parent-index"])))),256))])}const pn=t=>((0,e.dD)("data-v-acf024b8"),t=t(),(0,e.Cn)(),t),mn={class:"card",style:{width:"18rem",height:"30rem"}},dn=["src"],bn={class:"card-body"},hn={class:"card-title"},fn={class:"card-text"},gn=pn((()=>(0,e._)("button",{class:"btn btn-primary"},"加入購物車",-1))),vn=["onClick"];function _n(t,n,o,r,s,c){const l=(0,e.up)("router-link");return(0,e.wg)(),(0,e.iD)("div",null,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(o.parentProduct.cartItems,((t,n)=>(0,e.wy)(((0,e.wg)(),(0,e.iD)("div",mn,[(0,e.Wm)(l,{to:"/product/"+(o.parentName+"/"+o.parentIndex+"/"+o.parentProduct.title+"/"+t.id)},{default:(0,e.w5)((()=>[(0,e._)("img",{class:"card-img-top",src:t.url},null,8,dn)])),_:2},1032,["to"]),(0,e._)("div",bn,[(0,e._)("h5",hn,(0,en.zw)(o.parentProduct.title),1),(0,e._)("p",fn,(0,en.zw)(o.parentProduct.price),1),gn])],512)),[[a.F8,t.color==s.chooseColor]]))),256)),((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(o.parentProduct.cartItems,((t,n)=>((0,e.wg)(),(0,e.iD)("button",{class:"btnColor",style:(0,en.j5)({background:t.color}),onClick:n=>c.changeImg(t.color)},null,12,vn)))),256))])}var wn={name:"CartComponent",props:["parentProduct","parentIndex","parentName"],data(){return{chooseColor:this.parentProduct.cartItems[0].color}},methods:{changeImg(t){this.chooseColor=t},addToCart(){}}};const Cn=(0,s.Z)(wn,[["render",_n],["__scopeId","data-v-acf024b8"]]);var kn=Cn,yn={name:"NotebookCartComponent",components:{CartComponent:kn},data(){return{products:[]}},mounted(){const t=this;function n(t,n){let o={id:t,cartName:n};return d().post("/productItemApi",o).then((t=>t.data)).catch((t=>{console.log(t)}))}Promise.all([n(1,"NotebookCart"),n(2,"NotebookCart"),n(3,"NotebookCart"),n(4,"NotebookCart")]).then((function(n){t.products=n}))}};const xn=(0,s.Z)(yn,[["render",un],["__scopeId","data-v-6128d145"]]);var In=xn;const Nn={class:"cartBoxContainer"};function Dn(t,n,o,a,r,s){const c=(0,e.up)("CartComponent");return(0,e.wg)(),(0,e.iD)("div",Nn,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(r.products,((t,n)=>((0,e.wg)(),(0,e.j4)(c,{"parent-product":t,"parent-index":n+1,"parent-name":"SmartphoneCart",class:"cartBox"},null,8,["parent-product","parent-index"])))),256))])}var Wn={name:"SmartphoneCartComponent",components:{CartComponent:kn},data(){return{products:[]}},mounted(){const t=this;function n(t,n){let o={id:t,cartName:n};return d().post("/productItemApi",o).then((t=>t.data)).catch((t=>{console.log(t)}))}Promise.all([n(1,"SmartphoneCart"),n(2,"SmartphoneCart"),n(3,"SmartphoneCart"),n(4,"SmartphoneCart"),n(5,"SmartphoneCart"),n(6,"SmartphoneCart"),n(7,"SmartphoneCart"),n(8,"SmartphoneCart")]).then((function(n){t.products=n}))}};const Pn=(0,s.Z)(Wn,[["render",Dn],["__scopeId","data-v-61c3bf16"]]);var Un=Pn;const An={class:"cartBoxContainer"};function Bn(t,n,o,a,r,s){const c=(0,e.up)("CartComponent");return(0,e.wg)(),(0,e.iD)("div",An,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(r.products,((t,n)=>((0,e.wg)(),(0,e.j4)(c,{"parent-product":t,"parent-index":n+1,"parent-name":"TabletCart",class:"cartBox"},null,8,["parent-product","parent-index"])))),256))])}var Fn={name:"SmartphoneCartComponent",components:{CartComponent:kn},data(){return{products:[]}},mounted(){const t=this;function n(t,n){let o={id:t,cartName:n};return d().post("/productItemApi",o).then((t=>t.data)).catch((t=>{console.log(t)}))}Promise.all([n(1,"TabletCart"),n(2,"TabletCart"),n(3,"TabletCart"),n(4,"TabletCart"),n(5,"TabletCart")]).then((function(n){t.products=n}))}};const Sn=(0,s.Z)(Fn,[["render",Bn],["__scopeId","data-v-542b414c"]]);var Zn=Sn;const jn={class:"cartBoxContainer"};function Ln(t,n,o,a,r,s){const c=(0,e.up)("CartComponent");return(0,e.wg)(),(0,e.iD)("div",jn,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(r.products,((t,n)=>((0,e.wg)(),(0,e.j4)(c,{"parent-product":t,"parent-index":n+1,"parent-name":"Accessories",class:"cartBox"},null,8,["parent-product","parent-index"])))),256))])}var On={name:"NotebookCartComponent",components:{CartComponent:kn},data(){return{products:[]}},mounted(){const t=this;function n(t,n){let o={id:t,cartName:n};return d().post("/productItemApi",o).then((t=>t.data)).catch((t=>{console.log(t)}))}Promise.all([n(1,"Accessories"),n(2,"Accessories"),n(3,"Accessories"),n(4,"Accessories"),n(5,"Accessories"),n(6,"Accessories"),n(7,"Accessories"),n(8,"Accessories"),n(9,"Accessories"),n(10,"Accessories"),n(11,"Accessories"),n(12,"Accessories"),n(13,"Accessories")]).then((function(n){t.products=n}))}};const Yn=(0,s.Z)(On,[["render",Ln],["__scopeId","data-v-1122ea30"]]);var Hn=Yn,Tn={name:"ShoppingCartView",components:{NotebookCartComponent:In,SmartphoneCartComponent:Un,TabletCartComponent:Zn,AccessoriesComponent:Hn,NavbarComponent:it,FooterComponent:gt},data(){return{productsName:[],currentTab:"NotebookCartComponent"}},methods:{changeCart(t){this.currentTab=`${t}Component`}},mounted(){d().get("/productApi").then((t=>{this.productsName=t.data})).catch((t=>{console.log(t)}))}};const Vn=(0,s.Z)(Tn,[["render",cn],["__scopeId","data-v-182e3d9d"]]);var En=Vn;const $n=(0,e._)("h1",null,"404 not found",-1);function Kn(t,n,o,a,r,s){const c=(0,e.up)("NavbarComponent"),l=(0,e.up)("FooterComponent");return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e.Wm)(c),$n,(0,e.Wm)(l)],64)}var zn={name:"NotFoundViewView",components:{NavbarComponent:it,FooterComponent:gt}};const Mn=(0,s.Z)(zn,[["render",Kn]]);var qn=Mn;function Xn(t,n,o,a,r,s){const c=(0,e.up)("ProductComponent");return(0,e.wg)(),(0,e.j4)(c)}const Gn={class:"container"},Jn={class:"row justify-content-center"},Qn={class:"col-10"},Rn={class:"block A"},to=["src"],no={class:"block B"},oo={class:"productItemName"},ao=(0,e._)("hr",null,null,-1),eo=(0,e.uE)('<div class="productItemCart"><h2>add cart</h2><div class="qty-button"><div class="input-group qty"><button class="btn btn-outline-secondary"> - </button><input type="text" class="form-control text-center" value="0" disabled><button class="btn btn-outline-secondary"> + </button></div><button class="btn btn-outline-success mt-2 w-100">加入購物車</button></div></div>',1),ro=(0,e._)("hr",null,null,-1),so={class:"col-10 col-lg-6 mt-5 mb-5"},co=(0,e._)("h3",null,"商品資訊",-1);function lo(t,n,o,a,r,s){const c=(0,e.up)("NavbarComponent"),l=(0,e.up)("FooterComponent");return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e.Wm)(c),(0,e._)("div",Gn,[(0,e._)("div",Jn,[(0,e._)("div",Qn,[(0,e._)("div",Rn,[(0,e._)("img",{class:"productItemImg",src:`http://localhost:3000/${r.cartItem.url}`,alt:""},null,8,to)]),(0,e._)("div",no,[(0,e._)("div",oo,[(0,e._)("h1",null,(0,en.zw)(r.cartItem.title),1),ao,(0,e._)("h4",null,"價格: "+(0,en.zw)(r.cartItem.price),1),(0,e._)("h5",null,"存貨："+(0,en.zw)(r.cartItem.number),1)]),eo])]),ro,(0,e._)("div",so,[co,(0,e._)("p",null,(0,en.zw)(r.cartItem.description),1)])])]),(0,e.Wm)(l)],64)}var io={name:"ShoppingCart",components:{NavbarComponent:it,FooterComponent:gt},data(){return{id:this.$route.params.productID,cartName:this.$route.params.productName,cartItemId:this.$route.params.productItemID,cartItem:{}}},mounted(){const t=this;let n={id:t.id,cartName:t.cartName};d().post("/productItemApi",n).then((async n=>{console.log(n.data),t.cartItem.id=t.id,t.cartItem.title=n.data.title,t.cartItem.price=n.data.price,t.cartItem.description=n.data.description,await n.data.cartItems.forEach((function(n,o){n.id==t.cartItemId&&(t.cartItem.url=n.url,t.cartItem.number=n.number)})),console.log(t.cartItem)})).catch((t=>{console.log(t)}))}};const uo=(0,s.Z)(io,[["render",lo]]);var po=uo,mo={name:"ProductView",components:{ProductComponent:po}};const bo=(0,s.Z)(mo,[["render",Xn]]);var ho=bo;const fo=(0,e._)("div",null,"test",-1);function go(t,n,o,a,r,s){const c=(0,e.up)("NavbarComponent"),l=(0,e.up)("FooterComponent");return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e.Wm)(c),fo,(0,e.Wm)(l)],64)}var vo={name:"ShopCart",components:{NavbarComponent:it,FooterComponent:gt}};const _o=(0,s.Z)(vo,[["render",go]]);var wo=_o;const Co=[{path:"/",name:"home",component:wt},{path:"/about",name:"about",component:It},{path:"/login",name:"login",component:Yt},{path:"/signup",name:"signup",component:an},{path:"/products",name:"products",component:En},{path:"/product/:productName/:productID/:productItemTitle/:productItemID",name:"product",component:ho},{path:"/shopcart",name:"shopcart",component:wo},{path:"/:pathMatch(.*)*",name:"NotFound",component:qn}],ko=(0,u.p7)({history:(0,u.PO)("/"),routes:Co});ko.beforeEach((async function(t,n,o){"/shopcart"==t.path?d().post("/shopcart").then((t=>{1==t.data.status?o():0==t.data.status&&(alert("尚未登入"),o("/login"))})).catch((t=>{console.log("err"),o("/login")})):o()}));var yo=ko,xo=o(907),Io=o(702),No=(0,xo.MT)({state:{},getters:{},mutations:{},actions:{},modules:{},plugins:[(0,Io.Z)()]});(0,a.ri)(i).use(No).use(yo).mount("#app")}},n={};function o(a){var e=n[a];if(void 0!==e)return e.exports;var r=n[a]={exports:{}};return t[a](r,r.exports,o),r.exports}o.m=t,function(){var t=[];o.O=function(n,a,e,r){if(!a){var s=1/0;for(u=0;u<t.length;u++){a=t[u][0],e=t[u][1],r=t[u][2];for(var c=!0,l=0;l<a.length;l++)(!1&r||s>=r)&&Object.keys(o.O).every((function(t){return o.O[t](a[l])}))?a.splice(l--,1):(c=!1,r<s&&(s=r));if(c){t.splice(u--,1);var i=e();void 0!==i&&(n=i)}}return n}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[a,e,r]}}(),function(){o.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(n,{a:n}),n}}(),function(){o.d=function(t,n){for(var a in n)o.o(n,a)&&!o.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:n[a]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){o.p="/"}(),function(){var t={143:0};o.O.j=function(n){return 0===t[n]};var n=function(n,a){var e,r,s=a[0],c=a[1],l=a[2],i=0;if(s.some((function(n){return 0!==t[n]}))){for(e in c)o.o(c,e)&&(o.m[e]=c[e]);if(l)var u=l(o)}for(n&&n(a);i<s.length;i++)r=s[i],o.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return o.O(u)},a=self["webpackChunktest1"]=self["webpackChunktest1"]||[];a.forEach(n.bind(null,0)),a.push=n.bind(null,a.push.bind(a))}();var a=o.O(void 0,[998],(function(){return o(554)}));a=o.O(a)})();
//# sourceMappingURL=app.js.map