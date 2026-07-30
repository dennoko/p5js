import p5 from 'p5';

// インスタンスモード。グローバル汚染がなく、HMR で作り直しやすい。
const sketch = (p) => {
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.colorMode(p.HSB, 360, 100, 100, 100);
    p.noStroke();
  };

  p.draw = () => {
    p.background(220, 30, 10);

    const t = p.frameCount * 0.01;
    for (let i = 0; i < 60; i++) {
      const a = (i / 60) * p.TWO_PI + t;
      const r = p.min(p.width, p.height) * 0.3 * (1 + 0.3 * p.sin(t * 3 + i));
      const x = p.width / 2 + p.cos(a) * r;
      const y = p.height / 2 + p.sin(a) * r;
      p.fill((i * 6 + p.frameCount) % 360, 80, 100, 80);
      p.circle(x, y, 20);
    }
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

let instance = new p5(sketch, document.getElementById('sketch'));

// 保存するたびにスケッチだけを作り直す（ページ全体のリロードなし）
if (import.meta.hot) {
  import.meta.hot.accept(() => {
    instance.remove();
    instance = new p5(sketch, document.getElementById('sketch'));
  });
  import.meta.hot.dispose(() => {
    instance.remove();
  });
}
