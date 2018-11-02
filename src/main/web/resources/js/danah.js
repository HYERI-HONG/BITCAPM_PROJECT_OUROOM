"use strict";
var danah = danah || {};

danah = (() => {
    let init = () => { onCreate(); };
    let onCreate = () => { setContentView(); };
    let setContentView = () => {
        danah.u.sb();
        danah.u.wb();
        danah.lt.l();
        $.extend(new DanahS());
    };
    return { init: init };
})();
/* ************************************
-- 글쓰기, 수정
-- 
 *************************************/
danah.st = (() => {
    let $ctx = $.context(),
        $js = $.script(),
        $css = $.style(),
        $i = $.img(),
        $ctt = $('#content');
    let w = d => { ui({ f: 'w' }); };
    let e = d => {
        let j = d.j,
            e = d.e;
        ui({ f: 'e', j: j });
        $('#d_post_title').text(j.title);
        $('#d_post_space').val(j.roomType);
        $('#d_post_size').val(j.roomSize);
        $('#d_post_description').text(j.content);
        $.each(e, function() {
            danah.c.div({ c: 'd_keywords', n: 'd_keywords', t: this })
                .insertBefore($('#d_add_keyword'))
                .click(function(a) {
                    if ($(this).hasClass('active')) {
                        $('.ui-keyword-field').children().removeClass('active');
                    } else {
                        $('.ui-keyword-field').children().removeClass('active');
                        $(this).addClass('active');
                    }
                });
        });
    };
    let pv = d => {
        let j = new FileReader(),
            e = new FormData();
        e.append('file', d.j.files[0]);
        $.ajax({
            url: $ctx + '/posts/upload',
            type: 'POST',
            data: e,
            async: false,
            cache: false,
            contentType: false,
            processData: false,
            success: a => {
                if (a === 'SUCCESS') {
                    $('#d_upload_panel').addClass('change');
                    $('#d_progress').text('사진 바꾸기');
                    j.onload = n => d.e.attr('src', n.target.result);
                    j.readAsDataURL(d.j.files[0]);
                } else { console.log('Fail to Upload'); }
            },
            error: (e1, e2, e3) => { console.log(e3); },
        });
    };
    let ui = d => {
        $.magnificPopup.open({
            showCloseBtn: true,
            closeBtnInside: false,
            closeOnBgClick: false,
            closeOnContentClick: false,
            fixedBgPos: true,
            fixedContentPos: false,
            items: {
                src: danah.c.form({ c: 'd_form_fields', i: 'upload_post_form', et: 'multipart/form-data' })
                    .append(
                        danah.c.div({ i: 'd_upload_image' })
                        .append(
                            danah.c.img({ i: 'd_real_image' }).attr({ src: d.f !== 'e' ? '' : $i + '/danah/post/' + d.j.lastUpdate.replace(/-/gi, '/') + "/" + d.j.image }),
                            danah.c.div({ i: 'd_upload_panel' })
                            .append(
                                danah.c.div({ c: 'd_icon' }),
                                danah.c.div({ c: 'd_progress', i: 'd_progress', t: '사진 업로드' })
                            ),
                            danah.c.input({ i: 'd_post_uploader', n: 'image', ty: 'file' }).change(function() { if ($.fn.danahExtChk(this.files[0].name)) pv({ j: this, e: $('#d_real_image') }); })
                        ),
                        danah.c.div({ c: 'd_description enable_enter', i: 'd_post_title' }).attr({ contenteditable: 'true', 'data-ph': '제목을 입력해 주세요' }).text(d.f !== 'e' ? '' : d.j.title).keydown(a => { if (a.keyCode == 13) a.preventDefault(); }),
                        danah.c.select({ c: 'ui-changed-selector', i: 'd_post_space', n: 'd_post_space', s: 'color: rgb(189, 189, 189);' }).val(d.f !== 'e' ? '' : d.j.roomType)
                        .append(danah.c.option({ v: '', t: '공간 선택(필수)' }), danah.c.option({ v: '원룸', t: '원룸' }), danah.c.option({ v: '거실', t: '거실' }), danah.c.option({ v: '침실', t: '침실' }), danah.c.option({ v: '주방', t: '주방' }), danah.c.option({ v: '욕실', t: '욕실' }), danah.c.option({ v: '베란다', t: '베란다' })),
                        danah.c.select({ c: 'ui-changed-selector', i: 'd_post_size', n: 'd_post_size', s: 'color: rgb(189, 189, 189);' }).val(d.f !== 'e' ? '' : d.j.roomSize)
                        .append(danah.c.option({ v: '', t: '평수 선택(필수)' }), danah.c.option({ v: '10평 미만', t: '10평 미만' }), danah.c.option({ v: '10평대', t: '10평대' }), danah.c.option({ v: '20평대', t: '20평대' }), danah.c.option({ v: '30평대', t: '30평대' }), danah.c.option({ v: '40평대 이상', t: '40평대 이상' })),
                        danah.c.div({ c: 'd_description enable_enter', i: 'd_post_description' }).attr({ 'contenteditable': 'true', 'data-ph': '이미지에 대한 설명을 입력해 주세요' }).text(d.f !== 'e' ? '' : d.j.content),
                        danah.c.div({ c: 'd_keyword' })
                        .append(
                            danah.c.div({ c: 'ui-keyword-field', i: 'd_keywords_view' })
                            .append(
                                danah.c.div({ i: 'd_add_keyword' })
                                .attr({ 'contenteditable': 'true', 'placeholder': '태그입력' })
                                .keydown(function(a) {
                                    if (a.keyCode == 13) {
                                        a.preventDefault();
                                        if ($(this).text() === '') { 
                                        	$.toast($('<h4/>').text('태그를 입력해주세요.'), { type: 'danger', duration: 2000 }); 
                                        } else {
                                            danah.c.div({ c: 'd_keywords', n: 'd_keywords', t: $(this).text() }).insertBefore($(this))
                                                .click(function(a) {
                                                    if ($(this).hasClass('active')) { 
                                                    	$('.ui-keyword-field').children().removeClass('active'); 
                                                    } else {
                                                        $('.ui-keyword-field').children().removeClass('active');
                                                        $(this).addClass('active');
                                                    }
                                                });
                                            $(this).text('');
                                        }
                                    } else if (a.keyCode == 8) { $(this).text().length < 1 ? $(this).prev().remove() : ''; }
                                })
                            )
                        ),
                        danah.c.input({ c: 'd_submit_button', ty: 'submit', n: 'commit', v: d.f === 'w' ? '사진 올리기' : '수정하기', i: 'submit' })
                        .click(a => {
                            let j = '';
                            a.preventDefault();
                            $('.d_keywords').each(function() { j += $(this).text() + ","; });
                            if (!$('#d_upload_panel').hasClass('change') && d.f === 'w') { danah.c.div({ c: 'alert alert-danger' }).attr({ role: 'alert' }).text('사진을 업로드해주세요.').appendTo($('#d_progress')).click(function() { $(this).remove(); }); } else if (
                                $.fn.danahValChk([$('#d_post_title').text(), $('#d_post_space').val(), $('#d_post_size').val()])) {
                                $.ajax({
                                    url: $ctx + '/posts/' + (d.f === 'w' ? 'write' : (d.j.seq + '/edit')),
                                    method: 'POST',
                                    contentType: 'application/json',
                                    data: JSON.stringify({ title: $('#d_post_title').text(), roomType: $('#d_post_space').val(), roomSize: $('#d_post_size').val(), content: $('#d_post_description').text(), keyword: j, image: ((d.f === 'e' && $('#d_upload_panel').hasClass('change')) || d.f === 'w') ? '' : d.j.image, lastUpdate: ((d.f === 'e' && $('#d_upload_panel').hasClass('change')) || d.f === 'w') ? '' : d.j.lastUpdate, memSeq: $.cookie('userid') }),
                                    success: n => {
                                        if (n != null) {
                                            $('.mfp-close').trigger('click');
                                            danah.s.d(n);
                                        } else { console.log('Fail to Post'); }
                                    },
                                    error: (e1, e2, e3) => { console.log(e3); }
                                });
                            }
                        })
                    )
                    .keydown(a => { a.keyCode == 8 ? $('.d_keywords.active').remove() : ''; })
            },
            midClick: true,
            overflowY: 'auto',
            removalDelay: '0',
            type: 'inline'
        })
        $('.mfp-close').attr({ style: 'width: 30px; height: 30px; color: black; font-size: 25px; line-height: 30px;' }).appendTo($('#upload_post_form')).click(n => { $('#d_top_btn').show(); });
    }
    return { w: w, e: e };
})();

