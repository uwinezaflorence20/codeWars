// The following function is meant to log the city for a customer’s shipping address. 
// However, the code is unsafe and may throw runtime errors due to missing or undefined properties.

// Without changing the logic of the function, fix the typing issues and make the function safe using proper TypeScript types.


const logOrder = (order: any) => {
    type user={
    name:string
    address?: number
}
  console.log(`Shipping to: ${order.customer.address.city}`);
};

logOrder({
  customer: {
    name: 'Jane',
    // address is missing
    // address:{
    //     city:"Kigali"
    // }
  }
});