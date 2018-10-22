"use strict";
var app = app || {};
app =(()=>{
	var init =x=>{
		app.router.init(x);
	};
	return {init : init};
})();

app.router = {
		init : x=>{
			$.getScript(x+'/resources/js/router.js',
				()=>{
						$.extend(new Session(x)); 
						app.main.init();
			})
		},
		home : x=>{
			$.when(
					$.getScript($.script()+'/nav.js'),
					$.getScript($.script()+'/content.js'),
					$.getScript($.script()+'/hyeri.js'),
					/*$.getScript($.script()+'/footer.js'),*/
					$.Deferred(y=>{
						$(y.resolve);
					})
				).done(x=>{
						$('#wrapper').html(navUI()
								+contentUI()
								/*+footerUI()*/
						);
	                    hyeri.home();
	                  
						$('#logo').click(e=>{
							e.preventDefault();
							app.router.home();
                        });
						 $('#login_btn').click(e=>{
							e.preventDefault();
							hyeri.login();
						});
						$('#join_btn').click(e=>{
							e.preventDefault();
							hyeri.add();
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
						 $('#h_cart_btn').click(e=>{
								$.getScript($.script()+'/jun.js',()=>{
									e.preventDefault();
									jun.main.cart();
								});
							 });
						 $('#statics_btn').click(e=>{
	                        e.preventDefault();
	                        $.getScript($.script()+'/jaekyung.js',()=>{
	                            jaekyung.init();
	                        });
	                     });
						
						
				})
				.fail(x=>{console.log(' when fail 로드실패');})
		}
};
app.main =(()=>{
	var w, nav, footer, content, context, script, style,img;
	var init =()=>{
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
		app.router.home();
	};
	return {init : init};
})();


