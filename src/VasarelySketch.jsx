import React, { useEffect, useRef } from 'react';
import p5 from 'p5';

const VasarelySketch = () => {
    const canvasRef = useRef(null);
    let xcuad1, ycuad1, xcuad2, ycuad2;
    let fondo, loop, azul;
    let rojo, verde, amarillo;

    const marginStyle = {
        marginTop: '390px',


    };

    useEffect(() => {
        const sketch = (p) => {
            p.setup = () => {
                p.createCanvas(690, 730).parent(canvasRef.current);
                xcuad1 = 185;
                ycuad1 = 265;
                xcuad2 = 345;
                ycuad2 = 305;
                fondo = p.color(252, 252, 247);
                loop = p.color(49, 49, 52);
                azul = p.color(64, 88, 219);
                rojo = p.color(222, 103, 103);
                verde = p.color(91, 188, 121);
                amarillo = p.color(240, 245, 111);
            };

            p.draw = () => {
                p.background(fondo);

                for (let x = 125; x < 570; x = x + 40) {
                    for (let y = 125; y < 610; y = y + 40) {
                        p.noStroke();
                        p.fill(loop);
                        p.ellipse(x, y, 37, 37);
                    }
                }

                p.stroke(fondo);
                p.strokeWeight(10);
                p.noFill();
                p.rect(140, 150, 410, 430); //grande
                p.strokeWeight(15);
                p.rect(266, 145, 157, 440); //rectángulo
                p.strokeWeight(13);
                p.rect(xcuad1, ycuad1, 160, 160); //cuadrado1
                p.rect(xcuad2, ycuad2, 160, 160); //cuadrado1
                p.line(0, 305, 185, 305); //line izq
                p.line(505, 425, p.width, 425); //line der

                p.noStroke();
                p.fill(azul);
                p.rect(xcuad1 + 7, ycuad1 + 7, 147, 147); //azul
                p.fill(loop);
                p.rect(xcuad2 + 7, ycuad2 + 7, 147, 147); //negro
                p.arc(
                    xcuad1 + 102.5,
                    ycuad1 + 80,
                    146,
                    146,
                    p.QUARTER_PI,
                    p.PI + p.HALF_PI + p.QUARTER_PI,
                    p.CHORD
                );
                p.fill(azul);
                p.arc(
                    xcuad2 + 58.5,
                    ycuad2 + 80,
                    146,
                    146,
                    p.PI + p.QUARTER_PI,
                    p.TWO_PI + p.HALF_PI + p.QUARTER_PI,
                    p.CHORD
                );
            };

            p.mouseMoved = () => {
                if (
                    p.mouseX > 100 &&
                    p.mouseX < 260 &&
                    p.mouseY > 100 &&
                    p.mouseY < 525
                ) {
                    xcuad1 = p.mouseX;
                    ycuad1 = p.mouseY;
                    xcuad2 = p.mouseX + 160;
                    ycuad2 = p.mouseY + 40;
                    azul = rojo;
                } else if (
                    p.mouseX > 260 &&
                    p.mouseX < 425 &&
                    p.mouseY > 100 &&
                    p.mouseY < 400
                ) {
                    xcuad1 = p.mouseX;
                    ycuad1 = p.mouseY;
                    xcuad2 = p.mouseX;
                    ycuad2 = p.mouseY + 160;
                    azul = verde;
                } else if (
                    p.mouseX > 350 &&
                    p.mouseX < 485 &&
                    p.mouseY > 100 &&
                    p.mouseY < 480
                ) {
                    xcuad1 = p.mouseX;
                    ycuad1 = p.mouseY;
                    xcuad2 = p.mouseX - 170;
                    ycuad2 = p.mouseY + 80;
                    azul = amarillo;
                } else {
                    xcuad1 = 185;
                    ycuad1 = 265;
                    xcuad2 = 345;
                    ycuad2 = 305;
                    azul = p.color(64, 88, 219);
                }
            };

            p.mousePressed = () => {
                let randomColor = p.color(
                    p.random(200),
                    p.random(200),
                    p.random(200)
                );
                azul = randomColor;
                if (p.mouseButton === p.RIGHT) {
                    fondo = p.color(49, 49, 52);
                    loop = p.color(252, 252, 247);
                }
            };

            p.mouseReleased = () => {
                azul = p.color(64, 88, 219);
                fondo = p.color(252, 252, 247);
                loop = p.color(49, 49, 52);
            };

        };

        const sketchInstance = new p5(sketch);

        return () => {
            sketchInstance.remove();
        };
    }, []);

    return (
        <div style={marginStyle}>
            <p>Vasarely Sketch. Deslizar mouse y hacer click.</p>
            <div ref={canvasRef} />
        </div>
    );
};

export default VasarelySketch;
