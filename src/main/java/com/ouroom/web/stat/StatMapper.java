package com.ouroom.web.stat;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

@Repository
public interface StatMapper {
	public List<HashMap<?,?>> drawsvlc(Map<?, ?> m);
	public List<HashMap<?,?>> drawsvcc(Map<?, ?> m);
	public List<HashMap<?,?>> totalPostPerDay(Map<?, ?> m); 
	public List<HashMap<?,?>> totalPostPerDayBefore(Map<?, ?> m); 
	public List<HashMap<?,?>> totalJoinPerDay(Map<?, ?> m); 
	public List<HashMap<?,?>> totalJoinPerDayBefore(Map<?, ?> m); 
	public List<HashMap<?,?>> totalSalePerDay(Map<?, ?> m); 
	public List<HashMap<?,?>> bestSellerPerDay(Map<?, ?> m); 
	public List<HashMap<?,?>> getGenderratio(); 
	
	public List<HashMap<?,?>> drawvstac(Map<?, ?> m);
	public List<HashMap<?,?>> extrvstt(Map<?, ?> m); 
	
	public List<HashMap<?, ?>> drawsbalc();
	
	public List<HashMap<?, ?>> drawctgrtco(Map<?,?> m);
	public List<HashMap<?, ?>> drawctgrtct(Map<?,?> m);
	
	public List<HashMap<?, ?>> drawmbrpc();
	public List<HashMap<?, ?>> drawmbrbc();
	
	public List<HashMap<?, ?>> drawabbasc();
	
	public List<HashMap<?, ?>> drawwrdcld();
	
	
}
