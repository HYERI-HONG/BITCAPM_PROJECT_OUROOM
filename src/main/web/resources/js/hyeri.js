"use strict";
var hyeri = hyeri || {};

hyeri = (() => {
    var home = () => {
        hyeri.page.h();
    };
    var add = () => {
    	hyeri.page.a();
    };
    var login = () => {
    	hyeri.page.l();
    };
    return { home : home,
    		add : add,
    		login : login };
})();
hyeri.page={
    h:()=>{
    	$('<div/>').addClass('container').attr({id:"h_main"}).appendTo($('#content'));
		
		/*-------------------section1 :: banner --------------------*/
		$('<div/>').addClass('h_section').attr({id:"section_banner"}).appendTo($('#h_main'));
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
						$('<div/>').addClass('h_scale').append($('<img/>').attr({src:$.img()+'/hyeri/banner1.jpg'})),
						$('<div/>').addClass('carousel-caption').append(
								$('<h2/>').html('집,먹고자는 곳 이상의 무언가가 될 순 없을까?').attr({style:'font-weight:bold'}),
								$('<p/>').html('공간을 꾸미는건 쉬운일이 아니에요.<br>당신이 망설일 수 밖에 없는 이유를 적으려고 한다면 아마 끝이 없을거에요.<br>그렇지만 주저하게되는 수만가지 이유가 아니라,<br>주저하지 않고 시작해야하는 한가지 이유를 생각하셨으면 좋겠어요.')
						)
				),
				$('<div/>').addClass('item').append(
						$('<div/>').addClass('h_scale').append($('<img/>').attr({src:$.img()+'/hyeri/banner2.jpg'})),
						$('<div/>').addClass('carousel-caption').append(
								$('<h2/>').html('초보면 어때요! 계속 꾸며보는거죠.').attr({style:'font-weight:bold'}),
								$('<p/>').html('지금까지 이것저것 여러 스타일을 시도해봤지만 막상 해보니 생각했던데로 짜잔하고 완성되는건 아니더라고요.<br>그래도 계속 시도하다보면 언젠가는 짠하고 완성할 수 있는 날이 오지 않을까요?')
						)
				),
				$('<div/>').addClass('item').append(
						$('<div/>').addClass('h_scale').append($('<img/>').attr({src:$.img()+'/hyeri/banner3.jpg'})),
						$('<div/>').addClass('carousel-caption').append(
								$('<h2/>').html('삶은 온전히 나를 위해 살아갈때 가장 빛나는법').attr({style:'font-weight:bold'}),
								$('<p/>').html('어쩌면 행복한 일들보다 행복하지 않은 일들이 더 많은 게 우리의 삶이라고 하지만<br>그럼에도 불구하고 행복한 순간들은 늘 어디에나 존재한다는 걸<br>셀프 인테리어를 하면서 다시 한번 느끼게 되었어요.')
						)
				),		
				$('<div/>').addClass('item').append(
						$('<div/>').addClass('h_scale').append($('<img/>').attr({src:$.img()+'/hyeri/banner4.jpg'})),
						$('<div/>').addClass('carousel-caption').append(
								$('<h2/>').html('저한테 집은 엄마같아요.').attr({style:'font-weight:bold'}),
								$('<p/>').html('저한테 집은 마치 엄마 같은 곳이에요.<br>밖에서 힘들고 지쳐있다가도 집에 오면 편안하고 위로가 되잖아요,엄마처럼.<br>어딜 가더라도 결국 돌아오는 곳은 집이죠.')
						)
				),
				$('<div/>').addClass('item').append(
						$('<div/>').addClass('h_scale').append($('<img/>').attr({src:$.img()+'/hyeri/banner5.jpg'})),
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
    },
    a:()=>{
    	$('#footer').remove();
		$('#content').html('<div id="add_form" class="je_sign-in-form" >'
				+'<p id="je_font_2em" class="je_bold">회원가입</p>'
				+'        <section id="add_form_top" class="je_signup-form__social">'
				+'            <hr class="h_border">'
				+'            <p class="je_bold je_signup-form__social__title text-body-1">SNS계정으로 간편하게 회원가입</p>'
				+'            <a class="icon icon-sns-circle-md-kakao-talk je_signup-form__social__button" href="/users/auth/kakao">'
				+'					<img class="manImg" src='+$.img()+'/jieun/kakao.png ></img></a>'
				+'					<img class="manImg" src='+$.img()+'/jieun/naver.png ></img></a>'
				+'        </section>'
				+'        <hr class="h_border">'
				+'        <section id="add_form_middle" class="signup-form__email">'
				+'				<form novalidate="novalidate" class="new_normal_user" id="new_normal_user" action="/normal_users" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="✓"><input type="hidden" name="authenticity_token" value="HLPM6R/2QK3v2K5H9wCB/J77MnkLmliCKOrL14WRMpimvC/ZD5cJzXEowL2QhhT1VzYlCL8Valy17QKIm45yDQ==">'
				+'                    <div class="add_email">'
				+'                        <label class="je_bold">이메일</label>'
				+'                        <div class="input-group">'
				+'							<input type="text" style="width:45%; float:right" size="7" class="form-control" id="post_email" autofocus="" autocomplete="off">'
			    +'                           <span class="form-separator signup-form__email__email-at-mark" style="margin-left:5px">@&nbsp</span>'
			    +'							<input type="text" style="width:45%" size="12" class="form-control" id="pre_email" autofocus="" autocomplete="off">'
				+'                        </div>'
				+'                    </div>'
				+'                    <div class="add_pass" style="padding-top:20px">'
				+'                        <label class="je_bold" for="pass">비밀번호</label>'
				+'                        <p class="p1">8자이상 영문 대 소문자, 숫자, 특수문자를 사용하세요.</p>'
				+'						<input class="form-control" placeholder=""  required="required" type="password" id="pass">'
				+'                    </div>'
				+'                    <div class="add_pass_confirm" style="padding-top:20px">'
				+'                        <label class="je_bold" for="pass_confirm">비밀번호 확인</label></br>'
				+'							<input class="form-control" required="required" type="password" id="pass_confirm">'
				+'                        <p class="error"></p>'
				+'                    </div>'
				+'                    <div class="add_nickname" style="padding-top:15px">'
				+'                        <label class="je_bold form-label" for="nickname">별명</label>'
				+'                        <p class="p1">'
				+'                            2~15자 자유롭게 입력해주세요.'
				+'                        </p>'
				+'						<input class="form-control" required="required" type="text" id="nickname">'
				+'                    </div>'
				+'					</form></section>'
				+'        <button id="add_submit_btn" class="je_sign-in-form__form__submit btn je_btn-priority" type="submit" form="new_normal_user">'
				+'            회원가입하기'
				+'        </button>'
				+'        <p id="has-account">이미 아이디가 있으신가요?&nbsp<a class="je_bold underline" href="/users/sign_in">로그인</a></p>'
				+'    </section>'
				+'</section>'
				+'</div>'	
    	);
		
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
			
		$('#add_submit_btn').click(e=>{
				e.preventDefault();
				$.ajax({
					url : $.context()+'/member/add',
					method : 'POST',
					contentType : 'application/json',
					data : JSON.stringify({
						test : $('#nickname').val()
					}),
					success : d=>{
								
					},
					error : (m1,m2,m3)=>{
						alert("error발생");
					}
				});	
		});
		$('#has-account').click(e=>{
			e.preventDefault();
		});
    },
    l:()=>{
    	$('#footer').remove();
		$('#content').html('<div class="je_sign-in-form" >'
				+ '<h1 class="je_sign-in-form__header">'
				+ '<a id="main_btn" class="je_sign-in-form__header__link" href="#">'
				+ '<span style=" margin-left: auto; margin-right: auto;  display: block;">'
				+ ' <img class="je_manImg" src='
				+ $.img()
				+ '/jieun/logo1.jpg ></img></span>'
				+ '</a>    </h1>'
				+ '<form class="je_sign-in-form__form" id="new_user">'
				+ '<input placeholder="이메일" autofocus="autofocus" class="je_sign-in-form__form__input form-control sign-in-form__form__email" type="text" name="user[email]" id="user_email">'
				+ '<div class="je_sign-in-form__form__input-wrap je_sign-in-form__form__password">'
				+ '<input placeholder="비밀번호" autocomplete="off" class="je_sign-in-form__form__input form-control" type="password" name="user[password]" id="user_password">'
				+ '</div>'
				+ '<input type="hidden" name="remember_me" id="remember_me" value="checked">'
				+ '<input type="hidden" name="is_pro" id="is_pro" value="false">'
				+ '<input id="login_btn1" type="button" name="commit" value="로그인" class="je_sign-in-form__form__submit btn je_btn-priority" data-disable-with="로그인">'
				+ '</form>    <div class="je_sign-in-form__action">'
				+ '<a class="je_sign-in-form__action__entry" href="/users/password/new">비밀번호 재설정</a>'
				+ '<a id="join_btn1" class="je_sign-in-form__action__entry" href="#">회원가입</a>'
				+ '</div>'
				+ '<section class="je_sign-in-form__sns">'
				+ '<div class="je_sign-in-form__sns__list">'
				+ '<p style="font-size:80%; color:gray;">SNS계정으로 간편 로그인/회원가입</p>'
				+ '<img class="manImg" src='
				+ $.img()
				+ '/jieun/kakao.png ></img></a>&nbsp&nbsp&nbsp'
				+ '<img class="manImg" src='
				+ $.img()
				+ '/jieun/naver.png ></img></a>'
				+ '       <a class="je_sign-in-form__sns__entry" href="/users/auth/kakao">'
				+ '<span class="icon-page-login__c-3" aria-label="카카오계정으로 로그인"></span>'
				+ '</a>          <a class="je_sign-in-form__sns__entry" href="/users/auth/naver">'
				+ '<span class="icon-page-login__e-3" aria-label="네이버 아이디로 로그인"></span>'
				+ '</a>        </div>' + '</section>' + '</div>'
		);
		
    }
};



