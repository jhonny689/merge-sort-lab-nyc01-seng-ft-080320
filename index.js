//1. find and remove smallest element

function findMinAndRemoveSorted(array){
  let min = array[0],
      minIndex = 0;
  for(let i = 1; i < array.length; i++ ){
    if(array[i] < min){
      min = array[i];
      minIndex = i;
    }
  }
  array.splice(minIndex,1);
  return min;
}

//2. merge two sorted arrays
function merge(arr1, arr2){
  let i = 0,
      j = 0,
      k = 0;
  const sol = [];
  while(i < arr1.length && j < arr2.length){
    if( arr1[i] < arr2[j] ){
      sol[k++] = arr1[i++];
    }else{
      sol[k++] = arr2[j++];
    }
  }
  console.log(i, arr1.length, j , arr2.length, k);
  return sol;
}