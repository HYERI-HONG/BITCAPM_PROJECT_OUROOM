package com.ouroom.web.post;

import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PostController {
	static final Logger logger = LoggerFactory.getLogger(PostController.class); 
	//@Autowired post b;
	//@Autowired postMapper bm;
	//@Autowired Map<String, Object> m;
	
	@PostMapping("/posts/write")
	public @ResponseBody void write(@RequestBody Post p) {
		Util.log.accept("등록하기");
		Util.log.accept(p.toString());
		//map.clear();
		//map.put("brd", param);
		//tx.write(map);
	}
	
	@GetMapping("/posts/list/{pageNo}")
	public @ResponseBody Map<String, Object> list(@PathVariable String p) {
		logger.info("posts/list 진입 .. {} "," 들어옴 ");
		Util.log.accept("리스트");
		Util.log.accept(p.toString());
		Map<String,Object> map = null; 
		return map;
	}
	
	@GetMapping("/posts/detail/{pageNo}/{id}")
	public @ResponseBody Post get(@PathVariable String p1, @PathVariable String p2) {
		Util.log.accept("정보");
		Util.log.accept(p1.toString());
		Util.log.accept(p2.toString());
		return null;
	}
	
	@PostMapping("/posts/edit")
	public @ResponseBody void edit(@RequestBody Post p) {
		Util.log.accept("수정하기");
		Util.log.accept(p.toString());
	}
	
	@PostMapping("/posts/remove")
	public @ResponseBody void delete(@RequestBody Post p) {
		Util.log.accept("삭제하기");
		Util.log.accept(p.toString());
	}
}
