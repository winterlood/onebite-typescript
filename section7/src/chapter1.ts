/**
 * 첫번째 사례
 */

function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap("1", 2);

/**
 * 두번째 사례
 */

function returnFirstValue<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let num = returnFirstValue([0, 1, 2]);
// 0

let str = returnFirstValue([1, "hello", "mynameis"]);
// "hello"

/**
 * 세번째 사례
 */

interface A {
  length: number;
}

interface B extends A {}

function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

getLength("123");

getLength([1, 2, 3]);

getLength({ length: 1 });

// getLength(undefined);

// getLength(null);
