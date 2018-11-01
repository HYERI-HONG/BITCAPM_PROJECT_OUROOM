SHOW TABLES;
select * from post;

#----------------------------Table01 :: Member----------------------------
CREATE TABLE MEMBER(
  SEQ INT AUTO_INCREMENT PRIMARY KEY,
  EMAIL VARCHAR(30) UNIQUE,
  PASSWORD VARCHAR(30),
  NICKNAME VARCHAR(20) UNIQUE,
  GENDER VARCHAR(10),
  BIRTHDAY DATE,
  PROFILE VARCHAR(20),
  JOIN_DATE DATE,
  AGE VARCHAR(10)
);

#----------------------------Table02 :: Board----------------------------
CREATE TABLE BOARD(
  SEQ INT AUTO_INCREMENT PRIMARY KEY, 
  ARTICLE VARCHAR(10)
);
  
#----------------------------Table03 :: Post----------------------------
CREATE TABLE POST(
  SEQ INT AUTO_INCREMENT PRIMARY KEY,
  TITLE VARCHAR(50) NOT NULL,
  CONTENT VARCHAR(500),
  REGI_DATE DATE NOT NULL,
  VIEW_CNT INT DEFAULT 0,
  LIKE_CNT INT DEFAULT 0,
  SHARE_CNT INT DEFAULT 0,
  ROOM_TYPE VARCHAR(20),
  ROOM_SIZE VARCHAR(20),
  MEM_SEQ INT,
  BOARD_SEQ INT,
  IMAGE VARCHAR(30)
);



ALTER TABLE POST ADD CONSTRAINT FOREIGN KEY(MEM_SEQ) REFERENCES MEMBER(SEQ);
ALTER TABLE POST ADD CONSTRAINT FOREIGN KEY(BOARD_SEQ) REFERENCES BOARD(SEQ);

#----------------------------Table04 :: Comment----------------------------

CREATE TABLE COMMENT(
  SEQ INT AUTO_INCREMENT PRIMARY KEY,
  COMMENT VARCHAR(200) NOT NULL,
  ARTICLE_SEQ INT NOT NULL,
  MEM_SEQ INT,
  BOARD_SEQ INT
);

ALTER TABLE COMMENT ADD CONSTRAINT FOREIGN KEY(MEM_SEQ) REFERENCES MEMBER(SEQ);
ALTER TABLE COMMENT ADD CONSTRAINT FOREIGN KEY(BOARD_SEQ) REFERENCES BOARD(SEQ);

#----------------------------Table05 :: Likeit----------------------------
CREATE TABLE LIKEIT(
  SEQ INT AUTO_INCREMENT PRIMARY KEY,
  ARTICLE_SEQ INT NOT NULL,
  MEM_SEQ INT,
  BOARD_SEQ INT,
  CHK INT DEFAULT 0
);

ALTER TABLE LIKEIT ADD CONSTRAINT FOREIGN KEY(MEM_SEQ) REFERENCES MEMBER(SEQ);
ALTER TABLE LIKEIT ADD CONSTRAINT FOREIGN KEY(BOARD_SEQ) REFERENCES BOARD(SEQ);


#----------------------------Table06 :: HashTag----------------------------
CREATE TABLE HASHTAG(
  SEQ INT AUTO_INCREMENT PRIMARY KEY,
  KEYWORD VARCHAR(50) NOT NULL,
  POST_SEQ INT
);
ALTER TABLE HASHTAG ADD CONSTRAINT FOREIGN KEY(POST_SEQ) REFERENCES POST(SEQ);

#----------------------------Table07 :: ImageTag----------------------------
CREATE TABLE IMGTAG(
  SEQ INT AUTO_INCREMENT PRIMARY KEY,
  ITEM_TITLE VARCHAR(50),
  POINT VARCHAR(20),
  POST_SEQ INT,
  ITEM_SEQ INT
);

ALTER TABLE IMGTAG ADD CONSTRAINT FOREIGN KEY(ITEM_SEQ) REFERENCES ITEM(SEQ);
ALTER TABLE IMGTAG ADD CONSTRAINT FOREIGN KEY(POST_SEQ) REFERENCES POST(SEQ);


#----------------------------Table08 :: Item_post----------------------------

CREATE TABLE ITEM_POST(
   SEQ INT AUTO_INCREMENT PRIMARY KEY,
   TITLE VARCHAR(50),
   REGI_DATE DATE NOT NULL,
   VIEW_CNT INT DEFAULT 0,
   LIKE_CNT INT DEFAULT 0,
   SHARE_CNT INT DEFAULT 0,
   BOARD_SEQ INT,
   IMAGE VARCHAR(30)
);

ALTER TABLE ITEM_POST ADD CONSTRAINT FOREIGN KEY(ITEM_SEQ) REFERENCES ITEM(SEQ);
ALTER TABLE ITEM_POST ADD CONSTRAINT FOREIGN KEY(BOARD_SEQ) REFERENCES BOARD(SEQ);

#----------------------------Table09 :: Item----------------------------
CREATE TABLE ITEM(
  SEQ INT AUTO_INCREMENT PRIMARY KEY,
  TITLE VARCHAR(50),
  PRICE VARCHAR(10),
  OPTIONS VARCHAR(50),
  DELIVERY VARCHAR(10),
  DISCOUNT VARCHAR(10),
  PHOTO VARCHAR(100),
  SALE_CNT INT,
  STORE_CNT INT,
  CATEGORY2_SEQ INT
);
ALTER TABLE ITEM ADD CONSTRAINT FOREIGN KEY(CATEGORY2_SEQ) REFERENCES CATEGORY2(SEQ);
ALTER TABLE ITEM ADD CONSTRAINT FOREIGN KEY(ITEM_POST_SEQ) REFERENCES ITEM_POST(SEQ);

#----------------------------Table10 :: Item_option----------------------------
CREATE TABLE ITEM_OPTION(
  SEQ INT AUTO_INCREMENT PRIMARY KEY,
  OPTIONS VARCHAR(50),
  ITEM_SEQ INT
);
ALTER TABLE ITEM_OPTION ADD CONSTRAINT FOREIGN KEY(ITEM_SEQ) REFERENCES ITEM(SEQ);

#----------------------------Table11 :: category1----------------------------
CREATE TABLE CATEGORY1(
   SEQ INT AUTO_INCREMENT PRIMARY KEY,
   CATEGORY VARCHAR(20)
);


#----------------------------Table12 :: category2----------------------------
CREATE TABLE CATEGORY2(
   SEQ INT AUTO_INCREMENT PRIMARY KEY,
   CATEGORY VARCHAR(20),
   CATEGORY1_SEQ INT
);
ALTER TABLE CATEGORY2 ADD CONSTRAINT FOREIGN KEY(CATEGORY1_SEQ) REFERENCES CATEGORY1(SEQ);
ALTER TABLE category2 ADD CATEGORY_KR VARCHAR(20);


#----------------------------Table13 :: Cart----------------------------
CREATE TABLE CART(
  SEQ INT AUTO_INCREMENT PRIMARY KEY,
  MEM_SEQ INT,
  ITEM_SEQ INT,
  CNT INT,
  OPTION_SEQ INT
);
ALTER TABLE CART ADD CONSTRAINT FOREIGN KEY(MEM_SEQ) REFERENCES MEMBER(SEQ);
ALTER TABLE CART ADD CONSTRAINT FOREIGN KEY(ITEM_SEQ) REFERENCES ITEM(SEQ);
ALTER TABLE CART ADD CONSTRAINT FOREIGN KEY(OPTION_SEQ) REFERENCES ITEM_OPTION(SEQ);

