function fibs(n){
   let [prev, current] = [0,1];
   let sum
   let fibArray = [prev, current];
   
   for(let i = 2; i < n; i++) {
      sum = prev + current;
      [prev, current] = [current, sum];
      fibArray.push(sum);
   }
   console.log(fibArray);
}
// fibs(8);

function fibRecursion(n) {
   if(n == 1) {
      return [0];
   } 
   if(n == 2){
      return [0, 1]
   }

   let fibArray = fibRecursion(n - 1);
   let nextArray = fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2];

   fibArray.push(nextArray);
   return fibArray;
   
}
console.log(fibRecursion(8));
