package com.ouroom.web.post;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

@Repository
public interface PostMapper {
	public void postInseart(Map<?, ?> m);
	public List<?> postList(Map<?, ?> m);
	public Map<?, ?> postRetrieve(String s);
	public Integer postCount(Map<?, ?> m);
	public void postUpdate(Map<?, ?> m);
	public void postDelete(Map<?, ?> m);
	
	public void hashTagInseart(Map<?, ?> m);
	public List<?> hashTagList(String s);
	public List<?> hashTagSearch();
	public void hashTagDelete(Map<?, ?> m);

	public void imgTagInseart(Map<?, ?> m);
	public List<?> imgTagList(String s);
	public Integer imgTagCount(Map<?, ?> m); //미구현
	public void imgTagDelete(Map<?, ?> m);
	
	public void commentInseart(Map<?, ?> m);
	public List<?> commentList(Map<?, ?> m);
	public Integer commentCount(Map<?, ?> m);
	public void commentDelete(Map<?, ?> m);
	
	public void likeInseart(Map<?, ?> m);
	public List<?> likeList(String s);
	public List<?> likeRetrieve(Map<?, ?> m);
	public Integer likeCount(Map<?, ?> m); //미구현
	public void likeDelete(Map<?, ?> m);
	
}
