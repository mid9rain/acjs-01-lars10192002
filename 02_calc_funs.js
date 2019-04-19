// 這個函式會回傳兩個數字相加
function add(a, b) {
  // 把你的解答寫在這裡。要記得 return 喔。
  return a+b;
}

// 這個函式會回傳兩個數字相減
// 注意參數的部份是不是有少什麼，補上需要的東西
function sub(num1,num2) {
  return num1-num2;
  // 把你的解答寫在這裡。要記得 return 喔。
}

// 實作 mul 及 div 兩個函式
function mul(mul_num1,mul_num2){
  return mul_num1*mul_num2;
}

function div(div_num1,div_num2){
  return div_num1/div_num2;
}


module.exports = {add, sub, mul, div};
