<!DOCTYPE html>
<html>

	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Management Console</title>

		<link href="css/bootstrap.min.css" rel="stylesheet">
		<link href="css/management_console.css" rel="stylesheet">
		
		<script src="js/jquery.min.js"></script>
		<script src="js/bootstrap.min.js"></script>
	</head>

	<body>
		<div class="navbar navbar-default navbar-fixed-top">
			<div class="container">

				<div class="navbar-header">
					<a href="#" class="navbar-brand">Management Console</a>
				</div>
				<ul class="nav navbar-nav">
					<li class="active"><a href="#">Home</a></li>
					<li><a href="#">Products</a></li>
					<li><a href="#">Help</a></li>
				</ul>
				<div class="nav navbar-nav navbar-right">
					<button type="button" class="btn btn-info navbar-btn">Message<span class="badge">5</span></button>
					<img src="img/th.jpeg" class="img-circle" style="height: 30px; background: #02BB00;" />
					<button type="button" href="#" class="btn btn-link navbar-btn navbar-link">Sign out</button>

				</div>

			</div>
		</div>

		<div class="navbar"></div>

		<div class="container-fluid">
			<div class="row">
				<div class="col-md-2 side-bar well well-sm">
					<ul class="nav nav-pills nav-stacked ">
						<li class="active"><a href="#recommand" data-toggle='pill'>Recommand</a></li>
						<li class=""><a href="#news" data-toggle='pill'>News</a></li>
						<li><a href="#local" data-toggle='pill'>Local</a></li>
						<li><a href="#image" data-toggle='pill'>Image</a></li>
						<li><a href="#entertainment" data-toggle='pill'>Entertainment</a></li>
						
					</ul>
				</div>
				<div id="r-panel" class="col-md-10 col-md-offset-2">
					<div class="tab-content">
						<div id="recommand" class="tab-pane fade in active">
							<?php include "inc/news-form.php" ?>
						</div>
						<div id="news" class="tab-pane fade">
							<?php include "inc/news-form.php" ?>
						</div>
						<div id="local" class="tab-pane fade">
							<?php include "inc/news-form.php" ?>
						</div>
						<div id="image" class="tab-pane fade">
							<?php include "inc/big-img-news-form.php" ?>
						</div>
						<div id="entertainment" class="tab-pane fade">
							<?php include "inc/news-form.php" ?>
						</div>

					</div>
				</div>
			</div>
		</div>

		
		<script src="js/m-console.js"></script>
	</body>

</html>