package com.ouroom.web.post;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Component
@Data @Lazy
public class Post {
	private int BOARD_SEQ;
	private String BOARD_TITLE;
	private String BOARD_CONTENT;
	private String BOARD_REGDATE;
	private int VIEWCNT;
	private int BOARD_LIKE;
	private String CATEGORY;
	private int MEMBER_SEQ;
}
