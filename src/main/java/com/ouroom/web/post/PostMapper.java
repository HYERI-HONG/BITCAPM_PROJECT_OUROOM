package com.ouroom.web.post;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

@Repository
public interface PostMapper {
	public void inseart(Map<?, ?> p);
	public List<?> list(Map<?, ?> p);
	public Post retrieve(Map<?, ?> p);
	public Integer count(Map<?, ?> p);
	public void update(Map<?, ?> p);
	public void delete(Map<?, ?> p);
}
