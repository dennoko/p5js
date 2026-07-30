import p5 from 'p5';

// Processing code translated to p5.js (Instance Mode)
// U=[random(902)//1 for _ in [randomSeed(3)]*80]; T=translate
// def setup(): size(540,540,P3D)
// def draw(): clear(); T(230,60); [a in U and [rotate(a<500 and PI/3 or TAU/3), text(u'⇀A'[a%9>7], 1, -3)] or [fill((a-frameCount)%200), text('_', -2, -1), T(3,0)] for a in range(1000)]

const sketch = (p) => {
  let U;

  p.setup = () => {
    p.createCanvas(540, 540);
    p.randomSeed(3);
    U = new Set();
    for (let i = 0; i < 80; i++) {
      U.add(p.floor(p.random(902)));
    }
  };

  p.draw = () => {
    p.clear();
    p.translate(230, 60);

    for (let a = 0; a < 1000; a++) {
      if (U.has(a)) {
        p.rotate(a < 500 ? p.PI / 3 : p.TAU / 3);
        p.text(a % 9 > 7 ? 'A' : '⇀', 1, -3);
      } else {
        const col = ((a - p.frameCount) % 200 + 200) % 200;
        p.fill(col);
        p.text('_', -2, -1);
        p.translate(3, 0);
      }
    }
  };
};

let instance = new p5(sketch, document.getElementById('sketch'));

if (import.meta.hot) {
  import.meta.hot.accept(() => {
    instance.remove();
    instance = new p5(sketch, document.getElementById('sketch'));
  });
  import.meta.hot.dispose(() => {
    instance.remove();
  });
}
