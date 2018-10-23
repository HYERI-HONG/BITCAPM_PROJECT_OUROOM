package com.ouroom.web.board;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.ouroom.web.item.Item;

@RestController
public class BoardController {
	
	@Autowired BoardMapper brdmp;
	@RequestMapping("/boards")
	public @ResponseBody Map<String,Object> list(){
		Map<String,Object> m = new HashMap<>();
		List<Item> l = brdmp.list();
		 
		 System.out.println("타이틀"+l.get(1).getTitle());
		 
		m.put("list",brdmp.list());
		m.put("count",brdmp.count());
		
		return m;
	}

}
