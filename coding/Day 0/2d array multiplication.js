var arr=new Array(3);
var arr2=new Array(3);
var result=new Array(3);
for(var i=0;i<3;i++)
{
    arr[i]=new Array(3);
    arr2[i]=new Array(3);
    result[i]=new Array(3);
}
arr[0][0]=1;arr[0][1]=2;
arr[0][2]=3;arr[1][0]=4;arr[1][1]=5;
arr[1][2]=6;arr[2][0]=7;
arr[2][1]=8;arr[2][2]=9;
arr2[0][0]=10;arr2[0][1]=11;arr2[0][2]=12;
arr2[1][0]=13;arr2[1][1]=14;arr2[1][2]=15;
arr2[2][0]=16;arr2[2][1]=17;arr2[2][2]=18;

for(var i=0;i<3;i++)
{
    for(var j=0;j<3;j++){
        result[i][j]=0;
        for(var k=0;k<3;k++)
        {
        
        result[i][j]=result[i][j]+arr[i][k]*arr2[k][j];
            }
    }
}
console.log("multiplication of array");
for(var i=0;i<3;i++)
{
    for(var j=0;j<3;j++){
        console.log(result[i][j]);
    }
}