package com.ouroom.web.stat;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ouroom.web.mbr.MemberMapper;

@RestController
public class Ryu {
	@Autowired
	MemberMapper m;

	@Transactional
	public void purchaseR() {
		
		Connection conn;
		String sql = "";
        Statement stmt;
        
            for(int i=27 ; i<=27 ; i++) {
            	try {
                    Class.forName("org.mariadb.jdbc.Driver");
                    conn = DriverManager.getConnection("jdbc:mariadb://mariadb.cgjzxi4mdrri.ap-northeast-2.rds.amazonaws.com/mariadb", "jjmariadb", "jjmariadb");
                    stmt = conn.createStatement();
                    
            	
        		//item_seq
        		int itemSeq = i;
        		
        		sql = "SELECT SEQ FROM ITEM_OPTION WHERE ITEM_SEQ LIKE "+itemSeq;
        		ResultSet rs = stmt.executeQuery(sql);
        		int r= 0;
        		int[] seq = new int[10];
            	while(rs.next()) {
            		seq[r]=rs.getInt("seq");
            		r++;
            	}
            	sql = "SELECT COUNT(*) AS CO FROM ITEM_OPTION WHERE ITEM_SEQ LIKE "+itemSeq;
        		ResultSet ps = stmt.executeQuery(sql);
            	int count = 0;
            	while(ps.next()) {
            		count=ps.getInt("CO");
            	}
            	
            	int tc=0;
            	sql = "SELECT SALE_CNT FROM ITEM WHERE SEQ = "+itemSeq;
            	ResultSet ts = stmt.executeQuery(sql);
            	while(ts.next()) {
            		tc=ts.getInt("SALE_CNT");
            	}
            	
            	
            	String date ="";
            	int mem = 0;
            	int cccc=0;
            	for(int cccccc=0; cccccc<tc ; ) {
            		int eee= (int)(Math.random()*count);
					     cccc = (int)(Math.random()*5+1);
					      mem = (int)(Math.random()*4496+5);
					      date = "2018-11-" + String.format("%02d", (int) ((Math.random() * 15) + 1));
					      sql = "INSERT INTO TEST_PURCHASE ( MEM_SEQ , ITEM_SEQ , CNT , OPTION_SEQ , PURCHASE_DATE ) VALUES ( '"+mem+"' , '"+itemSeq+"' , '"+cccc+"' , '"+seq[eee]+"' , '"+date+"' )";
					     stmt.executeUpdate(sql);
					     cccccc=cccccc+cccc;
					
					
            	}
            	System.out.println(i);
         } catch (Exception f) {
            f.printStackTrace();
        }
            }
	}

}
