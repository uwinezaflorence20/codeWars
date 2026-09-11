function luckCheck(ticket) {
    if (ticket === "") {
          throw new Error("Empty string");
    }
    if (!/^\d+$/.test(ticket)) {
          throw new Error("Not a number");
    }
    let mid = Math.floor(ticket.length / 2);
    let leftSum = 0;
    let rightSum = 0;

    for (let i = 0; i < mid; i++) {
        leftSum += Number(ticket[i]);
        rightSum += Number(ticket[ticket.length - 1 - i]);
    }
    return leftSum === rightSum;
}