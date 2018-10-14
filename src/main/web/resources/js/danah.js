"use strict";
var danah = danah || {};

danah = (() => {
	const init = () => {
        onCreate();
    };
    const onCreate = () => {
        setContentView();
    };
    const setContentView = () => {
        danah.service.menu();
        danah.service.list();
    };
    return { init: init };
})();

danah.service = (() => {
    let $context, $script, $style, $img, content;
    $context = $.context();
    $script = $.script();
    $style = $.style();
    $img = $.img();
    content = $('#content');

    let menu = d => {
        $('#h_search_btn')
    		.click(d => {
                d.preventDefault();
                danah.util.search();
            });
        $('#h_wirte_btn')
            .click(d => {
                d.preventDefault();
                /*if($.type($.cookie("userid"))==='undefined'){
            alert('로그인이 필요한 서비스 입니다.');
            $.getScript($.script()+'/app.js',()=>{
                app.permission.login();
                        });
        }else{*/
                danah.service.wirte();
                //}
            });
    };
    let list = d => {
        content.html(danah.util.filter());
        danah.compo.div({ c: 'd_container', i: 'd_post_list', ht: danah.compo.div({ c: 'd_row', s: 'margin-top:20px' }) })
            .appendTo(content);
        for (let i = 0; i <= 20; i++) {
            //서치결과 class name d_col_6  d_col_md_4 d_col_lg_3 d_post post_search
            const a = danah.compo.article({ c: 'd_col_12  d_col_md_4 d_col_lg_3 d_post', hc: 'd_post_writer' });
            a.appendTo($('.d_row'));
            a.children(':first')
                .append(
                    danah.compo.a({ c: 'd_post_writer_profile', hr: '#', ht: danah.compo.img({ sr: $img + '/danah/profile.jpeg', a: '의 프로필 사진' }) }),
                    danah.compo.p({ c: 'd_post_writer_about', ht: danah.compo.a({ hr: '#', ht: $('<strong/>').text('작성자') }) })
                );
            a.children(':last')
                .append(
                    danah.compo.div({ c: 'd_post_img' })
                    .append(
                        // DB 이미지 정보가 있으면 horizon, 없으면 vertical
                        danah.compo.img({ c: 'horizon', sr: $img + '/danah/post/1.jpeg' }),
                        // 정보가 있을때 생성 search page 생성하지 않음
                        danah.compo.span({ c: 'd_post_img_icon d_post_img_info', s: 'background-position: 0px 0px; width: 14px; height: 14px;' }),
                        // DB 조회수
                        danah.compo.span({ c: 'd_post_img_view', ht: ['조회수 ', 80] }),
                        danah.compo.a({ hr: '#', s: 'position: absolute; width: 100%; height: 100%;' })
                    )
                    .click(a => {
                    	a.preventDefault();
                        danah.service.detail('게시글seq')
                    }),
                    danah.compo.aside({ c: 'd_post_action' })
                    .append(
                        danah.compo.button({ c: 'd_post_action_btn' })
                        .append(
                            danah.compo.span({ c: 'd_post_action_icon', s: 'background-position: -240px -280px; width: 24px; height: 24px;' }),
                            10
                        ),
                        danah.compo.a({ c: 'd_post_action_like' })
                        .append(
                            danah.compo.span({ c: 'd_post_action_icon', s: 'background-position: -320px -280px; width: 24px; height: 24px;' }),
                            10
                        )
                    ),
                    // DB 제목
                    $('<figcaption/>').text('제목')
                );
        }
        danah.util.topbtn(content);
    };
    let wirte = d => {
    	$.magnificPopup.open({
			closeBtnInside:true,
			closeOnContentClick:false,
			alignTop: true,
			fixedBgPos:true,
			fixedContentPos:false,
			items:{src: danah.compo.p({t: '내용채우기!!'})
			},
			midClick:true,
			overflowY:'auto',
			removalDelay:'0',
			type:'inline'});
    };
    let detail = d => {
    	let c = danah.compo.div({ c: 'd_post_detail d_container' });
    	content.html(c);
    	c.append(
    	        danah.compo.article({ c: 'd_row' })
    	        .append(
    	            danah.compo.section({ c: 'col-12 col-lg-8' })
    	            .append(
    	                $('<header/>')
    	                .append(
    	                    danah.compo.p({ c: 'category' })
    	                    .append(
	                    		danah.compo.span({ c: 'category__item', ht: '30평대' }),
	                    		danah.compo.span({ c: 'category__item', ht: '모던스타일' })
    	                    ),
    	                    $('<time/>').text('2018.10.13')
    	                ),
    	                danah.compo.section({
    	                    c: 'card-section',
    	                    ht: danah.compo.ul({ c: 'keyword' })
    	                }),
    	                danah.compo.section({ c: 'footer' })
    	                .append(
    	                    danah.compo.hr({ c: 'section-divider' }),
    	                    danah.compo.div({ c: 'footer__stats' }),
    	                    danah.compo.div({ c: 'footer__share' })
    	                    .append(
    	                    		danah.util.share()
    	                    		.append(
	    	                    		danah.compo.div({ c: 'share-card__url tooltip invisible' })
	                                    .append(
	                                        danah.compo.p({ t: '게시물주소' }),
	                                        danah.compo.button({ t: '복사' })
	                                    )
        	                    )),
    	                    danah.compo.hr({ c: 'section-divider' }),
    	                    danah.compo.section({ c: 'footer__writer' })
    	                    .append(
    	                        danah.compo.div({ c: 'writer-profile' })
    	                        .append(
    	                            danah.compo.div({ c: 'writer-profile__img' })
    	                            .append(danah.compo.a({ hr: '#', ht: danah.compo.img({ sr: $img + '/danah/profile.jpeg' }) })),
    	                            danah.compo.div({})
    	                            .append(
    	                                danah.compo.a({ hr: '#', ht: $('<strong/>').addClass('writer-profile__name').text('닉네임') })
    	                            )
    	                        )
    	                        /* --------------- 다른게시물 추후 추가해야함!!! --------------- ,
    	                        danah.compo.section({ c: 'footer__other row' }) .append(danah.compo.div({ c: 'col-5 col-md-3' }).append(danah.compo.a({ c: 'footer__other__more', hr: '#' }).append(danah.compo.span({ c: 'icon--page-mypage', s: 'margin-bottom: 10px; background-position: 0px -120px; width: 40px; height: 40px;', ht: ['더보기'] }))))
    	                        ------------------------------------------------- */
    	                    ),
    	                    danah.compo.hr({ c: 'section-divider' })
    	                ),
    	                danah.compo.section({ c: 'comment-feed' })
    	                .append(
    	                    danah.compo.h1({
    	                        c: 'comment-feed__header',
    	                        ht: ['댓글', '&nbsp;', danah.compo.span({ c: 'comment-feed__header__count', t: '16' })]
    	                    }),
    	                    danah.compo.div({ c: 'comment-feed__form' })
    	                    .append(
	                    		$.type($.cookie("userid"))!=='undefined' ? '' : danah.compo.a({ hr: '#', c: 'comment-feed__form__cover' })
	                    			.click(a=>{
	                    				//로그인서비스이동
	                    			}),
    	                        danah.compo.div({ c: 'comment-feed__form__user', ht: danah.compo.img({ sr: $img + '/danah/profile.jpeg' }) }),
    	                        danah.compo.div({ c: 'comment-feed__form__input' })
    	                        .append(
    	                            danah.compo.div({
    	                                c: 'comment-feed__form__content',
    	                                ht: $('<textarea/>')
    	                                    .addClass('comment-content-input comment-feed__form__content__text')
    	                                    .attr({
    	                                        placeholder: '의견을 남겨 보세요.',
    	                                        readonly: '',
    	                                        style: 'height: 38px;'
    	                                    })
    	                            }),
    	                            danah.compo.div({ c: 'comment-feed__form__actions' })
    	                            .append(
    	                                danah.compo.a({ c: 'comment-feed__form__submit', ht: danah.compo.i({ c: 'fas fa-arrow-circle-right', s: 'font-size: 24px; color: rgba(204, 82, 0, 0.7);' }) })
    	                            )
    	                        )
    	                    ),
    	                    danah.util.comment(),
    	                    danah.util.pagination()
    	                )
	                ),
	                danah.compo.aside({ c: 'col-4 sidebar' })
	                .append(
	                    danah.compo.div({ c: 'sticky-container sidebar__sticky' }).attr({ 'data-enabled': 'false', 'data-direction': 'top', 'data-offset': '0', style: 'position: sticky; top: 131px;' })
	                    .append(
	                        danah.compo.div({ c: 'sticky-child', s: 'position: relative;' })
	                        .append(
	                            danah.compo.div({ c: 'sidebar__container', s: 'height: 782px;' })
	                            .append(
	                                danah.compo.div({ s: 'padding-top: 40px;' })
	                                .append(
	                                    danah.compo.section({ c: 'sidebar__action' })
	                                    .append(
	                                        danah.compo.div({}).append(
	                                            danah.compo.button({ c: 'sidebar__action__btn' })
	                                            .append(
	                                                danah.compo.span({ c: 'icon--common-action', s: 'vertical-align: middle; margin-right: 8px; background-position: -240px -280px; width: 24px; height: 24px;', ht: ['242'] })
	                                            )
	                                        )
	                                    ),
	                                    danah.compo.section({ c: 'sidebar__writer writer-info' })
	                                    .append(
	                                        danah.compo.div({ c: 'writer-profile' })
	                                        .append(
	                                            danah.compo.div({ c: 'writer-profile__img' })
	                                            .append(
	                                                danah.compo.a({ hr: '#', ht: danah.compo.img({ sr: $img + '/danah/profile.jpeg' }) })
	                                            ),
	                                            danah.compo.div({})
	                                            .append(
	                                                danah.compo.a({ hr: '#', ht: $('<strong/>').addClass('writer-profile__name').text('닉네임') })
	                                            )
	                                        )
	                                    )
	                                    /* ------------- 섬네일 추후 구현 ------------- ,
	                                    danah.compo.section({ c: 'sidebar__others' }).append(danah.compo.div({c: 'sidebar__others__list'}).append(danah.compo.a({c: 'sidebar__others__btn', t: '더보기'})))
	                                    ------------------------------------------ */
	                                ),
	                                danah.compo.section({ c: 'sidebar__share' })
	                                .append(
	                                	danah.util.share(),
	                                    danah.compo.div({ c: 'share-card__url tooltip invisible' })
	                                    .append(
	                                        danah.compo.p({ t: '게시물주소' }),
	                                        danah.compo.button({ t: '복사' })
	                                    )
	                                )
	                            )
	                        )
	                    )
	                ),
	                danah.compo.div({ c: 'floating-bar' })
	                .append(
	                	danah.compo.div({c: 'container', s: 'position: relative; height: 100%;'})
	                	.append(
                			danah.compo.button({c: 'floating-bar__btn-menu'})
                	    	.append(
                	    		danah.compo.span({c: 'icon--common-action',s : 'vertical-align: middle; margin-right: 6px; background-position: 0px -280px; width: 24px; height: 24px;'}),
                	    		242
                	    	),
                	    	danah.compo.button({c: 'floating-bar__btn-menu'})
                	    	.append(
                	    		danah.compo.span({c: 'icon--common-action',s : 'vertical-align: middle; margin-right: 6px; background-position: -160px -280px; width: 24px; height: 24px;'}),
                	    		16
                	    	),
                	    	danah.compo.button({c: 'floating-bar__btn-menu'})
                	    	.append(
                	    		danah.compo.span({c: 'icon--common-action', s: 'vertical-align: middle; margin-right: 6px; background-position: -200px -280px; width: 24px; height: 24px;'}),
                	    		184
                	    	),
                	    	danah.compo.div({c: 'share-tooltip--my-home'})
                	    	.append(
                	    		danah.compo.button({c: 'icon--common-action', s: 'background-position: -200px 0px; width: 28px; height: 28px;'}),
                	    		danah.compo.div({c: 'share-tooltip__tooltip', s: 'right: 0px; bottom: 100%;'})
                	    		.append(
                	    			danah.compo.a({c: 'share-tooltip__btn-share', hr: 'https://www.facebook.com/sharer.php?u='+'게시물주소', tg: '_blank', r: 'noopener noreferrer', ht: danah.compo.span({c: 'icon icon-sns-square-facebook'})}),
                	    			danah.compo.a({c: 'share-tooltip__btn-share', hr:'', ht: danah.compo.span({c: 'icon icon-sns-square-kakao-story'})}),
                	    			danah.compo.a({c: 'share-tooltip__btn-share', hr:'http://share.naver.com/web/shareView.nhn?url='+'게시물주소'+'&title='+'제목',tg: '_blank', r: 'noopener noreferrer', ht: danah.compo.span({c: 'icon icon-sns-square-naver'})})
                	    		)
                	    	)
	                	)
	                )
                )
            );
    	Danah_post(1);
    	function Danah_post(a) {
    	    const p = $('.card-section');
    	    $('<figure/>')
    	        .append(
    	            danah.compo.div({ c: 'card-img card-img--pc' })
    	            .append(
    	                danah.compo.img({ sr: $img + '/danah/post/1.jpeg', s: 'width: 100%; display: block;' }),
    	                danah.compo.div({ c: 'card-img__tags' })
    	            ),
    	            /* --------------- product list 추후 추가해야함!!! --------------- */
    	            danah.compo.aside({ c: 'used-product used-product--scrollable used-product--scrollable--left-end' }) 
    	            .append(
    	                danah.compo.div({ c: 'used-product__list' }),
    	                danah.compo.button({ c: 'used-product--scrollable__btn', s: 'left: -30px;' })
    	                .append(
    	                    danah.compo.span({ c: 'icon--page-card', s: 'background-position: 0px -160px; width: 44px; height: 44px;' }),
    	                    danah.compo.span({ c: 'icon--page-card', s: 'background-position: -160px -160px; width: 44px; height: 44px;' })
    	                ),
    	                danah.compo.button({ c: 'used-product--scrollable__btn', s: 'right: -30px;' })
    	                .append(
    	                    danah.compo.span({ c: 'icon--page-card', s: 'background-position: 0px -160px; width: 44px; height: 44px;' }),
    	                    danah.compo.span({ c: 'icon--page-card', s: 'background-position: -160px -160px; width: 44px; height: 44px;' })
    	                )
    	            ),
    	            /* ----------------------------------------------------------- */
    	            $('<figcaption/>')
    	        )
    	        .prependTo(p);

    	    $.each([{ hr: '#', s: 'left: 11.4193%; top: 33.8053%;' }, { hr: '#', s: 'left: 2.01403%; top: 20.4236%;' }], function() {
    	        danah.compo.a({ hr: this.hr })
    	            .append(
    	                danah.compo.span({c: 'product-tag', s: this.s})
    	                .append(
    	                    danah.compo.i({c:'fas fa-plus-circle', s: 'font-size: 24px; color: rgba(204, 82, 0, 0.7);'})
    	                )
    	            )
    	            .appendTo(p.find('.card-img__tags'));
    	    });

    	    /* --------------- product list 추후 추가해야함!!! --------------- */
    	    $.each((['/jun/1.JPG', '/jun/1.JPG']), function() {
    	        danah.compo.a({ hr: '#', s: 'padding: 0px 5px;' })
    	            .append(
    	                danah.compo.div({
    	                    c: 'used-product__item',
    	                    ht: danah.compo.img({ sr: $img + this /* 검토중, srs: ''*/ })
    	                })
    	            )
    	            .appendTo(p.find('.used-product__list'));
    	    });
    	    /* ----------------------------------------------------------- */

    	    $.each((['이 집의 컨셉은 심플한 북유럽스타일.', '그러므로 베이스컬러는 당연히 화이트.']), function() {
    	        danah.compo.p({ t: this })
    	        .appendTo(p.find('figcaption'));
    	    });

    	};
    	
    	$.each(['이케아', '깔끔한', '협탁'], function() {
	        danah.compo.li({ c: 'keyword__item' })
	            .append(
	                danah.compo.a({ hr: '#' })
	                .append(
	                    danah.compo.li({ c: 'keyword__item__badge', ht: ['#', this] })
	                )
	            )
	            .appendTo(c.find('.keyword'))
	            .click(() => {
	                danah.service.search();
	            });
	    });
	    
	    // 공유한수 구현여부 검토 필요
	    $.each([{ n: '조회', v: '98766' }, { n: '댓글', v: '8' }, { n: '공유', v: '184' }], function() {
	        danah.compo.div({ c: 'footer__stats__item', ht: danah.compo.span({ ht: [this.n, this.v] }) })
	            .appendTo(c.find('.footer__stats'));
	    });
	    
    };
    let edit = d => {
    	$.magnificPopup.open({
			closeBtnInside:true,
			closeOnContentClick:false,
			alignTop: true,
			fixedBgPos:true,
			fixedContentPos:false,
			items:{src: danah.compo.p({t: '내용채우기!!'})
			},
			midClick:true,
			overflowY:'auto',
			removalDelay:'0',
			type:'inline'});
    };
    return { menu: menu, list: list, wirte: wirte, detail: detail, edit: edit };
})();

