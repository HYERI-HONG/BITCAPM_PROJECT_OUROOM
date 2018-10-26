package com.ouroom.web.stat;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StatCtrl {
	@Autowired StatMapper sm;
	@Autowired HashMap<String, Object> mm;
	
	@GetMapping("/stats/smmChart")
	@Transactional
	public Map<?, ?> smmChart() {
		mm.put("stDSmm", "2018-11-09");
		mm.put("enDSmm", "2018-11-15");
		mm.put("postStartDate","2018-10-02" );
		mm.put("selectDSmm","2018-11-15" );
		
		mm.put("smmvstlc", sm.drawsvlc(mm));
		mm.put("smmvstcc", sm.drawsvcc(mm));
		mm.put("smmvsttvc", sm.extrsvvc(mm));
		mm.put("smmvsttjc", sm.extrsvjc(mm));
		mm.put("totalSalePerDay", sm.totalSalePerDay(mm));
		mm.put("bestSellerPerDay", sm.bestSellerPerDay(mm));
		return mm;
	}
	
	@GetMapping("/stats/vstChart")
	@Transactional
	public Map<?, ?> vstChart() {
		mm.put("stDVst", "2018-11-01");
		mm.put("enDVst", "2018-11-15");
		mm.put("vstac", sm.drawvstac(mm));
		mm.put("vstt", sm.extrvstt(mm));
		return mm;
	}
	
	@GetMapping("/stats/sbaChart")
	@Transactional
	public Map<?, ?> sbaChart() {
		mm.put("sbalc", sm.drawsbalc());
		return mm;
	}
	
	@GetMapping("/stats/ctgrChart")
	@Transactional
	public Map<?, ?> ctgrChart() {
		mm.put("stDCtgr", "2018-11-01");
		mm.put("enDCtgr", "2018-11-15");
		mm.put("ctgrtco", sm.drawctgrtco(mm));
		mm.put("ctgrtct", sm.drawctgrtct(mm));
		return mm;
	}
	@GetMapping("/stats/mbrChart")
	@Transactional
	public Map<?, ?> mbrChart() {
		mm.put("mbrpc", sm.drawmbrpc());
		mm.put("mbrbc", sm.drawmbrbc());
		return mm;
	}
	
	@GetMapping("/stats/abbaChart")
	@Transactional
	public Map<?, ?> abbaChart() {
		mm.put("abbasc", sm.drawabbasc());
		return mm;
	}
	
	
	
}
