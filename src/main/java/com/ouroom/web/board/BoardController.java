package com.ouroom.web.board;

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
public class BoardController {
	static final Logger logger = LoggerFactory.getLogger(BoardController.class); 
	@Autowired Board b;
	//@Autowired BoardMapper bm;
	//@Autowired Map<String, Object> m;
	
	@PostMapping("boards/write")
	public @ResponseBody void post(@RequestBody Board p) {
		Util.log.accept("등록하기");
		Util.log.accept(p.toString());
		//map.clear();
		//map.put("brd", param);
		//tx.write(map);
	}
	
	@GetMapping("/boards/{pageNo}")
	public @ResponseBody Map<String, Object> list(@PathVariable String p) {
		Util.log.accept("리스트");
		Util.log.accept(p.toString());
		Map<String,Object> map = null; 
		return map;
	}
	
	@GetMapping("/boards/{pageNo}/{id}")
	public @ResponseBody Board get(@PathVariable String p1, @PathVariable String p2) {
		Util.log.accept("정보");
		Util.log.accept(p1.toString());
		Util.log.accept(p2.toString());
		return b;
	}
	
	@PostMapping("boards/edit")
	public @ResponseBody void edit(@RequestBody Board p) {
		Util.log.accept("수정하기");
		Util.log.accept(p.toString());
	}
	
	@PostMapping("boards/delete")
	public @ResponseBody void delete(@RequestBody Board p) {
		Util.log.accept("삭제하기");
		Util.log.accept(p.toString());
	}
}
