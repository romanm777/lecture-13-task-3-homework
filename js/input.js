function checkInput(event) {
  // allows only number values without decimals
  var charCode = (event.which) ? event.which : event.keyCode;
  if ((charCode < 48 || charCode > 57))
    return false;

  var countInput = document.getElementById("checkCount").value;
  var selStart = document.getElementById("checkCount").selectionStart;
  var selEnd = document.getElementById("checkCount").selectionEnd;

  if(countInput.length == 2 && selEnd == selStart)
    return false;

  return true;
}
