
const getRandomArbitrary = (min, max) => {
  return Math.random() * (max - min) + min;
}

/**
 * Handles mouse movement
 */
const handleMouseMove = () => {
  let r,g,b,a;

  r = getRandomArbitrary(0,255);
  g = getRandomArbitrary(0,255);
  b = getRandomArbitrary(0,255);
  a = Math.random();

  const randomColor = `rgba(${r},${g},${b},${a})`;
  document.body.style.background = randomColor;
};

document.body.addEventListener('mousemove', handleMouseMove);

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM initialized');
});