let a = prompt("enter the number");
    b=0;
    if(a>0){
        for(i=2;i<a;i++){
            if(a%i==0){
                b++;
            }
            else{}
        }
        if(b==0){
            document.write("number is prime");
        }
        else{
            document.write("number is not prime");
        }
    }
    else{}