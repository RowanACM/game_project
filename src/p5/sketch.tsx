import * as p5 from "p5";

/*
Because of how this wrapper works, all calls to p5 functions or variables must be called from "p".
Also, the canvas size specified here will only affect the internal resolution; it will be rendered at a different
responsive resolution for the client.
 */
export default function(p: p5) {

    p.setup = function setup() {
        p.createCanvas(1280, 720);
    };

    p.draw = function draw() {
        p.background(0);
    };

}