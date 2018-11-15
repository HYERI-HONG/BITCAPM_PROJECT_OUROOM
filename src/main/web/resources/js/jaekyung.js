"use strict";
var jaekyung = jaekyung || {};
jaekyung =(()=>{
       var init=()=>{
              jaekyung.router.init();
       };
       return {init:init};
})();
jaekyung.main = (()=>{
	var init =()=>{
		onCreate();
	};
	var onCreate =()=>{
		setContentView();
	};
	var setContentView =()=>{
	      jaekyung.service.mp();
	};
	return{init:init};
})();
jaekyung.service={
              mp:()=>{
                     $('#content').empty();     
                     (jaekyung.service.nav()).appendTo($('#content'));
                     (jaekyung.service.ctner()).appendTo($('#content'));
                     jaekyung.chart.smm(); 
                     jaekyung.chart.sba(); 
                     jaekyung.chart.wrdcld();
                     jaekyung.chart.ctgr1();
                     jaekyung.chart.vst(); 
                     jaekyung.chart.mbr();
                     jaekyung.chart.abba();
              },
              nav:()=>{
            	  	 let d=$('<article />');
                     let u=$('<ul />');
                     let ip=[{lst:'요약',id:'smmryu'},{lst:'연령별',id:'sbaryu'},{lst:'해시태그',id:'vbtryu'},{lst:'카테고리별',id:'ctgr1ryu'},{lst:'방문자',id:'vstryu'},{lst:'가입자',id:'mbrryu'},{lst:'구매액',id:'abbaryu'}];
                     d.addClass("container");
                     $('<nav />').attr({id:"navc__st",style:"position: fixed; max-width:1140px"})
                     	.append(
                     			$('<div />').addClass('navbar-header')
                     				.append(
                                        $('<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" />')
                     				),
                                 u.attr({id:"nav__u__ryu"}).addClass("nav nav-pills nav-justified ")
                     	).addClass("navbar navbar-default").appendTo(d);
                     $(ip).each(function(i){
                           $('<li role="presentation" data-scroll="'+this.id+'"/>').attr({style:"padding-top:7px"}).addClass("scrollS__ryu")
                           	.append(
                           		$('<a href="#'+this.id+'"/>').attr({style:"color:#262626"}).html(this.lst)
                           	).appendTo(u);
                     });
                     let link = $('li.scrollS__ryu a');
            	     link.click(e=>{
            	         e.preventDefault();
            	         let target = $($(this).attr('href')); 
            	         $('html, body').animate({
            	             scrollTop: target.offset().top
            	         },800);
            	         $(this).addClass('active');
            	     });
            	     $(window).scroll(()=>{
                         findPosition();
                     });
                     function findPosition(){
                         $('div .scrollsd_ryu').each(function(){
                             if( ($(this).offset().top - $(window).scrollTop())<600){
                                 $('li.scrollS__ryu').removeClass('active');
                                 $('#nav__u__ryu').find('[data-scroll="'+ $(this).attr('id') +'"]').addClass('active');
                             }
                         });
                     }
                     findPosition();
                     let didScroll,lastScrollTop = 0,delta = 5;
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
                     let d = $('<article />');
                     (jaekyung.service.smm()).appendTo(d);
                     (jaekyung.service.sba()).appendTo(d);
                     (jaekyung.service.vbt()).appendTo(d);
                     (jaekyung.service.ctgr1()).appendTo(d);
                     (jaekyung.service.vst()).appendTo(d);
                     (jaekyung.service.mbr()).appendTo(d);
                     (jaekyung.service.abba()).appendTo(d);
                     return d;
              },
              smm:()=>{
                let smm = $('<section />');
                let smma = $('<div />');
                let smmh = $('<div />');
                let smmc = $('<div />');
                let smmco = $('<div />');
                let smmct = $('<div />');
                smm;
                $('<div />').attr({id:"smmryu",style:" position:relative; top:-50px"}).addClass("scrollsd_ryu").appendTo(smm);
                smma.addClass("container compogap__ryu").appendTo(smm);
                smmh.attr({id:"smmryu"}).addClass("txtcw_ryu text-center txtcw__ryu")
                	.append(
                             $('<h1 />')
                             	.append(
                             		$('<strong>').addClass("ganjitxt_4d4d4d__ryu").html("요약")
                             	),
                             $('<hr />').attr({style:'color:#8c8c8c'}).addClass('txthr10__ryu'),
                             $('<span aria-hidden="true" />').attr({style:"height:40px; width:40px"}).addClass('glyphicon glyphicon-certificate glyalone__ryu')
                	).appendTo(smma);
                smmc.attr({style:"margin-top:40px;"}).appendTo(smma);
                smmco.attr({style:"display:flex"}).addClass("row-fluid")
                	.append(
                     $('<div />').attr({style:"padding:0px",id:"smm_v_ld"}).addClass("col-lg-8 col-md-12 bgcw__ryu teduritl__ryu")
                     	.append(
                    		 $('<div />').attr({style:"margin:10px 0px 10px 20px; width:550px",id:"smm_v_l_t"}).addClass("text-center col-md-12 bgcw__ryu pa0__ryu"),
                             $('<div />').attr({style:"border:1px solid ;",id:"smm_v_l"}).addClass("col-md-12 bgcw__ryu pa0__ryu borderG__ryu")
                     	),
                     $('<div />').addClass("col-lg-4 col-sm-12 pr0__ryu ml15__ryu ")
                     	.append(
                                  $('<div />').attr({style:"padding-left:0px"}).addClass("col-md-12 pr0__ryu ")
	                                  	.append(
	                                	   $('<div />').attr({style:" display:flex",id:"smm_np_h"}).addClass("col-md-12 bgcw__ryu pa0__ryu teduritl__ryu"),
		                                   $('<div />').attr({style:"border-left:1px solid gray;" , id:"smm_np_c"}).addClass("col-md-12 bgcw__ryu pa0__ryu "),
		                                   $('<div />').attr({style:"border-left:1px solid gray; margin-bottom:15px ; display:flex",id:"smm_np_f"}).addClass("col-md-12 bgcw__ryu pa0__ryu ")
	                                  	),
                                  $('<div />').attr({id : "smm_nj",style:"padding-left:0px"}).addClass("col-md-12 pr0__ryu ")
                                  		.append(
	                            		   $('<div />').attr({style:"display:flex",id:"smm_nj_h"}).addClass("col-md-12 bgcw__ryu pa0__ryu teduritl__ryu"),
			                               $('<div />').attr({style:"padding-right:0px; padding-left:0px", id:"smm_nj_c"}).addClass("col-md-12 bgcw__ryu teduril__ryu"),
			                               $('<div />').attr({id:"smm_nj_f"}).addClass("col-md-12 bgcw__ryu pa0__ryu mb0__ryu teduril__ryu ")
	                                  	)
                     	)
                	).appendTo(smmc);;
                smmct.appendTo(smmc);
                smmct.attr({style:"display:flex"}).addClass("row-fluid margint20__ryu")
                	.append(
	                     $('<div />').attr({style:"margin-right:15px",id:"smm_v_c"}).addClass("col-md-5 bgcw__ryu teduritl__ryu")
	                     ,
	                     $('<div />').addClass("col-md-4").attr({style:"padding-left:0px"})
	                     	.append(
	                    		 $('<div />').attr({id:"smmtable"}).addClass("col-md-12 bgcw__ryu text-center teduritl__ryu ")
	                     	),
	                     $('<div />').attr({style:"display:flex",id:"smm_b_c"}).addClass("col-md-3 pr0__ryu borderG__ryu teduritl__ryu")
	                     	.append(
	                                  $('<div />').attr({id:"smm_v_d"}).addClass("col-md-12 bgcw__ryu")
	                                  
	                     	)
                	);
                return smm;
              },
              vst:()=>{
                let vst = $('<section />');
                let vsta = $('<div />');
                let vsth = $('<div />');
                let vstc = $('<div />');
                let vstco = $('<div />');
                let vstct = $('<div />');
                vst.attr({style:"background-color: #FFFFFF"});
                $('<div />').attr({id:"vstryu",style:" position:relative; top:-50px"}).addClass("scrollsd_ryu")
                	.appendTo(vst);
                vsta.addClass("container compogap__ryu").appendTo(vst);
                $('<div />')
                	.append(
                           vsth.addClass("text-center").append(
                                    $('<h1 />')
                                    	.append(
                                    		$('<strong>').addClass("ganjitxt_4d4d4d__ryu").html("방문자통계")
                                    	),
                                    $('<hr />').addClass('txthr20__ryu'),
                                    $('<span aria-hidden="true" />').attr({style:"color:#4d4d4d;"}).addClass('glyphicon glyphicon-certificate glyalone__ryu')
	                       )
	                ).appendTo(vsta);
                vstc.attr({style:"margin-top:40px"}).appendTo(vsta);
                vstco.appendTo(vstc);
                vstco.addClass("row-fluid")
                	.append(
                             $('<div />').attr({id:'vst_c_a', style:'height:450px;box-shadow: 6px 0px #8c8c8c;'}).addClass("col-md-12  teduritl2__ryu ")                     
                	);
                vstct.addClass("margint20__ryu").appendTo(vstc);
                vstct.addClass("row-fluid")
                	.append(
                             $('<div />').attr({style:" padding: 20px 40px 20px 40px ;" , id:"vst_t"}).addClass("col-md-12 teduril2__ryu bshadow66__ryu ")
                	);
                return vst;
              },
              sba:()=>{
                let sba = $('<section />');
                let sbaa = $('<div />');
                let sbah = $('<div />');
                let sbac = $('<div />');
                let sbaco = $('<div />');
                let sbact = $('<div />');
                sba.attr({style:"background-color: #8c8c8c3b;"});
                $('<div />').attr({id:"sbaryu",style:" position:relative; top:-50px"}).addClass("scrollsd_ryu")
                	.appendTo(sba);
                sbaa.addClass("container compogap__ryu").appendTo(sba);
                $('<div />')
                	.append(
                          sbah.attr({id:"sbaryu"}).addClass(" text-center")
                          	.append(
                                $('<h1 />')
                                	.append(
                                		$('<strong>').addClass("ganjitxt__ryu").html("연령 별 매출 통계")
                                	),
                                $('<hr />').addClass('txthr30__ryu'),
                                $('<span aria-hidden="true" />').addClass('glyphicon glyphicon-certificate glyalone__ryu')
                          	)
	                ).appendTo(sbaa);
                sbac.attr({style:"margin-top:40px"}).appendTo(sbaa);
                sbaco.appendTo(sbac);
                sbaco.addClass("row-fluid")
                	.append(
                         $('<div />').addClass("col-md-12  borderG__ryu pdrl0__ryu")
                         	.append(
                               $('<div />').attr({style:'height:450px; background-color:white; ',id:"sba__cc"}).addClass("col-md-12  teduritl__ryu bshadow66__ryu")
                         	)                         
                	);
                sbact.addClass("margint20__ryu").appendTo(sbac);
                sbact.addClass("row-fluid")
                	.append(
                        $('<div />').attr({style:" padding: 20px 40px 20px 40px ;background-color:white;",id:"sba_t"}).addClass("col-md-12  btb1__ryu teduritl__ryu bshadow66__ryu")
                	);
                return sba;
              },
              ctgr1:()=>{
                let ctgr1 = $('<section />');
                let ctgr1a = $('<div />');
                let ctgr1h = $('<div />');
                let ctgr1c = $('<div />');
                let ctgr1co = $('<div />');
                ctgr1.attr({style:"background-color: #8c8c8c3b;"});
                $('<div />').attr({id:"ctgr1ryu",style:" position:relative; top:-50px"}).addClass("scrollsd_ryu")
                	.appendTo(ctgr1);
                ctgr1a.addClass("container compogap__ryu").appendTo(ctgr1);
                $('<div />')
                	.append(
                      ctgr1h.attr({id:"ctgr1ryu"}).addClass("text-center")
                      	.append(
                             $('<h1 />')
                             	.append(
                             		$('<strong>').addClass("ganjitxt_4d4d4d__ryu").html("카테고리  통계")
                     			),
                             $('<hr />').addClass('txthr45__ryu'),
                             $('<span aria-hidden="true" />').attr({style:"color:#4d4d4d;"}).addClass('glyphicon glyphicon-certificate glyalone__ryu')
                     	).appendTo(ctgr1a)
                	).appendTo(ctgr1a);
                ctgr1c.attr({style:"margin-top:40px"}).appendTo(ctgr1a);
                ctgr1co.appendTo(ctgr1c);
                ctgr1co.addClass("row-fluid")
                	.append(
                             $('<div />').attr({id:"ctgr1__tc",style:"width:1130px ; height:560px; background-color:white; padding:20px ;"}).addClass("col-md-12 btb1__ryu teduritl__ryu bshadow66__ryu")
                	);
                return ctgr1;
              },
              mbr:()=>{
                let mbr = $('<section />');
                let mbra = $('<div />');
                let mbrh = $('<div />');
                let mbrc = $('<div />');
                let mbrco = $('<div />');
                let mbrct = $('<div />');
                mbr.attr({style:"background-color: #8c8c8c3b;"});
                $('<div />').attr({id:"mbrryu",style:" position:relative; top:-50px"}).addClass("scrollsd_ryu")
                	.appendTo(mbr);
                mbra.addClass('container compogap__ryu').appendTo(mbr);
                $('<div />')
                	.append(     
                         mbrh.attr({id:"mbrryuh",style:"margin-bottom:40px"}).addClass(" text-center")
                         	.append(
                                   $('<h1 />')
                                   	 .append(
                                   		$('<strong>').addClass("ganjitxt__ryu").html("가입자 통계")
                                   	 ),
                                   $('<hr />').addClass('txthr20__ryu'),
                                   $('<span aria-hidden="true" />').addClass('glyphicon glyphicon-certificate glyalone__ryu')
                         	)
                	).appendTo(mbra)
                mbrc.appendTo(mbra);
                mbrco.attr({style:"display:flex"}).addClass("row-fluid ")
                	.appendTo(mbrc);
                $('<div />').addClass('col-md-6')
                	.append(
                         $('<div />').attr({style:" height:480px",id:"mbr__pc"}).addClass('col-md-12 bgcw__ryu teduritl__ryu')
                	).appendTo(mbrco);
                $('<div />').addClass('col-md-6')
                	.append(
                         $('<div />').attr({style:" height:480px",id:"mbr__bc"}).addClass('col-md-12 bgcw__ryu teduritl__ryu')
                	).appendTo(mbrco);
                mbrct.appendTo(mbrc);
                mbrct.addClass('row-fluid');
                mbrct.addClass("margint20__ryu").appendTo(mbrc);
                return mbr;
              },
              abba:()=>{
                let abba = $('<section />');
                let abbaa = $('<div />');
                let abbah = $('<div />');
                let abbac = $('<div />');
                let abbaco = $('<div />');
                abba.attr({style:"background-color: #FFFFFF"});
                $('<div />').attr({id:"abbaryu",style:" position:relative; top:-50px"}).addClass("scrollsd_ryu").appendTo(abba);
                abbaa.addClass("container compogap__ryu").appendTo(abba);
                $('<div />')
                	.append(
		                 abbah.attr({id:"abbaryu"}).addClass("text-center")
		                 	.append(
		                        $('<h1 />').append($('<strong>').addClass("ganjitxt_4d4d4d__ryu").html("연령 대비 평균 구매액 통계")),
		                        $('<hr />').addClass('txthr45__ryu'),
		                        $('<span aria-hidden="true" />').attr({style:"color:#4d4d4d;"}).addClass('glyphicon glyphicon-certificate glyalone__ryu')
		                    )
                	).appendTo(abbaa);
                abbac.attr({style:"margin-top:40px"}).appendTo(abbaa);
                abbaco.appendTo(abbac);
                abbaco.addClass("row-fluid")
                	.append(
                         $('<div />').attr({id:"abba__sc",style:"height:500px"}).addClass("col-md-12 btb1__ryu teduritl2__ryu  bshadow66__ryu")                   
                	);
                return abba;
              },
              vbt:()=>{
                let vbt = $('<section />');
                let vbta = $('<div />');
                let vbth = $('<div />');
                let vbtc = $('<div />');
                let vbtco = $('<div />');
                let vbtct = $('<div />');
                $('<div />').attr({id:"vbtryu",style:" position:relative; top:-50px"}).addClass("scrollsd_ryu").appendTo(vbt);
                vbta.addClass('container compogap__ryu').appendTo(vbt);
                $('<div />')
                	.append(     
                         vbth.attr({style:"color: #4d4d4d;"}).addClass(" text-center")
                         	.append(
                               $('<h1 />').append($('<strong>').addClass("ganjitxt__ryu").html("해시태그 워드클라우드")),
                               $('<hr />').addClass('txthr35__ryu'),
                               $('<span aria-hidden="true" />').addClass('glyphicon glyphicon-certificate glyalone__ryu glyalone__ryu')
                         	)
                	).appendTo(vbta)
                vbtc.appendTo(vbta);
                vbtco.addClass("row-fluid").appendTo(vbtc);
                       $('<div />').attr({id:"vbt__wc"}).addClass('col-md-12 bgcw__ryu teduritl2__ryu').appendTo(vbtco);
                vbtct.appendTo(vbtc);
                vbtct.addClass("margint20__ryu").appendTo(vbtc);
                return vbt;
              }
}
jaekyung.chart={
		reLc:x=>{
			google.charts.load('current', {packages: ['corechart', 'line']});
			google.charts.setOnLoadCallback(()=>{
				let data = new google.visualization.DataTable();
				data.addColumn('string', '날짜');
				data.addColumn('number', '방문자수');
				$.each(x.smmvstlc,(i,j)=>{
		    	  data.addRow(
		    		  [j.visitDate.split('-')[1]+'월 '+j.visitDate.split('-')[2]+'일', j.count]
		    	  );
		      });
		      let options = {
		    	legend:{
		    		position:'none'
		    	},
		        vAxis: {
		        	title: '방문자 수'
		        	,viewWindow: {min:0}
		    	},
		        backgroundColor: '#FFFFFF',
		        chartArea:{
		        	top:30,width:"70%"
		        }
		      };
		      var chart = new google.visualization.LineChart(document.getElementById('smm_v_l'));
		      chart.draw(data, options);
			});
				
		},
		smm : () =>{
			let today = new Date();
			let dd = today.getDate();
			let ddn = dd-7;
			let mm = today.getMonth()+1; // 10월이라 +1인데 11월 가상 설정
			let mmn = mm;
			let yyyy = today.getFullYear();
			dd<10?dd='0'+dd:dd;
			(ddn<10&&ddn>0)?ddn='0'+ddn:ddn;
			if(ddn<0){
				if(mm===11){
					mmn=10;
				}
				ddn= ddn+32;
			}
			
			mm<10?mm='0'+mm:mm; 
			mmn<10?mmn='0'+mmn:mmn; 
			today = yyyy+'년 '+mm+'월 '+dd+"일";
			let beforeweek = yyyy+'년 '+mmn+'월 '+ddn+"일";
			$.getJSON($.context()+'/stats/smmChart/'+today+"/"+beforeweek,r=>{
				// smm line
				jaekyung.chart.reLc(r);
				$('<input />').attr({type:"text",id:"smm_v_l_t_date",style:"width:160px; font-size:15px; margin-right:6px; text-align:center"})
					.appendTo($('#smm_v_l_t'));
				$('<span />').attr({style:'font-size:20px'}).html('<b> ~ </b>')
					.appendTo($('#smm_v_l_t'));
				$('<input />').attr({type:"text",id:"smm_v_l_t_date2",style:"width:160px; font-size:15px; margin-right:6px;  text-align:center"})
					.appendTo($('#smm_v_l_t'));
				$('<span />').attr({style:'font-size:20px'}).html('<b> 의 방문자 통계 </b>')
					.appendTo($('#smm_v_l_t'));
				$(()=> {
		              $.datepicker.setDefaults($.datepicker.regional['ko']); 
		              $('#smm_v_l_t_date').datepicker({
		            	  dateFormat: 'yy년 mm월 dd일',
		            	  minDate: new Date('2018-11-01'),
		            	  maxDate: new Date('2018-11-15'),
		            	  onClose: selectedDate=>{
		            		  $("#smm_v_l_t_date2").datepicker( "option", "minDate", selectedDate );
		            	  }

		              }).datepicker('setDate', $.datepicker.parseDate('yy년 mm월 dd일', beforeweek));
		              $('#smm_v_l_t_date2').datepicker({
		            	  dateFormat: 'yy년 mm월 dd일', 
		            	  minDate: $('#smm_v_l_t_date').val(),
            		      maxDate: new Date('2018-11-15'),
            		      onClose: selectedDate=>{
		            		  $("#smm_v_l_t_date").datepicker( "option", "maxDate", selectedDate );
		            	  }
		              }).datepicker('setDate', $.datepicker.parseDate('yy년 mm월 dd일', today));
		        });
				$('#smm_v_l_t_date2').val(new Date(today));
				$('#smm_v_l_t_date').change(e=>{
					$.getJSON($.context()+'/stats/smmvstlc/'+$('#smm_v_l_t_date').val()+'/'+$('#smm_v_l_t_date2').val(),rr=>{
						jaekyung.chart.reLc(rr);
					});
				});
				$('#smm_v_l_t_date2').change(e=>{
					$.getJSON($.context()+'/stats/smmvstlc/'+$('#smm_v_l_t_date').val()+'/'+$('#smm_v_l_t_date2').val(),rr=>{
						jaekyung.chart.reLc(rr);
					});
				});
				// smm column
				google.charts.load('current', {packages: ['corechart', 'bar']});
				google.charts.setOnLoadCallback(()=>{
				      let data = new google.visualization.DataTable();
				      data.addColumn('string', '날짜');
				      data.addColumn('number', '매출액');
				      $.each(r.smmvstcc,(i,j)=>{
				    	  data.addRow([j.smmDate.split('-')[1]+'월 '+j.smmDate.split('-')[2]+'일', j.smmSale]);
				      });
				      var options = {
				        title: '지난 7일 매출 통계',
				        legend:{
				        	position:'none'
				        },
				        vAxis: {
				          title: '매출액(단위: 원)',
				          viewWindow: {min:50000000},
				          chartArea:{top:30,width:"90%"}
				        }
				      };
				      var chart = new google.visualization.ColumnChart(
				        document.getElementById('smm_v_c')
				      );
				      chart.draw(data, options);
				    });
				// smm donut
				google.charts.load("current", {packages:["corechart"]});
			    google.charts.setOnLoadCallback(()=>{
			        var data = new google.visualization.DataTable();
			        data.addColumn('string','성별');
			        data.addColumn('number','가입자수');
			        $.each(r.genderRatio,(i,j)=>{
				    	  data.addRow([j.genderRatioG, j.genderRatioC]);
				      });
			        
			        var options = {
			          title: '가입자 성비',
			          titleTextStyle:{
			        	  fontSize: 15,
			        	  bold:true
			          },
			          legend:{
			        	  position:'bottom'
			          },
			          chartArea:{
			        	  width:'70%',
			        	  height:'70%'
			          },
			          pieHole: 0.4
			        };
			        var chart = new google.visualization.PieChart(document.getElementById('smm_v_d'));
			        chart.draw(data, options);
			    });
			    let smmtd = $('<div />');
				let t = $('<table />');
				let th = $('<thead />');
				let tb = $('<tbody />');
				let tr = $('<tr />');
				smmtd.html("<h4><strong>오늘 상위 매출 카테고리</strong></h4>").appendTo($('#smmtable'));
				t.attr({style:"border-top:1px solid; border-bottom:1px solid", id:"smmt"})
					.addClass("table table-striped table-hover borderG__ryu").appendTo(smmtd);
				th.appendTo(t);
				tb.appendTo(t);
		        tr.appendTo(th);
				$('<th />').attr({style:'width:10%'}).html('<b>순위</b>').appendTo(tr);
				$('<th />').attr({style:'width:20%'}).html("<b>카테고리</b>").appendTo(tr);
				$('<th />').attr({style:'width:15%'}).html("<b>판매수</b>").appendTo(tr); 
				$('<th />').attr({style:'width:15% pon'}).html("<b>전체대비비율</b>").appendTo(tr);
		        $(r.bestSellerPerDay).each(function(i){
		               $('<tr />').attr({style:'font-size:12px'}).addClass("text-center")
		               		.append(
		                            $('<td />').attr({style:'width:10%'})
		                            	.html(i+1),
		                            $('<td />').attr('width','20%')
		                            	.html("<b>"+this.categorysOfBestSeller+"</b>"),
		                            $('<td />').attr('width','15%')
		                            	.html(this.sumOfBestSeller+" 개"),
		                            $('<td />').attr('width','20%')
		                            	.html((this.sumOfBestSeller/r.totalSalePerDay[0].totalSalePerDay*100).toFixed(1)+"%")
		               		).appendTo(tb);
		        });
		        let smmtnpd = $('<div />');
				let tnp = $('<table />');
				let tbnp = $('<tbody />');
				let trnp = $('<tr />');
				smmtnpd.appendTo($('#smm_np_c'));
				tnp.attr({style:"border-top:1px solid; margin-bottom:0px!important;"}).addClass("table table-striped table-hover borderG__ryu")
					.appendTo(smmtnpd);
				tbnp.appendTo(tnp);
				trnp.append(
						 $('<td />').attr({style:'font-size:35px ; width:60%; text-align:right',id:"smm_totalPostPerDay"})
						 	.html("<b>"+r.totalPostPerDay[0].postCount+"</b>"),
						 $('<td />').attr({style:'font-size:25px; width:40%; padding-left:0px; padding-top:20px; padding-bottom:0px'}).html("회")
				).appendTo(tbnp);
				
				$('<table />').attr({id:'smm_np_h_table',style:" margin:6px 6px 6px 6px ; margin-left:40px;"})
					.appendTo($('#smm_np_h'));
				$('<tr />').attr({id:'smm_np_h_tr'}).appendTo($('#smm_np_h_table'));
				$('<td />').attr({id:'smm_np_h_tr_td'}).prependTo($('#smm_np_h_tr'));
				$('<input />').attr({type:"text",id:"smm_np_date",style:"width:160px; font-size:20px; margin-right:6px"})
					.appendTo($('#smm_np_h_tr_td'));
				$('<td />').attr({style:"font-size:16px"}).html('<b>의 총 조회수</b>')
					.appendTo($('#smm_np_h_tr'));
			
	            $.datepicker.setDefaults($.datepicker.regional['ko']); 
	            $('#smm_np_date').datepicker({
	          	  dateFormat: 'yy년 mm월 dd일',
	          	  minDate: new Date('2018-11-01'),
	          	  maxDate: new Date('2018-11-15')
	            });
	            $('#smm_np_date').datepicker('setDate', $.datepicker.parseDate('yy년 mm월 dd일', today)); //여기 확인 ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ
				$('#smm_np_date').change(e=>{
						$.getJSON($.context()+'/stats/smmPost/'+$('#smm_np_date').val(),rr=>{
							$('#smm_totalPostPerDay')
								.html("<b>"+rr.totalPostPerDay[0].postCount+"</b>");
							if(rr.totalPostPerDayBefore[0].postBeforeCount===null||undefined){
								rr.totalPostPerDayBefore[0].postBeforeCount=0;
							}
							$('#smm_np_f_input')
								.html("<b>"+rr.totalPostPerDayBefore[0].postBeforeCount+' ('+((rr.totalPostPerDay[0].postCount-rr.totalPostPerDayBefore[0].postBeforeCount)/rr.totalPostPerDay[0].postCount*100).toFixed(1)+"%"+')'+"</b>");
						});
				});
				$('<table />').attr({id:'smm_np_f_table',style:" margin:6px 6px 6px 6px ; margin-left:40px;"})
					.appendTo($('#smm_np_f'));
				$('<tr />').attr({id:'smm_np_f_tr'}).appendTo($('#smm_np_f_table'));
				$('<td />').attr({style:"font-size:16px; "})
					.append(
						$('<span  aria-hidden="true" />').addClass("glyphicon glyphicon-pencil")
					).appendTo($('#smm_np_f_tr'));
				$('<td />').attr({style:"font-size:16px; padding-left:13px"})
					.html(' <b>전날 대비 증감</b>').appendTo($('#smm_np_f_tr'));
				$('<td />').attr({style:"font-size:16px; padding-left:13px; padding-left:25px"})
					.append(
						$('<span />').attr({id:"smm_np_f_input",style:"color:red"})
					).appendTo($('#smm_np_f_tr'));
				$('#smm_np_f_input')
					.html("<b>"+r.totalPostPerDayBefore[0].postBeforeCount+' ('+((r.totalPostPerDay[0].postCount-r.totalPostPerDayBefore[0].postBeforeCount)/r.totalPostPerDay[0].postCount*100).toFixed(1)+"%"+')'+"</b>");
				let smmtnjd = $('<div />');
				let tnj = $('<table />');
				let tbnj = $('<tbody />');
				let trnj = $('<tr />');
				tnj.attr({style:"border-top:1px solid; margin-bottom:0px!important;"})
					.addClass("table table-striped table-hover borderG__ryu").appendTo(smmtnjd);
				tbnj.appendTo(tnj);
				trnj
					.append(
						 $('<td />').attr({style:'font-size:35px ; width:60%; text-align:right',id:"smm_totalJoinPerDay"})
						 	.html("<b>"+r.totalJoinPerDay[0].joinCount+"</b>"),
						 $('<td />').attr({style:'font-size:25px; width:40%; padding-left:0px; padding-top:20px; padding-bottom:0px'})
						 	.html("명")
					).appendTo(tbnj);
				smmtnjd.appendTo($('#smm_nj_c'));
				$('<table />').attr({id:'smm_nj_h_table',style:" margin:6px 6px 6px 6px ; margin-left:40px;"})
					.appendTo($('#smm_nj_h'));
				$('<tr />').attr({id:'smm_nj_h_tr'}).appendTo($('#smm_nj_h_table'));
				$('<td />').attr({id:'smm_nj_h_tr_td'}).prependTo($('#smm_nj_h_tr'));
				$('<input />').attr({type:"text",id:"smm_nj_date",style:"width:160px; font-size:20px; margin-right:6px"})
					.appendTo($('#smm_nj_h_tr_td'));
				$('<td />').attr({style:"font-size:16px"}).html('<b>의 신규 가입자 수</b>')
					.appendTo($('#smm_nj_h_tr'));
				$(()=>{
					$('#smm_nj_date').datepicker({
						dateFormat: 'yy년 mm월 dd일',
						minDate: new Date('2018-11-01'),
						maxDate: new Date('2018-11-15'),
					});
					$('#smm_nj_date').datepicker('setDate', $.datepicker.parseDate('yy년 mm월 dd일', today));
				});
				$('#smm_nj_date').change(e=>{
					$.getJSON($.context()+'/stats/smmJoin/'+$('#smm_nj_date').val(),rr=>{
						$('#smm_totalJoinPerDay')
							.html("<b>"+rr.totalJoinPerDay[0].joinCount+"</b>");
						$('#smm_nj_f_input')
							.html("<b>"+rr.totalJoinPerDayBefore[0].joinBeforeCount+' ('+((rr.totalJoinPerDay[0].joinCount-rr.totalJoinPerDayBefore[0].joinBeforeCount)/rr.totalJoinPerDay[0].joinCount*100).toFixed(1)+"%"+')'+"</b>");
					});
				});
				$('<table />').attr({id:'smm_nj_f_table',style:" margin:6px 6px 6px 6px ; margin-left:40px;"})
					.appendTo($('#smm_nj_f'));
				$('<tr />').attr({id:'smm_nj_f_tr'}).appendTo($('#smm_nj_f_table'));
				$('<td />').attr({style:"font-size:16px; "})
					.append(
						$('<span  aria-hidden="true" />').addClass("glyphicon glyphicon-user")
					).appendTo($('#smm_nj_f_tr'));
				$('<td />').attr({style:"font-size:16px; padding-left:13px"}).html(' <b>전날 대비 증감</b>')
					.appendTo($('#smm_nj_f_tr'));
				$('<td />').attr({style:"font-size:16px; padding-left:13px; padding-left:25px"})
					.append(
						$('<span />').attr({id:"smm_nj_f_input",style:"color:red"})
					).appendTo($('#smm_nj_f_tr'));
				$('#smm_nj_f_input')
					.html("<b>"+r.totalJoinPerDayBefore[0].joinBeforeCount+' ('+((r.totalJoinPerDay[0].joinCount-r.totalJoinPerDayBefore[0].joinBeforeCount)/r.totalJoinPerDay[0].joinCount*100).toFixed(1)+"%"+')'+"</b>");
			});
		},
		vst:()=>{
			$.getJSON($.context()+'/stats/vstChart',r=>{
				google.charts.load('current', {'packages':['corechart']});
			    google.charts.setOnLoadCallback(()=>{
			        let data = new google.visualization.DataTable();
			        data.addColumn('string','날짜');
			        data.addColumn('number','회원');
			        data.addColumn('number','총 방문자');
			        $.each(r.vstac,(i,v)=>{
			        	data.addRow([
			        		v.visitDate.split('-')[1]+'/ '+v.visitDate.split('-')[2],
			        		v.memberVisitor,
			        		v.totalVisitor
			        	]);
			        });
			        var options = {
			          legend:{
			        	  position: 'top',
			        	  alignment: 'end',
			        	  textStyle: {fontSize: 14}
			          },
			          vAxis: {
			        	  minValue: 0
			          },
			          chartArea:{
			        	  width:'80%',
			        	  height:'80%'
			          }
			        };
			        var chart = new google.visualization.AreaChart(document.getElementById('vst_c_a'));
			        chart.draw(data, options);
			    });
                $('<p />').attr({id:'vst_tp'}).appendTo($('#vst_t')); 
                $('<label />').appendTo($('#vst_tp'));
                $('#vst_tp label').html('<strong>상세데이터 열기 &nbsp;&nbsp;</strong>'
         			+' <div class="material-switch pull-right">'
         			+'<input id="vstDtSwitch" name="vstDtSwitch" value="1" type="checkbox" checked="checked"/>'
         			+'<label for="vstDtSwitch" class="label-warning"></label></div>'
                 );
                $('<table />')
                	.attr({style:"border-top:1px solid; border-bottom:1px solid",id:"vst_table"})
			    		.addClass("table table-striped table-hover borderG__ryu")
			    			.appendTo($('#vst_t'));
	            let thead = $('<thead />').attr('id','vst_thead').appendTo($('#vst_table'));
	            let tbody = $('<tbody />').attr('id','vst_tbody').appendTo($('#vst_table'));
                $('#vst_tp label').change (e=>{
                	if($('#vstDtSwitch').val()==="1"){
                		$('#vst_table').empty();
                		$('#vstDtSwitch').prop('value',"2");
                	}else{
                		thead.appendTo($('#vst_table'));
                		tbody.appendTo($('#vst_table'));
                    	$('#vstDtSwitch').prop('value',"1");
                	}
                });
                $('<tr />').attr({id:"vst__tr"}).appendTo($('#vst_thead'));
                let tablehead ={list:['날짜','총 방문자','회원','비회원','남','여']};
                $.each(tablehead.list,(i,v)=>{
                      $('<th />').addClass("text-center").html(v).appendTo($('#vst__tr'))
                });
                $.each(r.vstac,function(i,j){
                    $('<tr />').attr({style:"text-align:center", id:"trr_"+i})
                    	.append(
		                     $('<td />').attr('width','10%').html(j.visitDate),
		                     $('<td />').attr('width','20%').html(j.totalVisitor+" 명"),
		                     $('<td />').attr('width','15%').html(j.memberVisitor+" 명"),
		                     $('<td />').attr('width','15%').html(j.totalVisitor-j.memberVisitor+" 명")
	                    ).appendTo($('#vst_tbody'));
                });
                $.each(r.vstt,function(i,j){
                        $('<td />').attr('width','15%')
                        	.html((j.maleC*100/(j.maleC+j.femaleC)).toFixed(1)+"%").appendTo($('#trr_'+i));
                        $('<td />').attr('width','15%')
                        	.html((j.femaleC*100/(j.maleC+j.femaleC)).toFixed(1)+"%").appendTo($('#trr_'+i));
                });
			});
		},
		sba:()=>{
			$.getJSON($.context()+"/stats/sbaChart",r=>{
				google.charts.load('current', {'packages':['corechart']});
			    google.charts.setOnLoadCallback(()=>{
		            var data = new google.visualization.DataTable();
		            data.addColumn('number','판매가');
		            data.addColumn('number','20~29세 판매량');
		            data.addColumn('number','30~39세 판매량');
		            data.addColumn('number','40~49세 판매량');
		            $.each(r.sbalc,(i,v)=>{
		            	data.addRow([
		            		v.sum,
		            		v.twen,
		            		v.fort,
		            		v.fift
		            	]);
		            });
		            var options = {
		              curveType: 'function',
		              legend: { position: 'right' , textStyle:{fontSize:13}},
			          vAxis: {title: '판매량(단위: 개))',viewWindow: {min:0,max:130}},
			          hAxis:{viewWindow: {min:0}},
			          interpolateNulls: true
		            };
		            var chart = new google.visualization.LineChart(document.getElementById('sba__cc'));
		            chart.draw(data, options);
			    });
			    $('<p />').attr({id:'sba_tp'}).appendTo($('#sba_t')); 
                $('<label />').appendTo($('#sba_tp'));
                $('#sba_tp label').html('<strong>상세데이터 열기 &nbsp;&nbsp;</strong>'
         			+' <div class="material-switch pull-right">'
         			+'<input id="sbaDtSwitch" name="sbaDtSwitch" value="1" type="checkbox" checked="checked"/>'
         			+'<label for="sbaDtSwitch" class="label-warning"></label></div>'
                 );
                $('<table />')
                	.attr({style:"border-top:1px solid; border-bottom:1px solid",id:"sba_table"})
			    		.addClass("table table-striped table-hover borderG__ryu header-fixed")
			    			.appendTo($('#sba_t'));
	            let thead = $('<thead />').attr('id','sba_thead').appendTo($('#sba_table'));
	            let tbody =$('<tbody />').attr('id','sba_tbody').appendTo($('#sba_table'));
                $('#sba_tp label').change (e=>{
                	if($('#sbaDtSwitch').val()==="1"){
                		$('#sba_table').empty();
                		$('#sbaDtSwitch').prop('value',"2");
                	}else{
                		thead.appendTo($('#sba_table'));
                		tbody.appendTo($('#sba_table'));
                    	$('#sbaDtSwitch').prop('value',"1");
                	}
                });
                $('<tr />').attr({id:"sba__tr"}).appendTo($('#sba_thead'));
                let tablehead ={list:['제품 가격','20세 미만','20대','30대','40대','50대 이상']};
                $.each(tablehead.list,(i,v)=>{
                      $('<th scope="col"/>').addClass("text-center").html(v).appendTo($('#sba__tr'))
                });
                $.each(r.sbalc,function(i,j){ 
                    $('<tr />').attr({style:"text-align:center", id:"trr_"+i})
                    	.append(
		                     $('<td scope="row"/>').attr('width','10%').html(j.sum+" 원"),
		                     $('<td />').attr('width','20%').html(j.teen+" 개"),
		                     $('<td />').attr('width','15%').html(j.twen+" 개"),
		                     $('<td />').attr('width','15%').html(j.thir+" 개"),
		                     $('<td />').attr('width','15%').html(j.fort+" 개"),
		                     $('<td />').attr('width','15%').html(j.fift+" 개")
	                    ).appendTo($('#sba_tbody'));
                });
			});
		},
		ctgr1:()=>{
			$.getJSON($.context()+"/stats/ctgrChart",r=>{
				 google.charts.load('current', {'packages':['treemap']});
			     google.charts.setOnLoadCallback(()=>{  
			    	var data = new google.visualization.DataTable();
			    	data.addColumn('string','카테고리명');
			    	data.addColumn('string','부모');
			    	data.addColumn('number','볼륨');
			    	data.addColumn('number','컬러');
			    	data.addRow(['1차 카테고리',null,0,0]);
			        let tmp = ['침실','거실','주방','학생방','서재'];
			        $.each(tmp,(i,v)=>{
			        	data.addRow([
			        		v,'1차 카테고리',0,0
			        	]);
			        });
			        $.each(r.ctgrtct,(i,v)=>{
			        	data.addRow([
			        		v.ctgr2, v.ctgr1 ,0,0
			        	]);
			        });
			        $.each(r.ctgrtco,(i,v)=>{
			        	data.addRow([
			        		v.title, v.ctgr2Kor ,v.sales,v.sales
			        	]);
			        });
			        var tree = new google.visualization.TreeMap(document.getElementById('ctgr1__tc'));
			        tree.draw(data, {
			          minColor: '#ff9933',
			          midColor: '#ff3300',
			          maxColor: '#800000',
			          headerHeight: 15,
			          fontColor: 'black',
			          highlightOnMouseOver: true,
			          useWeightedAverageForAggregation: true,
			          hintOpacity:0.9,
			          maxPostDepth:2
			        });
			     });
			});
		},
		mbr:()=>{
			$.getJSON($.context()+"/stats/mbrChart",r=>{
			      google.charts.load("current", {packages:["corechart"]});
			      google.charts.setOnLoadCallback(()=>{
			    	  var data =new google.visualization.DataTable();
			    	  data.addColumn('string','연령대');
			    	  data.addColumn('number','비율');
			    	  let tmp=0;
			    	  $.each(r.mbrpc,(i,v)=>{
		    		       	data.addRow([
			        		v.ages+" 대"
			        		,v.gendercount
				        	]);
				      });
			          var options = {
			              title: '연령대 별 가입자 비율',
			              titleTextStyle:{fontSize: 20, bold:true},
			              pieSliceText: 'label',
			              is3D: true,
			              legend:'bottom',
			              chartArea:{left:60,top:50,width:"80%",height:"80%"}
		              };
		              var chart = new google.visualization.PieChart(document.getElementById('mbr__pc'));
		              chart.draw(data, options);
			      });
			      google.charts.load('current', {packages: ['corechart', 'bar']});
			      google.charts.setOnLoadCallback(()=>{
			    	  var data = new google.visualization.DataTable();
			    	  data.addColumn('string','연령');
			    	  data.addColumn('number','남자');
			    	  data.addColumn('number','여자');
			    	  $.each(r.mbrbc,(i,v)=>{
			    		  data.addRow([
				        		v.ages +' 대', v.mancount, v.womancount
				        	]);
			    	  });
		    	      var options = {
		    	          chartArea: {width: '65%'},
		    	          isStacked: true,
		    	          hAxis: {
		    	            title: '가입자 수',
		    	            viewWindow: {
			    	        	  min:0, max: 2000
			    	        }
		    	          },
		    	          vAxis: {
		    	            title: '연령'
		    	          }
		    	      };
		    	      var chart = new google.visualization.BarChart(document.getElementById('mbr__bc'));
		    	      chart.draw(data, options);
			      });
			});
		},
		abba:()=>{
			$.getJSON($.context()+"/stats/abbaChart",r=>{
			google.charts.load('current', {'packages':['corechart']});
			    google.charts.setOnLoadCallback(()=>{
			        var data = new google.visualization.DataTable();
			        data.addColumn('number', '개당 평균 구매액');
			        data.addColumn('number', '연령');
			        $.each(r.abbasc,(i,v)=>{
			        	data.addRow([
			        		v.av_salesabba 
			        		,v.ageabba
			        	]);
			        });
			          var options = {
			            hAxis: {
			            	title: '물품 당 평균 구매액',
			            	viewWindow: {
		    	        	  min:0, max: 350000
		    	        	}
				         },
			            vAxis: {
			            	title: '연령'
			            },
			            legend: 'none',
			            pointSize:2
			          };
			          var chart = new google.visualization.ScatterChart(document.getElementById('abba__sc'));
			          chart.draw(data, options);
			        });
			});
		},
		wrdcld:()=>{
			var width = 1100;
	        var height = 500;
	        var svg = d3.select("#vbt__wc").append("svg")
	            .attr("width", width)
	            .attr("height", height);
	        d3.json($.context()+"/stats/wrdcld", function (error,r) {
	            showCloud(r.wrdcld);
	            setInterval(function(){
	                 showCloud(r.wrdcld);
	            },2000); 
	        });
	        var wordScale = d3.scale.linear().domain([0, 10]).range([0, 160]).clamp(true);
	        var keywords = ["눈물", "원룸", "수납","사랑","반려견","인테리어","나혼자"];
	        var svg = d3.select("svg")
	                    .append("g")
	                    .attr({transform:"translate(" + width/2 + "," + height/2 + ")"});
	
	        function showCloud(data) {
	            d3.layout.cloud().size([width, height])
	                .words(data)
	                .rotate(function (data) {
	                    return data.countwc > 4 ? 0 : data.countwc > 3 ? 40 : -90;
	                })
	                .fontSize(function (data) {
	                    return wordScale(data.countwc);
	                })
	                .on("end", draw(data))
	                .start();
	            function draw(words) { 
	                var cloud = svg.selectAll("text").data(words);
	                cloud.enter()
	                    .append("text")
	                    .style("fill", function (r) {
	                        return (keywords.indexOf(r.keywc) > -1 ? "#fbc280" : "#405275");
	                    })
	                    .style("fill-opacity", .5)
	                    .attr("text-anchor", "middle") 
	                    .attr('font-size', 1)
	                    .text(function (r) {
	                        return r.keywc;
	                    }); 
	                cloud
	                    .transition()
	                    .duration(600)
	                    .style("font-size", function (r) {
	                        return r.size + "px";
	                    })
	                    .attr("transform", function (r) {
	                    	
	                        return r.x && r.y? "translate(" + [r.x, r.y] + ")rotate(" + r.rotate + ")" : "translate(0,0)";
	                    })
	                    .style("fill-opacity", 1); 
	            }
	        }
		}
}
jaekyung.router={
              init:()=>{
                     jaekyung.main.init();
              }
}