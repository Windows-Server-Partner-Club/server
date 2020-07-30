<?php

// Text file
$filename = 'output.txt';

// License type
$type = $_POST['type'];
file_put_contents($filename, "License type: $type; \n", FILE_APPEND);

if ($type == 1)
{
    $data_center_proc = $_POST['dataCenterProc'];
    $data_center_core = $_POST['dataCenterCore'];

    file_put_contents($filename, "DatacenterProc: $data_center_proc; \n", FILE_APPEND);
    file_put_contents($filename, "DatacenterCore: $data_center_core; \n", FILE_APPEND);
}
elseif ($type == 2)
{
    $standard_proc = $_POST['standardProc'];
    $standard_core = $_POST['standardCore'];
    $addVM         = $_POST['addVM'];

    file_put_contents($filename, "StandardProc: $standard_proc; \n", FILE_APPEND);
    file_put_contents($filename, "StandardCore: $standard_core; \n", FILE_APPEND);
    file_put_contents($filename, "AddVM: $addVM; \n", FILE_APPEND);
}


$range_loc_users_cal            = $_POST['rangeLocUsersCal'];
$range_loc_devices_cal          = $_POST['rangeLocDevicesCal'];

$beforeLocUsers         = $_POST['beforeLocUsers'];
$beforeLocDevices       = $_POST['beforeLocDevices'];
$usersQuantity          = $_POST['usersQuantity'];
$devicesQuantity        = $_POST['devicesQuantity'];


file_put_contents($filename, "rangeLocUsersCal: $range_loc_users_cal; \n", FILE_APPEND);
file_put_contents($filename, "rangeLocDevicesCal: $range_loc_devices_cal; \n", FILE_APPEND);

file_put_contents($filename, "beforeLocUsers: $beforeLocUsers; \n", FILE_APPEND);
file_put_contents($filename, "beforeLocDevices: $beforeLocDevices; \n", FILE_APPEND);
file_put_contents($filename, "usersQuantity: $usersQuantity; \n", FILE_APPEND);
file_put_contents($filename, "devicesQuantity: $devicesQuantity; \n", FILE_APPEND);



for ($i = 1; $i <= 4; $i++)
{
    $nowLicenseType = $_POST["nowLicenseType" . $i];

    if (empty($nowLicenseType)) {
        $nowLicenseType = 'disabled';
    }

    file_put_contents($filename, "nowLicenseType$i: $nowLicenseType; \n", FILE_APPEND);
}

for ($i = 1; $i <= 4; $i++)
{
    $nowCalVersion = $_POST["nowCalVersion" . $i];

    if (empty($nowCalVersion)) {
        $nowCalVersion = 'disabled';
    }

    file_put_contents($filename, "nowCalVersion$i: $nowCalVersion; \n", FILE_APPEND);
}


$neededUserCal = $_POST['neededUserCal'];
$neededDeviceCal = $_POST['neededDeviceCal'];

file_put_contents($filename, "neededUserCal: $neededUserCal; \n", FILE_APPEND);
file_put_contents($filename, "neededDeviceCal: $neededDeviceCal; \n", FILE_APPEND);


$contactFormName = $_POST['contactFormName'];
$contactFormEmail = $_POST['contactFormEmail'];
$contactFormPhone = $_POST['contactFormPhone'];

file_put_contents($filename, "contactFormName: $contactFormName; \n", FILE_APPEND);
file_put_contents($filename, "contactFormEmail: $contactFormEmail; \n", FILE_APPEND);
file_put_contents($filename, "contactFormPhone: $contactFormPhone; \n", FILE_APPEND);


file_put_contents($filename, "\n\n\n", FILE_APPEND);


echo "<h1 class='title--black' style='text-align: center;width: 100%;'>Форма проходит обработку...</h1>";



echo '<script>window.location.href = "index.php";</script>';