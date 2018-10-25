package com.ouroom.web.mbr;


import java.text.SimpleDateFormat;
import java.util.Date;
import org.springframework.stereotype.Component;

@Component
public class Calc {
	public String calcAge(String p){
		
		String[] arr =p.split("-");
			
		return String.valueOf(
				Integer.parseInt(
						new SimpleDateFormat("yyyy").format(new Date())
						)
				-
				Integer.parseInt(arr[0])
				+
				(
						(
								Integer.parseInt(arr[1]+arr[2])>
								Integer.parseInt(new SimpleDateFormat("MMdd").format(new Date()))
						)? 1:0)
				);
	}
}
