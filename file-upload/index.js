let item = document.getElementById("container");

function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }
}

function handleDragEnter(e) {
  this.style.opacity = ".8";
}

function handleDragLeave(e) {
  this.style.opacity = "1";
}

function handleDrop(e) {
  e.stopPropagation();
  e.preventDefault();

  const files = e.dataTransfer.files;

  for (var i = 0; (f = files[i]); i++) {
    let p = document.createElement("p");
    item.append(`${i + 1}- Filename: ${files[0].name}; `, p);
  }
}

item.addEventListener("dragover", handleDragOver);
item.addEventListener("dragenter", handleDragEnter);
item.addEventListener("dragleave", handleDragLeave);
item.addEventListener("drop", handleDrop);
