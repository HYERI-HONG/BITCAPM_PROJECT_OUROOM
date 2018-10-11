"use strict";
var jaekyung = jaekyung || {};
jaekyung =(()=>{
       var init=()=>{
              jaekyung.router.init();
       };
       return {init:init};
})();
jaekyung.main={//메인페이지
              mp:()=>{
                     $('#content').empty();                   
                     $('<div />').attr({id:"ctner__st"}).addClass("container").appendTo('#content').append(
                    		 $('<div />').attr({id:"ctnerh__st",
                    			 style:"height:35px"}),
                    		 $('<div />').attr({id:"ctnerb__st"}),
                    		 $('<div />').attr("id","ctnerf__st")
                     );
                     (jaekyung.main.nav()).appendTo('#ctnerh__st');
                     (jaekyung.main.ctner()).appendTo('#ctnerb__st');
                     (jaekyung.main.ftr()).appendTo('#ctnerf__st');
              },
              nav:()=>{
/*
 
정적 상단
<nav class="navbar navbar-default navbar-static-top">
  <div class="container">
    <ul class="nav nav-pills nav-justified">
       	<li role="presentation" class="active"><a href="#">Home</a></li> // 좌표로 알아보도록하자
		<li role="presentation"><a href="#">Profile</a></li>
		<li role="presentation"><a href="#">Messages</a></li>
       </ul>
  </div>
</nav>
 */    
                     let navc =$('<nav />');
                     let u = $('<ul />');
                     let ip = ["통계1","통계2","통계3","통계4","통계5"];
                     navc.attr({id:"navc__st",style:"position: fixed; max-width:1122px ; padding-right:0px;padding-left:0px ;"}).addClass("navbar navbar-default navbar-static-top container ");
                     u.addClass("nav nav-pills nav-justified").appendTo(navc);
                     $.each(ip,function(){
                           $('<li role="presentation"/>').append($('<a href="#"/>').html(this)).appendTo(u);
                     });
                     return navc;
              },
              ctner:()=>{
                     let d = $('<div>').attr("id","ctner__st");
                     d.html('<h1>동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리 나라 만세동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리 나라 만세동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리 나라 만세동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리 나라 만세동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리 나라 만세동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리 나라 만세동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리 나라 만세동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리 나라 만세동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리 나라 만세동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리 나라 만세동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리 나라 만세동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리 나라 만세동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리 나라 만세동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리 나라 만세동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리 나라 만세동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리 나라 만세동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리 나라 만세동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리 나라 만세동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리 나라 만세동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리 나라 만세동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리 나라 만세동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리 나라 만세동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리 나라 만세동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리 나라 만세동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리 나라 만세</h1>');
                     return d;
              },
              ftr:()=>{
                     let d = $('<div>').attr("id","ftr__st");
                     d.html('히해');
                     return d;
              }
}
jaekyung.router={
              init:()=>{
                     jaekyung.router.main();
              },
              main:()=>{
                     jaekyung.main.mp();
              }
}