package com.ouroom.web.post;

import java.util.UUID;
import java.util.function.Consumer;

import org.apache.tomcat.jni.File;
import org.springframework.util.FileCopyUtils;

public class Util {
	public static Consumer<String> log = System.out::println;
	/*
	public static BiFunction<String, byte[], String> 
	(String name, byte[] fileData) -> {
	name = UUID.randomUUID().toString() + "_" + name;
	FileCopyUtils.copy(fileData, new File(uploadPath, name));
	return name;
	};
	 */
	//	private String uploadFile(String originalName, byte[] fileData)
	//	UUID uid = UUID.randomUUID();
	// String savedName = uid.toString() + "_" + originalName;
	//	File target = new File(uploadPath, savedName);
	//	FileCopyUtils.copy(fileData, target);
	//	return savedName;
}
