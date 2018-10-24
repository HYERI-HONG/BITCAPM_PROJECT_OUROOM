package com.ouroom.web.item;

import java.util.List;
import java.util.Map;

public interface ItemMapper {
	public void add(Item i);
	public void update(Item i);
	public void delete(Item i);
	public int count();
	public List<Item> read(String s);
	public List<Item> list(Map<?,?> m);
	public List<Item> listSelect(Map<?,?> m);
	public List<Item> c1();
	public List<Item> c2(String seq);
	
}
