function stringTransformation(str,ops){
    for(let op of ops){
        if (op === "U") {
            str = str.toUpperCase();
        } else if (op === "L") {
            str = str.toLowerCase();
        } else if (op === "R") {
            str = str.split("").reverse().join("");
        } else if (op === "D") {
            let result = "";
            for (let ch of str) {
                result += ch + ch;
            }
            str = result;
        }
    }
}