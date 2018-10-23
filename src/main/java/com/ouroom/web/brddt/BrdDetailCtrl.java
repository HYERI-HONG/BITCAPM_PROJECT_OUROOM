package com.ouroom.web.brddt;

import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;



@RestController
@RequestMapping("/BrdDetail")


public class BrdDetailCtrl {
	static final Logger logger = LoggerFactory.getLogger(BrdDetailCtrl.class);
	@Autowired BrdDetailCtrl brddt;
	@Autowired BrdDetailMapper brddtmapper;
	@Autowired Item item;
	
	@GetMapping(value="/detail/{seq}")
	public  @ResponseBody Map<String, Object> detail(@PathVariable String seq){
		logger.info("======== BrdDetailCtrl ::: detail() =======");

		System.out.println("결과  :: "+seq);
		Map<String, Object> imap = new HashMap<>();
		item=brddtmapper.item_seq(seq);
		System.out.println("넘어온 값 :: "+ item.title);
		imap.put("title", item.title);
		imap.put("price", item.price);
		imap.put("deli", item.delivery);
		imap.put("disc", Double.parseDouble(item.discount)*100);
		imap.put("pho", item.photo);
		imap.put("sale", item.sale_cnt);
		imap.put("store", item.stroe_cnt);
		
		return imap;
	}
}
