class Solution{
    isPalindrome(s){
        s=s.toUpperCase();
        var rev=s.split("").reverse().join("")
        if(rev===s){
            return 1;
        }
        else{
            return 0;
        }

    }
}

var obj=new Solution();
var output=obj.isPalindrome("MADAM");

if(output===1){
    console.log("Palindrome");
}
else{
    console.log("Not Palindrome");
}