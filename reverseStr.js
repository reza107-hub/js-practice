let friendsName = ["Md. Oli Ullah Antor", "Aliraj Rahman",'Aminur Rashid Reza'];

function bestFriend(friendsName) {
  let name = friendsName[0];
  for (let i = 0; i < friendsName.length; i++) {
    let element = friendsName[i];
    if (element.length > name.length) {
      name = element;
    }
  }
  return name.split("").reverse().join("");
}

console.log(bestFriend(friendsName));
