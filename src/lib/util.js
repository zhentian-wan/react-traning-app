//@flow

export const partial = (fn: Function, ...args: Array<Object>) => fn.bind(null, ...args);

const _pipe = (f, g) => (...args) => f(g(...args));

export const compose = (...fns: Array<Function>) => fns.reduce(_pipe);
