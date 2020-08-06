const romanToInt = function (s) {
  const romanValues = {
    I:1,
    V:5,
    X:10,
    L:50,
    C:100,
    D:500,
    M:1000
  }
  let arabicArray = [];
  let romanArray = s.split("");
  for(let i = 0; i < romanArray.length; i++){
    let val = romanValues[romanArray[i]];
    let val2 = romanValues[romanArray[i + 1]];
    if(val2 > val){
      arabicArray.push(val2 - val);
      i++;
    }else {
    arabicArray.push(val);
    }
  }
const reducer = (acc, cv) => acc + cv;
return arabicArray.reduce(reducer);
};