function radianToDegree (radian){
    let degree = radian * (100/ Math.PI);
    degree = toFixed (2);
    degree = parseFloat(degree);
    return degree;
}

console.log(radianToDegree(1));