package com.ouroom.web.stat;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang.ArrayUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StatCtrl {
	@Autowired StatMapper sm;
	@Autowired HashMap<String, Object> mm;
	
	@RequestMapping("/stats/smmChart/{today}/{beforeweek}")
	@Transactional
	public Map<?, ?> smmChart(@PathVariable String today, @PathVariable String beforeweek) {
		mm.put("메인stDSmm", beforeweek);
		mm.put("메인enDSmm", today);
		mm.put("selectDSmm", today.substring(0, today.indexOf("년"))+"-"+today.substring(today.indexOf(" ")+1,today.indexOf("월"))+"-"+today.substring(today.lastIndexOf(" ")+1,today.indexOf("일")));
		smmvstlc(beforeweek, today);
		smmPost(today);
		smmJoin(today);
		mm.put("smmvstlc", sm.drawsvlc(mm));
		mm.put("smmvstcc", sm.drawsvcc(mm));
		mm.put("totalSalePerDay", sm.totalSalePerDay(mm));
		mm.put("bestSellerPerDay", sm.bestSellerPerDay(mm));
		mm.put("genderRatio", sm.getGenderratio());
		return mm;
	}
	@RequestMapping("/stats/smmvstlc/{stDate}/{enDate}")
	@Transactional
	public Map<?, ?> smmvstlc(@PathVariable String stDate,@PathVariable String enDate) {
		mm.put("stDSmm",stDate.substring(0, stDate.indexOf("년"))+"-"+stDate.substring(stDate.indexOf(" ")+1,stDate.indexOf("월"))+"-"+stDate.substring(stDate.lastIndexOf(" ")+1,stDate.indexOf("일")));
		mm.put("enDSmm",enDate.substring(0, enDate.indexOf("년"))+"-"+enDate.substring(enDate.indexOf(" ")+1,enDate.indexOf("월"))+"-"+enDate.substring(enDate.lastIndexOf(" ")+1,enDate.indexOf("일")));
		mm.put("smmvstlc", sm.drawsvlc(mm));
		return mm; 
	}
	@RequestMapping("/stats/smmPost/{postSelectDate}")
	@Transactional
	public Map<?, ?> smmPost(@PathVariable String postSelectDate) {
		mm.put("postStartDate",postSelectDate.substring(0, postSelectDate.indexOf("년"))+"-"+postSelectDate.substring(postSelectDate.indexOf(" ")+1,postSelectDate.indexOf("월"))+"-"+postSelectDate.substring(postSelectDate.lastIndexOf(" ")+1,postSelectDate.indexOf("일")));
		int ryu =Integer.parseInt((postSelectDate.substring(postSelectDate.indexOf(" ")+1,postSelectDate.indexOf("월"))));
		int jae =Integer.parseInt(postSelectDate.substring(postSelectDate.lastIndexOf(" ")+1,postSelectDate.indexOf("일")))-1;
		if(ryu==1&&jae==0||ryu==2&&jae==0||ryu==4&&jae==0||ryu==6&&jae==0||ryu==8&&jae==0||ryu==9&&jae==0||ryu==11&&jae==0) {
			ryu=ryu-1; jae=31; if(ryu==0) {ryu=12;}
		}else if(ryu==5&&jae==0||ryu==7&&jae==0||ryu==10&&jae==0||ryu==12&& jae==0){
			ryu=ryu-1; jae=30;
		}else if(ryu==3&&jae==0){ryu=ryu-1; jae=28;}
		mm.put("postStartDateBefore",postSelectDate.substring(0, postSelectDate.indexOf("년"))+"-"+String.format("%02d", ryu)+"-"+String.format("%02d", jae));
		mm.put("totalPostPerDay", sm.totalPostPerDay(mm));

		mm.put("totalPostPerDayBefore", sm.totalPostPerDayBefore(mm));
		return mm;
	}
	@RequestMapping("/stats/smmJoin/{joinSelectDate}")
	@Transactional
	public Map<?, ?> smmJoin(@PathVariable String joinSelectDate) {
		mm.put("joinStartDate",joinSelectDate.substring(0, joinSelectDate.indexOf("년"))+"-"+joinSelectDate.substring(joinSelectDate.indexOf(" ")+1,joinSelectDate.indexOf("월"))+"-"+joinSelectDate.substring(joinSelectDate.lastIndexOf(" ")+1,joinSelectDate.indexOf("일")));
		int ryu =Integer.parseInt((joinSelectDate.substring(joinSelectDate.indexOf(" ")+1,joinSelectDate.indexOf("월"))));
		int jae =Integer.parseInt(joinSelectDate.substring(joinSelectDate.lastIndexOf(" ")+1,joinSelectDate.indexOf("일")))-1;
		if(ryu==1&&jae==0||ryu==2&&jae==0||ryu==4&&jae==0||ryu==6&&jae==0||ryu==8&&jae==0||ryu==9&&jae==0||ryu==11&&jae==0) {
			ryu=ryu-1; jae=31; if(ryu==0) {ryu=12;}
		}else if(ryu==5&&jae==0||ryu==7&&jae==0||ryu==10&&jae==0||ryu==12&& jae==0){
			ryu=ryu-1; jae=30;
		}else if(ryu==3&&jae==0){ryu=ryu-1; jae=28;}
		mm.put("joinStartDateBefore",joinSelectDate.substring(0, joinSelectDate.indexOf("년"))+"-"+String.format("%02d", ryu)+"-"+String.format("%02d", jae));
		mm.put("totalJoinPerDay", sm.totalJoinPerDay(mm));
		mm.put("totalJoinPerDayBefore", sm.totalJoinPerDayBefore(mm));
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
	
	@GetMapping("/stats/wrdcld")
	@Transactional
	public Map<?, ?> wrdcld() {
		mm.put("wrdcld", sm.drawwrdcld());
		return mm;
	}
}
