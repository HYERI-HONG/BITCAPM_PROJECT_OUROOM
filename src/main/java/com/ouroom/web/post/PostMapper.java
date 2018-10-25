package com.ouroom.web.post;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

@Repository
public interface PostMapper {
	public void postInseart(Map<?, ?> m);
	public List<?> postList(Map<?, ?> m);
	public List<?> postSearch(String s);
	public Map<?, ?> postRetrieve(Map<?,?> m);
	public Integer postCount(Map<?, ?> m);
	public void postUpdate(Map<?, ?> m); //수정중
	public void postDelete(Map<?, ?> m); //수정중
	
	public void hashTagInseart(Map<?, ?> m);
	public List<?> hashTagList(String s);
	public List<?> hashTagSearch();
	public void hashTagDelete(Map<?, ?> m); //수정중

	public void imgTagInseart(Map<?, ?> m); //수정중
	public List<?> imgTagSearch();
	public List<?> imgTagList(String s);
	public Integer imgTagCount(Map<?, ?> m); //미구현
	public void imgTagDelete(Map<?, ?> m); //수정중
	
	public void commentInseart(Map<?, ?> m);
	public List<?> commentList(Map<?, ?> m);
	public Integer commentCount(Map<?, ?> m);
	public void commentDelete(String seq);
	
	public void likeInseart(Map<?, ?> m); //수정중
	public Integer likeCount(Map<?, ?> m); //미구현
	public void likeDelete(Map<?, ?> m); //수정중
}
