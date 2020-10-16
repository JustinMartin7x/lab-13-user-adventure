const CHARACTER = 'CHARACTER';


export function saveChar(character) {
    const stringyChar = JSON.stringify(character);
    localStorage.setItem(CHARACTER, stringyChar); 
}
export function getChar() {
    const stringChar = localStorage.getItem(CHARACTER);
    return JSON.parse(stringChar);
}
export function findById(someArray, someId) {

    for (let i = 0; i < someArray.length; i++) {
        if (someArray[i].id === someId) {
            return someArray[i];
        }
    }
}