import { describe, expect, it } from 'vitest';
import { getTextBetweenParentheses } from '../src';

describe('strings', () => {
  it('getTextBetweenParentheses', () => {
    const text1 = `(define filter
        _ []       -> []
        F [X | Xs] -> [X | (filter F Xs)] where (F X)
        F [_ | Xs] -> (filter F Xs))`;

    const result1 = '(' + getTextBetweenParentheses(text1) + ')';
    expect(result1).toEqual(text1);

    const text2 = `(datatype maybe-type

  _____________________
    none : (maybe A);

         X : A;
  _____________________
  (some X) : (maybe A);

      M : (maybe A);
  _____________________
     (unwrap M) : A;)`;

    const result2 = '(' + getTextBetweenParentheses(text2) + ')';
    expect(result2).toEqual(text2);
  });
});
