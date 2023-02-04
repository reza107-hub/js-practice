const pageNeed1 = 100;
const pageNeed2 = 200;
const pageNeed3 = 300;
function paperRequirements(requirement1,requirement2,requirement3){
    const requirement1page = requirement1 * pageNeed1;
    const requirement2page = requirement2 * pageNeed2;
    const requirement3page = requirement3 * pageNeed3;

    const totalPage = requirement1page + requirement2page + requirement3page;
    return totalPage;
}

console.log(paperRequirements(1,1,1));