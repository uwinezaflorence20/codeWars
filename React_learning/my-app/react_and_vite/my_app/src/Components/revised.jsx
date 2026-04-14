function ProfileEditor() {
 const [user, setUser] = useState({
 name: 'Patrick',
 email: 'patrick@example.com',
 bio: 'React developer from Rwanda.',
 });
 // ❌ WRONG — mutating state directly
 // user.name = 'New Name'; // React won't detect this change
 // ✅ CORRECT — create a new object with spread
 function updateName(newName) {
 setUser({
 ...user, // copy all existing fields
 name: newName, // override just the name
 });
 }
 return (
 <div className='max-w-md mx-auto p-8 space-y-4'>
 <input
 value={user.name}
 onChange={e => setUser({ ...user, name: e.target.value })}
 className='w-full border border-gray-200 rounded-lg px-4 py-2.5
 focus:outline-none focus:ring-2 focus:ring-blue-500'
 />
 <textarea
 value={user.bio}
 onChange={e => setUser({ ...user, bio: e.target.value })}
 rows={3}
 className='w-full border border-gray-200 rounded-lg px-4 py-2.5
 focus:outline-none focus:ring-2 focus:ring-blue-500'
 />
 <div className='bg-gray-50 rounded-xl p-4'>
 <p className='font-semibold text-gray-800'>{user.name}</p>
 <p className='text-gray-500 text-sm'>{user.bio}</p>
 </div>
 </div>
 );
}