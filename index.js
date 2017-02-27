function options(min, max, def, id) {
  for (i = min; i <= max; i++) {
    const select = document.getElementById(id);
    const option = document.createElement("option");
    if (i === def) {
      option.selected = "selected";
    }
    option.value = i;
    option.appendChild(document.createTextNode(i));
    select.appendChild(option);
  }
}

function settings() {
  options(1, 100, 4, "lines");
  options(4, 7, 6, "numbers");
  options(32, 55, 47, "total");
}
settings();

let status = "show";

function showHide() {
  const body = document.getElementsByTagName("BODY")[0];
  if (status === "show") {
    body.style.overflow = "auto";
    let width = 0;
    document.getElementById("options").style.animationName = "slideOut";
    const hide = setTimeout(function() {document.getElementById("options").style.display = "none";}, 500);
    hide;
    status = "hide";
  } else if (status === "hide") {
    body.style.overflow = "hidden";
    let width = -600;
    document.getElementById("options").style.animationName = "slideIn";
    document.getElementById("options").style.display = "flex";
    status = "show";
  }
}

function array() {
  forty = [];
  for (i = 0; i < total; i++) {
    forty.push(i + 1);
  }
}

function random() {
  showHide();
  arr = [];
  lines = parseFloat(document.getElementById("lines").value);
  numbers = parseFloat(document.getElementById("numbers").value);
  total = parseFloat(document.getElementById("total").value);
  for (j = 0; j < lines; j++) {
    array();
    arr.push([]);
    for (i = 0; i < numbers; i++) {
      let val = Math.floor(Math.random() * forty.length);
      arr[j].push(forty[val]);
      forty.splice(val, 1);
    }
  }
}

function render() {
  random();
  const ul = document.getElementById("main");
  ul.innerHTML = "";
  for (i = 0; i < lines; i++) {
    arr[i].sort(function(a, b) {
      return a - b
    });
    const li = document.createElement("li");
    for (j = 0; j < arr[i].length; j++) {
      const div = document.createElement("div");
      div.className = "number";
      div.appendChild(document.createTextNode(arr[i][j]));
      li.appendChild(div);
    }
    ul.appendChild(li);
  }
}
