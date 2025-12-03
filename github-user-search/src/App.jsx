import { useState } from "react";
import SearchInput from "./components/SearchInput";
import UserCard from "./components/UserCard";
import { searchUsers } from "./services/githubService";

function App() {
  const [users, setUsers] = useState([]);

  const handleSearch = async (query) => {
    const results = await searchUsers(query);
    setUsers(results);
  };

  return (
    <div style={{ maxWidth: 800, margin: "40px auto", padding: "0 20px" }}>
      <h1>GitHub User Search</h1>
      <SearchInput onSearch={handleSearch} />
      <div>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default App;
