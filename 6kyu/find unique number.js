function findUniq(arr) {
    let common = (arr[0] === arr[1] || arr[0] ===arr[2])? arr[0] : arr[1];
    return arr.find(num => num !== common);

}