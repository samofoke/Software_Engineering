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
/* A function call is an expression consisting of the fucntion name followed
 * by argumentsenclosed in parentheses.
 */

/* 
int main()
{
    const double cost_per_sqrt = 10.50;
    double budget;
    double area;
    double length_side;

    cout <<"Enter the required amount: ";
    cin >> budget;
    
    area = budget / cost_per_sqrt;
    length_side = sqrt(area);
    
    cout.setf(ios::fixed);
    cout.setf(ios::showpoint);
    cout.precision(2);
    cout <<"The price is: "<< budget <<"\n";
    cout <<"The length is: "<< length_side <<"\n"; 
    return(0); 
}
*/

// looking at overloading functions 
/*
double ave(double n1, double n2);

double ave(double n1, double n2, double n3);


double ave(double n1, double n2) {
    return ((n1 + n2) /2.0);
}

strings ave(strings n1, strings)

double ave(double n1, double n2, double n3) {
    return ((n1 + n2 + n3)/3.0);
}


int main() {

    cout << "The average of two numbers: "<< ave(4.5, 5.5) << endl;
    
    cout << "The average of three numbers: " << ave(2.0, 2.5, 3.0) << endl;
    
    return 0;
}
*/
//An overloading function is a function that that has two definitions ave(1, 2) and ave(1, 2, 3)
//in this case it is the same function name with two definitions.


//looking into a more complex example of overloading

/*
double unitPrice(int dimeter, double price);

double unitPrice(int length, int width, double price);

double unitPrice(int dimeter, double price)
{
    const double PI = 3.14159;
    double radius, area;

    radius = dimeter / static_cast<double>(2);
    area = PI * radius * radius;
    return (price/area);
}
*/
double unitPrice(int length, int width, double price)
{
    double area = length * width;
    return (price/area);
}

int main()
{
    int dimeter, length, width;
    double priceRound, unitPriceRound, priceRentangular, unitPriceRetangular;

    cout << "Welcome to the pizza Consumer Union.\n";
    cout << "Enter the dimeter in inces: ";
    cin >> dimeter;
    cout << "Enter the price of rounded pizza: $";
    cin >> priceRound;
    cout << "Enetr the length and width: ";
    cin >> length >> width;
    cout << "Enter the prce of rentangular pizza: $";
    cin >> priceRentangular;

    unitPriceRetangular = unitPrice(length, width, priceRentangular);
    unitPriceRound = unitPrice(dimeter, priceRound);

    cout.setf(ios::fixed);
    cout.setf(ios::showpoint);
    cout.precision(2);
    cout << endl << "round pizza: dimeter = " << dimeter << "inches\n";
    cout << "per sqaure inch = $" << unitPriceRound <<endl;
    cout << "Rentangular pizza: length = " << length << " inches\n";
    cout << "width: " << width << " inches\n" << "Price: " << priceRentangular << "per square inch: " << unitPriceRetangular <<endl;

    if (unitPriceRound < unitPriceRetangular)
    {
        cout << "The round one is  the better buy.\n";
    } else {
        cout << "The rentangular one is better buy.\n";
    }

    cout << "Enjoy your meal.....";
    return (0);
}










































