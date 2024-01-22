import React, { useEffect, useRef } from 'react';
import p5 from 'p5';

const MondrianSketch = () => {
    const canvasRef = useRef(null);
    let horizontalOffset = 0;
    let verticalOffset = 0;
    let sketchInstance = null;



    const marginStyle = {

        marginTop: '200px',
    };
    useEffect(() => {
        const sketch = (p) => {
            p.setup = () => {
                p.createCanvas(400, 450).parent(canvasRef.current);
            };

            p.draw = () => {
                p.background(242, 240, 223);
                p.fill('#CB3E4A');
                p.noStroke();
                p.rect(105, 0, 50, 16);
                p.fill('#C15106');
                p.rect(250, 0, 40, 8);
                p.fill('#C15106');
                p.rect(200, 45, 55, 55);
                p.fill('#2F438E');
                p.rect(185, 15, 42, 42);
                p.fill('#2F438E');
                p.rect(285, 70, 40, 40);
                p.fill('#CB3E4A');
                p.rect(310, 45, 45, 45);
                p.fill('#C15106');
                p.rect(20, 75, 38, 38);
                p.fill('#2F438E');
                p.rect(93, 98, 52, 52);
                p.fill('#C15106');
                p.rect(75, 80, 38, 38);
                p.fill('#CB3E4A');
                p.rect(158, 113, 67, 67);
                p.fill('#2F438E');
                p.rect(35, 210, 60, 34);
                p.fill('#C15106');
                p.rect(90, 180, 47, 47);
                p.fill('#C15106');
                p.rect(230, 165, 40, 40);
                p.fill('#2F438E');
                p.rect(300, 150, 40, 43);
                p.fill('#CB3E4A');
                p.rect(230, 203, 42, 45);
                p.fill('#C15106');
                p.rect(270, 210, 42, 75);
                p.fill('#C15F02');
                p.rect(340, 165, 38, 38);
                p.fill('#2F438E');
                p.rect(370, 130, 40, 43);
                p.fill('#2F438E');
                p.rect(330, 225, 40, 40);
                p.fill('#CB3E4A');
                p.rect(70, 270, 45, 45);
                p.fill('#C15106');
                p.rect(159, 293, 45, 45);
                p.fill('#CB3E4A');
                p.rect(142, 355, 45, 45);
                p.fill('#C15106');
                p.rect(112, 340, 45, 45);
                p.fill('#2F438E');
                p.rect(213, 265, 44, 44);
                p.fill('#C15106');
                p.rect(225, 380, 45, 45);

                p.stroke(0);
                p.strokeWeight(8);
                p.strokeCap(p.SQUARE);

                p.line(107 + horizontalOffset, 23, 125 + horizontalOffset, 23);
                p.line(72 + horizontalOffset, 72, 88 + horizontalOffset, 72);
                p.line(250 + horizontalOffset, 65, 262 + horizontalOffset, 65);
                p.line(205 + horizontalOffset, 180, 240 + horizontalOffset, 180);
                p.line(370 + horizontalOffset, 207, 390 + horizontalOffset, 207);
                p.line(100 + horizontalOffset, 235, 125 + horizontalOffset, 235);
                p.line(150 + horizontalOffset, 260, 172 + horizontalOffset, 260);
                p.line(338 + horizontalOffset, 308, 360 + horizontalOffset, 308);
                p.line(75 + horizontalOffset, 395, 95 + horizontalOffset, 395);
                p.line(175 + horizontalOffset, 430, 195 + horizontalOffset, 430);
                p.line(198 + verticalOffset, 48, 198 + verticalOffset, 65);
                p.line(141 + verticalOffset, 90, 141 + verticalOffset, 110);
                p.line(235 + verticalOffset, 92, 235 + verticalOffset, 112);
                p.line(215 + verticalOffset, 138, 215 + verticalOffset, 165);
                p.line(20 + verticalOffset, 170, 20 + verticalOffset, 185);
                p.line(83 + verticalOffset, 180, 83 + verticalOffset, 195);
                p.line(150 + verticalOffset, 159, 150 + verticalOffset, 177);
                p.line(343 + verticalOffset, 155, 343 + verticalOffset, 175);
                p.line(272 + verticalOffset, 193, 272 + verticalOffset, 210);
                p.line(325 + verticalOffset, 223, 325 + verticalOffset, 242);
                p.line(67 + verticalOffset, 235, 67 + verticalOffset, 254);
                p.line(141 + verticalOffset, 217, 141 + verticalOffset, 235);
                p.line(227 + verticalOffset, 233, 227 + verticalOffset, 251);
                p.line(264 + verticalOffset, 270, 264 + verticalOffset, 288);
                p.line(13 + verticalOffset, 300, 13 + verticalOffset, 318);
                p.line(152 + verticalOffset, 348, 152 + verticalOffset, 362);
                p.line(250 + verticalOffset, 343, 250 + verticalOffset, 360);
                p.line(273 + verticalOffset, 371, 273 + verticalOffset, 386);
                p.line(355 + verticalOffset, 360, 355 + verticalOffset, 375);

                p.mouseMoved = () => {
                    horizontalOffset = p.mouseX;
                    verticalOffset = p.mouseY;
                };
            };
        };

        sketchInstance = new p5(sketch);

        return () => {
            sketchInstance.remove();
        };
    }, []);

    return (
        <div style={marginStyle}>
            <p>Mondrian sketch. Desilzarse sobre ejes X e Y.</p>
            <div ref={canvasRef} />
        </div>
    );
};

export default MondrianSketch;

