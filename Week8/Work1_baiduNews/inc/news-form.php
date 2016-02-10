
<?php
	$rnd_1 = rand(0, 10000);
	$rnd_2 = rand(10001, 20000);
	
?>
<ul class="nav nav-tabs">
    <li class="active "><a data-toggle="tab" href="#news-normal<?php echo $rnd_1 ?>">Normal News</a></li>
    <li><a data-toggle="tab" href="#img-news<?php echo $rnd_2 ?>">Image News</a></li>
</ul>
  
 <div class="tab-content">
	<div id="news-normal<?php echo $rnd_1 ?>" class="tab-pane fade in active ">
		<form class="form-horizontal panel panel-default" name="news" method="post" action="controller.php" enctype="multipart/form-data">
			<div class="panel-body">
				<div class="form-group form-group-sm">
					<label class="col-sm-2 control-label">News Title</label>
					<div class="col-sm-10">
						<input type="text" name="title" class="form-control" placeholder="News Title" aria-describedby="Process" required="">
					</div>
				</div>
				<div class="form-group form-group-sm">
					<label class="col-sm-2 control-label">News Image</label>
					<div class="col-sm-10">
						<input name="image" type="file" class="form-control" >
					</div>
				</div>
				<div class="form-group form-group-sm">
					<label class="col-sm-2 control-label">News Label</label>
					<div class="col-sm-2">
						<input name="label" type="text" class="form-control" placeholder="News Label" maxlength="4">
					</div>
				</div>
				<div class="form-group form-group-sm">
					<label class="col-sm-2 control-label">News Content</label>
					<div class="col-sm-10">
						<textarea name="content" class="form-control" rows="10" required=""></textarea>												
					</div>
				</div>
				<input type="hidden" id="act" name="action" value="upload" />
				<div class="col-sm-2">
					<input name="submit" id="submit" type="submit" class="btn btn-info" value="Submit"/>
				</div>
			</div>
		</form>
	</div>
	<div id="img-news<?php echo $rnd_2 ?>" class="tab-pane fade">
		<form class="form-horizontal panel panel-default" name="img-news" method="post" action="controller.php" enctype="multipart/form-data">
			<div class="panel-body">
				<div class="form-group form-group-sm">
					<label class="col-sm-2 control-label">News Title</label>
					<div class="col-sm-10">
						<input type="text" name="title" class="form-control" placeholder="News Title" aria-describedby="Process">
					</div>
				</div>
				<div class="form-group form-group-sm">
					<label class="col-sm-2 control-label">News Image 1</label>
					<div class="col-sm-10">
						<input type="file" name="image[]" class="form-control"/>
					</div>
				</div>
				<div class="form-group form-group-sm">
					<label class="col-sm-2 control-label">News Image 2</label>
					<div class="col-sm-10">
						<input type="file" name="image[]" class="form-control" >
					</div>
				</div>
				<div class="form-group form-group-sm">
					<label class="col-sm-2 control-label">News Image 3</label>
					<div class="col-sm-10">
						<input type="file" name="image[]" class="form-control" >
					</div>
				</div>
				<div class="form-group form-group-sm">
					<label class="col-sm-2 control-label">News Label</label>
					<div class="col-sm-2">
						<input type="text" name="label" class="form-control" placeholder="News Label" maxlength="4">
					</div>
				</div>
				<input type="hidden" name="action" value="upload" />
				<div class="col-sm-2">
					<input type="submit" class="btn btn-info" value="Submit"/>
				</div>
			</div>
		</form>
	</div>
</div>