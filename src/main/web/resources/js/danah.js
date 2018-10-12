"use strict";
var danah = danah || {};

danah = (()=>{
	let init =()=>{
		onCreate();
	};
	let onCreate =()=>{
		setContentView();
	};
	let setContentView =()=>{
		
		$('#h_search_btn').attr({style : "visibility: visible;font-size:25px; margin-bottom:9px; vertical-align: bottom; margin-left:10px"})
			.click(d=>{
				d.preventDefault();
				danah.util.search();
			});
		$('#h_wirte_btn').attr({style : "visibility: visible; top:12px"})
			.click(d=>{
				d.preventDefault();
				/*if($.fn.undeChk([$.cookie("userid")])){
				alert('로그인이 필요한 서비스 입니다.');
			}else{*/
				danah.service.wirte();
			//}
		});
		danah.service.list();
	};
	return{init: init};
})();

danah.service = (()=>{
	let $context, $script, $style, $img, content;
	$context = $.context();
	$script = $.script();
	$style = $.style();
	$img = $.img();
	content = $('#content');
	
	let list = d=>{
		content.html(danah.util.filter());
		danah.compo.div({c: 'd_container', i: 'd_post_list', ht: danah.compo.div({c: 'd_row', s: 'margin-top:20px'})})
		.appendTo(content);
		for (let i = 0; i <= 20; i++) {
			let a = danah.compo.article({c: 'd_col_12  d_col_md_4 d_col_lg_3 d_post', hc: 'd_post_writer'});
			a.appendTo($('.d_row'));
			a.children(':first')
			.append(
				danah.compo.a({c: 'd_post_writer_profile', hr:'#', ht: danah.compo.img({sr: $img+'/danah/profile.jpeg',a:'의 프로필 사진'})}),
				danah.compo.p({c: 'd_post_writer_about', ht: danah.compo.a({hr:'#', ht: $('<strong/>').text('작성자')})})
			);
			a.children(':last')
			.append(
				danah.compo.div({c: 'd_post_img'})
				.append(
					// DB 이미지 정보가 있으면 horizon, 없으면 vertical
					danah.compo.img({c: 'horizon', sr: $img+'/danah/post/1.jpeg'}),
					// 정보가 있을때 생성
					danah.compo.span({c: 'd_post_img_info', s: 'background-position: 0px 0px; width: 14px; height: 14px;'}),
					// DB 조회수
					danah.compo.span({c: 'd_post_img_view', ht: ['조회수 ', 80]}),
					danah.compo.a({hr: '#', s: 'position: absolute; width: 100%; height: 100%;'})
				)
				.click(a=>{ 
					a.pre
					danah.service.post('게시글seq') }
				),
				danah.compo.aside({c: 'd_post_action'})
				.append(
					danah.compo.button({c: 'd_post_action_btn'})
					.append(
						danah.compo.span({c: 'd_post_action_icon', s: 'background-position: -240px -280px; width: 24px; height: 24px;'}),
						10
					),
					danah.compo.a({c: 'd_post_action_like'})
					.append(
						danah.compo.span({c: 'd_post_action_icon', s: 'background-position: -320px -280px; width: 24px; height: 24px;'}),
						10
					)
				),
				// DB 제목
				$('<figcaption/>').text('제목')
			);
		}
		danah.util.topbtn().appendTo(content);
		$(window).scroll(()=>{ 
			$(this).scrollTop() > 200 ? $('.d_top_btn').fadeIn('2000') : $('.d_top_btn').fadeOut('500'); 
		});
	};
	let wirte = d=>{
		content.html('글을쓰자! 열심히');
	};
	let post = d=> {
		content.html('디테일');
	};
	let edit = d=> {
		content.html('');
	};
	return {list: list, wirte: wirte, post: post, edit: edit};
})();

