"use strict";
var app = app || {};

app =(()=>{
	var init =x=>{
		console.log('step1 : app.init 진입'+x);
		app.router.init(x);
	};
	return {init : init};
})();
app.service ={
	lobby :()=>{
		
		$('<div/>').addClass('container').attr({id:"main"}).appendTo($('#content'));
		
		/*-------------------section1 :: banner --------------------*/
		$('<div/>').addClass('section').attr({id:"section_banner"}).appendTo($('#main'));
		$('<div/>').addClass('carousel slide').attr({id:'carousel-example-generic','data-ride':'carousel'}).appendTo($('#section_banner'));
		
		($('<ol/>').addClass('carousel-indicators').append(
					$('<li/>').attr({'data-target':'#carousel-example-generic', 'data-slide-to':'0'}).addClass('active'),
					$('<li/>').attr({'data-target':'#carousel-example-generic', 'data-slide-to':'1'}),
					$('<li/>').attr({'data-target':'#carousel-example-generic', 'data-slide-to':'2'}),
					$('<li/>').attr({'data-target':'#carousel-example-generic', 'data-slide-to':'3'}),
					$('<li/>').attr({'data-target':'#carousel-example-generic', 'data-slide-to':'4'})
		)).appendTo($('#carousel-example-generic'));
		
		($('<div/>').addClass('carousel-inner').attr({role:'listbox'}).append(
				$('<div/>').addClass('item active').append(
						$('<div/>').addClass('scale').append($('<img/>').attr({src:$.img()+'/hyeri/banner1.jpg'})),
						$('<div/>').addClass('carousel-caption').append(
								$('<h2/>').html('집,먹고자는 곳 이상의 무언가가 될 순 없을까?').attr({style:'font-weight:bold'}),
								$('<p/>').html('공간을 꾸미는건 쉬운일이 아니에요.<br>당신이 망설일 수 밖에 없는 이유를 적으려고 한다면 아마 끝이 없을거에요.<br>그렇지만 주저하게되는 수만가지 이유가 아니라,<br>주저하지 않고 시작해야하는 한가지 이유를 생각하셨으면 좋겠어요.')
						)
				),
				$('<div/>').addClass('item').append(
						$('<div/>').addClass('scale').append($('<img/>').attr({src:$.img()+'/hyeri/banner2.jpg'})),
						$('<div/>').addClass('carousel-caption').append(
								$('<h2/>').html('초보면 어때요! 계속 꾸며보는거죠.').attr({style:'font-weight:bold'}),
								$('<p/>').html('지금까지 이것저것 여러 스타일을 시도해봤지만 막상 해보니 생각했던데로 짜잔하고 완성되는건 아니더라고요.<br>그래도 계속 시도하다보면 언젠가는 짠하고 완성할 수 있는 날이 오지 않을까요?')
						)
				),
				$('<div/>').addClass('item').append(
						$('<div/>').addClass('scale').append($('<img/>').attr({src:$.img()+'/hyeri/banner3.jpg'})),
						$('<div/>').addClass('carousel-caption').append(
								$('<h2/>').html('삶은 온전히 나를 위해 살아갈때 가장 빛나는법').attr({style:'font-weight:bold'}),
								$('<p/>').html('어쩌면 행복한 일들보다 행복하지 않은 일들이 더 많은 게 우리의 삶이라고 하지만<br>그럼에도 불구하고 행복한 순간들은 늘 어디에나 존재한다는 걸<br>셀프 인테리어를 하면서 다시 한번 느끼게 되었어요.')
						)
				),		
				$('<div/>').addClass('item').append(
						$('<div/>').addClass('scale').append($('<img/>').attr({src:$.img()+'/hyeri/banner4.jpg'})),
						$('<div/>').addClass('carousel-caption').append(
								$('<h2/>').html('저한테 집은 엄마같아요.').attr({style:'font-weight:bold'}),
								$('<p/>').html('저한테 집은 마치 엄마 같은 곳이에요.<br>밖에서 힘들고 지쳐있다가도 집에 오면 편안하고 위로가 되잖아요,엄마처럼.<br>어딜 가더라도 결국 돌아오는 곳은 집이죠.')
						)
				),
				$('<div/>').addClass('item').append(
						$('<div/>').addClass('scale').append($('<img/>').attr({src:$.img()+'/hyeri/banner5.jpg'})),
						$('<div/>').addClass('carousel-caption').append(
								$('<h2/>').html('살아봐야 알 수 있다, 우리에게 진짜 좋은 공간은').attr({style:'font-weight:bold'}),
								$('<p/>').html('인테리어의 완성은 조화라고 생각하지만 완성이라는 말 자체가 집이라는 공간에 어울리지 않는 것 같아요.<br>살아가며 계속 바뀌는 게 집이잖아요? 가족구성원의 변화, 계절의 변화, 시간에 따라 변해가죠.<br>우리에게 진짜 좋은 공간은 살아봐야 정확하게 알 수 있어요.')
						)
				)	
		)).appendTo($('#carousel-example-generic'));
		
		
		($('<a/>').addClass('left carousel-control')
		.attr({href:'#carousel-example-generic', role:'button','data-slide':'prev'}).append(
				$('<span/>').addClass('glyphicon glyphicon-chevron-left').attr({'aria-hidden':'true'}),
				$('<span/>').addClass('sr-only').text('Previous')
		)).appendTo($('#carousel-example-generic'));
		
		($('<a/>').addClass('right carousel-control')
		.attr({href:'#carousel-example-generic', role:'button','data-slide':'next'}).append(
				$('<span/>').addClass('glyphicon glyphicon-chevron-right').attr({'aria-hidden':'true'}),
				$('<span/>').addClass('sr-only').text('Next')
		)).appendTo($('#carousel-example-generic'));
	
	
		$('.carousel').carousel({
			  interval: 3000,
			  pause:'hover'
		});
		
		/*-------------------section2 :: direct --------------------*/
		
		$('<div/>').addClass('section').attr({id:"section_icon"}).appendTo($('#main'));
		$('<div/>').addClass('section').attr({id:"section_community"}).appendTo($('#main'));
		$('<div/>').addClass('section').attr({id:"section_category"}).appendTo($('#main'));
		$('<div/>').addClass('section').attr({id:"section_store"}).appendTo($('#main'));
		
		
	}
};
app.router = {
		init : x=>{
			console.log('step2 : app.router.init 진입'+x);
			$.getScript(x+'/resources/js/router.js',
				()=>{
					console.log('step3 : app.router.init ::  getScript'+x);
						$.extend(new Session(x)); 
						app.main.init();
					}
				).done(()=>{console.log('step4 : app.router.init :: 성공');})
				.fail(()=>{console.log('step4 : app.router.init :: 실패');});
		},
		home : x=>{
			$.when(
					$.getScript($.script()+'/nav.js'),
					$.getScript($.script()+'/content.js'),
					/*$.getScript($.script()+'/footer.js'),*/
					$.Deferred(y=>{
						$(y.resolve);
					})
				).done(x=>{
						$('#wrapper').html(navUI()
								+contentUI()
								/*+footerUI()*/
						);
						console.log(' when done 로드성공');
						app.service.lobby();
						
						$('#logo').click(e=>{
							e.preventDefault();
							app.router.home();
							
                        });
						$('#board_btn').click(e=>{
							e.preventDefault();
							$('#h_search_btn').attr({ style: "visibility: visible;font-size:25px; margin-bottom:9px; vertical-align: bottom; margin-left:10px;" });
							$('#h_wirte_btn').attr({ style: "visibility: visible; top:12px; margin-left: -13.5px;" });
                            $.getScript($.script()+'/danah.js', ()=>{
                                danah.init($.context());
                            });
                        });
						 $('#store_btn').click(e=>{
		                    e.preventDefault();
		                     $.getScript($.script()+'/jun.js',()=>{
		                         jun.init();
		                    });
		                 });
						 $('#statics_btn').click(e=>{
	                        e.preventDefault();
	                        $.getScript($.script()+'/jaekyung.js',()=>{
	                            jaekyung.init();
	                        });
	                     });
						 $('#login_btn').click(e=>{
							e.preventDefault();
							app.permission.login();
						 });
						 $('#join_btn').click(e=>{
							e.preventDefault();
							app.permission.add();
						 });
						 $('#h_cart_btn').click(e=>{
							$.getScript($.script()+'/jun.js',()=>{
								e.preventDefault();
								jun.main.cart();
							});
						 });
				})
				.fail(x=>{console.log(' when fail 로드실패');})
		}
};
app.permission=(()=>{
	var login=()=>{
		$('#footer').remove();
		$('#content').empty();
		$.getScript($.script()+'/login.js',
				()=>{
					$('#content').html(loginUI());
				})
	};
	var add=()=>{
		$('#footer').remove();
		$('#content').empty();
		$.getScript($.script()+'/add.js',
				()=>{
				$('#content').html(addUI());
					
				/*생년월일*/
				$('<label/>').addClass('je_bold').html("생년월일").attr({style:"padding-top:20px"}).appendTo($('#add_form_middle'));
				$('<div/>').attr({id:"bir_wrap",style:"diplay:table; width:100%, height:34px"}).appendTo($('#add_form_middle'));
				
				$('<div/>').addClass('bir_yy').attr({id:"bir_yy_d"}).appendTo($('#bir_wrap'));
				$('<span/>').addClass('bir_box').attr({id:"bir_yy_s"}).appendTo($('#bir_yy_d'));
				$('<input/>').addClass('bir_int').attr({placeholder:"년(4자)",type:"text",id:"bir_year"}).appendTo($('#bir_yy_s'));
				
				$('<div/>').attr({class:"bir_mm", id:"bir_mm_d"}).appendTo($('#bir_wrap'));
				$('<span/>').addClass('bir_box').attr({id:"bir_mm_s"}).appendTo($('#bir_mm_d'));
				$('<select/>').addClass('bir_sel').attr({id:"bir_month",title:"월"}).appendTo($('#bir_mm_s'));
				$('<option/>').html('월').appendTo($('#bir_month'));
				for(let i=1;i<13;i++){
					$('<option/>').attr({value:i+''}).html(i+'월').appendTo($('#bir_month'));
				}
				
				$('<div/>').attr({class:"bir_dd", id:"bir_dd_d"}).appendTo($('#bir_wrap'));
				$('<span/>').addClass('bir_box').attr({id:"bir_dd_s"}).appendTo($('#bir_dd_d'));
				$('<input/>').addClass('bir_int').attr({placeholder:"일",type:"text",id:"bir_day"}).appendTo($('#bir_dd_s'));
			
				/*성별*/
				$('<label/>').addClass('je_bold').html("성별").attr({style:"padding-top:20px"}).appendTo($('#add_form_middle'));
				$('<div/>').attr({id:"gender_wrap"}).appendTo($('#add_form_middle'));
				$('<select/>').addClass('gen_sel').attr({id:"gender",title:"성별"}).appendTo($('#gender_wrap'));
				$('<option/>').html('성별').appendTo($('#gender'));
				$('<option/>').html('여자').attr({value:"2"}).appendTo($('#gender'));
				$('<option/>').html('남자').attr({value:"1"}).appendTo($('#gender'));
			
				
				/*add_submit_btn/has-account*/
				/* $('#add_submit_btn').click(e=>{
						e.preventDefault();
						$.ajax({
							url : $.context()+'/member/add',
							method : 'POST',
							contentType : 'application/json',
							data : JSON.stringify({
								pre_email : $('#pre_email').val(),
								post_email : $('#post_email').val(),
								nickname : $('#nickname').val(),
								password : $('#pass').val(),
								pass_confirm : $('#pass_confirm').val(),
								gender : $('#ssn').val(),
								bir_year : $('.teamid:checked').val(),
								bir_month : $('.teamid:checked').val(),
								bir_day : $('.teamid:checked').val()
							}),
							success : d=>{
							},
							error : (m1,m2,m3)=>{
								alert("error발생");
							}
						});
						
				});*/
				 $('#has-account').click(e=>{
						e.preventDefault();
				});
				
		});
	}
	
	return{login:login,
			add:add};
})();
app.main =(()=>{
	var w, nav, footer, content, context, script, style,img;
	var init =()=>{
		console.log('step5 : app.main.init ::  진입');
		context = $.context();
		script = $.script();
		style = $.style();
		img = $.img();
		w=$('#wrapper');
		onCreate();
	};
	var onCreate =()=>{
		setContentView();
	};
	var setContentView =()=>{
		console.log('app.main.setContentView 진입');
		app.router.home();
	};
	return {init : init};
})();


