import { quadraticEquationSolution } from '../compositions';

test('No solution', () => {
  const a = 3;
  const b = 1;
  const c = 2;
  const solution = quadraticEquationSolution(a, b, c);
  expect(solution).toBeNull();
});

test('a equal zero', () => {
  const a = 0;
  const b = 3;
  const c = 2;
  const solution = quadraticEquationSolution(a, b, c);
  expect(solution).toBeNull();
});

test('b equal zero', () => {
  const a = 1;
  const b = 0;
  const c = 2;
  const solution = quadraticEquationSolution(a, b, c);
  expect(solution).toBeNull();
});

test('c equal zero', () => {
  const a = 1;
  const b = 1;
  const c = 0;
  const solution = quadraticEquationSolution(a, b, c);
  expect(solution).toBeNull();
});

// test('Solution', () => {
//   const a = 1;
//   const b = -6;
//   const c = 9;
//   const solution = quadraticEquationSolution(a, b, c);
//   expect(solution).toStrictEqual({ x1: 3, x2: 3 });
// })
