package com.ouroom.web.board;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Component 
@Data
@Lazy
public class Board {
	private String seq,regi_date,view_cnt,like_cnt,share_cnt,board_seq,item_seq,image;
}
