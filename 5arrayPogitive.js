let array = [0, 1, 2 , 3,-4, 4, -4, -3,5];

function checkArr (array){
    let newArr = [];
    for(let i=0; i<array.length; i++){
        let num = array[i]
    if(num >=0){
        newArr.push(num);
    }
    else {
        break;
    }
    }
    
    return newArr;
}

console.log(checkArr(array));