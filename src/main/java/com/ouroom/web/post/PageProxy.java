package com.ouroom.web.post;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Component @Data @Lazy
public class PageProxy implements Proxy{
	private Pagination pagination;

	@Override
	public void carraryOut(Object o) {
		this.pagination = new Pagination();
		pagination.carraryOut(o);
	}
}
