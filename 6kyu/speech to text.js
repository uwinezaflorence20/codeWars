const bot = {
    message(prompt) {
        return siri(prompt);
    }
};

function siri(input) {
    const nums = input.match(/\d+/g).map(Number);
    console.log(nums);
    if (input.includes("Add")) return nums[0] + nums[1];
   
}
console.log(bot("Add 5 to 20."))