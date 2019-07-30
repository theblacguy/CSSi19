

function Multiples(multi,m,n){
    
    for (let i=1;i<=Math.abs(n);i++){
       multi.push(i * m); 
    }
    
}




let m = Number(prompt("Enter number multiple"));
let n =Number (prompt("Enter  final number"));
let multi = []





Multiples(multi, m,n)


