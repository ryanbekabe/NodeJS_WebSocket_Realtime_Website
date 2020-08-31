<?php
echo 'example:<br/> ../cekport.php?cek=3000<br/>';
$output = shell_exec('lsof -i tcp:.'.$_GET['cek']); 
echo "<br/>----<br/><pre>$output</pre>";

//Default PHP 7