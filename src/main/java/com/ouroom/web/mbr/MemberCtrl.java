package com.ouroom.web.mbr;

import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;
import javax.annotation.Resource;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/member")
public class MemberCtrl {
	
	static final Logger logger = LoggerFactory.getLogger(MemberCtrl.class);
	@Autowired Member member;
	@Autowired MemberMapper mbrmapper;
	@Autowired Calc calc;

	//사진 업로드------------------------------
	@Resource(name = "uploadPath")
	private String uploadPath;
	private byte[] filedata;
	//--------------------------------------
	
	@PostMapping("/add1")
	public @ResponseBody String add1(@RequestBody Map<String,String> m) throws Exception{
		Member p = new Member();
		p.setAge(calc.calcAge(m.get("birthday")));
		p.setBirthday(m.get("birthday"));
		p.setGender(m.get("gender"));
		p.setEmail(m.get("email"));
		p.setNickname(m.get("nickname"));
		p.setPassword(m.get("password"));
		p.setProfile(m.get("profile"));
		p.setJoin_date(m.get("join_date"));
		
		String path = uploadPath + "/hyeri/profile/";
		/* String savedName = UUID.randomUUID().toString() + "_" + p.getProfile(); */
		File target = new File(path, p.getProfile());
		FileCopyUtils.copy(filedata, target);
		return (mbrmapper.insert(p)==1?"SUCCESS":"FAIL");
	}
	@PostMapping("/add2")
	public @ResponseBody String add2(@RequestBody Map<String,String> m) throws Exception{
		Member p = new Member();
		p.setAge(m.get("age"));
		p.setBirthday(m.get("birthday"));
		p.setGender(m.get("gender"));
		p.setEmail(m.get("email"));
		p.setNickname(m.get("nickname"));
		p.setPassword(m.get("password"));
		p.setProfile(m.get("profile"));
		p.setJoin_date(m.get("join_date"));
		
		return (mbrmapper.insert(p)==1?"SUCCESS":"FAIL");
	}
	@PostMapping("/upload")
	public @ResponseBody String upload(@RequestBody MultipartFile file) throws Exception{
		filedata = file.getBytes();
		//files.transferTo(new File(path+fileName));
		return "";
	}
	@PostMapping("/dpcheck")
	public @ResponseBody int dpcheck(@RequestBody Map<String, String> p){
		return mbrmapper.dpck(p);
	}
	@PostMapping("/login")
	public @ResponseBody Map<String, Object> login(@RequestBody Member p){
		String pwValid="WRONG";
		String idValid="WRONG";
		
		Map<String, Object> map = new HashMap<>();
		
		if(mbrmapper.count(p)!=0) {
			idValid="CORRECT";
			Function<Member, Member> f = (t)->{return mbrmapper.get(t);};
			member = f.apply(p);
			pwValid=(member!=null)? "CORRECT":"WRONG";
			member =(member!=null)?member: new Member();
		}
		map.put("idValid", idValid);
		map.put("pwValid", pwValid);
		map.put("value", member);
		return map;
	}
}
