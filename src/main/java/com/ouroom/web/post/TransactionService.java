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
		m = (Map<String, Object>) pm.postRetrieve(p);
		Util.log.accept("m체크중"+m);
		s = String.valueOf(m.get("seq"));
		m.clear();
		Util.log.accept("seq값체크중"+s);		
		for (Object o : ((String) p.get("keyword")).split(",")) {
			m.put("keyword", o);
			m.put("seq", s);
			pm.hashTagInseart(m);
			System.out.println("해시태그"+o);
		}
		return s;
	}; //로그인 기능 구현후 제대로 확인할것
	
	@SuppressWarnings("unchecked")
	@Transactional
	public Map<?, ?> postDetail(String seq){
		PageProxy pxy = new PageProxy();
		m.clear();
		m.put("seq", Integer.parseInt(seq));
		Map<String, Object> a = (Map<String, Object>) pm.postRetrieve(m);
		a.put("viewCnt", (int) a.get("viewCnt")+1);
		pm.postUpdate(a);
		m.put("pageNo", 1);
		m.put("totalRecode", pm.commentCount(m));
		m.put("recodeSize", 3);
		pxy.carraryOut(m);
		page = pxy.getPagination();
		m.clear();
		m.put("beginRow", String.valueOf(page.getBeginRow()));
		m.put("endRow", String.valueOf(page.getEndRow()));
		m.put("seq", Integer.parseInt(seq));
		m.put("post", pm.postRetrieve(m));
		m.put("hashTag", pm.hashTagList(seq));
		m.put("imageTag", pm.imgTagList(seq));
		m.put("comment", pm.commentList(m));
		m.put("page", page);
		m.remove("beginRow");
		m.remove("endRow");
		m.remove("seq");
		return m;
	};
	
	@Transactional
	public void postUpdate(Map<?, ?> p){
		m.clear();
		pm.postUpdate(p);
		pm.hashTagDelete(p);
		for (Object o : ((String) p.get("keyword")).split(",")) {
			m.put("keyword", o);
			m.put("seq", p.get("seq"));
			pm.hashTagInseart(m);
		}
	};
	
	@Transactional
	public void imageTag(Map<?, ?> p) {
		
	};
	
	/*
	@Transactional
	public void likeInseart(Map<?, ?> p) {};
	@Transactional
	public void likeDelete(Map<?, ?> p){};
	*/
}
