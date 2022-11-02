// function updateDraggable() {
//     const boxs = document.querySelectorAll('.box');
//     boxs.forEach(box => {
//         console.log(box)
//         box.setAttribute('draggable', true)
//     })
// }

// updateDraggable()
function handleDragStart(e) {
    this.style.opacity = '0.5';
    dragSrcEl = this;
    e.dataTransfer.efffectAllowed = "move";
    e.dataTransfer.setData("text/html", this.innerHTML);
    parentElement = this.parentElement;
}

function handleDragEnd(e) {
    this.style.opacity = '1';

    columns.forEach(column => {
        column.classList.remove('selected-column');
    })
}

function handleDrop(e) {
    e.stopPropagation();
    e.preventDefault();

    if (this !== parentElement){
        this.appendChild(dragSrcEl);
    }
}

function handleDragLeave(e) {
    this.classList.remove('selected-column')
}

function handleDragEnter(e) {
    if (this === parentElement) return;
    this.classList.add('selected-column')
}

function handleDragOver(e) {
    if (e.preventDefault) {
        e.preventDefault();
    }
    return false;
}


const boxes = document.querySelectorAll('.box')
boxes.forEach(box => {
    box.setAttribute('draggable', true)
    box.addEventListener('dragstart', handleDragStart);
    box.addEventListener('dragend', handleDragEnd);
})

const columns = document.querySelectorAll('.column')
columns.forEach(column => {
    column.addEventListener('drop', handleDrop);
    column.addEventListener('dragleave', handleDragLeave);
    column.addEventListener('dragenter', handleDragEnter);
    column.addEventListener('dragover', handleDragOver);
})