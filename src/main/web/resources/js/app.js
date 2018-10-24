"use strict";
var app = app || {};
app =(()=>{
	var init =x=>{
		console.log('Welcome To 니방내방!!');
		$.getScript(x+'/resources/js/router.js',
				()=>{
					$.extend(new Session(x)); 
					app.router.main();
		})
	};
	return {init : init};
})();
app.router = {
		main : x=>{
			$.when(
					$.getScript($.script()+'/nav.js'),
					$.getScript($.script()+'/content.js'),
					$.getScript($.script()+'/hyeri.js'),
					$.getScript($.script()+'/jun.js'),
					$.getScript($.script()+'/jaekyung.js'),
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
							app.router.main();
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
		                    jun.init(); 
		                 });
						 $('#h_cart_btn').click(e=>{
							e.preventDefault();
							jun.main.cart();	
						 });
						 $('#statics_btn').click(e=>{
	                        e.preventDefault();
	                        jaekyung.init();
	                     });
				})
		}
};



