package com.ouroom.web.post;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service @Transactional
public class TransactionService {
	@Autowired PostMapper pm;
	@Autowired Pagination page;
	@Autowired Map<String, Object> m;
	@Autowired String s;
	
	@SuppressWarnings("unchecked")
	@Transactional
	public String postInseart(Map<?, ?> p) {
		Util.log.accept("진입확인"+p);
		m.clear();
		pm.postInseart(p);
		m = (Map<String, Object>) pm.postRetrieve((String) m.get("seq"));
		s = String.valueOf(m.get("seq"));
		Util.log.accept("seq값체크중"+s);
		m.clear();
		for (Object o : ((String) p.get("keyword")).split(",")) {
			m.put("keyword", o);
			m.put("seq", s);
			pm.hashTagInseart(m);
			System.out.println("해시태그"+s);
		}
		m.clear();
		m = (Map<String, Object>) pm.postRetrieve((String) m.get("memSeq"));
		Util.log.accept("유틸라스트"+m.toString());
		return s;
	}; //로그인 기능 구현후 수정
	
	@Transactional
	public Map<?, ?> postDetail(String seq){
		PageProxy pxy = new PageProxy();
		m.clear();
		m.put("pageNo", 1);
		m.put("seq", Integer.parseInt(seq));
		m.put("totalRecode", pm.commentCount(m));
		m.put("recodeSize", 3);
		pxy.carraryOut(m);
		page = pxy.getPagination();
		m.clear();
		m.put("beginRow", String.valueOf(page.getBeginRow()));
		m.put("endRow", String.valueOf(page.getEndRow()));
		m.put("seq", Integer.parseInt(seq));
		m.put("comment", pm.commentList(m));
		m.remove("beginRow");
		m.remove("endRow");
		m.remove("seq");
		m.put("page", page);
		m.put("post", pm.postRetrieve(seq));
		m.put("hashTag", pm.hashTagList(seq));
		m.put("imageTag", pm.imgTagList(seq));
		return m;
	};
	
	@Transactional
	public void postUpdate(Map<?, ?> p){
		
	};
	
	@Transactional
	public boolean postDelete(Map<?, ?> p){
		
		return pm.postCount(m)==0;
	};
	
	/*
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
