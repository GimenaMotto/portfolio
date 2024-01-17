import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

const RandomWalkerSketch = () => {
    const canvasRef = useRef(null);
    let sketchInstance = null;

    useEffect(() => {
        sketchInstance = new p5(sketch, canvasRef.current);

        return () => {
            sketchInstance.remove();
        };
    }, []);

    const sketch = (p) => {
        let x, y, paso;
        let cambioColorProbabilidad;

        p.setup = () => {
            x = 250;
            y = 250;
            paso = 10;
            cambioColorProbabilidad = 0.5;
            p.createCanvas(500, 500);
            p.background(0);
            p.noStroke();
            p.fill(255);
        };

        p.draw = () => {
            p.fill(0, 5);
            p.rect(0, 0, p.width, p.height);

            if (p.random() < cambioColorProbabilidad) {
                p.fill(p.random(30, 255), p.random(30, 255), p.random(30, 255));
            } else {
                p.fill(255);
            }

            p.ellipse(x, y, 10, 10);

            let choice = p.int(p.random(4));
            switch (choice) {
                case 0:
                    x = x + paso;
                    break;
                case 1:
                    x = x - paso;
                    break;
                case 2:
                    y = y + paso;
                    break;
                case 3:
                    y = y - paso;
                    break;
            }

            if (x > p.width) x = 0;
            if (x < 0) x = p.width;
            if (y < 0) y = p.height;
            if (y > p.height) y = 0;
        };
    };

    return <div ref={canvasRef} />;
};

export default RandomWalkerSketch;
