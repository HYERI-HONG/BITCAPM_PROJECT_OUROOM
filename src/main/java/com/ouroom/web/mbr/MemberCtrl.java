package com.ouroom.web.mbr;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;

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
import org.springframework.web.multipart.MultipartFile;

import com.ouroom.web.post.FileUtil;

@RestController
@RequestMapping("/member")
public class MemberCtrl {
	
	static final Logger logger = LoggerFactory.getLogger(MemberCtrl.class);
	@Autowired Member member;
	@Autowired MemberMapper mbrmapper;
	@Autowired Calc calc;
	//사진 업로드
	@Autowired FileUtil f;
	
	@Resource(name = "uploadPath")
	private String uploadPath;
	
	@PostMapping(value="/add")
	public  @ResponseBody Map<String, Object> add(@RequestBody Member p){
		logger.info("======== MemberController ::: add() =======");
		System.out.println("넘어온 값"+p.toString());
		System.out.println("나이계산 :: "+calc.calcAge(p.getBirthday()));
		//System.out.println("결과 : "+mbrmapper.count());
		Map<String, Object> map = new HashMap<>();
		return map;
	}
	@PostMapping(value="/upload/{name}")
	public  @ResponseBody String upload(@RequestBody MultipartFile file, @PathVariable String name) throws IOException{
		logger.info("======== MemberController ::: upload() =======");
		/*f.file.accept(file, file.getBytes());*/
		
		if(name.equals("h")) {
			String path = uploadPath+File.separator+"hyeri"+File.separator+"profile"+File.separator;
			String fileName = file.getOriginalFilename();
		/*	new SimpleDateFormat("yyyy").format(new Date())*/
			//디렉토리 없을 경우 생성
			File dir = new File(path);
	        if(!dir.isDirectory()){
	            dir.mkdir();
	        }
	        //file.transferTo(new File(path+fileName));
		}else if(name.equals("j")){
			
		}
		return "";
	}
	

}
