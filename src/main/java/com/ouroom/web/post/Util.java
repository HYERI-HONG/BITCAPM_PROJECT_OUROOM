package com.ouroom.web.post;

import java.util.function.BiPredicate;
import java.util.function.Consumer;
import java.util.function.Function;
import java.util.function.Predicate;

public class Util {
	public static Consumer<String> log = System.out::println;
	public static Function<String, String> rpv = p -> p.replace("-", "/");
	public static Function<String, Integer> ci = Integer::parseInt;
	public static Function<Object,String> cs = String::valueOf;
	public static BiPredicate<String,String> cv = (s1,s2) -> s1.equals(s2);
	public static BiPredicate<Integer,Integer> cn = (i1,i2) -> i1==i2;
}
