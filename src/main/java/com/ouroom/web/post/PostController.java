package com.ouroom.web.post;

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
	//@Autowired postMapper pm;
	@Autowired Map<String, Object> m;
	@Autowired FileUtil u;
	
	@Resource(name = "uploadPath")
	private String uploadPath;
	
	@PostMapping("/posts/write")
	public @ResponseBody void postWrite(@RequestBody Map<String, String> p) {
		Util.log.accept("등록하기");
		Util.log.accept(p.toString());
		// 트랜잭션때 실행 p.put("image", u.upload.apply(uploadPath));
		//map.put("brd", param);
		//tx.write(map);
	}
	
	@GetMapping("/posts/list/{pageNo}")
	public @ResponseBody Map<String, Object> postList(@PathVariable String pageNo) {
		logger.info("posts/list 진입");
		Util.log.accept("리스트");
		Util.log.accept(pageNo.toString());
		m.put("list", "리스트");
		m.put("page", "페이");
		return m;
	}
	
	@GetMapping("/posts/detail/{postNo}/{id}")
	public @ResponseBody List<?> postGet(@PathVariable String postNo, @PathVariable String id) {
		Util.log.accept("정보");
		Util.log.accept(postNo.toString());
		Util.log.accept(id.toString());
		return null;
	}
	
	@PostMapping("/posts/{postNo}/edit")
	public @ResponseBody String postEdit(@PathVariable String postNo, @RequestBody Map<String, String> p2) {
		Util.log.accept("수정하기");
		Util.log.accept(p2.toString());
		p2.put("image", u.upload.apply(uploadPath));
		return null;
	}
	
	@PostMapping("/posts/remove")
	public @ResponseBody String postRemove(@RequestBody Map<String, String> p) {
		Util.log.accept("삭제하기");
		Util.log.accept(p.toString());
		// 트랜잭션때 실행 u.delete.accept(uploadPath+File.separator+"2018/10/20/8439edf5-7bd4-4ba2-95e9-5a593881cb8d_005.png");
		return null;
	}
	
	@PostMapping("/posts/upload")
	public @ResponseBody void postUplaod(@RequestBody MultipartFile file) throws Exception {
		u.file.accept(file, file.getBytes());
	}
	
	@PostMapping("/cmts/write")
	public @ResponseBody void cmtWrite(@RequestBody Map<String, String> p) {
		Util.log.accept("등록하기");
		Util.log.accept(p.toString());
	}
	
	@GetMapping("/cmts/list/{pageNo}")
	public @ResponseBody Map<String, Object> cmtList(@PathVariable String pageNo) {
		Util.log.accept("리스트");
		Util.log.accept(pageNo.toString());
		return m;
	}
	
	@PostMapping("/cmts/remove")
	public @ResponseBody void cmtRemove(@RequestBody Map<String, String> p) {
		Util.log.accept("삭제하기");
		Util.log.accept(p.toString());
	}
	
	@PostMapping("/tags/write")
	public @ResponseBody void TagWrite(@RequestBody Map<String, String> p) {
		Util.log.accept("등록하기");
		Util.log.accept(p.toString());
	}
	
	@GetMapping("/tags/list/{pageNo}")
	public @ResponseBody Map<String, Object> TagList(@PathVariable String pageNo) {
		Util.log.accept("리스트");
		Util.log.accept(pageNo.toString());
		return m;
	}
	
	@PostMapping("/tags/remove")
	public @ResponseBody void TagRemove(@RequestBody Map<String, String> p) {
		Util.log.accept("삭제하기");
		Util.log.accept(p.toString());
	}
	
	@PostMapping("/likes/write")
	public @ResponseBody void likeWrite(@RequestBody Map<String, String> p) {
		Util.log.accept("등록하기");
		Util.log.accept(p.toString());
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
		return null;
	}
	
	@PostMapping("/likes/remove")
	public @ResponseBody void likeRemove(@RequestBody Map<String, String> p) {
		Util.log.accept("삭제하기");
		Util.log.accept(p.toString());
	}


}