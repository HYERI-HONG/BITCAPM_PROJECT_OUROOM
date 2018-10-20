package com.ouroom.web.post;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.UUID;
import java.util.function.BiConsumer;
import java.util.function.Consumer;
import java.util.function.Function;

import org.springframework.stereotype.Component;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.multipart.MultipartFile;

@Component

public class FileUtil {
	private MultipartFile f;
	private String sn, sp;
	private byte[] sf;
	
	public BiConsumer<String, String[]> makeDir = (p1, p2) -> {
		if(new File(p2[p2.length-1]).exists()) return;
		for (String path : p2) {
			File dp = new File(p1 + path);
			if(!dp.exists()){ dp.mkdir(); }
		}
	};
	
	public Function<String, String> calcPath = p -> {
		String y,m,d;
	    y = File.separator+new SimpleDateFormat("yyyy").format(new Date());
	    m = y + File.separator+new SimpleDateFormat("MM").format(new Date());
	    d = m + File.separator+new SimpleDateFormat("dd").format(new Date());
	    String[] a = {y,m,d};
	    makeDir.accept(p, a);
		return d;
	};
	
	
	public BiConsumer<MultipartFile, byte[]> file = (f, b) -> {
		this.f = f;
		sf = b;
	};	
	
	public Function<String, String> upload = p -> {
		sn = UUID.randomUUID().toString() + "_" + f.getOriginalFilename();
		sp = calcPath.apply(p);
		try { FileCopyUtils.copy(sf, new File(p + sp, sn)); } 
		catch (Exception e) { e.printStackTrace(); }
		return sn;
		//FileCopyUtils.copy(f.getBytes(), new File(uploadPath + sp, sn)); 데이터, 경로, 이111
		//file.transferTo(new File(u.uploadPath+file.getOriginalFilename())); 파일, 경로
	};
	
	public Consumer<String> delete = p -> new File(p).delete();

}
