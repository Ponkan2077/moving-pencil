
const pencil = document.querySelector("#hell");

const moveAmount = 10;
let x = 0;
let y = 0;

document.addEventListener ("keydown", event =>{
    console.log(event.key);
    event.preventDefault();
    if (event.key.startsWith("Arrow")) {
        switch (event.key) {
            case "ArrowUp":
                y -= moveAmount;
                break;

            case "ArrowDown":
                 y += moveAmount;
                break;

            case "ArrowRight":
                x += moveAmount;
                break;

            case "ArrowLeft":
                x -= moveAmount;
                break;
        }
    }
    switch (event.key) {
        case "w":
                y -= moveAmount;
                break;

            case "s":
                 y += moveAmount;
                break;

            case "d":
                x += moveAmount;
                break;

            case "a":
                x -= moveAmount;
                break;
    }
    pencil.style.top = `${y}px`;
    pencil.style.left = `${x}px`;
}
);



//use toggle 
// 65 = a
// 68 = d
// 87 = w
// 83 = s
// hello world