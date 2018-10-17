package com.ouroom.web.board;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

@Repository
public interface PostMapper {
	public void inseart(Post p);
	public List<?> list(Map<?, ?> p);
	public Post retrieve(Post p);
	public Integer count(Map<?, ?> p);
	public void update(Post p);
	public void delete(Post p);
}
