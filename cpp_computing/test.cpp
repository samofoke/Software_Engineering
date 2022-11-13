#include <iostream>
#include <cstring>
#include <vector>

using namespace std;

template <class T>

T adding(const T& x, const T& y)
{
    if (x > y)
        return x;
    else
        return y;
}    

int main()
{ 
    //int x = 3, y = 4;
    float x = 3, y = 4;
    double d = 12.5;
    int i = 1;
    char s1[] = "william";
    //char s2[] = "Well done!";
/*
    if (!(strncmp(s1, s2, 5)))
    {
        cout<<"Well done!";
    }*/
    vector<int>num(100);
    num[i] = 15;
    cout<<adding(x, y)<<endl;
    cout<<"size: "<<num.size()<<endl;
    cout<<"String: "<<strlen(s1)<<endl;
    cout<<"print: "<<num[i]<<endl;
    //cout<<adding(i)<<endl;
    //cout<<adding(d)<<endl;
    return 0;
}
