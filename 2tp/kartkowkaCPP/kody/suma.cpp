#include <iostream>

using namespace std;

int main()
{
powtorz:
	int a, b, c;

	cout << "Podaj pierwsza liczbe: "; cin >> a;
	cout << endl << "Podaj druga liczbe: "; cin >> b;
	c = a + b;
	cout << endl << "suma liczb to: " << c << endl;
	if (c == 0)
	{
		return 0;
	}
	else goto powtorz;
}