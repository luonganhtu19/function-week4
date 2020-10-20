class Circles {
    constructor(x,y,radius) {
        this.x=x;
        this.y=y;
        this.radius=radius;
    }
}
function createCircle() {
    var id=document.getElementById("myCanvas");
    var ctx=id.getContext("2d");
    let circle= new Circles(500,500,80);
    ctx.beginPath();
    ctx.arc(circle.x, circle.y,circle.radius, 0,2*Math.PI);
    ctx.fill();
}
createCircle();