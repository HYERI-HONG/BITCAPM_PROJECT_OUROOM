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
	
	@PostMapping(value="/add/{from}")
	public @ResponseBody int add(@RequestBody Member p, @PathVariable String from) throws IOException{
		if(from.equals("kakao")) {
			System.out.println("getEmail : "+p.getEmail());
			System.out.println("getPassword : "+p.getPassword());
			System.out.println("getAge : "+p.getAge());
			System.out.println("getBirthday : "+p.getBirthday());
			System.out.println("getGender : "+p.getGender());
			System.out.println("getJoin_date : "+p.getJoin_date());
			System.out.println("getNickname : "+p.getNickname());
			System.out.println("getProfile : "+p.getProfile());
		}else {
			p.setAge(calc.calcAge(p.getBirthday()));
			String path = uploadPath+File.separator+"hyeri"+File.separator+"profile"+File.separator;
			/*String savedName = UUID.randomUUID().toString() + "_" + p.getProfile();*/
			File target = new File(path, p.getProfile());
			FileCopyUtils.copy(filedata, target);
		}
		return mbrmapper.insert(p);
	}
	@PostMapping(value="/upload")
	public @ResponseBody String upload(@RequestBody MultipartFile file) throws IOException{
		filedata = file.getBytes();
		//files.transferTo(new File(path+fileName));
		return "";
	}
	@PostMapping(value="/dpcheck")
	public @ResponseBody int dpcheck(@RequestBody Map<String, String> p){
		return mbrmapper.dpck(p);
	}
	@PostMapping(value="/login")
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
