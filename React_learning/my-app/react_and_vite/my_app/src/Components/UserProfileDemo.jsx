import { useState, useEffect } from "react";
 
function useGetUserById(userId) {
  const [user, setUser]       = useState(null);
  const [posts, setPosts]     = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState(null);
 
  useEffect(() => {
    // Guard: do nothing if no userId provided
    if (!userId) return;
 
    const fetchData = async () => {
      setLoading(true);
      setError(null);  // reset previous errors
 
      try {
        // Fetch both endpoints simultaneously with Promise.all
        const [usersRes, postsRes] = await Promise.all([
          fetch("https://jsonplaceholder.typicode.com/users"),
          fetch("https://jsonplaceholder.typicode.com/posts"),
        ]);
 
        // Check for HTTP errors
        if (!usersRes.ok || !postsRes.ok) {
          throw new Error("Failed to fetch data");
        }
 
        const [usersData, postsData] = await Promise.all([
          usersRes.json(),
          postsRes.json(),
        ]);
 
        // Find the specific user
        const foundUser = usersData.find((u) => u.id === userId);
        // Filter posts that belong to this user
        const userPosts = postsData.filter((p) => p.userId === userId);
 
        setUser(foundUser || null);
        setPosts(userPosts);
 
      } catch (err) {
        setError(err.message);
      } finally {
        // Always turn off loading, success or failure
        setLoading(false);
      }
    };
 
    fetchData();
  }, [userId]); // Re-run whenever userId changes
 
  return { user, posts, loading, error };
}
 
export default useGetUserById;