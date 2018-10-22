package com.ouroom.web.post;

import java.io.File;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class Test {

public void test() {        
	String y,m,d;
	LocalDateTime ldt = LocalDateTime.now();
	System.out.println(ldt);
}

    public static void main(String[] args) {
        Test example = new Test();
        System.out.println("--------------------------");
        example.test();
        System.out.println("--------------------------");
    }

}
