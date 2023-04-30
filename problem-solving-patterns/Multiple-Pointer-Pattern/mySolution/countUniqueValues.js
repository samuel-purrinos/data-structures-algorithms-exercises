function countUniqueValues(array){
    if(array.length<1)
    return 0;
  let uniqueValues = 1;
  let pointer = array[0];
  for(let i =1; i<array.length;i++){
      if(pointer !== array[i]){
          uniqueValues++;
      }
      pointer=array[i];
      
  }
  return uniqueValues;
}