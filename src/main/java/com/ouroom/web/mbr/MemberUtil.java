package com.ouroom.web.mbr;

import java.util.function.Consumer;
import java.util.function.Function;
import java.util.function.Predicate;
import javax.servlet.http.HttpServletRequest;

public class MemberUtil {
	public static Consumer<Integer> Logi = System.out::println;
	public static Consumer<String> Log = System.out::println;
	
	public static Function<String,Integer> toInt =Integer::parseInt;
	public static Function<Integer,String> toString =String::valueOf;

	public static Predicate<String> pNull = s -> s.equals("");
	public static Predicate<String> notNull = pNull.negate();
	
	public static Function<HttpServletRequest, String> ctx = HttpServletRequest::getContextPath;
}
