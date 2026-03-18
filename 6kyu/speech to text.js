const bot = {
    message(prompt) {
        return siri(prompt);
    }
};
console.log(bot);

function siri(input) {
    const nums = input.match(/\d+/g).map(Number);
    console.log(nums);
    if (input.includes("Add")) return nums[0] + nums[1];
    if (input.includes("Substract")) return nums[0] - nums[1];
    if (input.includes("weather")) {
        let time = input.match(/\d+/g)
        let hour = +time[0];
        let isPM = input.includes("pm");

        
    }
}
console.log(siri("Add 5 to 20."))
console.log(siri("What is the weather at 4:30pm?"))