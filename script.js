function shadow() {
  document.getElementById("abc").style.border = "yellowgreen 3px solid";
}

v = setInterval(shadow, 2000);

function jj() {
  if (document.getElementById("m").value == "sel") {
    alert("Military can't be 'Please Select'");
    return false;
  }
  if (
    document.getElementById("pro").value == document.getElementById("uu").value
  ) {
    alert("First Name and Last Name are the same");
    return false;
  }
}
