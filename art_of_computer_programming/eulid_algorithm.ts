/*
 * This the basic of going htrough algorithms
 
 *----------------------------------------------------------------

 * (Euclid’s algorithm). Given two positive integers m and n, find
 * their greatest common divisor, that is, the largest positive integer that evenly
 * divides both m and n.
 *
 * The approach I am taking with this using Typescript with an interface to focus
 * on the shape of the types, this allows us to discribe what our function take 
 *
 * We going to wrok out different solution which use different techniques
 *
*/

interface IntegerEuclidProps {
  m: number;
  n: number;
}

//This is the first approach to the solution
const euclidAlgorithm1 = ({ m, n }: IntegerEuclidProps): number => {
  for (; n !== 0; ) {
    const temp = m % n;
    m = n;
    n = temp;
  }
  return m;
};

console.log(euclidAlgorithm1({ m: 200, n: 87 }));

/*
 * We have the arrow <- which called assignment or substitution, stands for
 * a sign that donates an action meaning m <- n this is means the value
 * of m will be replaced by the value of n, the "=" will donate the
 * condtion that can be tested.
 *
 */
