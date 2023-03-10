/* Test with
    10 -> needle
    10 9 9 9 11 3 4 1 -> array
    
    # Returns 10
   
    or
    
    11 -> needle
    11 9 8 9 10 2 3 1 -> array
    
    # The second case is unique because we tell the system we are looking for the needle "11" despite the algorithim being built for returning
    # the second largest value.
    # Despite the needle, we still get 10, as intended.
    
    Shadow is created, array is sorted, cleaned, and then criteria is searched for.
*/
function getSecondLargest(nums) {
    let arr_start = 0, final_value, occurence = 0;
    const init = () => {(!nums.sort()) ? null : (function () {
          arr_start += 1;
          function compare(a, b){return a - b;}
          let sorted = nums.sort(compare); //encapsulated shadow
          if(sorted.includes(sorted[arr_start])){
            function occurenceAdd(value){occurence += 1;
            if(sorted[arr_start-1] === sorted[arr_start]){;   
               let index = sorted.indexOf(sorted[arr_start-1]);
               sorted.splice(index, 1);occurence += 1;}
            if(occurence >= 2){sorted.sort(compare);occurence = 0;}
             return (occurence >= 2) ? null : value;}
              sorted = sorted.filter(occurenceAdd);}
           if(arr_start === nums.length){
             final_value = sorted[sorted.length-2];}
        })();}
     let myNumber = nums.map(values => nums.every(init));
    return final_value;
}
