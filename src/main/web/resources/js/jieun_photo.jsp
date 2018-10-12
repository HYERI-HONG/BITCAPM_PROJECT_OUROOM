/*<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!doctype html>
<html lang="en">
<head>
  <title>Home</title>
   
  <style> 


.carousel-control        { width:  4%; }
.carousel-control.left,.carousel-control.right {margin-left:15px;background-image:none;}

.carousel-inner .item.right,.carousel-inner .item.left {transform: translateX(0);}

  .carousel-inner .item.left.active { transform: translateX(-100%);}
  .carousel-inner .item.right.active {transform: translateX(100%);}
  .carousel-inner .item.next {transform: translateX(100%)}
  .carousel-inner .item.prev {transform: translateX(-100%)}
  
  </style>
</head>
<body>
<div id="wrapper">

<div class="container">
  <div class="row">
    <div class="col-xs-12">
    <h2>Featured Shows</h2>
        <h6>Sed porta cursus enim, vitae maximus felis luctus iaculis.</h6>
    <div class="carousel slide" id="myCarousel">
      <div class="carousel-inner">
        <div class="item active ">
          <div>
                <img src="${context}/resources/musica/img/bg-img/dj-1.jpg" alt="" class="img-responsive">
            </div>
        </div>
        </div>
      <a class="left carousel-control" href="#myCarousel" data-slide="prev"><i class="glyphicon glyphicon-chevron-left"></i></a>
      <a class="right carousel-control" href="#myCarousel" data-slide="next"><i class="glyphicon glyphicon-chevron-right"></i></a>
    </div>
  </div>
  </div>
</div>
  
</div>
<script>
//app.init('${context}');

// Instantiate the Bootstrap carousel

$('#myCarousel').carousel({
  interval: 10000
})

$('.carousel .item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));

  if (next.next().length>0) {
    next.next().children(':first-child').clone().appendTo($(this));
  }
  else {
    $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
  }
});
</script>
</body>
</html>*/