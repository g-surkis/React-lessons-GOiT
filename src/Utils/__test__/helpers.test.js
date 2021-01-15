import { slugify } from '../helpers';

describe('#countDuration()', () => {
  test('slugify text "hello world"', () => {
    expect(slugify('hello world'))
      .toEqual('hello_world');
  });
  test('slugify text "another text"', () => {
    expect(slugify('another text'))
      .toEqual('another_text');
  });
});
