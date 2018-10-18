"use strict";
var jieun = jieun || {};

jieun=(()=>{
	var w,nav,footer,content,context,script,style,img;
		context = $.context();
		script = $.script();
		style = $.style();
		img = $.img();
		w=$('#wrapper');
		content=$('#content');

		var detail=()=>{
			 
				$('#footer').remove();
				content.empty();
				
				let section =$('<section/>').addClass('je_row').appendTo(content);
				
				$('<div id="je_selling_helper_wrap" class="col-md-9" style="width: 100%;" />').append($('<div id="je_selling-helper" class=" navbar navbar-default" />')).appendTo(w);
				$('<section id="je_col-2"/>').append($('<nav id="je_product_tab"  />')).appendTo($('#je_selling_helper'));
				let ul = $('<ul class="nav nav-tabs nav-justified"/>').appendTo($('.navbar'));
				$('<li class="col2 active"/>').attr({'data-target':'product-info',role:'presentation'}).text('상품정보').appendTo(ul);
				$('<li class="col2" id="je_count"/>').attr({'data-target':'product-review',role:'presentation'}).text('리뷰').appendTo(ul);
				$('#je_count').append($('<span/>').text('(233)'));
				$('<li class="col2"/>').attr({'data-target':'product-shipping',role:'presentation'}).html('<span class="lg">배송/교환/환불</span>').appendTo(ul);
				$('<li class="col2 "/>').attr({'data-target':'product-blank',role:'presentation'}).appendTo(ul);
				$( document ).ready( function() {
			        var jbOffset = $( '#je_selling_helper_wrap').offset();
			        var conOffset = content.offset();
			        $( window ).scroll( function() {
			          if ( conOffset.bottom == jbOffset.top ) {
			            $( '#je_selling_helper_wrap' ).addClass( 'jbFixed' );
			          }
			          else {
			            $( '#je_selling_helper_wrap' ).removeClass( 'jbFixed' );
			          }
			        });
			      } );
				
								
				let section2 =$('<section "/>').addClass('je_row1').appendTo(w);
				
				let je_div_cover = $('<div/>').addClass('je_div_cover');
				let je_div_cover_info = $('<div/>').addClass('je_div_cover_info');
				let arr = ['a','b'];
				$.each(arr,function(i,j){
					let col = $('<div>').addClass('je_col'+i).appendTo(section).appendTo(content);
					col.appendTo(section);
					$('.je_col0').append(je_div_cover);
					$('.je_col1').append(je_div_cover_info);					
				});
				$('<img/>').attr({src:img+'/jieun/침대1.jpg',id:'je_view1'}).appendTo(je_div_cover).appendTo($('.je_col0'));
				
				let p = $('<p style="margin-top: 50px"/>').addClass('je_info1').appendTo(je_div_cover_info);
				let a1=$('<a/>').attr({href:"https://ohou.se/store"}).text('오늘의 집 스토어');
				let span1 = $('<span/>').addClass('glyphicon glyphicon-chevron-right').attr({"aria-hidden":"true",id : 'je_icon'});
				let span2 = $('<span/>').addClass('glyphicon glyphicon-chevron-right').attr({"aria-hidden":"true",id : 'je_icon'});
				let span3 = $('<span/>').addClass('glyphicon glyphicon-chevron-right').attr({"aria-hidden":"true",id : 'je_icon'});
				let span4 = $('<span/>').addClass('glyphicon glyphicon-chevron-right').attr({"aria-hidden":"true",id : 'je_icon'});
				let a2 = $('<a/>').attr({href:"https://ohou.se/store/category?category=0&order=popular"}).text('가구');
				let a3 = $('<a/>').attr({href:"https://ohou.se/store/category?category=0&order=popular"}).text('침실 가구');
				let a4 = $('<a/>').attr({href:"https://ohou.se/store/category?category=0&order=popular"}).text('매트리스');
				let a5 = $('<a/>').attr({href:"https://ohou.se/store/category?category=0&order=popular"}).text('스프링매트리스');
				
				a1.appendTo(p); 
				span1.appendTo(p);
				a2.appendTo(p); 
				span2.appendTo(p);
				a3.appendTo(p); 
				span3.appendTo(p);
				a4.appendTo(p); 
				span4.appendTo(p);
				a5.appendTo(p);
				p.appendTo(je_div_cover_info);
				
				let p1=$('<p/>').addClass('je_cover_title');
				p1.text('[최저가] 고밀도 필로우탑 하이브리드 매트리스(S/SS/Q/K)').appendTo(je_div_cover_info);

				let a6 = $('<a/>').addClass('je_review').attr({href:"https://ohou.se/productions/54844/selling#product-review"});
				let review = $('<span/>').addClass('je_star_review').attr({id:'je_line'});
				let star = $('<span/>').attr({class:'glyphicon glyphicon-star','aria-hidden':true});
					star.appendTo(review).appendTo(a6);
					star.appendTo(review).appendTo(a6);
					star.appendTo(review).appendTo(a6);
					star.appendTo(review).appendTo(a6);
					star.appendTo(review).appendTo(a6).text('226개의 리뷰');
					$('<br/>').appendTo(a6);
					a6.appendTo(je_div_cover_info);
				
				let p_price=$('<p/>').addClass('je_price_cover');

				$('<b/>').html('61%').attr({id:'je_line',class:'je_discount'}).appendTo(p_price);
				
				let origin = $('<h6/>').addClass('je_origin_cost').text('299,000');
				let ins = $('<ins/>').addClass('je_dis_cost').text('119,000원');
				/*$('<br/>').appendTo(origin);*/
				
				origin.appendTo(p_price);
				ins.appendTo(p_price);
				p_price.appendTo(je_div_cover_info);
				
				
				$('<button/>').attr({id:'je_sharebtn',class:'btn btn-primary btn-lg'}).appendTo(je_div_cover_info);
				$('#je_sharebtn').append(
						$('<span/>').addClass('glyphicon glyphicon-share').attr("aria-hidden","true"),
						$('<span style="font-size: 13px; margin-right:6px; margin-left:6px"/>').addClass('je_action__btn').text('공유'),
						$('<span style="font-size: 13px; margin-right:3px"/>').addClass('je_action__btn1').text('1.03K')
						
				);				

				$('<span/>').append($('<a/>').addClass('kakao_share').attr({href:"https://accounts.kakao.com/login/kakaostory?continue=https%3A%2F%2Fstory.kakao.com%2Fs%2Fshare%3Furl%3Dhttps%253A%252F%252Fohou.se%252Fproductions%252F54844%252Fselling%26text%3D%25EC%2598%25A4%25EB%258A%2598%25EC%259D%2598%25EC%25A7%2591%25EC%2597%2590%25EC%2584%259C%2520%25EC%259C%25A0%25EC%25A0%2580%25EB%2593%25A4%25EC%259D%2598%2520%25EB%25A6%25AC%25EB%25B7%25B0%25EC%2599%2580%2520%25EC%258A%25A4%25ED%2583%2580%25EC%259D%25BC%25EB%25A7%2581%25EC%2583%25B7%25EC%259D%2584%2520%25ED%2599%2595%25EC%259D%25B8%25ED%2595%2598%25EC%2584%25B8%25EC%259A%2594!%26kakao_agent%3Dsdk%252F1.16.0%2520os%252Fjavascript%2520lang%252Fko-KR%2520device%252FWin32%2520origin%252Fhttps%25253A%25252F%25252Fohou.se%26app_key%3D3019c756ec77dd7e0a24e56d9d784f77",target:'_blank'})
						.append($('<img/>').attr({src:img+'/jieun/kakao.png',style:'width="100px" height="100px"'})
						),
						$('<a/>').addClass('naver_share').attr({href:"http://share.naver.com/web/shareView.nhn?url=https://ohou.se/productions/54844/selling&title=[%EB%A0%88%EC%9D%B4%EB%94%94%EA%B0%80%EA%B5%AC][%EC%B5%9C%EC%A0%80%EA%B0%80]%20%EA%B3%A0%EB%B0%80%EB%8F%84%20%ED%95%84%EB%A1%9C%EC%9A%B0%ED%83%91%20%ED%95%98%EC%9D%B4%EB%B8%8C%EB%A6%AC%EB%93%9C%20%EB%A7%A4%ED%8A%B8%EB%A6%AC%EC%8A%A4(S/SS/Q/K)",target:'_blank'})
									.append($('<img/>').attr({src:img+'/jieun/naver.png',style:'width="100px" height="100px"'})
						)).appendTo(je_div_cover_info);
				

	    
				
				$('<select/>').attr({id:'je_selectbtn'}).append(
					$('<option/>').attr("value","0").text('사이즈'),
					$('<option/>').attr("value","01 몬스터 필로우탑 30T 침대 매트리스 싱글(S)").text('01 몬스터 필로우탑 30T 침대 매트리스 싱글(S)(119,000원)'),
					$('<option/>').attr("value","02 몬스터 필로우탑 30T 침대 매트리스 슈퍼싱글(SS)").text('02 몬스터 필로우탑 30T 침대 매트리스 슈퍼싱글(SS)(149,000원)'),
					$('<option/>').attr("value","03 몬스터 필로우탑 30T 침대 매트리스 퀸(Q)").text('03 몬스터 필로우탑 30T 침대 매트리스 퀸(Q)(179,000원)')					
				).appendTo(je_div_cover_info);
				
				$('<hr/>').attr({class:'je_line'}).appendTo(je_div_cover_info);
			
				$('<p style="font-size: 13px"/>').addClass('je_total_price').appendTo(je_div_cover_info);
				$('<span id="je_temp"/>').text('주문금액').appendTo($('.je_total_price'));
				//($('<span/>').addClass('je_text_black').html('<strong id="je_won">0</strong>원')).appendTo($('.je_total_price'));
				//$('<strong id="je_won"/>').addClass('je_text-heading').appendTo($('.je_text_black'));
				$('#je_temp').html('<label style="margin-right: 400px">주문금액</label><span style="width:20px,margin-right:100px"><strong id="je_won">0</strong>원</span>');
				
				
				let buttons=$('<div id="je_buttons" style="margin-top: 20px"/>')
				buttons.appendTo(je_div_cover_info);
				$('<button id="je_get_basket"/>').text('장바구니 담기').appendTo(buttons);
				$('<button id="je_buy"/>').text('구매하기').appendTo(buttons);
				

				
			


				//
				
				$('<div id="je_total_div"/>').appendTo(section2);
				$('<div id="je_total_1" class="col-md-9"/>').appendTo($('#je_total_div'));
				$('<div id="je_total_2" class="col-md-3"/>').appendTo($('#je_total_div'));
				

				
				let total_wrap = $('<div id="je_total_wrap" style="padding:70px 30px"/>').appendTo($('#je_total_1'));
				
				($('<section id="je_notice"/>').append(
						$('<img class="je_notice_img"/>').attr({src:img+'/jieun/notice_1.jpg'}),
						$('<p id="je_product_notice"/>').html('<p>구매 후<strong>15영업일 이내 발송</strong>되는 상품입니다.</p>'),
						$('<img class="je_notice_img"/>').attr({src:img+'/jieun/notice_2.jpg'}))).appendTo(total_wrap);

				$('<section id="je_detail">').appendTo(total_wrap);
				($('<div id="je_detail_contents" class="je_detail_hidden"/>').append($('<div style="margin: 0px; padding: 0px; width: 100%; text-align: center;"/>'))).appendTo($('#je_detail'));
				//<!-------------------- 오하임 전체공지------------------>
				//<!-------------------- 레이디가구 전체공지--------------->
				$('#je_detail_contents').append($('<img class="je_detail_img">').attr({src:img+'/jieun/gong.jpg'}));
				$('<div/>').html('&nbsp');
				$('<div/>').html('&nbsp');
				$('<div/>').html('&nbsp');
				//<!--------------------업체별(가드너) 공지 ST--------->
				//<!---------------------상세 START---------------------------->
				
				$('#je_detail_contents').append($('<img class="je_detail_img">').attr({src:img+'/jieun/gong2.jpg'}));
				
				$('<br/>');
				$('<br/>');
				$('#je_detail_contents').append($('<img class="je_detail_img">').attr({src:img+'/jieun/faq.jpg'}));
				//<!-------------------배송정보 START----------------------------->
				$('<br/>');
				$('<br/>');
				
				$('#je_detail_contents').append($('<img class="je_detail_img">').attr({src:img+'/jieun/배송1.jpg'}));

				//<!-------------------배송정보 END----------------------------->
				
				//product-info-noti
				$('<section id="je_info_noti">').appendTo(total_wrap);
				($('<tbody id="je_tbody"/>').appendTo($('<table class="line-height-normal" cellspacing="0">'))).appendTo($('#je_info_noti'));
				
				
				//review
				$('<section id="product-review">').appendTo(total_wrap);
				
				//shipping
				let section4 =$('<section/>');
				$('<section id="product-shipping">').appendTo(total_wrap);
				section4.appendTo($('#product-shipping'));
				section4.append($('<h4 class="bold text-black"/>').text('배송 관련 안내'));
				section4.append($('<table class="line-height-normal"/>'));
				$('#line-height-normal').append($('<tbody/>')).append('<tr/>').append('<td/>');
				let section5 =$('<section/>');
				section5.appendTo($('#product-shipping'));
				section5.append($('<h4 class="bold text-black"/>').text('교환 및 환불'));
				section5.append($('<table  class="line-height-normal" cellspacing="0"/>'));
				$('#line-height-normal').append($('<tbody/>')).append('<tr/>').append('<td/>');
				let refund=$('<section class= "text-caption-2 je_refund"/>');
				$('<p class="text-body-2 bold"/>').text('반품/교환 사유에 따른 요청 가능 기간').appendTo(refund);
				$('<p class="text-gray-light"/>').text('반품 시 먼저 판매자와 연락하셔서 반품사유, 택배사, 배송비, 반품지 주소 등을  협의하신 후 반품상품을 발송해 주시기 바랍니다.').appendTo(refund);
				$('<ol class="line-height-normal"/>').appendTo(refund);
				$('.line-height-normal').append($('<li/>').html('<span>1</span>구매자 단순 변심은 상품 수령 후 7일 이내 <small>(구매자 반품 배송비 부담)</small>'));
				$('.line-height-normal').append($('<li/>').html('<span>2</span>표시/광고와 상이, 상품하자의 경우 상품 수령 후 3개월 이내 혹은 표시/광고와 다른 사실을 안 날로부터 30일 이내.<br/>둘 중 하나 경과 시 반품/교환 불가 <small>판매자 반품 배송비 부담)</small>'));
				let refund2 = $('<section class="text-caption-2 je_refund"/>');
				refund2.append($('<p class="text-body-2 bold"/>').text('반품/교환 불가능 사유'));
				refund2.append($('<p class="text-gray-light"/>').text('아래와 같은 경우 반품/교환이 불가능합니다.'));
				refund2.append($('<ol class="line-height-normal">').append($('<li>').html('<span>1</span> 반품요청기간이 지난 경우')));
				$('.line-height-normal').append($('<li/>').html('<span>2</span>구매자의 책임 있는 사유로 상품 등이 멸실 또는 훼손된 경우 <small>(단, 상품의 내용을 확인하기 위하여 포장 등을 훼손한 경우는 제외)</small>'));
				//
				
				/*
				let section4=$('<section id="je_selling_option style="height: calc(100vh - 131px);"/>').html('<h4 style="font-weight:bold">옵션선택</h4>');
				let option_div = $('<div class="je_pd_selling_option"/>').appendTo(section4);
				($('<select/>').attr({id:'je_selectbtn'}).append(
						$('<option/>').attr("value","0").text('사이즈'),
						$('<option/>').attr("value","01 몬스터 필로우탑 30T 침대 매트리스 싱글(S)").text('01 몬스터 필로우탑 30T 침대 매트리스 싱글(S)(119,000원)'),
						$('<option/>').attr("value","02 몬스터 필로우탑 30T 침대 매트리스 슈퍼싱글(SS)").text('02 몬스터 필로우탑 30T 침대 매트리스 슈퍼싱글(SS)(149,000원)'),
						$('<option/>').attr("value","03 몬스터 필로우탑 30T 침대 매트리스 퀸(Q)").text('03 몬스터 필로우탑 30T 침대 매트리스 퀸(Q)(179,000원)')					
					)).appendTo(option_div);
				$('<input class=/>')*/
				}

			return{detail:detail};
})();

