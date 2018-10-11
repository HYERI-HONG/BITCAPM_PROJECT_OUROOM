"use strict";
var jun = jun || {};
jun =(()=>{
       var init=()=>{
              jun.main.store();
       };
       return {init:init};
})();
jun.main = {
	store : ()=>{
		$('#content').empty();
		$('<div/>').attr({id:'kj_div'}).addClass('container').appendTo($('#content'));
		$('<div/>').attr({id:"kj_test_div1"}).appendTo($('#kj_div'))
		$('<h1/>').attr({id:"kj_title",style:"color:#d9d9d9;font-weight: bold"}).html("Search Whatever You Want...").appendTo($('#kj_test_div1'));
		$('<input/>').attr({id:'kj_select',placeholder:" 검색",size:"40"}).appendTo($('#kj_test_div1'));
		let category =["전체 ","침실","드레스룸","거실","아이방","학생방","서재"];
		
		$('<div/>').attr({id:"kj_category_div"}).appendTo($('#content'));
		
		
		$.each(category,(x,j)=>{
			
			$('<span/>').attr({class:"kj_category_1"}).html(j).appendTo($('#kj_category_div')).click(e=>{
				alert(j+" 버튼");
			});
			
		});
		$('<button/>').attr({type:"button",id:"kj_btn_add"}).html("글쓰기 임시").appendTo($('#kj_category_div')).
		click(e=>{
			$('#content').empty();
			KJ.add();
			
		});
		$('<div/>').attr({id:"kj_test2"}).addClass("container").appendTo($('#content'));
		$('<div/>').attr({id:"kj_category_2"}).appendTo($('#kj_test2'));
		
		let category2=["침대","옷장","수납장","화장대"];
		
		$('<span/>').attr({id:"kj_category_p"}).html("품목").appendTo($('#kj_category_2'));
		
		$.each(category2,(x,j)=>{
			
			$('<span/>').attr({class:"kj_category_c"}).html(j).appendTo($('#kj_category_2')).click(e=>{
				alert(j+" 버튼");
			
				
			});
		})
		
	
		$('<hr/>').attr({style:'border-top: 1px solid #333;width:80%;'}).appendTo($('#content'));
		
		$('<div/>').attr({id:"kj_array"}).appendTo($('#content'));
		
		let array=["인기순","높은가격순","낮은가격순","판매순","신상품순"];
		
		$.each(array,(x,j)=>{
			
			$('<span/>').attr({class:"kj_category_1"}).html(j).appendTo($('#kj_array')).click(e=>{
				alert(j+" 버튼");
			});
		})
		
		$('<div/>').attr({id:"kj_item_list",class:"container"}).appendTo($('#content'));
		
		
	for(let i=0; i<=1; i++){
		
		let div = $('<div/>').attr({class:"row"}).appendTo($('#kj_item_list'));
		
		for(let y=0; y<=3; y++){
		let div1 =	$('<div/>').attr({class:"col-md-3"}).appendTo(div);
		let div2 = $('<div/>').attr({class:"kj_item"}).appendTo(div1).click(e=>{
			alert('jun상품디테일');
			$.getScript($.script()+'/jieun.js', ()=>{jieun.detail();});
});
		$('<img/>').attr({src:$.img()+'/jun/1.JPG',class:"kj_item_img"}).appendTo(div2);
		
		//glyphicon glyphicon-heart 색깔
		let div3=$('<div/>').attr({class:'kj_icon_div'}).appendTo(div2);
		
		$('<span/>').attr({style:"cursor:pointer"}).addClass('glyphicon glyphicon-shopping-cart').appendTo(div3).click(e=>{
			alert("장바구니");
		});
		$('<span/>').attr({style:"margin:5px;cursor:pointer"}).addClass('glyphicon glyphicon-heart-empty').appendTo(div3).click(e=>{
			alert("좋아요");
		});
		
		let div4=$('<div/>').attr("style","margin:5px").appendTo(div2);
		$('<div/>').html(" 상품명:").appendTo(div4);
		$('<div/>').html(" 가격:").appendTo(div4);
		$('<div/>').html(" 20000원[20%]").appendTo(div4);
		
		}
		
	}	
		
		
	},
	add: ()=>{
		$('<div/>').attr({id:"kj_create",class:"container"}).appendTo($('#content'));
		$('<div/>').attr({id:"kj_category_combo_div"}).appendTo($('#kj_create'));
		$('<select>').attr({id:"kj_combo1"}).appendTo($('#kj_category_combo'));
		$('<option/>').html("카테고리선택").appendTo($('#kj_combo1'));
		let category_1=["침실","드레스룸","거실","주방","아이방","학생방","서재"];//임시방편 id 생각해놓을것
		
		$.each(category_1,(x,y)=>{
			$('<option/>').html(y).appendTo($('#kj_combo1'));
		})
		
		$('<select>').attr({id:"kj_combo2"}).appendTo($('#kj_category_combo'));
		$('<option/>').html("카테고리선택").appendTo($('#kj_combo2'));
		let category_2=["침대","옷장","수납장","화장대"];//임시방편 id 생각해놓을것
		$.each(category_2,(x,y)=>{
			$('<option/>').html(y).appendTo($('#kj_combo2'));
		})
		
		$('<div/>').attr({id:"item_create_content",style:"border: 1px solid black;"}).appendTo($('#kj_create'));
		let c_div1 =	$('<div/>').attr({class:"col-md-3",id:"kj_create_img_div",style:"border: 1px solid black;margin:20px;"}).appendTo($('#item_create_content'));
		$('<img/>').attr({src:$.img()+'/jun/ex1.JPG',id:"kj_create_img"}).appendTo(c_div1)
		let c_div2 =	$('<div/>').attr({class:"col-md-8",style:"border: 1px solid black;margin:20px;text-align:left;"}).appendTo($('#item_create_content'));
		$('<input/>').attr({type:"text",id:"kj_create_title",placeholder:"제목을 입력하세요",size:"60"}).appendTo(c_div2);
		$('<br/>').appendTo(c_div2);
		
		let input_box=["가격","할인율","총가격"];
		$.each(input_box,(x,y)=>{
			$('<label/> ').addClass('kj_create_input').html(y).appendTo(c_div2);
			$('<input/>').attr({type:"text",class:"kj_create_input",placeholder:y,size:"18"}).appendTo(c_div2);		
		})
		
	}
}