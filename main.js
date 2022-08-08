let canvas;
let ctx;

canvas = document.createElement("canvas");
ctx = canvas.getContext("2d");

canvas.width=400;
canvas.height=700;

document.body.appendChild(canvas);

let backgroundImage, spaceShipImage;


//우주선 좌표
let spaceShipX = canvas.width / 2 - 25;
let spaceShipY = canvas.height - 50;


function loadImage() 
{
    backgroundImage = new Image();
    backgroundImage.src = "images/background.png";

    spaceShipImage = new Image();
    spaceShipImage.src = "images/spaceship.png";
}


let keysDown = {}
function setupKeyboardListener()
{
    document.addEventListener("keydown", function (event)
    {
        keysDown[event.key] = true;
        console.log("무슨 키가 눌렸어?",keysDown);
    });
    document.addEventListener("keyup",function(event)
    {
        delete keysDown[event.key]
        console.log("버튼 클릭 후",keysDown);
    });
}

function update()
{
    if('ArrowRight' in keysDown)
    {
        spaceShipX += 5;
    } // right
    if('ArrowLeft' in keysDown)
    {
        spaceShipX -= 5;
    } // left
    if('ArrowUp' in keysDown)
    {
        spaceShipY -= 5;
    } // up
    if('ArrowDown' in keysDown)
    {
        spaceShipY += 5;
    } // down
    if(spaceShipX <= 0)
    {
        spaceShipX = 0;
    }
    if(spaceShipX >= canvas.width-50)
    {
        spaceShipX = canvas.width-50;
    }
    if(spaceShipY >= canvas.height - 50)
    {
        spaceShipY = canvas.height - 50;
    }
    if(spaceShipY <= canvas.height-200)
    {
        spaceShipY = canvas.height-200;
    }
}

function render()
{
    ctx.drawImage(backgroundImage,0,0,canvas.width,canvas.height);
    ctx.drawImage(spaceShipImage,spaceShipX,spaceShipY);
} 

function main()
{
    update();
    render();
    requestAnimationFrame(main);
}

loadImage();
setupKeyboardListener();
main();