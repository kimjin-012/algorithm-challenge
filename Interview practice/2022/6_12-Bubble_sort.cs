using System;
using System.Collections.Generic;
using System.Linq;

class Result{
    public static void countSwaps(List<int> a)
    {
        int numSwap = 0;
        foreach(int i in a)
        {
            foreach(int x in a)
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
        Console.WriteLine();
    }
}