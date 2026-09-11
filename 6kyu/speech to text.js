const bot = {
    message(prompt) {
        return siri(prompt);
    }
};
console.log(bot.message("Add 5 and 3"));          
console.log(bot.message("Subtract 21 from 20"));    
console.log(bot.message("What is the weather at 6:09pm?")); 
console.log(bot.message("What is the weather at 7am?"));   
let siri = (input) => {
    const nums = input.match(/\d+/g).map(Number);

    if (input.includes("Add")) {
        return nums[0] + nums[1];
    }

    if (input.includes("Subtract")) { 
        if (input.includes("from")) {
            const [a, b] = nums;
            return b - a;
        }
        const [a, b] = nums;
        return a - b;
    }

    if (input.includes("weather")) {
        let hour = +nums[0];
        const isPM = input.includes("pm");
        if (isPM && hour !== 12) hour += 12;
        if (!isPM && hour === 12) hour = 0;
        return (hour >= 6 && hour <= 18) ? "sunny" : "raining";
    }
}