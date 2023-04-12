import type { Solution } from '../types';

export const quadraticEquationSolution = (
  a: number,
  b: number,
  c: number,
): Solution | null => {
  if (a === 0 || b === 0 || c === 0) {
    return null;
  }
  const D = b * b - 4 * a * c;
  if (D >= 0) {
    return {
      x1: (-b + Math.sqrt(D)) / (2 * a),
      x2: (-b - Math.sqrt(D)) / (2 * a),
    }
  }
  return null;
}
