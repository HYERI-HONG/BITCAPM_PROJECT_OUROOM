package com.ouroom.web.cmm;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

@Repository
public interface HomeMapper {
	public List<?> cList();
	public List<?> sList(Map<?, ?> m);

}
