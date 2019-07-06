var canvas;
var img, bking;
var x = 200;
var y = 200;

// 初期化処理
function initial(){
    canvas = document.querySelector('#canvas');
    canvas.onkeydown = draw;

    img = new Image();
    img.src = "character.png";
    bking = new Image();
    bking.src = "background.png";
    bking.onload = function(){
        drawBackground();
    }
}

// クリック時の処理
function draw(event) {
    drawBackground();
    drawImage(event);
}

// 背景の描画
function drawBackground() {
    var context = canvas.getContext('2d');
    context.clearRect(0,0,800,600);
    context.drawImage(bking,0,0,800,600);
}

// Imageの描画
function drawImage(event){
    var context = canvas.getContext('2d');
    console.log(event.code);
    switch(event.code){
        case 'ArrowLeft':
        x -= 20;
        break;
        case 'ArrowRight':
        x += 20;
        break;
        case 'ArrowUp':
        y -= 20;
        break;
        case 'ArrowDown':
        y += 20;
        break;
    }
    context.drawImage(img,x,y);
}