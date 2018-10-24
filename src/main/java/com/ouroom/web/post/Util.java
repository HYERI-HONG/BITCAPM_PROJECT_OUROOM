package com.ouroom.web.post;

import java.util.function.Consumer;
import java.util.function.Function;

public class Util {
	public static Consumer<String> log = System.out::println;
	public static Function<String, String> rpb = p -> p.replace("-", "/");
}
