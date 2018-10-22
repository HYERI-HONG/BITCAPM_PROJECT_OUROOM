package com.ouroom.web.post;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

@Repository
public interface PostMapper {
	public void postInseart(Map<?, ?> p);
	public List<?> postList(Map<?, ?> p);
	public List<?> postRetrieve(Map<?, ?> p);
	public Integer postCount(Map<?, ?> p);
	public void postUpdate(Map<?, ?> p);
	public void postDelete(Map<?, ?> p);
	public void cmtInseart(Map<?, ?> p);
	public List<?> cmtList(Map<?, ?> p);
	public Integer cmtCount(Map<?, ?> p);
	public void cmtDelete(Map<?, ?> p);
	public void likeInseart(Map<?, ?> p);
	public List<?> likeList(Map<?, ?> p);
	public List<?> likeRetrieve(Map<?, ?> p);
	public Integer likeCount(Map<?, ?> p);
	public void likeDelete(Map<?, ?> p);
	public void tagInseart(Map<?, ?> p);
	public List<?> tagList(Map<?, ?> p);
	public Integer tagCount(Map<?, ?> p);
	public void tagDelete(Map<?, ?> p);

}
