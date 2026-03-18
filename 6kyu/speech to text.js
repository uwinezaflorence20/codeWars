const bot = {
    message(prompt) {
        return siri(prompt);
    }
};

function siri(input) {
    const nums = input.match(/\d+/g).map(Number);
    console.log(nums);
    if (input.includes("Add")) return nums[0] + nums[1];
    if (input.includes("Substract")) return nums[0] - nums[1];
    if (input.includes("weather")) {
        let time = input.match(/\d+/g)
        console.lo
    }
}
console.log(bot("Add 5 to 20."))