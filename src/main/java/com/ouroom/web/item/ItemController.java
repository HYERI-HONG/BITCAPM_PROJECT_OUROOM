package com.ouroom.web.item;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.ouroom.web.item.Item;

@RestController
public class ItemController {
	
	@Autowired ItemMapper itmp;
	@RequestMapping("/Items")
	public @ResponseBody Map<String,Object> list(){
		Map<String,Object> m = new HashMap<>();
		List<Item> l = itmp.list();
				
		m.put("list",l);
		m.put("count",itmp.count());
		
		return m;
	}

}
