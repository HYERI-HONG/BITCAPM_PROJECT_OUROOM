package com.ouroom.web.post;

import java.io.File;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
public class PostController {
	static final Logger logger = LoggerFactory.getLogger(PostController.class); 
	//@Autowired post p;
	@Autowired PostMapper pm;
	@Autowired FileUtil u;
	@Autowired Pagination page;
	@Autowired TransactionService tx;
	@Autowired Map<String, Object> m;
	@Autowired String s;
	
	@Resource(name = "uploadPath")
	private String uploadPath;
	
	@PostMapping("/posts/write")
	public @ResponseBody String postWrite(@RequestBody Map<String, Object> p) {
		m.clear();
		Util.log.accept("등록하기");
		///// 로그인 구현되면 지우기!!
		p.put("memSeq", 48);
        p.put("regiDate", LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd")));
        p.put("lastUpdate", LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd")));
        p.put("image", s);
        Util.log.accept(p.toString());
		m.put("seq", tx.postInseart(p));
		u.upload.apply(uploadPath+File.separator+"danah"+File.separator+"post");
		s = "";
		return (String) m.get("seq");
	} //로그인 기능 구현후 수정
	
	@GetMapping("/posts/list/{pageNo}")
	public @ResponseBody Map<String, Object> postList(@PathVariable String pageNo) {
		PageProxy pxy = new PageProxy();
		m.clear();
		m.put("pageNo", pageNo.equals("undefined") ? 1 : Integer.parseInt(pageNo));
		m.put("totalRecode", pm.postCount(m));
		m.put("recodeSize", 12);
		pxy.carraryOut(m);
		page = pxy.getPagination();
		m.clear();
		m.put("beginRow", String.valueOf(page.getBeginRow()));
		m.put("endRow", String.valueOf(page.getEndRow()));
		m.put("list", pm.postList(m));
		m.put("page", page.getTotalPage());
		m.remove("beginRow");
		m.remove("endRow");
		return m;
	}
	
	@GetMapping("/posts/search/{query}/{pageNo}")
	public @ResponseBody Map<String, Object> postSearch(@PathVariable List<String> query, @PathVariable String pageNo){
		PageProxy pxy = new PageProxy();
		Util.log.accept("체크:::"+query);
		
		m.clear();
		m.put("pageNo", pageNo.equals("undefined") ? 1 : Integer.parseInt(pageNo));
		m.put("totalRecode", pm.postCount(m));
		m.put("recodeSize", 12);
		pxy.carraryOut(m);
		page = pxy.getPagination();
		m.clear();
		m.put("beginRow", String.valueOf(page.getBeginRow()));
		m.put("endRow", String.valueOf(page.getEndRow()));
		//m.put("list", pm.postSearch(query));
		m.put("page", page.getTotalPage());
		m.remove("beginRow");
		m.remove("endRow");
		return m;
	}
	
	@GetMapping("/posts/{seq}")
	public @ResponseBody Map<?,?> postDetail(@PathVariable String seq) {
		return tx.postDetail(seq);
	}
	
	@SuppressWarnings("unchecked")
	@RequestMapping ("/posts/{seq}/edit")
	public @ResponseBody String postEdit(@PathVariable String seq, @RequestBody Map<String, Object> p) {
        tx.postUpdate(p);
		if(p.get("image").equals(s)) {
			Map<String, Object> a = (Map<String, Object>) pm.postRetrieve(p);
			u.delete.accept(uploadPath+File.separator+"danah"+File.separator+"post"+File.separator
					+Util.rpb.apply((String) a.get("regiDate"))+File.separator+a.get("image"));
			u.upload.apply(uploadPath+File.separator+"danah"+File.separator+"post");
		}
		s = "";
		return seq;
	}
	
	@RequestMapping("/posts/{seq}/delete")
	public @ResponseBody String postDelete(@PathVariable String seq, @RequestBody Map<String, String> p) {
		pm.postDelete(seq);
		u.delete.accept(uploadPath+File.separator+"danah"+File.separator+"post"+File.separator
			+Util.rpb.apply(p.get("lastUpdate"))+File.separator+p.get("image"));
		return "1";
	}
	
	@PostMapping("/posts/upload")
	public @ResponseBody void postUplaod(@RequestBody MultipartFile file) throws Exception {
		Util.log.accept(file.getOriginalFilename());
		s = u.file.apply(file, file.getBytes());
		System.out.println(file.getBytes());
	}
	
	@PostMapping("/comments/write")
	public @ResponseBody Map<String, Object> commentWrite(@RequestBody Map<String, Object> p) {
		Util.log.accept("등록하기");
		///// 로그인 구현되면 지우기!!
		p.put("memSeq", 48);
		Util.log.accept(p.toString());
		pm.commentInseart(p);
		return commentList(String.valueOf(p.get("seq")), "1");
	} //로그인 기능 구현후 수정
	
	@GetMapping("/comments/list/{seq}/{pageNo}")
	public @ResponseBody Map<String, Object> commentList(@PathVariable String seq, @PathVariable String pageNo) {
		PageProxy pxy = new PageProxy();
		m.clear();
		m.put("pageNo", Integer.parseInt(pageNo));
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
		m.put("page", page);
		return m;
	}
	
	@GetMapping("/comments/delete/{pSeq}/{cSeq}")
	public @ResponseBody Map<String, Object> commentDelete(@PathVariable String pSeq, @PathVariable String cSeq) {
		pm.commentDelete(cSeq);
		return commentList(pSeq, "1");
	}
	
	@GetMapping("/hashTags")
	public @ResponseBody List<?> hashTagList() {
		return pm.hashTagSearch();
	}
	
	@PostMapping("/imageTags")
	public @ResponseBody String imageTag(@RequestBody Map<String, Object> p) {
		Util.log.accept("생성하기");
		Util.log.accept(p.toString());
		((TransactionService) tx).imageTag(p);
		return (String) p.get("seq");
	}//수정중
	
	@GetMapping("/imageTags/search")
	public @ResponseBody List<?> imageTagSearch() {
		Util.log.accept("아이템");
		Util.log.accept("확인"+pm.imgTagSearch());
		return pm.imgTagSearch();
	}//수정중
	
	@PostMapping("/likes/write")
	public @ResponseBody void likeWrite(@RequestBody Map<String, String> p) {
		Util.log.accept("등록하기");
		Util.log.accept(p.toString());
		pm.likeInseart(p);
	}//수정중
	
	@PostMapping("/likes/remove")
	public @ResponseBody void likeRemove(@RequestBody Map<String, String> p) {
		Util.log.accept("삭제하기");
		Util.log.accept(p.toString());
		pm.likeDelete(p);
	}//수정중

}