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
					$.getScript($.script()+'/hyeri.js'),
					$.getScript($.script()+'/jun.js'),
					$.getScript($.script()+'/jaekyung.js'),
					$.Deferred(y=>{
						$(y.resolve);
					})
				).done(x=>{
						$('#wrapper').append(nav(),content(),footer());
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
						 	$('#footer').remove();
							$('#h_search_btn').attr({ style: "visibility: visible;font-size:25px; margin-bottom:9px; vertical-align: bottom; margin-left:10px;" });
							$('#h_wirte_btn').attr({ style: "visibility: visible; top:12px; margin-left: -13.5px;" });
							$.getScript($.script()+'/danah.js', ()=>{
                                danah.init($.context());
                            });
                        });
						 $('#store_btn').click(e=>{
		                    e.preventDefault();
		                 	$('#footer').remove();
		                    jun.init(); 
		                 });
						 $('#h_cart_btn').click(e=>{
							e.preventDefault();
							$('#footer').remove();
							jun.main.cart();	
						 });
						 $('#statics_btn').click(e=>{
	                        e.preventDefault();
	                        jaekyung.init();
	                     });
				})
		}
};
var nav = () =>'<div id="h_navigation" style="height:77px">'
	+'<div id="h_navigation_primary">'
	+'<img src="'+$.img()+'/hyeri/logo.png" id="logo">'
	+'<span id="board_btn" class="h_nav_left">커뮤니티</span>'
	+'<span id="store_btn" class="h_nav_left">스토어</span>'
	+'<span id="statics_btn" class="h_nav_left" style="margin-right:30%">통계</span>'
	+'<span><a id="h_wirte_btn" class="h_wirte_btn" href="/board_upload" style="visibility: hidden;top:12px">글쓰기</a></span>'
	+'<span id="h_search_btn"class="glyphicon glyphicon-search" aria-hidden="true" style="visibility: hidden;font-size:25px; margin-bottom:9px; vertical-align: bottom; margin-left:10px"></span>'
	+'<span id="h_cart_btn" class="glyphicon glyphicon-shopping-cart" aria-hidden="false" style="font-size:25px; margin-bottom:9px; vertical-align: bottom; margin-left:10px"></span>'
	+'<span id="login_btn" class="h_nav_right">로그인</span>'
	+'<span class="h_nav_middle">|</span>'
	+'<span id="join_btn" class="h_nav_right">회원가입</span>'
	+'</div>'
	+'</div>'

var content = () =>'<div id="content"><div/>';

var footer =()=>'<div id="footer" class="footer-distributed">'
	+'			<div class="footer-left">'
	+'				<h3>Company<span>logo</span></h3>'
	+'				<p class="footer-links">'
	+'					<a href="#">Home</a>·<a href="#">Blog</a>'
	+'					·<a href="#">Pricing</a>·<a href="#">About</a>'
	+'					·<a href="#">Faq</a>·<a href="#">Contact</a>'
	+'				</p>'
	+'				<p class="footer-company-name">Company Name &copy; 2015</p>'
	+'			</div>'
	+'			<div class="footer-center">'
	+'				<div>'
	+'					<i class="fa fa-map-marker"></i>'
	+'					<p><span>21 Revolution Street</span> Paris, France</p>'
	+'				</div>'
	+'				<div>'
	+'					<i class="fa fa-phone"></i>'
	+'					<p>+1 555 123456</p>'
	+'				</div>'
	+'				<div>'
	+'					<i class="fa fa-envelope"></i>'
	+'					<p><a href="mailto:support@company.com">support@company.com</a></p>'
	+'				</div>'
	+'			</div>'
	+'			<div class="footer-right">'
	+'				<p class="footer-company-about">'
	+'					<span>About the company</span>'
	+'					Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.'
	+'				</p>'
	+'				<div class="footer-icons">'
	+'					<a href="#"><i class="fa fa-facebook"></i></a>'
	+'					<a href="#"><i class="fa fa-twitter"></i></a>'
	+'					<a href="#"><i class="fa fa-linkedin"></i></a>'
	+'					<a href="#"><i class="fa fa-github"></i></a>'
	+'				</div>'
	+'			</div>'
	+'		</div>';



