package com.ouroom.web.board;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

@Repository
public interface BoardMapper {
	public void post(Board b);
	public List<?> list(Map<?, ?> p);
	public Board get(Board p);
	public Integer count(Map<?, ?> p);
	public void update(Board p);
	public void delete(Board p);
}
