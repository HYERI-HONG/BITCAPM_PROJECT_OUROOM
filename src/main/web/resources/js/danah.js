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
<<<<<<< HEAD
		($('.navigation-primary__actions').children(":first").attr("class")==="d_search_btn") ?
		'' :
		$('.navigation-primary__actions')
		.prepend(
			compo.button({c: 'd_search_btn', t: '검색'})
			.append(compo.span({c: 'd_search_btn_icon'}))
			.click(d=>{
				d.preventDefault();
				danah.util.search();
			}),
			compo.a({c: 'd_wirte_btn', i: 'wirte_btn', hr: '/board_upload', t: '글쓰기'})
			.click(d=>{
				d.preventDefault();
				/*if($.fn.undeChk([$.cookie("userid")])){
					alert('로그인이 필요한 서비스 입니다.');
				}else{*/
					danah.service.wirte();
				//}
			})
		);
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
		compo.div({c: 'd_container', i: 'd_posts', ht: compo.div({c: 'd_row', s: 'margin-top:20px'})})
		.appendTo(content);
		for (let i = 0; i <= 4; i++) {
			let $a = compo.article({c: 'd_post', hc: 'd_post_writer'});
			$a.appendTo($('.d_row'));
			$a.children(':first')
			.append(
				compo.a({c: 'd_post_writer_profile', hr:'#', ht: compo.img({s:$img+'/danah/profile.jpeg',a:'의 프로필 사진'})}),
				compo.p({c: 'd_post_writer_about', ht: compo.a({hr:'#', ht: $('<strong/>').text('작성자')})})
			);
			$a.children(':last')
			.append(
				compo.div({c: 'd_post_img'})
				.append(
					// DB 이미지
					compo.img({c: 'horizon', s: $img+'/post/1.jpeg'}),
=======
		($('#h_navigation_primary').hasClass("d_search_btn")) ?
		'' :
		$('#symbol')
		.before(
			compo.button({c: 'd_search_btn', t: '검색'}).attr({style : "top:20px"})
			.append(compo.span({c: 'd_search_btn_icon'}))
			.click(d=>{
				d.preventDefault();
				danah.util.search();
			}),
			compo.a({c: 'd_wirte_btn', i: 'wirte_btn', hr: '/board_upload', t: '글쓰기'}).attr({style : "top:15px"})
			.click(d=>{
				d.preventDefault();
				/*if($.fn.undeChk([$.cookie("userid")])){
					alert('로그인이 필요한 서비스 입니다.');
				}else{*/
					danah.service.wirte();
				//}
			})
		);
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
		compo.div({c: 'd_container', i: 'd_posts', ht: compo.div({c: 'd_row', s: 'margin-top:20px'})})
		.appendTo(content);
		for (let i = 0; i <= 4; i++) {
			let $a = compo.article({c: 'd_post', hc: 'd_post_writer'});
			$a.appendTo($('.d_row'));
			$a.children(':first')
			.append(
				compo.a({c: 'd_post_writer_profile', hr:'#', ht: compo.img({s:$img+'/danah/profile.jpeg',a:'의 프로필 사진'})}),
				compo.p({c: 'd_post_writer_about', ht: compo.a({hr:'#', ht: $('<strong/>').text('작성자')})})
			);
			$a.children(':last')
			.append(
				compo.div({c: 'd_post_img'})
				.append(
					// DB 이미지
					compo.img({c: 'horizon', s: $img+'/danah/post/1.jpeg'}),
>>>>>>> refs/remotes/origin/master
					// 정보가 있을때 생성
					compo.span({c: 'd_post_img_info', s: 'background-position: 0px 0px; width: 14px; height: 14px;'}),
					// DB 조회수
					compo.span({c: 'd_post_img_view', ht: ['조회수', 80]}),
					compo.a({hr: '#', s: 'position: absolute; width: 100%; height: 100%;'})
				),
				$('<aside/>')
				.addClass('d_position_action')
				.append(
					compo.button({c: 'd_post_action_btn', ht: compo.span({c: 'd_post_action_icon', s: 'background-position: -240px -280px; width: 24px; height: 24px;'})}),
					compo.a({c: 'd_post_action_link', ht: compo.span({c: 'd_post_action_icon', s: 'background-position: -320px -280px; width: 24px; height: 24px;', ht: 0})})
				),
				// DB 제목
				$('<figcaption/>').text('제목')
			);
			
			
		}
	};
	let wirte = d=>{
		content.html('글을쓰자!');
	};
	let post = d=> {
		content.html('');
	};
	let edit = d=> {
		content.html('');
	};
	return {list: list, wirte: wirte, post: post, edit: edit};
})();

