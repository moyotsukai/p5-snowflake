import p5 from 'p5'

const sketch = (p: p5) => {
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight)
  }

  p.draw = () => {
    p.background(240, 240, 255)

    drawSquare(p)
  }
}

const drawSquare = (p: p5) => {
  p.square(100, 100, 100)
}

new p5(sketch)