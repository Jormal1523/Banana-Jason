(function(){"use strict";var t={474:function(t,n,a){var e=a(963),o=a(252);function r(t,n){const a=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(a)}var s=a(744);const c={},l=(0,s.Z)(c,[["render",r]]);var i=l,u=a(119),p=a(955),m=a(669),d=a.n(m),h=a.p+"img/img1.png",b=a.p+"img/img2.png";const g=(0,o._)("div",{class:"phoneVideo"},[(0,o._)("iframe",{width:"100%",height:"580",src:"https://www.youtube.com/embed/XKfgdkcIUxw?modestbranding=1&autohide=0&showinfo=0&controls=0&autoplay=1&mute=1&fs=0&iv_load_policy=3&loop=1&playlist=XKfgdkcIUxw&rel=0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},"\r\n    ")],-1),v={class:"phonePage"},f=(0,o._)("br",null,null,-1),_=(0,o._)("h1",null,"Bphone 13 Pro",-1),w=(0,o._)("h3",null,"就。很。Pro",-1),C=(0,o.Uk)("購買 >"),I=(0,o._)("br",null,null,-1),k=(0,o._)("img",{class:"phoneImg",src:"https://www.apple.com/v/iphone-13-pro/f/images/meta/iphone-13-pro_overview__f8jyv9tx1pe2_og.png",alt:""},null,-1),y={class:"macPage"},N=(0,o._)("br",null,null,-1),x=(0,o._)("h1",null,"BananaBook Pro",-1),E=(0,o._)("h3",null,"超Banana",-1),D=(0,o.Uk)("購買 >"),W=(0,o._)("br",null,null,-1),A=(0,o._)("img",{class:"macImg",src:"https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2021/10/19/0/14362405.png&s=Y&x=152&y=0&sw=855&sh=570&exp=3600",alt:""},null,-1),U=(0,o.uE)('<div class="homePageSection"><div class="block a"><img class="blockImg" src="'+h+'" alt=""></div><div class="block b"><img class="blockImg" src="'+b+'" alt=""></div></div>',1);function S(t,n,a,e,r,s){const c=(0,o.up)("NavbarComponent"),l=(0,o.up)("router-link"),i=(0,o.up)("FooterComponent");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(c),g,(0,o._)("div",v,[f,_,w,(0,o.Wm)(l,{to:"/"},{default:(0,o.w5)((()=>[C])),_:1}),I,k]),(0,o._)("div",y,[N,x,E,(0,o.Wm)(l,{to:"/"},{default:(0,o.w5)((()=>[D])),_:1}),W,A]),U,(0,o.Wm)(i)],64)}const B={class:"navbar navbar-dark navbar-expand-lg bg-dark"},F={class:"container-fluid"},P=(0,o._)("img",{src:"https://img.icons8.com/external-basicons-color-danil-polshin/50/000000/external-banana-fruits-and-berries-basicons-color-danil-polshin.png"},null,-1),Z=(0,o.Uk)("Banana"),$={class:"collapse navbar-collapse"},L=(0,o._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#navbarOffcanvasLg","aria-controls":"navbarOffcanvasLg"},[(0,o._)("span",{class:"navbar-toggler-icon"})],-1),j={class:"offcanvas offcanvas-end",tabindex:"-1",id:"navbarOffcanvasLg","aria-labelledby":"navbarOffcanvasLgLabel"},M=(0,o._)("div",{class:"offcanvas-header"},[(0,o._)("h5",{class:"offcanvas-title",id:"offcanvasNavbarLabel"},"Banana"),(0,o._)("button",{type:"button",class:"btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"})],-1),T={class:"offcanvas-body bg-dark"};function O(t,n,a,e,r,s){const c=(0,o.up)("router-link"),l=(0,o.up)("MenuComponent");return(0,o.wg)(),(0,o.iD)("nav",B,[(0,o._)("div",F,[P,(0,o.Wm)(c,{class:"navbar-brand",to:"/"},{default:(0,o.w5)((()=>[Z])),_:1}),(0,o._)("div",$,[(0,o.Wm)(l)]),L,(0,o._)("div",j,[M,(0,o._)("div",T,[(0,o.Wm)(l)])])])])}const V={class:"navbar-nav justify-content-end flex-grow-1 pe-3"},Y={class:"nav-item"},H=(0,o.Uk)("首頁"),z={class:"nav-item"},K=(0,o.Uk)("註冊"),q={class:"nav-item"},X=(0,o.Uk)("登入"),G={class:"nav-item"},J=(0,o.Uk)("關於我們"),Q={class:"nav-item"},R=(0,o.Uk)("商品一覽"),tt={class:"nav-item"},nt=(0,o.Uk)("購物車"),at=(0,o.Uk)("會員資訊");function et(t,n,a,r,s,c){const l=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("ul",V,[(0,o._)("li",Y,[(0,o.Wm)(l,{class:"nav-link active","aria-current":"page",to:"/"},{default:(0,o.w5)((()=>[H])),_:1})]),(0,o._)("li",z,[(0,o.wy)((0,o.Wm)(l,{class:"nav-link",to:"/signup"},{default:(0,o.w5)((()=>[K])),_:1},512),[[e.F8,!c.isLogin]])]),(0,o._)("li",q,[(0,o.wy)((0,o.Wm)(l,{class:"nav-link",to:"/login"},{default:(0,o.w5)((()=>[X])),_:1},512),[[e.F8,!c.isLogin]]),(0,o.wy)((0,o._)("button",{onClick:n[0]||(n[0]=t=>c.logout()),class:"nav-link nonBtn"},"登出",512),[[e.F8,c.isLogin]])]),(0,o._)("li",G,[(0,o.Wm)(l,{class:"nav-link",to:"/about"},{default:(0,o.w5)((()=>[J])),_:1})]),(0,o._)("li",Q,[(0,o.Wm)(l,{class:"nav-link",to:"/products"},{default:(0,o.w5)((()=>[R])),_:1})]),(0,o._)("li",tt,[(0,o.Wm)(l,{class:"nav-link",to:"/shopcart"},{default:(0,o.w5)((()=>[nt])),_:1}),(0,o.wy)((0,o.Wm)(l,{class:"nav-link",to:"/member"},{default:(0,o.w5)((()=>[at])),_:1},512),[[e.F8,c.isLogin]])])])}var ot={name:"MenuComponent",data(){return{}},computed:{isLogin(){return void 0!==p.Z.get("user")}},methods:{logout(){d().post("logout").then((t=>{1==t.data.status&&(alert("已經登出!"),p.Z.remove("user"),this.$router.push("/"))})).catch((t=>{console.log("err")}))}}};const rt=(0,s.Z)(ot,[["render",et],["__scopeId","data-v-14bd8b44"]]);var st=rt,ct={name:"NavbarComponent",data(){return{}},components:{MenuComponent:st}};const lt=(0,s.Z)(ct,[["render",O]]);var it=lt;const ut={class:"bg-dark text-center text-white"},pt=(0,o._)("div",{class:"container p-4 pb-0"},[(0,o._)("section",{class:"mb-4"},[(0,o._)("a",{class:"btn btn-outline-light btn-floating m-1",href:"#!",role:"button"},[(0,o._)("i",{class:"fab fa-facebook-f"})]),(0,o._)("a",{class:"btn btn-outline-light btn-floating m-1",href:"#!",role:"button"},[(0,o._)("i",{class:"fab fa-twitter"})]),(0,o._)("a",{class:"btn btn-outline-light btn-floating m-1",href:"#!",role:"button"},[(0,o._)("i",{class:"fab fa-google"})]),(0,o._)("a",{class:"btn btn-outline-light btn-floating m-1",href:"#!",role:"button"},[(0,o._)("i",{class:"fab fa-instagram"})]),(0,o._)("a",{class:"btn btn-outline-light btn-floating m-1",href:"#!",role:"button"},[(0,o._)("i",{class:"fab fa-linkedin-in"})]),(0,o._)("a",{class:"btn btn-outline-light btn-floating m-1",href:"#!",role:"button"},[(0,o._)("i",{class:"fab fa-github"})])])],-1),mt=(0,o._)("div",{class:"text-center p-3",style:{"background-color":"rgba(0, 0, 0, 0.2)"}},[(0,o.Uk)(" © 2020 Copyright: "),(0,o._)("a",{class:"text-white",href:"https://mdbootstrap.com/"},"MDBootstrap.com")],-1),dt=[pt,mt];function ht(t,n){return(0,o.wg)(),(0,o.iD)("footer",ut,dt)}const bt={},gt=(0,s.Z)(bt,[["render",ht]]);var vt=gt,ft={name:"HomeView",components:{NavbarComponent:it,FooterComponent:vt}};const _t=(0,s.Z)(ft,[["render",S]]);var wt=_t;const Ct=(0,o._)("div",{class:"container"},[(0,o._)("div",{class:"row justify-content-center"},[(0,o._)("div",{class:"col-10 col-md-8 col-lg-8"},[(0,o._)("h2",null,"關於我們"),(0,o._)("p",null,[(0,o.Uk)("Banana，起初是由三個養程班的同學突發其想，在某個小教室裡討論所誕生的。"),(0,o._)("br"),(0,o._)("br"),(0,o.Uk)("      在這個與時俱進的時代裡，3C產品已經變成每個人生活中不可或缺的存在，想要跟上這個時代的洪流，在這樣的理念下，我們創造了最初的發想，首先嘗試做出了我們的第一個形象網站以及第一部智能手機Bphone，在積極推銷自家的產品理念後，很幸運的，我們得到了許多貴人的幫助以及贊助，才能有現在如此規模的成長，之後的幾年時間，也陸續推出了BananaBook、Banana Watch等智慧型商品，我們的未來展望，就如我們最初的發想理念，希望顧客們都可以躋身在這科技洪流之中，為此，我們會繼續研發並且精進自己，讓Banana的家庭更加壯大。")])])]),(0,o._)("img",{class:"aboutImg",src:"https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iOS/ios14-memoji-hero.jpg",alt:""})],-1);function It(t,n,a,e,r,s){const c=(0,o.up)("NavbarComponent"),l=(0,o.up)("FooterComponent");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(c),Ct,(0,o.Wm)(l,{class:"fixed-bottom"})],64)}var kt={name:"AboutView",components:{NavbarComponent:it,FooterComponent:vt}};const yt=(0,s.Z)(kt,[["render",It]]);var Nt=yt;function xt(t,n,a,e,r,s){const c=(0,o.up)("NavbarComponent"),l=(0,o.up)("LoginComponent"),i=(0,o.up)("FooterComponent");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(c),(0,o.Wm)(l),(0,o.Wm)(i,{class:"fixed-bottom"})],64)}const Et=t=>((0,o.dD)("data-v-44a888ad"),t=t(),(0,o.Cn)(),t),Dt={class:"w3layouts-main"},Wt={class:"bg-layer"},At=Et((()=>(0,o._)("h1",null,"Login",-1))),Ut={class:"header-main"},St=Et((()=>(0,o._)("div",{class:"main-icon"},[(0,o._)("span",{class:"fa fa-eercast"})],-1))),Bt={class:"header-left-bottom"},Ft={class:""},Pt={class:"icon1"},Zt=Et((()=>(0,o._)("span",{class:"fa fa-envelope"},null,-1))),$t={class:"icon1"},Lt=Et((()=>(0,o._)("span",{class:"fa fa-lock"},null,-1))),jt={class:"bottom"},Mt=Et((()=>(0,o._)("div",{class:"copyright"},[(0,o._)("p",null,[(0,o.Uk)("© 2022 Login Form . All rights reserved | Design by "),(0,o._)("a",{href:"banana/",target:"_blank"},"Banana")])],-1)));function Tt(t,n,a,r,s,c){return(0,o.wg)(),(0,o.iD)("div",Dt,[(0,o._)("div",Wt,[At,(0,o._)("div",Ut,[St,(0,o._)("div",Bt,[(0,o._)("div",Ft,[(0,o._)("div",Pt,[Zt,(0,o.wy)((0,o._)("input",{type:"email",name:"email",placeholder:"Email",required:"","onUpdate:modelValue":n[0]||(n[0]=t=>s.email=t)},null,512),[[e.nr,s.email]])]),(0,o._)("div",$t,[Lt,(0,o.wy)((0,o._)("input",{type:"password",name:"password",placeholder:"Password",required:"","onUpdate:modelValue":n[1]||(n[1]=t=>s.password=t)},null,512),[[e.nr,s.password]])]),(0,o._)("div",jt,[(0,o._)("button",{class:"btn",type:"submit",onClick:n[2]||(n[2]=t=>c.submitAccount())},"Log In")])])]),Mt])])])}var Ot={name:"LoginView",data(){return{email:"",password:""}},methods:{submitAccount(){let t={email:this.email,password:this.password};""===t.email||""===t.password?alert("輸入資料不得為空值"):d().post("/login",t).then((t=>{1==t.data.status?(alert(`您好，${t.data.userName}`),this.$router.push("/shopcart")):(alert("錯誤的帳號或密碼!!"),this.$router.push("/login"))})).catch((t=>{console.log("err")}))}}};const Vt=(0,s.Z)(Ot,[["render",Tt],["__scopeId","data-v-44a888ad"]]);var Yt=Vt,Ht={name:"LoginView",components:{NavbarComponent:it,FooterComponent:vt,LoginComponent:Yt}};const zt=(0,s.Z)(Ht,[["render",xt]]);var Kt=zt;function qt(t,n,a,e,r,s){const c=(0,o.up)("NavbarComponent"),l=(0,o.up)("SignupComponent"),i=(0,o.up)("FooterComponent");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(c),(0,o.Wm)(l),(0,o.Wm)(i,{class:"fixed-bottom"})],64)}var Xt=a(577);const Gt=t=>((0,o.dD)("data-v-06b02a10"),t=t(),(0,o.Cn)(),t),Jt={class:"w3layouts-main"},Qt={class:"bg-layer"},Rt=Gt((()=>(0,o._)("h1",null,"Signup",-1))),tn={class:"header-main"},nn=Gt((()=>(0,o._)("div",{class:"main-icon"},[(0,o._)("span",{class:"fa fa-eercast"})],-1))),an={class:"header-left-bottom"},en={class:""},on={class:"icon1"},rn=Gt((()=>(0,o._)("span",{class:"fa fa-user"},null,-1))),sn={class:"invalid-feedback"},cn={class:"icon1"},ln=Gt((()=>(0,o._)("span",{class:"fa fa-phone"},null,-1))),un={class:"invalid-feedback"},pn={class:"icon1"},mn=Gt((()=>(0,o._)("span",{class:"fa fa-envelope"},null,-1))),dn={class:"invalid-feedback"},hn={class:"icon1"},bn=Gt((()=>(0,o._)("span",{class:"fa fa-lock"},null,-1))),gn={class:"invalid-feedback"},vn=Gt((()=>(0,o._)("br",null,null,-1))),fn=Gt((()=>(0,o._)("div",{class:"copyright"},[(0,o._)("p",null,[(0,o.Uk)("© 2022 Signup Form . All rights reserved | Design by "),(0,o._)("a",{href:"banana/",target:"_blank"},"Banana")])],-1)));function _n(t,n,a,r,s,c){return(0,o.wg)(),(0,o.iD)("div",Jt,[(0,o._)("div",Qt,[Rt,(0,o._)("form",tn,[nn,(0,o._)("div",an,[(0,o._)("div",en,[(0,o._)("div",on,[rn,(0,o.wy)((0,o._)("input",{type:"text",class:(0,Xt.C_)(["inputStyle",{"is-invalid":s.nameError}]),name:"name",placeholder:"Name","onUpdate:modelValue":n[0]||(n[0]=t=>s.name=t)},null,2),[[e.nr,s.name]]),(0,o._)("div",sn,(0,Xt.zw)(s.nameErrMsg),1)]),(0,o._)("div",cn,[ln,(0,o.wy)((0,o._)("input",{type:"text",class:(0,Xt.C_)(["inputStyle",{"is-invalid":s.phoneError}]),name:"phone",placeholder:"Phone","onUpdate:modelValue":n[1]||(n[1]=t=>s.phone=t),maxlength:"10"},null,2),[[e.nr,s.phone]]),(0,o._)("div",un,(0,Xt.zw)(s.phoneErrMsg),1)]),(0,o._)("div",pn,[mn,(0,o.wy)((0,o._)("input",{type:"email",name:"email",placeholder:"Email",required:"","onUpdate:modelValue":n[2]||(n[2]=t=>s.email=t),class:(0,Xt.C_)({"is-invalid":s.emailError})},null,2),[[e.nr,s.email]]),(0,o._)("div",dn,(0,Xt.zw)(s.emailErrMsg),1)]),(0,o._)("div",hn,[bn,(0,o.wy)((0,o._)("input",{type:"password",name:"password",placeholder:"Password",required:"","onUpdate:modelValue":n[3]||(n[3]=t=>s.password=t),class:(0,Xt.C_)({"is-invalid":s.passwordError}),minlength:"6",maxlength:"10"},null,2),[[e.nr,s.password]]),(0,o._)("div",gn,(0,Xt.zw)(s.passwordErrMsg),1)]),vn,(0,o._)("button",{type:"button",class:"btn",onClick:n[4]||(n[4]=t=>c.submitSignUp())},"Sign Up")])])]),fn])])}var wn={name:"SignComponent",data(){return{name:"",nameError:!1,nameErrMsg:"",phone:"",phoneError:!1,phoneErrMsg:"",email:"",emailError:!1,emailErrMsg:"",password:"",passwordError:!1,passwordErrMsg:""}},watch:{name:function(){const t=/^[a-zA-Z0-9]+$/;t.test(this.name)?this.nameError=!1:(this.nameError=!0,this.nameErrMsg="請勿包含特殊字元！")},phone:function(){const t=/^09\d{8}$/;t.test(this.phone)?this.phoneError=!1:(this.phoneError=!0,this.phoneErrMsg="手機格式錯誤！")},email:function(){const t=/^(([.](?=[^.]|^))|[\w_%{|}#$~`+!?-])+@(?:[\w-]+\.)+[a-zA-Z.]{2,63}$/;t.test(this.email)?this.emailError=!1:(this.emailError=!0,this.emailErrMsg="格式錯誤！")},password:function(){const t=/^[a-zA-Z0-9]+$/;t.test(this.password)?this.password.length<6?(this.passwordError=!0,this.passwordErrMsg="密碼長度請勿低於6個字元"):this.passwordError=!1:(this.passwordError=!0,this.passwordErrMsg="請勿包含特殊字元！")}},methods:{submitSignUp(){let t={name:this.name,phone:this.phone,email:this.email,password:this.password};!0===this.nameError||!0===this.phone.Error||!0===this.emailError||!0===this.passwordError?alert("輸入格式有錯！"):d().post("/signup",t).then((t=>{1==t.data.status?this.$router.push("/login"):(alert("此帳號已存在！請使用其他 Email。"),this.$router.push("/signup"))})).catch((t=>{console.log("err")}))}}};const Cn=(0,s.Z)(wn,[["render",_n],["__scopeId","data-v-06b02a10"]]);var In=Cn,kn={name:"LoginView",components:{NavbarComponent:it,FooterComponent:vt,SignupComponent:In}};const yn=(0,s.Z)(kn,[["render",qt]]);var Nn=yn;const xn={class:"navBar"},En=["onClick"];function Dn(t,n,a,e,r,s){const c=(0,o.up)("NavbarComponent"),l=(0,o.up)("FooterComponent");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(c),(0,o._)("ul",xn,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.productsName,((t,n)=>((0,o.wg)(),(0,o.iD)("li",{class:"listUnstyled",onClick:n=>s.changeCart(t.type)},(0,Xt.zw)(t.type),9,En)))),256))]),((0,o.wg)(),(0,o.j4)((0,o.LL)(r.currentTab))),(0,o.Wm)(l)],64)}const Wn={class:"cartBoxContainer"};function An(t,n,a,e,r,s){const c=(0,o.up)("CartComponent");return(0,o.wg)(),(0,o.iD)("div",Wn,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.products,((t,n)=>((0,o.wg)(),(0,o.j4)(c,{"parent-product":t,"parent-index":n+1,"parent-name":"NotebookCart",class:"cartBox"},null,8,["parent-product","parent-index"])))),256))])}const Un={class:"card",style:{width:"18rem",height:"30rem"}},Sn=["src"],Bn={class:"card-body"},Fn={class:"card-title"},Pn={class:"card-text"},Zn=["onClick"],$n=["onClick"];function Ln(t,n,a,r,s,c){const l=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.parentProduct.cartItems,((t,n)=>(0,o.wy)(((0,o.wg)(),(0,o.iD)("div",Un,[(0,o.Wm)(l,{to:"/product/"+(a.parentName+"/"+a.parentIndex+"/"+a.parentProduct.title+"/"+t.id)},{default:(0,o.w5)((()=>[(0,o._)("img",{class:"card-img-top",src:t.url},null,8,Sn)])),_:2},1032,["to"]),(0,o._)("div",Bn,[(0,o._)("h5",Fn,(0,Xt.zw)(a.parentProduct.title),1),(0,o._)("p",Pn,(0,Xt.zw)(a.parentProduct.price),1),(0,o._)("button",{class:"btn btn-primary",onClick:n=>c.addToCart(t.id,a.parentName,a.parentIndex)},"加入購物車",8,Zn)])],512)),[[e.F8,t.color==s.chooseColor]]))),256)),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.parentProduct.cartItems,((t,n)=>((0,o.wg)(),(0,o.iD)("button",{class:"btnColor",style:(0,Xt.j5)({background:t.color}),onClick:n=>c.changeImg(t.color)},null,12,$n)))),256))])}var jn={name:"CartComponent",props:["parentProduct","parentIndex","parentName"],data(){return{chooseColor:this.parentProduct.cartItems[0].color}},computed:{cart(){return this.$store.state.cart}},methods:{changeImg(t){this.chooseColor=t},addToCart(t,n,a){let e={cartItemId:t,parentName:n,parentIndex:a,number:1};for(let o=0;o<=this.cart.length-1;o++){if(this.cart[o].cartItemId==e.cartItemId&&this.cart[o].number<10)return this.$store.commit("addNumber",e),alert(`此商品已經購買${this.cart[o].number}件`),!1;if(this.cart[o].cartItemId==e.cartItemId&&10==this.cart[o].number)return alert("最多只能購買10件!"),!1}this.$store.commit("addCart",e),alert("成功加入購物車!")}}};const Mn=(0,s.Z)(jn,[["render",Ln],["__scopeId","data-v-aa9f2048"]]);var Tn=Mn,On={name:"NotebookCartComponent",components:{CartComponent:Tn},data(){return{products:[]}},mounted(){const t=this;function n(t,n){let a={id:t,cartName:n};return d().post("/productItemApi",a).then((t=>t.data)).catch((t=>{console.log(t)}))}Promise.all([n(1,"NotebookCart"),n(2,"NotebookCart"),n(3,"NotebookCart"),n(4,"NotebookCart")]).then((function(n){t.products=n}))}};const Vn=(0,s.Z)(On,[["render",An],["__scopeId","data-v-6128d145"]]);var Yn=Vn;const Hn={class:"cartBoxContainer"};function zn(t,n,a,e,r,s){const c=(0,o.up)("CartComponent");return(0,o.wg)(),(0,o.iD)("div",Hn,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.products,((t,n)=>((0,o.wg)(),(0,o.j4)(c,{"parent-product":t,"parent-index":n+1,"parent-name":"SmartphoneCart",class:"cartBox"},null,8,["parent-product","parent-index"])))),256))])}var Kn={name:"SmartphoneCartComponent",components:{CartComponent:Tn},data(){return{products:[]}},mounted(){const t=this;function n(t,n){let a={id:t,cartName:n};return d().post("/productItemApi",a).then((t=>t.data)).catch((t=>{console.log(t)}))}Promise.all([n(1,"SmartphoneCart"),n(2,"SmartphoneCart"),n(3,"SmartphoneCart"),n(4,"SmartphoneCart"),n(5,"SmartphoneCart"),n(6,"SmartphoneCart"),n(7,"SmartphoneCart"),n(8,"SmartphoneCart")]).then((function(n){t.products=n}))}};const qn=(0,s.Z)(Kn,[["render",zn],["__scopeId","data-v-61c3bf16"]]);var Xn=qn;const Gn={class:"cartBoxContainer"};function Jn(t,n,a,e,r,s){const c=(0,o.up)("CartComponent");return(0,o.wg)(),(0,o.iD)("div",Gn,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.products,((t,n)=>((0,o.wg)(),(0,o.j4)(c,{"parent-product":t,"parent-index":n+1,"parent-name":"TabletCart",class:"cartBox"},null,8,["parent-product","parent-index"])))),256))])}var Qn={name:"SmartphoneCartComponent",components:{CartComponent:Tn},data(){return{products:[]}},mounted(){const t=this;function n(t,n){let a={id:t,cartName:n};return d().post("/productItemApi",a).then((t=>t.data)).catch((t=>{console.log(t)}))}Promise.all([n(1,"TabletCart"),n(2,"TabletCart"),n(3,"TabletCart"),n(4,"TabletCart"),n(5,"TabletCart")]).then((function(n){t.products=n}))}};const Rn=(0,s.Z)(Qn,[["render",Jn],["__scopeId","data-v-542b414c"]]);var ta=Rn;const na={class:"cartBoxContainer"};function aa(t,n,a,e,r,s){const c=(0,o.up)("CartComponent");return(0,o.wg)(),(0,o.iD)("div",na,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.products,((t,n)=>((0,o.wg)(),(0,o.j4)(c,{"parent-product":t,"parent-index":n+1,"parent-name":"Accessories",class:"cartBox"},null,8,["parent-product","parent-index"])))),256))])}var ea={name:"NotebookCartComponent",components:{CartComponent:Tn},data(){return{products:[]}},mounted(){const t=this;function n(t,n){let a={id:t,cartName:n};return d().post("/productItemApi",a).then((t=>t.data)).catch((t=>{console.log(t)}))}Promise.all([n(1,"Accessories"),n(2,"Accessories"),n(3,"Accessories"),n(4,"Accessories"),n(5,"Accessories"),n(6,"Accessories"),n(7,"Accessories"),n(8,"Accessories"),n(9,"Accessories"),n(10,"Accessories"),n(11,"Accessories"),n(12,"Accessories"),n(13,"Accessories")]).then((function(n){t.products=n}))}};const oa=(0,s.Z)(ea,[["render",aa],["__scopeId","data-v-1122ea30"]]);var ra=oa,sa={name:"ShoppingCartView",components:{NotebookCartComponent:Yn,SmartphoneCartComponent:Xn,TabletCartComponent:ta,AccessoriesComponent:ra,NavbarComponent:it,FooterComponent:vt},data(){return{productsName:[],currentTab:"NotebookCartComponent"}},methods:{changeCart(t){this.currentTab=`${t}Component`}},mounted(){d().get("/productApi").then((t=>{this.productsName=t.data})).catch((t=>{console.log(t)}))}};const ca=(0,s.Z)(sa,[["render",Dn],["__scopeId","data-v-182e3d9d"]]);var la=ca;const ia=(0,o._)("h1",null,"404 not found",-1);function ua(t,n,a,e,r,s){const c=(0,o.up)("NavbarComponent"),l=(0,o.up)("FooterComponent");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(c),ia,(0,o.Wm)(l)],64)}var pa={name:"NotFoundViewView",components:{NavbarComponent:it,FooterComponent:vt}};const ma=(0,s.Z)(pa,[["render",ua]]);var da=ma;function ha(t,n,a,e,r,s){const c=(0,o.up)("ProductComponent");return(0,o.wg)(),(0,o.j4)(c)}const ba={class:"container"},ga={class:"row justify-content-center"},va={class:"col-10"},fa={class:"block A"},_a=["src"],wa={class:"block B"},Ca={class:"productItemName"},Ia=(0,o._)("hr",null,null,-1),ka={class:"productItemCart"},ya=(0,o._)("h2",null,"add cart",-1),Na={class:"qty-button"},xa={class:"input-group qty"},Ea=(0,o._)("hr",null,null,-1),Da={class:"col-10 col-lg-6 mt-5 mb-5"},Wa=(0,o._)("h3",null,"商品資訊",-1);function Aa(t,n,a,r,s,c){const l=(0,o.up)("NavbarComponent"),i=(0,o.up)("FooterComponent");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(l),(0,o._)("div",ba,[(0,o._)("div",ga,[(0,o._)("div",va,[(0,o._)("div",fa,[(0,o._)("img",{class:"productItemImg",src:`http://localhost:3000/${s.cartItem.url}`,alt:""},null,8,_a)]),(0,o._)("div",wa,[(0,o._)("div",Ca,[(0,o._)("h1",null,(0,Xt.zw)(s.cartItem.title),1),Ia,(0,o._)("h4",null,"價格: "+(0,Xt.zw)(s.cartItem.price),1),(0,o._)("h5",null,"存貨："+(0,Xt.zw)(s.cartItem.number),1)]),(0,o._)("div",ka,[ya,(0,o._)("div",Na,[(0,o._)("div",xa,[(0,o._)("button",{class:"btn btn-outline-secondary",onClick:n[0]||(n[0]=t=>c.removeNubmer())}," - "),(0,o.wy)((0,o._)("input",{type:"text",class:"form-control text-center","onUpdate:modelValue":n[1]||(n[1]=t=>s.number=t)},null,512),[[e.nr,s.number]]),(0,o._)("button",{class:"btn btn-outline-secondary",onClick:n[2]||(n[2]=t=>c.addNumber())}," + ")]),(0,o._)("button",{class:"btn btn-outline-success mt-2 w-100",onClick:n[3]||(n[3]=t=>c.addToCart(s.cartItemId,s.cartName,s.id))}," 加入購物車")])])])]),Ea,(0,o._)("div",Da,[Wa,(0,o._)("p",null,(0,Xt.zw)(s.cartItem.description),1)])])]),(0,o.Wm)(i)],64)}var Ua={name:"ShoppingCart",components:{NavbarComponent:it,FooterComponent:vt},data(){return{id:this.$route.params.productID,cartName:this.$route.params.productName,cartItemId:this.$route.params.productItemID,cartItem:{},number:1}},computed:{cart(){return this.$store.state.cart}},methods:{addNumber(){this.number<10&&this.number++},removeNubmer(){this.number>0&&this.number--},addToCart(t,n,a){let e={cartItemId:t,parentName:n,parentIndex:a,number:1};this.number>1&&(e.number=this.number);for(let o=0;o<=this.cart.length-1;o++){if(this.cart[o].cartItemId==e.cartItemId&&this.cart[o].number<10)return this.$store.commit("addNumber",e),alert(`此商品已經購買${this.cart[o].number}件`),!1;if(this.cart[o].cartItemId==e.cartItemId&&10==this.cart[o].number)return alert("最多只能購買10件!"),!1}this.$store.commit("addCart",e),alert("成功加入購物車!")}},mounted(){const t=this;let n={id:t.id,cartName:t.cartName};d().post("/productItemApi",n).then((async n=>{console.log(n.data),t.cartItem.id=t.id,t.cartItem.title=n.data.title,t.cartItem.price=n.data.price,t.cartItem.description=n.data.description,await n.data.cartItems.forEach((function(n,a){n.id==t.cartItemId&&(t.cartItem.url=n.url,t.cartItem.number=n.number)})),console.log(t.cartItem)})).catch((t=>{console.log(t)}))}};const Sa=(0,s.Z)(Ua,[["render",Aa]]);var Ba=Sa,Fa={name:"ProductView",components:{ProductComponent:Ba}};const Pa=(0,s.Z)(Fa,[["render",ha]]);var Za=Pa;const $a=(0,o._)("div",null,"test",-1);function La(t,n,a,e,r,s){const c=(0,o.up)("NavbarComponent"),l=(0,o.up)("FooterComponent");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(c),$a,(0,o.Wm)(l)],64)}var ja={name:"ShopCart",components:{NavbarComponent:it,FooterComponent:vt}};const Ma=(0,s.Z)(ja,[["render",La]]);var Ta=Ma;const Oa=[{path:"/",name:"home",component:wt},{path:"/about",name:"about",component:Nt},{path:"/login",name:"login",component:Kt},{path:"/signup",name:"signup",component:Nn},{path:"/products",name:"products",component:la},{path:"/product/:productName/:productID/:productItemTitle/:productItemID",name:"product",component:Za},{path:"/shopcart",name:"shopcart",component:Ta},{path:"/:pathMatch(.*)*",name:"NotFound",component:da}],Va=(0,u.p7)({history:(0,u.PO)("/"),routes:Oa});Va.beforeEach((async function(t,n,a){"/shopcart"==t.path?d().post("/shopcart").then((t=>{1==t.data.status?a():0==t.data.status&&(alert("尚未登入"),a("/login"))})).catch((t=>{console.log("err"),a("/login")})):a()}));var Ya=Va,Ha=a(907),za=a(702),Ka=(0,Ha.MT)({state:{cart:[]},getters:{},mutations:{addCart(t,n){return t.cart.push(n),t.cart},addNumber(t,n){for(let a=0;a<=t.cart.length-1;a++)if(t.cart[a].cartItemId==n.cartItemId)return t.cart[a].number+n.number>10?t.cart[a].number=10:t.cart[a].number+=n.number,t.cart}},actions:{},modules:{},plugins:[(0,za.Z)()]});(0,e.ri)(i).use(Ka).use(Ya).mount("#app")}},n={};function a(e){var o=n[e];if(void 0!==o)return o.exports;var r=n[e]={exports:{}};return t[e](r,r.exports,a),r.exports}a.m=t,function(){var t=[];a.O=function(n,e,o,r){if(!e){var s=1/0;for(u=0;u<t.length;u++){e=t[u][0],o=t[u][1],r=t[u][2];for(var c=!0,l=0;l<e.length;l++)(!1&r||s>=r)&&Object.keys(a.O).every((function(t){return a.O[t](e[l])}))?e.splice(l--,1):(c=!1,r<s&&(s=r));if(c){t.splice(u--,1);var i=o();void 0!==i&&(n=i)}}return n}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[e,o,r]}}(),function(){a.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(n,{a:n}),n}}(),function(){a.d=function(t,n){for(var e in n)a.o(n,e)&&!a.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){a.p="/"}(),function(){var t={143:0};a.O.j=function(n){return 0===t[n]};var n=function(n,e){var o,r,s=e[0],c=e[1],l=e[2],i=0;if(s.some((function(n){return 0!==t[n]}))){for(o in c)a.o(c,o)&&(a.m[o]=c[o]);if(l)var u=l(a)}for(n&&n(e);i<s.length;i++)r=s[i],a.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return a.O(u)},e=self["webpackChunktest1"]=self["webpackChunktest1"]||[];e.forEach(n.bind(null,0)),e.push=n.bind(null,e.push.bind(e))}();var e=a.O(void 0,[998],(function(){return a(474)}));e=a.O(e)})();
//# sourceMappingURL=app.js.map