#----------------------------Table14 :: Purchase----------------------------
CREATE TABLE PURCHASE(
  SEQ INT AUTO_INCREMENT PRIMARY KEY,
  MEM_SEQ INT,
  ITEM_SEQ INT,
  CNT INT,
  OPTION_SEQ INT,
  PURCHASE_DATE DATE
);
ALTER TABLE CART ADD CONSTRAINT FOREIGN KEY(MEM_SEQ) REFERENCES MEMBER(SEQ);
ALTER TABLE CART ADD CONSTRAINT FOREIGN KEY(ITEM_SEQ) REFERENCES ITEM(SEQ);
ALTER TABLE CART ADD CONSTRAINT FOREIGN KEY(OPTION_SEQ) REFERENCES ITEM_OPTION(SEQ);

#----------------------------Table16 :: REVIEW----------------------------
CREATE TABLE REVIEW(
  SEQ INT AUTO_INCREMENT PRIMARY KEY,
  CONTENTS VARCHAR(300),
  REGI_DATE VARCHAR(30),
  IMAGE VARCHAR(30),
  NICKNAME VARCHAR(30)
);

#----------------------------기타----------------------------
#테이블 속성 삭제
ALTER TABLE POST DROP CONTENT;

#테이블 데이터 변경
UPDATE item SET SUM =(PRICE * (100-DISCOUNT)*0.01) WHERE SEQ IN(42,45,51,58,65,72,75,78,79,90,93);

#테이블 속성 추가
ALTER TABLE ITEM_POST ADD CONTENT VARCHAR(200);

#외래키 삭제
ALTER TABLE POST DROP FOREIGN KEY post_ibfk_2;

#제약 조건명 확인
SHOW CREATE TABLE member;

#컬럼명, 자료형 변경
ALTER TABLE REVIEW CHANGE CONTENT CONTENT VARCHAR(500);

#TIMESTAMP 걸기
ALTER TABLE post MODIFY COLUMN REGI_DATE date DEFAULT current_timestamp() NOT NULL;

commit;

#------------------------------------------------------------------


#메인화면 커뮤니티 list불러오는쿼리
SELECT P.SEQ,P.IMAGE,P.LAST_UPDATE,M.NICKNAME,M.PROFILE
FROM post P
JOIN MEMBER M
ON P.MEM_SEQ LIKE M.SEQ
ORDER BY P.seq 
LIMIT 8;

select * from post;
#profile이 null인경우 처리해주기
#danah.s.d(this.seq);
select * from post order by seq asc;
#-------------------------------------------------------------------

#메인화면 스토어 list불러오는 쿼리
#침실 = 1
#거실 = 3
#주방 = 4
#학생 = 6
#서재 = 7
SELECT I.SEQ, I.TITLE,I.SUM,I.DISCOUNT,I.PHOTO,I.CATEGORY2_SEQ,C.CATEGORY FROM item I 
JOIN category2 C
ON I.CATEGORY2_SEQ LIKE C.SEQ
ORDER BY SALE_CNT DESC LIMIT 6;

#카테고리 눌렀을때 나오는 쿼리
SELECT I.SEQ, I.TITLE,I.SUM,I.DISCOUNT,I.PHOTO,I.CATEGORY2_SEQ,C.CATEGORY FROM ITEM I
JOIN category2 C
ON I.CATEGORY2_SEQ LIKE C.SEQ
WHERE C.CATEGORY1_SEQ LIKE (SELECT SEQ FROM category1 WHERE CATEGORY LIKE '침실')
ORDER BY SALE_CNT DESC LIMIT 6;

#item -> category2_seq, photo
#category_2 -> category

#이미지 경로 : $.img()+jun/ category2 category속성/item테이블의 photo.jpg
commit;
#---------------------------INSERT----------------------------

INSERT INTO BOARD(ARTICLE) VALUES ('post');
INSERT INTO BOARD(ARTICLE) VALUES ('item');

INSERT INTO MEMBER(EMAIL,NICKNAME,PASSWORD,GENDER,BIRTHDAY,PROFILE,JOIN_DATE,AGE) VALUES ('manzit@gmail.com','manzitnam','654321','남자','1989-9-3','p1.jpg','2018-10-18','30');
INSERT INTO MEMBER(EMAIL,NICKNAME,PASSWORD,GENDER,BIRTHDAY,PROFILE,JOIN_DATE,AGE) VALUES ('manzit@gmail.com','manzit','654321','남자','1989-9-3','p1.jpg','2018-10-18','30');
INSERT INTO MEMBER(EMAIL,NICKNAME,PASSWORD,GENDER,BIRTHDAY,PROFILE,JOIN_DATE,AGE) VALUES ('taltal@gmail.com','talzang','123456','여자','1992-4-15','p0.jpg','2018-10-18','27');

INSERT INTO BOARD(ARTICLE) VALUES ('item');

INSERT INTO POST(TITLE,CONTENT,REGI_DATE,VIEW_CNT,LIKE_CNT,SHARE_CNT,ROOM_TYPE,ROOM_SIZE,MEM_SEQ,BOARD_SEQ,IMAGE) VALUES('','','2018-10-18',0,0,0,'원룸','20평대',5,1,'post_1');

