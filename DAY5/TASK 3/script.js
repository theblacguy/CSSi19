let name = prompt ("Enter Your Name");
let grade = prompt ("Enter Your Score "+ name);

grade= Number(grade);

// Enter a value that is either greater than or equal to  0 and is  not isNAN
if (grade>=0 && grade!= isNaN) 
{
    if (grade>=70)
    {
    console.log("You passed")
    }else 
    {
    console.log("You failed Dumbass")
    }
}else
{
    console.log("You didn't enter a number "+ name)
}



