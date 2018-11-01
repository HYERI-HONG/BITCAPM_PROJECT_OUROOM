package com.ouroom.web.item;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;
import lombok.Data;

@Component
@Data
@Lazy
public class Item {
	private String seq,title,price,delivery,discount,photo,sale_cnt,
			stroe_cnt,category2_seq,category,options,sum,category_kr,seqo,item_seq,cnt,
			mem_seq,option_seq,content;
}
