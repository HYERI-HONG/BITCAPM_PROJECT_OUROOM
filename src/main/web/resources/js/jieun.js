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
				
				let section =$('<section/>').addClass('je_row');
				let up_div=$('<div/>').addClass('je_cover_container');
				let section2=$('<section/>').addClass('je_contents');
				let col1 = $('<div>').addClass('je_col1 je_2');
				let col2 = $('<div>').addClass('je_col2');	
				section.appendTo(content);
				section.appendTo(up_div);
				col1.appendTo(section);
				col2.appendTo(section);
				up_div.appendTo(content);
				
				
				for(let i=1;i<5;i++){
					var view = $('<img/>').attr({src:img+'/jieun/침대'+i+'.jpg',id:'je_view1'}).appendTo(col1).appendTo(section);
					};
				/*let row =$('<div/>').addClass('je_slide_row');
				let col = $('<div/>').addClass('je_slide_col');
				let slide = $('<div/>').addClass('je_carousel slide').attr({id:'je_myCarousel'});;
				let inner = $('<div/>').addClass('je_carousel-inner');
				let item_active=$('<div/>').addClass('je_item active').append(view);
				let aleft=$('<a/>').addClass('je_left carousel-control').attr({href:'#je_myCarousel','data-slide':'prev'});
				let aright=$('<a/>').addClass('je_right carousel-control').attr({href:'#je_myCarousel','data-slide':'next'});
				let ileft=$('<i/>').addClass('glyphicon glyphicon-chevron-left');
				let iright=$('<i/>').addClass('glyphicon glyphicon-chevron-right');
				
				item_active.appendTo(inner);
				inner.appendTo(slide);
				aleft.appendTo(slide); aright.appendTo(slide); inner.appendTo(slide);
				col.appendTo(col1); slide.appendTo(col1);
				col1.appendTo(section).appendTo(content);					 

				$('#je_myCarousel').carousel({interval: 10000}),
				$('.je_carousel .je_item').each(function(){
							  var next = $(this).next();
							  if (!next.length) {
							    next = $(this).siblings(':first');
							  }
							  next.children(':first-child').clone().appendTo($(this));

							  if (next.next().length>0) {
							    next.next().children(':first-child').clone().appendTo($(this));
							  }
							  else {
							    $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
							  }
							}).appendTo($('<script/>')).appendTo(content);

*/
				
				
				let je_div_cover = $('<div/>').addClass('je_div_cover');
				let je_div_cover_info = $('<div/>').addClass('je_div_cover_info');
				view.appendTo(je_div_cover).appendTo(col1);
				je_div_cover_info.appendTo(col2);
				
				let p = $('<p/>').addClass('je_info1').appendTo(je_div_cover_info);
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
				p.appendTo(content);
				
				let p1=$('<p/>').addClass('je_cover_title');
				p1.text('[최저가] 고밀도 필로우탑 하이브리드 매트리스(S/SS/Q/K)').appendTo(je_div_cover_info);
				
				let a6 = $('<a/>').addClass('je_review').attr({href:"https://ohou.se/productions/54844/selling#product-review"});
				a6.appendTo(je_div_cover_info);
				
				$('<button/>').attr({id:'je_sharebtn'}).appendTo(section).appendTo(content);
				$('#je_sharebtn').append(
						$('<span/>').addClass('glyphicon glyphicon-share').attr("aria-hidden","true"),
						$('<span/>').addClass('je_action__btn').text('공유'),
						$('<span/>').addClass('je_action__btn1').text('1.03K')
						
				);
				$('<span/>').append($('<a/>').addClass('kakao_share').attr({href:"https://accounts.kakao.com/login/kakaostory?continue=https%3A%2F%2Fstory.kakao.com%2Fs%2Fshare%3Furl%3Dhttps%253A%252F%252Fohou.se%252Fproductions%252F54844%252Fselling%26text%3D%25EC%2598%25A4%25EB%258A%2598%25EC%259D%2598%25EC%25A7%2591%25EC%2597%2590%25EC%2584%259C%2520%25EC%259C%25A0%25EC%25A0%2580%25EB%2593%25A4%25EC%259D%2598%2520%25EB%25A6%25AC%25EB%25B7%25B0%25EC%2599%2580%2520%25EC%258A%25A4%25ED%2583%2580%25EC%259D%25BC%25EB%25A7%2581%25EC%2583%25B7%25EC%259D%2584%2520%25ED%2599%2595%25EC%259D%25B8%25ED%2595%2598%25EC%2584%25B8%25EC%259A%2594!%26kakao_agent%3Dsdk%252F1.16.0%2520os%252Fjavascript%2520lang%252Fko-KR%2520device%252FWin32%2520origin%252Fhttps%25253A%25252F%25252Fohou.se%26app_key%3D3019c756ec77dd7e0a24e56d9d784f77",target:'_blank'})
						.append($('<img/>').attr({src:img+'/jieun/kakao.png',style:'width="100px" height="100px"'})
						),
						$('<a/>').addClass('naver_share').attr({href:"http://share.naver.com/web/shareView.nhn?url=https://ohou.se/productions/54844/selling&title=[%EB%A0%88%EC%9D%B4%EB%94%94%EA%B0%80%EA%B5%AC][%EC%B5%9C%EC%A0%80%EA%B0%80]%20%EA%B3%A0%EB%B0%80%EB%8F%84%20%ED%95%84%EB%A1%9C%EC%9A%B0%ED%83%91%20%ED%95%98%EC%9D%B4%EB%B8%8C%EB%A6%AC%EB%93%9C%20%EB%A7%A4%ED%8A%B8%EB%A6%AC%EC%8A%A4(S/SS/Q/K)",target:'_blank'})
									.append($('<img/>').attr({src:img+'/jieun/naver.png',style:'width="100px" height="100px"'})
						)).appendTo(section).appendTo(content);
				
				$('<select/>').attr({id:'je_selectbtn'}).appendTo(content);				
				$('#je_selectbtn').append(
					$('<option/>').attr("value","0").text('사이즈'),
					$('<option/>').attr("value","01 몬스터 필로우탑 30T 침대 매트리스 싱글(S)").text('01 몬스터 필로우탑 30T 침대 매트리스 싱글(S)(119,000원)'),
					$('<option/>').attr("value","02 몬스터 필로우탑 30T 침대 매트리스 슈퍼싱글(SS)").text('02 몬스터 필로우탑 30T 침대 매트리스 슈퍼싱글(SS)(149,000원)'),
					$('<option/>').attr("value","03 몬스터 필로우탑 30T 침대 매트리스 퀸(Q)").text('03 몬스터 필로우탑 30T 침대 매트리스 퀸(Q)(179,000원)')					
				).appendTo(section).appendTo(content);
				
				let span5 = $('<span/>').addClass('je_icon_store').attr('aria-hidden','true');
				let strong = $('<strong/>').text('레이디가구');
				let h6 = $('<h6/>').text('같은 브랜드 더 보기');
				let brandbtn = $('<button/>').addClass('je_brand_more_btn').attr({href:"https://ohou.se/productions/feed?order=buy&query=%EB%A0%88%EC%9D%B4%EB%94%94%EA%B0%80%EA%B5%AC&selling=true"}).appendTo(p).appendTo(je_div_cover_info);
					
			    span5.appendTo('.je_brand_more_btn');
			    strong.appendTo('.je_brand_more_btn');
			    h6.appendTo('.je_brand_more_btn');
			    span4.appendTo('.je_brand_more_btn');
			    
			    je_div_cover_info.appendTo(col2);
			    col2.appendTo(section);
			    section.appendTo(content);
				
				

						

				
				}

			return{detail:detail};
})();

