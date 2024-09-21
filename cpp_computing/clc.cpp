#include <iostream>

using namespace std;

// Constants for GlobalMail
const double GLOBALMAIL_ZONE_1_3_COST = 108.0;
const double GLOBALMAIL_ZONE_4_6_COST = 130.0;

// Constant for DHL
const double DHL_COST_PER_KG = 70.0;

// Function prototypes
double calcPostage(double weight, int zone);
double calcPostage(double weight, double length, double width, double height);

int main() {
    char choice;
    cout << "Enter 'g' for GlobalMail or 'd' for DHL: ";
    cin >> choice;

    if (choice == 'g' || choice == 'G') {
        double weight;
        int zone;
        cout << "Enter the weight of the parcel (in kg): ";
        cin >> weight;
        cout << "Enter the zone (1-6): ";
        cin >> zone;

        // Validate zone input
        while (zone < 1 || zone > 6) {
            cout << "Invalid zone. Please enter a zone between 1 and 6: ";
            cin >> zone;
        }

        double cost = calcPostage(weight, zone);
        printf("The total cost for GlobalMail is: R%.2f\n", cost);  // Using printf to format
    }
    else if (choice == 'd' || choice == 'D') {
        double weight, length, width, height;
        cout << "Enter the actual weight of the parcel (in kg): ";
        cin >> weight;
        cout << "Enter the length of the box (in cm): ";
        cin >> length;
        cout << "Enter the width of the box (in cm): ";
        cin >> width;
        cout << "Enter the height of the box (in cm): ";
        cin >> height;

        double cost = calcPostage(weight, length, width, height);
        printf("The total cost for DHL is: R%.2f\n", cost);  // Using printf to format
    }
    else {
        cout << "Invalid choice. Please restart the program and choose 'g' or 'd'." << endl;
    }

    return 0;
}

// Function for GlobalMail
double calcPostage(double weight, int zone) {
    if (zone >= 1 && zone <= 3) {
        return weight * GLOBALMAIL_ZONE_1_3_COST;
    } else if (zone >= 4 && zone <= 6) {
        return weight * GLOBALMAIL_ZONE_4_6_COST;
    }
    return 0.0;  // Default return value, though zone should always be valid
}

// Function for DHL
double calcPostage(double weight, double length, double width, double height) {
    double volumetricWeight = (length * width * height) / 5000.0;
    double effectiveWeight = (weight > volumetricWeight) ? weight : volumetricWeight;
    return effectiveWeight * DHL_COST_PER_KG;
}

