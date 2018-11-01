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
	public List<Item> listsearch(Map<?,?> m);
	public List<Item> c1();
	public List<Item> c2(String seq);
	public Item selectOne(String s);
	public void cartAdd(Map<?,?> m);
	public List<Item> cartList(String seq);
	public List<Item> cartOption(Map<?,?> m);
	public void cartDelete(Map<?,?> m);
	public void purC(Object i);
	public List<Item> cartAll(String seq);
	public void itemAdd(Map<?,?> m);
	public String ItemPk(String s);
	public void insertOption(Map<?,?> m);
	public void insertItemPost(Map<?,?> m);
	public void updateItem(Map<?,?>m);
	
}
