/* 
Gain an understanding of time complexity for shadow arrays here: https://iq.opengenus.org/time-complexity-of-array/

Test with
    10 -> needle
    10 9 9 9 11 3 4 1 -> array
    
    # Returns 10
   
    or
    
    11 -> needle
    11 9 8 9 10 2 3 1 -> array
    
    # Returns 10
    
    # The second case is unique because we tell the system we are looking for the needle "11" despite the algorithim being built for returning
    # the second largest value.
    # Despite the needle, we still get 10, as intended.
    # Algorithmically, I would say that this may partially serve as a 'secure' algorithm procedurally due to data encapsulation and pre-sorting
    
    The shadow is created, the array is sorted, cleaned, and then criteria is searched for.
    
    In parrallel this allows us to maintain two states of data simultaneously by creating a shadow, we can create a new instance with the shadow,
    continue to operate on the shadow or make version changes to the main array, using a shadow. A shadow array here is similar to the concept of
    'superposition' in Quantum computing (when a combonation of 1's and 0's exist simultaneously to perform a multitude of calculations within each 
    prior to the superpositions collapse).
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
