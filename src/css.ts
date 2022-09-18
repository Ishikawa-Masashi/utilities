/**
 * Dictionary of booleans.
 *
 * @internal
 */
export type IDictionary = Record<string, boolean>;

/**
 * Serializable object.
 *
 * @internal
 */
export interface ISerializableObject {
  toString?: () => string;
  [key: string]: unknown;
}

/**
 * Css input type.
 *
 * @internal
 */
export type ICssInput =
  | string
  | ISerializableObject
  | IDictionary
  | null
  | undefined
  | boolean;

/**
 * Concatination helper, which can merge class names together. Skips over falsey values.
 *
 * @public
 */
export function css(...args: ICssInput[]): string {
  const classes = [];

  for (const arg of args) {
    if (arg) {
      if (typeof arg === 'string') {
        classes.push(arg);
      } else if (
        arg.hasOwnProperty('toString') &&
        typeof arg.toString === 'function'
      ) {
        classes.push(arg.toString());
      } else {
        if (typeof arg === 'object') {
          for (const key in arg) {
            if (arg[key]) {
              classes.push(key);
            }
          }
        }
      }
    }
  }

  return classes.join(' ');
}
