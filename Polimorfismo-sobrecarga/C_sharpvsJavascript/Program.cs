// Ejemplo de sobrecarga en c#
using System;

class Program
{
    public static void Main(string[] args)
    {
        Console.WriteLine("Hola Mundo");

        Program programa = new Program();
        Console.WriteLine(programa.ContarItems(3000213));
        Console.WriteLine(programa.ContarItems("Hola mundo desde c#"));

        Console.WriteLine("\n" + programa.Sumar(10, 15));
        Console.WriteLine(programa.Sumar(5, 5, 10));
    }

    // Un metodo get que devuele un valor
    public int ContarItems(int x)
    { // 3000 --> "3000"
        return x.ToString().Length;
    }

    // sobrecarga del metodo
    public int ContarItems(string x)
    {
        return x.Length;
    }

    // otro metodo de suma
    public int Sumar(int x, int y)
    {
        return x + y;
    }

    // sobrecarga del metodo de suma
    public int Sumar(int x, int y, int c)
    {
        return x + y + c;
    }
}
