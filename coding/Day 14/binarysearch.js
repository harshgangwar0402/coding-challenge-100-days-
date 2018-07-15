var arr=[];
var counter=0;
var flag=1;
var mid;
var readline=require('readline');
var prompts=readline.createInterface(process.stdin,process.stdout);
prompts.question('Enter size of array',function(size){
    console.log('Enter elements in array');
    readarray(size);

});
function readarray(size){
prompts.question('',function(ele){
ele=parseInt(ele);
arr.push(ele); 
if(counter<size-1){
       
    counter++;
    readarray(size);
}
else{    
    sort();

}
});
}

function sort(){
    for(var i=0;i<arr.length &&flag;i++){
        Flag=0;
        for(var j=0;j<arr.length;j++)
        {
            if(arr[j]>arr[j+1]){
                Flag=1;
                temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
                
            }
        }
    }
    console.log('array after sorting is '+ arr);
    search();
}
function search(){
    prompts.question('Enter element you want to search ',function(item){
      beg=0;
      end=arr.length-1;
        binary(beg,end,item);
    });
}
function binary(beg,end,item){
    mid=parseInt((beg+end)/2);
    if(arr[mid]==item){
        mid=mid+1;
        console.log(item+' is found at position '+mid);
    }
    else 
        if(item>arr[mid]){
          beg=mid+1;
            binary(beg,end,item);
        }
        else if(item<arr[mid]){
            end=mid-1;
            binary(beg,end,item);
        }
    }

