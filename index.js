function acronymOfWords(inp) {
   let result= '';
 let data = inp.toUpperCase().split(' ')
 for(let i = 0; i < data.length; i++){
   result += data[i].charAt(0); // ||.substring(0,1)
}  
    return result
 }

module.exports = acronymOfWords; 