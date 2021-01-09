
#include<stdio.h>
#include<stdlib.h>
#include<time.h>
int main()
{
    int Secret_Number,Guess, NO_of_guesses=1;
    srand(time(0));
    //Generate a random no. b/w 1 to 100
    Secret_Number=rand()%100+1;
    /*
    printf("The No. is %d",Secret_Number);
    */
    do{
        printf("Guess the no. between 1 to 100 :\n");
        scanf("%d",&Guess);
        if(Guess>Secret_Number)
            printf("You guessed the greater No.of Secret_Number\n");
        else if(Guess<Secret_Number)
            printf("You guessed the less No.of Secret_Number\n");
        else
            printf("You guessed it in %d attempts \n",NO_of_guesses);
        NO_of_guesses++;
    }while(Guess!=Secret_Number);
    return 0;
}