danah.util = {
	filter: ()=>{
		let d = danah.compo.div({c: 'd_filter_wrap'});
		d.append(
			danah.compo.nav({c: 'd_filter d_filter_depth_1', u:'d_container'}),
			danah.compo.nav({c: 'd_filter d_filter_depth_2 d_filter_hidden', u:'d_container'})
		);
		$.each([{k: '정렬', v: '인기순'}, {k: '공간', v: '모든공간'}, {k: '평수', v: '모든평수'}, {k: '제품정보',v: '모두'}], (i,v)=>{
			danah.compo.li({c: 'd_filter_item'})
			.append(
				danah.compo.button({c: 'd_filter_item_btn'})
				.append(
					danah.compo.span({c: 'd_filter_item_btn_search_key', t: v.k})
					.append(danah.compo.span({c: 'd_filter_item_btn_search_icon', s: 'margin-left:7px;transform-origin:center 7px;transition:transform .2s linear;transform:rotate(0deg);background-position-x:-40px;background-position-y:-0px;width:12px;height:12px'})),
					danah.compo.span({c: 'd_filter_item_btn_search_val', t: v.v})
				)
			)
			.appendTo(d.find('.d_container:first'))
			.click(a=>{
				a.preventDefault();
				let l = $('.d_filter_item');
				let b = $('.d_filter_item_btn_search_icon');
				let n = d.children(':last');
				if(l.eq(i).hasClass('d_filter_item_active')){
					b.attr('style', 'margin-left:7px;transform-origin:center 7px;transition:transform .2s linear;transform:rotate(0deg);background-position-x:-40px;background-position-y:-0px;width:12px;height:12px');
					l.removeClass('d_filter_item_active')
					n.addClass('d_filter_hidden');
				}else {
					b.attr('style', 'margin-left:7px;transform-origin:center 7px;transition:transform .2s linear;transform:rotate(0deg);background-position-x:-40px;background-position-y:-0px;width:12px;height:12px');
					b.eq(i).attr('style', 'margin-left: 7px; transform-origin: center 7px 0px; transition: transform 0.2s linear 0s; transform: rotate(-180deg); background-position: -40px 0px; width: 12px; height: 12px;');
					l.removeClass('d_filter_item_active')
					l.eq(i).addClass('d_filter_item_active');
					n.removeClass('d_filter_hidden');
					d.find('.d_container:last').html('');
					d.find('.d_filter_container:last')
					.append(
						$.each((i==0 ?
								['최신순', '인기순', '베스트']:
									i==1 ?
									['모든공간', '원룸', '거실', '침실', '주방', '욕실', '베란다']:
											i==2 ?
											['모든평수', '10평미만', '10평대', '20평대', '30평대', '40평대 이상']:
												['모두','정보있는사진만']), function(){
							danah.compo.li({c: 'd_filter_item'})
							.addClass(l.eq(i).find('.d_filter_item_btn_search_val').text()===this ? 'd_filter_item_active' : '')
							.append(
								danah.compo.a({c: 'd_filter_item_btn', t: this})
							)
							.appendTo(d.find('.d_container:last'));
						})
					);
				}
			});
		})
		return d;
	},
	topbtn: ()=>{
		let d = danah.compo.div({c: 'd_wiget_wrap'});
		danah.compo.a({c: 'd_top_btn'})
		.append(danah.compo.i({c: 'fa fa-chevron-up'}))
		.appendTo(d)
		.click(a=>{
			a.preventDefault();
			$('html, body').animate({scrollTop:0}, '1000');
		});
		return d;
	},
	search: ()=>{
		let a= '';
	}
};


danah.compo = {
	div: d=>{return $('<div/>').addClass(d.c).attr({id: d.i, style: d.s}).html(d.ht).text(d.t);},
	a: d=>{return $('<a/>').addClass(d.c).attr({href: d.hr, id: d.i, style: d.s}).html(d.ht).text(d.t);},
	p: d=>{return $('<p/>').addClass(d.c).attr({id: d.i}).html(d.ht).text(d.t);},
	ul: d=>{return $('<ul/>').addClass(d.c).attr({id: d.i}).html(d.ht).text(d.t);},
	li: d=>{return $('<li/>').addClass(d.c).attr({id: d.i}).html(d.ht).text(d.t);},
	button: d=>{return $('<button/>').addClass(d.c).attr({id: d.i, title: d.t, style: d.s}).html(d.ht);},
	span: d=>{return $('<span/>').addClass(d.c).attr({id: d.i, style: d.s}).html(d.ht).text(d.t);},
	nav: d=>{return $('<nav/>').addClass(d.c).attr({id: d.i}).html(danah.compo.ul({c: d.u}));},
	article: d=>{return $('<aticle/>').addClass(d.c).attr({id: d.i}).append($('<header/>').addClass(d.hc),$('<fiqure/>'));},
	img: d=>{return $('<img/>').addClass(d.c).attr({id: d.i, src: d.sr, alt :d.a, style: d.s});},
	i: d=>{return $('<i/>').addClass(d.c).attr({idsias: d.i});},
	aside: d=>{return $('<aside/>').addClass(d.c);},
	section: d=>{return $('<section/>').addClass(d.c);}
};

$.prototype.danah_undefiChk =d=>{
	let flag = false;
	$.each(d, function(){if(this === undefined) flag = true;})
	return flag;
};