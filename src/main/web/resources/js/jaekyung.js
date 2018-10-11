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
<<<<<<< HEAD
                    			 style:"height:50px"}),
                    		 $('<div />').attr({id:"ctnerb__st"}),
                    		 $('<div />').attr("id","ctnerf__st")
                     );
                     (jaekyung.main.nav()).appendTo('#ctnerh__st');
                     (jaekyung.main.ctner()).appendTo('#ctnerb__st');
                     (jaekyung.main.ftr()).appendTo('#ctnerf__st');
              },
              nav:()=>{
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
                     let d = $('<div>');
                     (jaekyung.main.smm()).appendTo(d);
                     return d;
              },
              ftr:()=>{
                     let d = $('<div>').attr("id","ftr__st");
                     d.html('히해');
                     return d;
              },
              smm:()=>{
            	  let smma = $('<div />');
            	  let smmh = $('<div />');
            	  let smmc = $('<div />');
            	  let smmco = $('<div />');
            	  let smmct = $('<div />');
            	  smmh.html("<h3><u>Summary</u></h3>").appendTo(smma);
            	  smmc.addClass("container").appendTo(smma);
            	  smmco.appendTo(smmc);
            	  smmco.attr({style:"display:flex"}).addClass("row").append(
            		$('<div />').attr({style:"border:1px solid;"}).addClass("col-sm-6").append(
            			$('<img src="'+$.img()+'/1.PNG" />').addClass("img-responsive center-block")
            		),
            		$('<div />').addClass("col-sm-6").append(
            				$('<div />').attr({style:"border:1px solid;margin-bottom:15px ; padding-right:0px;padding-left:0px"}).addClass("col-sm-12").append(
            						$('<img src="'+$.img()+'/2.PNG" />').attr({style:"margin-bottom:15px"}).addClass("img-responsive center-block")
            				),
            				$('<div />').attr({style:"border:1px solid;"}).addClass("col-sm-12").append(
            						$('<img src="'+$.img()+'/3.PNG" />').addClass("img-responsive center-block")
            				)
            		)
            	  );
            	  smmct.appendTo(smmc);
            	  smmct.attr({style:"display:flex"}).addClass("row margintop20_ryu").append(
            		$('<div />').attr({style:"border:1px solid; margin-right:15px"}).addClass("col-sm-6").append(
            				$('<img src="'+$.img()+'/4.PNG" />').addClass("img-responsive center-block")
            		),
            		$('<div />').attr({style:"border:1px solid; margin-right:15px"}).addClass("col-sm-3").append(
            				$('<img src="'+$.img()+'/5.PNG" />').addClass("img-responsive center-block")
            		),
            		$('<div />').attr({style:"border:1px solid"}).addClass("col-sm-2").append(
            				$('<img src="'+$.img()+'/6.PNG" />').addClass("img-responsive center-block")
            		)
            	  );
            	  return smma;
              },
              vst:()=>{
            	  
              },
              sba:()=>{
            	  
              },
              ctgr1:()=>{
            	  
              },
              ctgr2:()=>{
            	  
              },
              ctgr3:()=>{
            	  
              },
              mbr:()=>{
            	  
              },
              abba:()=>{
            	  
              },
              ubt:()=>{
            	  
              },
              cbg:()=>{
            	  
=======
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
>>>>>>> refs/remotes/origin/master
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