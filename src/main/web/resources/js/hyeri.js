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
    	//메인홈
    	$('#content').empty();
    	$('<div/>').addClass('container').attr({id:"h_main"}).appendTo($('#content'));
		
		/*-------------------section1 :: banner --------------------*/
    	//캐러셀
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
		
		$('<div/>').addClass('h_section').attr({id:"section_icon"}).appendTo($('#h_main'));
		$('<ul/>').addClass('h_icon_list').attr({id:"h_icon_list"}).appendTo($('#section_icon'));
		$('<li/>').addClass('col-4 col-md-2 h_icon').append(
				$('<a/>').addClass('h_icon_atag').attr({id:'h_gologin'}).append(
					$('<div/>').addClass('h_icon_image').append(
							$('<img/>').addClass('h_icon_image_image').attr({src:$.img()+'/hyeri/join.svg'})
					),
					$('<div/>').addClass('h_icon_title').html('니방내방 시작하기'),	
					$('<div/>').addClass('h_icon_caption').html('회원가입 바로가기')
				)
		).appendTo($('#h_icon_list'));
		$('<li/>').addClass('col-4 col-md-2 h_icon').append(
				$('<a/>').addClass('h_icon_atag').attr({id:'h_gowrite'}).append(
					$('<div/>').addClass('h_icon_image').append(
							$('<img/>').addClass('h_icon_image_image').attr({src:$.img()+'/hyeri/myroom.svg'})
					),
					$('<div/>').addClass('h_icon_title').html('내방 소개하기'),	
					$('<div/>').addClass('h_icon_caption').html('글쓰기 바로가기')
				)
		).appendTo($('#h_icon_list'));
		$('<li/>').addClass('col-4 col-md-2 h_icon').append(
				$('<a/>').addClass('h_icon_atag').attr({id:'h_gocom'}).append(
					$('<div/>').addClass('h_icon_image').append(
							$('<img/>').addClass('h_icon_image_image').attr({src:$.img()+'/hyeri/sns.svg'})
					),
					$('<div/>').addClass('h_icon_title').html('니방 보러가기'),	
					$('<div/>').addClass('h_icon_caption').html('커뮤니티 바로가기')
				)
		).appendTo($('#h_icon_list'));
		$('<li/>').addClass('col-4 col-md-2 h_icon').append(
				$('<a/>').addClass('h_icon_atag').attr({id:'h_gostore'}).append(
					$('<div/>').addClass('h_icon_image').append(
							$('<img/>').addClass('h_icon_image_image').attr({src:$.img()+'/hyeri/cart.svg'})
					),
					$('<div/>').addClass('h_icon_title').html('쇼핑하기'),	
					$('<div/>').addClass('h_icon_caption').html('스토어 바로가기')
				)
		).appendTo($('#h_icon_list'));
		
		
		//icon클릭시 페이지 이동
		$('#h_gologin').click(e=>{
			$('#footer').remove();
			hyeri.page.a();
		});
		$('#h_gowrite').click(e=>{
			//단아 글쓰기 바로가기
			$('#d_top_btn').hide();
			$.getScript($.script()+'/danah.js', ()=>{
				danah.u.wb();
				$('#h_wirte_btn').trigger('click');
            });	
		});
		$('#h_gocom').click(e=>{
			//단아 커뮤니티 바로가기
			$('#footer').remove();
			$('#h_search_btn').attr({ style: "visibility: visible"});
			$('#h_wirte_btn').attr({ style: "visibility: visible"});
			$.getScript($.script()+'/danah.js', ()=>{
				 danah.init($.context());
            });
		});
		$('#h_gostore').click(e=>{
			 $('#footer').remove();
			 $.getScript($.script()+'/jun.js', ()=>{
				 jun.init(); 
	         });
		});
		
		//중간 광고
		$('<div/>').addClass('h_section').attr({id:"h_middle_banner"}).append(
			$('<img/>').addClass('h_middle_banner_img').attr({src:$.img()+'/hyeri/middlebanner.png'})	
		).appendTo($('#h_main'));
		
		
		/*-------------------section3 :: community 게시글 --------------------*/
		$('<div/>').addClass('h_section').attr({id:"section_community"}).appendTo($('#h_main'));
		
		$('<div/>').addClass('h_menu_header').append(
				$('<h4/>').addClass('h_menu_title').text('오늘의 인기 사진'),
				$('<a/>').addClass('h_menu_move').attr({id:'h_com_dirbtn'}).text('더보기')
				.click(e=>{
					//커뮤니티 더보기 버튼, 커뮤니티로 이동
					$('#footer').remove();
					$('#h_search_btn').attr({ style: "visibility: visible"});
					$('#h_wirte_btn').attr({ style: "visibility: visible"});
					$.getScript($.script()+'/danah.js', ()=>{
                        danah.init($.context());
                    });
					
				})
		).appendTo($('#section_community'));
		
		
		$('<ul/>').addClass('h_com_list').attr({id:"h_com_list"}).appendTo($('#section_community'));
		//커뮤니티 list 가져오기
		$.getJSON($.context()+'/home/clist',d=>{
			$.each(d.list,(i,j)=>{
				$('<li/>').addClass('col-6 col-md-3 h_com_article').append(
						$('<div/>').addClass('h_com_article_wrap').append(
							$('<div/>').addClass('h_com_article_img_wrap').append(
								$('<img/>').addClass('h_com_article_image').attr({src:$.img()+'/danah/post/'+ j.lastUpdate.replace(/-/gi, '/') + '/' + j.image}).click(e=>{

									$.getScript($.script() + '/danah.js', () => { 
										$('#footer').remove();
										$('#h_search_btn').attr({ style: "visibility: visible"});
										$('#h_wirte_btn').attr({ style: "visibility: visible"});
										danah.s.d(j.seq); 
									});

								})
							),
							$('<div/>').addClass('h_com_article_content_wrap').append(
								$('<span/>').attr({style:'background-image:url('+$.img()+((j.profile === '' || j.profile === undefined) ? '/hyeri/profile/p0.png' : '/hyeri/profile/' + j.profile)+')'}).addClass('h_com_article_content_profile'),
								$('<span/>').addClass('h_com_article_content_nickname').text(j.nickname)
							)
						)
				).appendTo($('#h_com_list'));
			})
		})
		
		
		/*-------------------section3 :: store 게시글 --------------------*/
		let cate =[{name:'전체', seq:0},
			{name:'침실', seq:1},
			{name:'거실', seq:2},
			{name:'주방', seq:3},
			{name:'학생방', seq:4},
			{name:'서재', seq:5}]
		
		$('<div/>').addClass('h_section').attr({id:"section_store"}).appendTo($('#h_main'));
		
		$('<div/>').addClass('h_menu_header').append(
				$('<h4/>').addClass('h_menu_title').text('오늘의 인기 상품')	
		).appendTo($('#section_store'));
		$('<div/>').addClass('h_menu_category1').append(
			$('<ul/>').addClass('h_menu_category_menu')
		).appendTo($('#section_store'));
		
	
		$.each(cate,(i,j)=>{
			//카테고리 메뉴 그리기
			$('<li/>').addClass('h_menu_category_menu_li '+((j.seq==0)?'active':'')).attr({id:j.seq}).text(j.name).appendTo('.h_menu_category_menu')
			.click(e=>{
				//active 설정 변경, 카테고리 클릭했을때 상품 list가져오기
				$('.h_menu_category_menu_li').removeClass('active');
			    $('#'+j.seq).addClass('active');
			   
			    $.getJSON($.context()+'/home/slist/'+j.name,d=>{
					$('#h_menu_item_list').empty();
					$.each(d.list,(i,j)=>{
						$('<li/>').addClass('col-5 col-md-3 col-xl-2 h_menu_item').append(
								$('<div/>').addClass('h_menu_item_wrap').append(
									$('<div/>').addClass('h_menu_item_img_wrap').append(
										$('<img/>').addClass('h_menu_item_img').attr({src:$.img()+'/jun/'+j.category+'/'+j.photo+'.jpg'}).click(e=>{
											e.preventDefault();
							                $('#footer').remove();
											$.getScript($.script()+'/jieun.js',()=>{
												jieun.detail(j);
											})
										})
									),
									$('<div/>').addClass('h_menu_item_content_wrap').append(
										$('<p/>').addClass('h_menu_item_content_title').text(j.title),
										$('<p/>').addClass('h_menu_item_content_percent').text(j.discount+'%'),
										$('<p/>').addClass('h_menu_item_content_price').text(j.sum+'원')
									)
								)
						).appendTo($('#h_menu_item_list'));
					});
				})
			})
		});
		
		//상품 list가져오기
		
		$('<div/>').addClass('h_menu_category2').append(
				$('<ul/>').addClass('h_menu_item_list').attr({id:'h_menu_item_list'})
		).appendTo($('#section_store'));
		
		$.getJSON($.context()+'/home/slist/전체',d=>{
		/*	setTimeout(function(){
			}, 400) ; */
			$.each(d.list,(i,j)=>{
				$('<li/>').addClass('col-5 col-md-3 col-xl-2 h_menu_item').append(
						$('<div/>').addClass('h_menu_item_wrap').append(
							$('<div/>').addClass('h_menu_item_img_wrap').append(
								$('<img/>').addClass('h_menu_item_img').attr({src:$.img()+'/jun/'+j.category+'/'+j.photo+'.jpg'}).click(e=>{
									e.preventDefault();
					                $('#footer').remove();
									$.getScript($.script()+'/jieun.js',()=>{
										jieun.detail(j);
									})
								})
							),
							
							$('<div/>').addClass('h_menu_item_content_wrap').append(
								$('<p/>').addClass('h_menu_item_content_title').text(j.title),
								$('<p/>').addClass('h_menu_item_content_percent').text(j.discount+'%'),
								$('<p/>').addClass('h_menu_item_content_price').text(((Math.round(j.sum/100)*100)+"").replace(/\B(?=(\d{3})+(?!\d))/g, ',')+'원')
							)
						)
				).appendTo($('#h_menu_item_list'));
			
			});
			
		})	
    },
    a:()=>{
    	//회원가입
		$('#content').html('<div id="add_form" class="je_sign-in-form" >'
				+'<p id="je_font_2em" class="je_bold">회원가입</p>'
				+'        <hr class="h_border">'
				+'        <section id="add_form_middle" class="signup-form__email">'
				+'				<form novalidate="novalidate" class="new_normal_user" id="new_normal_user" action="/normal_users" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="✓"><input type="hidden" name="authenticity_token" value="HLPM6R/2QK3v2K5H9wCB/J77MnkLmliCKOrL14WRMpimvC/ZD5cJzXEowL2QhhT1VzYlCL8Valy17QKIm45yDQ==">'
				+'                    <div class="add_email">'
				+'                        <label class="je_bold" style="display:block">이메일</label>'
				+'							<input type="email" style="width:255px;display:inline" class="form-control " id="h_email" autofocus="" autocomplete="off">'
				+'                    </div>'
				+'                    <div class="add_pass" style="padding-top:20px">'
				+'                        <label class="je_bold" for="h_pass">비밀번호</label>'
				+'                        <p class="p1">8자이상 영문 대 소문자, 숫자, 특수문자를 사용하세요.</p>'
				+'						<input class="form-control " placeholder="" type="password" id="h_pass">'
				+'                    </div>'
				+'                    <div class="add_pass_confirm" style="padding-top:20px">'
				+'                        <label class="je_bold" for="h_pass_ck">비밀번호 확인</label></br>'
				+'							<input class="form-control " type="password" id="h_pass_ck">'
				+'                        <p class="error"></p>'
				+'                    </div>'
				+'                    <div class="add_nickname" style="padding-top:15px">'
				+'                        <label class="je_bold form-label" for="nickname">별명</label>'
				+'                        <p class="p1">'
				+'                            2~15자 자유롭게 입력해주세요.'
				+'                        </p>'
				+'						<input class="form-control " type="text" id="nickname" style="width:255px;display:inline">'
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
		
		
		$('<div/>').attr({class:"bir_yy",id:"bir_yy_d"}).appendTo($('#bir_wrap'));
		$('<span/>').addClass('bir_box').attr({id:"bir_yy_s"}).appendTo($('#bir_yy_d'));
		$('<select/>').addClass('bir_sel ').attr({id:"bir_year",title:"년"}).appendTo($('#bir_yy_s'));
		$('<option/>').html('년').appendTo($('#bir_year'));
		for(let i=1950;i<2018;i++){
			$('<option/>').attr({value:i+''}).html(i+'년').appendTo($('#bir_year'));
		}
	
		$('<div/>').attr({class:"bir_mm", id:"bir_mm_d"}).appendTo($('#bir_wrap'));
		$('<span/>').addClass('bir_box').attr({id:"bir_mm_s"}).appendTo($('#bir_mm_d'));
		$('<select/>').addClass('bir_sel ').attr({id:"bir_month",title:"월"}).appendTo($('#bir_mm_s'));
		$('<option/>').html('월').appendTo($('#bir_month'));
		for(let i=1;i<13;i++){
			$('<option/>').attr({value:i+''}).html(i+'월').appendTo($('#bir_month'));
		}
		$('<div/>').attr({class:"bir_dd", id:"bir_dd_d"}).appendTo($('#bir_wrap'));
		$('<span/>').addClass('bir_box').attr({id:"bir_dd_s"}).appendTo($('#bir_dd_d'));
		$('<select/>').addClass('bir_sel').attr({id:"bir_day",title:"일"}).appendTo($('#bir_dd_s'));
		$('<option/>').html('일').appendTo($('#bir_day'));
		for(let i=1;i<31;i++){
			$('<option/>').attr({value:i+''}).html(i).appendTo($('#bir_day'));
		}
		
		/*성별*/
		$('<label/>').addClass('je_bold').html("성별").attr({style:"padding-top:20px"}).appendTo($('#add_form_middle'));
		$('<div/>').attr({id:"gender_wrap"}).addClass('add_gen').appendTo($('#add_form_middle'));
		$('<select/>').addClass('gen_sel ').attr({id:"gender",title:"성별"}).appendTo($('#gender_wrap'));
		$('<option/>').html('성별').appendTo($('#gender'));
		$('<option/>').html('여자').attr({value:"여자"}).appendTo($('#gender'));
		$('<option/>').html('남자').attr({value:"남자"}).appendTo($('#gender'));
		
		/*이미지 업로드*/
		var profile;
		$('<label/>').addClass('je_bold').html("프로필 사진 업로드").attr({style:"padding-top:20px;padding-bottom:5px"}).appendTo($('#add_form_middle'));
		$('<div/>').addClass('h_imgup_con').append(
				$('<form/>').attr({enctype:'multipart/form-data',id:'h_imgup_form'}).append(
						$('<div/>').addClass('h_imgup_prev').append(
								$('<div/>').attr({id:'h_targetLayer',style:'opacity: 0.7;'}),
								$('<img/>').addClass('h_icon_choose_image').attr({src:$.img()+'/hyeri/upimageicon.png',style:'opacity:0.5'}),
								$('<div/>').addClass('h_imgup').append(
										$('<input/>').attr({type:"file",name:'h_find_img',id:'h_find_img'}).addClass('h_inputFile')
										.change(function(a) {
											let ck = (this.files[0].name.match(/jpg|gif|png|jpeg/i)) ? true : false;
											if(ck){
												profile=this.files[0].name;
												hyeri.func.iu(this);
											}else{
												alert("gif,png,jpg,jpeg 파일만 업로드 할 수 있습니다.");
											}
										})	
								)
						)
						
				)
		).appendTo($('#add_form_middle'));
		
		/*이메일, 별명 중복 체크*/
		$('<a/>').addClass('h_dupck_btn').html('중복확인<br>').appendTo($('.add_email')).click(e=>{
			$.ajax({
				url : $.context()+'/member/dpcheck',
				method : 'POST',
				contentType : 'application/json',
				data : JSON.stringify({
					attr : 'email',
					val : $('#h_email').val()
				}),
				success : d=>{
					$('#ec').remove();
					$('<h7/>').attr({style:'color:blue',id:'ec'}).html(
							(d==1)?'이미 사용중인 이메일입니다.'
									:
									($('#h_email').val().indexOf('@')<0)?'이메일형식이 올바르지 않습니다.':'사용 가능한 이메일입니다.').appendTo($('.add_email'));
				},
				error : (m1,m2,m3)=>{
					alert("error발생");
				}
			});		
			
		});
		$('<a/>').addClass('h_dupck_btn').html('중복확인<br>').appendTo($('.add_nickname')).click(e=>{
			$.ajax({
				url : $.context()+'/member/dpcheck',
				method : 'POST',
				contentType : 'application/json',
				data : JSON.stringify({
					attr : 'nickname',
					val : $('#nickname').val()
				}),
				success : d=>{
					$('#nc').remove();
					$('<h7/>').attr({style:'color:blue',id:'nc'}).html((d==1)?'이미 사용중인 별명입니다.':'사용 가능한 별명입니다.').appendTo($('.add_nickname'));
				},
				error : (m1,m2,m3)=>{
					alert("error발생");
				}
			});		
			
		});
		
		//회원가입버튼 클릭
		$('#add_submit_btn').click(e=>{
			e.preventDefault();
			//입력값 유무 체크
			let ck=true;
			let arr=[
				{c:'add_email',i:'#h_email'},
				{c:'add_pass',i:'#h_pass'},
				{c:'add_pass_confirm',i:'#h_pass_ck'},
				{c:'add_nickname',i:'#nickname'},
				{c:'add_gen',i:'#gender'}
				];
			$.each(arr,(x,j)=>{
				$('<h7/>').attr({style:'color:red',id:j.c}).appendTo($('.'+j.c));
				if($(j.i).val()==''||$(j.i).val()=='성별'){
					$('#'+j.c).html('필수 값을 입력하세요.');
					ck=false;
				}else{
					$('#'+j.c).html('');
				}
				if(j.c=='add_pass_confirm'){
					if($('#h_pass').val()!=$('#h_pass_ck').val()){
						$('#'+j.c).html('비밀번호가 일치하지 않습니다.');	
						ck=false;
					}
				}
				if(j.c=='add_email'){
					if($('#h_email').val()!=''&&$('#h_email').val().indexOf('@')<0){
						$('#'+j.c).html('이메일 형식이 올바르지 않습니다.');	
						ck=false;
					}
				}
			});
			$('#add_bir').remove();
			if($('#bir_year').val()=='년'||$('#bir_month').val()=='월'||$('#bir_day').val()=='일'){
				$('<h7/>').attr({style:'color:red',id:'add_bir'}).html('생년월일을 모두 선택하세요.').appendTo($('#bir_wrap'));
				ck=false;
			}
			//submit
			let d = new Date();
			if(ck){
				$.ajax({
					url : $.context()+'/member/add1',
					method : 'POST',
					contentType : 'application/json',
					data : JSON.stringify({
						email : $('#h_email').val(),
						password : $('#h_pass').val(),
						nickname : $('#nickname').val(),
						birthday : $('#bir_year').val()+'-'+$('#bir_month').val()+'-'+$('#bir_day').val(),
						gender  : $('#gender').val(),
						profile : profile,
						join_date : d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()
					}),
					success : d=>{
						if(d=='SUCCESS'){
							alert("회원가입 성공");
							hyeri.page.l();
						}
						else{
							alert("회원가입 실패");
						}
					},
					error : (m1,m2,m3)=>{
						alert("error발생");
					}
				});		
			}
		});
		$('#has-account').click(e=>{
			e.preventDefault();
			hyeri.page.l();
		});
    },
    l:()=>{
    	//로그인
		$('#content').html('<div class="je_sign-in-form" >'
				+ '<h1 class="je_sign-in-form__header">'
				+ '<a id="main_btn" class="je_sign-in-form__header__link" href="#">'
				+ '<span style=" margin-left: auto; margin-right: auto;  display: block;">'
				+ ' <img class="je_manImg" src='
				+ $.img()
				+ '/jieun/logo1.jpg ></img></span>'
				+ '</a>    </h1>'
				+ '<form class="je_sign-in-form__form" id="new_user">'
				+ '<input placeholder="관리자 이메일 : admin" autofocus="autofocus" class="je_sign-in-form__form__input form-control sign-in-form__form__email" type="text" name="user[email]" id="user_email">'
				+ '<div id="h_rs" class="je_sign-in-form__form__input-wrap je_sign-in-form__form__password">'
				+ '<input placeholder="관리자 비밀번호 : admin" autocomplete="off" class="je_sign-in-form__form__input form-control" type="password" name="user[password]" id="user_password">'
				+ '</div>'
				+ '<input type="hidden" name="remember_me" id="remember_me" value="checked">'
				+ '<input type="hidden" name="is_pro" id="is_pro" value="false">'
				+ '<input id="login_btn1" type="button" name="commit" value="로그인" class="je_sign-in-form__form__submit btn je_btn-priority" data-disable-with="로그인">'
				+ '</form>    <div class="je_sign-in-form__action">'
				+ '<a id="pwup_btn1" class="je_sign-in-form__action__entry" href="/users/password/new">비회원 주문조회</a>'
				+ '<a id="join_btn1" class="je_sign-in-form__action__entry" href="#">회원가입</a>'
				+ '</div>'
				+ '<hr border-width: 0.5px>'
				+ '<section class="h_sns_login">'
				+ '<div class="h_kakaologin">'
				+ '</div>' + '</section>' + '</div>'
		);
		
		$('#login_btn1').click(e=>{
			e.preventDefault();
			$('<h7/>').attr({style:'color:red',id:'h_rsh'}).empty().appendTo($('#h_rs'));
			if($('#user_email').val()==''||$('#user_password').val()==''){
				$('#h_rsh').html('이메일과 비밀번호를 모두 입력해주세요.');
			}else{
				$.ajax({
					url : $.context()+'/member/login',
					method : 'POST',
					contentType : 'application/json',
					data : JSON.stringify({
						email : $('#user_email').val(),
						password : $('#user_password').val(),
					}),
					success : d=>{
						if(d.idValid==='WRONG'){
							$('#h_rsh').html('일치하는 이메일이 없습니다.');
						}else if(d.pwValid==='WRONG'){
							$('#h_rsh').html('비밀번호를 잘못 입력했습니다.');
						}else{
							//브라우저닫으면 없어지는 세션 쿠키 생성	
							$.cookie('userid', d.value.seq);
							$.cookie('nickname', d.value.nickname);
							$.cookie('profile', d.value.profile);
							//쿠키삭제하기,true/false반환
							//$.removeCookie('userid');
							app.router.main();
						}
					},
					error : (m1,m2,m3)=>{
						alert("error발생");
					}
				});		
			}
		});
		$('#join_btn1').click(e=>{
			e.preventDefault();
			hyeri.page.a();
		});
		$('.je_manImg').click(e=>{
			e.preventDefault();
			hyeri.page.h();
		});
		$('#pwup_btn1').click(e=>{
			e.preventDefault();
			alert("서비스 준비중입니다.");
		});
		//카카오톡 로그인
		
		$('<a/>').attr({id:'kakao-login-btn'}).appendTo('.h_kakaologin');
		$('<a/>').attr({href:'http://developers.kakao.com/logout'}).appendTo('.h_kakaologin');
		
		Kakao.cleanup();
		Kakao.init('cf638c2a7c366ab17beba0ec7c52bbcb');
		
        // 카카오 로그인 버튼을 생성합니다.
        Kakao.Auth.createLoginButton({
          container: '#kakao-login-btn',
          success: function(authObj) {
            Kakao.API.request({
                url: '/v1/user/me',
                success: function(res) {
                	//카카오톡으로 부터 정보를 가져옴

               /*       console.log("id : "+res.id);
                      console.log("email : "+res.kaccount_email);
                      console.log("pw : "+res.uuid);
                      
                      console.log("age : "+res.properties.age_rang);
                      console.log("birthday : "+res.properties.birthday);
                      console.log("gender : "+res.properties.gender);
                      
                      console.log("profile image : "+res.properties.profile_image);
                      console.log("nickname : "+res.properties.nickname);*/
                	
                      //카카오톡에서 가져온 정보로 로그인
                      $.ajax({
      						url : $.context()+'/member/login',
      						method : 'POST',
      						contentType : 'application/json',
      						data : JSON.stringify({
      							email : res.kaccount_email,
      							password : res.uuid,
      					}),
      					success : d=>{
      						if(d.idValid==='WRONG'||d.pwValid==='WRONG'){
      							 console.log("가입 정보 없음");
      							//기존에 가입된 정보가 없으면 자동 회원가입
      							let a = new Date();
      							$.ajax({
      								url : $.context()+'/member/add2',
      								method : 'POST',
      								contentType : 'application/json',
      								data : JSON.stringify({
      									email : res.kaccount_email,
      									password : res.uuid,
      									nickname : 'kakao'+res.id,
      									birthday : a.getFullYear()+'-'+(a.getMonth()+1)+'-'+a.getDate(),
      									gender  : ((Math.floor((Math.random() * 2) + 1)==1)? '남자':'여자'),
      									profile : null,
      									join_date : a.getFullYear()+'-'+(a.getMonth()+1)+'-'+a.getDate(),
      									age : (Math.floor((Math.random() * 55) + 1)+10)
      								}),
      								success : d=>{
      									if(d=='SUCCESS'){
      										alert("가입 기록이 없어 자동 회원가입 후 로그인되었습니다.");
      										hyeri.page.l();
      									}
      									else{
      										alert("카카오톡 회원 가입이 실패하였습니다.");
      									}
      								},
      								error : (m1,m2,m3)=>{
      									alert("카카오톡 회원가입 오류 발생");
      								}
      							});		
      						}else{
      							console.log("카카오톡으로 로그인되었습니다.");
      							$.cookie('userid', d.value.seq);
      							$.cookie('nickname', d.value.nickname);
    							$.cookie('profile', d.value.profile);
      							app.router.main();
      						}
      					},
      					error : (m1,m2,m3)=>{
      						alert("카카오톡 로그인 오류발생");
      					}
      				});		
                }
            })
          },
          fail: function(err) {
             alert(JSON.stringify(err));
          }
        });
    }
};
hyeri.func ={
		//기능 분리
		iu: d =>{
			//이미지 업로드시 업로드한 파일 임시 저장 기능, 이미지 미리보기
				var fd = new FormData();
				fd.append('file',d.files[0]);
				$.ajax({
					url: $.context()+'/member/upload',
					type: 'POST',
		            data: fd,
		            async: false,
		            cache: false,
		            contentType: false,
		            processData: false
				}).done(function(){
					 if (d.files[0]) {
					        var fileReader = new FileReader();
					        fileReader.onload = function (e) {
					            $('#blah').attr('src', e.target.result);
								$("#h_targetLayer").html('<img src="'+e.target.result+'" width="200px" height="200px" class="h_upload-preview" />');
								$(".h_icon_choose_image").attr({style:'opacity:0 !important'});
					        }
							fileReader.readAsDataURL(d.files[0]);
					    }
				});
		}
}