INSERT INTO POST(TITLE, CONTENT, REGI_DATE, VIEW_CNT, LIKE_CNT, SHARE_CNT, ROOM_TYPE, ROOM_SIZE, MEM_SEQ, BOARD_SEQ,IMAGE) VALUES('자연스러움이 매력적인 유럽 스타일의 복층 인테리어', '원래 옷이든 가구든 화려한 것보다는 심플한걸 좋아하고, 제가 미적 감각이 별로 없어서 인테리어 꾸미는거를 잘은 못하지만, 어렸을 때 오랫동안 유럽에서 자라서 그때의 영향과 엄마가 꾸몄던 집의 가구와 분위기의 영향을 받아 꾸며보았어요.', '2018-10-18',0, 0, 0, '원룸', '10평대', 55,1, 'post_1');
INSERT INTO post (TITLE, CONTENT, REGI_DATE, VIEW_CNT, LIKE_CNT, SHARE_CNT, ROOM_TYPE, ROOM_SIZE, MEM_SEQ, BOARD_SEQ,IMAGE) VALUES('1년의 경험으로 취향에 따라 싹 바꾸기', '1년만에 이사,  새로운 집은 제가 1년 동안 직접 살림을 하면서 느낀 점을 적용해서 고치고 싶더라고요. 인테리어하는 아빠에게 이런 의견을 말씀드렸더니 감사히 이번 집은 집 구조부터 타일, 벽지, 싱크대 구조, 문고리 하나까지, 100% 제 의견에 맞춰 진행하게 해주셨어요.', '2018-10-17',157, 129, 96, '거실', '30평대', 49,1, 'post_2');
INSERT INTO post (TITLE, CONTENT, REGI_DATE, VIEW_CNT, LIKE_CNT, SHARE_CNT, ROOM_TYPE, ROOM_SIZE, MEM_SEQ, BOARD_SEQ,IMAGE) VALUES('갤러리 같은 미니멀 하우스', '화이트 베이스 위에 꼭 필요한 가구와 그림으로만 채운 미니멀 하우스를 만들고 싶었어요. 다양한 포트폴리오를 찾아보고 그 중 가장 마음에 든 컨셉으로 리모델링을 진행했습니다. 디자이너분과 매일 통화하고 만나서 얘기하는 두 달이 참 행복했는데 기대만큼 예쁜 집이 완성되어 열심히 꾸며보려고 노력중이에요.', '2018-10-16',88, 102, 35, '부엌', '30평대', 42,1, 'post_3');
INSERT INTO post (TITLE, CONTENT, REGI_DATE, VIEW_CNT, LIKE_CNT, SHARE_CNT, ROOM_TYPE, ROOM_SIZE, MEM_SEQ, BOARD_SEQ,IMAGE) VALUES('집안에서 누리는 직장인의 소소한 행복', '최근 추석 연휴에 고향 집에 갔다가 집에 돌아왔을 때, 아 드디어 나의 집에 왔다는 생각이 들더라고요.처음이었어요. 기분이 이상하면서도 진짜 내 공간을 만들어냈구나 싶어서 너무 좋았어요.', '2018-10-16',110, 110, 31, '부엌', '20평대', 27,1, 'post_4');
INSERT INTO post (TITLE, CONTENT, REGI_DATE, VIEW_CNT, LIKE_CNT, SHARE_CNT, ROOM_TYPE, ROOM_SIZE, MEM_SEQ, BOARD_SEQ,IMAGE) VALUES('서울살이 4년, 인테이러 로망을 펼칠 복층을 만났다.', '서울살이 4년만에 자취의 로망! 복층 오피스텔로 이사오게 되면서 드디어 저의 스타일로 인테리어를 할 수 있게 됐습니다! 짝짝짝', '2018-10-15',402, 331, 125, '거실', '20평대', 41,1, 'post_5');
INSERT INTO post (TITLE, CONTENT, REGI_DATE, VIEW_CNT, LIKE_CNT, SHARE_CNT, ROOM_TYPE, ROOM_SIZE, MEM_SEQ, BOARD_SEQ,IMAGE) VALUES('크고 좋은 집 대신 들판이 마당으로, 2평 밴 라이프', '프랑스 유학 중 구급대원 남자친구를 만나 열애 6년, 직장을 그만두고 낡은 밴 한대를 사서 손수 뜯어 고쳐 저희만의 집을 만들었습니다. ', '2018-10-14',215, 119, 204, '침실', '10평대미만', 56,1, 'post_6');
INSERT INTO post (TITLE, CONTENT, REGI_DATE, VIEW_CNT, LIKE_CNT, SHARE_CNT, ROOM_TYPE, ROOM_SIZE, MEM_SEQ, BOARD_SEQ,IMAGE) VALUES('취미가 같은 부부의 게임룸', '온라인겜. 콘솔겜. 모바일겜. 게임은 가리지 않고 다 좋아하고, 게임 방송까지 놓칠 수 없어..!! 영화 보기. 만화, 판타지 소설책 보기. 음악 듣기.. 집돌이, 집순이에 취미도 똑-같은 우리가 이사를 계획하며 무조건 1순위로 여겼던 건. 게임룸. ', '2018-10-14',50, 47, 21, '서재&작업실', '30평대', 30,1, 'post_7');
INSERT INTO post (TITLE, CONTENT, REGI_DATE, VIEW_CNT, LIKE_CNT, SHARE_CNT, ROOM_TYPE, ROOM_SIZE, MEM_SEQ, BOARD_SEQ,IMAGE) VALUES('원목과 라탄이 조화로운 공방 셀프인테리어', '계획이 없어도 오늘이 행복한 삶을 살기 위해 시작한 공방. 어색했던 첫 만남이지만 점점 손길이 닿으면서 익숙한 공간으로 채워지고 있습니다.', '2018-10-14',36, 36, 26, '서재&작업실', '10평대미만', 46,1, 'post_8');
INSERT INTO post (TITLE, CONTENT, REGI_DATE, VIEW_CNT, LIKE_CNT, SHARE_CNT, ROOM_TYPE, ROOM_SIZE, MEM_SEQ, BOARD_SEQ,IMAGE) VALUES('포인트 아이템으로 간단하게 분위기를 바꾸는 집', '사회생활을 하다 보면 스트레스받을 일들이 참 많아요. 하루의 마무리를 하는 집에서만큼은 하고 싶은 거 다 하고 스트레스에서부터 벗어날 수 있어야 한다고 생각해요.', '2018-10-13',211, 222, 60, '원룸', '10평대미만', 35,1, 'post_9');
INSERT INTO post (TITLE, CONTENT, REGI_DATE, VIEW_CNT, LIKE_CNT, SHARE_CNT, ROOM_TYPE, ROOM_SIZE, MEM_SEQ, BOARD_SEQ,IMAGE) VALUES('부모님의 반대를 무릅쓰고 8년 동안 살던 방 바꾸기', '부모님은 굳이 하자가 있는 방도 아닌데 뭣하러 돈과 시간을 들여가며 힘들게 방을 뒤집으려고 하냐고 못마땅해 하셨지만,무릅쓰고 감행! 실제로 한여름에 공사를 해야 해서 힘들긴 정말 힘들었지만 완성된 모습을 보신 부모님께서는 엄청 예쁘다며 관심을 보이셨어요.', '2018-10-13',310, 247, 69, '침실', '20평대', 26,1, 'post_10');
INSERT INTO post (TITLE, CONTENT, REGI_DATE, VIEW_CNT, LIKE_CNT, SHARE_CNT, ROOM_TYPE, ROOM_SIZE, MEM_SEQ, BOARD_SEQ,IMAGE) VALUES('매력적인 소품들로 채워진 12평 오피스텔', '집은 세상에서 저를 품어주는 가장 따뜻하고 유일한 공간이죠. 바깥에서 무슨 일이 있어도 일단 집에 들어오면 안심하게 되니깐요. 정말 고맙게 생각합니다. 집이 사람으로 변해 제 앞에 선다면 무한 뽀뽀를 날릴 정도로요!', '2018-10-12',111, 120, 10, '원룸', '10평대', 54,1, 'post_11');
INSERT INTO post (TITLE, CONTENT, REGI_DATE, VIEW_CNT, LIKE_CNT, SHARE_CNT, ROOM_TYPE, ROOM_SIZE, MEM_SEQ, BOARD_SEQ,IMAGE) VALUES('매력적인 소품들로 채워진 12평 오피스텔', '공간을 꾸미는건 쉬운일이 아니에요. 당신이 망설일 수 밖에 없는 이유를 적으려고 한다면 아마 끝이 없을 거에요. 그렇지만 주저하게 되는 수만가지 이유가 아니라, 주저하지 않고 시작해야하는 한가지 이유를 생각하셨으면 좋겠어요.', '2018-10-12',1000, 1000, 1000, '부엌', '40평대이상', 8,1, 'post_12');
INSERT INTO post (TITLE, CONTENT, REGI_DATE, VIEW_CNT, LIKE_CNT, SHARE_CNT, ROOM_TYPE, ROOM_SIZE, MEM_SEQ, BOARD_SEQ,IMAGE) VALUES('쇼룸을 그대로 옮겨놓은 듯한 아파트 인테리어', '저에게 집은 그냥 쉴 수 있는 공간을 넘어서서, 시선이 머무는 곳으로 만드는 거예요. 한 공간 한 공간이 포토존이 될 만큼 매일 꾸미고 가꾸는 이상 실현의 공간이죠.', '2018-10-11',330, 370, 107, '베란다', '30평대', 34,1, 'post_13');
INSERT INTO post (TITLE, CONTENT, REGI_DATE, VIEW_CNT, LIKE_CNT, SHARE_CNT, ROOM_TYPE, ROOM_SIZE, MEM_SEQ, BOARD_SEQ,IMAGE) VALUES('드디어 집의 가능성을 알아본 10년차 프로자취러', '집에서 지내는 시간이 별로 없다보니, 집을 돌보는일에 최선을 다했던 적이 없더라구요. 이제부터라도 저만의 공간을 만들어 보려구요.', '2018-10-11',232, 171, 43, '원룸', '10평대미만', 19,1, 'post_14');
INSERT INTO post (TITLE, CONTENT, REGI_DATE, VIEW_CNT, LIKE_CNT, SHARE_CNT, ROOM_TYPE, ROOM_SIZE, MEM_SEQ, BOARD_SEQ,IMAGE) VALUES('플로리스트의 반전 매력, 그레이톤으로 가득한 집', '제가 꾸며놓은 걸 이렇게 다른 사람들에게 공개하는 것도 처음이라 엄청 떨리고 기대됩니당!! 많은 분들이 저희 집 참고하셔서 집 꾸미는데 조금이나마 도움이 되었으면 좋겠어요 :-)', '2018-10-10',140, 144, 54, '서재&작업실', '20평대', 15,1, 'post_15');
INSERT INTO post (TITLE, CONTENT, REGI_DATE, VIEW_CNT, LIKE_CNT, SHARE_CNT, ROOM_TYPE, ROOM_SIZE, MEM_SEQ, BOARD_SEQ,IMAGE) VALUES('나를 위한 공간에선 좀 더 과감하게 ', '방을 꾸미려고 계획하고 계신다면 조금은 이기적으로, 조금 더 과감하게 생각하고 행동해보는 것도 좋을 것 같아요. 누군가에게 보여주기 위한 방이 아니라 내가 좋기 위해 만드는 나만의 공간이니까요!', '2018-10-10',276, 185, 112, '침실', '10평대', 47,1, 'post_16');
INSERT INTO post (TITLE, CONTENT, REGI_DATE, VIEW_CNT, LIKE_CNT, SHARE_CNT, ROOM_TYPE, ROOM_SIZE, MEM_SEQ, BOARD_SEQ,IMAGE) VALUES('집안 곳곳 눈을 뗄 수 없는 센스가 묻어나는 집', '혼자 있을 떈 휴식이 되는 공간, 여럿이 있을 땐 이야기가 있는 공간.혼자만의 시간을 누리기에도 좋고, 친구들이나 지인들과 있을 땐 집밖을 나갈 필요가 없는 공간.그게 바로 집 아닐까요?', '2018-10-10',477, 442, 205, '드레스룸', '30평대', 16,1, 'post_17');
INSERT INTO post (TITLE, CONTENT, REGI_DATE, VIEW_CNT, LIKE_CNT, SHARE_CNT, ROOM_TYPE, ROOM_SIZE, MEM_SEQ, BOARD_SEQ,IMAGE) VALUES('조금씩 따뜻하게 변하고 있는 24평 신혼집', '안녕하세요. 늘 변화하고 있는, 리모델링 후 2년 된 신혼집입니다. 다양한 시도를 좋아해서 이리저리 침대도 옮겨보고 가구배치 바꾸는 걸 즐기는 편인데 기록으로 남겨보아요! ', '2018-10-09',139, 196, 45, '욕실', '20평대', 11,1, 'post_18');
INSERT INTO post (TITLE, CONTENT, REGI_DATE, VIEW_CNT, LIKE_CNT, SHARE_CNT, ROOM_TYPE, ROOM_SIZE, MEM_SEQ, BOARD_SEQ,IMAGE) VALUES('작은 손길이 큰 변화로, 오래된 방 3개 복도식 아파트', '집이란 건 어렵게 생각하지 않고 시간을 두고 하나하나 바꾸면 되는 거 같아요. 이 집도 아직 바꿔야 할 것이 천지지만, 천천히 우리의 손때를 묻혀가고 있어요. ', '2018-10-09',75, 81, 28, '베란다', '20평대', 32,1, 'post_19');
INSERT INTO post (TITLE, CONTENT, REGI_DATE, VIEW_CNT, LIKE_CNT, SHARE_CNT, ROOM_TYPE, ROOM_SIZE, MEM_SEQ, BOARD_SEQ,IMAGE) VALUES('차분한 컬러감에 공간배치가 매력적인 집', '결혼 후 늘 눈으로만 보던 오늘의집에 저희집이 소개되어서 신기하기도 하고 기쁘네요~!', '2018-10-09',285, 313, 142, '부엌', '20평대', 14,1, 'post_20');
INSERT INTO post (TITLE, CONTENT, REGI_DATE, VIEW_CNT, LIKE_CNT, SHARE_CNT, ROOM_TYPE, ROOM_SIZE, MEM_SEQ, BOARD_SEQ,IMAGE) VALUES('북극과 바다를 컨셉으로 꾸민 온라인방들이', '뭔가 아무튼 다들 대단하게 하시는 것 같은데, 최근 인테리어에 재미붙여서 힘썼던 겸 해서 한 번 써봐요.', '2018-10-08',52, 37, 8, '서재&작업실', '10평대', 38,1, 'post_21');
INSERT INTO post (TITLE, CONTENT, REGI_DATE, VIEW_CNT, LIKE_CNT, SHARE_CNT, ROOM_TYPE, ROOM_SIZE, MEM_SEQ, BOARD_SEQ,IMAGE) VALUES('4평 미니 옥탑방, 3번째 변신 컨셉은 올블랙', '제 취향이 듬뿍 담긴 저만의 공간을 다시 만들었습니다. 모든 가구는 셀프로 만들었습니다.', '2018-10-08',112, 70, 38, '부엌', '10평대미만', 21,1, 'post_22');
INSERT INTO post (TITLE, CONTENT, REGI_DATE, VIEW_CNT, LIKE_CNT, SHARE_CNT, ROOM_TYPE, ROOM_SIZE, MEM_SEQ, BOARD_SEQ,IMAGE) VALUES('수납마저 감각적인 화이트톤 인테리어의 정석', '작아서 불편한 점도 있고 아쉬운 부분도 많았지만, 남편이 인테리어를 해서 직접 현장관리자로 제가 원하는 대로 만들어준 집이라 더 좋았어요. 저희가 같이 마련한 첫 번째 집이기도 해서 점점 더 좋아지고 있고요.', '2018-10-07',137, 340, 343, '아이방', '10평대', 33,1, 'post_23');
INSERT INTO post (TITLE, CONTENT, REGI_DATE, VIEW_CNT, LIKE_CNT, SHARE_CNT, ROOM_TYPE, ROOM_SIZE, MEM_SEQ, BOARD_SEQ,IMAGE) VALUES('속상하기도 했지만 비교하지 않고 사랑하기로 한 우리집', '저희 집 보다 훨씬 멋지고 고급스러운 집이 많지만 저만의 취향과 느낌이 녹아든 우리집을 사랑합니다. :)', '2018-10-07',98, 100, 32, '부엌', '20평대', 9,1, 'post_24');
INSERT INTO post (TITLE, CONTENT, REGI_DATE, VIEW_CNT, LIKE_CNT, SHARE_CNT, ROOM_TYPE, ROOM_SIZE, MEM_SEQ, BOARD_SEQ,IMAGE) VALUES('서울에서 부산으로 내려온 요가 강사의 아늑한 집', '집은 가식 없는 공간이자, 꾸밈없는 나의 모습을 볼 수 있는 곳이라고 생각해요.', '2018-10-06',98, 107, 23, '거실', '10평대', 25,1, 'post_25');
INSERT INTO post (TITLE, CONTENT, REGI_DATE, VIEW_CNT, LIKE_CNT, SHARE_CNT, ROOM_TYPE, ROOM_SIZE, MEM_SEQ, BOARD_SEQ,IMAGE) VALUES('소통이 잘 되는 사람들과 의욕만땅 부부의 리모델링', '일과 처음 해보는 리모델링 공사를 병행한다는 건 결코 쉬운 일이 아닐 거란 생각에 결국 저와 아내는 그간 생각해온 계획과 자재들을 업체 실장님들께 공유 드렸습니다. 그렇게 힘겹게 찾은 업체와 일을 진행 후 만족할 만한 집이 탄생했습니다. ', '2018-10-06',608, 484, 703, '욕실', '40평대이상', 40,1, 'post_26');
INSERT INTO post (TITLE, CONTENT, REGI_DATE, VIEW_CNT, LIKE_CNT, SHARE_CNT, ROOM_TYPE, ROOM_SIZE, MEM_SEQ, BOARD_SEQ,IMAGE) VALUES('13년 만에 재회해서 결혼한, 로맨틱한 신혼부부의 집', '집은 내가 세상에서 가장 편하게 쉴 수 있는 곳이 되어야 한다고 생각해요. 호텔이나 리조트는 빨래도 해주고, 방도 치워주고 밥도 주지만 그래도 집만큼 내가 가장 행복하게 쉴 수 있는 곳은 없다고 항상 말합니다.', '2018-10-06',450, 373, 236, '부엌', '20평대', 13,1, 'post_27');
INSERT INTO post (TITLE, CONTENT, REGI_DATE, VIEW_CNT, LIKE_CNT, SHARE_CNT, ROOM_TYPE, ROOM_SIZE, MEM_SEQ, BOARD_SEQ,IMAGE) VALUES('서러움과 처량함 끝에 만나니 더 반가운 우리의 집', '깔끔하게 깔린 우드데크 끄트머리에 보이는 낡은 나무판을 볼 때면, 종종 웃음이 나옵니다. 한 달이란 시간 동안 매일 밤 페인트를 묻혀가며 했던 일들. 의견이 안 맞아 다툰 날도 있었고, 못질을 하다 멈추고 나란히 앉아 노을을 바라보던 날도 있었습니다. 낡았던 집에 우리의 손길이 닿고, 추억이 쌓이고, 결국 보금자리가 되었습니다. 완벽하지 않은 것들은 따뜻하게 다가옵니다. 완벽하진 않지만 따스한 집에서 저희는 그렇게 찾아다녔던 행복이란 것을 찾았습니다.', '2018-10-05',156, 148, 28, '베란다', '20평대', 12,1, 'post_28');
INSERT INTO post (TITLE, CONTENT, REGI_DATE, VIEW_CNT, LIKE_CNT, SHARE_CNT, ROOM_TYPE, ROOM_SIZE, MEM_SEQ, BOARD_SEQ,IMAGE) VALUES('테라스를 휴양지로 바꿔버린 여성복 디자이너의 집', '집이라는 공간은 편안하면서 때로는 특별한 공간이어야 한다고 생각해요. 잠을 자는 곳이기도 하지만 저만의 식당이기도 하고, 카페이기도 한 곳이니까요. 전 항상 그런 생각을 가지고 집을꾸미고 있어요. 집에서 편하게 친구들이랑 모여서 소소한 이야기를 나눌 수 있는 곳.집에서 먹는 밥이 배를 채우기 위한 게 아닌 근사한 식사로 바뀔 수 있는 곳 말이에요.', '2018-10-04',176, 154, 53, '베란다', '10평대', 48,1, 'post_29');
INSERT INTO post (TITLE, CONTENT, REGI_DATE, VIEW_CNT, LIKE_CNT, SHARE_CNT, ROOM_TYPE, ROOM_SIZE, MEM_SEQ, BOARD_SEQ,IMAGE) VALUES('작고 불편하고 어설프지만, 더할나위 없는 첫 협소주택', '여기 들어온 지 이제 6개월쯤 지나고 있는데요, 눈으로 보기에 다른 것보다 심리적으로 많이 달라진 것을 느낍니다. 도심에 있을 때와 똑같은 하루를 보내고 있고, 똑같은 일을 하고 있는데 마음이 느긋해지고 조용한 마을이다 보니 편안함을 얻은 것 같습니다.', '2018-10-04',488, 401, 250, '서재&작업실', '20평대', 28,1, 'post_30');
INSERT INTO post (TITLE, CONTENT, REGI_DATE, VIEW_CNT, LIKE_CNT, SHARE_CNT, ROOM_TYPE, ROOM_SIZE, MEM_SEQ, BOARD_SEQ,IMAGE) VALUES('컬러감이 매력적인 일러스트레이터 znsoul의 집', '저는 대부분 시간을 집에서 작업하기 때문에, 집이 곧 일터이자 쉼터였죠. 일하고 싶은 곳이기도 하면서 동시에 쉬고 싶은 곳을 만드는 게 가장 어려웠어요.', '2018-10-04',211, 215, 49, '서재&작업실', '10평대', 44,1, 'post_31');
INSERT INTO post (TITLE, CONTENT, REGI_DATE, VIEW_CNT, LIKE_CNT, SHARE_CNT, ROOM_TYPE, ROOM_SIZE, MEM_SEQ, BOARD_SEQ,IMAGE) VALUES('이전과는 다른 날들을 선물해준 무난하고 깔끔한 우리집', '이 집에 들어오기 전까지만 해도 제게 집이란 그냥 잠을 자고 내 짐을 보관하며 하루하루를 견디는 무기력한 공간이었다면, 이번에 집을 꾸미면서 매일매일 감각을 느끼고 거기서 나오는 에너지를 받고, 또 표현할 수 있는 에너지틱한 공간이 되었어요.', '2018-10-04',86, 46, 24, '아이방', '30평대', 39,1, 'post_32');
INSERT INTO post (TITLE, CONTENT, REGI_DATE, VIEW_CNT, LIKE_CNT, SHARE_CNT, ROOM_TYPE, ROOM_SIZE, MEM_SEQ, BOARD_SEQ,IMAGE) VALUES('액자를 이용한 인테리어가 돋보이는 집', ' 공간에서 가족들과 소통하며 위안도 얻고 힐링도 얻는데요. 단순한 생활공간 개념을 넘어 편하면서 보다 아름다운 생활을 추구하고 있습니다.', '2018-10-03',95, 86, 32, '욕실', '20평대', 22,1, 'post_33');
INSERT INTO post (TITLE, CONTENT, REGI_DATE, VIEW_CNT, LIKE_CNT, SHARE_CNT, ROOM_TYPE, ROOM_SIZE, MEM_SEQ, BOARD_SEQ,IMAGE) VALUES('공통의 관심사로 삶과 공간을 채우는 부부의 두번째 집', '저희는 둘 다 영화를 좋아하는 애호가이자 영화를 만들며 살아가기로 한 영화인이기 때문에, 영화를 보는 것은 공통의 취미이자 삶 그 자체예요.', '2018-10-03',246, 270, 133, '부엌', '40평대이상', 23,1, 'post_34');
INSERT INTO post (TITLE, CONTENT, REGI_DATE, VIEW_CNT, LIKE_CNT, SHARE_CNT, ROOM_TYPE, ROOM_SIZE, MEM_SEQ, BOARD_SEQ,IMAGE) VALUES('반셀프로 시작해서 홈스타일링까지 직접. 컬러풀한 우리집', '반셀프인테리어로 시작한 우리집은 제가 직접 홈스타일링 하였습니다. 그리고, 하나씩 모은 인테리어소품들로 한껏 멋을 부려봤습니다. :)  컬러가 주는 경쾌함과 유니크함을 좋아합니다. ', '2018-10-03',90, 97, 33, '침실', '30평대', 17,1, 'post_35');
INSERT INTO post (TITLE, CONTENT, REGI_DATE, VIEW_CNT, LIKE_CNT, SHARE_CNT, ROOM_TYPE, ROOM_SIZE, MEM_SEQ, BOARD_SEQ,IMAGE) VALUES('재즈의, 재즈에 의한, 재즈를 위한 그의 복층', '지금 하고 있는 작업을 시작으로 사업이 번창하게 된다면 재즈바, 재즈카페, 재즈라이프스토어 등 재즈를 담을 수 있는 재즈복합문화공간을 만드는 것까지 생각하고 있기 때문에 제 공간을 가꾸는 건 이게 끝이 아니라 시작이랍니다. ', '2018-10-02',115, 115, 24, '원룸', '10평대미만', 43,1, 'post_36');
INSERT INTO post (TITLE, CONTENT, REGI_DATE, VIEW_CNT, LIKE_CNT, SHARE_CNT, ROOM_TYPE, ROOM_SIZE, MEM_SEQ, BOARD_SEQ,IMAGE) VALUES('집안 곳곳에 섬세한 감성이 묻어나는 집', '저는 ‘집’이라는 공간이 그 안에 사는 사람의 삶을 고스란히 보여준다고 생각해요.저는 신랑과 단정하고 따뜻한 삶을 꿈 꾼답니다. 삶은 계획대로 안 된다지만 그럼에도 노력하며 살 수는 있으니까요.', '2018-10-02',349, 333, 170, '부엌', '20평대', 53,1, 'post_37');
INSERT INTO post (TITLE, CONTENT, REGI_DATE, VIEW_CNT, LIKE_CNT, SHARE_CNT, ROOM_TYPE, ROOM_SIZE, MEM_SEQ, BOARD_SEQ,IMAGE) VALUES('세월과 현재가 공존하는 해방촌에 산다는 것', '독립해서 혼자 사는 것과 가족과 함께 살던 집은 달라요. 또, 학생 때 자취하는 것과 직장인이 자취하는 것도 다르고요. 정말 ‘독립’해서 ‘혼자’ 살림을 해야 하기 때문에 모든 곳에 제 손이 닿아요. 저는 일부러 아낌없이 집에 투자했어요. ', '2018-10-01',135, 147, 28, '거실', '10평대', 37,1, 'post_38');
INSERT INTO post (TITLE, CONTENT, REGI_DATE, VIEW_CNT, LIKE_CNT, SHARE_CNT, ROOM_TYPE, ROOM_SIZE, MEM_SEQ, BOARD_SEQ,IMAGE) VALUES('비우고 채우며 어색함을 지우면, 나만의 4평 완성', '제가 어릴 적에 쓰던 물건이 그대로 남아있는 제 방은 이상하게 그리움 보다는 어색함이 더 큰 곳이었어요. 뭐랄까, 다 자랐는데 아직도 초등학생 때 옷을 입어야 하는 기분? 그래서 이 곳을 다시 내 공간으로 바꿔야겠다 결심하고 하나씩 바꿨어요.', '2018-09-29',256, 177, 89, '베란다', '10평대미만', 36,1, 'post_39');
INSERT INTO post (TITLE, CONTENT, REGI_DATE, VIEW_CNT, LIKE_CNT, SHARE_CNT, ROOM_TYPE, ROOM_SIZE, MEM_SEQ, BOARD_SEQ,IMAGE) VALUES('신축 원룸이 빈티지 감성을 머금은 공간으로 바뀌다', '집은 온전히 저를 위한 곳이라고 생각해요. 분위기 좋은 카페도, 영화관도 좋고, 가족들이 함께 사는 집도 좋지만 저만을 위한 공간은 아니잖아요.', '2018-09-29',369, 333, 77, '침실', '10평대미만', 7,1, 'post_40');
INSERT INTO post (TITLE, CONTENT, REGI_DATE, VIEW_CNT, LIKE_CNT, SHARE_CNT, ROOM_TYPE, ROOM_SIZE, MEM_SEQ, BOARD_SEQ,IMAGE) VALUES('집을 돌보며 자연스럽게 만나는 행복', '가구 위치, 소품 위치만 바꿔줘도 새로운 분위기가 나는 걸 보면 집을 가꾼다는 건 크게 어려운 일이 아닐지도 모르겠어요.', '2018-09-28',217, 241, 132, '아이방', '30평대', 29,1, 'post_41');
INSERT INTO post (TITLE, CONTENT, REGI_DATE, VIEW_CNT, LIKE_CNT, SHARE_CNT, ROOM_TYPE, ROOM_SIZE, MEM_SEQ, BOARD_SEQ,IMAGE) VALUES('지금의 나를 아주 많이 닮은 우리집', '지금의 저희 집은 지금의 저를 아주 많이 닮은 듯 해요. 시간이 흘러 저와 가족의 생활, 생각이 바뀌게 되면 집의 모습도 자연스럽게 바뀌겠죠?', '2018-09-28',486, 474, 594, '거실', '30평대', 50,1, 'post_42');
INSERT INTO post (TITLE, CONTENT, REGI_DATE, VIEW_CNT, LIKE_CNT, SHARE_CNT, ROOM_TYPE, ROOM_SIZE, MEM_SEQ, BOARD_SEQ,IMAGE) VALUES('초보면 어때요! 계속 꾸며보는 거죠', '지금까지 이것저것 여러 스타일을 시도해봤지만 막상 해보니 생각했던데로 짜잔하고 완성되는건 아니더라고요. 그래도 계속 시도하다보면 언젠가는 짠하고 완성할 수 있는 날이 오지 않을까요?', '2018-09-27',999, 999, 999, '거실', '30평대', 18,1, 'post_43');
INSERT INTO post (TITLE, CONTENT, REGI_DATE, VIEW_CNT, LIKE_CNT, SHARE_CNT, ROOM_TYPE, ROOM_SIZE, MEM_SEQ, BOARD_SEQ,IMAGE) VALUES('삶은 온전히 나를 위해 살아갈때 가장 빛나는법', '어쩌면 행복한 일들보다 행복하지 않은 일들이 더 많은 게 우리의 삶이라고 하지만 그럼에도 불구하고 행복한 순간들은 늘 어디에나 존재한다는 걸셀프 인테리어를 하면서 다시 한번 느끼게 되었어요.', '2018-09-28',998, 998, 998, '거실', '40평대이상', 52,1, 'post_44');
INSERT INTO post (TITLE, CONTENT, REGI_DATE, VIEW_CNT, LIKE_CNT, SHARE_CNT, ROOM_TYPE, ROOM_SIZE, MEM_SEQ, BOARD_SEQ,IMAGE) VALUES('저한테 집은 엄마같아요.', '저한테 집은 마치 엄마 같은 곳이에요.밖에서 힘들고 지쳐있다가도 집에 오면 편안하고 위로가 되잖아요,엄마처럼.어딜 가더라도 결국 돌아오는 곳은 집이죠.', '2018-09-28',997, 997, 997, '서재&작업실', '30평대', 20,1, 'post_45');
INSERT INTO post (TITLE, CONTENT, REGI_DATE, VIEW_CNT, LIKE_CNT, SHARE_CNT, ROOM_TYPE, ROOM_SIZE, MEM_SEQ, BOARD_SEQ,IMAGE) VALUES('살아봐야 알 수 있다, 우리에게 진짜 좋은 공간은', '인테리어의 완성은 조화라고 생각하지만 완성이라는 말 자체가 집이라는 공간에 어울리지 않는 것 같아요. 살아가며 계속 바뀌는 게 집이잖아요? 가족구성원의 변화, 계절의 변화, 시간에 따라 변해가죠. 우리에게 진짜 좋은 공간은 살아봐야 정확하게 알 수 있어요.', '2018-09-27',996, 996, 996, '거실', '30평대', 45,1, 'post_46');
INSERT INTO post (TITLE, CONTENT, REGI_DATE, VIEW_CNT, LIKE_CNT, SHARE_CNT, ROOM_TYPE, ROOM_SIZE, MEM_SEQ, BOARD_SEQ,IMAGE) VALUES('하나의 공간을 다양한 인테리어로 표현한 집', '집은 무조건 편안함과 익숙함이라고 생각해요. 뭐니뭐니해도 집이 최고라는 말이 저절로 나오게 되는….', '2018-09-27',71, 69, 41, '거실', '30평대', 51,1, 'post_47');
INSERT INTO post (TITLE, CONTENT, REGI_DATE, VIEW_CNT, LIKE_CNT, SHARE_CNT, ROOM_TYPE, ROOM_SIZE, MEM_SEQ, BOARD_SEQ,IMAGE) VALUES('아이와 함께 하는 더 나은 삶을 위한 집', '아이가 태어난 뒤의 집의 모습은 아이가 태어나기 전의 모습과 많이 다릅니다. 날카롭고 작은 것은 점점 높은 곳으로 올라가고 알록달록하고 둥글고 부드러운 것만 바닥으로 내려옵니다. 덩달아 아이를 키우는 사람도 달라져요. 낯을 가리면서 사람을 가리고, 예민하고 까다롭게 굴던 제 마음도 덩달아 둥글어지더라고요.', '2018-09-26',187, 127, 93, '아이방', '20평대', 31,1, 'post_48');
INSERT INTO post (TITLE, CONTENT, REGI_DATE, VIEW_CNT, LIKE_CNT, SHARE_CNT, ROOM_TYPE, ROOM_SIZE, MEM_SEQ, BOARD_SEQ,IMAGE) VALUES('내가 꾸민 나의 옷장', '제 침실겸 옷방입니다 ㅎㅎ 원래 흰벽지였는데 혼자 페인트칠한다고 아주 힘들었네요ㅠㅠ 근데 하고보니 또 엄청이쁩니다 호', '2018-09-26',100, 59, 78, '드레스룸', '10평대', 24,1, 'post_49');
INSERT INTO post (TITLE, CONTENT, REGI_DATE, VIEW_CNT, LIKE_CNT, SHARE_CNT, ROOM_TYPE, ROOM_SIZE, MEM_SEQ, BOARD_SEQ,IMAGE) VALUES('여전히 잘 유지중인 드레스룸', '확장진행후 오픈형 시스템장 및 드레스룸의 색상과 맞추어 천정또한 블랙실크벽지 시공 및 할로겐 전구색으로으로 톤을 맞추어 드레스룸에 어울리는 채도를 만들었습니다.', '2018-09-25',29, 16, 30, '드레스룸', '40평대이상', 57,1, 'post_50');





