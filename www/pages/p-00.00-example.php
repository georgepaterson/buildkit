<?php $server = $_SERVER['DOCUMENT_ROOT']; ?>
<?php 
	$lang = 'en-gb';
	$dir = 'ltr';
	$title = 'Example page';
	$description = 'Example page';
	$styles = array('/style/modules/example.css');
	$body = array('example');
	include($server . '/modules/m-00.00-document-head.php'); 
?>
<?php include($server . '/modules/m-02.00-example-page-header.php'); ?>
<p class="example-dialog">Example dialog</p>
<?php include($server . '/modules/m-03.00-example-page-footer.php'); ?>
<?php include($server . '/modules/m-01.00-document-footer.php'); ?>