danah.util = {
    filter: d => {
        const w = danah.compo.div({ c: 'd_filter_wrap' });
        w.append(
            danah.compo.nav({ c: 'd_filter d_filter_depth_1', u: 'd_container' }),
            danah.compo.nav({ c: 'd_filter d_filter_depth_2 d_filter_hidden', u: 'd_container' })
        );
        $.each([{ k: '정렬', v: '인기순' }, { k: '공간', v: '모든공간' }, { k: '평수', v: '모든평수' }, { k: '제품정보', v: '모두' }], (i, v) => {
            danah.compo.li({ c: 'd_filter_item' })
                .append(
                    danah.compo.button({ c: 'd_filter_item_btn' })
                    .append(
                        danah.compo.span({ c: 'd_filter_item_btn_search_key', t: v.k })
                        .append(danah.compo.span({ c: 'd_filter_item_btn_search_icon', s: 'margin-left:7px;transform-origin:center 7px;transition:transform .2s linear;transform:rotate(0deg);background-position-x:-40px;background-position-y:-0px;width:12px;height:12px' })),
                        danah.compo.span({ c: 'd_filter_item_btn_search_val', t: v.v })
                    )
                )
                .appendTo(w.find('.d_container:first'))
                .click(a => {
                    a.preventDefault();
                    const l = $('.d_filter_item');
                    const b = $('.d_filter_item_btn_search_icon');
                    const n = w.children(':last');
                    if (l.eq(i).hasClass('d_filter_item_active')) {
                        b.attr('style', 'margin-left:7px;transform-origin:center 7px;transition:transform .2s linear;transform:rotate(0deg);background-position-x:-40px;background-position-y:-0px;width:12px;height:12px');
                        l.removeClass('d_filter_item_active')
                        n.addClass('d_filter_hidden');
                    } else {
                        b.attr('style', 'margin-left:7px;transform-origin:center 7px;transition:transform .2s linear;transform:rotate(0deg);background-position-x:-40px;background-position-y:-0px;width:12px;height:12px');
                        b.eq(i).attr('style', 'margin-left: 7px; transform-origin: center 7px 0px; transition: transform 0.2s linear 0s; transform: rotate(-180deg); background-position: -40px 0px; width: 12px; height: 12px;');
                        l.removeClass('d_filter_item_active')
                        l.eq(i).addClass('d_filter_item_active');
                        n.removeClass('d_filter_hidden');
                        w.find('.d_container:last').html('');
                        w.find('.d_filter_container:last')
                            .append(
                                $.each((i == 0 ? ['최신순', '인기순', '베스트'] :
                                    i == 1 ? ['모든공간', '원룸', '거실', '침실', '주방', '욕실', '베란다'] :
                                    i == 2 ? ['모든평수', '10평미만', '10평대', '20평대', '30평대', '40평대 이상'] : ['모두', '정보있는사진만']), function() {
                                    danah.compo.li({ c: 'd_filter_item' })
                                        .addClass(l.eq(i).find('.d_filter_item_btn_search_val').text() === this ? 'd_filter_item_active' : '')
                                        .append(
                                            danah.compo.a({ c: 'd_filter_item_btn', t: this })
                                        )
                                        .appendTo(w.find('.d_container:last'));
                                })
                            );
                    }
                });
        })
        return w;
    },
    topbtn: d => {
        const w = danah.compo.div({ c: 'd_wiget_wrap' });
        danah.compo.a({ c: 'd_top_btn' })
            .append(danah.compo.i({ c: 'fa fa-chevron-up' }))
            .appendTo(w.appendTo(d))
            .click(a => {
                a.preventDefault();
                $('html, body').animate({ scrollTop: 0 }, '1000');
            });
        $(window).scroll(() => {
            $(this).scrollTop() > 200 ? $('.d_top_btn').fadeIn('2000') : $('.d_top_btn').fadeOut('500');
        });
    },
    search: d => {
        const p = danah.compo.p({ c: 'd_post_search' });
        danah.service.list();
        $('figcaption').remove();
        p.html(["'", '이케아', "'에 대한 검색 결과"])
            .append(danah.compo.span({ ht: ['20,077', '개'] }))
            .prependTo($('#d_post_list'));
    },
    comment: d=>{
    	const p = danah.compo.ul({ c: 'comment-feed__list' });
    	const $i = $.img();
    	$.each([{ i: '아이디', c: '깔끔하네요!', d: '2018-10-02' }], function() {
    		danah.compo.li({ c: 'comment-feed__list__item' })
            .append(
                danah.compo.article({ c: 'comment-feed__item' })
                .append(
                    danah.compo.p({ c: 'comment-feed__item__content' })
                    .append(
                        danah.compo.a({ hr: '#', c: 'comment-feed__item__content__author' })
                        .append(
                            danah.compo.img({ c: 'comment-feed__item__content__author__image', sr: $i + '/danah/profile.jpeg' }),
                            danah.compo.span({ c: 'comment-feed__item__content__author__name', t: this.i })
                        ),
                        danah.compo.span({ c: 'comment-feed__item__content__content', t: this.c })
                    ),
                    $('<footer/>')
                    .addClass('comment-feed__item__footer')
                    .append($('<time/>').addClass('comment-feed__item__footer__time').append(this.d)
                        // like 검토중
                    )
                )
            ).appendTo(p)
        });
    	return p;
    },
    pagination: d=>{
    	const p = danah.compo.ul({ c: 'list-paginator' });
    	let startPage = 1;
    	let endPage = 5;
    	let pageNum = 1;
    	let existPre = false;
    	let existNext = true;
    	for (let i = startPage - 1; i <= endPage + 1; i++) {
    	    danah.compo.li({})
    	        .append(
    	            danah.compo.a({
    	                c: (startPage - 1 == i) ?
    	                    'list-paginator__prev' : (endPage + 1 == i) ?
    	                    'list-paginator__next' : 'list-paginator__page',
                    	s: 'border: 1px solid #DCDCDC; border-radius: 5px; width: 26px; height: 26px; position: absolute; text-align: center; color: inherit;'
    	            })
    	            .addClass((pageNum == i) ? 'selectd' : '')
    	            .removeClass((pageNum != i)? 'selectd': '' )
    	            .html(
	            		(startPage - 1 == i) && !existPre ?
    	                danah.compo.i({ c: 'fas fa-chevron-left', s: 'font-size: 15px; color: rgba(204, 82, 0, 0.7);vertical-align: middle;'}) :
    	                (endPage + 1 == i) && existNext ?
    	                danah.compo.i({ c: 'fas fa-chevron-right', s: 'font-size: 15px; color: rgba(204, 82, 0, 0.7);vertical-align: middle;' }) :
    	                i
    	            )
    	        )
    	        .appendTo(p)
    	        .click(function() {
    	            console.log($(this).text());
    	            //app.service.boards((d.page.startPage - 1 == i) ? d.page.pre : (d.page.endPage + 1 == i) ? d.page.next : $(this).text());
    	        });
    	}
    	return p;
    },
    share: d=>{
    	const p = danah.compo.div({c: 'share-card'});
    	$.each([
	    	{ l: '', s: 'background-position: -320px -40px; width: 48px; height: 48px;' },
	    	{ s: 'background-position: -240px -40px; width: 48px; height: 48px;'},
	    	{ l: 'href="http://share.naver.com/web/shareView.nhn?url=', s: 'background-position: -160px -40px; width: 48px; height: 48px;' },
	    	{ l: 'https://www.facebook.com/sharer.php?u=', s: 'background-position: -80px -40px; width: 48px; height: 48px;' }
	    ], (i, v)=> {
	        danah.compo.div({})
	            .append(
	            	(i<2) ?
            			danah.compo.button({c: 'share-card__btn', ht: danah.compo.span({c: 'icon--page-card', s: v.s})}):
            			danah.compo.a({ c: 'share-card__btn', tg: '_blank', r: 'noopener noreferrer', hr: v.l + '게시물주소' + ((i == 2) ? '&title=게시물제목' : ''), ht: danah.compo.span({ c: 'icon--page-card', s: v.s }) })
	            )
	            .prependTo(p);
	    });
    	return p;
    }
};

