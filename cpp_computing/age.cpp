#include <iostream>
#include <cassert>

using namespace std;

int main() {
    const int currentYear = 2024;  // Assume the current year is 2024
    int birthYear;

    // Ask the user for their birth year
    cout << "Enter your year of birth: ";
    cin >> birthYear;

    // Assert that the birth year is not equal to the current year
    assert(birthYear != currentYear && "Year of birth cannot be the current year.");
    // Assert that the birth year is not greater than the current year
    assert(birthYear <= currentYear && "Year of birth cannot be greater than the current year.");

    // Calculate the person's age
    int age = currentYear - birthYear;

    // Check if the person is eligible to vote
    if (age >= 18) {
        cout << "You are " << age << " years old. You are allowed to vote." << endl;
    } else {
        cout << "You are " << age << " years old. You are not allowed to vote." << endl;
    }

    return 0;
}

