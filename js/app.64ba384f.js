(function(){var t={7928:function(t,e,s){"use strict";var i=s(7195),a=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("HeaderBlock"),e("main",[e("router-view")],1),e("FooterBlock")],1)},r=[],o=function(){var t=this,e=t._self._c;return e("div",[e("section",{staticClass:"header"},[e("div",{staticClass:"container"},[e("div",{staticClass:"header__wrapper"},[t._m(0),e("div",{staticClass:"header__nav"},[e("ul",[e("router-link",{staticClass:"header__link",attrs:{to:"/main"}},[t._v("Main")]),e("router-link",{staticClass:"header__link",attrs:{to:"/blog"}},[t._v("Blog")]),e("router-link",{staticClass:"header__link",attrs:{to:"/project"}},[t._v("Project")])],1)])])])])])},n=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"header__logo"},[e("img",{staticClass:"header__logo_img",attrs:{src:s(3630),alt:""}}),e("div",{staticClass:"header__logo_text"},[t._v("Interno")])])}],c={name:"HeaderBlock",props:{msg:String}},l=c,_=s(1001),u=(0,_.Z)(l,o,n,!1,null,"3e848bac",null),p=u.exports,g=function(){var t=this;t._self._c;return t._m(0)},d=[function(){var t=this,e=t._self._c;return e("div",[e("section",{staticClass:"footer"},[e("div",{staticClass:"container"},[e("div",{staticClass:"footer__wrapper"},[e("div",{staticClass:"footer__item"},[e("div",{staticClass:"header__logo"},[e("img",{staticClass:"header__logo_img",attrs:{src:s(3630),alt:""}}),e("div",{staticClass:"header__logo_text"},[t._v("Interno")])]),e("p",{staticClass:"footer__text"},[t._v("It is a long established fact that a reader "),e("br"),t._v(" will be distracted lookings.")]),e("div",{staticClass:"footer__social"},[e("img",{attrs:{src:s(7193),alt:""}}),e("img",{attrs:{src:s(4021),alt:""}})])]),e("div",{staticClass:"footer__item"},[e("h3",{staticClass:"footer__title"},[t._v("Pages")]),e("ul",{staticClass:"footer__list"},[e("li",[e("a",{attrs:{href:""}},[t._v("Home")])]),e("li",[e("a",{attrs:{href:""}},[t._v("Project")])]),e("li",[e("a",{attrs:{href:""}},[t._v("Blog")])])])]),e("div",{staticClass:"footer__item"},[e("h3",{staticClass:"footer__title"},[t._v("Contact")]),e("p",{staticClass:"footer__text"},[t._v(" 55 East Birchwood Ave. Brooklyn, New York 11201 "),e("br"),t._v(" "),e("br"),t._v("contact@interno.com "),e("br"),t._v(" "),e("br"),t._v("(123) 456 - 7890 ")])])])])])])}],m={name:"FooterBlock",data(){return{}},methods:{}},v=m,f=(0,_.Z)(v,g,d,!1,null,"f11453c0",null),C=f.exports,b={name:"App",components:{HeaderBlock:p,FooterBlock:C}},h=b,j=(0,_.Z)(h,a,r,!1,null,null,null),A=j.exports,x=s(408);i.ZP.use(x.ZP);var k=new x.ZP.Store({state:{articleItems:[{id:1,tag:"kitchen",url:"../assets/artcl1.png",src:"artcl1.png",category:"Kitchan Design",titleText:"Lets Get Solution For Building Construction Work",backgroundColor:"white",text:"Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.Lorem Ipsum is not simply random text. It has roots in a piece of classica turpis dignissim maximus.posuere in.Contrary to popular belief.Lorem Ipsum is not simply random text. It has roots in a piece of classica"},{id:2,tag:"living",url:"../assets/artcl2.png",src:"artcl2.png",category:"Living Design",titleText:"Cost Latest Invented Interior Designing Ideas.",backgroundColor:"#F4F0EC",text:"Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.Lorem Ipsum is not simply random text. It has roots in a piece of classica Contrary to popular belief.Lorem Ipsum is not simply random text. It has roots in a piece of classica"},{id:3,tag:"new interior",url:"../assets/artcl3.png",src:"artcl3.png",category:"Interior Design",titleText:"Best For Any Office & Business Interior Solution",backgroundColor:"white",text:"Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.Lorem Ipsum is na Contrary to popular belief.Lorem Ipsum is not simply random text. It has roots in a piece of classica"}],projectItems:[{name:"Minimal Bedroom 1",subtitle:"Decor / Artchitecture",class:"project__item project__item1",src:"proj_gal1.jpg",buttonTag:"Bathroom"},{name:"Bedroom Minimal 2",subtitle:"Artchitecture / Decor",class:"project__item project__item2",src:"proj_gal2.jpg",buttonTag:"Bed Room"},{name:"Bedroom Bedroom 3",subtitle:"Decor / Artchitecture",class:"project__item project__item3",src:"proj_gal3.jpg"},{name:"Minimal Minimal 4",subtitle:"Decor / Decor",class:"project__item project__item4",src:"proj_gal4.jpg"},{name:"Minimal Bedroom 5",subtitle:"Decor / Artchitecture",class:"project__item project__item5",src:"proj_gal5.jpg",buttonTag:"Bed Room"},{name:"Bedroom Minimal 6",subtitle:"Artchitecture / Decor",class:"project__item project__item6",src:"proj_gal6.jpg",buttonTag:"Bathroom"},{name:"Bedroom Bedroom 7",subtitle:"Decor / Artchitecture",class:"project__item project__item7",src:"proj_gal7.jpg"},{name:"Minimal Minimal 8",subtitle:"Decor / Decor",class:"project__item project__item8",src:"proj_gal1.jpg"},{name:"Minimal Bedroom 1",subtitle:"Decor / Artchitecture",class:"project__item project__item1",src:"proj_gal1.jpg"},{name:"Bedroom Minimal 2",subtitle:"Artchitecture / Decor",class:"project__item project__item2",src:"proj_gal2.jpg"}],dataNow:""},mutations:{},getters:{getArticleItems(t){return t.articleItems},getProjectItems(t){return t.projectItems},getLastElement(t){return t.articleItems[t.articleItems.length-1]},getCurrentData(t){const e=new Date,s=e.getDate(),i=e.getMonth()+1,a=e.getFullYear();return t.dataNow=`${s}. ${i}. ${a}`}}}),y=s(2241),T=function(){var t=this,e=t._self._c;return e("div",[e("MainBlock"),e("GalleryBlock"),e("ArticlesBlock"),e("NumberBlock")],1)},B=[],P=function(){var t=this;t._self._c;return t._m(0)},I=[function(){var t=this,e=t._self._c;return e("div",[e("section",{staticClass:"main"},[e("div",{staticClass:"container"},[e("div",{staticClass:"main__wrapper"},[e("div",{staticClass:"main__content"},[e("h1",{staticClass:"main__title"},[t._v("Let Your Home Be Unique")]),e("p",{staticClass:"main__subtitle"},[t._v("There are many variations of the passages of lorem Ipsum fromavailable, majority.")]),e("div",{staticClass:"main__button"},[e("p",[t._v("Get Started ")]),e("img",{attrs:{src:s(5719),alt:""}})])])])])])])}],w={name:"MainBlock",data(){return{}},mounted(){},methods:{}},N=w,D=(0,_.Z)(N,P,I,!1,null,"2ff9c20c",null),M=D.exports,E=function(){var t=this,e=t._self._c;return e("div",[e("section",{staticClass:"numbers"},[e("div",{staticClass:"container"},[e("div",{staticClass:"numbers__wrapper"},t._l(t.numberItems,(function(s){return e("div",{key:s.id,staticClass:"numbers__item"},[e("div",{staticClass:"numbers__num"},[t._v(t._s(s.number))]),e("div",{staticClass:"numbers__text"},[t._v(t._s(s.text))])])})),0)])])])},L=[],O={name:"NumberBlock",data(){return{numberItems:[{id:1,number:12,text:"Years Of Experiance"},{id:2,number:85,text:"Success Project"},{id:3,number:15,text:"Active Project"},{id:4,number:92,text:"Happy Customers"}]}},mounted(){},methods:{}},S=O,X=(0,_.Z)(S,E,L,!1,null,"07287852",null),Z=X.exports,q=function(){var t=this,e=t._self._c;return e("div",[e("section",{staticClass:"articles"},[t._m(0),e("div",{staticClass:"articles__wrapper"},t._l(t.getArticleItems,(function(i){return e("div",{key:i.id,staticClass:"articles__item",style:i},[e("div",{staticClass:"articles__img"},[e("img",{attrs:{src:s(7173)(`./${i.src}`),alt:""}}),e("div",{staticClass:"articles__small-block"},[t._v(t._s(i.category))])]),e("div",{staticClass:"articles__description"},[t._v(t._s(i.titleText))]),e("div",{staticClass:"articles__box"},[e("div",{staticClass:"articles__date"},[t._v(" Data: "+t._s(t.getCurrentData)+" ")]),e("div",{staticClass:"gallery__icon"},[e("router-link",{staticClass:"header__link",attrs:{to:"/blog-det"}},[e("img",{attrs:{src:s(7430),alt:""}})])],1)])])})),0)])])},Q=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("h2",{staticClass:"title"},[t._v("Articles & News")]),e("p",{staticClass:"subtitle"},[t._v("It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using.")])])}],U={name:"ArticlesBlock",data(){return{someData:"26 December, 2022 "}},computed:{...(0,x.Se)(["getArticleItems","getCurrentData"])},methods:{}},R=U,H=(0,_.Z)(R,q,Q,!1,null,"d1e8432c",null),F=H.exports,G=function(){var t=this,e=t._self._c;return e("div",[e("section",{staticClass:"gallery"},[e("div",{staticClass:"container"},[e("h2",{staticClass:"title"},[t._v("Follow Our Projects")]),e("p",{staticClass:"subtitle"},[t._v("It is a long established fact that a reader will be distracted by the of readable content of page lookings at its layouts points.")]),e("div",{staticClass:"gallery__wrapper"},[e("div",{staticClass:"gallery__item"},[e("img",{staticClass:"gallery__img",attrs:{src:s(4055),alt:""}}),e("div",{staticClass:"gallery__info"},[t._m(0),e("div",{staticClass:"gallery__icon"},[e("router-link",{staticClass:"header__link",attrs:{to:"/project-det"}},[e("img",{attrs:{src:s(7430),alt:""}})])],1)])]),e("div",{staticClass:"gallery__item"},[e("img",{staticClass:"gallery__img",attrs:{src:s(8067),alt:""}}),e("div",{staticClass:"gallery__info"},[t._m(1),e("div",{staticClass:"gallery__icon"},[e("router-link",{staticClass:"header__link",attrs:{to:"/project-det"}},[e("img",{attrs:{src:s(7430),alt:""}})])],1)])]),e("div",{staticClass:"gallery__item"},[e("img",{staticClass:"gallery__img",attrs:{src:s(4309),alt:""}}),e("div",{staticClass:"gallery__info"},[t._m(2),e("div",{staticClass:"gallery__icon"},[e("router-link",{staticClass:"header__link",attrs:{to:"/project-det"}},[e("img",{attrs:{src:s(7430),alt:""}})])],1)])]),e("div",{staticClass:"gallery__item"},[e("img",{staticClass:"gallery__img",attrs:{src:s(7697),alt:""}}),e("div",{staticClass:"gallery__info"},[t._m(3),e("div",{staticClass:"gallery__icon"},[e("router-link",{staticClass:"header__link",attrs:{to:"/project-det"}},[e("img",{attrs:{src:s(7430),alt:""}})])],1)])])])])])])},K=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"gallery__text"},[e("div",{staticClass:"gallery__title"},[t._v("Modern Kitchan")]),e("div",{staticClass:"gallery__subtitle"},[t._v("Decor / Artchitecture")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"gallery__text"},[e("div",{staticClass:"gallery__title"},[t._v("Modern Kitchan")]),e("div",{staticClass:"gallery__subtitle"},[t._v("Decor / Artchitecture")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"gallery__text"},[e("div",{staticClass:"gallery__title"},[t._v("Modern Kitchan")]),e("div",{staticClass:"gallery__subtitle"},[t._v("Decor / Artchitecture")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"gallery__text"},[e("div",{staticClass:"gallery__title"},[t._v("Modern Kitchan")]),e("div",{staticClass:"gallery__subtitle"},[t._v("Decor / Artchitecture")])])}],Y={name:"GalleryBlock",data(){return{}},mounted(){},methods:{}},W=Y,J=(0,_.Z)(W,G,K,!1,null,"3322fb5e",null),V=J.exports,z={components:{MainBlock:M,NumberBlock:Z,ArticlesBlock:F,GalleryBlock:V},name:"MainPage",data(){return{}},methods:{}},$=z,tt=(0,_.Z)($,T,B,!1,null,"2380b310",null),et=tt.exports,st=function(){var t=this,e=t._self._c;return e("div",[t._m(0),e("div",{staticClass:"container"},[e("div",{staticClass:"latest-post"},[e("h2",{staticClass:"latest-post__title"},[t._v("Latest Post")]),e("div",{staticClass:"latest-post__wrapper"},[e("img",{attrs:{src:s(7173)(`./${t.getLastElement.src}`),alt:""}}),e("div",{staticClass:"latest-post__descriptions"},[e("div",{staticClass:"latest-post__descriptions_title"},[t._v(" "+t._s(t.getLastElement.titleText)+" ")]),e("p",{staticClass:"latest-post__descriptions_text"},[t._v(" "+t._s(t.getLastElement.text)+" ")]),e("div",{staticClass:"latest-post__descriptions_box"},[e("div",{staticClass:"latest-post__descriptions_date"},[t._v(" Data "+t._s(t.getCurrentData)+" ")]),e("div",{staticClass:"latest-post__descriptions_icon"},[e("router-link",{staticClass:"header__link",attrs:{to:"/blog-det"}},[e("img",{attrs:{src:s(7430),alt:""}})])],1)])])])])]),e("ArticlesBlock")],1)},it=[function(){var t=this,e=t._self._c;return e("section",{staticClass:"banner"},[e("div",{staticClass:"banner__wrapper"},[e("div",{staticClass:"banner__content"},[e("div",{staticClass:"banner__title"},[t._v("Articles & News")]),e("div",{staticClass:"banner__subtitle"},[t._v("Home / Blog")])])])])}],at={name:"BlogPage",data(){return{}},components:{ArticlesBlock:F},computed:{...(0,x.Se)(["getLastElement","getCurrentData"])},methods:{}},rt=at,ot=(0,_.Z)(rt,st,it,!1,null,"5b6568b4",null),nt=ot.exports,ct=function(){var t=this,e=t._self._c;return e("div",[t._m(0),e("section",{staticClass:"project"},[e("div",{staticClass:"container"},[e("div",{staticClass:"project__link-box"},t._l(t.buttonItems,(function(s){return e("div",{key:s.id,staticClass:"project__btn",on:{click:function(e){return t.getTagBtn(s.buttonTag)}}},[t._v(" "+t._s(s.buttonName)+" ")])})),0),t.currentArticle.length?e("div",{staticClass:"project__gallereya"},t._l(t.currentArticle,(function(i){return e("div",{key:i.id,class:i.class},[e("div",{staticClass:"project__img-box"},[e("img",{attrs:{src:s(7173)(`./${i.src}`),alt:""}})]),e("div",{staticClass:"project__descr-box"},[e("div",{staticClass:"project__descr-box_text"},[e("div",{staticClass:"project__descr-box_title"},[t._v(t._s(i.name))]),e("div",{staticClass:"project__descr-box_subtitle"},[t._v(t._s(i.subtitle))])]),e("div",{staticClass:"gallery__icon"},[e("router-link",{staticClass:"header__link",attrs:{to:"/project-det"}},[e("img",{attrs:{src:s(7430),alt:""}})])],1)])])})),0):e("div",{staticClass:"project__gallereya"},t._l(t.currentProductList2,(function(i){return e("div",{key:i.id,class:i.class},[e("div",{staticClass:"project__img-box"},[e("img",{attrs:{src:s(7173)(`./${i.src}`),alt:""}})]),e("div",{staticClass:"project__descr-box"},[e("div",{staticClass:"project__descr-box_text"},[e("div",{staticClass:"project__descr-box_title"},[t._v(t._s(i.name))]),e("div",{staticClass:"project__descr-box_subtitle"},[t._v(t._s(i.subtitle))])]),e("div",{staticClass:"gallery__icon"},[e("router-link",{staticClass:"header__link",attrs:{to:"/project-det"}},[e("img",{attrs:{src:s(7430),alt:""}})])],1)])])})),0),e("div",{staticClass:"project__pagination-box"},t._l(3,(function(s){return e("router-link",{key:s,staticClass:"paginations",attrs:{to:`/project/${s}`}},[t._v(" "+t._s(s)+" ")])})),1)])])])},lt=[function(){var t=this,e=t._self._c;return e("section",{staticClass:"banner"},[e("div",{staticClass:"banner__wrapper"},[e("div",{staticClass:"banner__content"},[e("div",{staticClass:"banner__title"},[t._v("Our Project")]),e("div",{staticClass:"banner__subtitle"},[t._v("Home / Project")])])])])}],_t={name:"ProjectPage",watch:{$route(t,e){const{page:s}=this.$route.params;this.currentPage=+s,console.log(t,e)}},data(){return{buttonItems:[{id:1,buttonName:"Bathroom",buttonTag:"Bathroom"},{id:2,buttonName:"Bed Room",buttonTag:"Bed Room"},{id:3,buttonName:"Kitchan",buttonTag:"Bathroom"},{id:4,buttonName:"Living Area",buttonTag:"Bed Room"}],currentPage:1,itemsPerPage:4,currentArticle:[]}},computed:{currentProductList2(){const{currentPage:t,itemsPerPage:e}=this,s=(t-1)*e,i=s+e;return this.getProjectItems.slice(s,i)},...(0,x.Se)(["getProjectItems"])},mounted(){},methods:{getTagBtn(t){console.log(t),console.log(t.buttonTag),this.currentArticle=this.getProjectItems.filter((e=>e.buttonTag===t))}}},ut=_t,pt=(0,_.Z)(ut,ct,lt,!1,null,"481a056e",null),gt=pt.exports,dt=function(){var t=this,e=t._self._c;return e("div",[e("section",{staticClass:"banner"}),e("section",{staticClass:"project-det"},[e("div",{staticClass:"container"},[e("div",{staticClass:"project-det__content"},[e("div",{staticClass:"project-det__title"},[t._v("Minimal Look Bedrooms ")]),t._m(0),t._l(t.currentProductList,(function(i){return e("div",{key:i.id,staticClass:"project-det__slider"},[e("img",{attrs:{src:s(7173)(`./${i.src}`),alt:""}}),e("div",{staticClass:"project-det__number"},[t._v(t._s(i.id))])])})),e("div",{staticClass:"project-det__pagination-box"},t._l(3,(function(s){return e("router-link",{key:s,staticClass:"paginations",attrs:{to:`/project-det/${s}`}},[t._v(" "+t._s(s)+" ")])})),1)],2)])])])},mt=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"project-det__subtitle"},[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. "),e("br"),t._v(" In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor. ")])}],vt={name:"ProjectDetails",watch:{$route(t,e){const{somepage:s}=this.$route.params;this.currentPage=+s,console.log(t,e)}},data(){return{imgList:[{id:1,src:"proj_slider.jpg"},{id:2,src:"proj_slider.jpg"},{id:3,src:"proj_slider.jpg"}],currentPage:1,itemsPerPage:1}},computed:{currentProductList(){const{currentPage:t,itemsPerPage:e}=this,s=(t-1)*e,i=s+e;return this.imgList.slice(s,i)}},mounted(){},methods:{}},ft=vt,Ct=(0,_.Z)(ft,dt,mt,!1,null,"1f8752dc",null),bt=Ct.exports,ht=function(){var t=this;t._self._c;return t._m(0)},jt=[function(){var t=this,e=t._self._c;return e("div",[e("section",{staticClass:"error-page"},[e("div",{staticClass:"container"},[e("div",{staticClass:"error-page__wrapper"},[e("div",{staticClass:"error-page__content"},[e("div",{staticClass:"error-page__title"},[t._v(" 404 ")]),e("div",{staticClass:"error-page__subtitle"},[t._v(" We are sorry, but the page you requested was not found ")]),e("div",{staticClass:"error-page__btn"},[t._v("Back To Home")])]),e("div",{staticClass:"error-page__img"},[e("img",{attrs:{src:s(1588),alt:""}})])])])])])}],At={name:"ErrorPage",data(){return{}},mounted(){},methods:{}},xt=At,kt=(0,_.Z)(xt,ht,jt,!1,null,"2b8eb012",null),yt=kt.exports,Tt=function(){var t=this,e=t._self._c;return e("div",[e("section",{staticClass:"banner"}),e("section",{staticClass:"blog-details"},[e("div",{staticClass:"container"},[e("div",{staticClass:"blog-details__wrapper"},[t.currentArticle.length?e("div",{staticClass:"blog-details__articles"},t._l(t.currentArticle,(function(i){return e("div",{key:i.id,staticClass:"blog-details__article-item"},[e("div",{staticClass:"blog-details__img"},[e("img",{attrs:{src:s(7173)(`./${i.src}`),alt:""}})]),e("div",{staticClass:"blog-details__info-box"},[e("div",{staticClass:"blog-details__title"},[t._v(" "+t._s(i.titleText)+" ")]),e("div",{staticClass:"blog-details__text"},[t._v(" "+t._s(i.text)+" ")]),e("div",{staticClass:"blog-details__data"},[t._v(" "+t._s(t.getCurrentData)+" ")])])])})),0):e("div",{staticClass:"blog-details__articles"},t._l(t.getArticleItems,(function(i){return e("div",{key:i.id,staticClass:"blog-details__article-item"},[e("div",{staticClass:"blog-details__img"},[e("img",{attrs:{src:s(7173)(`./${i.src}`),alt:""}})]),e("div",{staticClass:"blog-details__info-box"},[e("div",{staticClass:"blog-details__title"},[t._v(" "+t._s(i.titleText)+" ")]),e("div",{staticClass:"blog-details__text"},[t._v(" "+t._s(i.text)+" ")]),e("div",{staticClass:"blog-details__data"},[t._v(" "+t._s(t.getCurrentData)+" ")])])])})),0),e("div",{staticClass:"blog-details__tags"},[e("h2",[t._v("Tags")]),e("div",{staticClass:"blog-details__btn-box"},t._l(t.getArticleItems,(function(s){return e("div",{key:s.id,staticClass:"blog-details__btn",on:{click:function(e){return t.getTag(s)}}},[t._v(" "+t._s(s.tag)+" ")])})),0)])])])])])},Bt=[],Pt={name:"BlogDetails",data(){return{curentIndex:0,currentArticle:[]}},computed:{...(0,x.Se)(["getArticleItems","getCurrentData"])},mounted(){},methods:{getTag(t){this.currentArticle=this.getArticleItems.filter((e=>e.tag===t.tag))}}},It=Pt,wt=(0,_.Z)(It,Tt,Bt,!1,null,"027faebc",null),Nt=wt.exports;const Dt=[{path:"/",component:et},{path:"/main",component:et},{path:"/blog",component:nt},{path:"/project",component:gt},{path:"/project/:page",component:gt},{path:"/project-det",component:bt},{path:"/project-det/:somepage",component:bt},{path:"/blog-det",component:Nt},{path:"/*",component:yt}];var Mt=Dt;i.ZP.use(y.Z),i.ZP.config.productionTip=!1;const Et=new y.Z({routes:Mt});new i.ZP({store:k,render:t=>t(A),router:Et}).$mount("#app")},7173:function(t,e,s){var i={"./Image_laceholder.jpg":2903,"./Logo.png":6148,"./Logo.svg":3630,"./ar_icon.svg":7430,"./ar_white.png":4453,"./ar_white.svg":7826,"./arrow.svg":5719,"./artcl1.png":6328,"./artcl2.png":1373,"./artcl3.png":669,"./artcl4.png":7566,"./artcl5.png":3209,"./artcl6.png":4111,"./baner_blog_details.jpg":1743,"./baner_project.jpg":9688,"./block_bcgrnd.jpg":5607,"./error_img.jpg":1588,"./gal1.png":4055,"./gal2.png":8067,"./gal3.png":4309,"./gal4.png":7697,"./latest_post.png":2262,"./lin.svg":4021,"./main_bg.jpg":5335,"./proj_det_baner.jpg":781,"./proj_gal1.jpg":281,"./proj_gal1_1.jpg":6698,"./proj_gal2.jpg":9436,"./proj_gal3.jpg":4418,"./proj_gal4.jpg":6529,"./proj_gal5.jpg":8289,"./proj_gal5_1.jpg":3441,"./proj_gal6.jpg":2633,"./proj_gal7.jpg":6059,"./proj_slider.jpg":1648,"./twiter.svg":7193};function a(t){var e=r(t);return s(e)}function r(t){if(!s.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}a.keys=function(){return Object.keys(i)},a.resolve=r,t.exports=a,a.id=7173},3630:function(t,e,s){"use strict";t.exports=s.p+"img/Logo.cbdb00be.svg"},7430:function(t,e,s){"use strict";t.exports=s.p+"img/ar_icon.90c3b4b3.svg"},7826:function(t,e,s){"use strict";t.exports=s.p+"img/ar_white.d10876c5.svg"},5719:function(t,e,s){"use strict";t.exports=s.p+"img/arrow.7c192040.svg"},4021:function(t,e,s){"use strict";t.exports=s.p+"img/lin.e55dfc92.svg"},7193:function(t,e,s){"use strict";t.exports=s.p+"img/twiter.ad8ca39d.svg"},2903:function(t,e,s){"use strict";t.exports=s.p+"img/Image_laceholder.c572c7e1.jpg"},6148:function(t){"use strict";t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAMAAAANmfvwAAAAq1BMVEUAAAD//wC/v4Dbkm2/n4DRonTPn3jNo3HPpXXQoXLQoHfMo3XOonbMonPLo3TOpHLOoXPNo3TOonPMoXPOoXXMonTNoXTNonTMonXNoXPNo3TNonTNonTNonPMo3TNonTNonPOonXNonTOonPNonTMo3TNonTNonTNonXNonTNonTMonTNonTOonTNonTNonTNonTNonTNonTNonTNonTNonTNonTNonT////Cqg3tAAAAN3RSTlMAAQQHCAsgJCUmKzI0PEBDSVZdam1udXuDhYqaoqirrLO6yMnNz9Hc3eDh4+Tt7u/x9ff4+f3+KYV0QQAAAAFiS0dEOKAHpdYAAAC4SURBVDjLhdLHEoJAEATQVTGgiC4mEAyYI6Ig/f9/5oEqa9kCum89805TI0RlTMdbny5RWrE2ZPBAnqwUWP4L/5SR4TYD6ogZohidGG6CetLZAfVExiBk9kU9aSwBQiqEQqZgRGaMdGMQ0jqAEReM9D6UhGDEBiUhJVZh8o5KiK/027gpBnudGMqfJn0hhGifNSKVusrPNNFIoNRFTkYauSt1nhO7SExQ4nDicbLh5MjJlZMnJyklP04krmv6gy06AAAAAElFTkSuQmCC"},4453:function(t){"use strict";t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA1CAYAAAAOJMhOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMoSURBVHgB1ZpPaxNBGMafLR6NxKN6cL3459RWpCexCfUigs03MEIFRcT24EmwWzyoFWzFQkEPVhC8SQse1aafoL01rYddwdZjg/0Ar++7sxu2adLWdmay84M3u+Tf7pNn5p2Zd+JBM0Tk86HEIcezHMUkhEYSvzhWOCLP81aQJ1hAkaPE8YFji/6fMPlsBd0kETJ+SBH7ifNhC0NC2jFuXBhfoJL8irYIOarQDSlXpqh7TEEX/GU+xwp1n5AO0AS9/cTwYREqBeeBiKPMqT7q9IaOgnIoJiXCHqLaCmIxMhAuI39iUiKOfhbVaH2hp8MHppFfMYLPcbBEwe48IncYbb1/r0WMD9XUinADaXL92f7U2uQCuCNGkHvd0fSaDiXuhHATyXo1Ock6FMBdxtOT2CHH3Uk5KWk8dai7axE9xBkvFXQbBvi+uISNzT+wxGD8SGryqZ3V+hpd6h2g6zeG6ffGJlmiKA71wQAXL5zHwJXLsUPVkfu2nKqIoBIM8XZqMhYmYh6OPcbf7W0Ypk8E9cIQhUIhFnXm9CnU137i5St967QO+NKHlskw0ocGrg7Ffer55GsySCiCTBc7Ylbr601RM7PvyBBbIIt8WfgaC5L4+OkzmaAHFhkqX4v7k1BfW4cJrAp68vRZnPFE1IN7d2EEslRnk2RgYaANrWQ5SQIiRpKCJAeDLIqgOTKIdP40EXz7USPDzEsfMradIZPTF8lgKn1mqDwIw9TEoRIZIDuYzsy+J0uUjkE5JMUGrbWEE4XjcVRu3WR3RmCBhizD0xXrPB+G4TYLLKiSjkPTcJ85echWfbbgVgkri+zVnpOT7EzhDdxlIj3JOiTuSOXHNZea7ghNh5JK/gTcY8c979pOIZk+GFyWa6bGRpSzT7QT5MONgn2ENhtfu5YPyRvuIP+M7bU1uQt2KqD8EuAwUD5FBTgKlC9RAXTAXzRKlqpDHZBrV6ETUjXwkOwjf/owUq5OhdlqguJKABuQcsvU0j0WQmoqZpdEWJX0NMVQhxAPmiDVzktQG08+9t+miaBWy0tQUxgttQ1tgtpBahrltzwdQS2XGzDAP3YOCUeCWueSAAAAAElFTkSuQmCC"},6328:function(t,e,s){"use strict";t.exports=s.p+"img/artcl1.d5075be3.png"},1373:function(t,e,s){"use strict";t.exports=s.p+"img/artcl2.fb62b933.png"},669:function(t,e,s){"use strict";t.exports=s.p+"img/artcl3.43714f6a.png"},7566:function(t,e,s){"use strict";t.exports=s.p+"img/artcl4.d3417782.png"},3209:function(t,e,s){"use strict";t.exports=s.p+"img/artcl5.130ee02d.png"},4111:function(t,e,s){"use strict";t.exports=s.p+"img/artcl6.1acb8587.png"},1743:function(t,e,s){"use strict";t.exports=s.p+"img/baner_blog_details.360b1063.jpg"},9688:function(t,e,s){"use strict";t.exports=s.p+"img/baner_project.15ecc738.jpg"},5607:function(t,e,s){"use strict";t.exports=s.p+"img/block_bcgrnd.02b54d78.jpg"},1588:function(t,e,s){"use strict";t.exports=s.p+"img/error_img.3eef4479.jpg"},4055:function(t,e,s){"use strict";t.exports=s.p+"img/gal1.8dc0a62d.png"},8067:function(t,e,s){"use strict";t.exports=s.p+"img/gal2.25cca818.png"},4309:function(t,e,s){"use strict";t.exports=s.p+"img/gal3.44c84afd.png"},7697:function(t,e,s){"use strict";t.exports=s.p+"img/gal4.a638e034.png"},2262:function(t,e,s){"use strict";t.exports=s.p+"img/latest_post.e019118a.png"},5335:function(t,e,s){"use strict";t.exports=s.p+"img/main_bg.4eef8047.jpg"},781:function(t,e,s){"use strict";t.exports=s.p+"img/proj_det_baner.0c52175b.jpg"},281:function(t,e,s){"use strict";t.exports=s.p+"img/proj_gal1.4a49993c.jpg"},6698:function(t,e,s){"use strict";t.exports=s.p+"img/proj_gal1_1.12991287.jpg"},9436:function(t,e,s){"use strict";t.exports=s.p+"img/proj_gal2.59a1749e.jpg"},4418:function(t,e,s){"use strict";t.exports=s.p+"img/proj_gal3.95366406.jpg"},6529:function(t,e,s){"use strict";t.exports=s.p+"img/proj_gal4.9cdae01c.jpg"},8289:function(t,e,s){"use strict";t.exports=s.p+"img/proj_gal5.5a3823d0.jpg"},3441:function(t,e,s){"use strict";t.exports=s.p+"img/proj_gal5_1.63f6fbad.jpg"},2633:function(t,e,s){"use strict";t.exports=s.p+"img/proj_gal6.4155c084.jpg"},6059:function(t,e,s){"use strict";t.exports=s.p+"img/proj_gal7.a7cb25a2.jpg"},1648:function(t,e,s){"use strict";t.exports=s.p+"img/proj_slider.94a598e1.jpg"}},e={};function s(i){var a=e[i];if(void 0!==a)return a.exports;var r=e[i]={exports:{}};return t[i].call(r.exports,r,r.exports,s),r.exports}s.m=t,function(){var t=[];s.O=function(e,i,a,r){if(!i){var o=1/0;for(_=0;_<t.length;_++){i=t[_][0],a=t[_][1],r=t[_][2];for(var n=!0,c=0;c<i.length;c++)(!1&r||o>=r)&&Object.keys(s.O).every((function(t){return s.O[t](i[c])}))?i.splice(c--,1):(n=!1,r<o&&(o=r));if(n){t.splice(_--,1);var l=a();void 0!==l&&(e=l)}}return e}r=r||0;for(var _=t.length;_>0&&t[_-1][2]>r;_--)t[_]=t[_-1];t[_]=[i,a,r]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var i in e)s.o(e,i)&&!s.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){s.p="/interno_vue_sait/"}(),function(){var t={143:0};s.O.j=function(e){return 0===t[e]};var e=function(e,i){var a,r,o=i[0],n=i[1],c=i[2],l=0;if(o.some((function(e){return 0!==t[e]}))){for(a in n)s.o(n,a)&&(s.m[a]=n[a]);if(c)var _=c(s)}for(e&&e(i);l<o.length;l++)r=o[l],s.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return s.O(_)},i=self["webpackChunkvue_gb_sait"]=self["webpackChunkvue_gb_sait"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=s.O(void 0,[998],(function(){return s(7928)}));i=s.O(i)})();
//# sourceMappingURL=app.64ba384f.js.map