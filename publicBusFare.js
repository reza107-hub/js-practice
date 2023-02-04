function publicBusFare (people){
    // if someone input bellow 50

    if (typeof people != 'number' || people <= 49){
        return 'Enter the valid input'
    }


    
    let remaining ;
    //  50 = bus capacity
    remaining = people % 50;  
    // 11 =  micro capacity
    remaining = remaining % 11;
    // return remaining people public bus cost where public bus ticket price is  250 tk
    return remaining * 250;
    
}


console.log(publicBusFare(55));