#include <iostream>

using namespace std;

double ave(double n1, double n2);

double ave(double n1, double n2, double n3);

int main()
{
    cout<<"evarage01: "<<ave(3.5, 4.5)<<endl;
    cout<<"evarage02: "<<ave(3.5, 4.5, 3.5)<<endl;
    return 0;
}

double ave(double n1, double n2)
{
    return((n1 + n2)/2.0);
}

double ave(double n1, double n2, double n3)
{
    return((n1 + n2 + n3)/3.0);
}
