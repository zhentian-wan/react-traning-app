import {partial, compose} from '../lib/util';

const add = (a, b) => a + b;
const addThree = (a,b,c) => a + b + c;

test('partial applies the first argument ahead of time', () => {
   const inc = partial(add, 1);
   const result = inc(2);
   expect(result).toBe(3);
});

test('partial applies the multiple arguments ahead of time', () => {
   const inc = partial(addThree, 1, 2);
   const result = inc(3);
   expect(result).toBe(6);
});

test('compose: able to apply multi fns to data', () => {
   const add = (a, b) => a + b;
   const double = (c) => c * 2;
   const minus = (d) => d - 1;

   const res = compose(
       double,
       minus,
       add
   )(1, 2);

   expect(res).toBe(4);
});

