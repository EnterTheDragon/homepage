<!DOCTYPE html>
<html lang="en">
<head>
<meta name="description" content="Richardson&#39;s, Quality bakers and specialists in baking stylish and delicious cakes based in Penge, South East London.">
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0">
<title>Richardson's &#124; Master Bakers</title>
<!--[if lt IE 9]>
<script src="http://html5shiv.googlecode.com/svn/trunk/html5-els.js"></script>
<![endif]-->
<link rel="stylesheet" type="text/css" href="style.css">
<link href='http://fonts.googleapis.com/css?family=Domine:700' rel='stylesheet' type='text/css'>
<link rel="icon" type="image/png" href="favicon.png">
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-47874355-2', 'danielmjackson.co.uk');
  ga('send', 'pageview');
</script>
</head>
<body>
<header>
<h1><a href="index.php">Richardson's Master Bakers</a></h1>
<nav>
<ul>
  <li><a href="index.php">Home</a></li>
  <li><a href="gallery.php">Gallery</a></li>
  <li><a href="press.php">Press</a></li>
  <li class="current"><a href="order.php">Order</a></li>
</ul>
</nav>
</header>
<div class="wrapper">
<div class="img">
</div>
<article>
<p>If you would like to order or make an enquiry online you can fill in the form below. Alternatively you can call our number, order in store, or email us at <a href="richardsons@example.com">us&#64;example.com</a>.</p>
<div class="form">
<div>
<p>Style of cake:</p> 
<label><select>
<option>Select</option>
<option>Wedding</option>
<option>Birthday</option>
<option>Other</option>
</select> 
</label>
</div>
<div>
<p>Type of cake:</p> 
<label><select>
<option>Select</option>
<option>Fruit</option>
<option>Sponge</option>
<option>Without eggs</option>
</select> 
</label>
</div>
<div>
<p>Shape:</p>
<label><select>
<option>Select</option>
<option>Round</option>
<option>Square</option>
<option>Other</option>
</select> 
</label>
</div>
<div>
<p>Flavour:</p> 
<label><select>
<option>Select</option>
<option>Vanilla</option>
<option>Chocolate</option>
<option>Other</option>
</select> 
</label>
</div>
<div>
<p>Tier number:</p>
<label><select>
<option>1</option>
<option>2</option>
<option>3</option>
</select> 
</label>
</div>
<div>
<p>Bottom tier size:</p> 
<label><select>
<option>Select</option>
<option>6 inches</option>
<option>8 inches</option>
<option>10 inches</option>
<option>12 inches</option>
<option>14 inches</option>
<option>Bigger</option>
</select>
</label>
</div>
<div>

<p>Special instructions:</p>
<label><textarea cols="37" rows="5"></textarea>
</label>
</div>
<div>
<p>Full name:</p> <input type="text">
</div>
<div>
<p>Telephone:</p> <input type="text">
</div>
<div>
<p class="email">Email:</p> <input type="text">
</div>
<input class="submit" type="button" value="Submit Form">
</div> <!-- end #form -->
</article>
<? include('includes/about.php');?>
</div><!-- end .wrapper -->
<? include('includes/footer.php');?>
</body>
</html>