package com.ouroom.web.brddt;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Component
@Data
@Lazy

public class Review {
	String seq,contents, regi_date, image, nickname;
}
