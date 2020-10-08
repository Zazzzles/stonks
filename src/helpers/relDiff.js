export default (a, b) => {
  console.log(a, b);
  // return 100 * 100 * Math.abs((a - b) / ((a + b) / 2));

  return Math.abs(((a - b) / b) * 100);
};
