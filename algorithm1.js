// Diff two arrays

function diffArray(arr1,arr2){
    const union=[];
    for(let i=0;i<arr1.length;i++){
        if(!union.includes(arr1[i])){
            union.push(arr1[i])
        }
    }
    for(let i=0;i<arr2.length;i++){
        if(!union.includes(arr2[i])){
            union.push(arr2[i])
        }
    }
    console.log(union)
}

diffArray([1,2,3,5],[1,2,3,4,5]);