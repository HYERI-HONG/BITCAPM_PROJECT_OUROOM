package com.ouroom.web.mbr;

import java.util.HashMap;
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

@RestController
@RequestMapping("/member")
public class MemberCtrl {
	
	static final Logger logger = LoggerFactory.getLogger(MemberCtrl.class);
	@Autowired Member member;
	@Autowired MemberMapper mbrmapper;
	@Autowired Calc calc;
	
	@PostMapping(value="/add")
	public  @ResponseBody Map<String, Object> add(@RequestBody Member p){
		logger.info("======== MemberController ::: add() =======");
		System.out.println("넘어온 값"+p.toString());
		System.out.println("나이계산 :: "+calc.calcAge(p.getBirthday()));
		//System.out.println("결과 : "+mbrmapper.count());
		Map<String, Object> map = new HashMap<>();
		return map;
	}
	

}