/* ************************************
-- 상세페이지
-- 
 *************************************/
danah.s = (() => {
    let $ctx = $.context(),
    $js = $.script(),
    $css = $.style(),
    $i = $.img(),
    $ctt = $('#content');
    let d = d => {
        $.getJSON($ctx + '/posts/' + d, a => {
            let p = danah.c.div({ c: 'd_post_detail d_container', i: 'd_post_detail' }),
                j = a.post,
                e = a.imageTag,
                o = a.hashTag,
                g = a.comment,
                u = a.page,
                k = a.list;
            $ctt.html(p);
            $('html, body').scrollTop(0);
            p.append(danah.c.article({ c: 'd_row' })
                .append(danah.c.section({ c: 'd_col_12 d_col_lg_8' })
                    .append($('<header/>')
                        .append(danah.c.p({ c: 'd_category' })
                            .append(danah.c.span({ c: 'd_category_item', ht: j.roomSize }), danah.c.span({ c: 'd_category_item', ht: j.roomType })), $('<time/>').text(j.regiDate.replace(/-/gi, '.'))),
                        danah.c.section({ c: 'd_post_section' })
                        .append($('<figure/>')
                            .append(danah.c.div({ c: 'd_post_img d_post_img_pc' })
                                .append(
                                    danah.c.img({ sr: $i + '/danah/post/' + j.lastUpdate.replace(/-/gi, '/') + "/" + j.image }),
                                    it(e),
                                    ($.cookie('userid') == j.memSeq || $.cookie('userid') == 1) ?
                                    danah.c.div({ c: 'd_post_img_btn_manage' })
                                    .append(
                                        danah.c.a({ t: '태그관리' }).click(n => { danah.t.t({ j: j, e: e }); }),
                                        danah.c.a({ t: '수정하기' }).click(n => { danah.st.e({ j: j, e: o }); })
                                    ) : ""
                                ),
                                e.length == 0 ? "" :
                                danah.c.aside({ c: 'd_used_product' })
                                .append(
                                    danah.c.div({ c: 'd_used_product_list', i: 'd_used_product_list' }),
                                    danah.c.button({ c: 'd_used_product_scrollable_btn', s: 'left: -30px;' })
                                    .append(
                                        danah.c.span({ c: 'd_icon_page_post', s: 'background-position: 0px -160px; width: 44px; height: 44px;' }),
                                        danah.c.span({ c: 'd_icon_page_post', s: 'background-position: -160px -160px; width: 44px; height: 44px;' })
                                    ),
                                    danah.c.button({ c: 'd_used_product_scrollable_btn', s: 'right: -30px;' })
                                    .append(
                                        danah.c.span({ c: 'd_icon_page_post', s: 'background-position: -80px -160px; width: 44px; height: 44px;' }),
                                        danah.c.span({ c: 'd_icon_page_post', s: 'background-position: -240px -160px; width: 44px; height: 44px;' }))
                                ),
                                $('<figcaption/>').append(danah.c.p({ t: j.content }))
                            ),
                            h(o)
                        ),
                        danah.c.section({ c: 'd_footer' })
                        .append(
                            danah.c.hr({ c: 'd_section_divider' }),
                            danah.c.div({ c: 'd_footer_stats' })
                            .append(
                                danah.c.div({ c: 'd_footer_stats_item' }).append(danah.c.span({ i: 'd_footer_viewCnt' }).append('조회', j.viewCnt)),
                                danah.c.div({ c: 'd_footer_stats_item' }).append(danah.c.span({ i: 'd_footer_commentCnt' }).append('댓글', j.commentCnt)),
                                danah.c.div({ c: 'd_footer_stats_item' }).append(danah.c.span({ i: 'd_footer_shareCnt' }).append('공유', j.shareCnt))
                            ),
                            danah.c.div({ c: 'd_footer_share' }).append(danah.u.s(j.seq)),
                            danah.c.hr({ c: 'd_section_divider' }),
                            danah.c.section({ c: 'd_footer_writer' })
                            .append(
                                danah.c.div({ c: 'd_writer_profile' })
                                .append(
                                    danah.c.div({ c: 'd_writer_profile_img' }).append(danah.c.a({}).append(danah.c.img({ sr: $i + ((j.profile === '' || j.profile === undefined) ? '/danah/user_profile.jpeg' : '/hyeri/profile/' + j.profile) }))),
                                    danah.c.div({}).append(danah.c.a({}).append($('<strong/>').addClass('d_writer_profile_name').text(j.nickname)))
                                )
                            ),
                            danah.c.hr({ c: 'd_section_divider' })
                        ),
                        danah.c.section({ c: 'd_comment_feed' }).attr({ id: 'd_comment_feed' })
                        .append(
                            danah.c.h1({ c: 'd_comment_feed_header' }).append('댓글', '&nbsp;', danah.c.span({ c: 'd_comment_feed_header_count', i: 'd_comment_feed_header_count', t: j.commentCnt }).addClass(j.commentCnt == 0 ? 'zero' : '')),
                            danah.c.div({ c: 'd_comment_feed_form' })
                            .append(
                                $.cookie('userid') != undefined ? 
                                	'' :
                                	danah.c.a({ c: 'd_comment_feed_form_cover' })
                                	.click(n => { 
                                		$.toast($('<h4/>').text('로그인이 필요한 서비스 입니다.'), { duration: 2000 }); 
                                		$('#login_btn').trigger('click'); 
                                	}),
                                danah.c.div({ c: 'd_comment_feed_form_user' })
                                .append(danah.c.img({ sr: $i + (($.cookie('userid') != undefined) ? ('/hyeri/profile/' + $.cookie('profile')) : '/danah/comment_profile.jpeg') })),
                                danah.c.div({ c: 'd_comment_feed_form_input' })
                                .append(
                                    danah.c.div({ c: 'd_comment_feed_form_content' })
                                    .append($('<input/>').addClass('d_comment_content_input d_comment_feed_form_content_text').attr({ id: 'd_comment', placeholder: '의견을 남겨 보세요.', style: 'height: 38px;' }).keydown(function(n) { if (n.keyCode == 13) $('.d_comment_feed_form_submit').trigger('click'); })),
                                    danah.c.div({ c: 'd_comment_feed_form_actions' })
                                    .append(
                                        danah.c.button({ c: 'd_comment_feed_form_submit' })
                                        .append(danah.c.i({ c: 'fas fa-arrow-circle-right' }))
                                        .click(n => {
                                            if ($.fn.danahValChk([$('#d_comment').val()])) {
                                                $.ajax({
                                                    url: $ctx + '/comments/write',
                                                    method: 'POST',
                                                    contentType: 'application/json',
                                                    data: JSON.stringify({
                                                        comment: $('#d_comment').val(),
                                                        seq: j.seq,
                                                        memSeq: $.cookie('userid'),
                                                    }),
                                                    success: h => {
                                                        if (h != null) {
                                                            $('#d_comment').val('');
                                                            $('#d_comment_feed_list').remove();
                                                            $('#d_list_paginator').remove();
                                                            $('#d_comment_feed').append(c(h.comment), cp({ j: h.seq, e: h.page }));
                                                            $('#d_comment_feed_header_count').text(h.page.totalRecode);
                                                            $('#d_btn_commentCnt').html('').append(danah.c.span({ c: 'd_icon_common_action', s: 'vertical-align: middle; margin-right: 6px; background-position: -160px -280px; width: 24px; height: 24px;' }), h.page.totalRecode);
                                                            $('#d_footer_commentCnt').html('').append('댓글', h.page.totalRecode);
                                                        } else { console.log('Fail to Get'); }
                                                    },
                                                    error: (e1, e2, e3) => { console.log(e3); }
                                                });
                                            }
                                        })
                                    )
                                )
                            ),
                            c(g),
                            cp({ j: j.seq, e: u })
                        )
                    ),
                    danah.c.aside({ c: 'd_col_4 d_sidebar' })
                    .append(
                        danah.c.div({ c: 'd_sticky_container d_sidebar_sticky' }).attr({ 'data-enabled': 'false', 'data-direction': 'top', 'data-offset': '0', style: 'position: sticky; top: 80px;' })
                        .append(
                            danah.c.div({ c: 'd_sticky_child', s: 'position: relative;' })
                            .append(
                                danah.c.div({ c: 'd_sidebar_container', s: 'height: 650px;' })
                                .append(
                                    danah.c.div({ s: 'padding-top: 40px;' })
                                    .append(
                                        danah.c.section({ c: 'd_sidebar_action' })
                                        .append(
                                            danah.c.div({})
                                            .append(
                                                danah.c.button({ c: 'd_sidebar_action_btn', i: 'd_sidebar_like_btn' })
                                                .append(danah.c.span({ c: 'd_icon_common_action', s: 'vertical-align: middle; margin-right: 8px; background-position: -240px -280px; width: 24px; height: 24px;' }), j.likeCnt)
                                                .click(function() {
                                                    if($.cookie('userid') == undefined){ 
                                                    	$.toast($('<h4/>').text('로그인이 필요한 서비스 입니다.'),
                                                    			{ duration: 2000 }); $('#login_btn').trigger('click');
                                                    } else{
                                                    	$.getJSON($ctx + '/likes/' + $.cookie('userid') + '/' + j.seq, h => {
                                                            $(this)
                                                                .html('')
                                                                .append(
                                                                	danah.c.span({ c: 'd_icon_common_action', s: h.check == 0 ? 'vertical-align: middle; margin-right: 8px; background-position: -240px -280px; width: 24px; height: 24px;' : 'vertical-align: middle; margin-right: 8px; background-position: -40px -280px; width: 24px; height: 24px;' }),
                                                                	h.likeCnt
                                                                );
                                                            $('#d_floating_bar_like_btn')
                                                                .html('')
                                                                .append(
                                                                	danah.c.span({ c: 'd_icon_common_action', s: h.check == 0 ? 'vertical-align: middle; margin-right: 6px; background-position: 0px -280px; width: 24px; height: 24px;' : 'vertical-align: middle; margin-right: 8px; background-position: -40px -280px; width: 24px; height: 24px;' }),
                                                                	h.likeCnt
                                                                );
                                                        });
                                                    }
                                                })
                                            ),
                                            ($.cookie('userid') == j.memSeq || $.cookie('userid') == 1) ? 
                                            	danah.c.div({ c: 'd_mine' })
	                                            .append(
	                                                danah.c.button({ c: 'd_sidebar_action_btn_mine' }).append(danah.c.span({ c: 'd_icon_page_post', s: 'vertical-align: middle; background-position: -120px 0px; width: 24px; height: 24px;' })),
	                                                danah.c.div({ c: 'd_sidebar_action_menu d_dismiss' }).append(danah.c.button({}).text('삭제').click(n => { r({ j: j.seq, e: j.lastUpdate, o: j.image }); }))
	                                            )
	                                            .click(n => {
	                                                let h = $('.d_mine');
	                                                h.children(':last').hasClass('d_dismiss') ? h.children(':last').removeClass('d_dismiss') : h.children(':last').addClass('d_dismiss');
	                                            }) :
	                                            ""
                                        ),
                                        danah.c.section({ c: 'd_sidebar_writer d_writer_info' })
                                        .append(
                                            danah.c.div({ c: 'd_writer_profile' })
                                            .append(
                                                danah.c.div({ c: 'd_writer_profile_img' }).append(danah.c.a({}).append(danah.c.img({ sr: $i + ((j.profile === '' || j.profile === undefined) ? '/danah/user_profile.jpeg' : '/hyeri/profile/' + j.profile) }))),
                                                danah.c.div({}).append(danah.c.a({}).append($('<strong/>').addClass('d_writer_profile_name').text(j.nickname)))
                                            )
                                        ),
                                        danah.c.section({ c: 'd_sidebar_others' }).append(t(k))
                                    ),
                                    danah.c.section({ c: 'd_sidebar_share' }).append(danah.c.div({ c: 'd_share_post' }).append(danah.u.s(j.seq)))
                                )
                            )
                        )
                    ),
                    danah.c.div({ c: 'd_floating_bar' })
                    .append(
                        danah.c.div({ c: 'd_container', s: 'position: relative; height: 100%;' })
                        .append(
                            danah.c.button({ c: 'd_floating_bar_btn_menu', i: 'd_floating_bar_like_btn' })
                            .append(danah.c.span({ c: 'd_icon_common_action', s: 'vertical-align: middle; margin-right: 6px; background-position: 0px -280px; width: 24px; height: 24px;' }), j.likeCnt)
                            .click(n => { $('#d_sidebar_like_btn').trigger('click'); }),
                            danah.c.button({ c: 'd_floating_bar_btn_menu', i: 'd_btn_commentCnt' })
                            .append(danah.c.span({ c: 'd_icon_common_action', s: 'vertical-align: middle; margin-right: 6px; background-position: -160px -280px; width: 24px; height: 24px;' }), j.commentCnt)
                            .click(n => { $('html, body').animate({ scrollTop: $('#d_comment_feed').offset().top }, 500); }),
                            danah.c.button({ c: 'd_floating_bar_btn_menu', i: 'd_btn_shareCnt' })
                            .append(danah.c.span({ c: 'd_icon_common_action', s: 'vertical-align: middle; margin-right: 6px; background-position: -200px -280px; width: 24px; height: 24px;' }), j.shareCnt)
                            .click(n => { p.find('.d_share_tooltip_tooltip').attr({ 'style': p.find('.d_share_tooltip_tooltip').attr('style') === 'right: 0px; bottom: 100%; transition: opacity 0.3s ease 0s, transform 0.3s ease 0s, visibility 0s ease 0.3s; opacity: 0; transform: translateY(-16px); visibility: hidden;' ? 'right: 0px; bottom: 100%;' : 'right: 0px; bottom: 100%; transition: opacity 0.3s ease 0s, transform 0.3s ease 0s, visibility 0s ease 0.3s; opacity: 0; transform: translateY(-16px); visibility: hidden;' }); }),
                            danah.c.div({ c: 'd_share_tooltip_my_home' })
                            .append(
                                danah.c.button({ c: 'd_share_tooltip_btn_toggle' })
                                .append(danah.c.span({ c: 'd_icon_common_action', s: 'background-position: -200px 0px; width: 28px; height: 28px;' })),
                                danah.c.div({ c: 'd_share_tooltip_tooltip', s: 'right: 0px; bottom: 100%; transition: opacity 0.3s ease 0s, transform 0.3s ease 0s, visibility 0s ease 0.3s; opacity: 0; transform: translateY(-16px); visibility: hidden;' })
                                .append(
                                    danah.c.a({ c: 'd_share_tooltip_btn_share', tg: '_blank', r: 'noopener noreferrer' })
                                    .append(danah.c.span({ c: 'd_icon d_icon_sns_square_facebook' }))
                                    .click(n => {
                                        p.find('.d_share_tooltip_tooltip').attr({ 'style': p.find('.d_share_tooltip_tooltip').attr('style') === 'right: 0px; bottom: 100%; transition: opacity 0.3s ease 0s, transform 0.3s ease 0s, visibility 0s ease 0.3s; opacity: 0; transform: translateY(-16px); visibility: hidden;' ? 'right: 0px; bottom: 100%;' : 'right: 0px; bottom: 100%; transition: opacity 0.3s ease 0s, transform 0.3s ease 0s, visibility 0s ease 0.3s; opacity: 0; transform: translateY(-16px); visibility: hidden;' });
                                        window.open($.f());
                                    }),
                                    danah.c.button({ c: 'd_share_tooltip_btn_share' })
                                    .append(danah.c.span({ c: 'd_icon d_icon_sns_square_kakao_story' }))
                                    .click(n => {
                                        p.find('.d_share_tooltip_tooltip').attr({ 'style': p.find('.d_share_tooltip_tooltip').attr('style') === 'right: 0px; bottom: 100%; transition: opacity 0.3s ease 0s, transform 0.3s ease 0s, visibility 0s ease 0.3s; opacity: 0; transform: translateY(-16px); visibility: hidden;' ? 'right: 0px; bottom: 100%;' : 'right: 0px; bottom: 100%; transition: opacity 0.3s ease 0s, transform 0.3s ease 0s, visibility 0s ease 0.3s; opacity: 0; transform: translateY(-16px); visibility: hidden;' });
                                        $.k();
                                    }),
                                    danah.c.a({ c: 'd_share_tooltip_btn_share', tg: '_blank', r: 'noopener noreferrer' })
                                    .append(danah.c.span({ c: 'd_icon d_icon_sns_square_naver' }))
                                    .click(n => {
                                        p.find('.d_share_tooltip_tooltip').attr({ 'style': p.find('.d_share_tooltip_tooltip').attr('style') === 'right: 0px; bottom: 100%; transition: opacity 0.3s ease 0s, transform 0.3s ease 0s, visibility 0s ease 0.3s; opacity: 0; transform: translateY(-16px); visibility: hidden;' ? 'right: 0px; bottom: 100%;' : 'right: 0px; bottom: 100%; transition: opacity 0.3s ease 0s, transform 0.3s ease 0s, visibility 0s ease 0.3s; opacity: 0; transform: translateY(-16px); visibility: hidden;' });
                                        window.open($.n());
                                    })
                                )
                            )
                        )
                    )
                ),
                danah.c.hr({ c: 'd_section_divider' }).attr({ style: 'border: none;' })
            );
            ip(e);
            lc(j.seq);
        });
    };
    let it = d => {
        let p = danah.c.div({ c: 'd_post_img_tags' });
        $.each(d, function() {
            danah.c.a({})
                .append(
                    danah.c.span({ c: 'd_product_tag', s: 'left:' + this.position.split(',')[0] + 'px; top: ' + this.position.split(',')[1] + 'px;' })
                    .append(
                        danah.c.a({ c: 'd_product_tag_icon' })
                        .append(danah.c.i({ c: 'fas fa-plus' }))
                        .attr({ 'data-placement': 'bottom', title: this.itemTitle })
                        .tooltip({
                            show: null,
                            open: function(event, ui) {ui.tooltip.animate({ top: ui.tooltip.position().top + 10 }, "fast");}
                        })
                        .click(a => { $.getScript($js + '/jieun.js', () => { jieun.detail({ seq: this.itemSeq, category: this.category, photo: this.image }); }); })
                    )
                )
                .appendTo(p);
        });
        return p;
    };
    let ip = d => {
        $.each(d, function() {
            danah.c.a({ s: 'padding: 0px 5px;' })
                .append(danah.c.div({ c: 'd_used_product_item' }).append(danah.c.img({ sr: $i + '/jun/' + this.category + '/' + this.image + '.jpg' })).click(() => { $.getScript($js + '/jieun.js', () => { jieun.detail({ seq: this.itemSeq, category: this.category, photo: this.image }); }); }))
                .appendTo($('#d_used_product_list'));
        });
    };
    let h = d => {
        let p = danah.c.ul({ c: 'd_keyword' });
        $.each(d, function() {
            danah.c.li({ c: 'd_keyword_item' })
                .append(danah.c.a({}).append(danah.c.div({ c: 'd_keyword_item_badge', ht: ['#', this] })))
                .appendTo(p)
                .click(n => { danah.lt.s(this); });
        });
        return p;
    };
    let c = d => {
        let p = danah.c.ul({ c: 'd_comment_feed_list', i: 'd_comment_feed_list' });
        $.each(d, function() {
            danah.c.li({ c: 'd_comment_feed_list_item' })
                .append(
                    danah.c.article({ c: 'd_comment_feed_item' })
                    .append(
                        danah.c.p({ c: 'd_comment_feed_item_content' })
                        .append(
                            danah.c.a({ c: 'd_comment_feed_item_content_author' })
                            .append(
                                danah.c.img({ c: 'd_comment_feed_item_content_author_image', sr: $i + ((this.profile === '' || this.profile === undefined) ? '/danah/comment_profile.jpeg' : '/hyeri/profile/' + this.profile) }),
                                danah.c.span({ c: 'd_comment_feed_item_content_author_name', t: this.nickname })
                            ),
                            danah.c.span({ c: 'd_comment_feed_item_content_content', t: this.comment })
                        ),
                        $('<footer/>')
                        .addClass('d_comment_feed_item_footer')
                        .append(
                            $('<time/>').addClass('d_comment_feed_item_footer_time').append(this.regiDate.replace(/-/gi, '.')),
                            ($.cookie('userid') == this.memSeq || $.cookie('userid') == 1) ?
                            danah.c.button({ c: 'd_comment_feed_item_footer_delete_btn' }).text('삭제')
                            .click(a => {
                                if (confirm('삭제하시겠습니까?')) {
                                    $.getJSON($ctx + '/comments/delete/' + this.postSeq + '/' + this.seq, n => {
                                    	$.toast($('<h4/>').text('삭제하였습니다.'), { type: 'success',duration: 2000 });
                                        $('#d_comment_feed_list').remove();
                                        $('#d_list_paginator').remove();
                                        $('#d_comment_feed').append(c(n.comment), cp({ j: n.seq, e: n.page }));
                                        $('#d_comment_feed_header_count').text(n.page.totalRecode);
                                        $('#d_btn_commentCnt').html('').append(danah.c.span({ c: 'd_icon_common_action', s: 'vertical-align: middle; margin-right: 6px; background-position: -160px -280px; width: 24px; height: 24px;' }), n.page.totalRecode);
                                        $('#d_footer_commentCnt').html('').append('댓글', n.page.totalRecode);
                                    });
                                }
                            }) : ''
                        )
                    )
                ).appendTo(p)
        });
        return p;
    };
    let cp = d => {
        let p = danah.c.ul({ c: 'd_list_paginator', i: 'd_list_paginator' }),
            j = d.j,
            e = d.e;
        for (let i = e.startPage - 1; i <= e.endPage + 1; i++) {
            danah.c.li({})
                .attr({
                    value: e.startPage - 1 == i ? (i + 1) : i,
                    style: (e.startPage - 1 == i) ? 'margin-left: -40px;border: 1px solid #DCDCDC;border-radius: 5px;display: inline-block;width: 26px;height: 26px;position: absolute;text-align: center;' : (e.endPage + 1 == i) ? 'margin-left: 20px;border: 1px solid #DCDCDC;border-radius: 5px;display: inline-block;width: 26px;height: 26px;position: absolute;text-align: center;' : ''
                })
                .append(
                    danah.c.button({ c: (e.startPage - 1 == i) ? 'd_list_paginator_prev' : (e.endPage + 1 == i) ? 'd_list_paginator_next' : 'd_list_paginator_page d_sm' })
                    .addClass(e.pageNo == i ? 'selected' : '')
                    .append((e.startPage - 1 == i) ? danah.c.i({ c: 'fas fa-chevron-left' }) : (e.endPage + 1 == i) ? danah.c.i({ c: 'fas fa-chevron-right', i: 'd_nextBtn' }) : i)
                )
                .appendTo(((e.existPrev === false && (e.startPage - 1 == i)) || ((e.existNext === false) && (e.endPage + 1 == i))) ? '' : p)
                .click(function() {
                    let o = $(this).children().hasClass('d_list_paginator_next') ? (+e.pageNo + 1) : $(this).children().hasClass('d_list_paginator_prev') ? (+e.pageNo - 1) : $(this).text();
                    $.getJSON($ctx + '/comments/list/' + j + '/' + o, n => {
                        $('#d_comment_feed_list').remove();
                        $('#d_list_paginator').remove();
                        $('#d_comment_feed').append(c(n.comment), cp({ j: n.seq, e: n.page }));
                    });
                });
        }
        return p;
    };
    let r = d => {
        if (confirm('삭제하시겠습니까?')) {
            $.toast($('<h4/>').text('게시물을 삭제하였습니다.'), { type: 'success', duration: 2000 });
            $.ajax({
                url: $ctx + '/posts/' + d.j + '/delete',
                method: 'POST',
                contentType: 'application/json',
                data: JSON.stringify({ lastUpdate: d.e, image: d.o }),
                success: a => {
                    a != null ? danah.lt.l() : console.log('Fail to Remove');
                },
                error: (e1, e2, e3) => { console.log(e3); }
            });
        }
    };
    let lc = d => {
        $.cookie('userid') == undefined ? "" : $.getJSON($ctx + '/likes/' + $.cookie('userid'), a => {
            $.each(a, function() {
                if (d === this.seq && this.check == 1) {
                    $('#d_floating_bar_like_btn').children(':first').attr({ style: 'vertical-align: middle; margin-right: 8px; background-position: -40px -280px; width: 24px; height: 24px;' });
                    $('#d_sidebar_like_btn').children(':first').attr({ style: 'vertical-align: middle; margin-right: 8px; background-position: -40px -280px; width: 24px; height: 24px;' });
                }
            });
        });
    };
    let t = d => {
        let p = danah.c.div({ c: 'd_sidebar_others_list' })
        $.each(d, function() {
            danah.c.div({ c: 'd_sidebar_others_thumbnail' })
                .append(
                    danah.c.div({ c: 'd_sidebar_others_thumbnail_img' })
                    .append(
                        danah.c.a({}).append(danah.c.img({ sr: $i + '/danah/post/' + this.lastUpdate.replace(/-/gi, '/') + "/" + this.image }))
                    )
                )
                .appendTo(p)
                .click(n => { danah.s.d(this.seq); });
        });
        return p;
    };
    return { d: d };
})();
/* ************************************
-- 목록, 검색
-- 
 *************************************/
