let brick1, brick2;
let arrayOfBricks = [];

window.addEventListener('load', () => {
  'use strict'
  console.log('start');

  brick1 = new Brick(10, 12);
  brick2 = new Brick(16, 9);

  console.log(brick1 === brick2, brick1, brick2);
  console.log(brick1 instanceof Brick)

  for( let i = 0; i < 20; i++) {
    let br = new Brick(getDimension(), getDimension());
    br.create();
    //LockIt(br, 'element');
    arrayOfBricks.push(br);
  }
  console.log(arrayOfBricks)
});

function getDimension() {
  return Math.random() *15 + 5;
}