danah.util = {
	filter: ()=>{
		let $d = compo.div({c: 'd_post_filter'});
		$d.append(
			compo.nav({c: 'd_filter_depth_1', u:'d_filter_container'}),
			compo.nav({c: 'd_filter_depth_2', u:'d_filter_container'})
		);
		$([{k: '정렬', v: '인기순'}, {k: '공간', v: '모든공간'}, {k: '평수', v: '모든평수'}, {k: '제품정보',v: '모두'}]).each((i,v)=>{
			compo.li({c: 'd_item'})
			.append(
				compo.button({c: 'd_item_btn'})
				.append(
					compo.span({c: 'd_search_key'})
					.text(v.k)
					.append(compo.span({c: 'd_search_icon'})),
					compo.span({c: 'd_search_val'})
					.text(v.v)
				)
			)
			.appendTo($d.find('.d_filter_container:first'))
			.click(d=>{
				d.preventDefault();
				let $v = $('.d_search_val');
				let $i = $('.d_search_icon');
//				if($v.hasClass('select')==true) {
//					v.removeClass('select');
//				}else{
//					$v.eq(i).addClass('select')
//				} 
				$v.removeAttr('style');
				$i.removeAttr('style');
				$v.eq(i).css({color: '#cc5200'});
				$i.eq(i).attr('style', 'transform: rotate(-180deg)');
				if(($('.d_filter_container:last').children().length>0)) $d.find('.d_filter_container:last').html('');
				$((i==0)?
					['최신순', '인기순', '베스트']:
					(i==1)?
					['모든공간', '원룸', '거실', '침실', '주방', '욕실', '베란다']:
						(i==2)?
						['모든평수', '10평미만', '10평대', '20평대', '30평대', '40평대 이상']:
							['모두','정보있는사진만']
				).each(function(){
					compo.li({c: 'd_item'})
					.append(
						compo.a({c: 'd_item_btn', s: ($v.eq(i).text()===this)? 'color: #cc5200': ''})
						.text(this)
					)
					.appendTo($d.find('.d_filter_container:last'));
				})
			});
		})
		return $d;
	},
	search: ()=>{
		let a= '';
	}
};


const compo = {
	div: d=>{
		return $('<div/>').addClass(d.c).attr({id: d.i, style: d.s}).html(d.ht).text(d.t);
	},
	a: d=>{
		return $('<a/>').addClass(d.c).attr({href: d.hr, id: d.i, style: d.s}).html(d.ht).text(d.t);
	},
	p: d=>{
		return $('<p/>').addClass(d.c).attr({id: d.i}).html(d.ht).text(d.t);
	},
	ul: d=>{
		return $('<ul/>').addClass(d.c).attr({id: d.i}).html(d.ht).text(d.t);
	},
	li: d=>{
		return $('<li/>').addClass(d.c).attr({id: d.i}).html(d.ht).text(d.t);
	},
	button: d=>{
		return $('<button/>').addClass(d.c).attr({id: d.i, title: d.t, style: d.s}).html(d.ht);
	},
	span: d=>{
		return $('<span/>').addClass(d.c).attr({id: d.i, style: d.s}).html(d.ht).text(d.t);
	},
	nav: d=>{
		return $('<nav/>').addClass(d.c).attr({id: d.i}).html(compo.ul({c: d.u}));
	},
	article: d=>{
		return $('<aticle/>').addClass(d.c).attr({id: d.i}).append($('<header/>').addClass(d.hc),$('<fiqure/>'));
	},
	img: d=>{
		return $('<img/>').addClass(d.c).attr({id: d.i, src: d.s, alt :d.a});
	}
};

$.prototype.undefiChk =d=>{
	let flag = false;
	$(d).each(function(){
		if(this === undefined) flag = true;
	})
	return flag;
};
