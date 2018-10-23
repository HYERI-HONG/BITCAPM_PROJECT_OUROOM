package com.ouroom.web.board;
import java.util.*;

import com.ouroom.web.item.Item;

public interface BoardMapper {
	public void add(Board i);
	public void update(Board i);
	public void delete(Board i);
	public int count();
	public Board read(Board i);
	public List<Item> list();
	
}
