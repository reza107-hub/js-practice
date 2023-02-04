let friendsName = ['Md. Oli Ullah Antor', 'Shah Md. Julhash Tamim', 'Aliraj Rahman', 'Jyotirmoy Raj Hridoy'];


function bestFriend (friendsName) {
    let name = friendsName[0]
    for (let i = 0; i < friendsName.length; i++) {
        let element = friendsName[i];
        if (element.length > name.length) {
            name = element;
            
        }
        
    }
    return name;
}

console.log(bestFriend (friendsName));