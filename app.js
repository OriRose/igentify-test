const arr = [1,3,'a',4,1,3,'b',4,2,'a'];

const myFunc = (arr) => {

    return arr.reduce((previousResult,currentValue)=>{
        previousResult[currentValue] = previousResult[currentValue] ? previousResult[currentValue] + 1 : 1;
        return previousResult;
    },{})

    // for(let i = 0; i < arr.length; i++) {
        // ---
        // result[arr[i]] = (result[arr[i]]) ? result[arr[i]]+1 : 1;
        // ---
        // if(result[arr[i]]){
        //     result[arr[i]] = result[arr[i]]+1;
        // } else {
        //     result[arr[i]] = 1;
        // }
    // }

    return result;
}

console.log(myFunc(arr))