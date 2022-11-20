

const innerDiv = document.getElementById("inner_div");

document.addEventListener("mousemove", (event) => {
    
    innerDiv.style.width = `${event.x}px`;
})