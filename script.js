function display() {
  let input1 = document.getElementById("input");
  let input = input1.value;
  if (input !== "") {
    let newitem = document.createElement("li");
    newitem.innerText = input;

    input1.value = "";
    let del = document.createElement("span");
    del.innerText = "X";
    newitem.appendChild(del);
    
    del.onclick = function () {
      newitem.remove();
    };
    let list = document.getElementById("List");
    list.appendChild(newitem);
    
    newitem.onclick = function () {
      newitem.classList.toggle("done");
    };

  } else {
    alert("Text is Required");
  }
}
