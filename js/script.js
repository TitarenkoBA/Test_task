function myFunction() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function range(){
	let	val = document.querySelector('.javascript__range_level').value;
	document.querySelector('.javascript__range_level').style = `background: -webkit-linear-gradient(left ,#ccb1f1 0%,#8886c3 ${val}%,#fff ${val}%, #fff 100%)`;
 }