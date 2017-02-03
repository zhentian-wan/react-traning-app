export const partial = (fn, ...args) => fn.bind(null, ...args);

const _pipe = (f, g) => (...args) => f(g(...args));

export const compose = (...fns) => fns.reduce(_pipe);