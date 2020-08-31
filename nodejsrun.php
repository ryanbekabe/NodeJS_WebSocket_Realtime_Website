<?php
echo 'example:<br/> ../nodejsrun.php?cek=server.js<br/>';
$output = shell_exec('nodejs .'.$_GET['cek']); 
echo "<br/>----<br/><pre>$output</pre>";

//Default PHP 7