package com.ouroom.web.post;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

@Repository
public interface PostMapper {
	public void postInsert(Map<?, ?> m);
	public List<?> postList(Map<?, ?> m);
	public List<?> postHashTagSearch(Map<?, ?> m);
	public List<?> postSearch(Map<?, ?> m);
	public List<?> postOthers(Object object);
	public Map<?, ?> postRetrieve(Map<?,?> m);
	public Integer postCount(Map<?, ?> m);
	public void postUpdate(Map<?, ?> m);
	public void postDelete(String s);
	public void hashTagInsert(Map<?, ?> m);
	public List<?> hashTagList(String s);
	public List<?> hashTagSearch();
	public void hashTagDelete(Map<?, ?> m);
	public void imgTagInsert(Map<?, ?> m);
	public List<?> imgTagSearch();
	public List<?> imgTagList(String s);
	public void imgTagUpdate(Map<?, ?> m);
	public void imgTagDelete(String s);
	public void commentInsert(Map<?, ?> m);
	public List<?> commentList(Map<?, ?> m);
	public Integer commentCount(Map<?, ?> m);
	public void commentDelete(String seq);
	public void likeInsert(Map<?, ?> m);
	public List<?> likeList(String s);
	public Map<?, ?> likeRetrieve(Map<?, ?> m);
	public void likeUpdate(Map<?, ?> m);
	public void likeDelete(String s);
}
