function fibo(i=0){
    if(i===0)
      return 0;
    else if(i===1||i===2)
     return 1;
    return fibo(i-1)+fibo(i-2);   
}
function printSeries(term=10)
 {
    for(i=0;i<term;i++)
     {
        console.log(fibo(i));
     }
 }
 printSeries();
 