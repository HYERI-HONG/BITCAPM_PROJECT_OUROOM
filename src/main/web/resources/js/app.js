"use strict";
var app = app || {};

app =(()=>{
	var init =x=>{
		console.log('step1 : app.init 진입'+x);
		app.router.init(x);
	};
	return {init : init};
})();
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
					$.getScript($.script()+'/footer.js'),
					$.Deferred(y=>{
						$(y.resolve);
					})
				).done(x=>{
						$('#wrapper').html(navUI()
								+contentUI()
								+footerUI()
						);
						console.log(' when done 로드성공');
						console.log(' when done 로드성공');
					    
						$('#board_btn').click(e=>{
                            e.preventDefault();
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


