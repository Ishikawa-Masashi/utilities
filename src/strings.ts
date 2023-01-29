export function getTextBetweenParentheses(text: string) {
  const stack = [];
  let result = '';
  let start = false;

  for (let i = 0; i < text.length; i++) {
    switch (text[i]) {
      case '(':
        stack.push('(');
        if (!start) {
          start = true;
          continue;
        }
        result += text[i];
        break;
      case ')':
        if (stack[stack.length - 1] === '(') {
          stack.pop();
          if (stack.length === 0) {
            start = false;
            continue;
          }
          result += text[i];
        } else {
          //not balanced!
        }

        break;
      default:
        if (start) {
          result += text[i];
        }
    }
  }
  return result;
}
