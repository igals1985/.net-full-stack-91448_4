using System;

namespace _02_basic_types
{

    class Program
    {
        static void Main(string[] args)
        {
            //object - Supports all classes in the .NET Framework
            object myObject = 0;
            myObject = "Ishay";

            // string - Represents text as a series of Unicode characters.
            string myString = "Ori";

            //char - Represents a character as a UTF-16 code unit.
            char myChar1 = 'A';
            char myChar2 = (char)65;  //inside myChar2 we will get 'A' ('A' is 65 in ascii code)
            char myChar3 = (char)('A' + 32);  //inside myChar3 we will get 'a' ('a' is 65 + 32 in ascii code)

            //bool - Represents a Boolean (true or false) value.
            bool myBool = true;


            //******************************מספרים שלמים  - לא יכולים להיות עשרוניים
            //byte - Represents an 8-bit unsigned integer (0 to 255)
            byte myByte =255;

            //sbyte - Represents an 8-bit signed integer (-128 to 127)
            sbyte mySbyte = 0;

            //short - Represents a 16-bit signed integer. (-32,768 to 32,767)
            short myShort = 32760;

            //ushort - Represents a 16-bit unsigned integer (0 to 65,535)
            ushort myUshort = 32760;

            //int - Represents a 32-bit signed integer (-2,147,483,648 to 2,147,483,647)
            int myInt = 65539;

            //uint - Represents a 32-bit unsigned integer.
            uint myUint = 65539;


            long myLong = 66;
            ulong myUlong = 66;

            //****************************** מספרים עשרוניים
            // double  כל מספר עשרוני שנכתוב יהיה בצורה דיפולטיבית כטיפוס 

            //decimal - Represents a decimal number (-79228162514264337593543950335M to 79228162514264337593543950335M)
            decimal myDecimal =(decimal)0.99;
            myDecimal = 2.777M;
            myDecimal = Convert.ToDecimal(9.99);

            //double - Represents a double-precision floating-point number (15-16 digits after the point)
            double myDouble = 0.888;

            //float - Represents a single-precision floating-point number (7 digits after the point)
            float myFloat = (float)9.9;
            myFloat = 9.9F;
          


            //המרה של מחרוזת למספר
            int num1 = int.Parse("9");
            int num2 = Convert.ToInt32("9");

            //המרה של מחרוזת לערך בוליאני
            bool bool1 = bool.Parse("true");
            bool bool2 = Convert.ToBoolean("true");


            //המרה של מספר למחרוזת
            string str1 = (9).ToString();
            string str2 = Convert.ToString(9);

            Console.WriteLine("please enter your name:");

            string userName=Console.ReadLine();

            Console.WriteLine("please enter your age:");

            byte userAge=Convert.ToByte(Console.ReadLine());

            Console.WriteLine($"My name is {userName} , and I am {userAge} old");
        }
    }
}