danah.compo = {
    div: d => { return $('<div/>').addClass(d.c).attr({ id: d.i, style: d.s }).html(d.ht).text(d.t); },
    h1: d=>{ return $('<h1/>').addClass(d.c).html(d.ht)},
    hr: d => { return $('<hr/>').addClass(d.c); },
    a: d => { return $('<a/>').addClass(d.c).attr({ href: d.hr, id: d.i, style: d.s, target: d.tg, rel: d.r }).html(d.ht).text(d.t); },
    p: d => { return $('<p/>').addClass(d.c).attr({ id: d.i }).html(d.ht).text(d.t); },
    ul: d => { return $('<ul/>').addClass(d.c).attr({ id: d.i }).html(d.ht).text(d.t); },
    li: d => { return $('<li/>').addClass(d.c).attr({ id: d.i }).html(d.ht).text(d.t); },
    button: d => { return $('<button/>').addClass(d.c).attr({ id: d.i, title: d.t, style: d.s }).html(d.ht); },
    img: d => { return $('<img/>').addClass(d.c).attr({ id: d.i, src: d.sr, srcset: d.srs, alt: d.a, style: d.s }); },
    span: d => { return $('<span/>').addClass(d.c).attr({ id: d.i, style: d.s }).html(d.ht).text(d.t); },
    nav: d => { return $('<nav/>').addClass(d.c).attr({ id: d.i }).html(danah.compo.ul({ c: d.u })); },
    article: d => { return $('<aticle/>').addClass(d.c).attr({ id: d.i }).append($('<header/>').addClass(d.hc), $('<figure/>')); },
    i: d => { return $('<i/>').addClass(d.c).attr({ id: d.i, style: d.s }); },
    aside: d => { return $('<aside/>').addClass(d.c); },
    section: d => { return $('<section/>').addClass(d.c).html(d.ht); }
};

$.prototype.danah_unllChk = d => {
    let flag = false;
    $.each(d, function() {if (this==='') flag = true; })
    return flag;
};

function Danah_paging(a){
    let $c = '';
    $c.appendTo($('.card-section'));
}