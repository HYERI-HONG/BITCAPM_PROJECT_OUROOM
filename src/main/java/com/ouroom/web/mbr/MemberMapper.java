package com.ouroom.web.mbr;

import java.util.Map;

import org.springframework.stereotype.Repository;

@Repository
public interface MemberMapper {
	public String count();
	public Integer dupck(Map<?, ?> p);
	public void insert(Member p);
}
