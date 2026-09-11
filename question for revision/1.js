const data = [
  { category: 'A', value: 10 },
  { category: 'B', value: 20 },
  { category: 'A', value: 15 },
  { category: 'C', value: 5 },
  { category: 'B', value: 25 },
];

const aggregated = aggregateByCategory(data);
console.log(aggregated);

const sumByCategory = (arr) => {
  const result = {};

  for (const { category, value } of arr) {
    result[category] = (result[category] || 0) + value;
  }

  return result;
};

// The function should return a new object where the keys are the categories and the values
//  are the sum of the value properties for that category.



function formatDuration(seconds) {
  if (seconds === 0) return "now";

  let years = Math.floor(seconds / (365 * 24 * 60 * 60));
  seconds %= 365 * 24 * 60 * 60;

  let days = Math.floor(seconds / (24 * 60 * 60));
  seconds %= 24 * 60 * 60;

  let hours = Math.floor(seconds / (60 * 60));
  seconds %= 60 * 60;

  let minutes = Math.floor(seconds / 60);
  seconds %= 60;

  let parts = [];

  if (years) parts.push(years + (years > 1 ? " years" : " year"));
  if (days) parts.push(days + (days > 1 ? " days" : " day"));
  if (hours) parts.push(hours + (hours > 1 ? " hours" : " hour"));
  if (minutes) parts.push(minutes + (minutes > 1 ? " minutes" : " minute"));
  if (seconds) parts.push(seconds + (seconds > 1 ? " seconds" : " second"));

  if (parts.length === 1) return parts[0];
  return parts.slice(0, -1).join(", ") + " and " + parts[parts.length - 1];
}
