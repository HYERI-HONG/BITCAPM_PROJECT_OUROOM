package com.ouroom.web.mbr;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class hyeri_sql {
	public static void main(String[] args) {
        Connection conn;
        Statement stmt;
        String result = "";
        try {
            Class.forName("org.mariadb.jdbc.Driver");
            conn = DriverManager.getConnection("jdbc:mariadb://203.236.209.48/mariadb", "mariadb", "mariadb");
            stmt = conn.createStatement();

            String sql = " SELECT * "
                        + "FROM MEMBER";
            ResultSet rs = stmt.executeQuery(sql);
            if(rs.next()) {
                /*result = rs.getString("title");*/
            	result = "연결성공";
            }else {
                result = "연결실패";
            }
            System.out.println("결과 : "+result);
         } catch (Exception e) {
            e.printStackTrace();
        }
	}
}