danah.lt = (() => {
    let $ctx = $.context(),
        $js = $.script(),
        $css = $.style(),
        $i = $.img(),
        $ctt = $('#content');
    let l = d => {
        let p = $ctt.html(f),
            j = 1;
        $.getJSON($ctx + '/posts/list/' + j, a => {
            danah.c.div({ c: 'd_container', i: 'd_post_list' }).append(danah.c.div({ c: 'd_row', i: 'd_row', s: 'margin-top:20px' })).appendTo(p);
            $.cookie('userid') == undefined ? ui({ j: a }) : ll(a);
            $(window).off().scroll(function(e) {
                if (a.page > j && $('#d_post_list').length > 0 && $(this).scrollTop() >= $(document).height() - $(this).height()) {
                    $('#d_row').append($.getJSON($ctx + '/posts/list/' + ++j, n => { $.cookie('userid') == undefined ? ui({ j: n }) : ll(n); }));
                }
            });
            danah.u.tb();
        });
    };
    let s = d => {
        let p = danah.c.p({ c: 'd_post_search' }),
            j = 1;
        $.getJSON($ctx + '/posts/hashTagSearch/' + d + '/' + j, a => {
            $ctt.html(danah.c.div({ c: 'd_container', i: 'd_post_search' }).append(p.html(["'", d, "'에 대한 검색 결과   "]).append(danah.c.span({}).append(a.list.length, ' 개')), danah.c.div({ c: 'd_row', i: 'd_row', s: 'margin-top:20px' })));
            $.cookie('userid') == undefined ? ui({ j: a }) : ll(a);
            $('figcaption').remove();
            $(window).off().scroll(function() {
                if (a.page > j && $('#d_post_search').length > 0 && $(this).scrollTop() >= $(document).height() - $(this).height()) {
                    $('#d_row').append($.getJSON($ctx + '/posts/hashTagSearch/' + d + '/' + ++j, n => {
                        $.cookie('userid') == undefined ? ui({ j: n }) : ll(n);
                        $('figcaption').remove();
                    }));
                }
            });
            danah.u.tb();
        });
    };
    let f = d => {
        let p = danah.c.div({ c: 'd_filter_wrap' });
        p.append(danah.c.nav({ c: 'd_filter d_filter_depth_1', u: 'd_container' }), danah.c.nav({ c: 'd_filter d_filter_depth_2 d_filter_hidden', u: 'd_container' }));
        $.each([{ k: '정렬', v: '최신순' }, { k: '공간', v: '모든공간' }, { k: '평수', v: '모든평수' }, { k: '제품정보', v: '모두' }], (i, v) => {
            danah.c.li({ c: 'd_filter_item' })
                .append(
                    danah.c.button({ c: 'd_filter_item_btn' })
                    .append(
                        danah.c.span({ c: 'd_filter_item_btn_search_key', t: v.k }).append(danah.c.span({ c: 'd_filter_item_btn_search_icon', s: 'margin-left:7px;transform-origin:center 7px;transition:transform .2s linear;transform:rotate(0deg);background-position-x:-40px;background-position-y:-0px;width:12px;height:12px' })),
                        danah.c.span({ c: 'd_filter_item_btn_search_val', t: v.v })
                    )
                )
                .appendTo(p.find('.d_container:first'))
                .click(d => {
                    d.preventDefault();
                    let j = $('.d_filter_item'),
                        e = $('.d_filter_item_btn_search_icon'),
                        o = p.children(':last');
                    if (j.eq(i).hasClass('d_filter_item_active')) {
                        j.removeClass('d_filter_item_active')
                        e.attr('style', 'margin-left:7px;transform-origin:center 7px;transition:transform .2s linear;transform:rotate(0deg);background-position-x:-40px;background-position-y:-0px;width:12px;height:12px');
                        o.addClass('d_filter_hidden');
                    } else {
                        j.removeClass('d_filter_item_active')
                        j.eq(i).addClass('d_filter_item_active');
                        e.attr('style', 'margin-left:7px;transform-origin:center 7px;transition:transform .2s linear;transform:rotate(0deg);background-position-x:-40px;background-position-y:-0px;width:12px;height:12px');
                        e.eq(i).attr('style', 'margin-left: 7px; transform-origin: center 7px 0px; transition: transform 0.2s linear 0s; transform: rotate(-180deg); background-position: -40px 0px; width: 12px; height: 12px;');
                        o.removeClass('d_filter_hidden');
                        p.find('.d_container:last').html('');
                        $.each((i == 0 ? ['최신순', '인기순', '베스트'] : i == 1 ? ['모든공간', '원룸', '거실', '침실', '주방', '욕실', '베란다'] : i == 2 ? ['모든평수', '10평 미만', '10평대', '20평대', '30평대', '40평대 이상'] : ['모두', '정보있는사진만']), function() {
                            danah.c.li({ c: 'd_filter_item' })
                                .addClass(j.eq(i).find('.d_filter_item_btn_search_val').text() === this ? 'd_filter_item_active' : '')
                                .append(danah.c.a({ c: 'd_filter_item_btn', t: this }))
                                .appendTo(p.find('.d_container:last'))
                                .click(function() {
                                	let g = 1, u = [];
                                    j.eq(i).find('.d_filter_item_btn_search_val').text($(this).text());
                                    j.removeClass('d_filter_item_active')
                                    e.attr('style', 'margin-left:7px;transform-origin:center 7px;transition:transform .2s linear;transform:rotate(0deg);background-position-x:-40px;background-position-y:-0px;width:12px;height:12px');
                                    o.addClass('d_filter_hidden');
                                    $.each($('.d_filter_item_btn_search_val'), function() { u.push($(this).text()); });
                                    $.getJSON($ctx + '/posts/search/' + u + '/' + g, a => {
                                        if (a.list.length != 0 && a != null) {
                                            $('#d_row').html('');
                                            $.cookie('userid') == undefined ? ui({ j: a }) : ll(a);
                                            $(window).off().scroll(function() {
                                                if (a.page > g && $(this).scrollTop() >= $(document).height() - $(this).height()) {
                                                    $('#d_row').append($.getJSON($ctx + '/posts/search/' + u + '/' + ++g, n => { $.cookie('userid') == undefined ? ui({ j: n }) : ll(n); }));
                                                }
                                            });
                                            danah.u.tb();
                                        } else {
                                            $.toast($('<h3/>').text('검색 결과가 없습니다.'), { type: 'info', duration: 2000 });
                                            danah.lt.l();
                                        }
                                    });
                                });
                        });
                    }
                });
        })
        return p;
    };
    let ll = d => { $.getJSON($ctx + '/likes/' + $.cookie('userid'), a => { ui({ j: d, e: a }); }); };
    let lc = d => {
        $.each(d.j, function() {
            if ((d.e == this.seq) && (this.check == 1)) $('#d_post_action_like_' + d.e + ' span').attr({ style: 'background-position: -40px -280px; width: 24px; height: 24px;' });
        });
    };
    let ui = d => {
        let p = $('#d_row'),
            j = d.j,
            e = d.e;
        $.each(j.list, function(i) {
            danah.c.article({ c: 'd_col_12  d_col_md_4 d_col_lg_3 d_post', hc: 'd_post_writer' })
                .append(
                    $('<header/>').addClass('d_post_writer')
                    .append(
                        danah.c.a({ c: 'd_post_writer_profile' }).append(danah.c.img({ sr: $i + ((this.profile === '' || this.profile === undefined) ? '/danah/user_profile.jpeg' : '/hyeri/profile/' + this.profile), a: this.nickname + '의 프로필 사진' })),
                        danah.c.p({ c: 'd_post_writer_about', ht: danah.c.a({ ht: $('<strong/>').text(this.nickname) }) })
                    ),
                    $('<figure/>')
                    .append(
                        danah.c.div({ c: 'd_post_img' })
                        .append(
                            danah.c.img({ c: (this.imageTagCnt == 0) ? 'd_vertical' : 'd_horizon', sr: $i + '/danah/post/' + this.lastUpdate.replace(/-/gi, '/') + '/' + this.image }),
                            this.imageTagCnt == 0 ? '' : danah.c.span({ c: 'd_post_img_icon d_post_img_info', s: 'background-position: 0px 0px; width: 14px; height: 14px;' }),
                            danah.c.span({ c: 'd_post_img_view' }).append('조회수 ', this.viewCnt)
                        )
                        .click(n => {
                            n.preventDefault();
                            danah.s.d(this.seq);
                        }),
                        danah.c.aside({ c: 'd_post_action' })
                        .append(
                            danah.c.button({ c: 'd_post_action_like', i: 'd_post_action_like_' + this.seq })
                            .append(danah.c.span({ c: 'd_post_action_icon', s: 'background-position: -240px -280px; width: 24px; height: 24px;' }), this.likeCnt == 0 ? '' : this.likeCnt)
                            .click(function(n) {
                                n.preventDefault();
                                if($.cookie('userid') == undefined){
                                	$.toast($('<h4/>').text('로그인이 필요한 서비스 입니다.'), { duration: 2000 });
                                	$('#login_btn').trigger('click');
                                }else{
                                	$.getJSON($ctx + '/likes/' + $.cookie('userid') + '/' + j.list[i].seq, h => { $(this).html('').append(danah.c.span({ c: 'd_post_action_icon', s: h.check == 0 ? 'background-position: -240px -280px; width: 24px; height: 24px;' : 'background-position: -40px -280px; width: 24px; height: 24px;' }), h.likeCnt); });
                                } 
                            }),
                            danah.c.a({ c: 'd_post_action_cmt' })
                            .append(danah.c.span({ c: 'd_post_action_icon', s: 'background-position: -320px -280px; width: 24px; height: 24px;' }), this.commentCnt == 0 ? '' : this.commentCnt)
                            .click(n => {
                                n.preventDefault();
                                if($.cookie('userid') == undefined){
                                	$.toast($('<h4/>').text('로그인이 필요한 서비스 입니다.'), { duration: 2000 });
                                	$('#login_btn').trigger('click');
                                }else{
                                	danah.s.d(this.seq);
                                }
                            })
                        ),
                        $('<figcaption/>').text(this.title)
                    )
                )
                .appendTo(p);
            lc({ j: e, e: this.seq, });
        });
    }
    return { l: l, s: s };
})();
/* ************************************
-- 태그등록
-- 
 *************************************/
