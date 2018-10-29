<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<title>니방내방</title>
	
	<!-- 외부라이브러리 -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script><!--단아 -->
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script> <!--재경 -->
	<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script> <!--재경 -->
	<link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css"><!--재경/단아 -->	
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.2/css/all.css" integrity="sha384-/rXc/GQVaYpyDdyxK+ecHPVYJSN9bmVFBvjA/9eOB+pb3F2w2N6fc5qB9Ew5yIns" crossorigin="anonymous"><!--단아 -->
	<link href="https://fonts.googleapis.com/css?family=Noto+Sans+KR" rel="stylesheet">
	
	
	<!-- 공통 -->
	<script src="${context}/resources/js/app.js"></script> 
	<script src="${context}/resources/js/jquery/popup.js"></script> <!--단아/준 -->
	<link rel="stylesheet" href="${context}/resources/css/style.css" />
    <link rel="SHORTCUT ICON" href="${context}/resources/img/hyeri/favicon.ico" />
    
    <!-- 개인 -->
    <link rel="stylesheet" href="${context}/resources/css/hyeri.css" />
    <link rel="stylesheet" href="${context}/resources/css/danah.css" />
    <link rel="stylesheet" href="${context}/resources/css/jaekyung.css"/>
    <link rel="stylesheet" href="${context}/resources/css/jieun.css" />
 	<link rel="stylesheet" href="${context}/resources/css/jun.css" />
  
</head>
<body>
    <div id="wrapper"></div>
    <script>
        app.init('${context}');
    </script>
</body>
</html>