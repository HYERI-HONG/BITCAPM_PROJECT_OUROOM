package com.ouroom.web.brddt;

import java.util.List;
import java.util.Map;

import com.ouroom.web.item.Item;

public interface BrdDetailMapper {
	public Item item_seq(String seq);
	public List<Item> item_opt(String seq);
	public List<Review> review(Map<?,?> m);
	public void rev_insert(Review rev);
	public void rev_delete(String id);
	public int rev_cnt();
 }
 