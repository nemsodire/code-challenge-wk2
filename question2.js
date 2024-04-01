
function generateArray(begin,finish){
   
    const solution1=[]
    if(begin<= finish){
        for(let i = begin;i < finish;i++) ;{
            return solution1.push(i);} 
        }
    else{
        for(let i =begin ;i >finish; i--);{
            return solution1.push(i);
        }
    }    

    
   
}
let array1 = generateArray(4,7)
let array2 = generateArray(-4,7)
console.log(array1)
console.log(array2)



