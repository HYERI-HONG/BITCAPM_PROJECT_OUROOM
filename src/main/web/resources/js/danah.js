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
        danah.s.m();
        danah.s.l(1);
    };
    return { init: init };
})();

danah.s = (() => {
    let $ctx, $js, $css, $i, ctt;
    $ctx = $.context();
    $js = $.script();
    $css = $.style();
    $i = $.img();
    ctt = $('#content');

    let m = d => {
        $('#h_search_btn')
            .click(d => {
                d.preventDefault();
                danah.u.se();
            });
        $('#h_wirte_btn')
            .click(d => {
                d.preventDefault();
                
				//.attr({'style': $(this).attr('style')==='right: 0px; bottom: 100%; transition: opacity 0.3s ease 0s, transform 0.3s ease 0s, visibility 0s ease 0.3s; opacity: 0; transform: translateY(-16px); visibility: hidden;' ? 
				//	'right: 0px; bottom: 100%;' : 
				//	'right: 0px; bottom: 100%; transition: opacity 0.3s ease 0s, transform 0.3s ease 0s, visibility 0s ease 0.3s; opacity: 0; transform: translateY(-16px); visibility: hidden;'});
                /*if($.type($.cookie("userid"))==='undefined'){
            alert('로그인이 필요한 서비스 입니다.');
            $.getScript($.script()+'/app.js',()=>{
                app.permission.login();
                        });
        }else{*/
                danah.s.w();
                //}
            });
    };
    let w = d => {
        $.magnificPopup.open({
            closeBtnInside: true,
            closeOnContentClick: false,
            alignTop: true,
            fixedBgPos: true,
            fixedContentPos: false,
            items: {
                src: danah.c.div({c: 'd_post_write', id: 'd_post_write' })
                    .append(
                        danah.c.form({ c: 'new_post', i: 'upload_post_form', et: 'multipart' })
                        .append(
                            danah.c.div({ c: 'd_form_fields' })
                            .append(
                                danah.c.div({ i: 'd_upload_image' })
                                .append(
                                    danah.c.img({ i: 'd_real_image' }),
                                    // 파일업로드시
                                    //danah.c.div({ i: 'd_upload_panel, c: 'change'})
                                    //.append(
                                    //    danah.c.div({ c: 'd_icon' }),
                                    //    danah.c.div({ c: 'd_progress', t: '사진 바꾸기' })
                                    //)
                                    danah.c.div({ i: 'd_upload_panel' })
                                    .append(
                                        danah.c.div({ c: 'd_icon' }),
                                        danah.c.div({ c: 'd_progress', t: '사진 업로드' })
                                    )
                                    //danah.c.input({ i: 'd_post_uploader', n: 'image', ty: 'file' })
                                    //danah.c.input({ i: 'card_image_url', n: 'card[image_url', ty: 'hidden' })
                                ),
                                danah.c.div({ c: 'd_description enable_enter', i: 'd_post_title_editor' })
                                .attr({ contenteditable: 'true', 'data-ph': '제목을 입력해 주세요' }),
                                danah.c.select({ c: 'ui-changed-selector', i: 'd_post_space', n: 'd_post_space', s: 'color: rgb(189, 189, 189);' })
                                .append(
                                    danah.c.option({v: '', t: '공간 선택(필수)'}),
                                    danah.c.option({v: '0', t: '원룸'}),
                                    danah.c.option({v: '1', t: '거실'}),
                                    danah.c.option({v: '2', t: '침실'}),
                                    danah.c.option({v: '3', t: '주방'}),
                                    danah.c.option({v: '4', t: '욕실'}),
                                    danah.c.option({v: '5', t: '베란다'})
                                ),
                                danah.c.select({ c: 'ui-changed-selector', i: 'd_post_size', n: 'd_post_size', s: 'color: rgb(189, 189, 189);' })
                                .append(
                                    danah.c.option({v: '', t: '평수 선택(필수)'}),
                                    danah.c.option({v: '0', t: '10평미만'}),
                                    danah.c.option({v: '1', t: '10평대'}),
                                    danah.c.option({v: '2', t: '20평대'}),
                                    danah.c.option({v: '3', t: '30평대'}),
                                    danah.c.option({v: '4', t: '40평대 이상'})
                                ),
                                danah.c.div({ c: 'd_description enable_enter', i: 'd_post_description_editor'})
                                .attr({ 'contenteditable': 'true', 'data-ph': '이미지에 대한 설명을 입력해 주세요' })
                                .append(['']),
                                danah.c.div({ c: 'd_keywords' })
                                .append(
                                    danah.c.div({c: 'ui-keyword-field', i: 'd_keywords_view'})
                                    .append(
                                    	danah.c.div({i: 'd_add_keyword'})
                                    	.attr({ 'contenteditable': 'true', 'placeholder': '태그입력' })
                                    )
                                ),
                                danah.c.input({ c: 'button', ty: 'submit', n: 'commit', v: '사진 올리기', i: 'submit', s: 'bottom: 0; width: 100%; height: 70px; overflow: hidden; z-index: 500; background-color: rgba(22,22,22,0.8); box-sizing: border-box;color: #ffffff;' })
                                .attr({ 'data-disable-with': '사진 올리기' })
                                .click(n=>{
                                	if($.fn.danahNullChk(['1','2'])
                					){
                						alert('필수 입력값이 입력되지 않았습니다.');
                					}else{
                						$.ajax({
                	    					url : $ctx + '/posts/write',
                	    					method : 'POST',
                	    					contentType : 'application/json',
                	    					data : JSON.stringify({
                	    									userid : '',
                	    									teamid : ''
                	    					}),
                	    					success : x =>{
                	    						alert('성공');
                	    					},
                	    					error : (m1, m2, m3)=>{
                	    						alert('에러발생1'+m1);
                	    						alert('에러발생2'+m2);
                	    						alert('에러발생3'+m3);
                	    					}
                	    				});
                					}
                                })
                            )
                        )
                    )
            },
            midClick: true,
            overflowY: 'auto',
            removalDelay: '0',
            type: 'inline'
        });
    };
    let l = d => {
        //$.getJSON($ctx + '/boards/list/' + d, a => {
        ctt.html(danah.u.f());
        danah.c.div({ c: 'd_container', i: 'd_post_list', ht: danah.c.div({ c: 'd_row', s: 'margin-top:20px' }) })
            .appendTo(ctt);
        DanahL();
        danah.u.tb(ctt);
        //});
    };
    let d = d => {
        //$.getJSON($ctx + '/boards/detail/1', a => {
        const p = danah.c.div({ c: 'd_post_detail d_container' });
        ctt.html(p);
        p.append(
            danah.c.article({ c: 'd_row' })
            .append(
                danah.c.section({ c: 'd_col_12 d_col_lg_8' })
                .append(
                    $('<header/>')
                    .append(
                        danah.c.p({ c: 'd_category' })
                        .append(
                            danah.c.span({ c: 'd_category_item', ht: '30평대' }),
                            danah.c.span({ c: 'd_category_item', ht: '모던스타일' })
                        ),
                        $('<time/>').text('2018.10.13')
                    ),
                    danah.c.section({
                        c: 'd_post_section',
                    }).append(
                        $('<figure/>')
                        .append(
                            danah.c.div({ c: 'd_post_img d_post_img_pc' })
                            .append(
                                danah.c.img({ sr: $i + '/danah/post/1.jpeg', s: 'width: 100%; display: block;' }),
                                danah.c.div({ c: 'd_post_img_tags' })
                                // 자기 게시글일 경우
                                ,danah.c.div({c: 'd_post_img_btn_manage'})
                                .append(
                                	danah.c.a({t: '태그관리'})
                                	.click(n=>{
                                		alert('태그관리');
                                	}),
                                	danah.c.a({t: '수정하기'})
                                	.click(n=>{
                                		alert('수정하기');
                                		danah.s.e();
                                	})
                                )
                            ),
                            /* --------------- product list 추후 추가해야함!!! --------------- 
                            danah.c.aside({ c: 'd_used_product d_used_product_scrollable d_used_product_scrollable_left_end' })
                            .append(
                                danah.c.div({ c: 'd_used_product_list' }),
                                danah.c.button({ c: 'd_used_product_scrollable_btn', s: 'left: -30px;' })
                                .append(
                                    danah.c.span({ c: 'd_icon_page_post', s: 'background-position: 0px -160px; width: 44px; height: 44px;' }),
                                    danah.c.span({ c: 'd_icon_page_post', s: 'background-position: -160px -160px; width: 44px; height: 44px;' })
                                ),
                                danah.c.button({ c: 'd_used_product_scrollable_btn', s: 'right: -30px;' })
                                .append(
                                    danah.c.span({ c: 'd_icon_page_post', s: 'background-position: -80px -160px; width: 44px; height: 44px;' }),
                                    danah.c.span({ c: 'd_icon_page_post', s: 'background-position: -240px -160px; width: 44px; height: 44px;' })
                                )
                            ),
                            ----------------------------------------------------------- */
                            $('<figcaption/>')
                        ),
                        danah.u.h()),
                    danah.c.section({ c: 'd_footer' })
                    .append(
                        danah.c.hr({ c: 'd_section_divider' }),
                        danah.c.div({ c: 'd_footer_stats' })
                        .append(
                            danah.c.div({ c: 'd_footer_stats_item', ht: danah.c.span({ ht: ['조회', '98766'] }) }),
                            danah.c.div({ c: 'd_footer_stats_item', ht: danah.c.span({ ht: ['댓글', '16'] }) }),
                            danah.c.div({ c: 'd_footer_stats_item', ht: danah.c.span({ ht: ['공유', '184'] }) })
                        ),
                        danah.c.div({ c: 'd_footer_share' })
                        .append(
                            danah.u.sh()
                            .append(
                                danah.c.div({ c: 'd_share_post_url d_tooltip d_invisible' })
                                .append(
                                    danah.c.p({ t: '게시물주소' }),
                                    danah.c.button({}).text('복사')
                                )
                            )),
                        danah.c.hr({ c: 'd_section_divider' }),
                        danah.c.section({ c: 'd_footer_writer' })
                        .append(
                            danah.c.div({ c: 'd_writer_profile' })
                            .append(
                                danah.c.div({ c: 'd_writer_profile_img' })
                                .append(danah.c.a({ hr: '#', ht: danah.c.img({ sr: $i + '/danah/profile.jpeg' }) })),
                                danah.c.div({})
                                .append(
                                    danah.c.a({ hr: '#', ht: $('<strong/>').addClass('d_writer_profile_name').text('닉네임') })
                                )
                            )
                            /* --------------- 다른게시물 추후 추가해야함!!! --------------- ,
                            danah.c.section({ c: 'd_footer__other d_row' }) .append(danah.c.div({ c: 'col-5 col-md-3' }).append(danah.c.a({ c: 'd_footer__other__more', hr: '#' }).append(danah.c.span({ c: 'icon--page-mypage', s: 'margin-bottom: 10px; background-position: 0px -120px; width: 40px; height: 40px;', ht: ['더보기'] }))))
                            ------------------------------------------------- */
                        ),
                        danah.c.hr({ c: 'd_section_divider' })
                    ),
                    danah.c.section({ c: 'd_comment_feed' })
                    .append(
                        danah.c.h1({
                            c: 'd_comment_feed_header',
                            // 0일때 addClass zero
                            ht: ['댓글', '&nbsp;', danah.c.span({ c: 'd_comment_feed_header_count', t: '16' })]
                        }),
                        danah.c.div({ c: 'd_comment_feed_form' })
                        .append(
                            $.type($.cookie("userid")) !== 'undefined' ? '' : danah.c.a({ hr: '#', c: 'd_comment_feed_form_cover' })
                            .click(a => {
                                //로그인서비스이동
                            }),
                            danah.c.div({ c: 'd_comment_feed_form_user', ht: danah.c.img({ sr: $i + '/danah/profile.jpeg' }) }),
                            danah.c.div({ c: 'd_comment_feed_form_input' })
                            .append(
                                danah.c.div({
                                    c: 'd_comment_feed_form_content',
                                    ht: $('<textarea/>')
                                        .addClass('d_comment_content_input d_comment_feed_form_content_text')
                                        .attr({
                                            placeholder: '의견을 남겨 보세요.',
                                            readonly: '',
                                            style: 'height: 38px;'
                                        })
                                }),
                                danah.c.div({ c: 'd_comment_feed_form_actions' })
                                .append(
                                    danah.c.button({ c: 'd_comment_feed_form_submit'})
                                    // 로그인시 삭제 
                                    .attr('disabled','')
                                    .append(
                                    	danah.c.i({ c: 'fas fa-arrow-circle-right' })
                                    )
                                )
                            )
                        ),
                        danah.u.c(),
                        danah.u.p()
                    )
                ),
                danah.c.aside({ c: 'd_col_4 d_sidebar' })
                .append(
                    danah.c.div({ c: 'd_sticky_container d_sidebar_sticky' }).attr({ 'data-enabled': 'false', 'data-direction': 'top', 'data-offset': '0', style: 'position: sticky; top: 80px;' })
                    .append(
                        danah.c.div({ c: 'd_sticky_child', s: 'position: relative;' })
                        .append(
                            danah.c.div({ c: 'd_sidebar_container', s: 'height: 782px;' })
                            .append(
                                danah.c.div({ s: 'padding-top: 40px;' })
                                .append(
                                    danah.c.section({ c: 'd_sidebar_action' })
                                    .append(
                                        danah.c.div({})
                                        .append(
                                            danah.c.button({ c: 'd_sidebar_action_btn' })
                                            .append(
                                                danah.c.span({ c: 'd_icon_common_action', s: 'vertical-align: middle; margin-right: 8px; background-position: -240px -280px; width: 24px; height: 24px;' }),
                                                242
                                            )
                                        )
                                        // 자기 게시물일 경우
                                        ,danah.c.div({c: 'd_mine'})
                                        .append(
                                        	danah.c.button({c: 'd_sidebar_action_btn_mine'})
                                        	.append(
                                        		danah.c.span({c: 'd_icon_page_post', s: 'vertical-align: middle; background-position: -120px 0px; width: 24px; height: 24px;'})
                                        	),
                                        	danah.c.div({c: 'd_sidebar_action_menu d_dismiss'})
                                        	.append(
                                        		danah.c.button({}).text('삭제')
                                        		.click(n=>{
                                        			danah.s.r();
                                        		})
                                        	)
                                        )
                                        .click(n=>{
                                        	let o = $('.d_mine'); 
                                        	o.children(':last').hasClass('d_dismiss') ? o.children(':last').removeClass('d_dismiss') : o.children(':last').addClass('d_dismiss');
                                        })
                                    ),
                                    danah.c.section({ c: 'd_sidebar_writer d_writer_info' })
                                    .append(
                                        danah.c.div({ c: 'd_writer_profile' })
                                        .append(
                                            danah.c.div({ c: 'd_writer_profile_img' })
                                            .append(
                                                danah.c.a({ hr: '#', ht: danah.c.img({ sr: $i + '/danah/profile.jpeg' }) })
                                            ),
                                            danah.c.div({})
                                            .append(
                                                danah.c.a({ hr: '#', ht: $('<strong/>').addClass('d_writer_profile_name').text('닉네임') })
                                            )
                                        )
                                    )
                                    /* ------------- 섬네일 추후 구현 ------------- ,
                                    danah.c.section({ c: 'd_d_sidebar_others' }).append(danah.c.div({c: 'd_d_sidebar_others_list'}).append(danah.c.a({c: 'd_d_sidebar_others_btn', t: '더보기'})))
                                    ------------------------------------------ */
                                ),
                                danah.c.section({ c: 'd_sidebar_share' })
                                .append(
                                    danah.u.sh()
                                    .append(
                                        danah.c.div({ c: 'd_share_post_url d_tooltip d_invisible' })
                                        .append(
                                            danah.c.p({ t: '게시물주소' }),
                                            danah.c.button({ t: '복사' })
                                        )
                                    )
                                )
                            )
                        )
                    )
                ),
                danah.c.div({ c: 'd_floating_bar' })
                .append(
                    danah.c.div({ c: 'd_container', s: 'position: relative; height: 100%;' })
                    .append(
                        danah.c.button({ c: 'd_floating_bar_btn_menu' })
                        .append(
                            danah.c.span({ c: 'd_icon_common_action', s: 'vertical-align: middle; margin-right: 6px; background-position: 0px -280px; width: 24px; height: 24px;' }),
                            242
                        ),
                        danah.c.button({ c: 'd_floating_bar_btn_menu' })
                        .append(
                            danah.c.span({ c: 'd_icon_common_action', s: 'vertical-align: middle; margin-right: 6px; background-position: -160px -280px; width: 24px; height: 24px;' }),
                            16
                        ),
                        danah.c.button({ c: 'd_floating_bar_btn_menu' })
                        .append(
                            danah.c.span({ c: 'd_icon_common_action', s: 'vertical-align: middle; margin-right: 6px; background-position: -200px -280px; width: 24px; height: 24px;' }),
                            184
                        )
                        .click(n=>{
            				p.find('.d_share_tooltip_tooltip')
            				.attr({'style': p.find('.d_share_tooltip_tooltip').attr('style')==='right: 0px; bottom: 100%; transition: opacity 0.3s ease 0s, transform 0.3s ease 0s, visibility 0s ease 0.3s; opacity: 0; transform: translateY(-16px); visibility: hidden;' ? 
        						'right: 0px; bottom: 100%;' : 
        						'right: 0px; bottom: 100%; transition: opacity 0.3s ease 0s, transform 0.3s ease 0s, visibility 0s ease 0.3s; opacity: 0; transform: translateY(-16px); visibility: hidden;'});
                        }),
                        danah.c.div({ c: 'd_share_tooltip_my_home' })
                        .append(
                            danah.c.button({ c: 'd_share_tooltip_btn_toggle' })
                            // 토글처리 right: 0px; bottom: 100%;
                            .append(danah.c.span({ c: 'd_icon_common_action', s: 'background-position: -200px 0px; width: 28px; height: 28px;' })),
                            danah.c.div({ c: 'd_share_tooltip_tooltip', s:'right: 0px; bottom: 100%; transition: opacity 0.3s ease 0s, transform 0.3s ease 0s, visibility 0s ease 0.3s; opacity: 0; transform: translateY(-16px); visibility: hidden;'})
                            .append(
                                danah.c.a({ c: 'd_share_tooltip_btn_share', hr: 'https://www.facebook.com/sharer.php?u=' + '게시물주소', tg: '_blank', r: 'noopener noreferrer' })
                                .append(danah.c.span({ c: 'd_icon d_icon_sns_square_facebook' })),
                                danah.c.button({ c: 'd_share_tooltip_btn_share', hr: '' })
                                .append(danah.c.span({ c: 'd_icon d_icon_sns_square_kakao_story' })),
                                danah.c.a({ c: 'd_share_tooltip_btn_share', hr: 'http://share.naver.com/web/shareView.nhn?url=' + '게시물주소' + '&title=' + '제목', tg: '_blank', r: 'noopener noreferrer' })
                                .append(danah.c.span({ c: 'd_icon d_icon_sns_square_naver' }))
                            )
                        )
                    )
                )
            ),
            danah.c.hr({ c: 'd_section_divider' })
            
        );
        $.each([{ hr: '#', s: 'left: 11.4193%; top: 33.8053%;' }, { hr: '#', s: 'left: 2.01403%; top: 20.4236%;' }], function() {
            danah.c.a({ hr: this.hr })
                .append(
                    danah.c.span({ c: 'd_product_tag', s: this.s })
                    .append(
                        danah.c.a({ c: 'd_product_tag_icon' })
                        .append(
                            danah.c.i({ c: 'fas fa-plus' })
                        )
                    )
                )
                .appendTo(p.find('.d_post_img_tags'));
        });

        /* --------------- product list 추후 추가해야함!!! ---------------
        $.each((['/jun/1.JPG', '/jun/1.JPG']), function() {
            danah.c.a({ hr: '#', s: 'padding: 0px 5px;' })
                .append(
                    danah.c.div({
                        c: 'd_used_product_item',
                        ht: danah.c.img({ sr: $i + this })
                    })
                )
                .appendTo(p.find('.d_used_product_list'));
        });
        ----------------------------------------------------------- */

        $.each((['이 집의 컨셉은 심플한 북유럽스타일.', '그러므로 베이스컬러는 당연히 화이트.']), function() {
            danah.c.p({ t: this })
                .appendTo(p.find('figcaption'));
        });
        //});
    };
    let e = d => {
        $.magnificPopup.open({
            closeBtnInside: true,
            closeOnContentClick: false,
            alignTop: true,
            fixedBgPos: true,
            fixedContentPos: false,
            items: {
                src: danah.c.p({ t: '내용채우기!!' })
            },
            midClick: true,
            overflowY: 'auto',
            removalDelay: '0',
            type: 'inline'
        });
    };
    let r = d => {
    	if(confirm('삭제하시겠습니까?')){
			alert('삭제완료');
			console.log(this.bno);
			$.ajax({
				url : $ctx + '/posts/remove',
				method : 'POST',
				contentType : 'application/json',
				data : JSON.stringify({boardNo : '',
										userid : ''}),
				success : x => {
					alert('성공');
				},
				error : (m1, m2, m3)=>{
					alert('에러발생1'+m1);
					alert('에러발생2'+m2);
					alert('에러발생3'+m3);
				}
			});
		}else{
			alert('취소완료');
		}
    };
    return { m: m, w: w, l: l, d: d, e: e, r: r };
})();

