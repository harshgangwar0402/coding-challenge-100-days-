var counter=1;
var arr=[];
var first,second;

var readline=require('readline');
var prompts=readline.createInterface(process.stdin,process.stdout);
prompts.question('enter size of array',function(size){
    console.log('enter elements in array');
    insertele(size);
});
function insertele(num){
   
    prompts.question('',function(ele){
    
        arr.push(parseInt(ele));
        counter++;
    
        if(counter<=num){
        insertele(num);
        
        }
        else {
        console.log('array is '+arr);
            done();
    
    }
});
}
function done(){
   first=arr[0];
    for(j=0;j<arr.length;j++){
        if(arr[j]<first){
            first=arr[j];
        }
       
    }
for(i=0;i<arr.length;i++){
    
    if(first<arr[i]){
        second=first;
        first=arr[i];
       
    }
    if(second<arr[i]&&arr[i]!=first)
    second=arr[i];
    if(i==arr.length-1)
    printfs(first,second);
}
}
function printfs(first,second){
console.log('first lasrgest is '+first+' and second largest is '+second);
process.exit();
}