package com.ouroom.web.post;

import java.io.File;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.UUID;
import java.util.function.BiConsumer;
import java.util.function.BiFunction;
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
		LocalDateTime ldt = LocalDateTime.now();
		y = File.separator+ldt.format(DateTimeFormatter.ofPattern("yyyy"));
		m = y + File.separator+ldt.format(DateTimeFormatter.ofPattern("MM"));
		d = m + File.separator+ldt.format(DateTimeFormatter.ofPattern("dd"));
		String[] a = {y,m,d};
		makeDir.accept(p, a);
		return d;
	};
	
	public BiFunction<MultipartFile, byte[], String> file = (f, b) -> { 
		this.f = f; sf = b; 
		sn = UUID.randomUUID().toString();
		return sn;
	};	
	
	public Function<String, String> upload = p -> {
		sp = "/2018/11/15";
		try { FileCopyUtils.copy(sf, new File(p + sp, sn)); } 
		catch (Exception e) { e.printStackTrace(); }
		return sn;
	};
	
	public Consumer<String> delete = p -> new File(p).delete();
}