danah.t = (() => {
    let $ctx = $.context(),
        $js = $.script(),
        $css = $.style(),
        $i = $.img(),
        $ctt = $('#content'),
        it = [],
        is = [];
    let t = d => {
        let p = danah.c.div({ c: 'd_post d_add_tags' }),
        	j = 1,
        	e = [],
        	o = '';
        $ctt.html(p);
        p.append(
            danah.c.div({ i: 'd_add_tags' })
            .append(
                danah.c.form({ c: 'd_edit_post' })
                .append(
                    danah.c.div({ c: 'd_buttons' })
                    .append(
                        danah.c.div({ c: 'd_title' })
                        .append('태그등록', danah.c.span({ t: '사진을 클릭하여 태그를 작성해보세요.' })),
                        danah.c.input({ ty: 'submit', i: 'd_submit', v: '저장하기', n: 'commit' })
                        .attr({ 'data-disable-with': '갱신' })
                        .click(a => {
                            a.stopPropagation();
                            a.preventDefault();
                            if (c()) {
                                $('.common_information').each((i, v) => {
                                    if ($('.d_description').eq(i).val() !== '') {
                                        e.push([
                                            $('.d_description').eq(i).val(),
                                            $('.d_postion_x').eq(i).val(),
                                            $('.d_postion_y').eq(i).val(),
                                            $('.d_postion_s').eq(i).val(),
                                            $('.d_postion_q').eq(i).val()
                                        ].join(','));
                                    }
                                });
                                $('.d_destroy_item').each(function() { o += $(this).val() + ','; });
                                $.ajax({
                                    url: $ctx + '/imgTags',
                                    method: 'POST',
                                    contentType: 'application/json',
                                    data: JSON.stringify({ item: e, seq: d.j.seq, destroy: o }),
                                    success: n => { if (n != null) { danah.s.d(n); } else { console.log('Fail to Get'); } },
                                    error: (e1, e2, e3) => { console.log(e3); }
                                });
                            }
                        }),
                        danah.c.a({}).append(danah.c.div({ i: 'd_cancel' }).text('취소하기').click(a => { danah.s.d(d.j.seq) }))
                    ),
                    danah.c.div({ i: 'd_destroy_tags' }),
                    danah.c.div({ i: 'd_image_panel' })
                    .append(danah.c.img({ sr: $i + '/danah/post/' + d.j.lastUpdate.replace(/-/gi, '/') + "/" + d.j.image, a: 'None' }))
                    .click(function(a) {
                        if (c()) {
                            $('.d_tag_information').hide();
                            m({ j: parseInt(a.pageX - $('#d_image_panel').offset().left - 15), e: parseInt(a.pageY - $('#d_image_panel').offset().top) - 15, o: j }).appendTo($('#d_image_panel'));
                            $('#ui-id-'+j).attr({ style: 'top: auto;' }).appendTo($('#d_user_field_'+j)).click(n => { n.stopPropagation(); });
                            j++;
                        }
                    })
                )
            )
        )
        $.each(d.e, function() {
            m({ f: 'e', j: this.position.split(',')[0], e: this.position.split(',')[1], o: j, g: this.itemTitle, u: this.itemSeq, p: this.seq }).appendTo($('#d_image_panel'));
            $('#ui-id-'+j).attr({ style: 'top: auto;' }).appendTo($('#d_user_field_'+j)).click(n => { n.stopPropagation(); });
            j++;
        });
        l();
    };
    let l = d => {
        $.getJSON($ctx + '/imgTags/search', a => {
            $.each(a, function() {
                it.push(this.itemTitle);
                is.push(this.itemSeq);
            });
        });
    };
    let c = d => {
        let j = $('.d_description'),
            e = true;
        $.each(j, i => { if (j.eq(i).val() === '') e = false; });
        e ? '' : $.toast($('<h4/>').text('열려진 태그에 내용을 입력해주세요.'), { type: 'danger', duration: 2000 });
        return e;
    };
    let m = d => {
        let p = danah.c.div({ c: 'd_tags_form', i: 'd_tags_form_' + d.o, s: 'left:' + d.j + 'px; top:' + d.e + 'px' });
        p.addClass(d.f === 'e' ? 'd_edit' : '')
        	.append(
        			danah.c.div({ c: 'd_tag_icon d_gray' })
                    .click(a => {
                    	a.stopPropagation();
                    	if(c() && ($('#d_tag_information_'+d.o).css('display')=='none')){
                            $('.d_tag_information').attr({ style: 'display:none' });
                            $('#d_tag_information_' + d.o).attr({ style: 'display: block;' });
                    	}
                    }),
                    danah.c.div({ c: 'd_tag_information', i: 'd_tag_information_' + d.o })
                    .attr({ style: d.f === 'e' ? 'display:none' : 'display: block;' })
                    .append(
                        danah.c.div({ c: 'common_information' })
                        .append(
                            danah.c.input({ c: 'd_postion_x', ty: 'hidden', n: 'd_tags_position_x', i: 'd_tags_position_x', v: d.j }),
                            danah.c.input({ c: 'd_postion_y', ty: 'hidden', n: 'd_tags_position_y', i: 'd_tags_position_y', v: d.e }),
                            danah.c.input({ c: 'd_postion_s', ty: 'hidden', n: 'd_tags_position_s', i: 'd_tags_position_s_' + d.o, v: d.u }),
                            (d.f === 'e') ? danah.c.input({ c: 'd_postion_q', ty: 'hidden', n: 'd_tags_position_q', i: 'd_tags_position_q', v: d.p }) : ''
                        ),
                        danah.c.div({ c: 'd_user_field', i: 'd_user_field_'+d.o })
                        .append(
                            $('<textarea/>')
                            .addClass('d_description ui-autocomplete-input')
                            .attr({ placeholder: '제품명을 입력 해주세요.', id: 'd_tags_description_' + d.o, name: 'd_tags_description' })
                            .val(d.g)
                            .autocomplete({ source: it })
                        )
                        .keydown(a => { if (a.keyCode == 13) a.preventDefault() }),
                        danah.c.div({ c: 'd_buttons' })
                        .append(
                            danah.c.div({ c: 'd_confirm', t: '확인' })
                            .click(a => {
                            	a.stopPropagation();
                                if (c()) {
                                    $.each(it, (i, v) => { if ($('#d_tags_description_' + d.o).val() === it[i]) $('#d_tags_position_s_' + d.o).val(is[i]); });
                                    $('.d_tag_information').hide();
                                }
                            }),
                            danah.c.div({ c: 'd_destroy', t: '삭제' })
                            .click(a => {
                            	a.stopPropagation();
                                if ($('#d_tags_description_'+d.o).val()=='' || c()) {
                                    if (p.hasClass('d_edit')) { danah.c.input({ c: 'd_destroy_item', ty: 'hidden', v: d.u }).appendTo($('#d_destroy_tags')); }
                                    $('#d_tags_form_' + d.o).remove();
                                }
                            })
                        )
                    )
        	)
            .click(a => { a.stopPropagation(); });
        return p;
    }
    return { t: t };
})();

