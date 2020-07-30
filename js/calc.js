$(document).ready(function() {
  // Datacenter
  document.getElementById('dataCenterProc').value = '';
  document.getElementById('dataCenterCore').value = '';

  document.getElementById('baseSKU').innerHTML = '0';

  document.getElementById('addCores').innerHTML = '0';

  document.getElementById('sixteenCore').innerHTML = '0';

  document.getElementById('fourCore').innerHTML = '0';

  document.getElementById('twoCore').innerHTML = '0';

  // Standard
  document.getElementById('standardProc').value = '';
  document.getElementById('standardCore').value = '';

  document.getElementById('standardBaseSKU').innerHTML = '0';

  document.getElementById('standardAddCores').innerHTML = '0';

  document.getElementById('standardSixteenCore').innerHTML = '0';

  document.getElementById('standardFourCore').innerHTML = '0';

  document.getElementById('standardTwoCore').innerHTML = '0';

  document.getElementById('totalVM').innerHTML = '2';

  document.getElementById('coresPerVM').innerHTML = '0';

  document.getElementById('vmSixteen').innerHTML = '0';

  document.getElementById('vmFour').innerHTML = '0';

  document.getElementById('vmTwo').innerHTML = '0';

  changeType();
});

function changeType() {
  if (document.getElementById('type1').checked) {
    document.getElementById('dataCenter').style.display = 'block';
    document.getElementById('standard').style.display = 'none';
  } else {
    document.getElementById('dataCenter').style.display = 'none';
    document.getElementById('standard').style.display = 'block';
  }
}

function calculateDatacenter() {
  var vContinue = false;

  var regex = /^[0-9]+$/;

  var textProc = document.getElementById('dataCenterProc').value;
  var textCore = document.getElementById('dataCenterCore').value;

  if (textProc.match(regex) && textCore.match(regex)) {
    var numProc = parseInt(textProc);
    var numCore = parseInt(textCore);
    var totalNum = 0;

    if (numProc > 2) {
      if (numCore <= 8) {
        totalNum = numProc * 8;
      } else {
        totalNum = numProc * numCore;
      }
    } else {
      if (numProc * numCore <= 16) {
        totalNum = 16;
      } else {
        totalNum = numProc * numCore;
      }
    }

    document.getElementById('dataCenterCoreNumber').innerHTML = totalNum;
    vContinue = true;
  } else {
    document.getElementById('dataCenterCoreNumber').innerHTML = '0';
  }

  if (vContinue) {
    //Clear all to start

    document.getElementById('baseSKU').innerHTML = '0';

    document.getElementById('addCores').innerHTML = '0';

    document.getElementById('sixteenCore').innerHTML = '0';

    document.getElementById('fourCore').innerHTML = '0';

    document.getElementById('twoCore').innerHTML = '0';

    //Base SKU Activation
    if (document.getElementById('dataCenterCoreNumber').innerHTML != '0') {
      document.getElementById('baseSKU').innerHTML = '1';
    }

    //Additional Cores Needed
    var vDifference = totalNum - 16;

    if (vDifference > 0) {
      //Additional cores needed
      document.getElementById('addCores').innerHTML = vDifference;

      var vDivisor = Math.floor(vDifference / 16);
      var vRemainder = vDifference % 16;

      if (vDivisor > 0) {
        document.getElementById('sixteenCore').innerHTML = vDivisor;
      }

      vDifference = vRemainder;

      vDivisor = Math.floor(vDifference / 4);
      vRemainder = vDifference % 4;

      if (vDivisor > 0) {
        document.getElementById('fourCore').innerHTML = vDivisor;
      }

      vDifference = vRemainder;

      vDivisor = Math.floor(vDifference / 2);
      vRemainder = vDifference % 2;

      if (vDivisor > 0) {
        document.getElementById('twoCore').innerHTML = vDivisor;
      }
    }
  }
}

