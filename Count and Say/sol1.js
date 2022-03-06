/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
if(n===1){
    return "1"
}
 
 let str = countAndSay(n-1);
    let count = 0;
    let res =''
    
    for(let i =0; i<str.length; i++){
        count++
        if( i===(str.length -1) || str[i] !== str[i+1]){
            res = res + count.toString() + str[i];
            count =0;
            
        }
    }
    
    return res;
};