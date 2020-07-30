function onRangeChange() {
  var rangeLocUsersCalValue = document.getElementById('rangeLocUsersCal').value,
    rangeLocDevicesCalValue = document.getElementById('rangeLocDevicesCal')
      .value;

  document.getElementById(
    'rangeLocUsersCalLabel'
  ).innerHTML = rangeLocUsersCalValue;
  document.getElementById(
    'rangeLocDevicesCalLabel'
  ).innerHTML = rangeLocDevicesCalValue;
}

function rangeOutput() {
  var rangeLocUsersCalValue = document.getElementById('rangeLocUsersCal').value,
    rangeLocDevicesCalValue = document.getElementById('rangeLocDevicesCal')
      .value;

  document.getElementById(
    'rangeLocUsersCalResult'
  ).innerHTML = rangeLocUsersCalValue;
  document.getElementById(
    'rangeLocDevicesCalResult'
  ).innerHTML = rangeLocDevicesCalValue;
}

$(window).scroll(function() {
  var hT = $('.possibilities').offset().top - $(window).height() / 1.5,
    wS = $(window).scrollTop();

  if (wS > hT) {
    $('#chart1').addClass('animated');
    window.setTimeout(function() {
      $('#chart2').addClass('animated');
    }, 300);
    window.setTimeout(function() {
      $('#chart3').addClass('animated');
    }, 600);
    window.setTimeout(function() {
      $('#chart4').addClass('animated');
    }, 900);
    window.setTimeout(function() {
      $('#chart5').addClass('animated');
    }, 1200);
    window.setTimeout(function() {
      $('#chart6').addClass('animated');
    }, 1500);
  }
});

$('input[type="number"]').on('keyup', function() {
  if (+this.value < 0) {
    this.value = 0;
  }
});

function onQuantityChange() {
  var srv = +document.querySelector('input[name="nowLicenseType"]:checked')
    .value;
  var cal = +document.querySelector('input[name="nowCalVersion"]:checked')
    .value;

  var beforeLocUsers = document.getElementById('beforeLocUsers').value,
    beforeLocDevices = document.getElementById('beforeLocDevices').value,
    usersQuantity = document.getElementById('usersQuantity').value,
    devicesQuantity = document.getElementById('devicesQuantity').value;

  if (beforeLocUsers === '' || +beforeLocUsers < 0) beforeLocUsers = 0;
  if (beforeLocDevices === '' || +beforeLocDevices < 0) beforeLocDevices = 0;
  if (usersQuantity === '' || +usersQuantity < 0) usersQuantity = 0;
  if (devicesQuantity === '' || +devicesQuantity < 0) devicesQuantity = 0;

  var neededUserCal = document.getElementById('neededUserCal'),
    neededDeviceCal = document.getElementById('neededDeviceCal');

  // if ($('#nowCalVersion4').prop('checked')) {
  //   neededUserCal.value = -parseInt(beforeLocUsers) + parseInt(usersQuantity);
  //   neededDeviceCal.value =
  //     -parseInt(beforeLocDevices) + parseInt(devicesQuantity);
  // } else {
  //   neededUserCal.value = parseInt(beforeLocUsers) + parseInt(usersQuantity);
  //   neededDeviceCal.value =
  //     parseInt(beforeLocDevices) + parseInt(devicesQuantity);
  // }

  if (srv <= cal) {
    neededUserCal.value = -parseInt(beforeLocUsers) + parseInt(usersQuantity);
    neededDeviceCal.value =
      -parseInt(beforeLocDevices) + parseInt(devicesQuantity);
  } else {
    neededUserCal.value = parseInt(usersQuantity);
    neededDeviceCal.value = parseInt(devicesQuantity);
  }

  if (neededUserCal.value < 0) {
    neededUserCal.value = 0;
  }

  if (neededDeviceCal.value < 0) {
    neededDeviceCal.value = 0;
  }
}