danah.u = {
    sb: d => {
        $('#h_search_btn')
            .click(d => {
                d.preventDefault();
                if ($('#content').children().length > 3) { $('#d_search_tooltip').remove(); } else {
                    $.getJSON($.context() + '/hashTags', a => {
                        danah.c.div({ c: 'ui-widget d_search_tooltip', i: 'd_search_tooltip', s: 'z-index: 502;' })
                            .append(danah.c.input({ c: 'ui-autocomplete-input', i: 'd_search_description', ph: '검색' })
                                .autocomplete({ source: a }).keydown(function(a) { if (a.keyCode == 13) { danah.lt.s($(this).val()); } })).prependTo($('#content'));
                        $('.ui-autocomplete').attr({ style: 'top: auto;' }).appendTo($('#d_search_tooltip'));
                    });
                }
            });
    },
    wb: d => {
        $('#h_wirte_btn')
            .click(d => {
                d.preventDefault();
                if ($.cookie('userid') == undefined) {
                    $.toast($('<h4/>').text('로그인이 필요한 서비스 입니다.'), { duration: 2000 });
                    $('#login_btn').trigger('click');
                } else { danah.st.w(); }
            });
    },
    tb: d => {
        let p = danah.c.div({ c: 'd_wiget_wrap' });
        danah.c.a({ c: 'd_top_btn', i: 'd_top_btn' })
            .append(danah.c.i({ c: 'fa fa-chevron-up' }))
            .appendTo(p.appendTo($('#content')))
            .click(a => { $('html, body').animate({ scrollTop: 0 }, '5000'); });
        $(window).scroll(() => { $(this).scrollTop() > 200 ? $('.d_top_btn').fadeIn('2000') : $('.d_top_btn').fadeOut('500'); });
    },
    s: d => {
        let p = danah.c.div({ c: 'd_share_post' });
        $.each([
            'background-position: -80px -40px; width: 48px; height: 48px;', 'background-position: -160px -40px; width: 48px; height: 48px;',
            'background-position: -240px -40px; width: 48px; height: 48px;', 'background-position: -320px -40px; width: 48px; height: 48px;'
        ], function(i) {
            danah.c.div({})
                .append(
                    (i < 2) ?
                    danah.c.a({ c: 'd_share_post_btn', tg: '_blank', r: 'noopener noreferrer' }).append(danah.c.span({ c: 'd_icon_page_post', s: this })) :
                    danah.c.button({ c: 'd_share_post_btn' }).append(danah.c.span({ c: 'd_icon_page_post', s: this }))
                )
                .appendTo(p)
                .click(a => {
                    switch (i) {
                        case 0:
                            window.open($.f());
                            break;
                        case 1:
                            window.open($.n());
                            break;
                        case 2:
                            $.k();
                            break;
                        case 3:
                            p.children(':last').hasClass('d_invisible') ? p.children(':last').removeClass('d_invisible') : p.children(':last').addClass('d_invisible');
                            break;
                        default:
                            break;
                    }
                });
            danah.c.div({ c: 'd_share_post_url d_tooltip d_invisible', i: 'd_shre_post_f_url' })
                .append(
                    danah.c.p({ t: $.u() }), danah.c.button({}).text('복사')
                    .click(a => {
                        p.children(':last').addClass('d_invisible');
                        let temp = $('<input/>');
                        temp.appendTo($('body')).val($('#d_url').text()).select();
                        document.execCommand('copy');
                        temp.remove();
                        $.getJSON($.context() + '/share/' + d, n => {
                            $.toast($('<h4/>').text('URL을 클립보드에 복사하였습니다.'), { type: 'success', duration: 2000 });
                            $('#d_footer_shareCnt').html('').append('공유', n);
                            $('#d_btn_shareCnt').html('').append(danah.c.span({ c: 'd_icon_common_action', s: 'vertical-align: middle; margin-right: 6px; background-position: -200px -280px; width: 24px; height: 24px;' }), n);
                        });
                    })
                )
                .appendTo(p);
        });
        return p;
    }
};

