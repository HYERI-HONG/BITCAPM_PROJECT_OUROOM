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
			jun.main.add();
			
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
		
	
		$('<hr/>').attr({style:'border-top: 1px solid #333;width:73%;'}).appendTo($('#content'));
		
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
		let div2 = $('<div/>').attr({class:"kj_item"}).appendTo(div1);
		$('<img/>').attr({src:$.img()+'/jun/1.JPG',class:"kj_item_img"}).appendTo(div2).click(e=>{
			//
			$.getScript($.script()+'/jieun.js',()=>{
				jieun.detail();
			});
		});
		
		//glyphicon glyphicon-heart 색깔
		let div3=$('<div/>').attr({class:'kj_icon_div'}).appendTo(div2);
		
		$('<span/>').attr({style:"cursor:pointer"}).addClass('glyphicon glyphicon-shopping-cart').appendTo(div3).click(e=>{
			jun.main.modal();
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
		//모달 추가함
		$.magnificPopup.open({
			closeBtnInside:true,
			closeOnContentClick:false,
			alignTop: true,
			fixedBgPos:true,
			fixedContentPos:false,
			items:{src:	'<div class="white-popup">'
				+'<div id="kj_create_img_div" class="col-md-5" id="">'
				+'<img id="kj_create_img" src="'+$.img()+'/jun/ex1.JPG"/><br>'
				+'<button type="button" class="kj_item_btn" id="kj_item_upload_btn">'
				  +'<span class="glyphicon glyphicon-upload" aria-hidden="true"></span> 업로드'
				  +'</button></div>'
				+'<div class="col-md-6" id="kj_create_img_div2" style="text-align: left;">'
				+'<select id="kj_create_select">'
				+'<option>카테고리</option>'
			+'</select>'
			+'<select id="kj_create_select2">'
				+'<option>카테고리</option>'
			+'</select><br>'
					+'<label>상품이름</label><input type="text" id="kj_create_title" class="kj_create_input" size=26 placeholder="상품이름"><br>'
					+'<label>&nbsp&nbsp&nbsp가격&nbsp&nbsp&nbsp&nbsp</label><input type="text" size=26 id="kj_money" class="kj_create_input" placeholder="가격"><br>'
					+'<label>&nbsp&nbsp&nbsp수량&nbsp&nbsp&nbsp&nbsp</label><input type="text" size=26 id="kj_money" class="kj_create_input" placeholder="수량"><br>'
					+'<label>&nbsp&nbsp할인율&nbsp&nbsp</label><input type="text" id="kj_dr" size=26 class="kj_create_input" placeholder="할인율"><br>'
					+'<label>&nbsp&nbsp&nbsp옵션&nbsp&nbsp&nbsp</label><span id="kj_option_plus" class="glyphicon glyphicon-plus" aria-hidden="true"/>'
					+'<span id="kj_option_minus" class="glyphicon glyphicon-minus" aria-hidden="true" style="margin-left:5px;"/><br><div id="kj_option_div">'
					+'<input type="text" id="kj_item_option_input_1" class="kj_create_input" size=34 placeholder="옵션"></div>'
					+'</div><div id="kj_create_img_div3 style="border:1px solid black;""><input type="text" id="kj_item_title" class="kj_create_input" size=80 placeholder="제목">'
					+'<textarea rows="6" cols="81" id="kj_item_ta" class="kj_create_input" placeholder="내용"/></div>'
					+'<button type="button" id="kj_item_upload_borad_btn" class="kj_item_board_btn">업로드</button>'
					+'<button type="button" id="kj_item_sub_btn" class="kj_item_board_btn">글쓰기</button>'
		+'</div>'
			},
			midClick:true,
			overflowY:'auto',
			removalDelay:'0',
			type:'inline'});
		var count = 1;
		$('#kj_option_plus').on('click',function(){
			if(count<4){
				count++;
			$('<input/>').attr({type:"text",id:"kj_item_option_input_"+count,
				class:"kj_create_input",size:34,placeholder:"옵션"}).appendTo($('#kj_option_div'));
			}});
		$('#kj_option_minus').on('click',function(){
			if(count>1){
			$('#kj_item_option_input_'+count).remove();
			count--;
			}
		});
		return false;
		
		
	},

	cart:()=>{
		
		$('#content').empty();
		$('<div/>').attr({id:"kj_cart_div",class:"container"}).appendTo($('#content'));
		$('<h2/>').html('장바구니').appendTo($('#kj_cart_div'));
		$('<div/>').attr({id:"kj_cart_item_div"}).appendTo($('#kj_cart_div'));
		$('<div/>').attr({id:"kj_cart_img_div",class:"col-md-7", style:"border: 1px solid black;"}).appendTo($('#kj_cart_item_div'));
		$('<div/>').attr({id:"kj_cart_img_div2",class:"col-md-5", style:"border: 1px solid black;"}).appendTo($('#kj_cart_item_div'));
		$('<div/>').attr({id:"kj_cart_div3"}).appendTo($('#kj_cart_item_div'));
		$('<button/>').attr({type:"button"}).html("???").appendTo($('#kj_cart_div3'));
		$('<div/>').attr({id:"kj_tr_img",style:"background-image:url('"+$.img()+"/kj/ex1.JPG');"}).appendTo($('#kj_cart_img_div'));
		$('<div/>').attr({id:"kj_cart_title"}).html("화이트&블랙 선반행거").appendTo($('#kj_cart_img_div'));
		$('<div/>').attr({style:"font-size:15px;"}).html("무료 | 일반택배배송").appendTo($('#kj_cart_img_div'));
		$('<button/>').attr({type:"button",id:""}).html("???").appendTo($('#kj_cart_img_div'));
		$('<button/>').attr({type:"button"}).html("???").appendTo($('#kj_cart_img_div'));
	
		
	},
	modal:()=>{
		$.magnificPopup.open({
			closeBtnInside:true,
			closeOnContentClick:false,
			alignTop: true,
			fixedBgPos:true,
			fixedContentPos:false,
			items:{src:	"" 
			},
			midClick:true,
			overflowY:'auto',
			removalDelay:'0',
			type:'inline'});
	
		return false;
		
	}
	
	
	}
