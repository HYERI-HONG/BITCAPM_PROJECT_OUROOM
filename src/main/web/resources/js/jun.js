"use strict";
var jun = jun || {};
//ㅠㅠ
jun =(()=>{
       var init=()=>{
              jun.main.store();
       };
       return {init:init};
})();
jun.main = {
	store : ()=>{
		
		var category_seq='0';
		var ag= 'SEQ DESC'
		var search= '0';
		var p_c=3;
		$('#content').empty();
		$('<div/>').attr({id:'kj_div'}).addClass('container').appendTo($('#content'));
		$('<div/>').attr({id:"kj_test_div1"}).appendTo($('#kj_div'))
		$('<h1/>').attr({id:"kj_title",style:"color:white;text-shadow:2px 2px 1px #595959;font-weight: bold"}).html("Search Whatever You Want...").appendTo($('#kj_test_div1'));
		$('<input/>').attr({id:'kj_select',placeholder:" 검색",size:"40"}).appendTo($('#kj_test_div1'));
		$('<div/>').attr({id:"kj_category_div2"}).addClass("container").appendTo($('#content'));
		$('<div/>').attr({id:"kj_category_div"}).appendTo($('#content'));
		 $('<span/>').attr({class:"kj_category_1 kj_active"}).html("전체").appendTo($('#kj_category_div')).click(e=>{
			jun.main.store();
		})
		$("#kj_select").keypress(e=>{ 
			if (e.keyCode == 13){
				 $('html, body').animate({
	 	             scrollTop: $('#kj_select').offset().top
	 	         },200);
			$('#kj_item_list').empty();
			search=	$('#kj_select').val();
			$('.kj_category_12').removeClass('kj_active');
			$('#kj_c_3_'+0).addClass('kj_active');
			
			for(let i=0; i<3; i++){
				jun.main.itemList({page:i,category:category_seq,agv:'SEQ DESC',searchv:search});	
			}
			$('#kj_category_div').empty();
			$('#kj_test2').empty();
			$('<label/>').html("검색결과  :  " + search).appendTo($('#kj_category_div'))
		    }
			p_c=3;
		});

		$.getJSON($.context()+'/itemsC',dd=>{
			$.each(dd.c1,(x,j)=>{
				
				$('<span/>').attr({class:"kj_category_1",id:"kj_category_"+j.seq}).html(j.category).appendTo($('#kj_category_div')).click(e=>{
					$('.kj_category_1').removeClass('kj_active');
					$('#kj_category_'+j.seq).addClass('kj_active');
					
					$('#kj_category_21').remove();
					$('<div/>').attr({id:"kj_category_21"}).appendTo($('#kj_test2'));
					$.getJSON($.context()+'/itemsC/'+j.seq,dd2=>{
						$('<span/>').attr({id:"kj_category_p"}).html("품목").appendTo($('#kj_category_21'));
						
						$.each(dd2.c2,(x,j)=>{
							var c_k = j.category_kr.split("(")
							$('<span/>').attr({class:"kj_category_c",id:"kj_c_2_"+x}).html(c_k[0]).appendTo($('#kj_category_21')).click(e=>{
								 $('html, body').animate({
					 	             scrollTop: $('#kj_select').offset().top
					 	         },200);
								$('.kj_category_12').removeClass('kj_active');
								$('#kj_c_3_'+0).addClass('kj_active');
								$('.kj_category_c').removeClass('kj_active');
								$('#kj_c_2_'+x).addClass('kj_active');
								$('#kj_item_list').empty();
								category_seq=j.seq
								
								for(let i=0; i<3; i++){
									jun.main.itemList({page:i,category:category_seq,agv:'SEQ DESC',searchv:"0"});	
								}
								p_c=3;
							})
						});
					})
				});
			});
		})
		
		
		if($.cookie("userid")==='1'){
			$('<button/>').attr({type:"button",id:"kj_btn_add"}).html("상품 추가").appendTo($('#kj_category_div2')).
			click(e=>{
				jun.main.add();
			});	
		}
		
		$('<div/>').attr({id:"kj_test2"}).appendTo($('#content'));

		$('<hr/>').attr({style:'border-top: 1px solid #333;width:73%;'}).appendTo($('#content'));
		
		$('<div/>').attr({id:"kj_array"}).appendTo($('#content'));
		
		let array=[{t:"최신순",v:'SEQ DESC'},{t:"인기순",v:"SALE_CNT DESC"},{t:"높은가격순",v:"SUM DESC"},{t:"낮은가격순",v:"SUM"}]
		
		$.each(array,(x,j)=>{
			
			$('<span/>').attr({class:"kj_category_12",id:"kj_c_3_"+x}).addClass((j.t==="최신순")?'kj_active':'').html(j.t).appendTo($('#kj_array')).click(e=>{
				 $('html, body').animate({
	 	             scrollTop: $('#kj_select').offset().top
	 	         },200);
				$('.kj_category_12').removeClass('kj_active');
				$('#kj_c_3_'+x).addClass('kj_active');
				$('#kj_item_list').empty();
				ag=j.v;
				for(let i =0; i<3; i++){
				jun.main.itemList({page:i,category:category_seq,agv:ag,searchv:search});	
				}
				p_c=3;
			});
		})
		
		$('<div/>').attr({id:"kj_item_list",class:"container"}).appendTo($('#content'));
		$('#kj_item_list').empty();
		for(let i=0; i<3; i++){
			jun.main.itemList({page:i,category:category_seq,agv:ag,searchv:"0"});
		}
		setTimeout(function(){
		
		$(window).scroll(function(){
            if ($('#kj_div').length>0 && $(this).scrollTop() >= $(document).height() - $(this).height()) {
            	jun.main.itemList({page:p_c,category:category_seq,agv:ag,searchv:search});
            	p_c++;
              
            }else if(!$('#kj_div').length>0){
            	$(window).unbind('scroll');
            }
        });
		}, 200) ; 
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
				+'<form id="kj_uploadForm"><div id="kj_targetOuter"><div id="kj_targetLayer"></div>'
				+'<img src="'+$.img()+'/jun/upload.png" class="kj_icon_choose_image"/>'
				+'<div class="kj_icon_choose_image_div"><input id="kj_userimg" type="file" class="kj_inputFile"/>'
				+'</div></div></div></form>'
				+'<div class="col-md-6" id="kj_create_img_div2" style="text-align: left;">'
				+'<table id="kj_item_add_table"><tr><td class="kj_td">카테고리</td><td><select id="kj_add_option1"><option value="">카테고리</option></select>'
				+'<select id="kj_add_option2"><option value="">카테고리</option></select></td></tr>'
				+'<tr><td class="kj_td">상품명</td><td><input id="kj_t_i" type="text"></td></tr>'
				+'<tr><td class="kj_td">상품가격</td><td><input id="kj_p_i" type="number"></td></tr>'
				+'<tr><td class="kj_td">할인율</td><td><input id="kj_d_i" type="number" placeholder="예) 15%의 경우 15만 입력"></td></tr>'
				+'<tr><td class="kj_td">배달비</td><td><input id="kj_de_i" type="number"></td></tr>'
				+'<tr><td class="kj_td">옵션 <span id="kj_option_plus" class="glyphicon glyphicon-plus"/>'
				+'<span id="kj_option_minus" class="glyphicon glyphicon-minus"/></td><td id="kj_add_test"><input id="kj_item_option_input_1" type="text"></td></tr>'
				+'</table>'
				+'</div><div id="kj_create_img_div3">'
					+'<textarea rows="6" cols="76" id="kj_item_ta" class="kj_create_input" placeholder="내용"/></div>'
					+'<button type="button" id="kj_item_sub_btn" class="kj_item_board_btn">글쓰기</button>'
		+'</div>'
			},
			midClick:true,
			overflowY:'auto',
			removalDelay:'0',
			type:'inline'});
			var count = 1;
			var profile='';
			jQuery($('#kj_userimg')).change(function(){ 
			if (this.files[0]) { // input 의 this
		        var fileReader = new FileReader();
		        fileReader.onload = function (e) {
		            $('#blah').attr('src', e.target.result); 
					$("#kj_targetLayer").html('<img src="'+e.target.result+'" width="220px" height="220px" class="upload-preview" />');// 이미지 넣는거
					$("#kj_targetLayer").css('opacity','0.7'); 
					$(".kj_icon_choose_image").css('opacity','0'); 
		        }
				fileReader.readAsDataURL(this.files[0]); 
		    }
			let ck = (this.files[0].name.match(/jpg|gif|png|jpeg/i)) ? true : false;
			if(ck){
				profile=this.files[0].name;
				var fd = new FormData();
				fd.append('file',this.files[0]);
				$.ajax({
					url: $.context()+'/item/upload',
					type: 'POST',
		            data: fd,
		            async: false,
		            cache: false,
		            contentType: false,
		            processData: false
				})
				
			}else{
				alert("gif,png,jpg,jpeg 파일만 업로드 할 수 있습니다.");
			}
			
		})
		
		$.getJSON($.context()+'/itemsC',jun3=>{
			$.each(jun3.c1,(i,j)=>{
				$('<option/>').val(j.seq).html(j.category).appendTo($('#kj_add_option1'));
			})
		
			jQuery($('#kj_add_option1')).change(function(){
				$('#kj_add_option2').empty();
				$('<option/>').val("").html("카테고리").appendTo($('#kj_add_option2'));
				$.getJSON($.context()+'/itemsC/'+$('#kj_add_option1').val(),jun4=>{
					$.each(jun4.c2,(i,j)=>{
						let c_p= j.category_kr.split("(")
						$('<option/>').val(j.seq+"/"+j.category).html(c_p[0]).appendTo($('#kj_add_option2'));
					})
					
				})
			})
			
			
			
			$('#kj_item_sub_btn').click(e=>{
				let result=false;
				
				let emp=[$('#kj_t_i').val(),$('#kj_p_i').val(),$('#kj_add_option2').val(),$('#kj_d_i').val()
					,$('#kj_de_i').val(),$('#kj_item_option_input_1').val(),profile]
						$.each(emp,(i,j)=>{
							if(j===''){
								result=true;
							}
						});
				if(result)
					{
					alert("빈칸을 채워주세요");
					}else{
						let option="";
						for(let i=1; i<=count; i++){
							option+=$('#kj_item_option_input_'+i).val()+'/';
						}
						
						$.ajax({
							url:$.context()+'/item/add',
							method:'POST',
							contentType:'application/json',
							data:JSON.stringify({
								title:$('#kj_t_i').val(),
								price:$('#kj_p_i').val(),
								discount:$('#kj_d_i').val(),
								delivery:$('#kj_de_i').val(),
								category2:$('#kj_add_option2').val().split("/")[0],
								option:option,
								content:$('#kj_item_ta').val(),
								photo:profile,
								categoryPath:$('#kj_add_option2').val().split("/")[1]
								}),
							success:jd=>{
								$.magnificPopup.close();
								$.removeCookie("category");
								jun.main.store();
								
							}})
					}})})
		
		$('#kj_option_plus').on('click',function(){
			if(count<5){
				count++;
			$('<input/>').attr({type:"text",id:"kj_item_option_input_"+count,}).appendTo($('#kj_add_test'));
			}});
		$('#kj_option_minus').on('click',function(){
			if(count>1){
			$('#kj_tr_'+count).remove();
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
		var c=1;		
		let div1=$('<div/>').attr({class:"col-md-8"}).appendTo($('#kj_cart_div'));
		$('<h3>').attr({style:"text-align:left;margin-left:25px"}).html('장바구니').appendTo(div1);
		var div_border = $('<div/>').attr({class:"col-md-12 kj_cart_div_border"}).appendTo(div1);
		$.getJSON($.context()+'/cart/list/'+$.cookie("userid"),cld=>{
			
			$.each(cld,(i,j)=>{
				$.getJSON($.context()+'/cart/selectOne/'+j.item_seq,io=>{
					if(io===''){
						
					}else{
						div_border.remove();
					}
					let div3=$('<div/>').attr({class:"col-md-12",style:"padding:0px;margin-top:30px;border: 1px solid #e4e7e6;"}).appendTo(div1);
					let div4=$('<div/>').attr({class:"col-md-6",style:"padding:12px;border-right:1px solid #e4e7e6;"}).appendTo(div3);
					let div5=$('<div/>').attr({class:"col-md-6 kj_cart_l_border"}).appendTo(div3);
					let div_c=$('<div/>').attr({class:"col-md-12"}).appendTo(div4);
					let div_img=$('<div/>').attr({class:"col-md-4"}).appendTo(div_c);
					$('<img/>').attr({src:$.img()+"/jun/"+io.category+"/"+io.photo+".jpg"}).addClass("kj_cart_img").appendTo(div_img);
					let div_cont=$('<div/>').attr({class:"col-md-8",style:"padding:2px;text-align:left"}).appendTo(div_c);
					$('<div/>').attr({id:"kj_cart_l_title"}).html(io.title).appendTo(div_cont);
					if(io.delivery==='0'){
						$('<div/>').attr({id:"kj_cart_l_ship"}).html('무료 | 일반택배배송').appendTo(div_cont);
					}else{
						$('<div/>').attr({id:"kj_cart_l_ship"}).html(io.delivery.replace(/\B(?=(\d{3})+(?!\d))/g, ',')+'원 | 일반택배배송').appendTo(div_cont);	
					}
					
					$('<button/>').attr({class:'kj_cart_btn'}).html("삭제").appendTo(div_cont).click(()=>{
						let del_con = confirm("삭제하시겠습니까?");
						if(del_con){
							$.getJSON($.context()+'/cart/delete/'+j.item_seq+'/'+$.cookie("userid"))
						jun.main.cart();
						}
					});
					let div_c2=$('<div/>').attr({class:"col-md-12"}).appendTo(div5);
					let item_sum=0;
					let item_price=0;
					$.getJSON($.context()+'/cartlist/option/'+j.item_seq+'/'+$.cookie("userid"),cop=>{
						$('<button/>').attr({class:'kj_cart_btn'}).html("바로구매").appendTo(div_cont).click(()=>{
							let del_con = confirm("구매하시겠습니까?");
							if(del_con){
								$.ajax({
									url:$.context()+"/cart/buy",
									method:'POST',
									contentType : 'application/json',
									data:JSON.stringify({cop:cop}),
									success:c_d=>{
										jun.main.cart();
										
									}
								})
							}
						
						});
						$.each(cop,(i,j)=>{
							let div_c3=$('<div/>').attr({id:"kj_cart_l_div4",class:"col-md-12"}).appendTo(div_c2);
							$('<div/>').attr({id:"kj_cart_l_title2", class:"col-md-5 kj_cart_l_t2"}).html(j.options).appendTo(div_c3);
							$('<div/>').attr({id:"kj_cart_l_v",class:"col-md-4 kj_cart_l_t2"}).html("수량 : "+j.cnt+"개").appendTo(div_c3);
							$('<div/>').attr({id:"kj_cart_l_p",class:"col-md-3 kj_cart_l_t2"}).html((((Math.round(j.sum/100))*100)+'')
									.replace(/\B(?=(\d{3})+(?!\d))/g, ',')+"원").appendTo(div_c3);
							
							item_sum=item_sum+((Math.round(j.sum/100))*100)*j.cnt;
							item_price=item_price+((Math.round(j.price/100))*100)*j.cnt;
							div_sum.html((item_sum+'').replace(/\B(?=(\d{3})+(?!\d))/g, ',')+"원");
							h_s.val(item_sum);
							h_p.val(item_price);
						})
							
					})
					let h_p = $('<input/>').attr({type:"hidden",id:"h_p_"+c}).appendTo(div5);
					let h_d = $('<input/>').attr({type:"hidden",id:"h_d_"+c}).val(io.delivery).appendTo(div5);
					let h_s = $('<input/>').attr({type:"hidden",id:"h_s_"+c}).appendTo(div5);
					let div_c4=$('<div/>').attr({class:"col-md-12 kj_cart_l_div3"}).appendTo(div5);
					$('<div/>').attr({class:"col-md-6 kj_cart_l_c2"}).html("주문금액").appendTo(div_c4);
					let div_sum = $('<div/>').attr({id:"kj_cart_l_sum",class:"col-md-6 kj_cart_l_c2"}).appendTo(div_c4);
					if(io.delivery==='0'){
						$('<div/>').attr({id:"kj_cart_l_ship2",class:"col-md-12",style:""}).html('무료배송').appendTo(div1);
						
					}else{
						$('<div/>').attr({id:"kj_cart_l_ship2",class:"col-md-12",style:""}).html("선결제 배송비  "
								+io.delivery.replace(/\B(?=(\d{3})+(?!\d))/g, ',')+'원').appendTo(div1);
					}
					c++;
				})
			})
		});
		setTimeout(function(){
		
			var t_s=0;
			var t_p=0;
			var t_d=0;
			var t_dis=0;
			for(let i=1; i<c; i++){
				t_s=t_s+parseInt($('#h_s_'+i).val())
				t_p=t_p+parseInt($('#h_p_'+i).val())
				t_d=t_d+parseInt($('#h_d_'+i).val())
			}
			$('#total_s').html((t_s+t_d+"").replace(/\B(?=(\d{3})+(?!\d))/g, ',')+"원");
			$('#total_p').html((t_p+"").replace(/\B(?=(\d{3})+(?!\d))/g, ',')+"원");
			$('#total_dis').html("-"+(t_p-t_s+"").replace(/\B(?=(\d{3})+(?!\d))/g, ',')+"원");
			$('#total_d').html((t_d+"").replace(/\B(?=(\d{3})+(?!\d))/g, ',')+"원");
		}, 400) ; 



		
		
		//////오른쪽
		let div2=$('<div/>').attr({class:"col-md-2",id:"kj_cart_r_div",}).appendTo($('#kj_cart_div'));
		let div_r_1=$('<div/>').attr({class:"col-md-12 kj_cart_r_div2"}).appendTo(div2);
		$('<div/>').attr({class:"col-md-6 kj_cart_r_titles"}).html('총 상품금액').appendTo(div_r_1);
		$('<div/>').attr({id:"total_p",class:"col-md-6 kj_cart_r_conts"}).appendTo(div_r_1);
		let div_r_2=$('<div/>').attr({class:"col-md-12 kj_cart_r_div2"}).appendTo(div2);
		$('<div/>').attr({class:"col-md-6 kj_cart_r_titles"}).html('배송비').appendTo(div_r_2);
		$('<div/>').attr({id:"total_d",class:"col-md-6 kj_cart_r_conts"}).html('0원').appendTo(div_r_2);
		let div_r_3=$('<div/>').attr({class:"col-md-12 kj_cart_r_div2"}).appendTo(div2);
		$('<div/>').attr({class:"col-md-6 kj_cart_r_titles"}).html('총 할인금액').appendTo(div_r_3);
		$('<div/>').attr({id:"total_dis",class:"col-md-6 kj_cart_r_conts"}).appendTo(div_r_3);
		let div_r_4=$('<div/>').attr({class:"col-md-12 kj_cart_r_div2"}).appendTo(div2);
		$('<div/>').attr({class:"col-md-6 kj_cart_r_titles"}).html('총 결제금액').appendTo(div_r_4);
		$('<div/>').attr({id:"total_s",class:"col-md-6 kj_cart_r_conts"}).appendTo(div_r_4);
		let div_r_5=$('<div/>').attr({class:"col-md-12 kj_cart_r_div23"}).appendTo(div2);
		$('<button/>').attr({id:"kj_cart_r_buy_btn"}).html("전체 구매").appendTo(div_r_5).click(e=>{
			let del_con = confirm("전부 구매 하시겠습니까?");
			if(del_con){
				$.getJSON($.context()+'/cart/allbuy/'+$.cookie("userid"))
				setTimeout(function(){
				jun.main.cart();
				},200);
			}
			
			
		});
	
		
	},
	modal:x=>{
		$.magnificPopup.open({
			closeBtnInside:true,
			closeOnContentClick:false,
			alignTop: true,
			fixedBgPos:true,
			fixedContentPos:false,
			closeOnBgClick:false,
			items:{src:	'<div id="kj_cart_option_modal"><div id="wrap_panel">'
			    +'<div id="product_information">'
			        +'<div class="image" style="background-image: url('+$.img()+'/jun/'+x.category+'/'+x.photo+'.jpg)"></div>'
			        +'<div class="information">'
			            +'<div class="name">'+x.title+'</div>'
			            +'<div id="kj_delivery" class="delivery_info">'
			            +'</div>'
			        +'</div>'
			    +'</div>'
			    +'<form class="edit_carted_production" id="edit_carted_production_7034567" action="/carted_productions/7034567" accept-charset="UTF-8" data-remote="true"' +'method="post"><input name="utf8" type="hidden" value="✓"><input type="hidden" name="_method" value="patch">'
			        +'<div id="option_panel">'
			            +'<select id="product_option_depth1">'
			                +'<option value="0">색상</option>'
			            +'</select>'
			                +'<input val="0" type="hidden" value="0" name="carted_production[pay_at]" id="carted_production_pay_at">'
			        +'</div>'
			        +'<div id="selected_options_panel">'
			            +'<div class="options" id="selected_options">  '
			+'</div>'
			+'<input type="hidden" value="8765129" name="carted_production[carted_options_attributes][0][id]" id="carted_production_carted_options_attributes_0_id">'            +'</div>'
			            +'<div id="assembly_option" style="display: none;">'
			                +'<div class="name"></div>'
			                +'<div class="sum_cost">0</div>'
			            +'</div>'
			        +'</div>'
			        +'<div id="total_cost_panel">'
			            +'<div class="title">주문금액</div>'
			            +'<div class="cost" id="total_cost"><span id="kj_cart_pri" class="cost"></span><span class="unit">원</span></div>'
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
		
		//kj_delivery
		if(x.delivery==='0'){
		$('#kj_delivery').html("무료 | 일반 택배 배송 ");
		}else{
			$('#kj_delivery').html((x.delivery).replace(/\B(?=(\d{3})+(?!\d))/g, ',')+"원  | 일반 택배 배송");
		}
		
		let c = 1;
		$.getJSON($.context()+'/itemOption/'+x.seq,jun2=>{
			$.each(jun2,(i,j)=>{
				$('<option/>').val(j.seqo).html(j.options).appendTo($('#product_option_depth1'));
			})
			
			var f_s=0;
			jQuery($('#product_option_depth1')).change(function(){
				if($('#product_option_depth1 option:selected').val()==='0'){
					
				}else{
					let result = true;
					for(let i=1;i<=c;i++){
						if($("#kj_cart_option_name_"+i).val()===$('#product_option_depth1 option:selected').val()){
							result=false;
						}else{}
					}
					
					if(result){
						
						let c2= c;
						let count=1; // input 값 
						let p =(Math.round(jun2[0].sum/100))*100;
						let div1=$('<div/>').addClass('option').appendTo($('#selected_options'));
						$('<div/>').addClass('cancel').appendTo(div1).click(e=>{
							$('#kj_cart_input_'+c2).val(count) 
							f_s=f_s-(p*$('#kj_cart_input_'+c2).val());
							$('#kj_cart_pri').html(f_s);
							div1.remove();
						});
						$('<div/>').addClass('name kj_cart_option_name').html($('#product_option_depth1 option:selected').html()).appendTo(div1);
						$('<input/>').attr({type:'hidden',id:"kj_cart_option_name_"+c2}).val($('#product_option_depth1 option:selected').val()).appendTo(div1);
						let div2=$('<div/>').attr({class:'count_cost',style:'display: block;'}).appendTo(div1);
						let div3=$('<div/>').addClass('input').appendTo(div2);
						$('<div/>').attr({id:'kj_cart_arrowdown_'+c2,class:'arrow down'}).appendTo(div3).click(()=>{
							if(count>1){// count 가 1 미만으로 안내려가게 할려고 if문검
							count--;// count -- ;
							$('#kj_cart_input_'+c2).val(count) // input 박스 id .val(count) 로 값을 변경시킴
							f_s=f_s-p;
							$('#kj_cart_pri').html(f_s);
							}
						});
						let div4=$('<div/>').addClass('input').appendTo(div3);
						$('<input/>').attr({id:'kj_cart_input_'+c2,type:'number',}).val(count).appendTo(div4);
						
						
						$('<div/>').attr({id:'kj_cart_arrowup_'+c2,class:'arrow up'}).appendTo(div3).click(()=>{
							count++;
							$('#kj_cart_input_'+c2).val(count)
							f_s=f_s+p;
							$('#kj_cart_pri').html(f_s);
						});
					
						let z = $('#kj_cart_input_'+c2).val();
						let sum=z*p;
						f_s=f_s+sum;
						c++;
						$('#kj_cart_pri').html(f_s);
						
					}
				}

				
				
			})
			
			
			
			$('#kj_cart_add').click(e=>{
				let name="";
				let i_c="";
				for(let i=1;i<c;i++){
					name+=$('#kj_cart_option_name_'+i).val()+"/";
					i_c+=$('#kj_cart_input_'+i).val()+"/";
				}			
				$.ajax({
					url:$.context()+"/cart/add",
					method:'POST',
					contentType : 'application/json',
					data:JSON.stringify({userid:$.cookie("userid"),seq:x.seq,name:name,count:i_c}),
					success:c_d=>{
						if(confirm("장바구니로 가시겠습니까 ?")){
							jun.main.cart();
							$.magnificPopup.close();	
						}else{
							$.magnificPopup.close();
						}
						
						
					}
				})
				
			});
			$('#kj_cart_close').click(()=>{
				$.magnificPopup.close();
			});
			
			 
		});
		
	
		
	
		return false;
		
	},
	itemList:n=>{
		
    	let div_row = $('<div/>').addClass('row').appendTo($('#kj_item_list'))
    	$.getJSON($.context()+'/Items/'+n.page+'/'+n.category+'/'+n.agv+'/'+n.searchv,jund=>{
			
			$.each(jund.list,(i,j)=>{
					var div1 =	$('<div/>').attr({class:"col-md-3"}).appendTo(div_row);
					let div2 = $('<div/>').attr({class:"kj_item"}).appendTo(div1);
					let div_img=$('<div/>').attr({class:"kj_img_div"}).appendTo(div2);
					
					$('<img/>').attr({src:$.img()+'/jun/'+j.category+'/'+j.photo+'.jpg',class:"kj_item_img"}).appendTo(div_img).click(e=>{
						
						$.getScript($.script()+'/jieun.js',()=>{
							jieun.detail(j);
						});});
					
					let div3=$('<div/>').attr({class:'kj_icon_div'}).appendTo(div2);
					
					$('<span/>').attr({style:"cursor:pointer"})
					.addClass('glyphicon glyphicon-shopping-cart kj_cart_icon').appendTo(div3).click(e=>{
						
						if($.cookie("userid")===undefined){
							alert("로그인하십시오");
							$.getScript($.script()+'/hyeri.js',()=>{
								hyeri.login();
							})
							
						}else{
							jun.main.modal(j);	
						}
						
					});
					
					let div4=$('<div/>').attr("style","margin:5px").appendTo(div2);
					$('<div/>').attr({class:"kj_stroe_item_p",style:"font-size:17px;"}).html(j.title).appendTo(div4);
					let div_p= $('<div/>').attr({class:"kj_stroe_item_p"}).appendTo(div4);
					$('<span/>').addClass('kj_list_discount').html(j.discount+"%").appendTo(div_p)
					$('<span/>').addClass('kj_list_sum').html((((Math.round(j.sum/100))*100)+'')
							.replace(/\B(?=(\d{3})+(?!\d))/g, ',')+"원").appendTo(div_p)
					
					if(j.delivery==='0'){
						$('<div/>').attr({class:"kj_stroe_item_p"}).html(" 무료배송 ").appendTo(div4);
					}
				})
		});
	}}
