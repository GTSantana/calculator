function clearAll () {
  document.getElementById("textview").value = "";
}

function insert (num) {
  document.getElementById("textview").value = document.getElementById("textview").value + num;
}

function dot () {
  let disp = document.getElementById("textview").value;
  if (disp.substring(disp.length - 1, disp.length) != "."){
    document.getElementById("textview").value = document.getElementById("textview").value + ".";
  }
}
function del () {
  disp = document.getElementById("textview").value;
  document.getElementById("textview").value = disp.substring(0, disp.length - 1);
}

function equal () {
  disp = document.getElementById("textview").value;
  if (disp) {
    document.getElementById("textview").value = window.eval(disp);
  }
}