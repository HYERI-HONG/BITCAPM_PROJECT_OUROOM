function navUI() {
	return'<div id="h_navigation" style="height:77px">' 
	+'<div id="h_navigation_primary">'
	+'<img src="'+$.img()+'/hyeri/logo.png">'
	+'<span id="board_btn" class="h_nav_left">커뮤니티</span>'
	+'<span id="store_btn" class="h_nav_left">스토어</span>'
	+'<span id="statics_btn" class="h_nav_left" style="margin-right : 600px">통계</span>'
	+'<span><a id="h_wirte_btn" class="h_wirte_btn" href="/board_upload" style="visibility: hidden;top:12px">글쓰기</a></span>'
	+'<span id="h_search_btn"class="glyphicon glyphicon-search" aria-hidden="true" style="visibility: hidden;font-size:25px; margin-bottom:9px; vertical-align: bottom; margin-left:10px"></span>'
	+'<span id="h_cart_btn" class="glyphicon glyphicon-shopping-cart" aria-hidden="false" style="font-size:25px; margin-bottom:9px; vertical-align: bottom; margin-left:10px"></span>'
	+'<span id="login_btn" class="h_nav_right">로그인</span>'
	+'<span class="h_nav_middle">|</span>'
	+'<span id="join_btn" class="h_nav_right">회원가입</span>'
	+'</div>'
+'</div>';
}