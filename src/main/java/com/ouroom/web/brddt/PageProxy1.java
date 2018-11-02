package com.ouroom.web.brddt;

import java.util.Map;
import lombok.Data;

@Data
public class PageProxy1 implements Proxy1{
	private Pagination1 pagination;
	@Override
	public void carryOut(Map<?,?> map) {
		this.pagination = new Pagination1();
		pagination.carryOut(map);
	}
	
}