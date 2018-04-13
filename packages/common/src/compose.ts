// Credits: Functional-Light JavaScript by Kyle Simpson
// See https://github.com/getify/Functional-Light-JS/blob/master/manuscript/ch9.md/#user-content-composereduceright
export const compose = (...fns: Function[]) =>
  result => fns.reduceRight(
    (composed, fn) => fn(composed),
    result);
