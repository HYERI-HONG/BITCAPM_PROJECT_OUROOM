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
	
	@Resource(name = "uploadPath")
	private String uploadPath;
	
	@PostMapping("/posts/write")
	public @ResponseBody String postWrite(@RequestBody Map<String, String> p) {
		Util.log.accept("등록하기");
		Util.log.accept(p.toString());
        p.put("regeDate", LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd")));
		tx.postInseart(p);
		u.upload.apply(uploadPath+File.separator+"danah"+File.separator+"post");
		return null;
	}
	
	@GetMapping("/posts/list/{pageNo}")
	public @ResponseBody Map<String, Object> postList(@PathVariable String pageNo) {
		PageProxy pxy = new PageProxy();
		m.clear();
		Util.log.accept(pageNo);
		m.put("pageNo", pageNo.equals("undefined") ? 1 : Integer.parseInt(pageNo));
		m.put("totalRecode", pm.postCount(m));
		m.put("recodeSize", 12);
		pxy.carraryOut(m);
		page = pxy.getPagination();
		m.clear();
		m.put("beginRow", String.valueOf(page.getBeginRow()));
		m.put("endRow", String.valueOf(page.getEndRow()));
		m.put("list", pm.postList(m));
		m.remove("beginRow");
		m.remove("endRow");
		m.put("page", page);
		return m;
	}
	
	@GetMapping("/posts/detail/{seq}")
	public @ResponseBody Map<?,?> postGet(@PathVariable String seq) {
		m.clear();
		return tx.postDetail(seq);
	}
	
	@PostMapping("/posts/{postNo}/edit")
	public @ResponseBody String postEdit(@PathVariable String postNo, @RequestBody Map<String, String> p2) {
		Util.log.accept("수정하기");
		Util.log.accept(p2.toString());
		tx.postUpdate(m);
		p2.put("image", u.upload.apply(uploadPath+File.separator+"danah"+File.separator+"post"));
		return null;
	}
	
	@PostMapping("/posts/remove")
	public @ResponseBody String postRemove(@RequestBody Map<String, String> p) {
		Util.log.accept("삭제하기");
		Util.log.accept(p.toString());
		tx.postDelete(p);
		u.delete.accept(uploadPath+File.separator+"danah"+File.separator+"post"+File.separator+"2018/10/20/8439edf5-7bd4-4ba2-95e9-5a593881cb8d_005.png");
		return null;
	}
	
	@PostMapping("/posts/upload")
	public @ResponseBody void postUplaod(@RequestBody MultipartFile file) throws Exception {
		Util.log.accept(file.getOriginalFilename());
		u.file.accept(file, file.getBytes());
	}
	
	@PostMapping("/comments/write")
	public @ResponseBody void cmtWrite(@RequestBody Map<String, String> p) {
		Util.log.accept("등록하기");
		Util.log.accept(p.toString());
		pm.commentInseart(p);
	}
	
	@GetMapping("/comments/list/{seq}/{pageNo}")
	public @ResponseBody Map<String, Object> cmtList(@PathVariable String seq, @PathVariable String pageNo) {
		PageProxy pxy = new PageProxy();
		Util.log.accept("리스트");
		Util.log.accept(pageNo.toString());
		m.clear();
		m.put("pageNo", Integer.parseInt(pageNo));
		m.put("seq", Integer.parseInt(seq));
		m.put("totalRecode", pm.commentCount(m));
		Util.log.accept("확인 comment : "+m.get("totalRecode"));
		m.put("recodeSize", 3);
		pxy.carraryOut(m);
		page = pxy.getPagination();
		m.clear();
		m.put("beginRow", String.valueOf(page.getBeginRow()));
		m.put("endRow", String.valueOf(page.getEndRow()));
		m.put("seq", Integer.parseInt(seq));
		Util.log.accept("확인 : "+m.toString());
		m.put("comment", pm.commentList(m));
		Util.log.accept("4차 확인 comment : "+m.get("comment"));
		m.remove("beginRow");
		m.remove("endRow");
		m.put("page", page);
		return m;
	}
	
	@PostMapping("/comments/remove")
	public @ResponseBody void cmtRemove(@RequestBody Map<String, String> p) {
		Util.log.accept("삭제하기");
		Util.log.accept(p.toString());
		pm.commentDelete(p);
	}
	
	@PostMapping("/hashTags/write")
	public @ResponseBody void TagWrite(@RequestBody Map<String, String> p) {
		Util.log.accept("등록하기");
		Util.log.accept(p.toString());
		pm.hashTagInseart(p);
	}
	
	@GetMapping("/hashTags/search")
	public @ResponseBody List<?> TagList() {
		m.clear();
		return pm.hashTagSearch();
	}
	
	@PostMapping("/hashTags/remove")
	public @ResponseBody void TagRemove(@RequestBody Map<String, String> p) {
		Util.log.accept("삭제하기");
		Util.log.accept(p.toString());
		pm.hashTagDelete(p);
	}
	
	@PostMapping("/likes/write")
	public @ResponseBody void likeWrite(@RequestBody Map<String, String> p) {
		Util.log.accept("등록하기");
		Util.log.accept(p.toString());
		pm.likeInseart(p);
	}
	
	@GetMapping("/likes/list/{pageNo}")
	public @ResponseBody Map<String, Object> likeList(@PathVariable String pageNo) {
		Util.log.accept("리스트");
		Util.log.accept(pageNo.toString());
		return m;
	}
	
	@GetMapping("/likes/detail/{tagNo}/{id}")
	public @ResponseBody Map<String, Object> likeGet(@PathVariable String tagNo, @PathVariable String id) {
		Util.log.accept("정보");
		Util.log.accept(tagNo.toString());
		Util.log.accept(id.toString());
		pm.likeRetrieve(m);
		return null;
	}
	
	@PostMapping("/likes/remove")
	public @ResponseBody void likeRemove(@RequestBody Map<String, String> p) {
		Util.log.accept("삭제하기");
		Util.log.accept(p.toString());
		pm.likeDelete(p);
	}


}