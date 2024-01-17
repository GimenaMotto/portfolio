import React, { useEffect, useRef } from 'react';
import p5 from 'p5';

const VasarelySketch1 = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const sketch = (p) => {
            let xcuad1, ycuad1, xcuad2, ycuad2;
            let fondo, loop, azul;
            let rojo, verde, amarillo;

            p.setup = () => {
                p.createCanvas(700, 700);
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
                p.background(fondo); //triángulos arriba
                p.fill("#393839");
                p.noStroke();
                p.triangle(0, 0, 100, 0, 0, 100);
                p.triangle(0, 0, 100, 0, 0, 100);
                p.fill("#4C9BD6");
                p.triangle(100, 0, 300, 0, 200, 100);
                p.fill("#35955A");
                p.triangle(300, 0, 500, 0, 400, 100);
                p.fill("#FF6629");
                p.triangle(500, 0, 710, 0, 600, 100); //rombos 1
                p.fill("#435CB7");
                p.stroke(0);
                p.strokeWeight(0.5);
                p.quad(100, 0, 200, 100, 100, 200, 0, 100);
                p.fill("#42B46C");
                p.triangle(300, 0, 300, 200, 200, 100);
                p.fill("#FF6629");
                p.triangle(300, 0, 400, 100, 300, 200);
                p.fill("#B43737");
                p.quad(500, 0, 600, 100, 500, 200, 400, 100); //triángulos derecha
                p.fill("#6C4D86");
                p.noStroke();
                p.triangle(600, 100, 710, 0, 700, 200);
                p.fill("#35955A");
                p.stroke(0);
                p.strokeWeight(0.5);
                p.triangle(700, 200, 700, 400, 600, 300);
                p.fill("#FF8758");
                p.triangle(700, 400, 700, 600, 600, 500);
                p.fill("#435CB7");
                p.triangle(700, 600, 700, 700, 600, 700); //triangulos abajo
                p.fill("#B43737");
                p.triangle(500, 600, 600, 700, 400, 700);
                p.fill("#38478B");
                p.triangle(300, 600, 400, 700, 300, 700);
                p.fill("#35955A");
                p.triangle(300, 600, 300, 700, 200, 700);
                p.fill("#FF6F36");
                p.triangle(100, 600, 200, 700, -10, 700); //triangulos izq
                p.fill("#933AA5");
                p.triangle(0, 500, 100, 600, 0, 695);
                p.fill("#B43737");
                p.triangle(0, 300, 100, 400, 0, 500);
                p.fill("#393839");
                p.triangle(0, 100, 100, 200, 0, 300); //rombos 2
                p.fill("#B43737");
                p.quad(200, 100, 300, 200, 200, 300, 100, 200);
                p.fill("#478FC4");
                p.quad(400, 100, 500, 200, 400, 300, 300, 200);
                // Continuar con el resto del dibujo
                // ...
                // Continuación desde la línea p.quad(400, 100, 500, 200, 400, 300, 300, 200);
                p.fill("#296A40");
                p.triangle(600, 100, 700, 200, 500, 200);
                p.fill("#933AA5");
                p.triangle(500, 200, 700, 200, 600, 300); //rombos 3
                p.fill("#FF6F36");
                p.quad(0, 300, 100, 200, 200, 300, 100, 400);
                p.fill("#F7F7ED");
                p.quad(300, 200, 400, 300, 300, 400, 200, 300);
                p.fill("#435CB7");
                p.quad(500, 200, 600, 300, 500, 400, 400, 300); //rombos 4
                p.fill("#3E3E3C");
                p.quad(200, 300, 300, 400, 200, 500, 100, 400);
                p.quad(400, 300, 500, 400, 400, 500, 300, 400);
                p.fill("#6C4D86");
                p.noStroke();
                p.triangle(500, 400, 600, 300, 600, 500);
                p.fill("#A375AD");
                p.triangle(600, 300, 700, 400, 600, 500); //rombos 5
                p.fill("#5A77D3");
                p.stroke(0);
                p.strokeWeight(0.5);
                p.triangle(0, 500, 100, 400, 100, 600);
                p.fill("#438DC4");
                p.triangle(100, 400, 200, 500, 100, 600);
                p.fill("#F7F7ED");
                p.quad(300, 400, 400, 500, 300, 600, 200, 500);
                p.fill("#438DC4");
                p.quad(500, 400, 600, 500, 500, 600, 400, 500); //rombos 6
                p.fill("#D85391");
                p.quad(200, 500, 300, 600, 200, 700, 100, 600);
                p.fill("#FA6D3A");
                p.triangle(400, 500, 500, 600, 300, 600);
                p.fill("#6CACDB");
                p.triangle(300, 600, 500, 600, 400, 700);
                p.fill("#35955A");
                p.quad(600, 500, 700, 600, 600, 700, 500, 600); //figuras arriba
                //violetas
                p.fill("#933AA5");
                p.noStroke();
                p.quad(53, 53, 147, 53, 147, 150, 53, 150);
                p.quad(600, 520, 680, 600, 600, 680, 520, 600); //azules
                p.fill("#5A77D3");
                p.quad(200, 120, 280, 200, 200, 280, 120, 200);
                p.fill("#405BB9");
                p.ellipse(500, 100, 125, 125); //verdes
                p.fill("#35955A");
                p.stroke(0);
                p.strokeWeight(0.2);
                p.triangle(320, 190, 440, 155, 410, 280);
                p.fill("#296A40");
                p.noStroke();
                p.quad(110, 220, 165, 305, 90, 385, 40, 290); //rojo fucsia violeta
                p.fill("#B43737");
                p.triangle(490, 220, 580, 310, 455, 345);
                p.fill("#C93161");
                p.quad(405, 500, 500, 450, 595, 500, 500, 550);
                p.fill("#6C4D86");
                p.ellipse(200, 600, 125, 125); //negros
                // Figura 1
                if (
                    p.mouseX > 290 &&
                    p.mouseX < 380 &&
                    p.mouseY > 235 &&
                    p.mouseY < 545
                ) {
                    p.fill(p.random(255), p.random(255), p.random(255));
                } else {
                    p.fill("#3E3E3C");
                }
                p.quad(290, 235, 380, 290, 310, 360, 215, 310);

                // Figura 2
                if (
                    p.mouseX > 215 &&
                    p.mouseX < 345 &&
                    p.mouseY > 415 &&
                    p.mouseY < 545
                ) {
                    p.fill(p.random(255), p.random(255), p.random(255));
                } else {
                    p.fill("#3E3E3C");
                }
                p.triangle(215, 510, 305, 415, 345, 545);

                // Figura 3
                if (
                    p.mouseX > 400 &&
                    p.mouseX < 450 &&
                    p.mouseY > 305 &&
                    p.mouseY < 495
                ) {
                    p.fill(p.random(255), p.random(255), p.random(255));
                } else {
                    p.fill("#F7F7ED");
                }
                p.quad(400, 305, 450, 400, 400, 495, 350, 400);

                // Figura 4
                if (
                    p.mouseX > 140 &&
                    p.mouseX < 260 &&
                    p.mouseY > 320 &&
                    p.mouseY < 480
                ) {
                    p.fill(p.random(255), p.random(255), p.random(255));
                } else {
                    p.fill("#F7F7ED");
                }
                p.quad(190, 320, 260, 390, 210, 480, 140, 410);
            };

        };

        const canvas = new p5(sketch, canvasRef.current);

        return () => {
            canvas.remove();
        };
    }, []);

    return <div ref={canvasRef}></div>;
};

export default VasarelySketch1;