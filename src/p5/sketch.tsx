import * as p5 from "p5";

/*
Because of how this wrapper works, all calls to p5 functions or variables must be called from "p".
Also, the resolution specified here will only affect the internal resolution; it will be rendered at a different
responsive resolution for the client.
 */
export default function(p: p5) {

    // no need to declare types for variables assigned to literals
    let x = 100,
        y = 100,
        angle1 = 0.0,
        segLength = 50;

    p.setup = function setup() {
        p.createCanvas(710, 400);
        p.strokeWeight(20.0);
        p.stroke(255, 100);
    };

    p.draw = function draw() {
        p.background(0);

        let dx = p.mouseX - x;
        let dy = p.mouseY - y;
        angle1 = p.atan2(dy, dx);
        x = p.mouseX - p.cos(angle1) * segLength;
        y = p.mouseY - p.sin(angle1) * segLength;

        segment(x, y, angle1);
        p.ellipse(x, y, 20, 20);
    };

    function segment(x: number, y: number, a: number) {
        p.push();
        p.translate(x, y);
        p.rotate(a);
        p.line(0, 0, segLength, 0);
        p.pop();
    }


}