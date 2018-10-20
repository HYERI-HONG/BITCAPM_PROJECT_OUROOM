package com.ouroom.web.post;

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
	public @ResponseBody void write(@RequestBody Map<String, String> p) {
		Util.log.accept("등록하기");
		Util.log.accept(p.toString());
		// 트랜잭션때 실행 p.put("image", u.upload.apply(uploadPath));
		//map.put("brd", param);
		//tx.write(map);
	}
	
	@GetMapping("/posts/list/{pageNo}")
	public @ResponseBody Map<String, Object> list(@PathVariable String pageNo) {
		logger.info("posts/list 진입 .. {} ");
		Util.log.accept("리스트");
		Util.log.accept(pageNo.toString());
		m.put("list", "리스트");
		m.put("page", "페이");
		return m;
	}
	
	@GetMapping("/posts/detail/{postNo}/{id}")
	public @ResponseBody Post get(@PathVariable String postNo, @PathVariable String id) {
		Util.log.accept("정보");
		Util.log.accept(postNo.toString());
		Util.log.accept(id.toString());
		return null;
	}
	
	@PostMapping("/posts/{postNo}/edit")
	public @ResponseBody String edit(@PathVariable String postNo, @RequestBody Map<String, String> p2) {
		Util.log.accept("수정하기");
		Util.log.accept(p2.toString());
		p2.put("image", u.upload.apply(uploadPath));
		return null;
	}
	
	@PostMapping("/posts/remove")
	public @ResponseBody String delete(@RequestBody Map<String, String> p) {
		Util.log.accept("삭제하기");
		Util.log.accept(p.toString());
		// 트랜잭션때 실행 u.delete.accept(uploadPath+File.separator+"2018/10/20/8439edf5-7bd4-4ba2-95e9-5a593881cb8d_005.png");
		return null;
	}
	
	@PostMapping("/posts/upload")
	public @ResponseBody void uplaod(@RequestBody MultipartFile file) throws Exception {
		u.file.accept(file, file.getBytes());
	}
	
}