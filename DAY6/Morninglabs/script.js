

function CountoN(k){
    
    for (let i=1;i<=Math.abs(k);i++){
       console.log(i); 
    }
    
}



let k = prompt("Enter number");


k = Number(k);


while (isNaN(k)){
    k = prompt("Enter number");

    if (k==!isNaN && k ==isNaN){
    console.log("You ain't enter anything stupid")
    }
    k = Number(k);
   
} 



CountoN(k)


