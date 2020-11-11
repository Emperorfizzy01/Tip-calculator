function calculateTip() {
  var billAmt = document.getElementById("billamt").value;
  var serviceQuality = document.getElementById("serviceQual").value;
  var numberOfPeople = document.getElementById("peopleamt").value;

  if (billAmt === "" || serviceQuality == 0) {
    alert("Please enter a number");
  }

  if (numberOfPeople === 0 || numberOfPeople <= 1){
    document.getElementById("totalTip").style.display = "none";
  } else {
    document.getElementById("totalTip").style.display = "block";
  }

  var total = (billAmt * serviceQuality) / numberOfPeople;

  total = (total * 100) / 100;

  total = total.toFixed(2);

  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;
}

document.getElementById("totalTip").style.display = "none";
document.getElementById("tip").innerHTML = "none";

document.getElementById("calculate").addEventListener("click", function () {
   calculateTip();
})