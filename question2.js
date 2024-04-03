
function generateArray(begin,finish){
   
    const solution1=[];// an array is created
    if(begin<= finish){
        for(let i = begin;i <= finish;i++){
             solution1.push(i);} 
        }
        // Used the for loop to find the elements between the begin and the finsh
    else{
        for(let i =begin ;i >=finish; i--){
             solution1.push(i);
        }
    }    

    //use return to get the output as solution1
   return solution1;
}
// call function and display 
let array1 = generateArray(4,7);
let array2 = generateArray(-4,7);
console.log(array1);
console.log(array2);



