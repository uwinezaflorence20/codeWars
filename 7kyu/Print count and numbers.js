function countMe(data) {
    if (data === null || data === "" || isNaN(Number(data))) return '';

    let result = "";
    let count = 1;

    for (let i = 0; i < data.length; i++) {
        if (data[i] === data[i + 1]) {
            count++;
        } else {
            result += count + data[i];
            count = 1;
        }
    }

    return result;
}