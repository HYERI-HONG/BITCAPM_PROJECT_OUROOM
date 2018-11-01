package com.ouroom.web.post;

import java.util.UUID;

public class Test {
public void test() {
	for(int i=1; i<60; i++) {
		System.out.println(UUID.randomUUID().toString() + "_post_"+(48+i)+ ".jpg");
	}
}

    public static void main(String[] args) {
        Test example = new Test();
        System.out.println("--------------------------");
        example.test();
        System.out.println("--------------------------");
    }

}
