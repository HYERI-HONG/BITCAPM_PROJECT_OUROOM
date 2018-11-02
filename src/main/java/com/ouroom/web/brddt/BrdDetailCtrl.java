package com.ouroom.web.brddt;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.ouroom.web.item.Item;
import com.ouroom.web.brddt.Review;

@RestController
@RequestMapping("/BrdDetail")
public class BrdDetailCtrl {
	static final Logger logger = LoggerFactory.getLogger(BrdDetailCtrl.class);
	@Autowired BrdDetailCtrl brddt;
	@Autowired BrdDetailMapper brddtmapper;
	@Autowired Item item;
	@Autowired Review review;
	@Autowired Pagination1 page;
	
	@GetMapping(value="/detail/{seq}")
	public  @ResponseBody Map<String, Object> detail(@PathVariable String seq){
		item=brddtmapper.item_seq(seq);
		List<Item> item2=brddtmapper.item_opt(seq);
		Map<String, Object> imap = new HashMap<>();
		imap.put("title", item.getTitle());
		imap.put("price", item.getPrice());
		imap.put("deli", item.getDelivery());
		imap.put("disc",item.getDiscount());
		imap.put("pho", item.getPhoto());
		imap.put("sale", item.getSale_cnt());
		imap.put("store", item.getStroe_cnt());
		imap.put("sum", item.getSum());
		imap.put("options", item2);
		
		return imap;
	}
	@GetMapping(value="/review/{pageNo}")
	public @ResponseBody Map<String, Object> review(@PathVariable String pageNo){
		Map<String, Object> rmap = new HashMap<>();
		rmap.put("pageNumber", pageNo);
		rmap.put("rowCount", brddtmapper.rev_cnt());
		PageProxy1 pxy = new PageProxy1();
		pxy.carryOut(rmap);
		Pagination1 page = pxy.getPagination();
		rmap.clear(); 
		rmap.put("page", page);		
		rmap.put("beginRow", page.beginRow);
		rmap.put("endRow", page.endRow);
		
		rmap.put("list", brddtmapper.review(rmap));
		
		return rmap;
	}
	@PostMapping(value="/write")
	public void write(@RequestBody Review rev){
		Map<String, Object> wmap = new HashMap<>();
		wmap.put("contents",rev.getContents());
		wmap.put("regi",rev.getRegi_date());
		wmap.put("img",rev.getImage());
		wmap.put("nickname",rev.getNickname());
		brddtmapper.rev_insert(rev);

	}
	@GetMapping(value="/delete/{seq}")
	public void delete(@PathVariable String seq) {
		brddtmapper.rev_delete(seq);
	}
	
	
	
}
