package com.ouroom.web.item;

import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
public class ItemController {
	
	@Resource(name = "uploadPath")
	private String uploadPath;
	private byte[] filedata;
	
	@Autowired ItemMapper itmp;
	@RequestMapping("/Items/{page}/{category}/{ag}/{search}")
	public @ResponseBody Map<String,Object> list(@PathVariable int page,@PathVariable String category,
			@PathVariable String ag,@PathVariable String search){
		Map<String,Object> m = new HashMap<>();
		int sp = (page*4)+1;
		int ep = sp+3;
		m.put("sp", sp);
		m.put("ep", ep);
				
		if(search.equals("0")) {
		if(category.equals("0")) {
		m.put("ag",ag);
		m.put("list",itmp.list(m));
		}else {
			m.put("ag", ag);
			m.put("category",category);
			m.put("list",itmp.listSelect(m));
		}
			}else { 
				m.put("ag", ag);
				m.put("search", search);
				m.put("list",itmp.listsearch(m));
			}
		
		return m;
	}
	@RequestMapping("/itemOption/{seq}")
	public @ResponseBody List<Item> option(@PathVariable String seq){
		return itmp.read(seq); 
	}
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
	@Transactional
	@PostMapping("/item/add")
	public @ResponseBody void add(@RequestBody Map<String,String> seq)throws Exception{
		int dis = Integer.parseInt(seq.get("discount"));
		int pri = Integer.parseInt(seq.get("price"));
		int sum = pri-(pri*(dis))/100;
		seq.put("sum",sum+"");
		
		String path = uploadPath+"/jun/"+seq.get("categoryPath")+"/";
		
		File target = new File(path, seq.get("photo"));
		FileCopyUtils.copy(filedata, target);
		
		seq.put("photo",seq.get("photo").split("\\.")[0]);
		seq.put("store_cnt", ((int)(Math.random()*10+1))+"");
		
		itmp.itemAdd(seq);
		seq.put("seq",itmp.ItemPk(seq.get("title")));
		String[] option=seq.get("option").split("/");
		for(int i=0;i<option.length;i++) {
			seq.put("options",option[i]);
			itmp.insertOption(seq);
		}
		seq.put("img", ((int)(Math.random()*5))+"_1");
		itmp.insertItemPost(seq);
	}
	@PostMapping("/cart/add")
	public @ResponseBody void cartAdd(@RequestBody Map<String,String> m){
		
		String[] is=m.get("name").split("/");
		String[] count=m.get("count").split("/");
		
		
		for(int i =0; i<is.length;i++) {
			m.put("itemSeq",is[i]);
			m.put("itemCount",count[i]);
			itmp.cartAdd(m);
		}
		
	}
	@RequestMapping("/cart/list/{userid}")
	public @ResponseBody List<Item> cartList(@PathVariable String userid){
		return itmp.cartList(userid); 
	}

	@RequestMapping("/cart/selectOne/{item_seq}")
	public @ResponseBody Item cartList2(@PathVariable String item_seq){
		return itmp.selectOne(item_seq);
	}
	@RequestMapping("/cartlist/option/{item_seq}/{userid}")
	public @ResponseBody List<Item> cartOption(@PathVariable String userid,@PathVariable String item_seq){
		Map<String,Object> m = new HashMap<>();
		m.put("userid",userid);
		m.put("item_seq",item_seq);
		return itmp.cartOption(m); 
	}
	@RequestMapping("/cart/delete/{item_seq}/{userid}")
	public @ResponseBody void cartDelete(@PathVariable String item_seq,@PathVariable String userid){
		Map<String,Object> m = new HashMap<>();
		m.put("item_seq", item_seq);
		m.put("mem_seq", userid);
		itmp.cartDelete(m);
		
	}
	@PostMapping("/cart/buy")
	public @ResponseBody void cartBuy(@RequestBody Map<String,List<Item>> m){
		Map<String,Object> m2 = new HashMap<>();
		for(int i =0; i<((List) m.get("cop")).size();i++) {
			itmp.purC( m.get("cop").get(i));
			m2.put("mem_seq",m.get("cop").get(i).getMem_seq());
			m2.put("item_seq",m.get("cop").get(i).getItem_seq());
			m2.put("cnt",m.get("cop").get(i).getCnt());
			itmp.updateItem(m2);
			itmp.cartDelete(m2);
		}
		
	}
	@RequestMapping("/cart/allbuy/{mem_seq}")
	public @ResponseBody void allBuy(@PathVariable String mem_seq){
		List<Item> list = itmp.cartAll(mem_seq);
		Map<String,Object> m = new HashMap<>();
		for(int i =0; i<list.size();i++) {
			itmp.purC(list.get(i));
			m.put("mem_seq", list.get(i).getMem_seq());
			m.put("item_seq", list.get(i).getItem_seq());
			m.put("cnt",list.get(i).getCnt());
			itmp.updateItem(m);
			itmp.cartDelete(m);
		}
		
		
	}
	@PostMapping("/item/upload")
	public void upload(@RequestBody MultipartFile file) throws Exception{
		filedata = file.getBytes();
	}


}
