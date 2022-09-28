#include <cstdio>

/* The Develpoment of C++ cycle
 * we have source code, preprocessor, compiler, linker and run.
 */

/*int main()
{
    puts("I am runnning and the is no essues.");
    //cout::std << "Well is it working";
    printf("Hello worrld!!");
    return(0);
}
*/

/*When using the cstdio standard library cout::std is not supported.
 * it also support modern c++ compilers.
 */

/* variables are strongly typed in C++
 * an example will be.
 * Int main()
 * {
 *      int i;
 *      i = 7;
 *      printf("the num is %d", i);
 *      return(0);
 * }
 *
 * We look at pointers are data types int * ip; this is a pointer to an int value.
 * ip = &x; we assigning the address.
 * y = *ip we are dereferencing ip to y.
 * this how we reference in C++ by int & y = x; this way we referencing from x.
 * When you implement referencing is good to use a const int data type. 
 */

/* Looking at primitive Array
 * in an array elements are index.
 * an example will be
 */
/*
int main()
{
    int array[] = {1, 2, 3, 4, 5};
    for(int i : array)
    {
        printf("%d", i);
    }
    puts("");
    return(0);
}
*/

/* conditional statements
 * we have an if statemennt which evaluates a condition if is true or false.
 * example
 * we also have multiple conditions which we use a switch statement.
 */

/*
int main()
{
    int x = 2;
    int y = 4;

    if(x >= y)
    {
        puts("you got it right!");
    }
    else {
        puts("not on point yet....");
    }
    return(0);
}
*/

/* a char is per character, we also have a short int, int , long int and long long int.
A unsigned char or int doesn't have a signed bit. In terms of working with integers sizes
your OS archtecture matters as you will get different results also include your compiler as well.
for compatability the is a solution for int sizes for different compilers. To fix the isue of int sizes
we use the cstdint library to normalize the ompatabilty of compilers and operating systems.
for example we have int8_t, int16_t, int32_t and int64_t, are also called fixed integer types.
C/C++ also use what we call scientific notation like 5e2 for float point.
when you dealing with C/C++ you put thoughts on scale and precesion.
When it comes to precession in terms of floating points it's always a good thing to check what results you getting.
A null terminated string or a Cstring and spaces also get printed as well.
we also have a const character pointer whic cannot be changed example will be const char const *s[] = "Sabata";
we looking at qualifiers const, mutable, volatile an example will be connst static int i = 42;
in this case static variables are used to keep state in the program.
a reference in C++ will be int &a = i in this case a is a reference to i meaning the value of i becomes a value of 
a in terms of the address of that pointer. A reference can be used on a Function as well. a reference doesn't make a copy.
we can use ppointers on struct by *j = &info and use j->name to dereference the pointer.
So for Data structure we can pointers or dot notation.
The NULL pointer behaves like a 0 as NULL as it can behave as a unambiguous pointer const
 
*/ 








