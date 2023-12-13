//checking the valid of brackets

const isValid = (s: string): boolean => {
  const stack: string[] = [];
  const pairs: { [key: string]: string } = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let char of s) {
    if (pairs[char]) {
      if (stack.pop() !== pairs[char]) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }
  return stack.length === 0;
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
