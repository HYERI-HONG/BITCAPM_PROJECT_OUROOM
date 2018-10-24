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
	@RequestMapping("/Items/{page}/{category}")
	public @ResponseBody Map<String,Object> list(@PathVariable int page,@PathVariable String category){
		Map<String,Object> m = new HashMap<>();
		
		int sp = (page*4)+1;
		int ep = sp+3;
		System.out.println("페이지"+page+"///카테고리"+category);
		System.out.println("sp:"+sp+"///"+"ep:"+ep);
		m.put("sp", sp);
		m.put("ep", ep);
		//List<Item> l = 
				
		if(category.equals("0")) {
		m.put("list",itmp.list(m));
		}else {
			m.put("category",category);
			m.put("list",itmp.listSelect(m));
			
		}
		
		return m;
	}
	@RequestMapping("/itemOption/{seq}")
	public @ResponseBody List<Item> option(@PathVariable String seq){
		List<Item> l =itmp.read(seq); 
		
		return l; 
	}
	///itemsC
	@RequestMapping("/itemsC")
	public @ResponseBody Map<String,Object> category(){
		Map<String,Object> m = new HashMap<>();
		
		
		m.put("c1",itmp.c1());
		
		return m; 
	}
	@RequestMapping("/itemsC/{seq}")
	public @ResponseBody Map<String,Object> category2(@PathVariable String seq){
		Map<String,Object> m = new HashMap<>();
		
		m.put("c2",itmp.c2(seq));
		
		return m; 
	}

}
