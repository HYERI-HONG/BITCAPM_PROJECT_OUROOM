package com.ouroom.web.post;

import java.util.HashMap;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Component @Data @Lazy
public class Pagination implements Proxy{
	private int totalRecode, recodeSize, 
	totalPage, pageSize, 
	pageNo, startPage, endPage,
	beginRow, endRow,
	prev, next;
	private boolean existPrev = false, existNext = false;

	@SuppressWarnings("unchecked")
	@Override
	public void carraryOut(Object o) {
		HashMap<String,Object> map = (HashMap<String, Object>) o;
		this.pageNo = (int) map.get("pageNo");
		this.totalRecode = (int) map.get("totalRecode");
		this.recodeSize = (int) map.get("recodeSize");
		this.totalPage = (totalRecode-1)/recodeSize+1;
		this.pageSize = 5;
		this.startPage = 1 + (int) (Math.ceil((pageNo-1)/pageSize)) * pageSize;
		this.endPage = (totalPage < startPage + pageSize  - 1) ? totalPage : (startPage + pageSize -1);
		this.beginRow = 1 + ((pageNo-1) * recodeSize);
		this.endRow = (totalRecode < beginRow + recodeSize - 1) ? totalRecode : pageNo*(recodeSize);
		this.existPrev = pageNo != 1;
		this.existNext = pageNo != totalPage;
		this.prev = startPage!=1 ? pageNo-1 : 0;
		this.next= (existNext==true) ? pageNo+1 : 0;
	}

}