danah.u = {
    f: d => {
        const p = danah.c.div({ c: 'd_filter_wrap' });
        p.append(
            danah.c.nav({ c: 'd_filter d_filter_depth_1', u: 'd_container' }),
            danah.c.nav({ c: 'd_filter d_filter_depth_2 d_filter_hidden', u: 'd_container' })
        );
        $.each([{ k: '정렬', v: '인기순' }, { k: '공간', v: '모든공간' }, { k: '평수', v: '모든평수' }, { k: '제품정보', v: '모두' }], (i, v) => {
            danah.c.li({ c: 'd_filter_item' })
                .append(
                    danah.c.button({ c: 'd_filter_item_btn' })
                    .append(
                        danah.c.span({ c: 'd_filter_item_btn_search_key', t: v.k })
                        .append(danah.c.span({ c: 'd_filter_item_btn_search_icon', s: 'margin-left:7px;transform-origin:center 7px;transition:transform .2s linear;transform:rotate(0deg);background-position-x:-40px;background-position-y:-0px;width:12px;height:12px' })),
                        danah.c.span({ c: 'd_filter_item_btn_search_val', t: v.v })
                    )
                )
                .appendTo(p.find('.d_container:first'))
                .click(n => {
                    a.preventDefault();
                    const l = $('.d_filter_item');
                    const b = $('.d_filter_item_btn_search_icon');
                    const na = p.children(':last');
                    if (l.eq(i).hasClass('d_filter_item_active')) {
                        b.attr('style', 'margin-left:7px;transform-origin:center 7px;transition:transform .2s linear;transform:rotate(0deg);background-position-x:-40px;background-position-y:-0px;width:12px;height:12px');
                        l.removeClass('d_filter_item_active')
                        na.addClass('d_filter_hidden');
                    } else {
                        b.attr('style', 'margin-left:7px;transform-origin:center 7px;transition:transform .2s linear;transform:rotate(0deg);background-position-x:-40px;background-position-y:-0px;width:12px;height:12px');
                        b.eq(i).attr('style', 'margin-left: 7px; transform-origin: center 7px 0px; transition: transform 0.2s linear 0s; transform: rotate(-180deg); background-position: -40px 0px; width: 12px; height: 12px;');
                        l.removeClass('d_filter_item_active')
                        l.eq(i).addClass('d_filter_item_active');
                        na.removeClass('d_filter_hidden');
                        p.find('.d_container:last').html('');
                        $.each((i == 0 ? ['최신순', '인기순', '베스트'] :
                            i == 1 ? ['모든공간', '원룸', '거실', '침실', '주방', '욕실', '베란다'] :
                            i == 2 ? ['모든평수', '10평미만', '10평대', '20평대', '30평대', '40평대 이상'] : ['모두', '정보있는사진만']), function() {
                            danah.c.li({ c: 'd_filter_item' })
                                .addClass(l.eq(i).find('.d_filter_item_btn_search_val').text() === this ? 'd_filter_item_active' : '')
                                .append(
                                    danah.c.a({ c: 'd_filter_item_btn', t: this })
                                )
                                .appendTo(p.find('.d_container:last'));
                        });
                    }
                });
        })
        return p;
    },
    tb: d => {
        const p = danah.c.div({ c: 'd_wiget_wrap' });
        danah.c.a({ c: 'd_top_btn', i: 'd_top_btn' })
            .append(danah.c.i({ c: 'fa fa-chevron-up' }))
            .appendTo(p.appendTo(d))
            .click(a => {
                a.preventDefault();
                $('html, body').animate({ scrollTop: 0 }, '1000');
            });
        $(window).scroll(() => {
            $(this).scrollTop() > 200 ? $('.d_top_btn').fadeIn('2000') : $('.d_top_btn').fadeOut('500');
        });
    },
    se: d => {
    	const p = danah.c.p({ c: 'd_post_search' });
        danah.s.l();
        $('figcaption').remove();
        danah.c.p({ c: 'd_post_search' })
        .html(["'", '이케아', "'에 대한 검색 결과"])
            .append(danah.c.span({ ht: ['20,077', '개'] }))
            .prependTo($('#d_post_list'));
    },
    h: d => {
        const p = danah.c.ul({ c: 'd_keyword' });
        $.each(['이케아', '깔끔한', '협탁'], function() {
            danah.c.li({ c: 'd_keyword_item' })
                .append(
                    danah.c.a({ hr: '#' })
                    .append(
                        danah.c.div({ c: 'd_keyword_item_badge', ht: ['#', this] })
                    )
                )
                .appendTo(p)
                .click(() => {
                    danah.u.se();
                });
        });
        return p;
    },
    c: d => {
        const p = danah.c.ul({ c: 'd_comment_feed_list' });
        const $i = $.img();
        $.each([{ i: '아이디', c: '깔끔하네요!', d: '2018-10-02' }], function() {
            danah.c.li({ c: 'd_comment_feed_list_item' })
                .append(
                    danah.c.article({ c: 'd_comment_feed_item' })
                    .append(
                        danah.c.p({ c: 'd_comment_feed_item_content' })
                        .append(
                            danah.c.a({ hr: '#', c: 'd_comment_feed_item_content_author' })
                            .append(
                                danah.c.img({ c: 'd_comment_feed_item_content_author_image', sr: $i + '/danah/profile.jpeg' }),
                                danah.c.span({ c: 'd_comment_feed_item_content_author_name', t: this.i })
                            ),
                            danah.c.span({ c: 'd_comment_feed_item_content_content', t: this.c })
                        ),
                        $('<footer/>')
                        .addClass('d_comment_feed_item_footer')
                        .append(
                            $('<time/>').addClass('d_comment_feed_item_footer_time').append(this.d),
                            // 유저 정보 있을경우 $.type($.cookie("userid")) === 'undefined' ? '' : 
                            danah.c.button({ c: 'd_comment_feed_item_footer_delete_btn' }).text('삭제')
                            // like 검토중
                        )
                    )
                ).appendTo(p)
        });
        return p;
    },
    p: d => {
        const p = danah.c.ul({ c: 'd_list_paginator' });
        let startPage = 1;
        let endPage = 5;
        let pageNum = 1;
        let existPre = false;
        let existNext = true;
        for (let i = startPage - 1; i <= endPage + 1; i++) {
            danah.c.li({})
                .append(
                    danah.c.button({
                        c: (startPage - 1 == i) ?
                            'd_list_paginator_prev' : (endPage + 1 == i) ?
                            'd_list_paginator_next' : 'd_list_paginator_page d_sm',
                    })
                    .attr({ style: ((startPage - 1 == i) || (endPage + 1 == i)) ? '' : '' })
                    .addClass(pageNum == i ? 'selected' : '')
                    .removeClass(pageNum != i ? 'selected' : '')
                    .append(
                        (startPage - 1 == i) && !existPre ?
                        danah.c.i({ c: 'fas fa-chevron-left' }) :
                        (endPage + 1 == i) && existNext ?
                        danah.c.i({ c: 'fas fa-chevron-right' }) :
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
    sh: d => {
        const p = danah.c.div({ c: 'd_share_post' });
        $.each([
            { l: '', s: 'background-position: -320px -40px; width: 48px; height: 48px;' },
            { s: 'background-position: -240px -40px; width: 48px; height: 48px;' },
            { l: 'href="http://share.naver.com/web/shareView.nhn?url=', s: 'background-position: -160px -40px; width: 48px; height: 48px;' },
            { l: 'https://www.facebook.com/sharer.php?u=', s: 'background-position: -80px -40px; width: 48px; height: 48px;' }
        ], (i, v) => {
            danah.c.div({})
                .append(
                    (i < 2) ?
                    danah.c.button({ c: 'd_share_post_btn' })
                    .append(danah.c.span({ c: 'd_icon_page_post', s: v.s })) :
                    danah.c.a({ c: 'd_share_post_btn', tg: '_blank', r: 'noopener noreferrer', hr: v.l + '게시물주소' + ((i == 2) ? '&title=게시물제목' : '') })
                    .append(danah.c.span({ c: 'd_icon_page_post', s: v.s }))
                )
                .prependTo(p)
                .click(function(){
                	if(i==0) p.children(':last').hasClass('d_invisible') ? p.children(':last').removeClass('d_invisible') : p.children(':last').addClass('d_invisible');
                });
        });
        return p;
    }
};

danah.c = {
    div: d => { return $('<div/>').addClass(d.c).attr({ id: d.i, style: d.s }).html(d.ht).text(d.t); },
    h1: d => { return $('<h1/>').addClass(d.c).html(d.ht) },
    hr: d => { return $('<hr/>').addClass(d.c); },
    a: d => { return $('<a/>').addClass(d.c).attr({ href: d.hr, id: d.i, style: d.s, target: d.tg, rel: d.r }).html(d.ht).text(d.t); },
    p: d => { return $('<p/>').addClass(d.c).attr({ id: d.i }).html(d.ht).text(d.t); },
    ul: d => { return $('<ul/>').addClass(d.c).attr({ id: d.i }).html(d.ht).text(d.t); },
    li: d => { return $('<li/>').addClass(d.c).attr({ id: d.i }).html(d.ht).text(d.t); },
    button: d => { return $('<button/>').addClass(d.c).attr({ id: d.i, title: d.t, style: d.s }).html(d.ht); },
    img: d => { return $('<img/>').addClass(d.c).attr({ id: d.i, src: d.sr, srcset: d.srs, alt: d.a, style: d.s }); },
    span: d => { return $('<span/>').addClass(d.c).attr({ id: d.i, style: d.s }).html(d.ht).text(d.t); },
    nav: d => { return $('<nav/>').addClass(d.c).attr({ id: d.i }).html(danah.c.ul({ c: d.u })); },
    article: d => { return $('<aticle/>').addClass(d.c).attr({ id: d.i }); },
    i: d => { return $('<i/>').addClass(d.c).attr({ id: d.i, style: d.s }); },
    aside: d => { return $('<aside/>').addClass(d.c); },
    section: d => { return $('<section/>').addClass(d.c).html(d.ht); },
    form: d => { return $('<form/>').addClass(d.c).attr({id: d.i, enctype: d.et})},
    input: d => { return $('<input/>').addClass(d.c).attr({ id: d.i, name: d.n, type: d.ty, value: d.v, placeholder: d.ph, style: d.s }); },
    select: d => { return $('<select/>').addClass(d.c).attr({ n: d.n, id: d.i, style: d.s }); },
    option: d => { return $('<option/>').addClass(d.c).attr({ n: d.n, style: d.s, value: d.v}).text(d.t); }
};

$.prototype.danahNullChk = d => {
    let flag = false;
    $.each(d, function() { if (this === '') flag = true; })
    return flag;
};

function DanahL(d) {
    const p = $('.d_row');
    const $i = $.img();
    for (let i = 0; i <= 20; i++) {
        danah.c.article({ c: 'd_col_12  d_col_md_4 d_col_lg_3 d_post', hc: 'd_post_writer' })
            .append(
                $('<header/>').addClass('d_post_writer')
                .append(
                    danah.c.a({ c: 'd_post_writer_profile', hr: '#', ht: danah.c.img({ sr: $i + '/danah/profile.jpeg', a: '의 프로필 사진' }) }),
                    danah.c.p({ c: 'd_post_writer_about', ht: danah.c.a({ hr: '#', ht: $('<strong/>').text('작성자') }) })
                ),
                $('<figure/>')
                .append(
                    danah.c.div({ c: 'd_post_img' })
                    .append(
                        // DB 이미지 정보가 있으면 horizon, 없으면 vertical
                        danah.c.img({ c: 'd_horizon', sr: $i + '/danah/post/1.jpeg' }),
                        // 정보가 있을때 생성 search page 생성하지 않음
                        danah.c.span({ c: 'd_post_img_icon d_post_img_info', s: 'background-position: 0px 0px; width: 14px; height: 14px;' }),
                        // DB 조회수
                        danah.c.span({ c: 'd_post_img_view', ht: ['조회수 ', 80] })
                    )
                    .click(n => {
                        n.preventDefault();
                        danah.s.d('게시글seq');
                    }),
                    danah.c.aside({ c: 'd_post_action' })
                    .append(
                        danah.c.button({ c: 'd_post_action_btn' })
                        .append(
                            danah.c.span({ c: 'd_post_action_icon', s: 'background-position: -240px -280px; width: 24px; height: 24px;' }),
                            10
                        ),
                        danah.c.a({ c: 'd_post_action_like' })
                        .append(
                            danah.c.span({ c: 'd_post_action_icon', s: 'background-position: -320px -280px; width: 24px; height: 24px;' }),
                            10
                        )
                    ),
                    // DB 제목
                    $('<figcaption/>').text('제목')
                )
            )
            .appendTo(p);
    }
};