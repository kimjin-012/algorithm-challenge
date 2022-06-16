/*
https://www.hackerrank.com/challenges/mark-and-toys/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=sorting
*/
using System;

class Result{

    // static void Main()
    // {
    //     List<int> array = {1, 12, 5, 111, 200, 1000, 10};
    //     int budget = 50;

    //     maximumToys(array, budget);
    // }

    public static int maximumToys(List<int> prices, int k)
    {
        int count = 0;
        int total = 0;
        
        prices.Sort();
        while(total <= k){
            total += prices[count];
            if(total > k)
            {
                break;
            }
            count++;
        }
        return count;
    }
    
}