// let height = 1.85;
// let companion = false;

function canUse (height, companion) {
    let letsGo;
    if (height >= 1.4 && height <= 2) {
        letsGo = true;
    } else if (height >= 1.2 && companion) {
        letsGo = true;
    } else {
        letsGo = false;
    }
    return letsGo;
} 

console.log(canUse(1.1, true),
            canUse(1.2, true), 
            canUse(1.75, true),
            canUse(1.56, false), 
            canUse(1.32, false), 
            canUse(1.22, true));






