/*pushing all the zeros into the end of the array*/
var temp;
var arr=[3,0,1,0,5,9,0,6,7];
size=arr.length;
console.log(size);
console.log(arr);
for(var j=0;j<size;j++){
for(var i=0;i<size-1;i++){
    if(arr[i]==0){
        temp=arr[i];
        arr[i]=arr[i+1];
        arr[i+1]=temp;
      
    }
   

}
}
console.log('array after pushing all the zero at end');
console.log(arr);
