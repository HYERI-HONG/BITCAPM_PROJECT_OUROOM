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
		let div = $('<div/>');
		var detail=()=>{
			 
				$('#footer').remove();
				content.empty();
				
				
							
				$('<button/>').attr({id:'je_sharebtn'}).appendTo(content);
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
						)).appendTo(content);
				$('<select/>').attr({id:'je_selectbtn'}).appendTo(content);
				
				$('#je_selectbtn').append(
					$('<option/>').attr("value","0").text('사이즈'),
					$('<option/>').attr("value","01 몬스터 필로우탑 30T 침대 매트리스 싱글(S)").text('01 몬스터 필로우탑 30T 침대 매트리스 싱글(S)(119,000원)'),
					$('<option/>').attr("value","02 몬스터 필로우탑 30T 침대 매트리스 슈퍼싱글(SS)").text('02 몬스터 필로우탑 30T 침대 매트리스 슈퍼싱글(SS)(149,000원)'),
					$('<option/>').attr("value","03 몬스터 필로우탑 30T 침대 매트리스 퀸(Q)").text('03 몬스터 필로우탑 30T 침대 매트리스 퀸(Q)(179,000원)')					
				);
						

				
				}

			return{detail:detail};
})();

