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
 */

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

//on page 221

