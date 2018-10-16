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
		
		//glyphicon glyphicon-shopping-cart 색깔
		let div3=$('<div/>').attr({class:'kj_icon_div'}).appendTo(div2);
		
		$('<span/>').attr({style:"cursor:pointer"}).addClass('glyphicon glyphicon-shopping-cart kj_cart_icon').appendTo(div3).click(e=>{
			jun.main.modal();
		});
		$('<span/>').attr({style:"margin:5px;cursor:pointer"}).addClass('glyphicon glyphicon-heart-empty kj_like_icon').appendTo(div3).click(e=>{
			alert("좋아요");
		});
		//<i class="far fa-cart-arrow-down"></i>
		let div4=$('<div/>').attr("style","margin:5px").appendTo(div2);
		$('<div/>').attr({class:"kj_stroe_item_p"}).html(" 상품명:").appendTo(div4);
		$('<div/>').attr({class:"kj_stroe_item_p"}).html(" 20000원[20%]").appendTo(div4);
		$('<div/>').attr({class:"kj_stroe_item_p"}).html(" 무료배송 ").appendTo(div4);
		
		}
		
	}	
		
		
	},
	add: ()=>{
		$.magnificPopup.open({
			closeBtnInside:true,
			closeOnContentClick:false,
			alignTop: true,
			fixedBgPos:true,
			fixedContentPos:false,
			closeOnBgClick:false,
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
		
	
		//////왼쪽
		let arr=[{title:"리브 에밀리 인조가죽 소파",v:1,p:33000}
				,{title:"시스템 서랍장",v:2,p:21000},
				 {title:"벤트우드 스툴 ",v:3,p:11900},{title:"벤트우드 스툴 ",v:3,p:11900}]
		let div1=$('<div/>').attr({class:"col-md-8"}).appendTo($('#kj_cart_div'));
		$('<h3>').attr({style:"text-align:left;margin-left:25px"}).html('장바구니').appendTo(div1);
		$.each(arr,(x,y)=>{
			
			let div3=$('<div/>').attr({class:"col-md-12",style:"padding:0px;margin-top:30px;"}).appendTo(div1);
			let div4=$('<div/>').attr({class:"col-md-6",style:"padding:0px"}).appendTo(div3);
			let div5=$('<div/>').attr({class:"col-md-6 kj_cart_l_border"}).appendTo(div3);
			let div_c=$('<div/>').attr({class:"col-md-12 kj_cart_l_border"}).appendTo(div4);
			let div_img=$('<div/>').attr({class:"col-md-4"}).appendTo(div_c);
			$('<img/>').attr({src:$.img()+"/jun/ex2.JPG"}).appendTo(div_img);
			let div_cont=$('<div/>').attr({class:"col-md-8",style:"padding:2px;text-align:left"}).appendTo(div_c);
			$('<div/>').attr({id:"kj_cart_l_title"}).html(y.title).appendTo(div_cont);
			$('<div/>').attr({id:"kj_cart_l_ship"}).html('무료|일반택배배송').appendTo(div_cont);
			$('<button/>').attr({class:'kj_cart_btn'}).html("옵션변경").appendTo(div_cont).click(()=>{
				jun.main.modal();
			});
			$('<button/>').attr({class:'kj_cart_btn'}).html("삭제").appendTo(div_cont).click(()=>{
				confirm("삭제하시겠습니까?");
			});
			$('<br>').appendTo(div_cont);
			$('<button/>').attr({class:'kj_cart_btn2'}).html("바로구매").appendTo(div_cont);
			
			let div_c2=$('<div/>').attr({id:"kj_cart_l_div4",class:"col-md-12"}).appendTo(div5);
			$('<div/>').attr({id:"kj_cart_l_title2", class:"col-md-6 kj_cart_l_t2"}).html(y.title).appendTo(div_c2);
			$('<div/>').attr({id:"kj_cart_l_v",class:"col-md-3 kj_cart_l_t2"}).html(y.v+"개").appendTo(div_c2);
			$('<div/>').attr({id:"kj_cart_l_p",class:"col-md-3 kj_cart_l_t2"}).html(y.p+"원").appendTo(div_c2);
			let div_c3=$('<div/>').attr({class:"col-md-12 kj_cart_l_div3"}).appendTo(div5);
			$('<div/>').attr({class:"col-md-6 kj_cart_l_c2"}).html("주문금액").appendTo(div_c3);
			$('<div/>').attr({id:"kj_cart_l_sum",class:"col-md-6 kj_cart_l_c2"}).html(y.v*y.p+"원").appendTo(div_c3);
			$('<div/>').attr({id:"kj_cart_l_ship2",class:"col-md-12",style:""}).html('무료배송').appendTo(div1);
		})
		
		//////오른쪽
		let div2=$('<div/>').attr({class:"col-md-2",id:"kj_cart_r_div",}).appendTo($('#kj_cart_div'));
		let div_r_1=$('<div/>').attr({class:"col-md-12 kj_cart_r_div2"}).appendTo(div2);
		$('<div/>').attr({class:"col-md-6 kj_cart_r_titles"}).html('총 상품금액').appendTo(div_r_1);
		$('<div/>').attr({class:"col-md-6 kj_cart_r_conts"}).html('70,000원').appendTo(div_r_1);
		let div_r_2=$('<div/>').attr({class:"col-md-12 kj_cart_r_div2"}).appendTo(div2);
		$('<div/>').attr({class:"col-md-6 kj_cart_r_titles"}).html('배송비').appendTo(div_r_2);
		$('<div/>').attr({class:"col-md-6 kj_cart_r_conts"}).html('0원').appendTo(div_r_2);
		let div_r_3=$('<div/>').attr({class:"col-md-12 kj_cart_r_div2"}).appendTo(div2);
		$('<div/>').attr({class:"col-md-6 kj_cart_r_titles"}).html('총 할인금액').appendTo(div_r_3);
		$('<div/>').attr({class:"col-md-6 kj_cart_r_conts"}).html('-33,100원').appendTo(div_r_3);
		let div_r_4=$('<div/>').attr({class:"col-md-12 kj_cart_r_div2"}).appendTo(div2);
		$('<div/>').attr({class:"col-md-6 kj_cart_r_titles"}).html('총 결제금액').appendTo(div_r_4);
		$('<div/>').attr({class:"col-md-6 kj_cart_r_conts"}).html('36,900원').appendTo(div_r_4);
		let div_r_5=$('<div/>').attr({class:"col-md-12 kj_cart_r_div2"}).appendTo(div2);
		$('<button/>').attr({id:"kj_cart_r_buy_btn"}).html("전체 구매").appendTo(div_r_5);
		
	
		
	},
	modal:()=>{
		$.magnificPopup.open({
			closeBtnInside:true,
			closeOnContentClick:false,
			alignTop: true,
			fixedBgPos:true,
			fixedContentPos:false,
			closeOnBgClick:false,
			items:{src:	'<div id="kj_cart_option_modal"><div id="wrap_panel">'
			    +'<div id="product_information">'
			        +'<div class="image" style="background-image: url('+$.img()+'/jun/ex2.JPG)"></div>'
			        +'<div class="information">'
			            +'<div class="name">원목 접이식테이블 2colors</div>'
			            +'<div class="delivery_info">무료(착불)| 일반택배배송'
			            +'</div>'
			        +'</div>'
			    +'</div>'
			    +'<form class="edit_carted_production" id="edit_carted_production_7034567" action="/carted_productions/7034567" accept-charset="UTF-8" data-remote="true"' +'method="post"><input name="utf8" type="hidden" value="✓"><input type="hidden" name="_method" value="patch">'
			        +'<div id="option_panel">'
			            +'<select id="product_option_depth1">'
			                +'<option value="0">색상</option>'
			                    +'<option value="화이트">'
			                        +'화이트(24,900원)'
			                    +'</option>'
			                    +'<option value="블랙">'
			                        +'블랙(24,900원)'
			                    +'</option>'
			            +'</select>'
			                +'<input val="0" type="hidden" value="0" name="carted_production[pay_at]" id="carted_production_pay_at">'
			        +'</div>'
			        +'<div id="selected_options_panel">'
			            +'<div class="options" id="selected_options">  '
			                    +'<div class="option" data-value="278053">'
			    +'<div class="common_information">'
			        +'<input class="destroy" value="false" type="hidden" name="carted_production[carted_options_attributes][0][_destroy]" id="carted_production_carted_options_attributes_0__destroy">'
			    +'</div>'
			    +'<div class="cancel"></div>'
			    +'<div class="name">화이트 </div>'
			    +'<div class="count_cost" style="display: block;">'
			        +'<div class="input">'
			            +'<div id="kj_cart_arrowdown" class="arrow down"></div>'
			            +'<div class="input"><input id="kj_cart_input" type="number" name="carted_production[carted_options_attributes][0][count]" id="carted_production_carted_options_attributes_0_count"/></div>'
			            +'<div id="kj_cart_arrowup"class="arrow up"></div></div>'
			            +'<div class="sum_cost">24,900원</div>'
			    +'</div>'
			+'</div>'
			+'<input type="hidden" value="8765129" name="carted_production[carted_options_attributes][0][id]" id="carted_production_carted_options_attributes_0_id">'            +'</div>'
			            +'<div id="assembly_option" style="display: none;">'
			                +'<div class="name"></div>'
			                +'<div class="sum_cost">0</div>'
			            +'</div>'
			        +'</div>'
			        +'<div id="total_cost_panel">'
			            +'<div class="title">주문금액</div>'
			            +'<div class="cost" id="total_cost"><span class="cost">24,900</span><span class="unit">원</span></div>'
			        +'</div>'
			        +'<div id="kj_buttons">'
			            +'<input type="button" value="취소" id="kj_cart_close" >'
			            +'<div id="kj_cart_add">확인</div>'
			        +'</div>'
			+'</form></div></div>'
			},
			midClick:true,
			overflowY:'auto',
			removalDelay:'0',
			type:'inline'});
		
		var count=1;
		$('#kj_cart_input').val(count);
		
		$('#kj_cart_arrowdown').click(e=>{
			if(count>1){
			count--;
			$('#kj_cart_input').val(count);
			}
		});
		$('#kj_cart_arrowup').click(e=>{
			count++;
			$('#kj_cart_input').val(count);
		});
		
		$('#kj_cart_add').click(e=>{
			jun.main.cart();
			$.magnificPopup.close();
		});
		$('#kj_cart_close').click(()=>{
			$.magnificPopup.close();
		});
		
	
		return false;
		
	}
	
	
	}
