# Rowan Full-Stack Game Project

This project is yet to be named.

This repository contains all of the source code for the project. In order to run it, clone this repository using
`git clone https://github.com/RowanACM/GameProject.git` and navigate into the directory. Next run `npm install` to
install all of the dependencies. To start the server, run `npm run start`.

All of the processing sketch files are to be placed in `src/p5/`. The file `wrapper.tsx` is what we use to put p5
sketches into the React project, so don't touch it.

## Using p5 in TypeScript

This project uses [TypeScript](https://www.typescriptlang.org/), so if you're only familiar with vanilla JavaScript you
might be a bit confused at first. Once you get the hang of it, it's not too difficult. Let's look at a p5 sketch in
JavaScript and one in TypeScript.

JavaScript:

```javascript
let x = 100,
  y = 100,
  angle1 = 0.0,
  segLength = 50;

function setup() {
  createCanvas(710, 400);
  strokeWeight(20.0);
  stroke(255, 100);
}

function draw() {
  background(0);

  let dx = mouseX - x;
  let dy = mouseY - y;
  angle1 = atan2(dy, dx);
  x = mouseX - cos(angle1) * segLength;
  y = mouseY - sin(angle1) * segLength;

  segment(x, y, angle1);
  ellipse(x, y, 20, 20);
}

function segment(x, y, a) {
  push();
  translate(x, y);
  rotate(a);
  line(0, 0, segLength, 0);
  pop();
}
```

TypeScript:

```typescript jsx
import * as p5 from "p5";

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
```

Essentially the difference between JavaScript and TypeScript is that TypeScript requires declaration of types like a
strongly typed language such as Java. Types are defined as `let s: string`, which would declare a variable called `s`
of type string. We can later initialize it like `s = "hello"`. If we were to try to assign a number to `s` such as
`s = 7`, we would get an error because you can't assign a value of type `number` to a variable of type `string`.

You can also say `let s: string = "hello"` to do it all in one step. Since in that example we're defining the variable
immediately the type is implied so you might see `let s = "hello"` just like regular JavaScript.

In addition, to reference any p5 variables or functions we must put `p.` in front of them. This is just a consequence
of how the p5 wrapper works.

Aside from that, writing p5 sketches in TypeScript really isn't all that different to writing them in JavaScript.