danah.c = {
    div: d => { return $('<div/>').addClass(d.c).attr({ id: d.i, style: d.s, name: d.n }).html(d.ht).text(d.t); },
    h1: d => { return $('<h1/>').addClass(d.c).html(d.ht) },
    hr: d => { return $('<hr/>').addClass(d.c); },
    a: d => { return $('<a/>').addClass(d.c).attr({ href: d.hr, id: d.i, style: d.s, target: d.tg, rel: d.r }).html(d.ht).text(d.t); },
    p: d => { return $('<p/>').addClass(d.c).attr({ id: d.i }).html(d.ht).text(d.t); },
    ul: d => { return $('<ul/>').addClass(d.c).attr({ id: d.i }).html(d.ht).text(d.t); },
    li: d => { return $('<li/>').addClass(d.c).attr({ id: d.i, style: d.s }).html(d.ht).text(d.t); },
    button: d => { return $('<button/>').addClass(d.c).attr({ id: d.i, title: d.t, style: d.s, type: d.ty }).html(d.ht); },
    img: d => { return $('<img/>').addClass(d.c).attr({ id: d.i, src: d.sr, srcset: d.srs, alt: d.a, style: d.s }); },
    span: d => { return $('<span/>').addClass(d.c).attr({ id: d.i, style: d.s }).html(d.ht).text(d.t); },
    nav: d => { return $('<nav/>').addClass(d.c).attr({ id: d.i }).html(danah.c.ul({ c: d.u })); },
    article: d => { return $('<article/>').addClass(d.c).attr({ id: d.i }); },
    i: d => { return $('<i/>').addClass(d.c).attr({ id: d.i, style: d.s }); },
    aside: d => { return $('<aside/>').addClass(d.c); },
    section: d => { return $('<section/>').addClass(d.c).html(d.ht); },
    form: d => { return $('<form/>').addClass(d.c).attr({ id: d.i, enctype: d.et }) },
    input: d => { return $('<input/>').addClass(d.c).attr({ id: d.i, name: d.n, type: d.ty, value: d.v, placeholder: d.ph, style: d.s }); },
    select: d => { return $('<select/>').addClass(d.c).attr({ n: d.n, id: d.i, style: d.s }); },
    option: d => { return $('<option/>').addClass(d.c).attr({ n: d.n, style: d.s, value: d.v }).text(d.t); }
};

