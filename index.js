import _ from 'lodash';

const fn = (a, b) => {
  const c = a + b;
  return c;
};

const func = (arr) => _.last(arr);

fn(3, 3);
func(['one', 'two']);
