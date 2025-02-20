import { useState, useEffect } from "react";
import axios from "axios";
import { FaUser, FaTrash } from "react-icons/fa";

const AllUser = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("https://tekisky-backend.onrender.com/user/getUsers");
      setUsers(response.data);
      setFilteredUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = users.filter(
      (user) =>
        user.firstName.toLowerCase().includes(query) ||
        user.mobileNumber.includes(query) ||
        user.role.toLowerCase().includes(query)
    );
    setFilteredUsers(filtered);
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <button className="bg-blue-600 text-white px-4 py-2 rounded mb-4">
        Create User
      </button>

      <input
        type="text"
        placeholder="Search By First Name, Mobile Number, Or Role"
        className="border p-2 rounded w-full md:w-1/2 mb-4"
        value={searchQuery}
        onChange={handleSearch}
      />

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="border p-2">First Name</th>
              <th className="border p-2">Last Name</th>
              <th className="border p-2">Mobile Number</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Role</th>
              <th className="border p-2">Shop Category</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="border p-2">{user.firstName}</td>
                  <td className="border p-2">{user.lastName}</td>
                  <td className="border p-2">{user.mobileNumber}</td>
                  <td className="border p-2">{user.email}</td>
                  <td className="border p-2">{user.role}</td>
                  <td className="border p-2">{user.shopCategory || "N/A"}</td>
                  <td className="border p-2 flex gap-2">
                    <button className="bg-blue-500 text-white p-2 rounded">
                      <FaUser />
                    </button>
                    <button className="bg-red-500 text-white p-2 rounded">
                      <FaTrash />
                    </button>
                    <button className="bg-blue-600 text-white px-3 py-1 rounded">
                      Change Password
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="border p-2 text-center">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
