#include <iostream>
#include <algorithm>

using namespace std;

int arr[3]; int a, b, c;

void sprawdz()
{
    int n = sizeof(arr) / sizeof(arr[0]);

    sort(arr, arr + n);

    a = arr[0]; b = arr[1]; c = arr[2];
}

int main()
{
    cout << "podaj trzy dlugosci bokow, a sprawdze czy mozna z nich zrobic trojkat!";
    cout << endl << "Podaj pierwszy bok: "; cin >> arr[0];
    cout << endl << "Podaj drugi bok: "; cin >> arr[1];
    cout << endl << "Podaj trzeci bok: "; cin >> arr[2];

    sprawdz();

    if (a + b > c)
    {
        cout << endl << "Z tych bokow mozna stworzyc trojkat!";
    }
    else
    {
        cout << endl << "Z tych bokow nie mozna ulozycz trojkata :(";
    }

	return 0;
}