// 輸入會是一個數字的陣列，回傳一個新的陣列，保持原來的數字，除了以下幾種：
// 3 的倍數要換成 Fizz
// 5 的倍數要換成 Buzz
// 又是 3 又是 5 的倍數要換成 FizzBuzz

// 例如   [1, 2, 3, 4, 5]
// 會回傳 [1, 2, Fizz, 4, Buzz]

function fizzBuzz(input) 
{
  let result = "";
  let array=[]
  for(let i =1 ;i<=input ; i++){
    array.push(i)
  }
  for(let i in array)
  {
      // console.log(array[i]);
      if((array[i]%3===0) && (array[i]%5===0)){
        array[i] ="FizzBuzz"
      }else if(array[i]%3 === 0 ){
        array[i]= "Fizz"

      }else if (array[i]%5 === 0){
        array[i]= "Buzz"

      }

//     if((i%3 ===0)&&(i%5 ===0)){
//       array[i] ="FizzBuzz"
//     }else if(i%5 ===0){
//       array[i] ="Fizz"
//     }else if(i%3 ===0){
//       array[i] ="Buzz"
//     }else{
//       array[i] =i
//     }
  }
  result=array.join(" ")

  // for(let i=1 ; i<=input ; i++ ){
  //   if(i>1)result+=" "
  //   if((i%3===0) && (i%5===0)){
  //     result+="FizzBuzz"
  //     }else if (i%3===0){
  //     result+="Fizz"
  //     }else if (i%5===0){
  //     result+="Buzz"
  //     }else{
  //     result+=i
  //     }
    
  // }  
  return result;
}

module.exports = { fizzBuzz };
