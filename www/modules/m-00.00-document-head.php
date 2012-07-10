<!DOCTYPE html>
<!--[if IE 8]><html class="ie8" lang="<?php echo $lang ?>" dir="<?php echo $dir ?>"><![endif]-->
<!--[if IE 9]><html class="ie9" lang="<?php echo $lang ?>" dir="<?php echo $dir ?>"><![endif]-->
<!--[if !IE]><!--><html lang="<?php echo $lang ?>" dir="<?php echo $dir ?>"><!--<![endif]-->
	<head>
		<title><?php echo $title ?></title>
		<meta charset="utf-8" />
		<meta name="description" content="<?php echo $description ?>" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<?php include($server . '/components/c-00.00-global-css.html'); ?>
		<?php
			foreach ($styles as $key => $style) {
				echo '<link rel="stylesheet" href="'.$style.'" type="text/css" />';
			}
 		?>
		<script src="/script/modernizr-respond.js"></script>
	</head>
	<body class="<?php echo $body ?>">
