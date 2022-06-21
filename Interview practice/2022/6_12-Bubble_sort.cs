using System;
using System.Collections.Generic;
using System.Linq;

class Result{
    public static void countSwaps(List<int> a)
    {
        int numSwap = 0;
        for(int i=0; i<a.Count; i++)
        {
            for(int x=0; x<a.Count-1; x++ )
            {
                if(a[x] > a[x+1])
                {
                    int temp = a[x];
                    a[x] = a[x+1];
                    a[x+1] = temp;
                    numSwap++;
                }
            }
        }

        Console.WriteLine("Array is sorted in " + numSwap + " swaps.");
        Console.WriteLine("First Element: " + a[0]);
        Console.WriteLine("Last Element: " + a[a.Count - 1]);
    }
}