function calculateStandard() {
  var vContinue = false;
  // document.getElementById('addVM').disabled = 'disabled';

  var regex = /^[0-9]+$/;

  var textProc = document.getElementById('standardProc').value;
  var textCore = document.getElementById('standardCore').value;

  if (textProc.match(regex) && textCore.match(regex)) {
    var numProc = parseInt(textProc);
    var numCore = parseInt(textCore);
    var totalNum = 0;

    if (numProc > 2) {
      if (numCore <= 8) {
        totalNum = numProc * 8;
      } else {
        totalNum = numProc * numCore;
      }
    } else {
      if (numProc * numCore <= 16) {
        totalNum = 16;
      } else {
        totalNum = numProc * numCore;
      }
    }

    document.getElementById('standardCoreNumber').innerHTML = totalNum;
    vContinue = true;
  } else {
    document.getElementById('standardCoreNumber').innerHTML = '0';
  }

  if (vContinue) {
    //Clear to start
    document.getElementById('standardBaseSKU').innerHTML = '0';

    document.getElementById('standardAddCores').innerHTML = '0';

    document.getElementById('standardSixteenCore').innerHTML = '0';

    document.getElementById('standardFourCore').innerHTML = '0';

    document.getElementById('standardTwoCore').innerHTML = '0';

    // document.getElementById('addVM').disabled = '';
    // document.getElementById('addVM').focus();

    //Base SKU Activation
    if (document.getElementById('standardCoreNumber').innerHTML != '0') {
      document.getElementById('standardBaseSKU').innerHTML = '1';
    }

    //Additional Cores Needed
    var vDifference = totalNum - 16;

    if (vDifference > 0) {
      //Additional cores needed
      document.getElementById('standardAddCores').innerHTML = vDifference;

      var vDivisor = Math.floor(vDifference / 16);
      var vRemainder = vDifference % 16;

      if (vDivisor > 0) {
        console.log('dd');
        document.getElementById('standardSixteenCore').innerHTML = vDivisor;
      }

      vDifference = vRemainder;

      vDivisor = Math.floor(vDifference / 4);
      vRemainder = vDifference % 4;

      if (vDivisor > 0) {
        document.getElementById('standardFourCore').innerHTML = vDivisor;
      }

      vDifference = vRemainder;

      vDivisor = Math.floor(vDifference / 2);
      vRemainder = vDifference % 2;

      if (vDivisor > 0) {
        document.getElementById('standardTwoCore').innerHTML = vDivisor;
      }
    }
    addVM();
  }
}

function addVM() {
  // console.log('ded');

  //Clear for next result
  document.getElementById('vmSixteen').innerHTML = '0';
  document.getElementById('vmFour').innerHTML = '0';
  document.getElementById('vmTwo').innerHTML = '0';

  var regex = /^[0-9]+$/;
  var numIncluded = parseInt(document.getElementById('vmIncluded').innerHTML);
  var numAdd = 0;
  var textAdd = document.getElementById('addVM').value;

  if (textAdd == '' || textAdd == '0') {
    document.getElementById('coresPerVM').innerHTML = '0';
    document.getElementById('totalVM').innerHTML = '2';

    return false;
  }

  var vContinue = false;
  if (textAdd.match(regex)) {
    numAdd = parseInt(textAdd);
    vContinue = true;
  }

  document.getElementById('totalVM').innerHTML = numIncluded + numAdd;

  if (vContinue) {
    var oddCount = 0;
    var start = numAdd;
    while (start > 0) {
      if (start % 2 != 0) {
        oddCount += 1;
      }
      start--;
    }

    var coreNum = parseInt(
      document.getElementById('standardCoreNumber').innerHTML
    );

    document.getElementById('coresPerVM').innerHTML = oddCount * coreNum + '';

    coreNum = parseInt(document.getElementById('coresPerVM').innerHTML);

    var vDivisor = Math.floor(coreNum / 16);
    var vRemainder = coreNum % 16;

    if (vDivisor > 0) {
      document.getElementById('vmSixteen').innerHTML = vDivisor;
    }

    coreNum = vRemainder;

    vDivisor = Math.floor(coreNum / 4);
    vRemainder = coreNum % 4;

    if (vDivisor > 0) {
      document.getElementById('vmFour').innerHTML = vDivisor;
    }

    coreNum = vRemainder;

    vDivisor = Math.floor(coreNum / 2);
    vRemainder = coreNum % 2;

    if (vDivisor > 0) {
      document.getElementById('vmTwo').innerHTML = vDivisor;
    }
  }
}

function resetAll(str) {
  if (str === 'datacenter') {
    document.getElementById('dataCenterCoreNumber').innerHTML = '0';

    document.getElementById('dataCenterProc').value = '';
    document.getElementById('dataCenterCore').value = '';

    document.getElementById('baseSKU').innerHTML = '0';

    document.getElementById('addCores').innerHTML = '0';

    document.getElementById('sixteenCore').innerHTML = '0';

    document.getElementById('fourCore').innerHTML = '0';

    document.getElementById('twoCore').innerHTML = '0';
  }

  // Standard
  if (str === 'standard') {
    document.getElementById('standardProc').value = '';
    document.getElementById('standardCore').value = '';
    document.getElementById('addVM').value = '';
    // document.getElementById('addVM').disabled = 'disabled';

    document.getElementById('standardCoreNumber').innerHTML = '0';

    document.getElementById('standardBaseSKU').innerHTML = '0';

    document.getElementById('standardAddCores').innerHTML = '0';

    document.getElementById('standardSixteenCore').innerHTML = '0';

    document.getElementById('standardFourCore').innerHTML = '0';

    document.getElementById('standardTwoCore').innerHTML = '0';

    // document.getElementById('vmIncluded').innerHTML = '0';

    document.getElementById('totalVM').innerHTML = '2';

    document.getElementById('coresPerVM').innerHTML = '0';

    document.getElementById('vmSixteen').innerHTML = '0';

    document.getElementById('vmFour').innerHTML = '0';

    document.getElementById('vmTwo').innerHTML = '0';
  }
}
