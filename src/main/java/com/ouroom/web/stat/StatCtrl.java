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
		mm.put("stD", "2018-11-09");
		mm.put("enD", "2018-11-15");
		mm.put("postStartDate","2018-10-02" );
		mm.put("selectD","2018-11-15" );
		
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
		mm.put("stD", "2018-11-01");
		mm.put("enD", "2018-11-15");
		mm.put("vstac", sm.drawvstac(mm));
		mm.put("vstt", sm.extrvstt(mm));
		return mm;
	}
	
	@GetMapping("/stats/sbaChart")
	@Transactional
	public Map<?, ?> sbaChart() {
		mm.put("stD", "2018-11-01");
		mm.put("enD", "2018-11-15");
		mm.put("vstac", sm.drawvstac(mm));
		mm.put("vstt", sm.extrvstt(mm));
		return mm;
	}
	
	
	
}
