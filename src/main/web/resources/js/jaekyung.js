"use strict";
var jaekyung = jaekyung || {};
jaekyung =(()=>{
       var init=()=>{
              jaekyung.router.init();
       };
       return {init:init};
})();
jaekyung.main.nav=(()=>{
	
})();
jaekyung.main={//메인페이지//변경
              mp:()=>{
                     $('#content').empty();     
                     let ctner__st=$('<div />').attr({id:"ctner__st"});
                     let ctnerh__st=$('<div />').attr({id:"ctnerh__st"});
                     let ctnerb__st=$('<div />').attr({id:"ctnerb__st"});
                     let ctnerf__st=$('<div />').attr({id:"ctnerf__st"});
                     ctner__st.appendTo('#content').append(
                    		 ctnerh__st,
                            ctnerb__st,
                            ctnerf__st
                     );
                     (jaekyung.main.nav()).appendTo(ctnerh__st);
                     (jaekyung.main.ctner()).appendTo(ctnerb__st);
                     (jaekyung.main.ftr()).appendTo(ctnerf__st);
              },
              nav:()=>{
            	  	 let d=$('<div />');
                     let navc =$('<nav />');
                     let dd=$('<div />');
                     let u = $('<ul />');
                     let ip = [{lst:'요약',id:'smmryu'},{lst:'방문자',id:'vstryu'},{lst:'연령별',id:'sbaryu'},{lst:'카테고리별',id:'ctgr1ryu'},{lst:'가입자',id:'mbrryu'},{lst:'구매액',id:'abbaryu'},{lst:'시간별방문자',id:'vbtryu'},{lst:'성별',id:'cbgryu'}];
                     d.addClass("container");
                     navc.attr({id:"navc__st",style:"position: fixed; max-width:1140px"})
                           .addClass("navbar navbar-default").appendTo(d);
                     dd.appendTo(navc);
                     //active 추가할거
                     $('<div />').addClass('navbar-header').append(
                            $('<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" />')
                           //, $('<a/>').addClass('navbar-brand').attr({href:"#"}).html($('<img src="'+$.img()+'/jaekyung/logo.png"/>'))
                     ).appendTo(dd);
                     u.attr({id:"ididid"}).addClass("nav nav-pills nav-justified ").appendTo(dd);
                   
                     $(ip).each(function(i){
                           $('<li role="presentation" data-scroll="'+this.id+'"/>').attr({style:"padding-top:7px"}).addClass("scrollS__ryu").append($('<a href="#'+this.id+'"/>').html(this.lst)).appendTo(u);
                     });
                     
                     $(()=>{
                    	    var link = $('li.scrollS__ryu a');
                    	    link.on('click',function(e){ //.click(e=>{}) 의 비jquery 방식
                    	        var target = $($(this).attr('href')); 
                    	        $('html, body').animate({
                    	            scrollTop: target.offset().top
                    	        },800);
                    	        $(this).addClass('active');
                    	        e.preventDefault();
                    	    });
                    	    $(window).on('scroll',function(){
                                findPosition();
                            });
                            function findPosition(){
                                $('div .woruddlrkshfogksekghdghdghd').each(function(){
                                    if( ($(this).offset().top - $(window).scrollTop() ) <40){
                                        $('li.scrollS__ryu').removeClass('active');
                                        $('#ididid').find('[data-scroll="'+ $(this).attr('id') +'"]').addClass('active');
                                    }
                                });
                            }
                            findPosition();
                    	});
                     
                     let didScroll;
                     let lastScrollTop = 0;
                     let delta = 5;
                     let navbarHeight = $('body').outerHeight();
                     $(window).scroll(e=>{
                    	 didScroll = true;
                     });
                     setInterval(()=>{
                    	 if (didScroll) { 
                    		 hasScrolled(); 
                    		 didScroll = false; 
                    		 } 
                     }, 200);
                     function hasScrolled(){
		            	 var st = $(document).scrollTop(); 
		                 if(Math.abs(lastScrollTop - st) <= delta) return;
		                 (st > lastScrollTop && st > navbarHeight)?
		                		 $('#navc__st').addClass('nav-up').removeClass('nav-down') :
		                			 (st + $(window).height() < $(document).height())?
		                					 $('#navc__st').removeClass('nav-up').addClass(' nav-down'):"";
		                 lastScrollTop = st; 
                     }

                     return d;
              },
              ctner:()=>{
                     let d = $('<div>');
                     (jaekyung.main.smm()).appendTo(d);
                     (jaekyung.main.vst()).appendTo(d);
                     (jaekyung.main.sba()).appendTo(d);
                     (jaekyung.main.ctgr1()).appendTo(d);
                     (jaekyung.main.mbr()).appendTo(d);
                     (jaekyung.main.abba()).appendTo(d);
                     (jaekyung.main.vbt()).appendTo(d);
                     (jaekyung.main.cbg()).appendTo(d);
                     return d;
              },
              ftr:()=>{
                     let d = $('<div>').attr("id","ftr__st");
                     d.html('푸우우우터');
                     return d;
              },
              smm:()=>{
                let smm = $('<div />');
                let smma = $('<div />');
                let smmh = $('<div />');
                let smmc = $('<div />');
                let smmco = $('<div />');
                let smmct = $('<div />');
                smm.attr({style:"background-color: rgba(204, 82, 0, 0.25);"});
                $('<div />').attr({id:"smmryu",style:" position:relative; top:-50px"}).addClass("woruddlrkshfogksekghdghdghd").appendTo(smm);
                smma.addClass("container compogap__ryu").appendTo(smm);
                smmh.attr({id:"smmryu"}).addClass("txtcw_ryu text-center txtcw__ryu").append(
                             $('<h1 />').append($('<strong>').html("요약")),
                             $('<hr />').addClass('txthr10__ryu'),
                             $('<span aria-hidden="true" />').attr({style:"height:40px; width:40px"}).addClass('glyphicon glyphicon-certificate')
                ).appendTo(smma);
                smmc.attr({style:"margin-top:40px;"}).appendTo(smma);
                smmco.appendTo(smmc);
                smmco.attr({style:"display:flex"}).addClass("row-fluid").append(
                     $('<div />').attr({style:"border:1px solid;"}).addClass("col-sm-6 bgcw__ryu").append(
                           $('<img src="'+$.img()+'/jaekyung/1.PNG" />').addClass("img-responsive center-block")
                     ),
                     $('<div />').addClass("col-sm-6 pr0__ryu ml15__ryu").append(
                                  $('<div />').addClass("col-sm-12 pr0__ryu ").append(
                                  $('<div />').attr({style:"border:1px solid "}).addClass("col-sm-12 bgcw__ryu pa0__ryu").append(
                                                $('<img src="'+$.img()+'/jaekyung/2.PNG" />').addClass("img-responsive center-block")
                                  ),
                                  $('<div />').attr({style:"border:1px solid;margin-bottom:15px ;border-top:0px"}).addClass("col-sm-12 bgcw__ryu pa0__ryu").append(
                                                $('<div />').addClass("col-sm-2").append($('<span />').attr({style:"color:red"}).html("<h4><strong>TODAY</strong></h4>")),
                                                $('<div />').addClass("col-sm-3 ").html("<h5>게시글 조회수</h5>")
                                  )
                                  ),
                                  $('<div />').addClass("col-sm-12 pr0__ryu").append(
                                  $('<div />').attr({style:"border:1px solid"}).addClass("col-sm-12 bgcw__ryu").append(
                                                $('<img src="'+$.img()+'/jaekyung/3.PNG" />').addClass("img-responsive center-block")
                                  ),
                                  $('<div />').attr({style:"border:1px solid ;border-top:0px ;display:flex"}).addClass("col-sm-12 bgcw__ryu pa0__ryu mb0__ryu").append(
                                                $('<div />').addClass("col-sm-2").append($('<span />').attr({style:"color:red"}).html("<h4><strong>TODAY</strong></h4>")),
                                                $('<div />').addClass("col-sm-3  ").html("<h5>신규 가입자</h5>")
                                  ))
                     )
                );
                smmct.appendTo(smmc);
                smmct.attr({style:"display:flex"}).addClass("row-fluid margint20__ryu").append(
                     $('<div />').attr({style:"border:1px solid; margin-right:15px"}).addClass("col-sm-6 bgcw__ryu").append(
                                  $('<img src="'+$.img()+'/jaekyung/4.PNG" />').addClass("img-responsive center-block")
                     ),
                     $('<div />').addClass("col-sm-3").append(
                                  $('<div />').attr({style:"border:1px solid; "}).addClass("col-sm-12 bgcw__ryu").append(
                                                $('<img src="'+$.img()+'/jaekyung/5.PNG" />').addClass("img-responsive center-block")
                                  )
                     ),
                     $('<div />').addClass("col-sm-3 pr0__ryu").append(
                                  $('<div />').attr({style:"border:1px solid"}).addClass("col-sm-12 bgcw__ryu").append(
                                                $('<img src="'+$.img()+'/jaekyung/6.PNG" />').addClass("img-responsive center-block")
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
                vst.attr({style:"background-color: #FFFFFF"});
                $('<div />').attr({id:"vstryu",style:" position:relative; top:-50px"}).addClass("woruddlrkshfogksekghdghdghd").appendTo(vst);
                vsta.addClass("container compogap__ryu").appendTo(vst);
                $('<div />').append(
                             vsth.addClass("txtcw_ryu text-center").append(
                                    $('<h1 />').append($('<strong>').attr({style:"color:#4d4d4d;"}).html("방문자통계")),
                                    $('<hr />').addClass('txthr20__ryu'),
                                    $('<span aria-hidden="true" />').attr({style:"color:#4d4d4d;"}).addClass('glyphicon glyphicon-certificate')
                       )
                ).appendTo(vsta);
                vstc.attr({style:"margin-top:40px"}).appendTo(vsta);
                vstco.appendTo(vstc);
                vstco.addClass("row-fluid").append(
                             $('<div />').addClass("col-sm-12 btb1__ryu borderG__ryu").append(
                                         $('<img src="'+$.img()+'/jaekyung/7.PNG" />').addClass("img-responsive center-block margintb15__ryu")   
                             )                         
                );
                vstct.addClass("margint20__ryu").appendTo(vstc);
                let r ={list:['날짜','총 방문자','회원','비회원','남','여']};
                let rr =[{x1:'8월1일',x2:'651234명',x3:'6548명',x4:'321명',x5:'9412명',x6:'321명'},{x1:'8월2일',x2:'651234명',x3:'6548명',x4:'321명',x5:'9412명',x6:'321명'},{x1:'8월3일',x2:'651234명',x3:'6548명',x4:'321명',x5:'9412명',x6:'321명'},{x1:'8월2일',x2:'651234명',x3:'6548명',x4:'321명',x5:'9412명',x6:'321명'},{x1:'8월3일',x2:'651234명',x3:'6548명',x4:'321명',x5:'9412명',x6:'321명'}];
                let t = $('<table />');
                let th = $('<thead />');
                let tb = $('<tbody />');
                let tr = $('<tr />');
                let tp = $('<p />');
                vstct.addClass("row-fluid").append(
                             $('<div />').attr({style:" padding: 20px 40px 20px 40px ;border-top:0px "}).addClass("col-sm-12  btb1__ryu borderG__ryu").append(
                                           tp,
                                           t.attr({style:"border-top:1px solid; border-bottom:1px solid"}).addClass("table table-striped table-hover borderG__ryu")
                             )
                );
                tp.append(
                             $('<label />').html('<strong>상세데이터 열기 &nbsp;&nbsp;</strong> <div class="material-switch pull-right"><input id="vstDtSwitch" name="vstDtSwitch" type="checkbox"/><label for="vstDtSwitch" class="label-warning"></label></div>'
                                    )
                );
                th.appendTo(t);
                tr.appendTo(th);
                $.each(r.list,(i,v)=>{
                            $('<th />').addClass("text-center").html(v).appendTo(tr)
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
                let sba = $('<div />');
                let sbaa = $('<div />');
                let sbah = $('<div />');
                let sbac = $('<div />');
                let sbaco = $('<div />');
                let sbact = $('<div />');
                sba.attr({style:"background-color: rgba(204, 82, 0, 0.25);"});
                $('<div />').attr({id:"sbaryu",style:" position:relative; top:-50px"}).addClass("woruddlrkshfogksekghdghdghd").appendTo(sba);
                sbaa.addClass("container compogap__ryu").appendTo(sba);
                $('<div />').append(
                              sbah.attr({id:"sbaryu"}).addClass(" text-center txtcw__ryu").append(
                                    $('<h1 />').append($('<strong>').html("연령 별 매출 통계")),
                                    $('<hr />').addClass('txthr30__ryu'),
                                    $('<span aria-hidden="true" />').addClass('glyphicon glyphicon-certificate')
                       )
                ).appendTo(sbaa);
                sbac.attr({style:"margin-top:40px"}).appendTo(sbaa);
                sbaco.appendTo(sbac);
                sbaco.addClass("row-fluid").append(
                             $('<div />').addClass("col-sm-12 btb1__ryu borderG__ryu").append(
                                           $('<div />').attr({style:"padding-right:0px"}).addClass("col-sm-10").append($('<img />').attr('src',$.img()+'/jaekyung/8.PNG').attr({style:"margin-right:0px"}).addClass("img-responsive center-block margintb15__ryu")),
                                           $('<div />').attr({style:"padding-left:0px; margin-top:75px"}).addClass("col-sm-2").append($('<div />').append($('<img />').attr('src',$.img()+'/jaekyung/9.PNG').addClass('img-responsive center-block margintb15__ryu')))
                                                 
                             )                         
                );
                sbact.addClass("margint20__ryu").appendTo(sbac);
                let r ={list:['연령','총 판매량','총 매출','단위당 평균가']};
                let rr =[{x1:'20세 미만',x2:'651234명',x3:'6548명',x4:'321명'},{x1:'20-29세',x2:'651234명',x3:'6548명',x4:'321명'},{x1:'30-39세',x2:'651234명',x3:'6548명',x4:'321명'},{x1:'40-49세',x2:'651234명',x3:'6548명',x4:'321명'},{x1:'50-59세',x2:'651234명',x3:'6548명',x4:'321명'}];
                let t = $('<table />');
                let th = $('<thead />');
                let tb = $('<tbody />');
                let tr = $('<tr />');
                let tp = $('<p />');
                sbact.addClass("row-fluid").append(
                             $('<div />').attr({style:" padding: 20px 40px 20px 40px ;border-top:0px "}).addClass("col-sm-12  btb1__ryu borderG__ryu").append(
                                           tp,
                                           t.attr({style:"border-top:1px solid; border-bottom:1px solid"}).addClass("table table-striped table-hover borderG__ryu")
                             )
                );
                tp.append(
                             $('<label />').html('<strong>상세데이터 열기 &nbsp;&nbsp;</strong> <div class="material-switch pull-right"><input id="sbaDtSwitch" name="sbaDtSwitch" type="checkbox"/><label for="sbaDtSwitch" class="label-warning"></label></div>'
                                    )
                );
                th.appendTo(t);
                tr.appendTo(th);
                $.each(r.list,(i,v)=>{
                            $('<th />').addClass("text-center").html(v).appendTo(tr)
                });
                tb.appendTo(t);
                $(rr).each(function(i){
                       $('<tr />').addClass("text-center").append(
                                    $('<td />').attr('width','10%').html(this.x1),
                                    $('<td />').attr('width','20%').html(this.x2),
                                    $('<td />').attr('width','15%').html(this.x3),
                                    $('<td />').attr('width','15%').html(this.x4)
                       ).appendTo(tb);
                });
                return sba;
              },
              ctgr1:()=>{
                let ctgr1 = $('<div />');
                let ctgr1a = $('<div />');
                let ctgr1h = $('<div />');
                let ctgr1c = $('<div />');
                let ctgr1co = $('<div />');
                ctgr1.attr({style:"background-color: #FFFFFF"});
                $('<div />').attr({id:"ctgr1ryu",style:" position:relative; top:-50px"}).addClass("woruddlrkshfogksekghdghdghd").appendTo(ctgr1);
                ctgr1a.addClass("container compogap__ryu").appendTo(ctgr1);
                $('<div />').append(
                             ctgr1h.attr({id:"ctgr1ryu"}).addClass("text-center").append(
                                    $('<h1 />').append($('<strong>').attr({style:"color:#4d4d4d;"}).html("1차 카테고리 별 매출 통계")),
                                    $('<hr />').addClass('txthr45__ryu'),
                                    $('<span aria-hidden="true" />').attr({style:"color:#4d4d4d;"}).addClass('glyphicon glyphicon-certificate')
                       ).appendTo(ctgr1a)
                            
                ).appendTo(ctgr1a);
                ctgr1c.attr({style:"margin-top:40px"}).appendTo(ctgr1a);
                ctgr1co.appendTo(ctgr1c);
                ctgr1co.addClass("row-fluid").append(
                             $('<div />').addClass("col-sm-12 btb1__ryu borderG__ryu").append(
                                         $('<img src="'+$.img()+'/jaekyung/10.PNG" />').addClass("img-responsive center-block margintb15__ryu")   
                             )                         
                );
                return ctgr1;
              },
              ctgr2:()=>{//페이지 전체를 갈아끼울지 요소만 갈아끼울지 생각. 후자면 이 메소드 없애도 됨.
                let ctgr2 = $('<div />');
                let ctgr2a = $('<div />');
                let ctgr2h = $('<div />');
                let ctgr2c = $('<div />');
                let ctgr2co = $('<div />');
                ctgr2.attr({style:"background-color: #FFFFFF"});
                ctgr2a.addClass("container compogap__ryu").appendTo(ctgr2);
                $('<div />').append(
                             ctgr2h.addClass("text-center").append(
                                    $('<h1 />').append($('<strong>').attr({style:"color:#4d4d4d;"}).html("2차 카테고리 별 매출 통계")),
                                    $('<hr />').addClass('txthr45__ryu'),
                                    $('<span aria-hidden="true" />').attr({style:"color:#4d4d4d;"}).addClass('glyphicon glyphicon-certificate')
                       )
                ).appendTo(ctgr2a);
                ctgr2c.attr({style:"margin-top:40px"}).appendTo(ctgr2a);
                ctgr2co.appendTo(ctgr2c);
                ctgr2co.addClass("row-fluid").append(
                             $('<div />').addClass("col-sm-12 btb1__ryu borderG__ryu").append(
                                         $('<img src="'+$.img()+'/jaekyung/10.PNG" />').addClass("img-responsive center-block margintb15__ryu")   
                             )                         
                );
                return ctgr2;
              },
              mbr:()=>{
                let mbr = $('<div />');
                let mbra = $('<div />');
                let mbrh = $('<div />');
                let mbrc = $('<div />');
                let mbrco = $('<div />');
                let mbrct = $('<div />');
                mbr.attr({style:"background-color:rgba(204, 82, 0, 0.25)"});
                $('<div />').attr({id:"mbrryu",style:" position:relative; top:-50px"}).addClass("woruddlrkshfogksekghdghdghd").appendTo(mbr);
                mbra.addClass('container compogap__ryu').appendTo(mbr);
                $('<div />').append(     
                             mbrh.attr({id:"mbrryu"}).addClass("txtcw__ryu text-center").append(
                                           $('<h1 />').append($('<strong>').html("가입자 통계")),
                                           $('<hr />').addClass('txthr20__ryu'),
                                           $('<span aria-hidden="true" />').addClass('glyphicon glyphicon-certificate')
                             )
                ).appendTo(mbra)
                mbrc.appendTo(mbra);
                mbrco.attr({style:"display:flex"}).addClass("row-fluid ").appendTo(mbrc);
                $('<div />').addClass('col-sm-6').append(
                             $('<div />').attr({style:"border:1px solid"}).addClass('col-sm-12 bgcw__ryu').append(
                                           $('<img src="'+$.img()+'/jaekyung/11.PNG" />').addClass("img-responsive center-block ")
                             )
                ).appendTo(mbrco);
                $('<div />').addClass('col-sm-6').append(
                             $('<div />').attr({style:"border:1px solid"}).addClass('col-sm-12 bgcw__ryu').append(
                                           $('<img src="'+$.img()+'/jaekyung/12.PNG" />').addClass("img-responsive center-block ")
                             )
                ).appendTo(mbrco);
                mbrct.appendTo(mbrc);
                mbrct.addClass('row-fluid');
                mbrct.addClass("margint20__ryu").appendTo(mbrc);
                let r ={list:['순위','카테고리','총 매출액','총 판매량','매출 점유율']};
                let rr =[{x1:'1',x2:'651234명',x3:'6548명',x4:'321명', x5:'16.3%'},{x1:'2',x2:'651234명',x3:'6548명',x4:'321명', x5:'16.3%'},{x1:'3',x2:'651234명',x3:'6548명',x4:'321명', x5:'16.3%'},{x1:'4',x2:'651234명',x3:'6548명',x4:'321명', x5:'16.3%'},{x1:'5',x2:'651234명',x3:'6548명',x4:'321명', x5:'16.3%'}];
                let t = $('<table />');
                let th = $('<thead />');
                let tb = $('<tbody />');
                let tr = $('<tr />');
                let tp = $('<p />');
                mbrct.addClass("row-fluid").append(
                             $('<div />').attr({style:" padding: 20px 40px 20px 40px"}).addClass("col-sm-12  btb1__ryu borderG__ryu margint20__ryu").append(
                                           tp,
                                           t.attr({style:"border-top:1px solid; border-bottom:1px solid"}).addClass("table table-striped table-hover borderG__ryu")
                             )
                );
                tp.append(
                             $('<label />').html('<strong>상세데이터 열기 &nbsp;&nbsp;</strong> <div class="material-switch pull-right"><input id="mbrDtSwitch" name="mbrDtSwitch" type="checkbox"/><label for="mbrDtSwitch" class="label-warning"></label></div>'
                                    )
                );
                th.appendTo(t);
                tr.appendTo(th);
                $.each(r.list,(i,v)=>{
                            $('<th />').addClass("text-center").html(v).appendTo(tr)
                });
                tb.appendTo(t);
                $(rr).each(function(i){
                       $('<tr />').addClass("text-center").append(
                                    $('<td />').attr('width','10%').html(this.x1),
                                    $('<td />').attr('width','25%').html(this.x2),
                                    $('<td />').attr('width','30%').html(this.x3),
                                    $('<td />').attr('width','20%').html(this.x4),
                                    $('<td />').attr('width','15%').html(this.x5)
                       ).appendTo(tb);
                });
                return mbr;
              },
              abba:()=>{
                let abba = $('<div />');
                let abbaa = $('<div />');
                let abbah = $('<div />');
                let abbac = $('<div />');
                let abbaco = $('<div />');
                abba.attr({style:"background-color: #FFFFFF"});
                $('<div />').attr({id:"abbaryu",style:" position:relative; top:-50px"}).addClass("woruddlrkshfogksekghdghdghd").appendTo(abba);
                abbaa.addClass("container compogap__ryu").appendTo(abba);
                $('<div />').append(
                             abbah.attr({id:"abbaryu"}).addClass("text-center").append(
                                    $('<h1 />').append($('<strong>').attr({style:"color:#4d4d4d;"}).html("연령 대비 평균 구매액 통계")),
                                    $('<hr />').addClass('txthr45__ryu'),
                                    $('<span aria-hidden="true" />').attr({style:"color:#4d4d4d;"}).addClass('glyphicon glyphicon-certificate')
                       )
                ).appendTo(abbaa);
                abbac.attr({style:"margin-top:40px"}).appendTo(abbaa);
                abbaco.appendTo(abbac);
                abbaco.addClass("row-fluid").append(
                             $('<div />').addClass("col-sm-12 btb1__ryu borderG__ryu").append(
                                         $('<img src="'+$.img()+'/jaekyung/13.PNG" />').addClass("img-responsive center-block margintb15__ryu")   
                             )                         
                );
                return abba;
              },
              vbt:()=>{
                let vbt = $('<div />');
                let vbta = $('<div />');
                let vbth = $('<div />');
                let vbtc = $('<div />');
                let vbtco = $('<div />');
                let vbtct = $('<div />');
                vbt.attr({style:"background-color:rgba(204, 82, 0, 0.25)"});
                $('<div />').attr({id:"vbtryu",style:" position:relative; top:-50px"}).addClass("woruddlrkshfogksekghdghdghd").appendTo(vbt);
                vbta.addClass('container compogap__ryu').appendTo(vbt);
                $('<div />').append(     
                             vbth.addClass("txtcw__ryu text-center").append(
                                           $('<h1 />').append($('<strong>').html("시간 별 방문자 통계")),
                                           $('<hr />').addClass('txthr35__ryu'),
                                           $('<span aria-hidden="true" />').addClass('glyphicon glyphicon-certificate')
                             )
                ).appendTo(vbta)
                vbtc.appendTo(vbta);
                vbtco.addClass("row-fluid btb1__ryu").appendTo(vbtc);
                       $('<div />').attr({style:"border:1px solid"}).addClass('col-sm-12 bgcw__ryu').append(
                                    $('<img src="'+$.img()+'/jaekyung/14.PNG" />').addClass("img-responsive center-block ")
                ).appendTo(vbtco);
                vbtct.appendTo(vbtc);
                vbtct.addClass("margint20__ryu").appendTo(vbtc);
                let r ={list:['시간','총 방문자',' 남성 방문자 ',' 여성 방문자 ','성비']};
                let rr =[{x1:'0시',x2:'10029 명',x3:'3742 명',x4:'6387 명', x5:'37% : 63%'},{x1:'1시',x2:'651234명',x3:'6548명',x4:'321명', x5:'16.3%'},{x1:'2시',x2:'651234명',x3:'6548명',x4:'321명', x5:'16.3%'},{x1:'3시',x2:'651234명',x3:'6548명',x4:'321명', x5:'16.3%'},{x1:'4시',x2:'651234명',x3:'6548명',x4:'321명', x5:'16.3%'}];
                let t = $('<table />');
                let th = $('<thead />');
                let tb = $('<tbody />');
                let tr = $('<tr />');
                let tp = $('<p />');
                vbtct.addClass("row-fluid").append(
                             $('<div />').attr({style:" padding: 20px 40px 20px 40px"})
                                  .addClass("col-sm-12  btb1__ryu borderG__ryu margint20__ryu").append(
                                           tp,
                                           t.attr({style:"border-top:1px solid; border-bottom:1px solid"})
                                                .addClass("table table-striped table-hover borderG__ryu")
                             )
                );
                tp.append(
                             $('<label />').html('<strong>상세데이터 열기 &nbsp;&nbsp;</strong> <div class="material-switch pull-right"><input id="vbtDtSwitch" name="vbtDtSwitch" type="checkbox"/><label for="vbtDtSwitch" class="label-warning"></label></div>'
                                    )
                );
                th.appendTo(t);
                tr.appendTo(th);
                $.each(r.list,(i,v)=>{
                            $('<th />').addClass("text-center").html(v).appendTo(tr)
                });
                tb.appendTo(t);
                $(rr).each(function(i){
                       $('<tr />').addClass("text-center").append(
                                    $('<td />').attr('width','10%').html(this.x1),
                                    $('<td />').attr('width','30%').html(this.x2),
                                    $('<td />').attr('width','20%').html(this.x3),
                                    $('<td />').attr('width','20%').html(this.x4),
                                    $('<td />').attr('width','20%').html(this.x5)
                       ).appendTo(tb);
                });
                return vbt;
              },
              cbg:()=>{
                let cbg = $('<div />');
                let cbga = $('<div />');
                let cbgh = $('<div />');
                let cbgc = $('<div />');
                let cbgco = $('<div />');
                cbg.attr({style:"background-color: #FFFFFF"});
                $('<div />').attr({id:"cbgryu",style:" position:relative; top:-50px"}).addClass("woruddlrkshfogksekghdghdghd").appendTo(cbg);
                cbga.addClass("container compogap__ryu").appendTo(cbg);
                $('<div />').append(
                             cbgh.attr({id:"cbgryu"}).addClass("text-center").append(
                                    $('<h1 />').append($('<strong>').attr({style:"color:#4d4d4d;"}).html("성별 카테고리 통계")),
                                    $('<hr />').addClass('txthr35__ryu'),
                                    $('<span aria-hidden="true" />').attr({style:"color:#4d4d4d;"}).addClass('glyphicon glyphicon-certificate')
                       )
                ).appendTo(cbga);
                cbgc.attr({style:"margin-top:40px"}).appendTo(cbga);
                cbgco.appendTo(cbgc);
                cbgco.addClass("row-fluid");
                       $('<div />').addClass("col-sm-7 btb1__ryu borderG__ryu").append(
                                  $('<img src="'+$.img()+'/jaekyung/13.PNG" />').addClass("img-responsive center-block margintb15__ryu")   
                       ).appendTo(cbgco);
                       $('<div />').addClass("col-sm-4 col-sm-offset-1 btb1__ryu borderG__ryu").append(
                                    $('<img src="'+$.img()+'/jaekyung/13.PNG" />').addClass("img-responsive center-block margintb15__ryu")   
                       ).appendTo(cbgco);
                return cbg;
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