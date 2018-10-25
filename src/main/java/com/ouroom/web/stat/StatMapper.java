package com.ouroom.web.stat;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

@Repository
public interface StatMapper {
	public List<HashMap<?,?>> drawsvlc(Map<?, ?> m);
	public List<HashMap<?,?>> drawsvcc(Map<?, ?> m);
	public List<HashMap<?,?>> extrsvvc(Map<?, ?> m); 
	public List<HashMap<?,?>> extrsvjc(Map<?, ?> m); 
	public List<HashMap<?,?>> totalSalePerDay(Map<?, ?> m); 
	public List<HashMap<?,?>> bestSellerPerDay(Map<?, ?> m); 
	
	public List<HashMap<?,?>> drawvstac(Map<?, ?> m);
	public List<HashMap<?,?>> extrvstt(Map<?, ?> m); 
	
	
}
