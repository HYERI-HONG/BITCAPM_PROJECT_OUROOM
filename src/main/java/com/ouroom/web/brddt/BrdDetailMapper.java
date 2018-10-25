package com.ouroom.web.brddt;

import java.util.List;

import com.ouroom.web.item.Item;

public interface BrdDetailMapper {
	public Item item_seq(String seq);
	public List<Item> item_opt(String seq);
}
 