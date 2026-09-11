import { useEffect, useState } from "react";

const useGetUserById = (userId) => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        // Fetch user
        const userRes = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        if (!userRes.ok) throw new Error("Failed to fetch user");

        const userData = await userRes.json();

        // Fetch posts
        const postsRes = await fetch(
          `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
        );
        if (!postsRes.ok) throw new Error("Failed to fetch posts");

        const postsData = await postsRes.json();

        setUser(userData);
        setPosts(postsData);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchData();
    }
  }, [userId]);

  return { user, posts, loading, error };
};

/* =========================
   COMPONENT
========================= */
const UserProfileDemo = () => {
  const [selectedUserId, setSelectedUserId] = useState(1);

  const { user, posts, loading, error } = useGetUserById(selectedUserId);

  const handleUserChange = (e) => {
    setSelectedUserId(Number(e.target.value));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 font-sans">
      <h1 className="text-center text-3xl font-bold text-gray-800 mb-8">
        User Profile & Posts
      </h1>

      {/* SELECT USER */}
      <div className="flex justify-center items-center gap-4 mb-8">
        <label className="text-lg font-medium text-gray-700">
          Select User ID:
        </label>

        <select
          value={selectedUserId}
          onChange={handleUserChange}
          className="px-4 py-2 border-2 border-gray-300 rounded-lg bg-white"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((id) => (
            <option key={id} value={id}>
              User {id}
            </option>
          ))}
        </select>
      </div>

      {/* LOADING */}
      {loading && (
        <p className="text-center text-gray-600">Loading user data...</p>
      )}

      {/* ERROR */}
      {error && (
        <p className="text-center text-red-600">Error: {error}</p>
      )}

      {/* USER + POSTS */}
      {!loading && !error && user && (
        <>
          {/* USER CARD */}
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-4">{user.name}</h2>

            <p><b>Username:</b> {user.username}</p>
            <p><b>Email:</b> {user.email}</p>
            <p><b>Phone:</b> {user.phone}</p>
            <p><b>Website:</b> {user.website}</p>
            <p><b>City:</b> {user.address?.city}</p>
            <p><b>Company:</b> {user.company?.name}</p>
          </div>

          {/* POSTS */}
          <div>
            <h2 className="text-xl font-bold mb-4">
              Posts ({posts.length})
            </h2>

            {posts.length === 0 ? (
              <p className="text-gray-600 text-center">
                No posts found
              </p>
            ) : (
              posts.map((post) => (
                <div
                  key={post.id}
                  className="border p-4 mb-3 rounded-lg bg-white"
                >
                  <h3 className="font-bold capitalize">{post.title}</h3>
                  <p className="text-gray-600">{post.body}</p>
                </div>
              ))
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default UserProfileDemo;