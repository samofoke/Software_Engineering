//This are rules that specifies how to write the langauge.

/*---> Specifies
 * - space and line breaks 
 * - comments
 * - Literals --> is data value that appears directly in a program.
 *   - 12
 *   - 1.2
 *   - 'hello'
 *   - true
 *   - false
 *   - null
 * - Identifiers and reversed words --> is simply a name
 *   - control_numbers
 * - Unicode
 * - Optional semicolons
 */ 

// JavaScript recognize newlines, carriage returns, and a carriage/line
// feed sequence as line terminators.
// JavaScript does not treat every line break as a semicolon.

//BigInt is new feature in JavaScript 2020 it was added to allow the 
//presentation of 64-bit integers
//--> A string is an immutable ordered squence of 16-bit values.
//
//--> String are immutable, methods like replace(), toUpperCase() return
//new strings and they do not modify string which they are 
//invoked(call upon a function)
//
//-->Looking at Template Literals ${} this is a JavaScript expression
//
//-->Pattern Maching -this datatype is known as Regular Expresions
//This just as overview of Regular Expressions
//--/^HTML/ this matches the latters of html at the start of th string.
//--/[1-9][0-9]*/ it matches the nonzero digit, followed by any # of digits.
//--The pattern /\d+/g this matches all instances of one or more digits.
//text.slpit(/\D+/) this splits on nondigits
//
//--> Boolean Values are commonly used for control structure.
//Using the typeof operator on null return a string object as null can be 
//thought as an object which indicates no object.
//
//-->The Global Object
//It is a regular Javascript object that serves a very important purpose
//Primitives Values
//--Undefined, null, boleans, numbers and strings.
//Primitives are immutable
//Primitives are also compared by value: two values are the same only if
//they have the same value.
//
//Objects are different than primitives because they are mutable
//they values can change.
//
//let num = {x: 1} //this is our object 
//we mutate the value by changong it
//num.x = 3;
//An Array is also mutable as well
//let arr = [3, 4, 5, 6];
//arr[2] = 8;
//-->Object values are references let x =[] let y = x and then y[0] = 2;
//then we check for x[0] at index 0.
//
//coping the elements of the Array to show that object values are references
//
//let arr = ["h", "e", "l", "l", "o"];
//let copy_me = [];
//
//for (let index = 0; index < arr.length; index++) {
//  copy_me[index] = arr[index];
//}
//let cpy = Array.from(copy_me);
//
//--> Type Conversions
//This relates to adding a string to a number it will convert it to a string
//The convertability of one value to another does not meaning equality of
//those two values.
//
//
//-->Explicit Conversions we can use this functions boolean(), Number()
//and string() as examples.
//
//This is a boolean expression !!x this checking for not doubles.
//
//The toString() method defined by a number class accepts am optional
//argument that specifies a radix(parameter is used to specify which 
//numeral system to be used) in this case base examples.
//
//let num = 8;
//binary = "0b" + num.toString(2);
//octal = "0o" + num.toString(8);
//hex = "0x" + num.toString(16);