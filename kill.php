<?php
echo 'example:<br/> ../kill.php?cek=3000<br/>';
$output = shell_exec('kill -9 .'.$_GET['cek']); 
echo "<br/>----<br/><pre>$output</pre>";

//Default PHP 7