#include <iostream>

using namespace std;

int a, b, c;

int main()
{
    cout << "Podaj pierwsza liczbe: "; cin >> a;
    cout << endl << "Podaj druga liczbe: "; cin >> b;

    if (a > b)
    {
        c = b;

        for (b ; b < a + 1; b++)
        {
           cout << c;
           c++;
        }
    }
    else if (a < b)
    {
        c = a;

        for (a; b > a - 1; a++)
        {
            cout << c;
            c++;
        }

    }

    return 0;
}