function fibs(n){
    let array = [0,1]
    if(n === 0){
        return [0]
    }else if(n === 1){
        return [1]
    }
    for(let i = 2; i < n; i++){
        let sum = array[array.length-1] + array[array.length-2]
        array.push(sum) 
    }
    return array 
}


function fibsRec(n){
    let array = [0,1]
    if(n < 2){
        return n
    }
    return fibsRec(n-1)+ fibsRec(n-2)
}

function mergeSort(array){
    if(array.length <= 1){
        return array
    }
    
    const middle = Math.floor(array.length / 2) 
    const left = array.slice(0,middle)
    const right = array.slice(middle)

    const leftSorted = mergeSort(left)
    const rightSorted = mergeSort(right)

    return merge(leftSorted,rightSorted)
}

const numere = [2,5,8,7,6]

function merge(left,right){
    let result = []
    let leftIndex = 0
    let rightIndex = 0

    while(leftIndex < left.length && rightIndex < right.length){
        if(left[leftIndex] < right[rightIndex]){
            result.push(left[leftIndex])
            leftIndex++
        }else{
            result.push(right[rightIndex])
            rightIndex++
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}