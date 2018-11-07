package com.ouroom.web.post;

import java.io.File;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
public class PostController {
    static final Logger logger = LoggerFactory.getLogger(PostController.class);
    //@Autowired post p;
    @Autowired PostMapper pm;
    @Autowired FileUtil u;
    @Autowired Pagination page;
    @Autowired TransactionService tx;
    @Autowired Map<String, Object> m;
    @Autowired String s;
    
    @Resource(name = "uploadPath")
    private String uploadPath;
    
    @PostMapping("/posts/write")
    public String postWrite(@RequestBody Map<String, Object> p) {
        m = new HashMap<>();
        p.put("regiDate", LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd")));
        p.put("lastUpdate", "2018-11-15");
        p.put("image", s);
        m.put("seq", tx.postInseart(p));
        u.upload.apply(uploadPath+"/danah/post");
        s = "";
        return Util.cs.apply(m.get("seq"));
    }
    
    @GetMapping("/posts/list/{pageNo}")
    public Map<?, ?> postList(@PathVariable("pageNo") String pageNo) {
        m = new HashMap<>();
        PageProxy pxy = new PageProxy();
        m.put("pageNo", Util.ci.apply(pageNo));
        m.put("totalRecode", pm.postCount(m));
        m.put("recodeSize", 12);
        pxy.carraryOut(m);
        page = pxy.getPagination();
        m.clear();
        m.put("beginRow", page.getBeginRow());
        m.put("endRow", page.getEndRow());
        m.put("page", page.getTotalPage());
        m.put("pageNo", page.getPageNo()+1);
        m.put("list", pm.postList(m));
        m.remove("beginRow");
        m.remove("endRow");
        return m;
    }
    
    @GetMapping("/posts/hashTagSearch/{query}/{pageNo}")
    public  Map<?, ?> posthashTagSearch(@PathVariable("query") String query, @PathVariable("pageNo") String pageNo){
        PageProxy pxy = new PageProxy();
        m = new HashMap<>();
        m.put("pageNo", Util.cv.test(pageNo,"undefined") ? 1 : Util.ci.apply(pageNo));
        m.put("keyword", query);
        m.put("totalRecode", pm.postHashTagSearch(m).size());
        m.put("recodeSize", 12);
        pxy.carraryOut(m);
        page = pxy.getPagination();
        m.clear();
        m.put("beginRow", page.getBeginRow());
        m.put("endRow", page.getEndRow());
        m.put("keyword", query);
        m.put("page", page.getTotalPage());
        m.put("pageNo", page.getPageNo()+1);
        m.put("list", pm.postHashTagSearch(m));
        m.remove("beginRow");
        m.remove("endRow");
        return m;
    }
    
    @GetMapping("/posts/search/{query}/{pageNo}")
    public  Map<?, ?> postSearch(@PathVariable("query") List<String> query, @PathVariable("pageNo") String pageNo){
        PageProxy pxy = new PageProxy();
        m = new HashMap<>();
        Map<String, Object> a = new HashMap<>();
        a.put("order", Util.cv.test(query.get(0),"최신순") ? "SEQ" : Util.cv.test(query.get(0),"인기순") ? "VIEW_CNT" : "LIKE_CNT");
        a.put("roomType", Util.cv.test(query.get(1),"모든공간")? "" : query.get(1));
        a.put("roomSize", Util.cv.test(query.get(2),"모든평수")? "" : query.get(2));
        a.put("imageTagCnt", Util.cv.test(query.get(3),"모두")? "" : query.get(3));
        a.put("pageNo", Util.cv.test(pageNo,"undefined") ? 1 : Util.ci.apply(pageNo));
        a.put("totalRecode", pm.postSearch(a).size());
        a.put("recodeSize", 12);
        pxy.carraryOut(a);
        page = pxy.getPagination();
        a.put("beginRow", page.getBeginRow());
        a.put("endRow", page.getEndRow());
        m.put("page", page.getTotalPage());
        m.put("pageNo", page.getPageNo()+1);
        m.put("list", pm.postSearch(a));
        m.remove("beginRow");
        m.remove("endRow");
        return m;
    }
    
    @GetMapping("/posts/{seq}")
    public  Map<?,?> postDetail(@PathVariable String seq) {
        return tx.postDetail(seq);
    }
    
    @SuppressWarnings("unchecked")
    @PostMapping ("/posts/{seq}/edit")
    public  String postEdit(@PathVariable("seq") String seq, @RequestBody Map<String, Object> p) {
        m = new HashMap<>();
        m = (Map<String, Object>) pm.postRetrieve(p);
        p.put("seq",seq);
        p.put("lastUpdate", Util.cv.test(Util.cs.apply(p.get("lastUpdate")), "")? "2018-11-15" : p.get("lastUpdate"));
        p.put("image", Util.cv.test(Util.cs.apply(p.get("image")), "")? s : p.get("image"));
        tx.postUpdate(p);
        if(Util.cv.test(Util.cs.apply(p.get("image")),s)) {
            u.delete.accept(uploadPath+File.separator+"danah"+File.separator+"post"+File.separator +Util.rpv.apply(Util.cs.apply(m.get("lastUpdate")))+File.separator+m.get("image"));
            u.upload.apply(uploadPath+File.separator+"danah"+File.separator+"post");
        }
        s = "";
        return seq;
    }
    
    @PostMapping("/posts/{seq}/delete")
    public  String postDelete(@PathVariable("seq") String seq, @RequestBody Map<String, String> p) {
        m = new HashMap<>();
        pm.postDelete(seq);
        pm.likeDelete(seq);
        u.delete.accept(uploadPath+File.separator+"danah"+File.separator+"post"+File.separator+Util.rpv.apply(p.get("lastUpdate"))+File.separator+p.get("image"));
        m.put("seq", Util.ci.apply(seq));
        return Util.cn.test(pm.postCount(m),0) ? "1" : "";
    }
    
    @PostMapping("/posts/upload")
    public String postUplaod(@RequestBody MultipartFile file) throws Exception {
        s = u.file.apply(file, file.getBytes());
        return s!=null ? "SUCCESS" : "FAIL" ;
    }
    
    @PostMapping("/comments/write")
    public  Map<?, ?> commentWrite(@RequestBody Map<String, Object> p) {
    	pm.commentInsert(p);
        return commentList(Util.cs.apply(p.get("seq")), "1");
    }
    
    @GetMapping("/comments/list/{seq}/{pageNo}")
    public  Map<?, ?> commentList(@PathVariable("seq") String seq, @PathVariable("pageNo") String pageNo) {
        PageProxy pxy = new PageProxy();
        m = new HashMap<>();
        m.put("pageNo", Util.ci.apply(pageNo));
        m.put("seq", Util.ci.apply(seq));
        m.put("totalRecode", pm.commentCount(m));
        m.put("recodeSize", 3);
        pxy.carraryOut(m);
        page = pxy.getPagination();
        m.clear();
        m.put("beginRow", page.getBeginRow());
        m.put("endRow", page.getEndRow());
        m.put("seq", Util.ci.apply(seq));
        m.put("comment", pm.commentList(m));
        m.remove("beginRow");
        m.remove("endRow");
        m.put("page", page);
        return m;
    }
    
    @GetMapping("/comments/delete/{pSeq}/{cSeq}")
    public  Map<?, ?> commentDelete(@PathVariable("pSeq") String pSeq, @PathVariable("cSeq") String cSeq) {
pm.commentDelete(cSeq);
        return commentList(pSeq, "1");
    }
    
    @GetMapping("/hashTags")
    public  List<?> hashTagList() {
        return pm.hashTagSearch();
    }
    
    @PostMapping("/imgTags")
    public String imgTag(@RequestBody Map<?, ?> p) {
        tx.imgTag(p);
        return Util.cs.apply(p.get("seq"));
    }
    
    @GetMapping("/imgTags/search")
    public  List<?> imgTagSearch() {
        return pm.imgTagSearch();
    }
    
    @GetMapping("/likes/{memSeq}/{seq}")
    public  Map<?, ?> like(@PathVariable("memSeq") String memSeq, @PathVariable("seq") String seq) {
        m = new HashMap<>();
        m.put("seq", Util.ci.apply(seq));
        m.put("memSeq", Util.ci.apply(memSeq));
        return tx.like(m);
    }

    @GetMapping("/likes/{memSeq}")
    public  List<?> likeList(@PathVariable("memSeq") String p){
        return pm.likeList(p);
    }
    
    @SuppressWarnings("unchecked")
    @GetMapping ("/share/{seq}")
    public  String share(@PathVariable("seq") String seq) {
        m = new HashMap<>();
        m.put("seq", seq);
        m = (Map<String, Object>) pm.postRetrieve(m);
        m.put("shareCnt", (int)m.get("shareCnt")+1);
        pm.postUpdate(m);
        m = (Map<String, Object>) pm.postRetrieve(m);
        return Util.cs.apply(m.get("shareCnt"));
    }
}