package com.ouroom.web.post;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class TransactionService {
	@Transactional
	public void inseart(Map<?, ?> p) {};
	/*
	@Transactional
	public List<?> list(Map<?, ?> p){};
	@Transactional
	public Post retrieve(Map<?, ?> p){};
	@Transactional
	public Integer count(Map<?, ?> p){};
	*/
	@Transactional
	public void update(Map<?, ?> p){};
	@Transactional
	public void delete(Map<?, ?> p){};

}
