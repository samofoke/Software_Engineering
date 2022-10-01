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
/*
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
*/

/* Type Casting
 * This allows us to convert and int into a double by typing:
 * static_cast<double>(9)/2;
 * page 226
 */
/*
int main()
{
    int x;

    double answer_one = 0;
    cout << "Not coverted yet: " << answer_one <<"\n";
    cout << "Enter: ";
    cin >> x;
    answer_one = static_cast<double>(x) / 3;
    cout << "After type casting: " << answer_one <<"\n";
    return(0);
}*/

/*
int main()
{
    int x;
    int y;

    x = 2;
    y = 11;

    cout <<"The result is: "<<static_cast<double>(y) / x<<"\n";
    return(0);
}
*/
/* In C++ the is something called range-based loop
 * an example of this is:
 * for(int i : arr)
 * {
 *      printf("i is: %d\n"i);
 * }
 * The range-based loop is not really effective for strings because of the
 * null terminate.
 */

/* A structure creates a data type that can be used to group items of possibly
 * different types into a single type.
 * example:
 * struct S {
 *      int;
 *      string;
 *      const;
 * }
 */

int main()
{
    const double cost_per_sqr = 10.50;
    double budget;
    double area;
    double length_size;

    cout <<"Enter the amount for the budget: ";
    cin >> budget;

    area = budget / cost_per_sqr;
    length_size = sqrt(area);

    cout.setf(ios::fixed);
    cout.setf(ios::showpoint);
    cout.precision(2);
    
    cout <<"The budget is: "<< budget <<"\n";
    cout <<"The length is: "<< length_size <<"\n";
    return(0);
}





















