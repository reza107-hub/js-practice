function youngerPerson (arr){
    let younger = arr[0]
    for (let i= 0; i < arr.length; i++){
        let element= arr[i];
        if (element.age < younger.age){
            younger = element;
        }
    }
    return younger;
}


let arr = [
    {name:'sakib', age:30},
    {name:'samiul', age:20},
    {name:'sahid', age:50},
    {name:'samin', age:10}
] 

console.log(youngerPerson(arr));
