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
        danah.s.l();
        $.extend(new DanahS());
        /*
        $(window).on('popstate', function(event) {
            var data = event.originalEvent.state;
            $('#content').html(data.list);
        });
        */
        //alert(location.href);
        //$(window).on('scroll mousewheel', a => {a.preventDefault();}) :
        //$(window).off('scroll mousewheel');
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
                if (ctt.children().length > 3) {
                    $('#d_search_tooltip').remove();
                } else {
                    danah.c.div({ c: 'ui-widget d_search_tooltip', i: 'd_search_tooltip', s: 'z-index: 502;' })
                        .append(
                            danah.c.input({ c: 'ui-autocomplete-input', i: 'd_search_description', ph: '검색' })
                            .keydown(function(a) {
                                if (a.keyCode == 13) {
                                    danah.s.s({ t: $(this).val() });
                                }
                            })
                        )
                        .prependTo(ctt);
                    $(function() {
                        $('#d_search_description')
                            .autocomplete({
                                source: [
                                    "ActionScript", "AppleScript", "Asp", "BASIC", "C", "C++", "Clojure", "COBOL",
                                    "ColdFusion", "Erlang", "Fortran", "Groovy", "Haskell", "Java",
                                    "JavaScript", "Lisp", "Perl", "PHP", "Python", "Ruby", "Scala", "Scheme"
                                ]
                            });
                        $('.ui-autocomplete').attr({ style: 'left: 40%;right: 40%;top: 3.5em;position: absolute;z-index: 2000;border-radius: 4px;' })
                    });
                }
            });
        $('#h_wirte_btn')
            .click(d => {
                d.preventDefault();
                $('#d_top_btn').hide();
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
        let j = '';
        DanahT({ f: 'w' });
    };
    let l = d => {
        let j = 1;
        ctt.html(danah.u.f());
        //$.getJSON($ctx + '/posts/list/'+1, a => {
        //alert(a.list);
        danah.c.div({ c: 'd_container', i: 'd_post_list' })
            .append(danah.c.div({ c: 'd_row', i: 'd_row', s: 'margin-top:20px' }))
            .appendTo(ctt);
        DanahL({ 'f': 'l', 'p': 1 });
        $(window).scroll(function() {
            if ($(this).scrollTop() == $(document).height() - $(this).height()) {
                $('#d_row').append(DanahL({ 'f': 'l', 'p': j }));
                j++;
            }
        });
        //});
        danah.u.tb();
        //history.pushState({list: $('#content').html()}, null, '/web/post/list');
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
                                , danah.c.div({ c: 'd_post_img_btn_manage' })
                                .append(
                                    danah.c.a({ t: '태그관리' })
                                    .click(n => {
                                        danah.s.t();
                                    }),
                                    danah.c.a({ t: '수정하기' })
                                    .click(n => {
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
                            danah.u.s()
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
                            $.type($.cookie("userid")) === 'undefined' ? '' : danah.c.a({ hr: '#', c: 'd_comment_feed_form_cover' })
                            .click(n => {
                                $.getScript($.script() + '/app.js', () => { app.permission.login(); });
                            }),
                            danah.c.div({ c: 'd_comment_feed_form_user', ht: danah.c.img({ sr: $i + '/danah/profile.jpeg' }) }),
                            danah.c.div({ c: 'd_comment_feed_form_input' })
                            .append(
                                danah.c.div({ c: 'd_comment_feed_form_content' })
                                .append(
                                    $('<input/>')
                                    .addClass('d_comment_content_input d_comment_feed_form_content_text')
                                    .attr({
                                        id: 'd_comment',
                                        placeholder: '의견을 남겨 보세요.',
                                        style: 'height: 38px;'
                                    })
                                ),
                                danah.c.div({ c: 'd_comment_feed_form_actions' })
                                .append(
                                    danah.c.button({ c: 'd_comment_feed_form_submit' })
                                    .append(
                                        danah.c.i({ c: 'fas fa-arrow-circle-right' })
                                    )
                                    .click(n => {
                                        if ($.fn.danahValChk([$('#d_comment').val()])) {
                                            $.ajax({
                                                url: $ctx + '/cmts/write',
                                                method: 'POST',
                                                contentType: 'application/json',
                                                data: JSON.stringify({
                                                    comment: $('#d_comment').val(),
                                                    board_seq: '게시글번호',
                                                    mem_seq: '아이디',
                                                }),
                                                success: h => {
                                                    alert('성공');
                                                    $('#d_comment_feed_list').html(danah.u.c());
                                                }
                                            });
                                        }
                                    })
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
                            danah.c.div({ c: 'd_sidebar_container', s: 'height: 780px;' })
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
                                        , danah.c.div({ c: 'd_mine' })
                                        .append(
                                            danah.c.button({ c: 'd_sidebar_action_btn_mine' })
                                            .append(
                                                danah.c.span({ c: 'd_icon_page_post', s: 'vertical-align: middle; background-position: -120px 0px; width: 24px; height: 24px;' })
                                            ),
                                            danah.c.div({ c: 'd_sidebar_action_menu d_dismiss' })
                                            .append(
                                                danah.c.button({}).text('삭제')
                                                .click(n => {
                                                    danah.s.r();
                                                })
                                            )
                                        )
                                        .click(n => {
                                            let j = $('.d_mine');
                                            j.children(':last').hasClass('d_dismiss') ? j.children(':last').removeClass('d_dismiss') : j.children(':last').addClass('d_dismiss');
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
                                    danah.u.s()
                                    .append(
                                        danah.c.div({ c: 'd_share_post_url d_tooltip d_invisible' })
                                        .append(
                                            danah.c.p({ t: '게시물주소' }),
                                            danah.c.button({}).text('복사')
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
                        .click(n => {
                            p.find('.d_share_tooltip_tooltip')
                                .attr({
                                    'style': p.find('.d_share_tooltip_tooltip').attr('style') === 'right: 0px; bottom: 100%; transition: opacity 0.3s ease 0s, transform 0.3s ease 0s, visibility 0s ease 0.3s; opacity: 0; transform: translateY(-16px); visibility: hidden;' ?
                                        'right: 0px; bottom: 100%;' : 'right: 0px; bottom: 100%; transition: opacity 0.3s ease 0s, transform 0.3s ease 0s, visibility 0s ease 0.3s; opacity: 0; transform: translateY(-16px); visibility: hidden;'
                                });
                        }),
                        danah.c.div({ c: 'd_share_tooltip_my_home' })
                        .append(
                            danah.c.button({ c: 'd_share_tooltip_btn_toggle' })
                            // 토글처리 right: 0px; bottom: 100%;
                            .append(danah.c.span({ c: 'd_icon_common_action', s: 'background-position: -200px 0px; width: 28px; height: 28px;' })),
                            danah.c.div({ c: 'd_share_tooltip_tooltip', s: 'right: 0px; bottom: 100%; transition: opacity 0.3s ease 0s, transform 0.3s ease 0s, visibility 0s ease 0.3s; opacity: 0; transform: translateY(-16px); visibility: hidden;' })
                            .append(
                                danah.c.a({ c: 'd_share_tooltip_btn_share', hr: $.f() + '게시물주소', tg: '_blank', r: 'noopener noreferrer' })
                                .append(danah.c.span({ c: 'd_icon d_icon_sns_square_facebook' })),
                                danah.c.button({ c: 'd_share_tooltip_btn_share', hr: $.k() })
                                .append(danah.c.span({ c: 'd_icon d_icon_sns_square_kakao_story' })),
                                danah.c.a({ c: 'd_share_tooltip_btn_share', hr: $.n() + '게시물주소' + '&title=' + '제목', tg: '_blank', r: 'noopener noreferrer' })
                                .append(danah.c.span({ c: 'd_icon d_icon_sns_square_naver' }))
                            )
                        )
                    )
                )
            )
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
        let j = ''
        DanahT({ f: 'e' });
        $('#d_post_title').text('제목');
        $('#d_post_space').val('원룸');
        $('#d_post_size').val('10평대');
        $('#d_post_description').text('내용');
        $('#submit')
            .click(a => {
                a.preventDefault();
                $('.d_keyword').each(function() {
                    j += $(this).val() + ",";
                });
                if ($.fn.danahValChk([$('#d_post_title').text(), $('#d_post_space').val(), $('#d_post_size').val()])) {
                    $.ajax({
                        url: $.context() + '/posts/' + d.pageNo + '/edit',
                        method: 'POST',
                        contentType: 'application/json',
                        data: JSON.stringify({
                            seq: '아이디',
                            title: $('#d_post_title').text(),
                            room_type: $('#d_post_space').val(),
                            room_size: $('#d_post_size').val(),
                            content: $('#d_post_description').text(),
                            keyword: j
                        }),
                        success: n => {
                            alert()
                            $('.mfp-close').trigger('click');
                            danah.s.d({});
                        }
                    });
                }
            });
    };
    let r = d => {
        if (confirm('삭제하시겠습니까?')) {
            alert('삭제완료');
            console.log(this.bno);
            $.ajax({
                url: $ctx + '/posts/remove',
                method: 'POST',
                contentType: 'application/json',
                data: JSON.stringify({
                    seq: '',
                    regi_date: '',
                    image: ''
                }),
                success: x => {
                    alert('성공');
                },
                error: (m1, m2, m3) => {
                    alert('에러발생1' + m1);
                    alert('에러발생2' + m2);
                    alert('에러발생3' + m3);
                }
            });
        } else {
            alert('취소완료');
        }
    };
    let t = d => {
        let j = 1;
        $.magnificPopup.open({
            showCloseBtn: false,
            closeBtnInside: false,
            closeOnBgClick: false,
            closeOnContentClick: false,
            alignTop: true,
            fixedBgPos: true,
            fixedContentPos: false,
            items: {
                src: danah.c.div({ c: 'd_form_fields d_post d_add_tags' })
                    .append(
                        danah.c.div({ i: 'd_add_tags' })
                        .append(
                            danah.c.form({ c: 'd_edit_post' })
                            .append(
                                danah.c.div({ c: 'd_buttons' })
                                .append(
                                    danah.c.div({ c: 'd_title' })
                                    .append(
                                        '태그등록',
                                        danah.c.span({ t: '사진을 클릭하여 태그를 작성해보세요.' })
                                    ),
                                    danah.c.input({ ty: 'submit', i: 'd_submit', v: '저장하기', n: 'commit' }).attr({ 'data-disable-with': '갱신' }),
                                    danah.c.a({ hr: '#' })
                                    .append(
                                        danah.c.div({ i: 'd_cancel' }).text('취소하기')
                                    )
                                ),
                                danah.c.div({ i: 'd_destroy_tags' }),
                                danah.c.div({ i: 'd_image_panel' })
                                .append(
                                    danah.c.img({ sr: $i + '/danah/post/1.jpeg', a: 'None' })
                                )
                                .keydown(a => {
                                    if (a.keyCode == 13) a.preventDefault();
                                })
                                .click(function(a) {
                                    a.preventDefault();
                                    if (j == 1 || $('#d_tags_description_' + (j - 1)).val() !== '') {
                                        $('.d_tag_information').hide();
                                        danah.u.t({ x: parseInt(a.pageX - $(this).offset().left - 15), y: parseInt(a.pageY - $(this).offset().top) - 15, n: j }).appendTo($('#d_image_panel'));
                                        j++;
                                    } else {
                                        alert('열려진 태그에 내용을 입력해주세요.');
                                    }
                                })
                            )
                        ),
                        danah.c.button({ c: 'mfp-close', t: 'Close (Esc)', ty: 'button', s: 'width: 30px; height: 30px; color: black; font-size: 25px; line-height: 30px;' }).text('x')
                    )
            },
            midClick: true,
            overflowY: 'auto',
            removalDelay: '0',
            type: 'inline'
        });
    };
    let s = d => {
        const p = danah.c.p({ c: 'd_post_search' });
        let j = 1;
        ctt.html(
            danah.c.div({ c: 'd_container', i: 'd_post_list' })
            .append(
                p
                .html(["'", d.t, "'에 대한 검색 결과 "])
                .append(danah.c.span({ ht: ['20,077', '개'] })),
                danah.c.div({ c: 'd_row', i: 'd_row', s: 'margin-top:20px' })
            )
        );
        DanahL({ 'f': 'l', 'p': 1 });
        $('figcaption').remove();
        $(window).scroll(function() {
            if ($(this).scrollTop() == $(document).height() - $(this).height()) {
                $('#d_row').append(DanahL({ 'f': 'l', 'p': j }));
                j++;
            }
        });
        danah.u.tb();
    };
    return { m: m, w: w, l: l, d: d, e: e, r: r, t: t, s: s };
})();

danah.u = {
    tb: d => {
        const p = danah.c.div({ c: 'd_wiget_wrap' });
        danah.c.a({ c: 'd_top_btn', i: 'd_top_btn' })
            .append(danah.c.i({ c: 'fa fa-chevron-up' }))
            .appendTo(p.appendTo($('#content')))
            .click(a => {
                a.preventDefault();
                $('html, body').animate({ scrollTop: 0 }, '1000');
            });
        $(window).scroll(() => {
            $(this).scrollTop() > 200 ? $('.d_top_btn').fadeIn('2000') : $('.d_top_btn').fadeOut('500');
        });
    },
    pv: d => {
        console.log(d.e.files[0].name);
        let j = new FileReader();
        let e = new FormData();
        e.append('file', d.j == 'c' ? d.e.files[0] : d.e);
        $.ajax({
            url: $.context() + '/posts/upload',
            type: 'POST',
            data: e,
            async: false,
            cache: false,
            contentType: false,
            processData: false
        }).done(function(a) {
            $.type(d.o.attr('src')) === 'undefined' ? $('#d_upload_panel').addClass('change') : '';
            $('#d_progress').text('사진 바꾸기');
            j.onload = a => {
                d.o.attr('src', a.target.result);
            }
            j.readAsDataURL(d.e.files[0]);
        });
    },
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
                    n.preventDefault();
                    const j = $('.d_filter_item');
                    const e = $('.d_filter_item_btn_search_icon');
                    const o = p.children(':last');
                    if (j.eq(i).hasClass('d_filter_item_active')) {
                        e.attr('style', 'margin-left:7px;transform-origin:center 7px;transition:transform .2s linear;transform:rotate(0deg);background-position-x:-40px;background-position-y:-0px;width:12px;height:12px');
                        j.removeClass('d_filter_item_active')
                        o.addClass('d_filter_hidden');
                    } else {
                        e.attr('style', 'margin-left:7px;transform-origin:center 7px;transition:transform .2s linear;transform:rotate(0deg);background-position-x:-40px;background-position-y:-0px;width:12px;height:12px');
                        e.eq(i).attr('style', 'margin-left: 7px; transform-origin: center 7px 0px; transition: transform 0.2s linear 0s; transform: rotate(-180deg); background-position: -40px 0px; width: 12px; height: 12px;');
                        j.removeClass('d_filter_item_active')
                        j.eq(i).addClass('d_filter_item_active');
                        o.removeClass('d_filter_hidden');
                        p.find('.d_container:last').html('');
                        $.each((i == 0 ? ['최신순', '인기순', '베스트'] :
                            i == 1 ? ['모든공간', '원룸', '거실', '침실', '주방', '욕실', '베란다'] :
                            i == 2 ? ['모든평수', '10평미만', '10평대', '20평대', '30평대', '40평대 이상'] : ['모두', '정보있는사진만']), function() {
                            danah.c.li({ c: 'd_filter_item' })
                                .addClass(j.eq(i).find('.d_filter_item_btn_search_val').text() === this ? 'd_filter_item_active' : '')
                                .append(
                                    danah.c.a({ c: 'd_filter_item_btn', t: this })
                                )
                                .appendTo(p.find('.d_container:last'))
                                .click(function() {
                                    j.eq(i).find('.d_filter_item_btn_search_val').text($(this).text());
                                    // $.getJson
                                });
                        });
                    }
                });
        })
        return p;
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
                    danah.s.s();
                });
        });
        return p;
    },
    c: d => {
        const p = danah.c.ul({ c: 'd_comment_feed_list', i: 'd_comment_feed_list' });
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
                            danah.c.button({ c: 'd_comment_feed_item_footer_delete_btn' })
                            .text('삭제')
                            .click(n => {
                                $.ajax({
                                    url: $ctx + '/cmts/write',
                                    method: 'POST',
                                    contentType: 'application/json',
                                    data: JSON.stringify({
                                        comment: $('#d_comment').val(),
                                        board_seq: '게시글번호',
                                        mem_seq: '아이디',
                                    }),
                                    success: h => {
                                        alert('성공');
                                    }
                                });
                            })
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
    s: d => {
        const p = danah.c.div({ c: 'd_share_post' });

        $.each([
            { l: '', s: 'background-position: -320px -40px; width: 48px; height: 48px;' },
            { s: 'background-position: -240px -40px; width: 48px; height: 48px;' },
            { l: $.n(), s: 'background-position: -160px -40px; width: 48px; height: 48px;' },
            { l: $.f(), s: 'background-position: -80px -40px; width: 48px; height: 48px;' }
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
                .click(function() {
                    if (i == 0) p.children(':last').hasClass('d_invisible') ? p.children(':last').removeClass('d_invisible') : p.children(':last').addClass('d_invisible');
                });
        });
        return p;
    },
    t: d => {
        const p = danah.c.div({ c: 'd_tags_form', i: 'd_tags_form_' + d.n, s: 'z-index: 1; left:' + d.x + 'px; top:' + d.y + 'px' });
        p.append(
                danah.c.div({ c: 'd_tag_icon d_gray', i: 'd_tag_icon_' + d.n })
                .click(function(n) {
                    alert(this.id.split('_')[3]);
                    $('.d_tag_information').hide();
                    $('#d_tag_information_' + this.id.split('_')[3]).show();
                }),
                danah.c.div({ c: 'd_tag_information', i: 'd_tag_information_' + d.n, s: 'display: block;' })
                .append(
                    danah.c.div({ c: 'common_information' })
                    .append(
                        danah.c.input({ c: 'd_postion_x', ty: 'hidden', n: 'd_tags_position_x_' + d.n, i: 'd_tags_position_x_' + d.n, v: d.x }),
                        danah.c.input({ c: 'd_postion_y', ty: 'hidden', n: 'd_tags_position_y_' + d.n, i: 'd_tags_position_y_' + d.n, v: d.y })
                    ),
                    danah.c.div({ c: 'd_user_field' })
                    .append(
                        $('<textarea/>')
                        .addClass('d_description')
                        .attr({ 'placeholder': '제품명을 입력 해주세요.', 'id': 'd_tags_description_' + d.n, 'name': 'd_tags_description' })
                    ),
                    danah.c.div({ c: 'd_buttons' })
                    .append(
                        danah.c.div({ c: 'd_confirm', t: '확인' })
                        .click(n => {
                        	if($('#d_tags_description_' + d.n).val()!== ''){
                        		$('.d_tag_information').hide();
                        	}else{
                        		alert('열려진 태그에 내용을 입력해주세요.');
                        	}
                        }),
                        danah.c.div({ c: 'd_destroy', i: 'd_destroy_'+d.n, t: '삭제' })
                        .click(function(n) {
                        	n.preventDefault();
                        	$('#d_tags_form_' + this.id.split('_')[2]).remove();
                        	n.stopPropagation();
                        })
                    )
                )
            )
            .click(n => {
                n.stopPropagation();
            });
        $(function() {
            $('#d_tags_description' + d.n)
                .autocomplete({
                    source: [
                        "ActionScript", "AppleScript", "Asp", "BASIC", "C", "C++", "Clojure", "COBOL",
                        "ColdFusion", "Erlang", "Fortran", "Groovy", "Haskell", "Java",
                        "JavaScript", "Lisp", "Perl", "PHP", "Python", "Ruby", "Scala", "Scheme"
                    ]
                });

            $('.ui-autocomplete').attr({ style: 'position: absolute;z-index: 2000;border-radius: 4px; left:' + (d.x + 230) + 'px; top:' + (d.y + 230) + 'px' });
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
    li: d => { return $('<li/>').addClass(d.c).attr({ id: d.i }).html(d.ht).text(d.t); },
    button: d => { return $('<button/>').addClass(d.c).attr({ id: d.i, title: d.t, style: d.s, type: d.ty }).html(d.ht); },
    img: d => { return $('<img/>').addClass(d.c).attr({ id: d.i, src: d.sr, srcset: d.srs, alt: d.a, style: d.s }); },
    span: d => { return $('<span/>').addClass(d.c).attr({ id: d.i, style: d.s }).html(d.ht).text(d.t); },
    nav: d => { return $('<nav/>').addClass(d.c).attr({ id: d.i }).html(danah.c.ul({ c: d.u })); },
    article: d => { return $('<aticle/>').addClass(d.c).attr({ id: d.i }); },
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
    j ? '' : alert('필수 입력값이 입력되지 않았습니다.');
    return j;
};

$.prototype.danahExtChk = d => {
    let j = (!d.match(/jpg|gif|png|jpeg/i)) ? false : true;
    j ? '' : alert('gif,png,jpg,jpeg 파일만 업로드 할 수 있습니다.');
    return j;
}

function DanahS(d) {
    return {
        f: () => { return 'https://www.facebook.com/sharer.php?u='; },
        k: () => { return ''; },
        n: () => { return 'http://share.naver.com/web/shareView.nhn?url='; }
    };
}

function DanahL(d) {
    const p = $('#d_row');
    const $i = $.img();
    for (let i = 0; i <= 11; i++) {
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
}

function DanahT(d) {
    let j = '';
    $.magnificPopup.open({
        showCloseBtn: false,
        closeBtnInside: false,
        closeOnBgClick: false,
        closeOnContentClick: false,
        alignTop: true,
        fixedBgPos: true,
        fixedContentPos: false,
        items: {
            src: danah.c.form({ c: 'd_form_fields', i: 'upload_post_form', et: 'multipart/form-data' })
                .append(
                    danah.c.div({ i: 'd_upload_image' })
                    .append(
                        danah.c.img({ i: 'd_real_image' }),
                        danah.c.div({ i: 'd_upload_panel' })
                        .append(
                            danah.c.div({ c: 'd_icon' }),
                            danah.c.div({ c: 'd_progress', i: 'd_progress', t: '사진 업로드' })
                        ),
                        danah.c.input({ i: 'd_post_uploader', n: 'image', ty: 'file' })
                        .change(function(a) {
                            $.fn.danahExtChk(this.files[0].name) ? danah.u.pv({ j: 'c', e: this, o: $('#d_real_image') }) : '';
                        })
                        .on('dragenter dragover', a => {
                            a.preventDefault();
                            //필요여부 검토중
                        })
                        .on('drop', a => {
                            a.preventDefault();
                            $.fn.danahExtChk(a.originalEvent.dataTransfer.files[0].name) ? danah.u.pv({ j: 'd', e: a.originalEvent.dataTransfer, o: $('#d_real_image') }) : '';
                        }),
                        danah.c.input({ i: 'd_post_image_url', ty: 'hidden', n: 'image_url' })
                    ),
                    danah.c.div({ c: 'd_description enable_enter', i: 'd_post_title' })
                    .attr({ contenteditable: 'true', 'data-ph': '제목을 입력해 주세요' })
                    .text(d.f !== 'e' ? '' : d.post.title)
                    .keydown(a => {
                        if (a.keyCode == 13) a.preventDefault();
                    }),
                    danah.c.select({ c: 'ui-changed-selector', i: 'd_post_space', n: 'd_post_space', s: 'color: rgb(189, 189, 189);' })
                    .val(d.f !== 'e' ? '' : d.post.room_type)
                    .append(
                        danah.c.option({ v: '', t: '공간 선택(필수)' }),
                        danah.c.option({ v: '원룸', t: '원룸' }),
                        danah.c.option({ v: '거실', t: '거실' }),
                        danah.c.option({ v: '침실', t: '침실' }),
                        danah.c.option({ v: '주방', t: '주방' }),
                        danah.c.option({ v: '욕실', t: '욕실' }),
                        danah.c.option({ v: '베란다', t: '베란다' })
                    ),
                    danah.c.select({ c: 'ui-changed-selector', i: 'd_post_size', n: 'd_post_size', s: 'color: rgb(189, 189, 189);' })
                    .val(d.f !== 'e' ? '' : d.post.room_size)
                    .append(
                        danah.c.option({ v: '', t: '평수 선택(필수)' }),
                        danah.c.option({ v: '10평미만', t: '10평미만' }),
                        danah.c.option({ v: '10평대', t: '10평대' }),
                        danah.c.option({ v: '20평대', t: '20평대' }),
                        danah.c.option({ v: '30평대', t: '30평대' }),
                        danah.c.option({ v: '40평대 이상', t: '40평대 이상' })
                    ),
                    danah.c.div({ c: 'd_description enable_enter', i: 'd_post_description' })
                    .attr({ 'contenteditable': 'true', 'data-ph': '이미지에 대한 설명을 입력해 주세요' })
                    .text(d.f !== 'e' ? '' : d.post.content),
                    danah.c.div({ c: 'd_keywords' })
                    .append(
                        danah.c.div({ c: 'ui-keyword-field', i: 'd_keywords_view' })
                        .append(
                            danah.c.div({ i: 'd_add_keyword' })
                            .attr({ 'contenteditable': 'true', 'placeholder': '태그입력' })
                            .keydown(function(a) {
                                if (a.keyCode == 13) {
                                    a.preventDefault();
                                    danah.c.div({ c: 'd_keyword', n: 'd_keyword', t: $(this).text() })
                                        .insertBefore($(this));
                                    $(this).text('');
                                } else if (a.keyCode == 8) {
                                    $(this).text().length < 1 ? $(this).prev().remove() : '';
                                }
                            })
                        )
                    ),
                    danah.c.input({ c: 'd_submit_button', ty: 'submit', n: 'commit', v: d.f === 'w' ? '사진 올리기' : '수정하기', i: 'submit' })
                    .click(a => {
                        a.preventDefault();
                        $('.d_keyword').each(function() {
                            j += $(this).val() + ",";
                        });
                        if ($('#d_upload_panel').hasClass('change') && $.fn.danahValChk([$('#d_post_title').text(), $('#d_post_space').val(), $('#d_post_size').val()])) {
                            $.ajax({
                                url: $.context() + '/posts/' + (d.f === 'w' ? 'write' : (d.pageNo + '/edit')),
                                method: 'POST',
                                contentType: 'application/json',
                                data: JSON.stringify({
                                    seq: '아이디',
                                    title: $('#d_post_title').text(),
                                    room_type: $('#d_post_space').val(),
                                    room_size: $('#d_post_size').val(),
                                    content: $('#d_post_description').text(),
                                    keyword: j,
                                    mem_seq: '아이디'
                                }),
                                success: n => {
                                    alert();
                                    $('.mfp-close').trigger('click');
                                    danah.s.d({});
                                }
                            });
                        }
                    }),
                    danah.c.button({ c: 'mfp-close', t: 'Close (Esc)', ty: 'button', s: 'width: 30px; height: 30px; color: black; font-size: 25px; line-height: 30px;' }).text('x')
                )
        },
        midClick: true,
        overflowY: 'auto',
        removalDelay: '0',
        type: 'inline'
    });
    $('.mfp-close').click(n => { $('#d_top_btn').show(); });
}