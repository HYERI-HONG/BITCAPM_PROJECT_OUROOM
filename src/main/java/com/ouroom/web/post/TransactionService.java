package com.ouroom.web.post;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class TransactionService {
	@Autowired PostMapper pm;
	@Autowired Pagination page;
	@Autowired Map<String, Object> m;
	
	@Transactional
	public boolean postInseart(Map<?, ?> m) {
		pm.postInseart(m);
		pm.imgTagInseart(m);
		return pm.postCount(m)!=0;
	};
	
	@Transactional
	public Map<?, ?> postDetail(String seq){
		PageProxy pxy = new PageProxy();
		m.clear();
		m.put("pageNo", 1);
		m.put("postSeq", Integer.parseInt(seq));
		m.put("totalRecode", pm.commentCount(m));
		m.put("recodeSize", 3);
		pxy.carraryOut(m);
		page = pxy.getPagination();
		m.clear();
		m.put("beginRow", String.valueOf(page.getBeginRow()));
		m.put("endRow", String.valueOf(page.getEndRow()));
		m.put("seq", Integer.parseInt(seq));
		m.put("comment", pm.commentList(m));
		Util.log.accept("4차 확인 comment : "+m.get("comment"));
		m.remove("beginRow");
		m.remove("endRow");
		m.remove("seq");
		m.put("page", page);
		m.put("post", pm.postRetrieve(seq));
		Util.log.accept("1차 확인 post : "+m.get("post"));
		m.put("hashTag", pm.hashTagList(seq));
		Util.log.accept("2차 확인 hashTag : "+m.get("hashTag"));
		m.put("imageTag", pm.imgTagList(seq));
		Util.log.accept("3차 확인 imageTag : "+m.get("imageTag"));

		return m;
	};
	
	@Transactional
	public void postUpdate(Map<?, ?> m){
		
	};
	
	@Transactional
	public boolean postDelete(Map<?, ?> m){
		
		return pm.postCount(m)==0;
	};
	/*
	@Transactional
	public void cmtInseart(Map<?, ?> p) {};
	@Transactional
	public void cmtDelete(Map<?, ?> p){};
	@Transactional
	public void tagInseart(Map<?, ?> p) {};
	@Transactional
	public void tagDelete(Map<?, ?> p){};
	@Transactional
	public void likeInseart(Map<?, ?> p) {};
	@Transactional
	public void likeDelete(Map<?, ?> p){};
	*/
}
