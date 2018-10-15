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
                     $('<div />').attr({id:"ctner__st"}).appendTo('#content').append(
                    		 $('<div />').attr({id:"ctnerh__st" , style:"height:50px"}),
                    		 $('<div />').attr({id:"ctnerb__st"}),
                    		 $('<div />').attr("id","ctnerf__st")
                     );
                     (jaekyung.main.nav()).appendTo('#ctnerh__st');
                     (jaekyung.main.ctner()).appendTo('#ctnerb__st');
                     (jaekyung.main.ftr()).appendTo('#ctnerf__st');
              },
              nav:()=>{
                     let navc =$('<nav />');
                     let d=$('<div />');
                     let u = $('<ul />');
                     let ip = ["통계1","통계2","통계3","통계4","통계5"];
                     
                     navc.attr({id:"navc__st",style:"position: fixed; "})
                     	.addClass("navbar navbar-default navbar-static-top  ");
                     d.appendTo(navc);
                     u.addClass("nav nav-pills nav-justified ").appendTo(d);
                     $.each(ip,function(){
                           $('<li role="presentation"/>').append($('<a href="#"/>').html(this)).appendTo(u);
                     });
                     return navc;
              },
              ctner:()=>{
                     let d = $('<div>');
                     (jaekyung.main.smm()).appendTo(d);
                     (jaekyung.main.vst()).appendTo(d);
                     return d;
              },
              ftr:()=>{
                     let d = $('<div>').attr("id","ftr__st");
                     d.html('푸우우우터');
                     return d;
              },
              smm:()=>{
            	  let smm = $('<div />');
            	  let smmb =$('<div />');
            	  let smma = $('<div />');
            	  let smmh = $('<div />');
            	  let smmc = $('<div />');
            	  let smmco = $('<div />');
            	  let smmct = $('<div />');
            	  smm.attr({style:"background-color: rgba(204, 82, 0, 0.25);"});
            	  smmb.appendTo(smm);
            	  smma.addClass("container compogap__ryu").appendTo(smmb);
            	  smmh.addClass("txtcw__ryu").html("<h1><strong>요약</strong></h1><hr class='txthr__ryu'/>").appendTo(smma);
            	  smmc.attr({style:"margin-top:40px;"}).appendTo(smma);
            	  smmco.appendTo(smmc);
            	  smmco.attr({style:"display:flex"}).addClass("row").append(
            		$('<div />').attr({style:"border:1px solid;"}).addClass("col-sm-6 bgcw__ryu").append(
            			$('<img src="'+$.img()+'/1.PNG" />').addClass("img-responsive center-block")
            		),
            		$('<div />').addClass("col-sm-6").append(
            				$('<div />').attr({style:"border:1px solid;margin-bottom:15px ; "}).addClass("col-sm-12 bgcw__ryu").append(
            						$('<img src="'+$.img()+'/2.PNG" />').attr({style:"margin-bottom:15px"}).addClass("img-responsive center-block")
            				),
            				$('<div />').attr({style:"border:1px solid;"}).addClass("col-sm-12 bgcw__ryu").append(
            						$('<img src="'+$.img()+'/3.PNG" />').addClass("img-responsive center-block")
            				)
            		)
            	  );
            	  smmct.appendTo(smmc);
            	  smmct.attr({style:"display:flex"}).addClass("row margintop20__ryu").append(
            		$('<div />').attr({style:"border:1px solid; margin-right:15px"}).addClass("col-sm-6 bgcw__ryu").append(
            				$('<img src="'+$.img()+'/4.PNG" />').addClass("img-responsive center-block")
            		),
            		$('<div />').addClass("col-sm-3").append(
            				$('<div />').attr({style:"border:1px solid; "}).addClass("col-sm-12 bgcw__ryu").append(
            						$('<img src="'+$.img()+'/5.PNG" />').addClass("img-responsive center-block")
            				)
            		),
            		$('<div />').addClass("col-sm-3").append(
            				$('<div />').attr({style:"border:1px solid"}).addClass("col-sm-12 bgcw__ryu").append(
            						$('<img src="'+$.img()+'/6.PNG" />').addClass("img-responsive center-block")
            				)
            		)
            	  );
            	  return smm;
              },
              vst:()=>{
            	  let vst = $('<div />');
            	  let vsta = $('<div />');
            	  let vsth = $('<div />');
            	  let vstc = $('<div />');
            	  let vstco = $('<div />');
            	  let vstct = $('<div />');
            	  vst.attr({style:"background-color: #FFFFF0"});
            	  vsta.addClass("container compogap__ryu").appendTo(vst);
            	  $('<div />').addClass("row").append(
            			  $('<div />').addClass("col-sm-12").append(
	            			  $('<div />').addClass("col-sm-3 ").html("<h1><strong>방문자통계</strong></h1><hr class='txthr__ryu' style='max-width: 25rem!important; ' />"),
	            			  $('<div />').addClass("col-sm-2").append(
	        					  $('<span>').html("상세데이터  &nbsp; &nbsp;&nbsp;"),
	        					  $('<label />').addClass('switch').append(
	        							$('<input />').attr({type:"checkbox"}),
	        							$('<span />').addClass("slider round")
		    	            	  )
			    	         )
    	            	 )
            	  ).appendTo(vsta);
            	  vstc.attr({style:"margin-top:40px"}).appendTo(vsta);
            	  vstco.appendTo(vstc);
            	  vstco.addClass("row").append(
            			  $('<div />').attr({style:"border:1px solid"}).addClass("col-sm-12").append(
            					$('<img src="'+$.img()+'/7.PNG" />').addClass("img-responsive center-block")	  
            			  )       			  
            	  );
            	  vstct.addClass("margintop20__ryu").appendTo(vstc);
            	  let r ={list:['날짜','총 방문자','회원','비회원','남','여']};
            	  let rr =[{x1:'8월1일',x2:'651234명',x3:'6548명',x4:'321명',x5:'9412명',x6:'321명'},{x1:'8월2일',x2:'651234명',x3:'6548명',x4:'321명',x5:'9412명',x6:'321명'},{x1:'8월3일',x2:'651234명',x3:'6548명',x4:'321명',x5:'9412명',x6:'321명'}];
            	  let t = $('<table />');
            	  let th = $('<thead />');
            	  let tb = $('<tbody />');
            	  let tr = $('<tr />');
            	  vstct.addClass("row").append(
            			  $('<div />').attr({style:"border:1px solid; padding: 20px 40px 20px 40px"}).addClass("col-sm-12").append(
            					  t.addClass("table table-bordered")
            			  )
            	  );
            	  t.attr({style:"width:80% margin:20px"});
            	  th.appendTo(t);
            	  tr.appendTo(th);
            	  $.each(r.list,(i,v)=>{
	            		$('<th />').attr({style:"text-align:center"}).html(v).appendTo(tr) 
            	  });
            	  tb.appendTo(t);
            	  $(rr).each(function(i){
            		  $('<tr />').attr({style:"text-align:center"}).append(
            				  $('<td />').attr('width','10%').html(this.x1),
            				  $('<td />').attr('width','20%').html(this.x2),
            				  $('<td />').attr('width','15%').html(this.x3),
            				  $('<td />').attr('width','15%').html(this.x4),
            				  $('<td />').attr('width','15%').html(this.x5),
            				  $('<td />').attr('width','15%').html(this.x6)
            		  ).appendTo(tb);
            	  });
            	  
            	  
            	  return vst;
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