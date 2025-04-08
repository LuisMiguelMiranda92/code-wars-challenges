// This series of katas will introduce you to basics of doing geometry with computers.

// Point objects have x, y attributes.
// Triangle objects have attributes a, b, c describing their corners, each of them is a Point.

// Write a function calculating area of a Triangle defined this way.

// Tests round answers to 6 decimal places.

//my solution
function triangleArea(triangle) {
  const { a, b, c } = triangle;
  const { x: x1, y: y1 } = a;
  const { x: x2, y: y2 } = b;
  const { x: x3, y: y3 } = c;

  // Shoelace formula
  const area = 0.5 * Math.abs(x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2));
  return area;
}
