#include <iostream>

using namespace std;

char ch;

void sprawdz(char ch)
{
    if (ch >= 'A' && ch <= 'Z')
    {
        cout << "To jest Wielka Litera!" << endl;
    }
    else if (ch >= 'a' && ch <= 'z')
    {
        cout << "To jest Mala Litera!" << endl;
    }
    else if (isdigit(ch))
    {
        cout << "To jest cyfra!" << endl;
    }
    else
    {
        cout << "To jest jakis znak..." << endl;
    }
}
int main()
{
    cout << "Podaj Jeden (1) znak: "; cin >> ch;

    sprawdz(ch);
}