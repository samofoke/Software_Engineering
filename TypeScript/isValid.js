//checking the valid of brackets
var isValid = function (s) {
    var stack = [];
    var pairs = {
        ")": "(",
        "}": "{",
        "]": "[",
    };
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var char = s_1[_i];
        if (pairs[char]) {
            if (stack.pop() !== pairs[char]) {
                return false;
            }
        }
        else {
            stack.push(char);
        }
    }
    return stack.length === 0;
};
console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
