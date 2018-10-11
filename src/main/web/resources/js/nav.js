function navUI() {
	return'<div id="h_navigation" style="height:78px">' 
	+'<div id="h_navigation_primary">'
	+'<img src="'+$.img()+'/hyeri/logo.png">'
	+'<span id="board_btn" class="h_nav_left">커뮤니티</span>'
	+'<span id="store_btn" class="h_nav_left">스토어</span>'
	+'<span id="statics_btn" class="h_nav_left" style="margin-right : 500px">통계</span>'
	+'<span id="symbol" class="glyphicon glyphicon-shopping-cart" aria-hidden="false" style="font-size:25px; margin-bottom:9px; vertical-align: bottom; margin-left:10px"></span>'
	+'<span id="login_btn" class="h_nav_right">로그인</span>'
	+'<span class="h_nav_right">|</span>'
	+'<span id="join_btn" class="h_nav_right">회원가입</span>'
	+'</div>'
+'</div>';
}