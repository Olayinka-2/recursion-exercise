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
   if(n == 0) {
      return [0];
   } 
   if(n == 1){
      return [0, 1]
   }

   let fibArray = fibRecursion(n - 1);
   let nextArray = fibArray[n - 1] + fibArray[n - 2];

   fibArray.push(nextArray);
   return fibArray;
   
}
// console.log(fibRecursion(8));

// for merge sort

function mergeSort(array) {
   if(array.length < 2) {
      return array;
   }

   const middle = array.length / 2;
   const left = array.slice(0, middle);
   const right = array.slice(middle);

   return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
   let i = 0;
   let j = 0;

   let sortedArray = [];

   while(i < left.length && j < right.length) {
      if(left[i] < right[j]) {
         sortedArray.push(left[i]);
         i++
      } else {
         sortedArray.push(right[j]);
         j++
      }
   }
   return sortedArray.concat(left.slice(i)).concat(right.slice(j));
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]))