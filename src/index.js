module.exports = function getZerosCount(number, base) {
  var step = 2;
  var arr = [];
  var lastArr = [];
  var newBase = base;
  var newNumber = number;
  var count = 0;
  var sum = 0;
  var pow=0;
  while(step <= newBase){
    if(newBase % step == 0){
      newBase = newBase / step;
      arr.push(step);
    }
    else{
      step++; 
    }
  }

  for(var j = 0; j<arr.length ;j++){
  for(var t = 1; Math.pow(arr[j],t) < newNumber ;t++){
    count = Math.floor(newNumber/Math.pow(arr[j],t));
    sum = sum + count;
   }
  lastArr.push(sum);
  sum = 0;
  count = 0;
  
}
var min = lastArr[0];
for(var i = 0;i<lastArr.length;i++){
  if(lastArr[i]<min){
    min = lastArr[i];
  }
}
for(var i = 0;i<lastArr.length;i++){
  if(lastArr[i]==min){
    pow++;
  }
}
min = Math.floor(min / pow);
  return min;
}