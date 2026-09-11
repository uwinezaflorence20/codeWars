type UserRole = 'guest'|'member'|'admin';
type User={
    username:string
    role:UserRole
}
const users: User[]=[
    {username:"john-doe", role:'member'},
    {username:"jahn-doe", role:'admin'},
    {username:"john-doe", role:'guest'}

]
function fetchUserDetails(username:string):User{
    const user = users.find(user=>user.username === username)
    if(!user){
        throw new Error(`user with username${username} not found`); 
    }
    return user
}
console.log(fetchUserDetails('john-doe'));