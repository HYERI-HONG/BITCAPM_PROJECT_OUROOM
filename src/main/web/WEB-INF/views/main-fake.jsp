<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<title>니방내방</title>
    <script src="${context}/resources/js/app.js"></script> 
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <link rel="stylesheet" href="${context}/resources/css/style.css" />
    <link href="https://fonts.googleapis.com/css?family=Noto+Sans+KR" rel="stylesheet">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
    <link rel="SHORTCUT ICON" href="${context}/resources/img/hyeri/favicon.ico" />

    <!-- danah -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js"></script>
    <script src="https://code.jquery.com/ui/1.10.4/jquery-ui.min.js" integrity="sha256-oTyWrNiP6Qftu4vs2g0RPCKr3g1a6QTlITNgoebxRc4=" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
    <link rel="stylesheet" href="${context}/resources/css/danah.css" />
    <!-- jaekyung -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="${context}/resources/css/jaekyung.css" />
    <!-- jieun -->
    <link rel="stylesheet" href="${context}/resources/css/jieun.css" />
    <!-- jun -->
    <link rel="stylesheet" href="${context}/resources/css/jun.css" />
    <script src="${context}/resources/js/jquery/popup.js"></script>
    <!-- hyeri -->
<!--     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script> -->
<style>
/*
* Style tweaks
* --------------------------------------------------
*/
html,
body {
    overflow-x: hidden; /* Prevent scroll on narrow devices */
}
body {
    padding-top: 100px;
}
footer {
    padding: 30px 0;
}

/*
 * Custom styles
 */
.navbar-brand {
    font-size: 24px;
}

.navbar-container {
    padding: 20px 0 20px 0;
}

.navbar.navbar-fixed-top.fixed-theme {
    background-color: #222;
    border-color: #080808;
    box-shadow: 0 0 5px rgba(0,0,0,.8);
}

.navbar-brand.fixed-theme {
    font-size: 18px;
}

.navbar-container.fixed-theme {
    padding: 0;
}

.navbar-brand.fixed-theme,
.navbar-container.fixed-theme,
.navbar.navbar-fixed-top.fixed-theme,
.navbar-brand,
.navbar-container{
    transition: 0.8s;
    -webkit-transition:  0.8s;
}
</style>
</head>

<body>
<div id="wrapper"></div>
    <script>


var nav =(()=>{
	var init=()=>{
		console.log('nav.init 진입 ');
		onCreate();
	};
	var onCreate =()=>{
		setContentView();
	nav.myNavBar.init(  [
    	    "header",
    	    "header-container",
    	    "brand"
    	]);
	nav.window.onscroll = function(e) {
    	    offSetManager();
    	}
    	offSetManager();

    	var myNavBar = {

	    	    flagAdd: true,

	    	    elements: [],

	    	    init: function (elements) {
	    	        this.elements = elements;
	    	    },

	    	    add : function() {
	    	        if(this.flagAdd) {
	    	            for(var i=0; i < this.elements.length; i++) {
	    	                document.getElementById(this.elements[i]).className += " fixed-theme";
	    	            }
	    	            this.flagAdd = false;
	    	        }
	    	    },

	    	    remove: function() {
	    	        for(var i=0; i < this.elements.length; i++) {
	    	            document.getElementById(this.elements[i]).className =
	    	                    document.getElementById(this.elements[i]).className.replace( /(?:^|\s)fixed-theme(?!\S)/g , '' );
	    	        }
	    	        this.flagAdd = true;
	    	    }

	    	};
	    	
    	function offSetManager(){

    	    var yOffset = 0;
    	    var currYOffSet = window.pageYOffset;

    	    if(yOffset < currYOffSet) {
    	        myNavBar.add();
    	    }
    	    else if(currYOffSet == yOffset){
    	        myNavBar.remove();
    	    }

    	};
	    	
	};
	var setContentView =()=>{
		console.log('nav.setContentView 진입');

    $('<nav id="header" class="navbar navbar-fixed-top">').appendTo($('#wrapper'));
    $('<div id="header-container" class="container navbar-container">').appendTo($('#header'));
    $('<div class="navbar-header">').appendTo($('#header-container'));
    $('<div id="navbar" class="collapse navbar-collapse">').appendTo($('#header-container'));
    
    $('<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">').appendTo($('.navbar-header'));
	$('<span class="sr-only">Toggle navigation</span>').appendTo($('.navbar-toggle'));
	$('<span class="icon-bar"></span>').appendTo($('.navbar-toggle '));
	$('<span class="icon-bar"></span>').appendTo($('.navbar-toggle '));
	$('<span class="icon-bar"></span>').appendTo($('.navbar-toggle '));
	
	$('<ul class="nav navbar-nav">').appendTo($('#navbar'));
	$('<li class="active">').html('<a href="#">상품정보</a>').appendTo($('.nav '));
	$('<li>').html('<a href="#about">리뷰<span class="count">(233)</span></a>').appendTo($('.nav '));
	$('<li>').html('<a href="#contact">Contact</a></li>').appendTo($('.nav '));
	};
	return{	init:init};
})();
nav.init();
    </script>
</body>
</html>