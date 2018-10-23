package com.ouroom.web.item;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.ouroom.web.item.Item;

@RestController
public class ItemController {
	
	@Autowired ItemMapper itmp;
	@RequestMapping("/Items/{page}")
	public @ResponseBody Map<String,Object> list(@PathVariable int page){
		Map<String,Object> m = new HashMap<>();
		
		int sp = (page*4)+1;
		int ep = sp+3;
		
		System.out.println("sp:"+sp+"///"+"ep:"+ep);
		m.put("sp", sp);
		m.put("ep", ep);
		//List<Item> l = 
				
		m.put("list",itmp.list(m));
		m.put("count",itmp.count());
		
		return m;
	}
	@RequestMapping("/itemOption/{seq}")
	public @ResponseBody List<Item> option(@PathVariable String seq){
		List<Item> l =itmp.read(seq); 
		System.out.println(l.get(0).getOptions());
		
		return l; 
	}

}
