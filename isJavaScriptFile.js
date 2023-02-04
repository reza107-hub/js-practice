function isJavaScriptFile (fileName) {
    
    if (typeof fileName != 'string' || fileName.length == 0){
        return 'Its not a string'
    }
    if (fileName.endsWith('.js')){
        return true;
    }
    else {
        return false;
    }
}
console.log(isJavaScriptFile('js.png'));