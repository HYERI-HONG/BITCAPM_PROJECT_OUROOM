package com.ouroom.web.post;

import java.util.Arrays;
import java.util.HashMap;

public class Test {
public void test() {
	HashMap<String, String> m = new HashMap<String, String>();
	m.put("keyword", "하얀색,이케아");
	for (String s : ((String) m.get("keyword")).split(",")) {
		System.out.println(s);
	}
}

    public static void main(String[] args) {
        Test example = new Test();
        System.out.println("--------------------------");
        example.test();
        System.out.println("--------------------------");
    }

}