INSERT INTO REVIEW(CONTENTS,REGI_DATE,IMAGE,NICKNAME) VALUES ('너무 잘 산거 같아요! 정말 좋습니다~', '2018-10-01', 'r1.jpg', 'manzitnam');
INSERT INTO REVIEW(CONTENTS,REGI_DATE,IMAGE,NICKNAME) VALUES ('괜찮네요. 배송이 좀 늦었지만 만족합니다!', '2018-10-02', 'r2.jpg', 'talzang');
INSERT INTO REVIEW(CONTENTS,REGI_DATE,IMAGE,NICKNAME) VALUES ('마음에 들어용! ', '2018-10-02', 'r3.jpg', 'hellspell130');
INSERT INTO REVIEW(CONTENTS,REGI_DATE,IMAGE,NICKNAME) VALUES ('배송도 빠르고 방에 너무 잘 어울려서 좋아요! ', '2018-10-03', 'r4.jpg', 'fire_love642');
INSERT INTO REVIEW(CONTENTS,REGI_DATE,IMAGE,NICKNAME) VALUES ('좋아요!', '2018-10-03', 'r5.jpg', 'destinyNinja546');
INSERT INTO REVIEW(CONTENTS,REGI_DATE,IMAGE,NICKNAME) VALUES ('배송 빠르고 제품도 제가 생각했던 그대로라 좋아요~', '2018-10-04', 'r6.jpg', 'darksun202');
INSERT INTO REVIEW(CONTENTS,REGI_DATE,IMAGE,NICKNAME) VALUES ('좋아요.', '2018-10-04', 'r7.jpg', 'cherishHpy314');
INSERT INTO REVIEW(CONTENTS,REGI_DATE,IMAGE,NICKNAME) VALUES ('다른색상으로 또 구입하고싶네요.', '2018-10-04', 'r8.jpg', 'fireNinja721');
INSERT INTO REVIEW(CONTENTS,REGI_DATE,IMAGE,NICKNAME) VALUES ('사진보고 판단하시죠~ 저는 정말 마음에 듭니다!', '2018-10-05', 'r9.jpg', 'beliefNinja039');
INSERT INTO REVIEW(CONTENTS,REGI_DATE,IMAGE,NICKNAME) VALUES ('너무 맘에듬, 생각보다 넘 튼튼하고 디자인도 맘에 들어서 만족합니다.ㅎㅎ', '2018-10-05', 'r10.jpg', 'peaceMaan226');
INSERT INTO REVIEW(CONTENTS,REGI_DATE,IMAGE,NICKNAME) VALUES ('설치기사님도 너무 친절하시구!빠른배송,빠른설치 감사합니다:) 추가구매할게요!', '2018-10-05', 'r11.jpg', 'blossomsun158');
INSERT INTO REVIEW(CONTENTS,REGI_DATE,IMAGE,NICKNAME) VALUES ('지인에게 선물해줬는데 매우 만족해하네요~좋아요!', '2018-10-07', 'r12.jpg', 'blesscouple187');
INSERT INTO REVIEW(CONTENTS,REGI_DATE,IMAGE,NICKNAME) VALUES ('아주 마음에 들어요. 아쉬운점은 배송이 너무 느렸다는거!', '2018-10-08', 'r13.jpg', 'yellowLife231');
INSERT INTO REVIEW(CONTENTS,REGI_DATE,IMAGE,NICKNAME) VALUES ('맘에 듭니다! 많이파세요~', '2018-10-08', 'r14.jpg', 'whiteNinja132');
INSERT INTO REVIEW(CONTENTS,REGI_DATE,IMAGE,NICKNAME) VALUES ('잘 쓰고 있습니다!!', '2018-10-09', 'r15.jpg', 'peaceLife989');
INSERT INTO REVIEW(CONTENTS,REGI_DATE,IMAGE,NICKNAME) VALUES ('깔끔하고 괜찮은거같아요.', '2018-10-09', 'r16.jpg', 'pretty_smile881');
INSERT INTO REVIEW(CONTENTS,REGI_DATE,IMAGE,NICKNAME) VALUES ('친구 주려고 구매했는데 친구가 좋아하네요! 추천합니다!', '2018-10-09', 'r17.jpg', 'bluehope921');
INSERT INTO REVIEW(CONTENTS,REGI_DATE,IMAGE,NICKNAME) VALUES ('가격대비 이정도 클라스면 좋습니다.ㅋㅋ', '2018-10-10', 'r18.jpg', 'enjoyMosol055');
INSERT INTO REVIEW(CONTENTS,REGI_DATE,IMAGE,NICKNAME) VALUES ('생각했던것보다 사이즈가 좀 크네요. 그것 빼고는 만족합니다.', '2018-10-11', 'r19.jpg', 'blesssun670');
INSERT INTO REVIEW(CONTENTS,REGI_DATE,IMAGE,NICKNAME) VALUES ('이쁘고 내구성 좋고..배송도 빠릅니다.', '2018-10-12', 'r20.jpg', 'peacerainbow313');
INSERT INTO REVIEW(CONTENTS,REGI_DATE,IMAGE,NICKNAME) VALUES ('좋습니다.', '2018-10-12', 'r21.jpg', 'hellHpy801');
INSERT INTO REVIEW(CONTENTS,REGI_DATE,IMAGE,NICKNAME) VALUES ('굳!!', '2018-10-13', 'r22.jpg', 'adorablespell983');
INSERT INTO REVIEW(CONTENTS,REGI_DATE,IMAGE,NICKNAME) VALUES ('한개 더 구매하려구요! 너무 좋아요!!', '2018-10-13', 'r23.jpg', 'cherishhope033');
INSERT INTO REVIEW(CONTENTS,REGI_DATE,IMAGE,NICKNAME) VALUES ('배송이 너무 느려서 별로에요. 한 15일은 기다린거같네요.', '2018-10-14', 'r24.jpg', 'blueMosol951');
INSERT INTO REVIEW(CONTENTS,REGI_DATE,IMAGE,NICKNAME) VALUES ('색상이 넘나 맘에 쏙 드네요^^', '2018-10-14', 'r25.jpg', 'cherishcouple599');
INSERT INTO REVIEW(CONTENTS,REGI_DATE,IMAGE,NICKNAME) VALUES ('약간 이상한 냄새가 나요. 그것 빼곤 괜찮아요.', '2018-10-15', 'r1.jpg', 'enjoysun050');
INSERT INTO REVIEW(CONTENTS,REGI_DATE,IMAGE,NICKNAME) VALUES ('가성비 갑! 추천합니다~~', '2018-10-16', 'r2.jpg', 'cutegirl163');
INSERT INTO REVIEW(CONTENTS,REGI_DATE,IMAGE,NICKNAME) VALUES ('제품도 만족스럽고 배송기사분도 정말 친절하셨어요!', '2018-10-17', 'r3.jpg', 'prettymonday920');
INSERT INTO REVIEW(CONTENTS,REGI_DATE,IMAGE,NICKNAME) VALUES ('배송이 엄청 빨랐어욬ㅋㅋ그리고 생각했던거보다 더 좋고 이뻐요. 가격에 비해서 만족합니다.', '2018-10-18', 'r4.jpg', 'white_love515');
INSERT INTO REVIEW(CONTENTS,REGI_DATE,IMAGE,NICKNAME) VALUES ('완전 좋아요! 배송빨랐구요 냄새도 하나도 안나요!', '2018-10-19', 'r5.jpg', 'cuterainbow007');
INSERT INTO REVIEW(CONTENTS,REGI_DATE,IMAGE,NICKNAME) VALUES ('너무너무너무 좋습니다.', '2018-10-19', 'r6.jpg', 'yellowmonday111');
INSERT INTO REVIEW(CONTENTS,REGI_DATE,IMAGE,NICKNAME) VALUES ('가격에 한번 놀라고 편안함에 두번 놀라네요 짱', '2018-10-20', 'r7.jpg', 'darkNinja909');
INSERT INTO REVIEW(CONTENTS,REGI_DATE,IMAGE,NICKNAME) VALUES ('제가 써보고 너무 좋아서 엄마도 사드렸어요. 너무 좋아하시네요~', '2018-10-21', 'r8.jpg', 'dreamcouple073');
INSERT INTO REVIEW(CONTENTS,REGI_DATE,IMAGE,NICKNAME) VALUES ('굿굿굿 좋아요!!!!!!!!!!!!^-^', '2018-10-22', 'r9.jpg', 'beliefNinja065');
INSERT INTO REVIEW(CONTENTS,REGI_DATE,IMAGE,NICKNAME) VALUES ('다른사이트랑 다 비교해봤는데 여기가 제일 저렴해서 샀어요!', '2018-10-22', 'r10.jpg', 'whitemonday047');
INSERT INTO REVIEW(CONTENTS,REGI_DATE,IMAGE,NICKNAME) VALUES ('항상 니방내방에서 가구 사는데~ 실망한적이 없어요!', '2018-10-23', 'r11.jpg', 'charmingLife751');
INSERT INTO REVIEW(CONTENTS,REGI_DATE,IMAGE,NICKNAME) VALUES ('너무 클까봐 걱정했는데 딱 적당하고 좋네요~', '2018-10-23', 'r12.jpg', 'beliefrainbow926');
INSERT INTO REVIEW(CONTENTS,REGI_DATE,IMAGE,NICKNAME) VALUES ('디자인이 생각했던 그대로구요. 제가 놓으려는곳에 크기가 딱 맞아서 놀랐어요~이뻐요^^', '2018-10-24', 'r13.jpg', 'peacegirl874');
INSERT INTO REVIEW(CONTENTS,REGI_DATE,IMAGE,NICKNAME) VALUES ('생각보다 색이 어두워서 놀랐지만 아주 좋아요~', '2018-10-24', 'r14.jpg', 'beatifulsun839');
INSERT INTO REVIEW(CONTENTS,REGI_DATE,IMAGE,NICKNAME) VALUES ('고민하다가 샀는데 괜한 시간낭비였네요~ 너무 좋습니다!!', '2018-10-25', 'r15.jpg', 'belieflucid127');
INSERT INTO REVIEW(CONTENTS,REGI_DATE,IMAGE,NICKNAME) VALUES ('작은 저희집에 딱이네요~ 제가 원했던 디자인이라 잘 쓰고 있어요~', '2018-10-26', 'r16.jpg', 'possiblelucid054');
INSERT INTO REVIEW(CONTENTS,REGI_DATE,IMAGE,NICKNAME) VALUES ('배송이 너무 오래걸렸어요. 15일날 주문하고 20일날 받았어요.ㅠㅠ', '2018-10-26', 'r17.jpg', 'white_love962');
INSERT INTO REVIEW(CONTENTS,REGI_DATE,IMAGE,NICKNAME) VALUES ('주문한지 일주일 좀 넘어서 왔습니다. 색감은 제가 생각했던 색감이 아니라서 조금 아쉽내요 ㅠㅠ', '2018-10-26', 'r18.jpg', 'darklucid067');
INSERT INTO REVIEW(CONTENTS,REGI_DATE,IMAGE,NICKNAME) VALUES ('배송 빠르게 왔고 제품 만족합니다!', '2018-10-27', 'r19.jpg', 'beliefcouple785');
INSERT INTO REVIEW(CONTENTS,REGI_DATE,IMAGE,NICKNAME) VALUES ('생각보다 별로에요. 너무 ㅜㅜ 배송도 늦고...환불 하려구요.', '2018-10-27', 'r20.jpg', 'peacesun275');
INSERT INTO REVIEW(CONTENTS,REGI_DATE,IMAGE,NICKNAME) VALUES ('사이즈가 너무 작아요 ㅠㅠ', '2018-10-27', 'r21.jpg', 'aromaBp229');
INSERT INTO REVIEW(CONTENTS,REGI_DATE,IMAGE,NICKNAME) VALUES ('진짜 너무 이뻐요! 설치기사님도 친절하시고 배송도 원하는 날짜에 받고 물건이 너무 이뻐요! 진짜!>_<', '2018-10-28', 'r22.jpg', 'hellHpy582');
INSERT INTO REVIEW(CONTENTS,REGI_DATE,IMAGE,NICKNAME) VALUES ('딱 왔는데 포장도 안전하게 잘 되있고, 제품도 정말 튼튼한거 같아서 매우 만족합니다! 많이파세요~', '2018-10-28', 'r23.jpg', 'peaceLife759');
INSERT INTO REVIEW(CONTENTS,REGI_DATE,IMAGE,NICKNAME) VALUES ('배송 빠르고 제품도 제가 생각했던 그대로라 좋아요~', '2018-10-28', 'r24.jpg', 'hell_love646');
INSERT INTO REVIEW(CONTENTS,REGI_DATE,IMAGE,NICKNAME) VALUES ('배송이 주말 끼어서 늦을까 걱정했는데 빨랐고, 설치 기사님도 너무 착하셨어요! 자리배치도 원하는곳에 척척 해주시고..매우 만족합니다!', '2018-10-29', 'r25.jpg', 'peace_smile127');



