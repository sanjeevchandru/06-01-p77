document.write("41. to check a set of three numbers; if the three numbers are the same return 30; otherwise return 20; and if two numbers are the same return 40."+"<br>");
function test41(x,y,z){
    if(x==y && y==z){
        return 30;
    }
    
    if(x==y || y==z || z==x){
        return 40;
    }
    return 20;
}
document.write("The numbers are :20,20,30  ,Ans :"+test41(20,20,30)+"<br>");
document.write("The numbers are :10,10,10  ,Ans :"+test41(10,10,10)+"<br><br>");