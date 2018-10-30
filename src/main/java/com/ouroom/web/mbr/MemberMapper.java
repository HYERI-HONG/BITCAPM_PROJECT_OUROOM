package com.ouroom.web.mbr;

import java.util.Map;
import org.springframework.stereotype.Repository;

@Repository
public interface MemberMapper {
	public Integer count(Member p);
	public Integer dpck(Map<?, ?> p);
	public Integer insert(Member p);
	public Member get(Member p);
	
}
