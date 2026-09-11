export const sayHello = (name: string[], city: string, state: string):string => {
  let Combined = name.join(' ');
  return `Hello, ${Combined}! Welcome to ${city}, ${state}!`;
}