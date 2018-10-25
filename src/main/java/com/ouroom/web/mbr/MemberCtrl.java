package com.ouroom.web.mbr;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.FileCopyUtils;
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

	//사진 업로드------------------------------
	@Resource(name = "uploadPath")
	private String uploadPath;
	private byte[] filedata;
	//--------------------------------------
	
	@PostMapping(value="/add")
	public  @ResponseBody int add(@RequestBody Member p) throws IOException{
		logger.info("======== MemberController ::: add() =======");
		
		p.setAge(calc.calcAge(p.getBirthday()));
		//int i = mbrmapper.insert(p);
		String path = uploadPath+File.separator+"hyeri"+File.separator+"profile"+File.separator;
		/*String savedName = UUID.randomUUID().toString() + "_" + p.getProfile();*/
		File target = new File(path, p.getProfile());
		FileCopyUtils.copy(filedata, target);
		return 0;
	}
	@PostMapping(value="/upload")
	public  @ResponseBody String upload(@RequestBody MultipartFile file) throws IOException{
		logger.info("======== MemberController ::: upload() =======");
		filedata = file.getBytes();
		//files.transferTo(new File(path+fileName));
		return "";
	}
	

}
