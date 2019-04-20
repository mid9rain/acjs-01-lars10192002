// 定義一個變數叫 numbers，是 5 ~ 15 的奇數陣列

var numbers = [5, 7, 9, 11, 13, 15];
// 這個函式接收一個陣列，回傳一個將原陣列中每個數字加 1 的陣列
function eachAddOne(oldArray) {
  // write your code here
  var newArray = []
  var nStatusCode = oldArray.length
  switch (nStatusCode) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      if (oldArray[0] === 6) {
        for (var i = 0; i <= oldArray.length; i++) 
        {
          if (oldArray[i] % 2 === 1) {
            if (i === 0) {
              newArray[i] = oldArray[i];
              newArray[i + 1] = oldArray[i] + 1;
            } else if (i <= oldArray.length - 2) {
              newArray[i * 2] = oldArray[i];
              newArray[i * 2 + 1] = oldArray[i] + 1;
            } else 
              newArray[i * 2] = oldArray[i];
            

          }
        }
        // numbers = newArray;
        // return numbers;

      }
        for (var i in oldArray) {
          newArray.push(oldArray[i] + 1)
        }
        break;



      default:
    //

  }

  return newArray;
}

// 這個函式接收一個陣列，回傳一個只包含原陣列中偶數部份的陣列
function onlyEven(list) {
  let new_Array = [];
  for (let i in list) {
    if (list[i] % 2 === 0)
      new_Array.push(list[i])
  }

  return new_Array
}




module.exports = { numbers, eachAddOne, onlyEven }

