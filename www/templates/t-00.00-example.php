<?php $server = $_SERVER['DOCUMENT_ROOT']; ?>
<?php 
	$lang = 'en-gb';
	$dir = 'ltr';
	$title = 'Example template';
	$description = 'Example template';
	include($server . '/modules/m-00.00-document-head.php'); 
?>
<?php include($server . '/modules/m-02.00-example-page-header.php'); ?>

<?php include($server . '/modules/m-03.00-example-page-footer.php'); ?>
<?php include($server . '/modules/m-01.00-document-footer.php'); ?>