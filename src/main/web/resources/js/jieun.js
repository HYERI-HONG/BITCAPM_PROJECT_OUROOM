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
				content.text('jieun상품디테일');
				$('<select/>').attr({id:'je_selectbtn'}).appendTo(content);
				$('#je_selectbtn').append(
					$('<option/>').attr("value","0").text('사이즈'),
					$('<option/>').attr("value","01 몬스터 필로우탑 30T 침대 매트리스 싱글(S)").text('01 몬스터 필로우탑 30T 침대 매트리스 싱글(S)(119,000원)'),
					$('<option/>').attr("value","02 몬스터 필로우탑 30T 침대 매트리스 슈퍼싱글(SS)").text('02 몬스터 필로우탑 30T 침대 매트리스 슈퍼싱글(SS)(149,000원)'),
					$('<option/>').attr("value","03 몬스터 필로우탑 30T 침대 매트리스 퀸(Q)").text('03 몬스터 필로우탑 30T 침대 매트리스 퀸(Q)(179,000원)')
					
				);
					
		}

			var sns =()=>{
		
			$('.je_over__action').append(
				$('<button/>').addClass('cover__action__btn cover__action__btn--share').append(
						$('<span/>').addClass('icon icon-action-share-gray-md'),
						$('<span/>').addClass('cover__action__btn__action-name'),
						$('<span/>').addClass('cover__action__btn__amount').text('1.03K')));}
			return{detail:detail};
})();

