class Circles {
    constructor() {
        this.x = Math.floor(Math.random() * window.innerWidth);
        this.y = Math.floor(Math.random() * window.innerHeight);
        this.radius = Math.floor(Math.random() * 80);
    }

    getRandomHex() {
        return Math.floor(Math.random() * 255);
    }

    getRandomColor() {
        let red = this.getRandomHex();
        let green = this.getRandomHex();
        let blue = this.getRandomHex();
        return "rgb(" + red + "," + blue + "," + green + ")";
    }

    setRadius(_radius) {
        this.radius = _radius;
    }

    setX(x) {
        this.x = x;
    }

    setY(y) {
        this.y = y;
    }
}

// radius=const
// function createCircle() {
//     let id=document.getElementById("myCanvas");
//     let ctx=id.getContext("2d");
//     let circle= new Circles(500,500,80);
//     ctx.beginPath();
//     ctx.arc(circle.x, circle.y,circle.radius, 0,2*Math.PI);
//     ctx.fill();
// }
// createCircle();

// radius =random
function createCircleRan() {
    let ctx = document.getElementById("myCanvas").getContext("2d");
    let circle;
    do {
        circle = new Circles();
          } while (circle.x < circle.radius || circle.y < circle.radius || 1360 < circle.x + circle.radius || 768 < circle.radius + circle.y)
   //alert(circle.x);
    ctx.beginPath();
    //alert(circle.radius);
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.fillStyle = circle.getRandomColor();


    function createMultipleCircle(){
    for(var i = 0; i < 50; i++){
        createCircleRan();
    }
}

createMultipleCircle()