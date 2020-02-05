/**
 * Scope + hoisting
 * to read
 * https://medium.com/@stasonmars/%D1%80%D0%B0%D0%B7%D0%B1%D0%B8%D1%80%D0%B0%D0%B5%D0%BC%D1%81%D1%8F-%D1%81-%D0%BF%D0%BE%D0%B4%D0%BD%D1%8F%D1%82%D0%B8%D0%B5%D0%BC-hoisting-%D0%B2-javascript-7d2d27bc51f1
 * https://bxnotes.ru/conspect/lang/js/kurs-sovremennogo-javascript/vsplytie-hoisting/
 * https://bxnotes.ru/conspect/lang/js/kurs-sovremennogo-javascript/oblast-vidimosti-scope/
 */


// что выведется на экран и почему?
var text = 'outside';
function logIt(){
    console.log(text);
    var text = 'inside';
};
logIt();



