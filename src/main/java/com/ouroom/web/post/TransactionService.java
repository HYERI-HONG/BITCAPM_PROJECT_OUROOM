package com.ouroom.web.post;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service @Transactional
public class TransactionService {
	@Autowired PostMapper pm;
	@Autowired Pagination page;
	@Autowired Map<String, Object> m;
	
	@SuppressWarnings("unchecked")
	@Transactional
	public String postInseart(Map<?, ?> p) {
		int i;
		m = new HashMap<>();
		pm.postInsert(p);
		m = (Map<String, Object>) pm.postRetrieve(p);
		i = (int) m.get("seq");
		m.clear();
		for (Object o : (Util.cs.apply(p.get("keyword"))).split(",")) {
			m.put("keyword", o);
			m.put("seq", i);
			pm.hashTagInsert(m);
		}
		return Util.cs.apply(i);
	};
	
	@SuppressWarnings("unchecked")
	@Transactional
	public Map<?, ?> postDetail(String seq){
		PageProxy pxy = new PageProxy();
		m = new HashMap<>();
		m.put("seq", Util.ci.apply(seq));
		Map<String, Object> a = (Map<String, Object>) pm.postRetrieve(m);
		a.put("viewCnt", (int) a.get("viewCnt")+1);
		pm.postUpdate(a);
		m.put("pageNo", 1);
		m.put("totalRecode", pm.commentCount(m));
		m.put("recodeSize", 3);
		pxy.carraryOut(m);
		page = pxy.getPagination();
		m.clear();
		m.put("beginRow", page.getBeginRow());
		m.put("endRow", page.getEndRow());
		m.put("seq", Util.ci.apply(seq));
		m.put("post", pm.postRetrieve(m));
		m.put("hashTag", pm.hashTagList(seq));
		m.put("imageTag", pm.imgTagList(seq));
		m.put("comment", pm.commentList(m));
		m.put("page", page);
		m.put("list", pm.postOthers((int)((Map<String, Object>) m.get("post")).get("memSeq")));
		m.remove("beginRow");
		m.remove("endRow");
		m.remove("seq");
		return m;
	};
	
	@Transactional
	public void postUpdate(Map<?, ?> p){
		m = new HashMap<>();
		pm.postUpdate(p);
		pm.hashTagDelete(p);
		if(p.get("keyword")!=null && !Util.cv.test(Util.cs.apply(p.get("keyword")), "")) {
			for (Object o : (Util.cs.apply(p.get("keyword")).split(","))) {
				m.put("keyword", o);
				m.put("seq", p.get("seq"));
				pm.hashTagInsert(m);
			}
		}
	};
	
	@SuppressWarnings("unchecked")
	@Transactional
	public void imgTag(Map<?, ?> p) {
		m = new HashMap<>();
		m.put("seq", p.get("seq"));
		for(String s : (List<String>) p.get("item")) {
			m.put("itemTitle", s.split(",")[0]);
			m.put("position", s.split(",")[1]+","+s.split(",")[2]);
			m.put("itemSeq", s.split(",")[3]);
			m.put("postSeq", p.get("seq"));
			if(s.split(",").length>4) {m.put("seq", s.split(",")[4]); pm.imgTagUpdate(m);}
			else{pm.imgTagInsert(m);}
		}
		if(p.get("destroy")!="") {
			for (String o : ((String) p.get("destroy")).split(",")) {
				Map<String, Object> a = new HashMap<>();
				a.put("seq", Util.ci.apply(o));
				pm.imgTagDelete(o);
			}
		}
	};
	
	@SuppressWarnings("unchecked")
	@Transactional
	public Map<?,?> like(Map<?, ?> p) {
		m = new HashMap<>();
		Map<String, Object> a = new HashMap<>();
		a.put("seq", p.get("seq"));
		String s = Util.cs.apply(p.get("seq"));
		if(pm.likeRetrieve(p)==null) {
			pm.likeInsert(p);
			m = (Map<String, Object>) pm.postRetrieve(a);
			m.put("likeCnt", (int)m.get("likeCnt")+1);
			pm.postUpdate(m);
		} else {
			m = (Map<String, Object>) pm.likeRetrieve(p);
			if(Util.cn.test((int) m.get("check"),0)){
				m.put("check", 1);
				pm.likeUpdate(m);
				m = (Map<String, Object>) pm.postRetrieve(a);
				m.put("likeCnt", (int)m.get("likeCnt")+1);
				pm.postUpdate(m);
			}else {
				m.put("check", 0);
				pm.likeUpdate(m);
				m = (Map<String, Object>) pm.postRetrieve(a);
				m.put("likeCnt", (int)m.get("likeCnt")-1);
				pm.postUpdate(m);
			}
		}
		m = (Map<String, Object>) pm.likeRetrieve(p);
		a.put("check", m.get("check"));
		m = (Map<String, Object>) pm.postRetrieve(a);
		a.put("likeCnt", m.get("likeCnt"));
		a.remove("seq");
		return a;
	};
	
}
