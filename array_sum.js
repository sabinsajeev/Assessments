class Solution{
    sumElement(arr,n){
        var sum=0
        for(var i=0;i<n;i++ ){
            sum=sum+arr[i];
        }
        return sum;
    }
}

let obj=new Solution();
console.log("sum = " +obj.sumElement([3,2,1],3));