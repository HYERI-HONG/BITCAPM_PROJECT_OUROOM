package com.ouroom.web.post;

import java.time.LocalDateTime;

public class Test {

public void test() {        
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
