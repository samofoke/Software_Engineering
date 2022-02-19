#include <iostream>
#include <cmath>
using namespace std;

/* We will spend time looking at top-down design and predefined functions
 * programmer-defined functions, procedural abstraction, 
 * scope and local variables also overloading functions names.
 * page 214, 215, 225, 236, 250 and 264
 */

/* Design principles in C++ regarding top-down design which we break down
 * the task into subsets and solving thses subsets by subalgorithms.
 * C++ comes with predefined functions and this is how they used, the sqrt
 * function for example getRoot = sqrt(5.0); and this is our function call
 * This is the example expressing function calls
 * on page 221
 * fabs is an abbreviation for floating-point absolute value.
 * The function pow(power) always returns a type double.
 * looking at Random Number Generation
 * C++ has a predefined function
 * Ri = (Ri-1 * 7)% 11 in this it will be.
 * (1 * 7)% 11 = 7
 * to simulate this on C++ we use srand from the cstdlib library, ctime() as
 * well to use the predefined function time. We can use rand() to generate
 * random int.
 *

int main()
{
    const double COST_PER_SQR_FT = 10.50;
    double budget, area, length_of_the_sides;

    cout << "Enter your budgeted amount: ";
    cin >> budget;

    area = budget / COST_PER_SQR_FT;
    length_of_the_sides = sqrt(area);

    cout.setf(ios::fixed);
    cout.setf(ios::showpoint);
    cout.precision(2);

    cout << "for a price of the budget is: "<<budget << endl;
    cout << "The length will be: "<< length_of_the_sides << " for each side\n";
    return(0);
}
*/

int main()
{
    double x;
    double y;
    cout << "Enter your numbers: ";
    cin >> x >> y;
    double result = pow(x, y);
    cout << "The answer is: " << result <<"\n";
    return(0);
}