$.prototype.danahValChk = d => {
    let j = true;
    $.each(d, function() { if (this === '' || this == 0) j = false; });
    j ? '' : $.toast($('<h4/>').text('필수 입력값이 입력되지 않았습니다.'), { type: 'danger', duration: 2000 });
    return j;
};

$.prototype.danahExtChk = d => {
    let j = (!d.match(/jpg|gif|png|jpeg/i)) ? false : true;
    j ? '' : $.toast($('<h4/>').text('gif,png,jpg,jpeg 파일만 업로드 할 수 있습니다.'), { type: 'danger', duration: 2000 });
    return j;
}

function DanahS(d) {
    return { f: () => { return 'https://www.facebook.com/sharer.php?u=' + location.href; }, k: () => { return Kakao.Story.share({ url: location.href, text: '니방내방 프로젝트입니다 :)' }); }, n: () => { return 'http://share.naver.com/web/shareView.nhn?url=' + location.href + '&title=' + encodeURI(document.title); }, u: () => { return location.href; } };
}

(function(a) {
    var b = null,
        c = null,
        d = function(e, f) {
            f = a.extend({ duration: 5e3, sticky: !1, type: "" }, f), "number" == typeof f.duration || (f.duration = 5e3), "boolean" == typeof f.sticky || (f.sticky = !1), "string" == typeof f.type || (f.type = ""), b || (c = d.config, b = a("<ul></ul>").addClass("toast").appendTo(document.body).hide(), "number" == typeof c.width || (c.width = 500), "string" == typeof c.align || (c.align = "center"), "boolean" == typeof c.closeForStickyOnly || (c.closeForStickyOnly = !1), b.width(c.width), ("left" === c.align || "right" === c.align) && b.css("margin", "5px").css(c.align, "0") || b.css({ left: "50%", margin: "5px 0 0 -" + c.width / 2 + "px" }));
            var g = a("<li></li>").hide().html(e).appendTo(b),
                h = a("<button>&times;</button>").addClass("close").prependTo(g),
                i = null;
            h.click(function() { clearTimeout(i), g.animate({ height: 0, opacity: 0 }, "fast", function() { g.remove(), b.children().length || b.removeClass("active").hide() }) }), c.closeForStickyOnly && !f.sticky && h.hide(), "" !== f.type && g.addClass(f.type), !b.hasClass("active") && b.addClass("active").show(), !f.sticky && f.duration > 0 && (i = setTimeout(function() { h.click() }, f.duration)), g.fadeIn("normal")
        };
    d.config = { width: 500, align: "center", closeForStickyOnly: !0 }, a.extend({ toast: d })
})(jQuery);