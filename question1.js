function swapCase(string){
    return string
    .split("")
    .map(function(letters){
        
        // cahanges letters in uppercase to lower case
        if(letters===letters.toUpperCase()){
            return letters.toLowerCase();
        }
        else{
            //changes letters in lowercase to uppercase
            return letters.toUpperCase()
        }
    })
    .join("")//Joins the split strings together

}
console.log(swapCase("The Quick Brown Fox"))