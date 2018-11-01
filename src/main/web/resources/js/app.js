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
						$('#footer').remove();
						$('#wrapper').html((($.type($.cookie("userid")) === 'undefined')?nav():anav())
								+content()).append(footer());
	                    hyeri.home();
	                    
	                    //통계 버튼 생성, 삭제
	                    if($.cookie("userid") !=='undefined'&&$.cookie("userid")==='1'){
	                    	$('#statics_btn').attr({ style: "visibility: visible"});
	                    }else{$('#statics_btn').attr({ style: "visibility: hidden"});}
	                  
						$('#logo').click(e=>{
							e.preventDefault();
						 	$('#h_search_btn').attr({ style: "visibility: hidden"});
							$('#h_wirte_btn').attr({ style: "visibility: hidden"});
							app.router.main();
                        });
						 $('#login_btn').click(e=>{
							e.preventDefault();
							$('#footer').remove();
						 	$('#h_search_btn').attr({ style: "visibility: hidden"});
							$('#h_wirte_btn').attr({ style: "visibility: hidden"});
							hyeri.login();
						});
						$('#join_btn').click(e=>{
							e.preventDefault();
							$('.h_nav_left').removeClass('active');
							$('#join_btn').addClass('active');
							$('#footer').remove();
						 	$('#h_search_btn').attr({ style: "visibility: hidden"});
							$('#h_wirte_btn').attr({ style: "visibility: hidden"});
							hyeri.add();
						});
						$('#board_btn').click(e=>{
							e.preventDefault();
							$('.h_nav_left').removeClass('active');
							$('#board_btn').addClass('active');
							$('#footer').remove();
							$('#h_search_btn').attr({ style: "visibility: visible"});
							$('#h_wirte_btn').attr({ style: "visibility: visible"});
							$.getScript($.script()+'/danah.js', ()=>{
                                danah.init($.context());
                            });
                        });
						 $('#store_btn').click(e=>{
		                    e.preventDefault();
		                    $('.h_nav_left').removeClass('active');
							$('#store_btn').addClass('active');
		                    $('#footer').remove();
		                	$('#h_search_btn').attr({ style: "visibility: hidden"});
							$('#h_wirte_btn').attr({ style: "visibility: hidden"});
		                    jun.init(); 
		                 });
						 $('#h_cart_btn').click(e=>{
							e.preventDefault();
							$('#footer').remove();
						 	$('#h_search_btn').attr({ style: "visibility: hidden"});
							$('#h_wirte_btn').attr({ style: "visibility: hidden"});
							jun.main.cart();	
						 });
						 $('#statics_btn').click(e=>{
	                        e.preventDefault();
	                        $('.h_nav_left').removeClass('active');
							$('#statics_btn').addClass('active');
	                        $('#footer').remove();
	                        $('#wrapper').append(footer());
	                     	$('#h_search_btn').attr({ style: "visibility: hidden"});
							$('#h_wirte_btn').attr({ style: "visibility: hidden"});
	                        jaekyung.init();
	                     });
						 $('#logout_btn').click(e=>{
		                        e.preventDefault();
		                        $('#statics_btn').attr({ style: "visibility: hidden"});
		                        if($.removeCookie('userid')
		                        		&&$.removeCookie('nickname')
		                        		&&$.removeCookie('profile')){
		                        	alert("정상적으로 로그아웃 되었습니다.");
		                        }else{
		                        	alert("로그아웃 실패");
		                        }
		                        app.router.main();
		                 });
						 $('#mypage_btn').click(e=>{
		                        e.preventDefault();
		                       alert("서비스 준비중입니다.");
		                 });
				})
		}
};
var nav = () =>'<div id="h_navigation" style="height:77px">'
	+'<div id="h_navigation_primary">'
	+'<img src="'+$.img()+'/hyeri/logo.png" id="logo">'
	+'<span id="board_btn" class="h_nav_left">커뮤니티</span>'
	+'<span id="store_btn" class="h_nav_left">스토어</span>'
	+'<span id="statics_btn" class="h_nav_left" style="margin-right:38%">통계</span>'
	+'<span><a id="h_wirte_btn" class="h_wirte_btn" href="/board_upload" style="visibility: hidden;top:12px">글쓰기</a></span>'
	+'<span id="h_search_btn"class="glyphicon glyphicon-search" aria-hidden="true" style="visibility: hidden;font-size:25px; margin-bottom:9px; vertical-align: bottom; margin-left:10px"></span>'
	+'<span id="h_cart_btn" class="glyphicon glyphicon-shopping-cart" aria-hidden="false" style="font-size:25px; margin-bottom:9px; vertical-align: bottom; margin-left:10px"></span>'
	+'<span id="login_btn" class="h_nav_right">로그인</span>'
	+'<span class="h_nav_middle">|</span>'
	+'<span id="join_btn" class="h_nav_right">회원가입</span>'
	+'</div>'
	+'</div>'
	
var anav = () =>'<div id="h_navigation"style="height:77px">'
	+'<div id="h_navigation_primary">'
	+'<img src="'+$.img()+'/hyeri/logo.png" id="logo">'
	+'<span id="board_btn" class="h_nav_left">커뮤니티</span>'
	+'<span id="store_btn" class="h_nav_left">스토어</span>'
	+'<span id="statics_btn" class="h_nav_left">통계</span>'
	+'<span><a id="h_wirte_btn" class="h_wirte_btn" href="/board_upload" style="visibility: hidden;top:12px">글쓰기</a></span>'
	+'<span id="h_search_btn"class="glyphicon glyphicon-search" aria-hidden="true" style="visibility: hidden;font-size:25px; margin-bottom:9px; vertical-align: bottom; margin-left:10px"></span>'
	+'<span id="h_cart_btn" class="glyphicon glyphicon-shopping-cart" aria-hidden="false" style="font-size:25px; margin-bottom:9px; vertical-align: bottom; margin-left:10px"></span>'
	+'<span id="logout_btn" class="h_nav_right">로그아웃</span>'
	+'<span class="h_nav_middle">|</span>'
	+'<span id="mypage_btn" class="h_nav_right">마이페이지</span>'
	+'</div>'
	+'</div>'
var content = () =>'<div id="content"><div/>';

var footer =()=>'<div id="footer" class="footer-distributed">'
	+'			<div class="footer-left">'
	+'				<h3>nibangne<span>bang</span></h3>'
	+'				<p class="footer-links">'
	+'					<a href="#">Jaekyung</a>·<a href="#">Jun</a>'
	+'					·<a href="#">Jieun</a>·<a href="#">Danah</a>'
	+'					·<a href="#">Hyeri</a>'
	+'				</p>'
	+'				<p class="footer-company-name">ouroom &copy; 2018</p>'
	+'			</div>'
	+'			<div class="footer-center">'
	+'				<div>'
	+'					<i class="fa fa-map-marker"></i>'
	+'					<p><span>23, Baekbeom-ro, Mapo-gu</span>Seoul, Republic of Korea</p>'
	+'				</div>'
	+'				<div>'
	+'					<i class="fa fa-phone"></i>'
	+'					<p>+82 02 707 1480</p>'
	+'				</div>'
	+'				<div>'
	+'					<i class="fa fa-envelope"></i>'
	+'					<p><a href="mailto:support@company.com">support@ouroom.com</a></p>'
	+'				</div>'
	+'			</div>'
	+'			<div class="footer-right">'
	+'				<p class="footer-company-about">'
	+'					<span>About us</span>'
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



