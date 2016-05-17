// prevCount
var prevCount = 0;

// init current sum
resetCheckedCount();

// init total sum
resetTotalCheckedCount();

// init checkboxes
var prevCount = getCountValue();
resetCheckboxes(prevCount);

//////////////////////////////
// Functionality

function resetCheckedCount() {
  getCheckedField().innerText = 0;
}

function resetTotalCheckedCount() {
  getTotalCheckedField().innerText = 0;
}

function getCheckedField() {
  var sumContainer = document.getElementById("sum");
  var values = sumContainer.getElementsByClassName("value");

  return values[0];
}

function getTotalCheckedField() {
  var totalSumContainer = document.getElementById("total-sum");
  var totalValues = totalSumContainer.getElementsByClassName("value");

  return totalValues[0];
}

function getCountValue() {
  var countInput = document.getElementById("checkCount");
  var count = parseInt(countInput.value);

  return isNaN(count) ? 0 : count;
}

function processInput() {
  // gets count of checkboxes
  var count = getCountValue();

  // checks if count was changed
  if(count == prevCount)
    return;

  // shows and save new prevCount
  resetCheckboxes(count);
  prevCount = count;
}

function resetCheckboxes(count) {
  var checkList = document.getElementById("list");

  // removes all childs
  while (checkList.firstChild) {
    checkList.removeChild(checkList.firstChild);
  }

  // append new checkboxes
  for(var i = 0; i < count; ++i) {
    var checkbox = createCheckbox();
    checkList.appendChild(checkbox);
  }

  // reset checked sum
  resetCheckedCount();
}

function createCheckbox() {
  // creates checkbox
  var input = document.createElement("INPUT");

  // creates a type attribute
  var typeAttr = document.createAttribute("type");
  typeAttr.value = "checkbox";
  input.setAttributeNode(typeAttr);

  input.onchange = function () {
    if(!this.checked) {
      return;
    }

    increaseCheckedCount();
    increaseTotalCheckedCount();
  }

  return input;
}

function increaseCheckedCount() {
  getCheckedField().innerText = parseInt(getCheckedField().innerText) + 1;
}

function increaseTotalCheckedCount() {
  getTotalCheckedField().innerText = parseInt(getTotalCheckedField().innerText) + 1;
}
