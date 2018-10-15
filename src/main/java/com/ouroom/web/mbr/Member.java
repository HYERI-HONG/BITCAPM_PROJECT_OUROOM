package com.ouroom.web.mbr;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;
import lombok.Data;

@Component
@Data @Lazy
public class Member {
	private String seq,email,nickname,password,gender,bir_year,bir_month,bir_day,profile,join_day,age;

}
