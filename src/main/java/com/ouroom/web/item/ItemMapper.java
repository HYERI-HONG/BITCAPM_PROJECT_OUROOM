package com.ouroom.web.item;

import java.util.List;

public interface ItemMapper {
	public void add(Item i);
	public void update(Item i);
	public void delete(Item i);
	public int count();
	public Item read(Item i);
	public List<Item> list();
	
}
