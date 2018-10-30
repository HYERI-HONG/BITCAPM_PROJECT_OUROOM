"use strict";
var jieun = jieun || {};

jieun=(()=>{
	var w,nav,content,context,script,style,img;
		context = $.context();
		script = $.script();
		style = $.style();
		img = $.img();
		w=$('#wrapper');
		content=$('#content');

		var detail=x=>{

			$.getJSON(context+'/BrdDetail/detail/'+x.seq,d=>{

				content.empty();
				
				let section =$('<section/>').addClass('je_row').appendTo(content);
				
				// --------------------------------------------nav ::
				// 변경---------------------------------------//
				$('<div id="je_selling_helper_wrap" class="col-md-9"/>').append($('<div id="je_selling_helper"/>').addClass('navbar navbar-default')).appendTo(content);
				
				$('<ul/>').addClass("nav nav-tabs nav-justified").append(
						$('<li class="col2 active"/>').attr({id:'b_product-info','data-target':'product-info',role:'presentation'}).text('상품정보').click(e=>{
							e.preventDefault();
							$(window).scrollTop($('#je_total_wrap').offset().top);
						}),
						$('<li class="col2" id="je_count"/>').attr({id:'b_product-review','data-target':'product-review',role:'presentation'}).text('리뷰').click(e=>{
							e.preventDefault();
							$(window).scrollTop($('#product-review').offset().top);
						}),
						$('<li class="col2"/>').attr({id:'b_product-shipping','data-target':'product-shipping',role:'presentation'}).text('배송/교환/환불').click(e=>{
							e.preventDefault();
							$(window).scrollTop($('#product-shipping').offset().top);
						})
				).appendTo($('.navbar'));
				
				window.onscroll = function() {myFunction()};

				var navbar = $('#je_selling_helper_wrap');
				var sticky = navbar.offset().top;
				function myFunction() {
					var scrollTop = $(window).scrollTop();
				  if (scrollTop > sticky) {
					  $('#je_selling_helper_wrap').addClass('je_sticky');
					  
				  } else {
					  $('#je_selling_helper_wrap').removeClass('je_sticky'); 
				  }
				}
				$('.je_sticky').appendTo($('#h_navigation'));
			
				// --------------------------------------------nav ::
				// 변경---------------------------------------//
	
				let section2 =$('<section "/>').addClass('je_row1').appendTo(content);
				
				let je_div_cover = $('<div/>').addClass('je_div_cover');

				let je_div_cover_info1 = $('<div/>').addClass('je_div_cover_info1');
				let je_div_cover_info2 = $('<div/>').addClass('je_div_cover_info2');
				let arr = ['a','b','c'];
				$.each(arr,function(i,j){
					let col = $('<div>').addClass('je_col'+i).appendTo(section).appendTo(content);
					col.appendTo(section);
					$('.je_col0').append(je_div_cover);
					$('.je_col1').append(je_div_cover_info1);					
					$('.je_col2').append(je_div_cover_info2);					
				});
				$('<img/>').attr({src:$.img()+'/jun/'+x.category+'/'+x.photo+'.jpg',id:'je_view1'}).appendTo(je_div_cover).appendTo($('.je_col0'));
				
				let p = $('<p style="margin-top: 50px; color:#8080805c"/>').addClass('je_info1').appendTo(je_div_cover_info1);
				let a1=$('<a id="gray_a"/>').attr({href:"https://ohou.se/store"}).text('오늘의 집 스토어');
				let span1 = $('<span/>').addClass('glyphicon glyphicon-chevron-right').attr({"aria-hidden":"true",id : 'je_icon'});
				let span2 = $('<span/>').addClass('glyphicon glyphicon-chevron-right').attr({"aria-hidden":"true",id : 'je_icon'});
				let span3 = $('<span/>').addClass('glyphicon glyphicon-chevron-right').attr({"aria-hidden":"true",id : 'je_icon'});
				let span4 = $('<span/>').addClass('glyphicon glyphicon-chevron-right').attr({"aria-hidden":"true",id : 'je_icon'});
				let a2 = $('<a id="gray_a"/>').attr({href:"https://ohou.se/store/category?category=0&order=popular"}).text('가구');
				let a3 = $('<a id="gray_a"/>').attr({href:"https://ohou.se/store/category?category=0&order=popular"}).text('침실 가구');
				let a4 = $('<a id="gray_a"/>').attr({href:"https://ohou.se/store/category?category=0&order=popular"}).text('매트리스');
				let a5 = $('<a id="gray_a"/>').attr({href:"https://ohou.se/store/category?category=0&order=popular"}).text('스프링매트리스');
				
				a1.appendTo(p); 
				span1.appendTo(p);
				a2.appendTo(p); 
				span2.appendTo(p);
				a3.appendTo(p); 
				span3.appendTo(p);
				a4.appendTo(p); 
				span4.appendTo(p);
				a5.appendTo(p);
				p.appendTo(je_div_cover_info1);
				
				let p1=$('<p/>').addClass('je_cover_title');
				p1.text(d.title).appendTo(je_div_cover_info1);
				$('.je_cover_title').html();
				
				let a6 = $('<a style="color:#cc5200"/>').addClass('je_review').attr({href:"https://ohou.se/productions/54844/selling#product-review"});
				let review = $('<span/>').addClass('je_star_review').attr({id:'je_line'});
				let star = $('<span/>').attr({class:'glyphicon glyphicon-star','aria-hidden':true});
					star.appendTo(a6);star.appendTo(a6);star.appendTo(a6);

					a6.append(star);
					star.appendTo(a6);
					star.appendTo(review).appendTo(a6).html('226개의 리뷰<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>');
					$('<br/>').appendTo(a6);
					a6.appendTo(je_div_cover_info1);
				
				let p_price=$('<p/>').addClass('je_price_cover');

				$('<b style="margin-top: 10px; margin-right :10px"/>').html(d.disc+'%').attr({id:'je_line',class:'je_discount'}).appendTo(p_price);
				
				let origin = $('<h6/>').addClass('je_origin_cost').text(d.price);
				let ins = $('<ins/>').addClass('je_dis_cost').text(d.sum+'원');
				
				origin.appendTo(p_price);
				ins.appendTo(p_price);
				p_price.appendTo(je_div_cover_info1);
				
				
				$('<button/>').attr({id:'je_sharebtn',class:'btn btn-primary btn-lg'}).appendTo(je_div_cover_info1);
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
						)).appendTo(je_div_cover_info1);
				

		    	$('<select id="je_selectbtn" name="je_opt" style="font-size: 12px;"/>').appendTo(je_div_cover_info1);
		    	$('<option selected disabled hidden />').attr({"value":""}).html('옵션').appendTo($('#je_selectbtn'));
		    	
		    	$('<div id="je_total_div"/>').appendTo(section2);
				$('<div id="je_total_1" class="col-md-8"/>').appendTo($('#je_total_div'));
				$('<div id="je_total_2" class="col-md-4" style="margin-top: 50px; height:7000px;padding-left: 80px;"/>').appendTo($('#je_total_div'));
				
				let t_order_cart=$('<section class="col-md-10" id="t_order_cart" style="left: 18%; width: 330px; top: 150px; position:sticky;"/>').appendTo($('#je_total_2'));
				
				$('<div id="je_order_cart"/>').html('<div style="font-weight:bold; font-size:15px;  ">옵션선택</div>').appendTo($('#t_order_cart'));
				let cart_btn=$('<section style="height: 80px; margin-bottom: 40px" />').html('<div id="je_cart_btn">').appendTo($('#t_order_cart'));
				$('<select id="je_selectbtn2" name="je_opt" class="col-md-12" style="height: 50px; margin-top: 30px"/>').appendTo(cart_btn);
		    	$('<option selected disabled hidden/>').attr({"value":""}).html('옵션').appendTo($('#je_selectbtn2'));

				$.each(d.options,(i,j)=>{
					$('<option id="opt"/>').attr({"value":j.options}).html(j.options).appendTo($('#je_selectbtn2'));
				})
		    	
		    	
		    	var je_item=$('<section class="je_item" id="item_sec" style="overflow:auto; margin-top:20px; max-height:100px"/>').appendTo(je_div_cover_info1);
		    	var item_sec2=$('<section class="selected-options text-caption-1" id="item_sec2" style="overflow:auto; border: 0.5px solid #80808038; background-color: whitesmoke; padding: 5px; margin-bottom: 30px; height: 261px;">').appendTo($('#t_order_cart'));

		    	$.each(d.options,(i,j)=>{
					$('<option id="opt"/>').attr({"value":j.options}).html(j.options).appendTo($('#je_selectbtn'));
				});	


		    	$('<hr style="	color: gray; size: 0.5em; noshade;"/>').appendTo(je_div_cover_info2);
				
				$('<p style="font-size: 13px" class="je_total_price"/>').appendTo(je_div_cover_info2);
				$('<span id="je_temp"/>').appendTo($('.je_total_price'));
				
				

				let t=1;
				
				let sum=0;	
				let y=parseInt(d.sum);
				
				$('#je_selectbtn').change(function(){
						
					
					let t2=t;
					let count=1;
					let x = $("#je_selectbtn option:selected").text();				

					sum=sum+y;
					$('#je_won').html(sum);	
					
					
// ///
					let minus=$('<span id="je_minus'+t2+ '" class="minus glyphicon glyphicon-minus" role="button" style="margin-right: 3px;"/>');
					let amount=$('<div class="amount"/>');
					let plus=$('<span id="je_plus'+t2+ '" class="plus glyphicon glyphicon-plus" role="button" style="margin-left: 10px;"/>');
					let input=$('<input id="je_num_val'+t2+'" type="number" value="1"  style=" border: 0px solid; width:30px;   text-align:center;"/>');
					let divv=$('<div id="item'+t2+'" class="divv_c" data-index="1" style="border-bottom: solid 1px #ededed; margin:10px; font-size: 12px;">');
					let detail=$('<div class="detail" style="margin-top:20px">');
					let bold_p=$('<p class="bold col-md-12" style="font-weight:bold; left: 400px; width: 20%;  bottom: 20px;">');
					let span_left=$('<span id="span_l" style="float:left">').html(x);
					let no_wrap_p=$('<p style="font-size: 12px; white-space: nowrap; margin-bottom: 10px; height: 10px;">');
					let span_am=$('<span class="amount" style="float:right"/>').html(y+'원');
					let remove = $('<span class="remove glyphicon glyphicon-remove" role="button" aria-hidden="false" style="float: right; right: 10px;">');
					let br=$('<br>');

					
					span_left.appendTo(no_wrap_p);
					remove.appendTo(no_wrap_p);
					no_wrap_p.append(br);
					
					minus.appendTo(amount);
					input.appendTo(amount);
					plus.appendTo(amount);					
					amount.appendTo(detail);					
					span_am.appendTo(bold_p);
					bold_p.appendTo(detail);
					
					no_wrap_p.appendTo(divv);
					detail.appendTo(divv);
					divv.appendTo(je_item);
					
					divv.append(br);
				
					
					alert('t2 :: '+ t2);
					$(this).click(e=>{
						e.preventDefault();						
						je_item.show();
						$('#je_won').html(sum);	
						});
					
					
					
					$('#je_minus'+t2).click(e=>{
						e.preventDefault();
						
						if(count>1){
							count--;
							$('#je_num_val'+t2).val(count);							
							sum=sum-y;
							$('#je_won').html(sum);	
							}
						
					});
					
					$('#je_plus'+t2).click(e=>{
						e.preventDefault();				
							count++;
							$('#je_num_val'+t2).val(count);
							sum=sum+y;
							$('#je_won').html(sum);	
							
							
					});
			
					
					$('#je_won').html(sum);	

					remove.click(e=>{
						e.preventDefault();				
						divv.remove();		
						if(divv.remove()){					
							sum=sum-count*y;
							$('#je_won').html(sum);	
							}
						});
					
					
					t++;	



/*					
					$('#je_selectbtn').click(function() {
						alert('trigger alert');
						$('#je_selectbtn2').trigger('change') ;
						
						});*/
				});

				
				let or_pri=$('<label style="margin-top: 10px;"/>').html('주문금액');
				let in_span=$('<span class="in_span1" style="float: right; display: inline;"/>').html('<strong id="je_won">'+sum+'</strong>원');
				or_pri.appendTo($('#je_temp'));
				in_span.appendTo($('#je_temp'));
								
				
				let buttons=$('<div id="je_buttons" style="margin-top: 15px; margin-bottom:30px"/>')
				buttons.appendTo(je_div_cover_info2);
				$('<button id="je_get_basket"/>').text('장바구니 담기').appendTo(buttons);
				$('<button id="je_buy"/>').text('구매하기').appendTo(buttons);
				
				//
	/*			
				

				*//**여기가 따라다니는 옵션버튼*//*
				
				let cart_tp=$('<div id="je_temp2"/>');
				let or_pri1=$('<label style="margin-top: 10px;"/>').html('주문금액');
				let in_span1=$('<span class="in_span1" style="float: right; display: inline;"/>').html('<strong id="je_won1">'+sum+'</strong>원');
				cart_tp.appendTo($('je_total_price'));
				$('#je_selectbtn2').change(function(){
						
					
					let t2=t;
					let count=1;
					let x = $("#je_selectbtn2 option:selected").text();		

					sum=sum+y;
					$('#je_won').html(sum);	
					
					let minus=$('<span id="je_minus'+t2+ '" class="minus glyphicon glyphicon-minus" role="button" style="margin-right: 3px;"/>');
					let amount=$('<div class="amount"/>');
					let plus=$('<span id="je_plus'+t2+ '" class="plus glyphicon glyphicon-plus" role="button" style="margin-left: 10px;"/>');
					let input1=$('<input id="je_num_val'+t2+'" type="number" value="1"  style=" border: 0px solid; width:30px; background-color: whitesmoke;  text-align:center; "/>');
					let divv1=$('<div id="item'+t2+'" class="divv_c" data-index="1" style="border-bottom: solid 1px #ededed; margin:10px;  font-size: 12px;">');
					let detail=$('<div class="detail" style="margin-top:20px">');
					let bold_p1=$('<p class="bold col-md-12" style="font-weight:bold; left: 220px; width: 20%; padding: 0px; bottom: 20px;">');
					let span_left=$('<span style="float:left">').html(x);
					let no_wrap_p=$('<p style="font-size: 12px; white-space: nowrap; margin-bottom: 10px; height: 10px;">');
					let span_am=$('<span class="amount" style="float:right; width: 45px;"/>').html(y+'원');
					let remove = $('<span class="remove glyphicon glyphicon-remove" role="button" aria-hidden="false" style="float: right;">');
					let br=$('<br>');

					divv1.appendTo(item_sec2);
					span_left.appendTo(no_wrap_p);
					remove.appendTo(no_wrap_p);
					no_wrap_p.append(br);
					
					minus.appendTo(amount);
					input1.appendTo(amount);
					plus.appendTo(amount);					
					amount.appendTo(detail);					
					span_am.appendTo(bold_p1);
					bold_p1.appendTo(detail);
					
					no_wrap_p.appendTo(divv1);
					detail.appendTo(divv1);
					
					

					divv1.append(br);
					
					alert('t2 :: '+ t2);
					$(this).click(e=>{
						e.preventDefault();				
						$('#je_won1').html(sum);	
						});
										
					$('#je_minus'+t2).click(e=>{
						e.preventDefault();
						
						if(count>1){
							count--;
							$('#je_num_val'+t2).val(count);							
							sum=sum-y;
							$('#je_won1').html(sum);	
							}
						
					});
					
					$('#je_plus'+t2).click(e=>{
						e.preventDefault();				
							count++;
							$('#je_num_val'+t2).val(count);
							sum=sum+y;
							$('#je_won1').html(sum);	
							
							
					});
			
					
					$('#je_won').html(sum);	

					remove.click(e=>{
						e.preventDefault();	
						divv1.remove();	
						if(divv1.remove()){					
							sum=sum-count*y;
							$('#je_won1').html(sum);	
							}
						});
					
					
					t++;
				
					$('#je_selectbtn2').click(function() {
						alert('trigger alert2');
						$('#je_selectbtn').trigger('change') ;
						});
	

				});
				
			

				or_pri1.appendTo(cart_tp);
				in_span1.appendTo(cart_tp);
				cart_tp.appendTo($('#t_order_cart'));

				in_span=in_span1;
				*/

								
				let buttons2=$('<div id="je_buttons2" style="margin-top: 20px; text-align: center"/>')
				buttons2.appendTo($('#t_order_cart'));
				$('<button id="je_get_basket" style="width: 130px"/>').text('장바구니 담기').appendTo(buttons2);
				$('<button id="je_buy" style="width: 130px; margin-right:0px"/>').text('구매하기').appendTo(buttons2);
				// /
				
		

				let total_wrap = $('<div id="je_total_wrap" />').appendTo($('#je_total_1'));
				
				($('<section id="je_notice" style="padding-top: 50px;"/>').append(
						$('<img class="je_notice_img"/>').attr({src:img+'/jieun/notice_1.jpg'}),
						$('<p id="je_product_notice"/>').html('<p>구매 후<strong>15영업일 이내 발송</strong>되는 상품입니다.</p>'),
						$('<img class="je_notice_img"/>').attr({src:img+'/jieun/notice_2.jpg'}))).appendTo(total_wrap);

				
				//
				$('<section id="je_detail">').appendTo(total_wrap);
				($('<div id="je_detail_contents" class="je_detail_hidden"/>').append($('<div style="margin: 0px; padding: 0px; width: 100%; text-align: center;"/>'))).appendTo($('#je_detail'));
				// <!-------------------- 오하임 전체공지------------------>
				// <!-------------------- 레이디가구 전체공지--------------->
				$('#je_detail_contents').append($('<img class="je_detail_img">').attr({src:img+'/jieun/gong.jpg'}));
				$('<div/>').html('&nbsp');
				$('<div/>').html('&nbsp');
				$('<div/>').html('&nbsp');
				// <!--------------------업체별(가드너) 공지 ST--------->
				// <!---------------------상세 START---------------------------->
				
				$('#je_detail_contents').append($('<img class="je_detail_img">').attr({src:img+'/jieun/gong2.jpg'}));
				
				$('<br/>');
				$('<br/>');
				$('#je_detail_contents').append($('<img class="je_detail_img">').attr({src:img+'/jieun/faq.jpg'}));
				// <!-------------------배송정보 START----------------------------->
				$('<br/>');
				$('<br/>');
				
				$('#je_detail_contents').append($('<img class="je_detail_img">').attr({src:img+'/jieun/배송1.jpg'}));

				// <!-------------------배송정보 END----------------------------->
				
				// product-info-noti
				$('<section id="je_info_noti">').appendTo(total_wrap);
				($('<tbody id="je_tbody"/>').appendTo($('<table class="line-height-normal" cellspacing="0">'))).appendTo($('#je_info_noti'));
				
				
				// review
				let pro_rev=$('<section id="product-review" style="margin-bottom: 50px;">');
				pro_rev.appendTo(total_wrap);	
				let t_div=$('<div id="t_div" style="margin-bottom: 30px;">');
				let rev_title=$('<p class="bold review_head" style="font-weight:bold; font-size:20px; ">').html(d.title);
				let n_btn=$('<button class="nr_btn" >');
				let btn_p=$('<p id="w_rev" >').html('<span class="glyphicon glyphicon-plus" aria-hidden="true" style="color:#cc5200; margin-right:10px; top:4px;"></span><p style="color:black; font-size:13px; display: inline; top: 4px; margin-right: 10px;">리뷰쓰기</p>');				
				btn_p.appendTo(n_btn);	
				n_btn.appendTo(rev_title);
				rev_title.appendTo(t_div);
				t_div.appendTo(pro_rev);
				
				let in_div=$('<div class="in_div1" style="margin-bottom:50px; overflow: auto;">');
				let je_input=$('<input id="rev_box" placeholder=" 20자 이상 입력해주세요." style="border:1px solid #e8e8e8; width:720px; height:100px; margin-bottom:20px">');
				let un_btn=$('<button id="rev_btn" style="float:right; background-color:#cc5200; color:white; border-radius:4px; border:0px solid #cc5200">').html('저장하기');
				let d1 = new Date();
				in_div.appendTo(pro_rev);
				
				n_btn.click(function(){
					
					if($.type($.cookie("userid")) === 'undefined'){
						$.getScript($.script()+'/hyeri.js', ()=>{
							hyeri.page.l();
	                    });
						
					}else{
						if($('.in_div1').is(":visible")){
							$('.in_div1').slideUp();
							je_input.appendTo(in_div);
							un_btn.appendTo(in_div);
							
						}else{
							$('.in_div1').slideDown();							
						}
						
						un_btn.click(()=>{
							$.ajax({
								url:context+'/BrdDetail/write',
								method:'POST',
								contentType:'application/json',
								data:JSON.stringify({
									nickname : $.cookie("nickname"),
									regi_date : d1.getFullYear()+'-'+(d1.getMonth()+1)+'-'+d1.getDate(),
									image: '',
									contents: $('#rev_box').val()
								}),
								success:d=>{
								alert("$('#rev_box').val() :: "+$('#rev_box').val());
									if($('#rev_box').val()){
										
									}else{
										alert('리뷰고 나발이고~');
									}
								},error:(m1,m2,m3)=>{
									
								}
							})	
							
							
						});
						
						
					}
					
				});

				
				
				$.getJSON($.context()+'/BrdDetail/review',d=>{						
						
					$.each(d.review,(i,j)=>{
						
						let rev_caption=$('<p class="caption1" style="color:gray">');
						let rev_container=$('<div class="review_container">');
						let je_user=$('<span class="user">').html(j.nickname + ' / ');
						let je_date=$('<span class="date">').html(j.regi_date + ' / ');
						let je_source=$('<span class="source">').html(' 니방내방 리뷰');
						let je_text=$('<a class="text">');
						let je_comm=$('<p class="review_comm" style="color:black; width:600px">').html(j.contents);
						let rev_photo=$('<a class="review_img" style="width:70px" >');		
						let del_btn= $('<button id="del_btn1" style="float:right; background-color:#cc5200; color:white; border-radius:4px; border:0px solid #cc5200">').html('삭제');
						$('<img class="rev_img2" style="width:70px; height:70px">').attr({src:img+'/jieun/review/'+j.image}).appendTo(rev_photo);
																			
						rev_container.appendTo(pro_rev);
						je_user.appendTo(rev_caption);
						je_date.appendTo(rev_caption);
						je_source.appendTo(rev_caption);
						je_text.appendTo(rev_caption);
						del_btn.appendTo(rev_caption);
						je_comm.appendTo(je_text);						
						rev_photo.appendTo(rev_caption);
						rev_caption.appendTo(rev_container);
						rev_caption.appendTo(rev_container);
						
						
					});					

					
						
						$('<br/>');
						$('<br/>');
					});
				
				
				
				// shipping
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
				
			});
		

				}

			return{detail:detail};
})();

