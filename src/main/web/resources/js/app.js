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
						$('#login_btn').click(e=>{
							e.preventDefault();
							alert('로그인버튼클릭');
							app.permission.login();
						});
						$('#join_btn').click(e=>{
							e.preventDefault();
							alert('회원가입버튼클릭');
							app.permission.add();
						});
						console.log(' when done 로드성공');
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
		$.getScript($.script()+'/add2.js',
				()=>{
					$('#content').html(addUI());
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


