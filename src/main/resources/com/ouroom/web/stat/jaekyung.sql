-=====Notice=====
-@Author : 류재경
-@Create : 2018-10-23
-@Desc : 공지사항
- 차트 sql
-==============

  SELECT visit_date AS visitDate , COUNT(*) AS count FROM visitor 
  WHERE visit_date BETWEEN #{startDate} AND #{endDate}
  GROUP BY visit_date ;
  
  
  SELECT SUM(view_cnt) FROM post 
  WHERE regi_date LIKE  #{todayDate}
  GROUP BY regi_date;
  
-=====Notice=====
-@Author : 류재경
-@Create : 2018-10-24
-@Desc : 공지사항
- 차트 프로시저
-==============

DROP PROCEDURE IF EXISTS sp_select_totalsale;
CREATE PROCEDURE sp_select_totalsale(
	IN in_start_date VARCHAR(20),
	IN in_end_date VARCHAR(20)
)
BEGIN
	SET @START_DATE = in_start_date;
	SET @END_DATE = in_end_date;
	SET @SQL = 'SELECT a.purchase_date date, sum(b.sum * a.cnt) AS psale
				FROM item b
					JOIN (SELECT item_seq , SUM(cnt) cnt, purchase_date
						FROM purchase
						WHERE purchase_date between @START_DATE and @END_DATE
						GROUP BY item_seq, purchase_date) a
					ON b.seq = a.item_seq
				GROUP BY a.purchase_date';
	PREPARE stmt FROM @SQL;
	EXECUTE stmt;
    DEALLOCATE PREPARE stmt;
END;

-=====Notice=====
-@Author : 류재경
-@Create : 2018-10-25
-@Desc : 공지사항
- 뷰 생성 해서 extrvstt 만듦
-==============








