type Pizza = {
    id: number
    name: string
    price: number
}

type Order = {
    id: number
    pizza: Pizza
    status: "ordered" | "completed"
}



let cashInRegister = 100
let nextOrderId = 1
let nextPizzaId =1
const orderQueue: Order[] = []
const menu: Pizza[] = [
    { id: nextPizzaId++, name: "Margherita", price: 8 },
    { id: nextPizzaId++, name: "Pepperoni", price: 10 },
    { id: nextPizzaId++, name: "Hawaiian", price: 10 },
    { id: nextPizzaId++, name: "Veggie", price: 9 },
]

function addNewPizza(pizzaObj: Pizza):void {
    pizzaObj.id = nextPizzaId++
    menu.push(pizzaObj)
}

function placeOrder(pizzaName: string): Order| undefined {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
    if (!selectedPizza) {
        console.error(`${pizzaName} does not exist in the menu`)
        return
    }
    cashInRegister += selectedPizza.price
    const newOrder: Order = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" }
    orderQueue.push(newOrder)
    return newOrder
}

function completeOrder(orderId: number):Order|undefined {
    const order = orderQueue.find(order => order.id === orderId)
    if (!order) {
        console.error(`${orderId} was not found in the orderQueue`)
        return
    }
    order.status = "completed"
    return order
}


export function getPizzaDetail(identifier: string | number):Pizza|undefined {
    if (typeof identifier === "string") {
        return menu.find(pizza => pizza.name.toLowerCase() === identifier.toLowerCase())
    } else {
        return menu.find(pizza => pizza.id === identifier)
    }
}
 
type User ={
    id:number
    username:string
    role:'member'|'guest'|'contributor';
}
const users: User[]=[
    {id:1,username:'john-doe', role:'member'}
]

function updateUser(id:number,updates:any){
    const foundUser = users.find(user=>user.id===id);
    if(!foundUser){
        console.error("user not found");
        return
    }
    Object.assign(foundUser,updates)

}
addNewPizza({id:nextPizzaId++ , name: "Chicken Bacon Ranch", price: 12 })
addNewPizza({id:nextPizzaId++ , name: "BBQ Chicken", price: 12 })
addNewPizza({id:nextPizzaId++ , name: "Spicy Sausage", price: 11 })

placeOrder("Chicken Bacon Ranch")
completeOrder(1)

console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order queue:", orderQueue)
