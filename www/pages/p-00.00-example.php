<?php $server = $_SERVER['DOCUMENT_ROOT']; ?>
<?php 
	$lang = 'en-gb';
	$dir = 'ltr';
	$title = 'Example page';
	$description = 'Example page';
	$styles = array('/css/example.css');
	include($server . '/modules/m-00.00-document-head.php'); 
?>

<?php include($server . '/modules/m-01.00-document-footer.php'); ?>