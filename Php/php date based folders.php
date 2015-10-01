function makeDirFromDate($path)
{
    $date = date('Y-m-d');
    $darr = explode("-", $date);
    foreach ($darr as $dar){
        if (!mkdir($path . '/' . $dar, 0777, TRUE)) {
          //  return FALSE;
        }
        $path = $path.'/'.$dar;
    }
    return $path;
}

$datx = date('Y/m/d');
$destination ='uploads/'.$datx;
if(!is_dir($destination)){
    echo makeDirFromDate('uploads');
    echo 'no dir creating';
}else {
    echo 'dir exists';
}
