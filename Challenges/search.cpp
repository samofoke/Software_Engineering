#include <iostream>
#include <string>
using namespace std;


void search_string(string str)
{
    int str_len = str.length();
    //int start = -1;
    int end = 0;

    for (int x = 0; x < str_len; x++, end++)
    {
        if ((str[x] == ' ') && (x == str_len - 1))
        {
            end = end + 1;
        }
        else
        {
            cout<<"-1"<<"\n";
        }
    }
}

int main()
{
    search_string("Hello apple pie!!");
    return (0);
}
