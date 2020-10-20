class Circle {
    constructor(_radius,_color) {
        this.radius=_radius;
        this.color=_color;
    }
    setRadius(radius){
        this.radius=radius;
    }
    setColor(color){
        this.color=color;
    }
    getArea(){
        return Math.PI*this.radius*this.radius;
    }
}
let circle=new Circle(2,'red');
console.log("Radius: "+ circle.radius+" ;Color: "+circle.color+" ,Area: "+circle.getArea());
circle.color="blue";
circle.radius=4;
console.log("Radius: "+ circle.radius+" ;Color: "+circle.color+" ,Area: "+circle.getArea());